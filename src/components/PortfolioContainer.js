import React from "react";
import PortfolioCard from '../components/PortfolioCard'

function PortfolioContainer({resumeInfo}) {    
    const renderPortfolio = () => resumeInfo.portfolio.map(
        project => <PortfolioCard
            key={project.id}
            project={project}
        />
    )

    return (
        <div id="portfolio-container">
            {renderPortfolio()}
        </div>
    )
}

export default PortfolioContainer;