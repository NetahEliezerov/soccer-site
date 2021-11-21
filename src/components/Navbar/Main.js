import React from 'react'
import './Main.css';

const pages = [
    {
        nameOfPage: "Statistics",
        icon: './assets/graph.png',
        url: '#statistics'
    },
    {
        nameOfPage: "Events",
        icon: './assets/notification-status.png',
        url: '#events'
    }
]

function MainNavbarComponent() {
    return (
        <div>
            <ul className="Nav">
                {pages.map((page) => <li>
                    <button onClick={() => window.location.href = page.url} className="navbarButton activeNavbarBtn">
                        <img src={page.icon} /><br />
                        <span className="navbarItemTxt">{page.nameOfPage}</span>
                    </button>
                </li>)}
            </ul>
            
        </div>
    )
}

export default MainNavbarComponent
