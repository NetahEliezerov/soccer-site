import React, {useState, useEffect} from 'react';
import './Main.css';
import MainPlayerComponent from './Player/Main';

const players = [{
    "playerInfo": {
        "dateOfBirth": [14, 7, 1995],
        "country": "Germany",
        "city": "Stuttgard",
        "placeOfBirth": "Stuttgard, Germany",
        "mainland": "eu",
        "positions": "Center Forward",
        "height":"190",
        "preferredFoot":"Right",
        "fullName": "Eran Zehavi",
        "image": '/assets/eranZehaviExam.jpeg',
        "id": "12v910n23v12"
    },
    "strengths": [
        {"name": "Key Passes", "level":"Very Strong"},
        {"name": "Finishing", "level":"Strong"}
    ],
    "weaknesses": [
        {"name": "Aerial Duels", "level":"Weak"},
        {"name": "Crossing", "level":"Weak"}
    ],
    "emotions": 80,
    "composure": 50,
    "relationships": [
        {"connection": "Team", "level": 25},
        {"connection": "Coach", "level": 50},
        {"connection": "Management", "level": 25}
    ],
    "active": true
}, {
    "playerInfo": {
        "dateOfBirth": [14, 7, 1995],
        "country": "Germany",
        "city": "Stuttgard",
        "placeOfBirth": "Stuttgard, Germany",
        "mainland": "eu",
        "positions": "Center Forward",
        "height":"190",
        "preferredFoot":"Right",
        "fullName": "Cristiano Ronaldo",
        "image": '/assets/eranZehaviExam.jpeg',
        "id": "m1092v10"
    },
    "strengths": [
        {"name": "Key Passes", "level":"Very Strong"},
        {"name": "Finishing", "level":"Strong"}
    ],
    "weaknesses": [
        {"name": "Aerial Duels", "level":"Weak"},
        {"name": "Crossing", "level":"Weak"}
    ],
    "emotions": 80,
    "composure": 50,
    "relationships": [
        {"connection": "Team", "level": 25},
        {"connection": "Coach", "level": 50},
        {"connection": "Management", "level": 25}
    ],
    "active": false
}]

const MainPlayersComponent = () => {
    const [userSearchValue, setUserSearchValue] = useState('');
    const [newPlayersToShow, setNewPlayersToShow] = useState(players);
    let playersToShow = [...players];
    const handleSearchChange = (event) => {
        setUserSearchValue(String(event.target.value).toLowerCase());
        if(userSearchValue.length === 0 || userSearchValue === '') {
            setNewPlayersToShow(...players);
        } else {
            setNewPlayersToShow([]);
            const res = players.filter((player) => player.playerInfo.fullName.toLowerCase().includes(userSearchValue.toLowerCase()));
            if(res != []) {
                setNewPlayersToShow(res);
            }
        };
    }
    let TheElement = () => <div></div>;

    if(Object.keys(newPlayersToShow).length !== 0 && Object.keys(newPlayersToShow).length < 5) {
        TheElement = () => Object.keys(newPlayersToShow).map((player) => <MainPlayerComponent player={newPlayersToShow[parseInt(player)]} />);
    }
    if(userSearchValue.length === 0 || userSearchValue === '') {
        TheElement = () => players.map((player) => <MainPlayerComponent player={player} active={true} />);
    };
    return (
        <div className="mainPlayersComponent">
            <div className="playersTitle">
                <h1 className="playersNavTitle">Players</h1>
                <input className="searchPlayersNav" placeholder="Search" onChange={handleSearchChange} />
            </div>
            <TheElement />
        </div>
    )
}

export default MainPlayersComponent