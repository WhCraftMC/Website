import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';
import 'mdui/mdui.css';

import { ReactComponent as Arrow } from "../../assets/images/icons/blunt-arrow-down.svg";
import NCLogo from './../../assets/images/logos/noicon.logo.png';

import ButtonText from '../../components/Button';

function index() {
  document.title = "官方网站 | WhCraft";

  const handleScrollDown = () => {
    window.scroll(0, window.innerHeight);
  };

  window.onload = function() {
    const use = setInterval(function() {toggleSound()}, 1000); // 延迟调用
    clearInterval(use); // 跳出循环
  }

  function toggleSound() {
    var music = document.getElementById("adm") as HTMLAudioElement;

    if (music.paused) {
      music.play();
    }
  }

  return (
    <div>
      <audio preload="metadata" controls autoPlay id="adm" style={{display: "none"}}>
        <source src="https://music.163.com/song/media/outer/url?id=1887199303.mp3" type="audio/mpeg" />
      </audio>

      <main className="main-section">
        <img src={NCLogo} alt="logo" className="logo"/>
        <h2>Minecraft 小型群组服</h2>
        <div className="arrow-scroll">
          <Arrow className="arrow-down" onClick={handleScrollDown} />
        </div>
      </main>

      <article className="mcui-blackground-wool-dark">
        <div className="mcui-br-blackground-wool-dark"></div>
        <div className="mcui-br-blackground-wool-dark"></div>  

        <section className="mcui-background-wool-light main-about">
          <div className="woolbgTop mcui-background-trans-to-light"></div>

          <div className="about-container">
            <div className="row">
              <div className="col-1">
                <h2>WhCraft欢迎您</h2>
                  <p>
                    &nbsp;&nbsp;这是一个和谐的服务器，提供了稳定“流畅”的体验，
                    自从2019首次开服以来，我们一直在努力创建一个环境良好的服务器。<br/>
                    &nbsp;&nbsp;我们保证不做影响平衡、破坏公平的行为。欢迎玩家
                    提出意见或者举报违规行为，请大家自觉遵守游戏规则。<br/><br/>
                    <Link className="boldfonts" to="/docs/about">阅读更多</Link>
                  </p>
                  <p className="testimonial-text" id="poem-text"></p>
              </div>
              <div className="col-2">
                <img src="https://imghub.whcraft.top/file/514492958043325585bed.png" className="about-img" alt="about-img"/>
              </div>
          </div>
          </div>

          <div className="woolbgBot mcui-background-trans-to-dark"></div>
        </section>

        <div className="mcui-br-blackground-wool-dark"></div>
        <div className="mcui-br-blackground-wool-dark"></div>

        <section className="news">
          <div className="news-container">
            <div className="heading">
              <h2>最新消息</h2>
            </div>

            <div className="slick-track">
              <div className="news-card">
                <img src="https://www.minecraft.net/content/dam/games/minecraft/screenshots/nautilusshell-car.jpg" alt="news-img" className="news-img"/>
                <h3>更新: 服务器更新至1.21</h3>
                <p>2024-07-22 (rumble)</p>
                <p>终于修完Bug了，累死了</p>
              </div>
              <div className="news-card">
                <img src="https://www.minecraft.net/content/dam/games/minecraft/screenshots/cow-car.jpg" alt="news-img" className="news-img"/>
                <h3>占位符</h3>
                <p>2000-01-01 (rumble)</p>
                <p></p>
              </div>
              <div className="news-card">
                <img src="https://www.minecraft.net/content/dam/games/badger/screenshots/Spookyfest_carousel.jpg" alt="news-img" className="news-img"/>
                <h3>占位符</h3>
                <p>2000-01-01 (rumble)</p>
                <p></p>
              </div>
            </div>
          </div>
        </section>

        <div className="mcui-br-blackground-wool-dark"></div>
        <div className="mcui-br-blackground-wool-dark"></div>

        <section className="mcui-background-wool-light info">
          <div className="woolbgTop mcui-background-trans-to-light"></div>

          <h1>服务器简介</h1><br/><br/>

          <div className="row">
            <div className="items mcui-blackground-wool-dark">
              <h6><i className="mdui-icon material-icons fontsize5">accessible</i></h6>
              <div className="text">
                <h4>性能强劲(Bushi)</h4>
                <p>服务器采用E5处理器，32G运行内存，尽可能的让您的游戏更加<span className="line-through">稳定流畅</span>。</p>
              </div>
            </div>

            <div className="items mcui-blackground-wool-dark">
              <h6><i className="mdui-icon material-icons fontsize5">grain</i></h6>
              <div className="text">
                <h4>玩法特殊</h4>
                <p><span className="line-through">超卡的</span>拥有自制mod包，与众不同。<span className="line-through">(没做完呢)</span>。</p>
              </div>
            </div>

            <div className="items mcui-blackground-wool-dark">
              <h6><i className="mdui-icon material-icons fontsize5">games</i></h6>
              <div className="text">
                <h4>跨设备游玩*</h4>
                <p>身边没有电脑？我们支持使用MC基岩版加入服务器，但因存在兼容性问题，强烈建议仅将其作为备用方式。(不支持mod服哦)</p>
              </div>
            </div>

            <div className="items mcui-blackground-wool-dark">
              <h6><i className="mdui-icon material-icons fontsize5">directions_run</i></h6>
              <div className="text">
                <h4>放牛式管理</h4>
                <p>不禁止刷怪塔、红石农场、密集养殖，仅禁止恶意卡服行为。</p>
              </div>
            </div>

            <div className="items mcui-blackground-wool-dark">
              <h6><i className="mdui-icon material-icons fontsize5">date_range</i></h6>
              <div className="text">
                <h4>不换周目</h4>
                <p>服务器永远也不会更换周目，若遭遇不可抗力需要更换周目，会公开存档下载。</p>
              </div>
            </div>
            
            <div className="items mcui-blackground-wool-dark">
              <h6><i className="mdui-icon material-icons fontsize5">attach_money</i></h6>
              <div className="text">
                <h4>公益免费</h4>
                <p>本服承诺保证公平公正，保证所有玩家的生存体验，绝不会让您充值亿分钱。</p>
              </div>
            </div>

            </div>
          <div className="woolbgBot mcui-background-trans-to-dark"></div>
        </section>

        <div className="mcui-br-blackground-wool-dark"></div>

        <section className="mcui-background-wool-dark server-list">
          <h1>服务器列表</h1>
          <h2>多种玩法提供选择</h2>

          <br/><br/>

          <div className="row">
            <div className="card mcui-background-wool-light">
              <img src="https://imghub.whcraft.top/file/74c23711acfc4adbaf4d6.png" className="img" alt="ss1"/>
              <div className="text">
                <h2>插件生存</h2>
                <p>类原版的高版本生存服务器，保留原汁原味玩法，增加了新的玩法<span className="line-through">(附魔书无限堆叠, 有点废肝)</span>，享受养老生活。</p>
                <br/><br/>
                <ButtonText to="https://status.whcraft.top" target="_blank">查看状态</ButtonText>
              </div>
            </div>

            <div className="card mcui-background-wool-light">
              <img src="https://imghub.whcraft.top/file/3716df834c0bf67c4d6c2.png" className="img" alt="sb1"/>
              <div className="text">
                <h2>TuLar - Mod生存</h2>
                <p>Mod有点多，可能略微有点卡。<span className="line-through">(配置要求较高)</span>内存够用就行(6G+)</p>
                <br/><br/>
                <ButtonText disabled to="#" target="_blank">正在开发</ButtonText>
              </div>
            </div>

            <div className="card mcui-background-wool-light">
              <img src="https://imghub.whcraft.top/file/7e97bd5d594d87e13934a.png" className="img" alt="sw0"/>
              <div className="text">
                <h2>？？？</h2>
                <p>没想好做什么。</p>
                <br/><br/>
                <ButtonText to="#" disabled target="_blank">未开服</ButtonText>
              </div>
            </div>
          </div>
        </section>

        <div className="mcui-br-blackground-wool-dark"></div>
      </article>
    </div>
  );
}

export default index;
