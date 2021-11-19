import React from 'react'
import examplePlayerInfo from './examplePlayer.json';
import MainPlayerInfo from './MainPlayerInfo/Main';
import PieComponent from '../PieComponent/PieComponent';
import ListInfoComponent from '../ListInfo/Main';
import RadarComponent from '../RadarComponent/Main';

const AllPlayerInfo = () => {
    return (
        <div>
            <MainPlayerInfo info={examplePlayerInfo} />
            <ListInfoComponent info={examplePlayerInfo.strengths} title="Strengths"/>
            <ListInfoComponent info={examplePlayerInfo.weaknesses} title="Weaknesses"/>
            <PieComponent />
            <RadarComponent info={examplePlayerInfo.characteristics}/>
        </div>
    )
}

export default AllPlayerInfo
