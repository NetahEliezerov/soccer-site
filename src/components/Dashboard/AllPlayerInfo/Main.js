import React from 'react'
import examplePlayerInfo from './examplePlayer.json';
import MainPlayerInfo from './MainPlayerInfo/Main';

const AllPlayerInfo = () => {
    return (
        <div>
            <MainPlayerInfo info={examplePlayerInfo} />
        </div>
    )
}

export default AllPlayerInfo
