import React from "react";
import './style.css';
import PortfolioCard from "../PortfolioCard";

const portfolioData = [
    {
        thumbnail: "https://stefanieklogan.github.io/react_portfolio/images/park.jpg",
        alt: "national park",
        href: "https://guie01.github.io/Project-W7-Group-5/",
        description: "Start planning your next outdoor adventure with us!",
        title: "National Parks Adventure"
    },
    {
        thumbnail: "https://github.com/stefanieklogan/react_portfolio/blob/master/public/images/directory.jpg",
        alt: "employees",
        href: "https://stefanieklogan.github.io/react_employee_directory/",
        description: "Employee management and contact information",
        title: "React Employee Directory"
    },
     {
        thumbnail: "./images/fitness.png",
        alt: "heart rate",
        href: "https://blooming-chamber-74383.herokuapp.com/",
        description: "Keep your body working until you go to sleep",
        title: "Fitness Tracker"
    },
    {
        thumbnail: "./images/dayplanner.jpg",
        alt: "day planner",
        href: "https://stefanieklogan.github.io/Homework5DayPlanner/",
        description: "Keep track of your day",
        title: "Day Planner"
    },
    {
        thumbnail: "./images/crypto.JPG",
        alt: "crypto coins",
        href: "https://radiant-ocean-90430.herokuapp.com/",
        description: "Calling all crypto currency fans!",
        title: "Crypto Chat"
    },
    {
        thumbnail: "./images/money.JPG",
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
                            <div className="col-6">

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