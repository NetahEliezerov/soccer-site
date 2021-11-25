import React from 'react';
import MainPlayerInfo from '../MainPlayerInfo/Main';
import PieComponent from '../PieComponent/PieComponent';
import ListInfoComponent from '../ListInfo/Main';
import RadarComponent from '../RadarComponent/Main';
import GaugeComponent from '../GaugeComponent/Main';
import FormationComponent from '../FormationComponent/Main';
import { Grid } from '@mui/material';
import MainTabsComponent from '../ComparisonsComponent/Tabs/Main';
import { PickComparisonsComponent } from '../PickComparisonsComponent/PickComparisonsComponent';
import DAL from '../../../services/DAL';

const AllPlayerInfo = (props) => {
    const playersToCompare = DAL.getPlayers().filter((player) => player != props.player);
    // const playersToCompare = [DAL.getPlayers()[1], DAL.getPlayers()[2]];

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <MainPlayerInfo info={props.player} />
            </Grid>
            <Grid item xs={12}>
                <PickComparisonsComponent playersToCompare={playersToCompare} addPlayerToComparison={props.addPlayerToComparison}/>
            </Grid>
            {
                props.compareMode && (
                    <Grid container item xs={12}>
                        {/* , 'Tactics familiar', 'Strengths & Weaknesses', 'Emotions & Composure', 'Relationships' */}
                        <MainTabsComponent tabs={[{ key: 'characteristics', title: 'Characteristics' }, { key: 'relationships', title: 'Relationships' }, { key: 'emotionsandcomposure', title: 'Emotions & Composure' }]} comparingPlayers={props.comparingPlayers} />
                    </Grid>
                )}
            {
                !props.compareMode && (
                    <Grid container item xs={12}>
                        <Grid item xs={5}>
                            <RadarComponent info={props.player.characteristics} title="Characteristics" />
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
                )}
            {
                !props.compareMode && (
                    <Grid container item xs={12}>
                        <Grid item xs={5}>
                            <FormationComponent teamWork={props.player.teamwork} size="medium" />
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
                            <Grid item xs={12}>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
        </Grid>
    )
}

export default AllPlayerInfo