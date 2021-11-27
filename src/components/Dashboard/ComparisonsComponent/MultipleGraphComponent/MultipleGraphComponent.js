import { Grid } from '@mui/material';
import RadarComponent from '../../RadarComponent/Main';
import PieComponent from '../../PieComponent/PieComponent';
import GaugeComponent from '../../GaugeComponent/Main';
import MainTitleComponentComparisons from '../../TitleComponentComparisons/Main';
import MainTacticsFamiliarComparisons from '../../TacticsFamiliarComparisons/Main';
import FormationComponent from '../../FormationComponent/Main';

const MultipleGraphComponent = (props) => {
    console.log(props.players)

    return (
        <Grid container spacing={2}>
            {
                props.players.map((player, index) => {
                    const componentKeyToComponent = {
                        'characteristics': <RadarComponent info={player.characteristics} title={<MainTitleComponentComparisons playerInfo={player.playerInfo} title={`Characteristics`} />}/>,
                        'tacticsfamiliar': <FormationComponent teamWork={player.teamwork} size="medium" title={<MainTitleComponentComparisons playerInfo={player.playerInfo} title={`Tactics Familiar`} />}/>,
                        'relationships': <PieComponent info={player.relationships} title={<MainTitleComponentComparisons playerInfo={player.playerInfo} title={`Relationships`} />} />,
                        'emotionsandcomposure': <div className="subComponent"><GaugeComponent percent={player.composure} title={<MainTitleComponentComparisons playerInfo={player.playerInfo} title={`Composure`} />} id={index} /><br />
                        <GaugeComponent percent={player.emotions} title={<MainTitleComponentComparisons playerInfo={player.playerInfo} title={`Emotions`} />} id={index} /></div>
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