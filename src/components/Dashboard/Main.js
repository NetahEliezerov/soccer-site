import React from 'react'
import './Main.css';
import MainNavbarComponent from '../Navbar/Main'
import SearchSectionComponent from './SearchSectionComponent/SearchSectionComponent';
import MainPlayerInfo from './AllPlayerInfo/Main';
import DAL from '../../services/DAL';
import { useState } from 'react';

const MainDashboardPage = () => {

    const [selectedPlayer, setSelectedPlayerPrivate] = useState(DAL.getPlayers()[0]);

    const [comparingPlayers, setComparingPlayers] = useState([]);

    const addPlayerToComparison = (player) => {
        setComparingPlayers([...comparingPlayers, player]);
    }

    const removePlayerFromComparison = (player) => {
        console.log(comparingPlayers, player);
        setComparingPlayers(comparingPlayers.filter(cp => cp !== player));
    }

    const getComparingPlayers = () => [selectedPlayer, ...comparingPlayers];

    const setSelectedPlayer = (player) => {
        setComparingPlayers([]);
        setSelectedPlayerPrivate(player);
    }

    return (
        <div>
            <MainNavbarComponent />
            <div class="outSideTheNavDash">
                <SearchSectionComponent setSelectedPlayer={setSelectedPlayer} activePlayer={selectedPlayer}/>
                <div className="playerComponents">
                    <MainPlayerInfo player={selectedPlayer} addPlayerToComparison={addPlayerToComparison} removePlayerFromComparison={removePlayerFromComparison} compareMode={getComparingPlayers().length > 1} comparingPlayers={getComparingPlayers()}/>
                </div>
            </div>
        </div>
    )
}

export default MainDashboardPage
