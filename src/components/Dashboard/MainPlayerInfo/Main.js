import React from 'react';
import './Main.css';

const MainPlayerInfo = (props) => {

    const displayedKeys = [{key: "dateOfBirth", title: "Date Of Birth"}, {key: "preferredFoot", title: "Preferred Foot"}, {key: "placeOfBirth", title: "Place Of Birth"}, {key: "height", title: "Height"}, {key: "positions", title: "Positions"}];

    return (
        <div className="subComponent mainPlayerInfoDiv">
            <div className="playerTitle">
                <img src={props.info.playerInfo.imageSrc} className="playerLogo" />
                <h1 className="playerName">{props.info.playerInfo.fullName}</h1>
                <img src={`https://flagcdn.com/${props.info.playerInfo.countryCode}.svg`} className="countryIcon" />
                <img src="https://icons.iconarchive.com/icons/wikipedia/flags/512/EU-European-Union-Flag-icon.png" className="countryIcon" />
                <div className="boxOfSomethingIdk"><span className="textOfSomethingIdk">{props.info.playerInfo.shortenedPosition}</span></div>
            </div><br />
            {
                displayedKeys.map(displayedKey => (
                    <p className="dividedPlayerInfo">
                        <span>{displayedKey.title}</span>
                        <span className="dividerPlayerInfo"></span>
                        <span>{props.info.playerInfo[displayedKey.key]}</span>
                    </p>
                ))
            }
        </div>
    )
}

export default MainPlayerInfo