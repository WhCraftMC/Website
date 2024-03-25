import React, { useState } from 'react';
import useFetchData from '../../utils/FetchData';
import './index.scss';
import { useNavigate } from 'react-router-dom';

function DataTable() {
  const navigate = useNavigate();
  const [pagenum, setPagenum] = useState(1);

  let [data, isLoading, totalCount, totalPages] = useFetchData(pagenum);

  return (
    <div className={"table-container" + (!isLoading && !(data.length === 0) ? " mcui-blackground-wool-dark" : "")}>
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
                      <th>排名</th>
                      <th>游戏ID</th>
                      <th>铜币数量</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.ranking}>
                        <td>
                          {item.ranking}
                        </td>
                        <td>
                          <p>
                            <img src={getFace(item.uuid)} alt="faces" className="faces"/><br/>
                            {item.name}
                          </p>
                        </td>
                        <td>
                          <p>
                            {item.number }
                          </p>
                        </td>
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