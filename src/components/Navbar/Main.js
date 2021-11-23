import React from 'react'
import './Main.css';

const pages = [
    {
        nameOfPage: "Statistics",
        icon: './assets/statistics.svg',
        url: '#statistics',
        isSelected: true
    },
    {
        nameOfPage: "Events",
        icon: './assets/events.svg',
        url: '#events'
    }
]

function MainNavbarComponent() {
    return (
        <div>
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

        </div>
    )
}

export default MainNavbarComponent
