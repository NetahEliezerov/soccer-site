import React from 'react';
import './PieComponent.css';
import { Pie } from 'react-chartjs-2';

const data = {
    labels: ['Team', 'Management', 'Coach'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          '#110E43',
          '#4940D7',
          '#B5B0FF',
        ],
        borderWidth: 0,
        
      }
    ]
};

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
    return (
        <div className={`subComponent ${props.size}`}>
            <h3 className="header">Relationship</h3>
            <Pie className="pie"
                width={350}
                height={300}
	            options={{ maintainAspectRatio: false, responsive: false, plugins: {legend} }}
                data={data}/>
        </div>
    )
}

export default PieComponent