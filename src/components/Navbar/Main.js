import React from 'react'
import './Main.css';

const pages = [
    {
        nameOfPage: "Statistics",
        icon: `${process.env.PUBLIC_URL}/assets/statistics.svg`,
        url: '#statistics',
        isSelected: true
    },
    {
        nameOfPage: "Events",
        icon: `${process.env.PUBLIC_URL}/assets/events.svg`,
        url: '#events'
    }
]

function MainNavbarComponent() {
    return (
        <ul className="Nav">
            <li>
                <div className="userIcon">F</div>
            </li>
            {pages.map((page) => <li>
                <button onClick={() => window.location.href = page.url} className={`navbarButton ${page.isSelected ? "activeNavbarBtn" : ""}`}>
                    <img src={page.icon} /><br />
                    <span className="navbarItemTxt">{page.nameOfPage}</span>
                </button>
            </li>)}
        </ul>
    )
}

export default MainNavbarComponent
