import React, { useState } from 'react';
import useFetchData from '../../utils/FetchData';
import { RawText, formattedTime, setLength } from '../../utils/TextTools';
import './index.scss';
import { useNavigate } from 'react-router-dom';

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

  let [data, isLoading, totalCount, totalPages] = useFetchData(props.page, pagenum);

  const handleClick = (id: string, page?: string) => {
    if (page!==null || page!==undefined) {
      navigate(`/punish?page=${page}&id=${id}`);
      return;
    }
    navigate(`/punish?page=mutes&id=${id}`);
  };

  return (
    <div className={"table-container" + (!isLoading ? " mcui-blackground-wool-dark" : "")}>
      <>
        {!isLoading ? (
          <>
            {data.length === 0 ? (
              <>
                <h2>空空如也</h2>
              </>
            ) : (
              <>
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
                <div className="table_footer">
                  <button className={"btn_round" + (pagenum===totalPages ? ' disabled' : '')} onClick={() => setPagenum(pagenum+1)} disabled={pagenum===totalPages}><i className="mdui-icon material-icons">&#xe315;</i></button>
                  <button className={"btn_round" + (pagenum===1 ? ' disabled' : '')} onClick={() => setPagenum(pagenum-1)} disabled={pagenum===1}><i className="mdui-icon material-icons">&#xe314;</i></button>
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
    </div>
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
