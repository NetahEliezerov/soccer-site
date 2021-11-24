import { Grid } from '@mui/material';
import RadarComponent from '../../RadarComponent/Main';
import PieComponent from '../../PieComponent/PieComponent';
import GaugeComponent from '../../GaugeComponent/Main';

const MultipleGraphComponent = (props) => {

    return (
        <Grid container spacing={2}>
            {
                props.players.map((player, index) => {
                    const componentKeyToComponent = {
                        'characteristics': <RadarComponent info={player.characteristics} title={`Characteristics - ${player.playerInfo.fullName}`}/>,
                        'relationships': <PieComponent info={player.relationships} title={`Relationships - ${player.playerInfo.fullName}`} />,
                        'emotionsandcomposure': <div className="subComponent"><GaugeComponent percent={player.composure} title={`Composure - ${player.playerInfo.fullName}`} id={index} /><br /><GaugeComponent percent={player.emotions} title={`Emotions - ${player.playerInfo.fullName}`} id={index} /></div>
                    };
                    return (
                        <Grid item xs={6}>
                            {componentKeyToComponent[props.component]}
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default MultipleGraphComponent