import { Link } from "react-router-dom";
import './index.scss';

function index() {
  document.title = "关于 | WhCraft";

  return (
    <div className="about">
		<section>
			<h2>关于</h2>
            <p>关于我们</p>
		</section>

		<main>
			<article className="container">
                <div className="about">
                    <h1>服务器介绍</h1>
                    <p>我们的服务器是一个完全公益的Minecraft社区，我们坚持无付费内容，仅接受无条件捐赠来维持服务器开销。我们相信每个玩家都应该享受到公平和友善的游戏环境，而不受区别对待。</p>
                    <br/>

                    <h2>服务器特色</h2>
                    <p><span className="boldfonts">无付费内容:</span>我们提供免费的Minecraft游戏体验，没有任何真实付费商城或其他付费内容。每个玩家都从零开始，自行探索、建造和发展。</p>
                    <p><span className="boldfonts">公平竞争:</span>我们重视公平竞争，禁止任何作弊、外挂或不公平行为。我们的管理团队时刻监控服务器，保证每个玩家都能够在公正的环境中竞争和互动。</p>
                    <p><span className="boldfonts">无广告宣传:</span>我们坚决不接受任何广告宣传，并为玩家提供一个清爽和纯粹的游戏体验。我们相信Minecraft本身就是一种乐趣，不需要额外付费的干扰。</p>
                    <p><span className="boldfonts">无条件捐赠:</span>我们仅接受无条件的捐赠来支付服务器的运行和维护费用。这是出于对玩家之间平等和公平的尊重，确保所有人都能够享受到游戏的乐趣。</p>
                    <br/>

                    <h2>加入我们</h2>
                    <p>如果你对公益事业有热情，并渴望在一个纯净、公平和友善的Minecraft社区中畅玩游戏，我们欢迎你加入我们的公益群组服！</p>
                    <p>详细信息请阅读: <Link className="boldfonts" to="/docs/join">如何加入</Link>。</p>
                </div>
                <div className="us"></div>
			</article>
		</main>
	</div>
  );
}

export default index;
