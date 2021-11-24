import React from 'react'
import './Main.css';
import { Radar } from 'react-chartjs-2';

const options = {
    plugins: {
        legend: {
            display: false
        }
    },
    scale: {
        ticks: {
            callback: function() {return ""},
            backdropColor: "rgba(0, 0, 0, 0)",
            maxTicksLimit: 1
        },
        pointLabels: {
            font: {
                family: "Lexend",
                size: 12,
            },
        }
    },
    elements: {
        point: {
            pointRadius: 0
        }
    },
    maintainAspectRatio: false
};

const RadarComponent = (props) => {

    const data = {
        labels: [],
        datasets: [{
            data: [],
            fill: true,
            backgroundColor: '#4940D7',
        }]
    };

    const getData = () => {
        data.labels = Object.keys(props.info);
        data.datasets[0].data = Object.values(props.info);
        return data;
    }
    return (
        <div className="subComponent">
            <h3 className="header">{props.title}</h3>
            <div className="radarDiv">
                <Radar data={getData()} width={50} height={500} redraw options={options} />
            </div>
        </div>
    )
}

export default RadarComponent
