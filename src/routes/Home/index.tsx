import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';
import 'mdui/mdui.css';

import { ReactComponent as Arrow } from "../../assets/images/icons/blunt-arrow-down.svg";
import ss1 from './../../assets/images/misc/s-s-1.png'
import sb1 from './../../assets/images/misc/s-b-1.png'
import sw0 from './../../assets/images/misc/s-w-0.png'
import NCLogo from './../../assets/images/logos/noicon.logo.png';
import AboutImg from './../..//assets/images/misc/about-image.png'

import ButtonText from '../../components/Button';

function index() {
  document.title = "官方网站 | WhCraft";

  const handleScrollDown = () => {
    window.scroll(0, window.innerHeight);
  };

  return (
    <div>
      <>
        <iframe style={{display: "none"}} src="//music.163.com/outchain/player?type=2&id=1887199303&auto=1&height=32"/>
      </>
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
                    &nbsp;&nbsp;这是一个和谐的服务器，提供了稳定流畅的体验，
                    自从2019首次开服以来，我们一直在努力创建一个环境良好的服务器。<br/>
                    &nbsp;&nbsp;我们保证不做影响平衡、破坏公平的行为。欢迎玩家
                    提出意见或者举报违规行为，请大家自觉遵守游戏规则。<br/><br/>
                    <Link className="boldfonts" to="/docs/about">阅读更多</Link>
                  </p>
                  <p className="testimonial-text" id="poem-text"></p>
              </div>
              <div className="col-2">
                <img src={AboutImg} className="about-img" alt="about-img"/>
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
                <h3>更新: 服务器更新至1.20.2</h3>
                <p>2023-12-01 - rumble</p>
                <p>终于修完Bug了，累死了</p>
              </div>
              <div className="news-card">
                <img src="https://www.minecraft.net/content/dam/games/minecraft/screenshots/cow-car.jpg" alt="news-img" className="news-img"/>
                <h3>活动: 圣诞活动</h3>
                <p>2022-06-18 - rumble</p>
                <p>免费称号！确定不看看吗！活动截止2023-12-28</p>
              </div>
              <div className="news-card">
                <img src="https://www.minecraft.net/content/dam/games/badger/screenshots/Spookyfest_carousel.jpg" alt="news-img" className="news-img"/>
                <h3>活动: 苦力怕之年(填充文本)</h3>
                <p>2022-01-10 - 怎么一回事?</p>
                <p>我是填充文本</p>
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
                <h4>性能强劲*</h4>
                <p>服务器采用E5处理器，32G运行内存，尽可能的让您的游戏更加稳定流畅。</p>
              </div>
            </div>

            <div className="items mcui-blackground-wool-dark">
              <h6><i className="mdui-icon material-icons fontsize5">grain</i></h6>
              <div className="text">
                <h4>玩法多样</h4>
                <p>目前已经开放数据包插件生存和插件空岛生存两个服务器。</p>
              </div>
            </div>

            <div className="items mcui-blackground-wool-dark">
              <h6><i className="mdui-icon material-icons fontsize5">games</i></h6>
              <div className="text">
                <h4>跨设备游玩*</h4>
                <p>身边没有电脑？我们支持使用MC基岩版加入服务器，但因存在兼容性问题，强烈建议仅将其作为备用方式。</p>
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
                <h4>玩法多样</h4>
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
              <img src={ss1} className="img" alt="ss1"/>
              <div className="text">
                <h2>插件生存</h2>
                <p>类原版的高版本生存服务器，保留原汁原味玩法，增加了新的玩法<span className="line-through">(有点废肝)</span>，享受养老生活。</p>
                <br/><br/>
                <ButtonText to="https://status.whcraft.top" target="_blank">查看状态</ButtonText>
              </div>
            </div>

            <div className="card mcui-background-wool-light">
              <img src={sb1} className="img" alt="sb1"/>
              <div className="text">
                <h2>空岛生存</h2>
                <p>经典空岛生存服务器，保留原汁原味空岛玩法。<span className="line-through">(也可以叫上基友解锁多人运动)</span></p>
                <br/><br/>
                <ButtonText disabled to="#" target="_blank">正在开发</ButtonText>
              </div>
            </div>

            <div className="card mcui-background-wool-light">
              <img src={sw0} className="img" alt="sw0"/>
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