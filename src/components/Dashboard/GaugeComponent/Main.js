import React from 'react'
import GaugeChart from 'react-gauge-chart'
import './Main.css';

const GaugeComponent = (props) => {
    return (
        <div className='subComponent guageHeight'>
            <h1 className="titleText">{props.title}</h1>
            <GaugeChart
            percent={props.percent/100}
            nrOfLevels={3}
            arcWidth={0.08}
            cornerRadius={20}
            needleColor="#060515"
            hideText="true"
            needleBaseColor="#060515"
            colors={["#B5B0FF", "#4940D7", "#110E43"]} 
            id={`gauge-chart${props.id}`} />
        </div>
    )
}

export default GaugeComponent
