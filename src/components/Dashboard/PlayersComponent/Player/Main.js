import React from 'react'
import './Main.css';

const MainPlayerComponent = (props) => {
    if(!props.active) {
        document.getElementById(props.player.playerInfo.id).style.backgroundColor = 'white';
    }
    return (
        <div className="playerListItem" id={props.player.playerInfo.id}>
            <img className="playerListImg" src={props.player.playerInfo.image} />
            <h3 className="playerListName">{props.player.playerInfo.fullName}</h3>
        </div>
    )
}

export default MainPlayerComponent
