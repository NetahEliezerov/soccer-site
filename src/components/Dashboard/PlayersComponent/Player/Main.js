import React from 'react'
import './Main.css';

const MainPlayerComponent = (props) => {
    const customId = props.player.playerInfo.id + '-Id'
    let TheElement = () => <div className="playerListItem">
        <img className="playerListImg" src={props.player.playerInfo.image} />
        <h3 className="playerListName">{props.player.playerInfo.fullName}</h3>
    </div>;

    if(props.player.active) {
        TheElement = () => <div className="playerListItemActive">
        <img className="playerListImg" src={props.player.playerInfo.image} />
        <h3 className="playerListName">{props.player.playerInfo.fullName}</h3>
    </div>;
        // document.getElementById(customId).style.backgroundColor = 'white';
    }
    return (
        <TheElement />
        // <div className="playerListItem" id={customId}>
        //     <img className="playerListImg" src={props.player.playerInfo.image} />
        //     <h3 className="playerListName">{props.player.playerInfo.fullName}</h3>
        // </div>
    )
}

export default MainPlayerComponent
