import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import AllWorks from "../components/works/allWorks";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/works.css";

const Works = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "works") || {};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Experience | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description || ""} />
				<meta name="keywords" content={(currentSEO.keywords || []).join(", ")} />
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
					rel="stylesheet"
				/>
			</Helmet>

			<div className="wk">
				{/* ── Nav ── */}
				<nav className="wk-nav">
					<Link to="/" className="wk-nav-logo">
						{INFO.main.initials ?? "YN"}
					</Link>
					<ul className="wk-nav-links">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/projects">Projects</Link></li>
						<li><Link to="/works" className="active">Experience</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</nav>

				{/* ── Page header ── */}
				<div className="wk-header">
					<p className="wk-eyebrow">Background</p>
					<h1 className="wk-title">Experience</h1>
					<p className="wk-subtitle">
						Roles I've held and what I've learned along the way.
					</p>
				</div>

				{/* ── Works list ── */}
				<div className="wk-list">
					<AllWorks />
				</div>

				{/* ── Footer ── */}
				<footer className="wk-footer">
					<span className="wk-footer-copy">
						© {new Date().getFullYear()} {INFO.main.name}
					</span>
                    <div className="wk-footer-links">
                        <Link to="/" className="wk-footer-link">Home</Link>
                        <Link to="/projects" className="wk-footer-link">Projects</Link>
                        <Link to="/works" className="wk-footer-link">Experience</Link>
                        <Link to="/contact" className="wk-footer-link">Contact</Link>
                    </div>
				</footer>
			</div>
		</React.Fragment>
	);
};

export default Works;