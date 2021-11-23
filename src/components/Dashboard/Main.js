import React from 'react'
import './Main.css';
import MainNavbarComponent from '../Navbar/Main'
import SearchSectionComponent from './SearchSectionComponent/SearchSectionComponent';
import MainPlayerInfo from './AllPlayerInfo/Main';
import DAL from '../../services/DAL';
import { useState } from 'react';

const MainDashboardPage = () => {

    const [selectedPlayer, setSelectedPlayer] = useState(DAL.getPlayers()[0]);

    const [comparingPlayers, setComparingPlayers] = useState([DAL.getPlayers()[1],DAL.getPlayers()[2]]);

    return (
        <div>
            <MainNavbarComponent />
            <div class="outSideTheNavDash">
                <SearchSectionComponent setSelectedPlayer={setSelectedPlayer} activePlayer={selectedPlayer}/>
                <div className="playerComponents">
                    <MainPlayerInfo player={selectedPlayer} compareMode={true} comparingPlayers={comparingPlayers}/>
                </div>
            </div>
        </div>
    )
}

export default MainDashboardPage
