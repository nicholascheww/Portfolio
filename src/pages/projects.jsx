import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
					rel="stylesheet"
				/>
			</Helmet>

			<div className="pj">
				{/* ── Nav ── */}
				<nav className="pj-nav">
					<Link to="/" className="pj-nav-logo">
						{INFO.main.initials ?? "YN"}
					</Link>
					<ul className="pj-nav-links">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/projects" className="active">Projects</Link></li>
						<li><Link to="/works">Experience</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</nav>

				{/* ── Page header ── */}
				<div className="pj-header">
					<h1 className="pj-title">Projects</h1>
					<p className="pj-subtitle">
						A collection of things I've built during my studies and beyond.
					</p>
				</div>

				{/* ── Project list ── */}
				<div className="pj-list">
					<AllProjects />
				</div>

				{/* ── Footer ── */}
				<footer className="pj-footer">
					<span className="pj-footer-copy">
						© {new Date().getFullYear()} {INFO.main.name}
					</span>
					<div className="pj-footer-links">
						<Link to="/works" className="pj-footer-link">Experience</Link>
						<Link to="/contact" className="pj-footer-link">Contact</Link>
					</div>
				</footer>
			</div>
		</React.Fragment>
	);
};

export default Projects;


