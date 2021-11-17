import React from 'react'
import './Main.css';

const pages = [
    {
        nameOfPage: "Statistics",
        icon: '/assets/graph.png',
        url: '/statistics'
    }
]

function MainNavbarComponent() {
    return (
        <div>
            <ul className="Nav">
                {pages.map((page) => <li>
                    <button className="navbarButton activeNavbarBtn">
                        <img src={page.icon} /><br /><br />
                        {page.nameOfPage}
                    </button>
                </li>)}
            </ul>
            
        </div>
    )
}

export default MainNavbarComponent
