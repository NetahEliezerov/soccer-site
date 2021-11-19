import React from 'react'
import './Main.css';
import { Radar } from 'react-chartjs-2';

const data = {
    labels: [],
    datasets: [{
      data: [],
      fill: true,
      backgroundColor: '#4940D7',
    }]
};

const legend = {
    display: false
};

const RadarComponent = (props) => {
    const getData = () => {
        data.labels = Object.keys(props.info);
        data.datasets[0].data = Object.values(props.info);
        return data;
    }
    return (
        <div className="subComponent">
            <Radar data={getData()} options={{plugins: {legend} }}/>
        </div>
    )
}

export default RadarComponent
