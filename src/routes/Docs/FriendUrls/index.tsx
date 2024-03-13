import './index.scss';
import ButtonText from "../../../components/Button";

function index() {
  return (
    <div className="friends">
		<section>
			<h2>友情链接</h2>
            <p>本站的友情链接</p>
		</section>

		<main>
			<article className="container">
                <div>
                    <h1>机械世纪</h1>
                    <p></p>
                    <ButtonText type="link" to="https://www.wybserver.link" target="_blank" rel="noreferrer">点击访问</ButtonText>
                </div>
			</article>
		</main>
	</div>
  );
}

export default index;
