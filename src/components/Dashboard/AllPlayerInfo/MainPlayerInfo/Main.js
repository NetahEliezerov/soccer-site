import React from 'react';
import countryCodes from '../countryCodes.json';
import './Main.css';

const MainPlayerInfo = (props) => {
    const currentCountryCode = countryCodes.find((e) => e[0] === props.info.playerInfo.country);
    console.log(`/assets/4x3/${currentCountryCode[1]}.svg`)
    return (
        <div className="mainPlayerInfoComponent">
            <div className="playerTitle">
                <img src="/assets/eranZehaviExam.jpeg" className="playerLogo" />
                <h1 className="playerName">{props.info.playerInfo.fullName}</h1>
                <img src={`/assets/german.png`} className="countryIconGerman" />
                <img src={`/assets/europe.png`} className="countryIconEurope" />
                <div className="boxOfSomethingIdk"><span className="textOfSomethingIdk">RW</span></div>
                <br /><br />
                {/* <img src={`/assets/4x3/${currentCountryCode[1]}.svg`} className="countryIcon" /> */}
            </div>
            <div className="playerBasicInfo">
                <div className="firstLine">
                    <h2 className="dateOfBirth">Date of birth</h2>
                    <h2 className="height">Height</h2>
                    <h2 className="dateOfBirth">Place of birth</h2>
                    <h2 className="positionsBasic">Positions</h2>
                </div>
                <div className="secondLine">
                        <h2 className="dateOfBirth">Height</h2>
                        <h2 className="preffe">Preferred Foot</h2>
                </div>
            </div>
        </div>
    )
}

export default MainPlayerInfo