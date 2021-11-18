import React from 'react'
import examplePlayerInfo from './examplePlayer.json';
import MainPlayerInfo from './MainPlayerInfo/Main';
import MainPlayerStrengthsComponent from './PlayerStrengths/Main';

const AllPlayerInfo = () => {
    return (
        <div>
            <MainPlayerInfo info={examplePlayerInfo} />
            <MainPlayerStrengthsComponent info={examplePlayerInfo} />
        </div>
    )
}

export default AllPlayerInfo
