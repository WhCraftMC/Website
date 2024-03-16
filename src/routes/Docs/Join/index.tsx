import { Link } from 'react-router-dom';
import './index.scss';

function index() {
  document.title = "如何加入 | WhCraft";

  return (
    <div className="join">
		<section>
			<h2>如何加入服务器</h2>
            <p>本章讲述了如何游玩服务器。</p>
		</section>

		<main>
			<article className="container">
                <h1>注意</h1>
                <p>游玩本服务器要求您阅读并了解了<Link to="/docs/eula" target="_blank" rel="noreferrer">我们的Eula</Link></p>
                <h1>开始之前</h1>
                <p>本章节需要你有一定的电脑/手机基础，并且对其有完全的控制权。</p>
                <p>请准备：</p>
                <li>一台可用的电脑或可用的Android手机。</li>
                <li>可用且通畅的网络。</li>
                <li>对于电脑端: 一个可用的启动器。</li>
                <li>对于手机端: 一个可用的符合 要求 的客户端。</li>
                <br/>
                <h1>电脑端</h1>
                <p>你可以使用任意启动器启动国际Java，如PCL、HCML、BakaXL等，本篇使用HCML作为举例。</p>
                <h2>添加服务器</h2>
                <p>参考以下视频，由于一些原因，服主无法使用官网地址访问服务器，实际效果参考下图。</p>
                <video controls>
                    <source src="https://server.whcraft.top:9403/uploads/1706187418111-Maxwell%20Cat.mp4" type="video/mp4"/>
                    您的浏览器不支持 video 属性。
                </video>

                <h1>手机端</h1>
                手机端(即基岩)，可以直接加入服务器。
                <h2>添加服务器</h2>
                <p>参考以下视频，由于一些原因，服主无法使用官网地址访问服务器，实际效果参考下图。</p>
                <video controls>
                <source src="https://server.whcraft.top:9403/uploads/1706187418111-Maxwell%20Cat.mp4" type="video/mp4"/>
                您的浏览器不支持 video 属性。
                </video>
			</article>
		</main>
	</div>
  );
}

export default index;
