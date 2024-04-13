import React, { useState } from 'react';
import useFetchData from '../../utils/FetchData';
import { RawText, formattedTime, setLength } from '../../utils/TextTools';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import ButtonText from '../../../../components/Button';

interface DataTableProps {
  page: string|undefined;
}

function getName(page: string|undefined) {
if (page === 'warns') {
    return '警告';
  }
  if (page === 'mutes') {
    return '禁言';
  }
  return '封禁';
}

function getType(page: string|undefined) {
  if (page === 'warns') {
    return 'warns';
  }
  if (page === 'mutes') {
    return 'mutes';
  }
  return 'bans';
}

function DataTable(props: DataTableProps) {
  const navigate = useNavigate();
  const [pagenum, setPagenum] = useState(1);
  const [reloadnum, setReloadnum] = useState(0);
  const [isReloading, setIsReloading] = useState(false);

  let [data, isLoading, isError, totalCount, totalPages] = useFetchData(props.page, reloadnum, pagenum);

  const handleClick = (id: string, page?: string) => {
    if (page!==null || page!==undefined) {
      navigate(`/punish?page=${page}&id=${id}`);
      return;
    }
    navigate(`/punish?page=mutes&id=${id}`);
  };

  const handleReload = () => {
    setIsReloading(true);
    setReloadnum(reloadnum + 1);
    setIsReloading(false);
  };

  return (
    <>
      {!isError && !isLoading && (
        <div className="buttons">
          <ButtonText to="/punish?page=bans" className="child">封禁列表</ButtonText>
          <ButtonText to="/punish?page=warns" className="child">警告列表</ButtonText>
          <ButtonText to="/punish?page=mutes" className="child">禁言列表</ButtonText>
        </div>
      )}
      <div className={"list-table-container" + (!isLoading && !(data.length === 0) && !isError ? " mcui-blackground-wool-dark" : "")}>
        {!isError ? (
          <>
          {!isLoading ? (
            <>
              {data.length === 0 ? (
                <>
                  <h2>空空如也</h2>
                </>
              ) : (
                <>
                  <div className="tables">
                    <table>
                      <thead>
                        <tr>
                          <th>{getName(props.page)}ID</th>
                          <th>游戏ID</th>
                          <th>操作者</th>
                          <th>原因</th>
                          <th>日期</th>
                          <th>失效日期</th>
                          <th>生效服务器</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item) => (
                          <tr key={item.id} onClick={() => handleClick(`${item.id}`, getType(props.page))}>
                            <td>
                              {item.id}
                            </td>
                            <td>
                              <p>
                                <img src={getFace(item.uuid)} alt="faces" className="faces"/><br/>
                                {item.name}
                              </p>
                            </td>
                            <td>
                              <p>
                                <img src={getFace(item.uuid)} alt="byfaces" className="faces"/><br/>
                                {item.banned_by_name }
                              </p>
                            </td>
                            <td>{setLength(RawText(item.reason), 10)}</td>
                            <td>{formattedTime(item.time, false)}</td>
                            <td>{formattedTime(item.until, true)}</td>
                            <td>{item.server_scope}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="table_footer">
                    <button className={"btn_round" + (pagenum===totalPages ? ' disabled' : '')} onClick={() => setPagenum(pagenum+1)} disabled={pagenum===totalPages}><i className="mdui-icon material-icons"></i></button>
                    <button className={"btn_round" + (pagenum===1 ? ' disabled' : '')} onClick={() => setPagenum(pagenum-1)} disabled={pagenum===1}><i className="mdui-icon material-icons"></i></button>
                    <button className={"btn_round" + (isReloading ? 'disabled' : '')} onClick={handleReload} title={`刷新次数: ${reloadnum}`} disabled={isReloading}><i className="mdui-icon material-icons"></i></button>
                    <p className="text">{`${pagenum}-${totalPages} of ${totalCount}`}</p>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <h2>少女祈祷中...</h2>
            </>
          )}
        </>
        ) : (
          <div className="error">
            <i className="mdui-icon material-icons">&#xe000;</i>
            <h1>拉取数据时出现错误</h1>
            <p>请联系开发者</p>
          </div>
        )}
      </div>
    </>
  );
}

function getFace(uuid: string) {
  if (uuid==="CONSOLE") {
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQAAAADskrjOAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAACqjSMyAAAACXBIWXMAAABIAAAASABGyWs+AAAAGUlEQVQI12NgQAUyqARzAwohw/8AmaAUAACL6gT/jmpfkAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNS0wOS0xMFQxNzoxNTo0OSswMjowMBQVjpkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTUtMDktMTBUMTc6MTU6NDkrMDI6MDBlSDYlAAAAAElFTkSuQmCC';
  } else {
    return `https://api.mineatar.io/face/${uuid}`;
  }
}

export default DataTable;
