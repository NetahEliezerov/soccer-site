import './Main.css';
import React, {useState, useEffect} from 'react';
import MainPlayerComponent from './Player/MainPlayerComponent';
import DAL from '../../../services/DAL';


const SearchSectionComponent = (props) => {

    const [inputValue, updateInputValue] = useState("");
    const players = DAL.getPlayers();

    const getFilteredPlayers = () => {
        const filteredPlayers = players.filter(player => player.playerInfo.fullName.toLowerCase().includes(inputValue.toLowerCase()));
        if (inputValue === "") {
            return players;
        } else if (!!filteredPlayers) {
            return filteredPlayers;
        }
    };

    return (
        <div className="mainPlayersComponent">
            <div className="playersTitle">
                <h1 className="playersNavTitle">Players</h1>
                <input className="searchPlayersNav" placeholder="New Search" value={inputValue} onChange={event => updateInputValue(event.target.value)}/>
            </div>
            {
                getFilteredPlayers().map(player => (
                    <MainPlayerComponent player={player} active={player === props.activePlayer} setSelectedPlayer={props.setSelectedPlayer}/>
                ))
            }
        </div>
    )
}

export default SearchSectionComponent