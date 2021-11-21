import React from 'react';
import { useState } from 'react';
import './Main.css';
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #E9E9F3',
      color: state.isSelected ? 'white' : 'blue',
      padding: 20,
      width: '31.4em'
    }),
    control: () => ({}),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    },
    menu: ({ width, ...css }) => ({ ...css }),
    dropdownIndicator: base => ({
        ...base,
        color: "red" // Custom colour
    })
}

const arraySelection = [
    { value: '5-4-2-1', label: '5-4-2-1' },
    { value: '2-1-4-5', label: '2-1-4-5' }
]

const FormationComponent = (props) => {
    const [selectedArray, setSelectedArray] = useState('');

    const handleArrayChange = (event) => {
        setSelectedArray(event.value);
        console.log(event.value)
    }

    return (
        <div className="subComponent">
                <h4 className="titleText">Tactics familiar with</h4>
                <div className="selectionsDiv">
                    <label for="formations">Formations</label><br />
                </div>
                <Select onChange={handleArrayChange} options={arraySelection} styles={customStyles} className="selectionClass" components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} />
                <div className="teamWork">
                    <h5 className="progressBarTitle">Teamwork</h5>
                    <h5 className="percentsOfProgressBar">50%</h5>
                    <div className="progressBar"><div className="subProgressBar" /></div>
                </div>
                <img className="pitchImg" src="./assets/pitch.svg"/>
        </div>
    )
}

export default FormationComponent
