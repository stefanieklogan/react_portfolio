import React from "react";
import './style.css';
import PortfolioCard from "../PortfolioCard";

const portfolioData = [
    {
        thumbnail: "./images/park.jpg",
        alt: "national park",
        href: "https://guie01.github.io/Project-W7-Group-5/",
        description: "Start planning your next outdoor adventure with us!",
        title: "National Parks Adventure"
    },
    {
        thumbnail: "./images/crypto.JPG",
        alt: "crypto coins",
        href: "https://radiant-ocean-90430.herokuapp.com/",
        description: "Calling all crypto currency fans!",
        title: "Crypto Chat"
    },
    {
        thumbnail: "./images/directory.png",
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
        thumbnail: "./images/money.JPG",
        alt: "cash money",
        href: "https://pure-peak-80351.herokuapp.com/",
        description: "Finances at your fingertips - online & offline",
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