import "./index.scss";

const Navbar = () => {
  const year = "2019"
  const copym = "WhCraftMC"
  const ICPURL = "https://icp.gov.moe/?keyword=20240990";
  const ICP = "萌ICP备20240990号";

  return (
    <footer className="footer mcui-blackground-wool-dark">
	    <div>
		    <p className="copyright">Copyright&nbsp;&copy;&nbsp;{year}&nbsp;-&nbsp;{new Date().getFullYear()}&nbsp;{copym}</p>
        <a className="icp" href={ICPURL} target="_blank" rel="noreferrer">{ICP}</a>
	    </div>
    </footer>
  );
};

export default Navbar;