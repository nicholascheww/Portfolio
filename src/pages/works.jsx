import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
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
                <title>{`Works | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description || "Default description"} />
                <meta name="keywords" content={(currentSEO.keywords || []).join(", ")} />
            </Helmet>

			<div className="page-content">
				<NavBar active="works" />
				<div className="content-wrapper">
					<div className="works-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
                    <div className="works-container">
						<div className="title works-title">
                            My work Experiences
						</div>

						<div className="subtitle projects-subtitle">
                            Explore my work experience in various roles, including my part-time jobs.
						</div>

                        <AllWorks />
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Works;

