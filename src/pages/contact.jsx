import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
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

			<div className="ct">
				{/* ── Nav ── */}
				<nav className="ct-nav">
					<Link to="/" className="ct-nav-logo">
						{INFO.main.initials ?? "YN"}
					</Link>
					<ul className="ct-nav-links">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/projects">Projects</Link></li>
						<li><Link to="/works">Experience</Link></li>
						<li><Link to="/contact" className="active">Contact</Link></li>
					</ul>
				</nav>

				{/* ── Split layout ── */}
				<div className="ct-body">
					{/* Left — heading + blurb */}
					<div className="ct-left">
						<p className="ct-eyebrow">Contact</p>
						<h1 className="ct-title">Let's get<br /><em>in touch.</em></h1>
						<p className="ct-desc">
							Have a question, opportunity, or just want to say hi?
							I'll do my best to get back to you within 24 hours.
						</p>
					</div>

					{/* Right — contact options */}
					<div className="ct-right">
						<div className="ct-item">
							<span className="ct-item-label">Email</span>
							<a href={`mailto:${INFO.main.email}`} className="ct-item-value">
								{INFO.main.email}
							</a>
						</div>

						<div className="ct-item">
							<span className="ct-item-label">GitHub</span>
							<a href={INFO.socials.github} target="_blank" rel="noreferrer" className="ct-item-value">
								{INFO.socials.github.replace("https://", "")}
							</a>
						</div>

						<div className="ct-item">
							<span className="ct-item-label">LinkedIn</span>
							<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer" className="ct-item-value">
								linkedin.com/in/nicholas-chew
							</a>
						</div>
					</div>
				</div>

				{/* ── Footer ── */}
				<footer className="ct-footer">
					<span className="ct-footer-copy">
						© {new Date().getFullYear()} {INFO.main.name}
					</span>
					<div className="ct-footer-links">
						<Link to="/" className="ct-footer-link">Home</Link>
						<Link to="/projects" className="ct-footer-link">Projects</Link>
						<Link to="/works" className="ct-footer-link">Experience</Link>
						<Link to="/contact" className="ct-footer-link">Contact</Link>
					</div>
				</footer>
			</div>
		</React.Fragment>
	);
};

export default Contact;