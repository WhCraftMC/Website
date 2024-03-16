import React from 'react';
import useFetchData from '../../utils/FetchData';
import { RawText, formattedTime } from '../../utils/TextTools';
import './index.scss';
import GoBack from '../../../../components/GoBack';

interface DataProps {
  page: string|undefined;
  id: string|undefined;
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

function getEBName(page: string|undefined) {
  if (page === 'warns') {
    return 'Warn';
  }
  if (page === 'mutes') {
    return 'Mute';
  }
  return 'Ban';
}

function DataTable(props: DataProps) {
  const [data, isLoading] = useFetchData(props.page, props.id);

  return (
    <>
      <GoBack/>
      <div className="table-container">
        {isLoading && <p>Loading...</p>}
        {data.length > 0 && props.id !== undefined && props.page !== undefined && !isLoading && (
          <>
              <h2>{getEBName(props.page)} #{props.id}</h2>
              <br/>
              <table>
                  <tbody>
                  {data.map((item) => (
                  <>
                      <tr>
                          <td>{getName(props.page)}ID</td>
                          <td>{ item.id }</td>
                      </tr>
                      <tr>
                          <td>游戏ID</td>
                          <td>
                              <p>
                                  <img src={getFace(item.uuid)} alt="warnfaces" className="faces" /><br />
                                  { item.name }
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td>操作者</td>
                          <td>
                              <p>
                                  <img src={getFace(item.uuid)} alt="warnbyfaces" className="faces" /><br />
                                  { item.banned_by_name }
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td>原因</td>
                          <td>{ RawText(item.reason) }</td>
                      </tr>
                      <tr>
                          <td>日期</td>
                          <td>{ formattedTime(item.time, false) }</td>
                      </tr>
                      <tr>
                          <td>失效日期</td>
                          <td>{ formattedTime(item.until, true) }</td>
                      </tr>
                      <tr>
                          <td>生效服务器</td>
                          <td>{ item.server_scope }</td>
                      </tr>
                      <tr>
                          <td>发起服务器</td>
                          <td>{ item.server_origin }</td>
                      </tr>
                  </>
                  ))}
                  </tbody>
              </table>
          </>
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
