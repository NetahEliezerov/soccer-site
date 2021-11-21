import React from 'react';
import './PieComponent.css';
import { Pie } from 'react-chartjs-2';

const labels = {
    render: 'value',
    fontSize: 14,
    fontStyle: 'bold',
    fontColor: '#000',
    fontFamily: '"Lucida Console", Monaco, monospace'
}

const legend = {
    display: true,
    position: 'bottom',
    labels: {
        padding: 30,
        pointStyle: 'circle',
        usePointStyle: true,
        font: {
            family: "Lexend"
        }
    }
};

const PieComponent = (props) => {
    
    const data = {
        labels: props.info.map(rs => rs.connection),
        datasets: [
            {
                data: props.info.map(rs => rs.level),
                backgroundColor: [
                    '#110E43',
                    '#4940D7',
                    '#B5B0FF',
                ],
                borderWidth: 0
            }
        ]
    };
    
    return (
        <div className={`subComponent ${props.size}`}>
            <h3 className="header">{props.title}</h3>
            <Pie className="pie"
                width={350}
                height={300}
                options={{ maintainAspectRatio: false, responsive: false, plugins: { legend, labels } }}
                data={data} />
        </div>
    )
}

export default PieComponent