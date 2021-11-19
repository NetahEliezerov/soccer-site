import React from 'react'
import './Main.css';

const ListInfoComponent = (props) => {
    return (
        <div className={`subComponent ${props.size}`}>
            <h1 className="titleText">{props.title}</h1>
            <div className="attributes">
                {Object.keys(props.info).map((attribute) => <div>
                    <p class="divided">
                        <span>{props.info[attribute].name}</span>
                        <span class="divider"></span>
                        <span>{props.info[attribute].level}</span>
                    </p>
                </div>)}
            </div>
        </div>
    )
}

export default ListInfoComponent
