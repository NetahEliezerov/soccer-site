import React from 'react'
import MainNavbarComponent from '../Navbar/Main'
import MainPlayersComponent from './PlayersComponent/Main'
import './Main.css';
import MainPlayerInfo from './AllPlayerInfo/Main';

const MainDashboardPage = () => {
    return (
        <div>
            <MainNavbarComponent />
            <div class="outSideTheNavDash">
                <MainPlayersComponent />
                <div className="playerComponents">
                    <MainPlayerInfo />
                </div>
            </div>
        </div>
    )
}

export default MainDashboardPage
