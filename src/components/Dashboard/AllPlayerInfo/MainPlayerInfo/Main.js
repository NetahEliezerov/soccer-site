import React from 'react';
import countryCodes from '../countryCodes.json';
import './Main.css';

const MainPlayerInfo = (props) => {
    return (
        <div className="mainPlayerInfoComponent">
            <div className="playerTitle">
                <img src={props.info.playerInfo.imageSrc} className="playerLogo" />
                <h1 className="playerName">{props.info.playerInfo.fullName}</h1>
                <img src={`/assets/german.png`} className="countryIconGerman" />
                <img src={`/assets/europe.png`} className="countryIconEurope" />
                <div className="boxOfSomethingIdk"><span className="textOfSomethingIdk">{props.info.playerInfo.shortenedPosition}</span></div>
            </div><br />
                    <p class="dividedPlayerInfo">
                        <span>Date of birth</span>
                        <span class="dividerPlayerInfo"></span>
                        <span>{props.info.playerInfo.dateOfBirth}</span>
                    </p>
                    <p class="dividedPlayerInfo2">
                        <span>Preferred Foot</span>
                        <span class="dividerPlayerInfo2"></span>
                        <span>{props.info.playerInfo.preferredFoot}</span>
                    </p>
                    <p class="dividedPlayerInfo">
                        <span>Place of birth</span>
                        <span class="dividerPlayerInfo"></span>
                        <span>{props.info.playerInfo.placeOfBirth}</span>
                    </p>
                    <p class="dividedPlayerInfo2">
                        <span>Height</span>
                        <span class="dividerPlayerInfo2"></span>
                        <span>{props.info.playerInfo.height}</span>
                    </p>
                    <p class="dividedPlayerInfo">
                        <span>Positions</span>
                        <span class="dividerPlayerInfo"></span>
                        <span>{props.info.playerInfo.positions}</span>
                    </p>
        </div>
    )
}

export default MainPlayerInfo