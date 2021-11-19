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
    }
};

const RadarComponent = (props) => {
    const getData = () => {
        data.labels = Object.keys(props.info);
        data.datasets[0].data = Object.values(props.info);
        return data;
    }
    return (
        <div className={`subComponent ${props.size}`}>
            <h3 className="header">Characteristics</h3>
            <div className="radarDiv">
                <Radar data={getData()} options={options} />
            </div>
        </div>
    )
}

export default RadarComponent
