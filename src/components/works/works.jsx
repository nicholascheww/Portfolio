import React from "react";
import "./styles/work.css"; // New CSS file for individual work styling

const Work = ({ logo, title, jobTitle, description, duration}) => {
    return (
        <div className="work-item">
            <div className="work-logo">
                <img src={logo} alt={`${title} logo`} />
            </div>
            <div className="work-details">
                <h2 className="work-title">{title}</h2>
                <p className="jobTitle">{jobTitle}</p>
                <p className="work-description">{description}</p>
                <p className="duration">{duration}</p>
            </div>
        </div>
    );
};

export default Work;
