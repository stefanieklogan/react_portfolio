import React from "react";
import './style.css';
import PortfolioCard from "../PortfolioCard";

const portfolioData = [
    {
        thumbnail: "https://github.com/stefanieklogan/react_portfolio/blob/master/public/images/park.jpg?raw=true",
        alt: "national park",
        href: "https://guie01.github.io/Project-W7-Group-5/",
        description: "Start planning your next outdoor adventure with us!",
        title: "National Parks Adventure"
    },
    {
        thumbnail: "https://github.com/stefanieklogan/react_portfolio/blob/master/public/images/directory.jpg?raw=true",
        alt: "employees",
        href: "https://stefanieklogan.github.io/react_employee_directory/",
        description: "Employee management and contact information",
        title: "React Employee Directory"
    },
     {
        thumbnail: "https://github.com/stefanieklogan/react_portfolio/blob/master/public/images/fitness.png?raw=true",
        alt: "heart rate",
        href: "https://blooming-chamber-74383.herokuapp.com/",
        description: "Keep your body working until you go to sleep",
        title: "Fitness Tracker"
    },
    {
        thumbnail: "https://github.com/stefanieklogan/react_portfolio/blob/master/public/images/dayplanner.JPG?raw=true",
        alt: "day planner",
        href: "https://stefanieklogan.github.io/Homework5DayPlanner/",
        description: "Keep track of your day",
        title: "Day Planner"
    },
    {
        thumbnail: "https://github.com/stefanieklogan/react_portfolio/blob/master/public/images/crypto.JPG?raw=true",
        alt: "crypto coins",
        href: "https://radiant-ocean-90430.herokuapp.com/",
        description: "Calling all crypto currency fans!",
        title: "Crypto Chat"
    },
    {
        thumbnail: "https://github.com/stefanieklogan/react_portfolio/blob/master/public/images/money.jpg?raw=true",
        alt: "cash money",
        href: "https://pure-peak-80351.herokuapp.com/",
        description: "Finances at your fingertips",
        title: "Budget Tracker"
    }
]

function Portfolio() {
    return (
        <main>

            <div className="container-fluid">
                <div className="row">
                    {portfolioData.map((item) => (
                        <div className="card-body">
                            <div className="col-4">

                                <PortfolioCard project={item} />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </main>
    )
}

export default Portfolio