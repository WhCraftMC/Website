import './index.scss';
import donateImg from './../../assets/images/docs/donate.png'
import { useState } from 'react';
import useFetchData from './utils/FetchData';

function index() {
  document.title = "我要恰饭 | WhCraft";
  
  const [pagenum, setPagenum] = useState(1);
  const [reloadnum, setReloadnum] = useState(0);
  const [isReloading, setIsReloading] = useState(false);

  const params = new URLSearchParams(location.search);
  const page = (params.get('page') as unknown as number) | 1;

  let [data, isLoading, isError, totalCount, totalPages] = useFetchData(page, reloadnum, pagenum);

  const handleReload = () => {
    setIsReloading(true);
    setReloadnum(reloadnum + 1);
    setIsReloading(false);
  };

  return (
    <div className="donate">
      <section>
        <h2>捐赠</h2>
        <p>仅接受无条件捐赠</p>
      </section>

      <main>
        <article className="container">
          <div className="br"></div>
          <h2>捐赠列表</h2>
          <p>所有捐赠者, 均为随机排序!</p>
          <>
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
                                <th>名称</th>
                                <th>总金额</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data.map((item) => (
                                <tr key={item.user.name}>
                                  <td>
                                    <p>
                                      <img src={item.user.avatar} alt="faces" className="faces"/><br/>
                                      {item.user.name}
                                    </p>
                                  </td>
                                  <td>{item.all_sum_amount}</td>
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
        </article>
      </main>
    </div>
  );
}

export default index;
