import React from 'react';
import countryCodes from '../countryCodes.json';
import './Main.css';

const MainPlayerInfo = (props) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentCountryCode = countryCodes.find((e) => e[0] === props.info.playerInfo.country);
    
    const trueDateOfBirth = `${props.info.playerInfo.dateOfBirth[0]} ${monthNames[props.info.playerInfo.dateOfBirth[1]]} ${props.info.playerInfo.dateOfBirth[2]}`
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
            {/* <div className="playerBasicInfo">
                <div className="firstLine">
                    <h2 className="dateOfBirth describingTextBasic">Date of birth</h2>
                    <div className="middleShapeDate"></div>
                    <h2 className="dateResult">{trueDateOfBirth}</h2>

                    <h2 className="dateOfBirth describingTextBasic">Place of birth</h2>
                    <div className="middleShapePlace"></div>
                    <h2 className="placeResult">{props.info.playerInfo.placeOfBirth}</h2>

                    <h2 className="positionsBasic describingTextBasic">Positions</h2>
                    <div className="middleShapePositions"></div>
                    <h2 className="positionsResult">{props.info.playerInfo.positions}</h2>
                </div>
                <div className="secondLine">
                        <h2 className="dateOfBirth describingTextBasic">Height</h2>
                        <div className="middleShapeHeight"></div>
                        <h2 className="heightResult">{props.info.playerInfo.height}</h2>
                        <h2 className="prefferedFoot describingTextBasic">Preferred Foot</h2>
                        <div className="middleShapeFoot"></div>
                        <h2 className="footResult">{props.info.playerInfo.preferredFoot}</h2>
                </div>
            </div> */}
                    <br /><p class="dividedPlayerInfo">
                        <span>Date of birth</span>
                        <span class="dividerPlayerInfo"></span>
                        <span>{trueDateOfBirth}</span>
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