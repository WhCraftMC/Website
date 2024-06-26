import React, { useState } from 'react';
import useFetchData from '../../utils/FetchData';
import './index.scss';

function DataTable() {
  const [pagenum, setPagenum] = useState(1);
  const [reloadnum, setReloadnum] = useState(0);
  const [isReloading, setIsReloading] = useState(false);

  let [data, isLoading, isError, totalCount, totalPages] = useFetchData(pagenum, reloadnum);

  const handleReload = () => {
    setIsReloading(true);
    setReloadnum(reloadnum + 1);
    setIsReloading(false);
  };

  return (
    <div className={"table-container" + (!isLoading && !(data.length === 0) && !isError ? " mcui-blackground-wool-dark" : "")}>
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
                          <th>排名</th>
                          <th>游戏ID</th>
                          <th>铜币数量</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item) => (
                          <tr key={item.rank}>
                            <td>
                              {item.rank}
                            </td>
                            <td>
                              <p>
                                <img src={getFace(item.uuid)} alt="faces" className="faces"/><br/>
                                {item.nickname}
                              </p>
                            </td>
                            <td>
                              <p>
                                {item.balance_data}
                              </p>
                            </td>
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