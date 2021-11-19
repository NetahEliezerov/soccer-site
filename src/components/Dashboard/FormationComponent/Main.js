import React from 'react';
import './Main.css';

const FormationComponent = (props) => {
    return (
        <div className={`subComponent ${props.size}`}>
                <h4 className="titleText">Tactics familiar with</h4>
                <div className="selectionsDiv">
                    <label for="formations">Formations</label><br />
                    <select id="formations" className="selectionClass">
                        <option className="optionsClass" value="3-4-2-1">3-4-2-1</option>
                    </select>
                </div>
                <div className="teamWork">
                    <h5 className="progressBarTitle">Teamwork</h5>
                    <h5 className="percentsOfProgressBar">50%</h5>
                    <div className="progressBar"><div className="subProgressBar" /></div>
                </div>
                <img className="pitchImg" src="/assets/pitch.svg"/>
        </div>
    )
}

export default FormationComponent
