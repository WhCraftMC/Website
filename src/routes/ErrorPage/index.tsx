import { useRouteError } from "react-router-dom";
import './index.scss';
import ButtonText from "../../components/Button";

function ErrorPage() {
  const error: any = useRouteError();
  document.title = "页面异常 | WhCraft";

  return (
    <div className="NotFound-container">
      <h2>OOPS!</h2>
      <p>页面被吃掉啦！</p>
      <p>
        <i>
        {error.statusText || error.message}  
        </i>
      </p>
      <ButtonText to="/">返回首页</ButtonText>
    </div>
  );
}

export default ErrorPage;
