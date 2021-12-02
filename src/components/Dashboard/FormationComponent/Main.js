import React from 'react';
import { useState } from 'react';
import './Main.css';
import Select from 'react-select';

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #E9E9F3',
      color: state.isSelected ? 'white' : 'blue',
      padding: 20,
      borderRadius: '10px',
      width: '31.4em'
    }),
    control: () => ({}),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition, borderRadius: '10px' };
    },
    menu: ({ width, ...css }) => ({ ...css })
}

const arraySelection = [
    { value: '5-4-2-1', label: '5-4-2-1' },
    { value: '2-1-4-5', label: '2-1-4-5' }
]

const FormationComponent = (props) => {
    const [teamWorkPercents, setTeamWorkPercents] = useState(`${props.teamWork[0].teamWork}%`);
    const [selectedArray, setSelectedArray] = useState('');

    const handleArrayChange = (value) => {
        setSelectedArray(value.value);
        const foundFormation = props.teamWork.filter((e) => e.formation === value.value)[0];
        setTeamWorkPercents(`${foundFormation.teamWork}%`);
        console.log(foundFormation)
        document.getElementById(`progressBar${props.playerName}`).style.width = teamWorkPercents;
    }

    document.documentElement.style.setProperty('--w', `${props.teamWork[0].teamWork}%`)
    return (
        <div className={`subComponent ${props.size}`}>
                { !props.title && <h4 className="titleText">Tactics familiar with</h4> }
                { props.title && <h4 className="titleText">{props.title}</h4> }
                <div className="selectionsDiv">
                    <label for="formations">Formations</label><br />
                    <Select onChange={handleArrayChange} options={arraySelection} styles={customStyles} className="selectionClass" components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} />
                </div>
                <div className="teamWork">
                    <h5 className="progressBarTitle">Teamwork</h5>
                    <h5 className="percentsOfProgressBar">{teamWorkPercents}</h5>
                    <div className="progressBar"><div className="subProgressBar" id={`progressBar${props.playerName}`} style={{width: teamWorkPercents}}/></div>
                </div>
                <center>
                <img className="pitchImg" src={process.env.PUBLIC_URL + '/assets/pitch.svg'} />
                </center>
        </div>
    )
}

export default FormationComponent
