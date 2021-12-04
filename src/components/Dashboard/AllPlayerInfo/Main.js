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

    return (
        <Grid container spacing={5}>
            <Grid item xs={8}>
                <MainPlayerInfo info={props.player} />
            </Grid>
            {
                !props.compareMode && <Grid item xs={4}>
                    <RadarComponent info={props.player.characteristics} title="Characteristics" />
                </Grid>
            }
            <Grid item xs={5}>
                <PickComparisonsComponent playersToCompare={playersToCompare} comparingPlayers={props.comparingPlayers} addPlayerToComparison={props.addPlayerToComparison} removePlayerFromComparison={props.removePlayerFromComparison}/>
            </Grid>
            {
                !props.compareMode && <Grid item xs={3}>
                    <FormationComponent teamWork={props.player.teamwork} playerName={props.player.playerInfo.fullName} size="medium" />
                </Grid>
            }
            {
                !props.compareMode && <Grid item xs={4}>
                    <ListInfoComponent info={props.player.strengths} title="Strengths" />
                </Grid>
            }
            {
                !props.compareMode && <Grid item container xs={12} spacing={2}>
                    <Grid item xs={4}>
                        <PieComponent info={props.player.relationships} title="Relationships" />
                    </Grid>
                    <Grid item xs={2}>
                        <GaugeComponent percent={props.player.emotions} title="Emotions" id="1" />
                    </Grid>
                    <Grid item xs={2}>
                        <GaugeComponent percent={props.player.composure} title="Composure" id="1" />
                    </Grid>
                    <Grid item xs={4}>
                        <ListInfoComponent info={props.player.weaknesses} title="Weaknesses" />
                    </Grid>
                </Grid>
            }
            {
                props.compareMode && (
                    <Grid container item xs={12}>
                        <MainTabsComponent tabs={[{ key: 'characteristics', title: 'Characteristics' }, { key: 'tacticsfamiliar', title: 'Tactics familiar' }, { key: 'strengthsandweaks', title: 'Strengths & Weaknesses' }, { key: 'relationships', title: 'Relationships' }, { key: 'emotionsandcomposure', title: 'Emotions & Composure' }]} comparingPlayers={props.comparingPlayers} />
                    </Grid>
                )}
        </Grid>
    )
}

export default AllPlayerInfo