import React from 'react';
import './Main.css';

const MainTitleComponentComparisons = (props) => {
    return (
        <div>
            <p><span className='tabTitleComparisons'>{props.title}</span><span className='playerInfoComparisons'><img className='playerComparisonLogo' src={props.playerInfo.imageSrc} />{props.playerInfo.fullName}</span></p>
        </div>
    )
}

export default MainTitleComponentComparisons