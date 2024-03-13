import './index.scss';
import donateImg from './../../../assets/images/docs/donate.png'

function index() {
  return (
    <div className="donate">
		<section>
			<h2>捐赠</h2>
            <p>仅接受无条件捐赠</p>
		</section>

		<main>
			<article className="container">
                <div className="br"></div>
                <h2>仅接受无条件捐赠</h2>
                <img src={donateImg} alt="donateImg"/>
			</article>
        </main>
    </div>
  );
}

export default index;
