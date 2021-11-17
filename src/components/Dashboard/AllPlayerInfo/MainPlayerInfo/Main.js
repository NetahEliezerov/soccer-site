import React from 'react';
import countryCodes from '../countryCodes.json';
import './Main.css';

const MainPlayerInfo = (props) => {
    const currentCountryCode = countryCodes.find((e) => e[0] === props.info.playerInfo.country);
    return (
        <div className="mainPlayerInfoComponent">
            <div className="playerTitle">
                <img src="/assets/eranZehaviExam.jpeg" className="playerLogo" />
                <h1 className="playerName">{props.info.playerInfo.fullName}</h1>
                <img src={`https://flagcdn.com/256x192/${currentCountryCode[1]}.png`} className="countryIcon" />
            </div>
        </div>
    )
}

export default MainPlayerInfo