import React from 'react'
import './Main.css';

const MainPlayerWeaknessesComponent = (props) => {
    return (
        <div class="playerWeaknesses">
            <h1 className="weaknessesTitleText">Weaknesses</h1>
            <div className="weaknesses">
                {Object.keys(props.info.weaknesses).map((e) => <div>
                    <p class="divided">
                        <span>{props.info.weaknesses[e].name}</span>
                        <span class="divider"></span>
                        <span>{props.info.weaknesses[e].level}</span>
                    </p>
                </div>)}
            </div>
        </div>
    )
}

export default MainPlayerWeaknessesComponent
