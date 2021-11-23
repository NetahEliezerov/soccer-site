import React from 'react';
import MainPlayerInfo from '../MainPlayerInfo/Main';
import PieComponent from '../PieComponent/PieComponent';
import ListInfoComponent from '../ListInfo/Main';
import RadarComponent from '../RadarComponent/Main';
import GaugeComponent from '../GaugeComponent/Main';
import FormationComponent from '../FormationComponent/Main';
import { Grid } from '@mui/material';
const AllPlayerInfo = (props) => {

    return (
        <Grid container>
            <Grid item xs={12}>
                <MainPlayerInfo info={props.player} />
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={5}>
                    <RadarComponent info={props.player.characteristics} />
                </Grid>
                <Grid item xs={1} />
                <Grid container item xs={6} rowSpacing={2}>
                    <Grid item xs={12}>
                        <ListInfoComponent info={props.player.strengths} title="Strengths" />
                    </Grid>
                    <Grid item xs={12}>
                        <ListInfoComponent info={props.player.weaknesses} title="Weaknesses" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={5}>
                    <FormationComponent size="medium" />
                </Grid>
                <Grid item xs={1} />
                <Grid container item xs={6}>
                    <Grid item xs={6}>
                        <GaugeComponent percent={props.player.emotions} title="Emotions" id="1" />
                    </Grid>
                    <Grid item xs={6}>
                        <GaugeComponent percent={props.player.composure} title="Composure" id="1" />
                    </Grid>
                    <Grid item xs={12}>
                        <PieComponent info={props.player.relationships} title="Relationships" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AllPlayerInfo