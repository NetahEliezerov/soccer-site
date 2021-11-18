import React from 'react'
import './Main.css';

const MainPlayerStrengthsComponent = (props) => {
    return (
        <div class="playerStrengths">
            <h1 className="strengthsTitleText">Strengths</h1>
            <div className="strengths">
                {Object.keys(props.info.strengths).map((e) => <div>
                    {/* <h5 className="strengthNames">{props.info.strengths[e].name}</h5>
                    <div className="middleShapePositions"></div>
                    <h2 className="positionsResult">{props.info.strengths[e].level}</h2> */}
                    <p class="divided">
                        <span>{props.info.strengths[e].name}</span>
                        <span class="divider"></span>
                        <span>{props.info.strengths[e].level}</span>
                    </p>
                </div>)}
                {/* <ul class="leaders">
                    <li><span>Salmon Ravioli</span>
                    <span>7.95</span></li>
                    <li><span>Fried Calamari</span>
                    <span>8.95</span></li>
                    <li><span>Almond Prawn Cocktail</span>
                    <span>7.95</span></li>
                    <li><span>Bruschetta</span>
                    <span>5.25</span></li>
                    <li><span>Margherita Pizza</span>
                    <span>10.95</span></li>
                </ul> */}
            </div>
        </div>
    )
}

export default MainPlayerStrengthsComponent
