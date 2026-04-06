import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import INFO from "../data/user";
import SEO from "../data/seo";
import AllProjects from "../components/projects/allProjects";

import "./styles/homepage.css";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
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

			<div className="hp">
				{/* ── Nav ── */}
				<nav className="hp-nav">
					<div className="hp-nav-logo">
						{INFO.main.initials ?? "YN"}
					</div>
					<ul className="hp-nav-links">
						<li><Link to="/" className="active">Home</Link></li>
						<li><Link to="/projects">Projects</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</nav>

				{/* ── Hero ── */}
				<div className="hp-hero">
					<div className="hp-hero-left">
						<p className="hp-eyebrow">
							{INFO.main.title}
						</p>

						<h1 className="hp-hero-title">
							{INFO.homepage.title}
						</h1>

						<p className="hp-hero-desc">
							{INFO.homepage.description}
						</p>

						<div className="hp-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
								className="hp-social-link"
							>
								<svg className="hp-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
									<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
								</svg>
								GitHub
							</a>

							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
								className="hp-social-link"
							>
								<svg className="hp-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
									<rect x="2" y="9" width="4" height="12" />
									<circle cx="4" cy="4" r="2" />
								</svg>
								LinkedIn
							</a>

							<a
								href={`mailto:${INFO.main.email}`}
								className="hp-social-link"
							>
								<svg className="hp-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
									<polyline points="22,6 12,13 2,6" />
								</svg>
								Email
							</a>
						</div>
					</div>

					<div className="hp-hero-right">
						<img
							src="homepage.jpg"
							alt={INFO.main.name}
							className="hp-hero-img"
						/>
					</div>
				</div>

				{/* ── Projects ── */}
				<section className="hp-projects">
					<div className="hp-section-header">
						<h2 className="hp-section-title">Selected work</h2>
						<Link to="/projects" className="hp-section-link">
							View all →
						</Link>
					</div>

					<AllProjects />
				</section>

				{/* ── Footer ── */}
				<footer className="hp-footer">
					<span className="hp-footer-copy">
						© {new Date().getFullYear()}
					</span>
					<span className="hp-footer-name">{INFO.main.name}</span>
				</footer>
			</div>
		</React.Fragment>
	);
};

export default Homepage;