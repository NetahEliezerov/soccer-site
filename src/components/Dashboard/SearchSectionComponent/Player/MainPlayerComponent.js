import React from 'react'
import './Main.css';

const MainPlayerComponent = (props) => {

    const selectedPlayer = () => {
        props.setSelectedPlayer(props.player);
    }

    return (
        <div onClick={selectedPlayer} className={props.active ? "playerListItemActive" : "playerListItem"}>
            <img className="playerListImg" src={props.player.playerInfo.imageSrc} />
            <h3 className={`playerListName ${props.active ? "text-active" : "text-non-active"}`}>{props.player.playerInfo.fullName}</h3>
        </div>
    )
}

export default MainPlayerComponent
