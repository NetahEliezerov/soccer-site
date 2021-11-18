import React from 'react'
import examplePlayerInfo from './examplePlayer.json';
import MainPlayerInfo from './MainPlayerInfo/Main';
import MainPlayerStrengthsComponent from './PlayerStrengths/Main';
import MainPlayerWeaknessesComponent from './PlayerWeaknesses/Main';

const AllPlayerInfo = () => {
    return (
        <div>
            <MainPlayerInfo info={examplePlayerInfo} />
            <MainPlayerStrengthsComponent info={examplePlayerInfo} />
            <MainPlayerWeaknessesComponent info={examplePlayerInfo} />
        </div>
    )
}

export default AllPlayerInfo
