import "./Footer.css";

const Footer = () => (
    <footer className="footer">
			<div>
				<a
					href="https://github.com/jenemanuele"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../logo/github.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			 <div>
				<a
					href="https://www.linkedin.com/in/jennifer-emanuele-03a43b1b0//"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../logo/LinkedIn.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div> 
			<div>
				<a
					href="https://www.instagram.com/jen.emanuele.art/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../logo/Instagram.png")}
						alt="Twitter"
						className="logo"
					></img>
				</a>
			</div> 
		</footer>
)

export default Footer;