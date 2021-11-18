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
    ]
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
        "fullName": "Eran Zehavi",
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
    ]
}]

const MainPlayersComponent = () => {
    const [userSearchValue, setUserSearchValue] = useState('');
    const [newPlayersToShow, setNewPlayersToShow] = useState(players);
    let playersToShow = [...players];
    const handleSearchChange = (event) => {
        setUserSearchValue(String(event.target.value).toLowerCase());
        if(userSearchValue.length === 0 || userSearchValue === '') {
            // newPlayersToShow.push(...players)
            console.log(userSearchValue)
            setNewPlayersToShow(...players);
        } else {
            // playersToShow = [];
            setNewPlayersToShow([]);
            const res = players.filter((e) => e.playerInfo.fullName.toLowerCase().startsWith(userSearchValue));
            // playersToShow.push(players.filter((e) => e.playerInfo.fullName.toLowerCase().startsWith(userSearchValue)));
            if(res != []) {
                setNewPlayersToShow(res);
            }
            // console.log(newPlayersToShow);
            // Object.keys(newPlayersToShow).forEach((e) => {
            //     console.log(e);
            // })
            // Object.keys(newPlayersToShow).map((player) => console.log(player))
        };
    }
    // Object.keys(newPlayersToShow).map((player) => console.log(player))

    return (
        <div className="mainPlayersComponent">
            <div className="playersTitle">
                <h1 className="playersNavTitle">Players</h1>
                <input className="searchPlayersNav" placeholder="Search" onChange={handleSearchChange} />
            </div>
            {[...players.keys()].map((player) => <MainPlayerComponent player={players[player]} active={true} />)}
        </div>
    )
}

export default MainPlayersComponent