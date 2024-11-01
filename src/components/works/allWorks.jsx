import React from "react";
import Work from "./works"; // New Work component for each work item
import INFO from "../../data/user";

import "./styles/allWorks.css"; // New CSS file for styling the works

const AllWorks = () => {
    return (
        <div className="all-works-container">
            {INFO.works.map((work, index) => (
                <div className="all-works-item" key={index}>
                    <Work
                        logo={work.logo}
                        title={work.title}
                        jobTitle={work.jobTitle}
                        description={work.description}
                        duration={work.duration}
                    />
                </div>
            ))}
        </div>
    );
};

export default AllWorks;
