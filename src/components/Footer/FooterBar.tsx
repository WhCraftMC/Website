import { useEffect, useState } from "react";
import "./index.scss";
import hitokoto from './../../util/getHitokoto';

const Navbar = () => {
  const year = "2019"
  const copym = "WhCraftMC"
  const ICPURL = "https://icp.gov.moe/?keyword=20240990";
  const ICP = "萌ICP备20240990号";

  const [data, isLoading, isError] = hitokoto();

  const [time, setTime] = useState('00天00时00分00秒');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const startTime = new Date('2019-09-01T00:00:00.000Z');
    const duration = currentTime.getTime() - startTime.getTime();

    const dd = String(Math.floor(duration / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hh = String(Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const mm = String(Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const ss = String(Math.floor((duration % (1000 * 60)) / 1000)).padStart(2, '0');

    setTime(`${dd}天${hh}时${mm}分${ss}秒`);
  }, [currentTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer mcui-blackground-wool-dark">
	    <div className="up">
        <div className="left">
          <a href="/">首页</a>
          <a href="/punish">处罚</a>
          <a href="/docs/about">关于</a>
          <a href="/docs/eula">Eula</a>
          <a href="/docs/donate">捐赠</a>
        </div>
        <div className="right"></div>
      </div>
      <hr/>
      <div className="down">
        <div className="left">
          <h2>WhCraftMC</h2>
          <p>Github: <a href="https://github.com/WhCraftMC" target="_blank" rel="noreferrer">WhCraftMC</a></p>
          <p>QQ Group 1: <a href="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=LKGqhY1rbN-sBSEXD1KI4QEdgDZhqDxj&authKey=KqSa1W1IXnLIUV7dtKJopzYIrLyWryrsfYVMmZkoZlBpu5x%2BwztyHf1oLyQO6jP8&noverify=0&group_code=703062404" target="_blank" rel="noreferrer">703062404</a></p>
          <p>QQ Group 2: <a href="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=q5bkMtHW30Lf14vCg85DsnZNuTsyvLbe&authKey=m9DCDxlSCnLH49ntbW7%2Fy0J9GozukRfGBJWoGFdu1pCqo%2BeDyEmhibTPea5zqGuB&noverify=0&group_code=561789232" target="_blank" rel="noreferrer">561789232</a></p>
          <p>EMail: bilirumble@outlook.com</p>
          <p>BiliBili: <a href="https://space.bilibili.com/475403704/" target="_blank" rel="noreferrer">_-rumble-_</a></p>
        </div>
        <div className="right">
          <a className="icp" href={ICPURL} target="_blank" rel="noreferrer">{ICP}</a>
          
          <p className="copyright">&copy;&nbsp;&nbsp;{year}&nbsp;-&nbsp;{new Date().getFullYear()}&nbsp;{copym} Design & Development.</p>
          <p className="copyright-phone">&copy;&nbsp;&nbsp;{year}&nbsp;-&nbsp;{new Date().getFullYear()}&nbsp;{copym}.</p>
          <p className="smallGrayText">WhCraftMC已来到这个世界 {time}</p>
          <p className="smallGrayText">声明：本站与Mojang以及微软公司没有从属关系</p>
          {!isLoading && !isError && !data.hitokoto===undefined && !data.from===undefined && (<p className="smallGrayText hitokoto">{data.hitokoto} - ⌈{data.from}⌋</p>)}
          {isError || data.hitokoto===undefined || data.from===undefined && (<p className="smallGrayText hitokoto">加载一言失败</p>)}
        </div>
      </div>
    </footer>
  );
};

export default Navbar;