import { Grid } from '@mui/material';
import RadarComponent from '../../RadarComponent/Main';
import PieComponent from '../../PieComponent/PieComponent';
import ListInfoComponent from '../../ListInfo/Main';
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
                        'characteristics': <RadarComponent info={player.characteristics} title={<MainTitleComponentComparisons playerInfo={player.playerInfo} title={``} />}/>,
                        'tacticsfamiliar': <FormationComponent playerName={player.playerInfo.fullName} teamWork={player.teamwork} size="medium" title={<MainTitleComponentComparisons playerInfo={player.playerInfo} title={``} />}/>,
                        'relationships': <PieComponent info={player.relationships} title={<MainTitleComponentComparisons playerInfo={player.playerInfo} title={``} />} />,
                        'emotionsandcomposure': <div className="subComponent"><GaugeComponent percent={player.composure} title={<MainTitleComponentComparisons playerInfo={player.playerInfo} title={`Composure`} />} id={index} /><br />
                        <GaugeComponent percent={player.emotions} title={<MainTitleComponentComparisons playerInfo={player.playerInfo} title={`Emotions`} />} id={index} /></div>,
                        'strengthsandweaks': <div><ListInfoComponent info={player.strengths} title={<MainTitleComponentComparisons playerInfo={player.playerInfo} title={`Strengths`} />} />
                        <ListInfoComponent info={player.weaknesses} title={<MainTitleComponentComparisons playerInfo={player.playerInfo} title={`Weaknesses`} />} />
                        </div>
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