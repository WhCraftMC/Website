import { FC, useEffect, useRef } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

interface ISideNavbar {
  isOpen: boolean;
  closeNav: () => void;
  onClose: (el?: any) => void;
}

const SideNavbar: FC<ISideNavbar> = ({ isOpen, onClose, closeNav }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      isOpen &&
        ref.current !== null &&
        !ref.current.contains(e.target) &&
        closeNav();
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, closeNav]);

  return (
    <div className={"sidebar" + (isOpen ? " open" : "")} ref={ref}>
      <div className="container">
        <nav>
        <h1><i className="mdui-icon material-icons"></i>&nbsp;站内链接</h1>
            <li>
              <Link to="/" className="linkto" reloadDocument>
                <i className="mdui-icon material-icons"></i>
                &nbsp;首页
              </Link>
            </li>
            <li>
              <Link to="/tops" className="linkto" reloadDocument>
              <i className="mdui-icon material-icons"></i>
                &nbsp;排行榜
              </Link>
            </li>
            <li>
              <Link to="/punish" className="linkto" reloadDocument>
                <i className="mdui-icon material-icons"></i>
                &nbsp;处罚
              </Link>
            </li>
            <li>
              <a className="linkto" href="https://status.whcraft.top" target="_blank" rel="noreferrer">
                <i className="mdui-icon material-icons"></i>
                &nbsp;服务状态
              </a>
            </li>
            <h2>
              <i className="mdui-icon material-icons"></i>
              &nbsp;&nbsp;文档
            </h2>
            <li>
              <Link to="/docs/about" className="linkto" reloadDocument>
                <i className="mdui-icon material-icons"></i>
                &nbsp;关于
              </Link>
            </li>
            <li>
              <Link to="/docs/join" className="linkto" reloadDocument>
                <i className="mdui-icon material-icons"></i>
                &nbsp;如何加入服务器
              </Link>
            </li>
            <h2>
              <i className="mdui-icon material-icons"></i>
              &nbsp;&nbsp;其他
            </h2>
            <li>
              <Link to="/docs/donate" className="linkto" reloadDocument>
                <i className="mdui-icon material-icons"></i>
                &nbsp;捐赠
              </Link>
            </li>
            <li>
              <a className="linkto" href="https://bug.whcraft.top" target="_blank" rel="noreferrer">
                <i className="mdui-icon material-icons"></i>
                &nbsp;BUG反馈(施工中)
              </a>
            </li>
            <h1>
              <i className="mdui-icon material-icons"></i>
              &nbsp;站外链接
            </h1>
            <li>
              <a className="linkto" href="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=LKGqhY1rbN-sBSEXD1KI4QEdgDZhqDxj&authKey=KqSa1W1IXnLIUV7dtKJopzYIrLyWryrsfYVMmZkoZlBpu5x%2BwztyHf1oLyQO6jP8&noverify=0&group_code=703062404" target="_blank" rel="noreferrer">
                <i className="mdui-icon material-icons"></i>
                &nbsp;加入QQ群
              </a>
            </li>
            <li>
              <a className="linkto" href="https://github.com/WhCraftMC" target="_blank" rel="noreferrer">
                <i className="mdui-icon material-icons"></i>
                &nbsp;Github
              </a>
            </li>
        </nav>
      </div>
    </div>
  );
};

export default SideNavbar;