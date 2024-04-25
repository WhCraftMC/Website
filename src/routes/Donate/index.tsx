import './index.scss';
import donateImg from './../../assets/images/docs/donate.png'
import { useState } from 'react';
import useFetchData from './utils/FetchData';
import { useLocation } from 'react-router-dom';
import logo from "../../assets/images/logos/Logo_128x128.png";

function Index() {
  document.title = "我要恰饭 | WhCraft";
  
  const [pagenum, setPagenum] = useState(1);
  const [reloadnum, setReloadnum] = useState(0);
  const [isReloading, setIsReloading] = useState(false);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page = (params.get('page') as unknown as number) | 1;

  let [data, isLoading, isError, totalCount, totalPages] = useFetchData(page, reloadnum, pagenum);

  const handleReload = () => {
    setIsReloading(true);
    setReloadnum(reloadnum + 1);
    setIsReloading(false);
  };

  const element = document.getElementById("afdian_leaflet_{1}");

  if (element) {
    if (document.body.clientWidth < 700) {
      element.style.width = "100%"
    } else {
      element.style.width = "640"
    }
  }

  return (
    <div className="donate">
      <section>
        <h2>捐赠</h2>
        <p>仅接受无条件捐赠</p>
      </section>

      <main>
        <article className="container">
          <div className="br"></div>
          <>
            <div className={"list-table-container" + (!isLoading && !(data.length === 0) && !isError ? " mcui-blackground-wool-dark" : "")}>
              {!isError ? (
                <>
                {!isLoading ? (
                  <>
                    {data.length === 0 ? (
                      <></>
                    ) : (
                      <>
                        <h2>捐赠列表</h2>
                        <p>所有捐赠者, 均为随机排序!</p>
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

          <h2>捐赠</h2>
          <div className="donate-container mcui-blackground-wool-dark">
            <div className="header">
              <img src="https://pic1.afdiancdn.com/user/27f7cea2370d11e8ae8852540025c377/common/88c55fce6c700bcb517e48768479fdce_w5760_h1524_s824.png?imageView2/1/w/1348/h/320" alt=""/>
            </div>

            <div className="bottom">
              <div className="avatar">
                <img src={logo} alt=""/>
              </div>

              <div className="text">
                <div className="name">
                  <span>
                    WhCraftMC
                  </span>
                  <div className="space"/>
                  <div className="button-box">
                    <a href="https://afdian.net/@WhCraftMC" target="_blank" rel="noreferrer" className="button">捐赠</a>
                  </div>
                </div>

                <div className="intro">
                  <div className="text">
                    正在创作 WhCraft —— 小型群组服
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </article>
      </main>
    </div>
  );
}

export default Index;
