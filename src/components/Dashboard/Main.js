import React from 'react'
import './Main.css';
import MainNavbarComponent from '../Navbar/Main'
import SearchSectionComponent from './SearchSectionComponent/SearchSectionComponent';
import MainPlayerInfo from './AllPlayerInfo/Main';
import DAL from '../../services/DAL';
import { useState } from 'react';
import { Grid } from '@mui/material';

const MainDashboardPage = () => {

    const [selectedPlayer, setSelectedPlayerPrivate] = useState(DAL.getPlayers()[0]);

    const [comparingPlayers, setComparingPlayers] = useState([]);

    const addPlayerToComparison = (player) => {
        setComparingPlayers([...comparingPlayers, player]);
    }

    const removePlayerFromComparison = (player) => {
        setComparingPlayers(comparingPlayers.filter(cp => cp !== player));
    }

    const getComparingPlayers = () => [selectedPlayer, ...comparingPlayers];

    const setSelectedPlayer = (player) => {
        setComparingPlayers([]);
        setSelectedPlayerPrivate(player);
    }

    return (
        <Grid container spacing={0} className="full-height">
            <Grid item xs={0.7}>
                <MainNavbarComponent />
            </Grid>
            <Grid item xs={1.8}>
                <SearchSectionComponent setSelectedPlayer={setSelectedPlayer} activePlayer={selectedPlayer}/>
            </Grid>
            <Grid item xs={0.2}>
            </Grid>
            <Grid item xs={9.1}>
                    <MainPlayerInfo player={selectedPlayer} addPlayerToComparison={addPlayerToComparison} removePlayerFromComparison={removePlayerFromComparison} compareMode={getComparingPlayers().length > 1} comparingPlayers={getComparingPlayers()}/>
            </Grid>
            <Grid item xs={0.2}></Grid>
        </Grid>
    )
}

export default MainDashboardPage
