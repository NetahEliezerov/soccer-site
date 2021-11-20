import React from 'react'
import examplePlayerInfo from './examplePlayer.json';
import MainPlayerInfo from '../MainPlayerInfo/Main';
import PieComponent from '../PieComponent/PieComponent';
import ListInfoComponent from '../ListInfo/Main';
import RadarComponent from '../RadarComponent/Main';
import { Container, Row, Col } from 'react-grid-system';
import GaugeComponent from '../GaugeComponent/Main';
import FormationComponent from '../FormationComponent/Main';

const AllPlayerInfo = (props) => {

    return (
        <Container fluid>
            <Row style={{marginBottom: '3em'}}>
                <Col>
                    <MainPlayerInfo info={props.player} size="large"/>
                </Col>
            </Row>
            <Row style={{marginBottom: '3em'}}>
                <Col>
                    <ListInfoComponent info={props.player.strengths} title="Strengths" size="small"/>
                </Col>
                <Col>
                    <ListInfoComponent info={props.player.weaknesses} title="Weaknesses" size="small"/>
                </Col>
            </Row>
            <Row style={{marginBottom: '3em'}}>
                <Col>
                    <RadarComponent info={props.player.characteristics} size="small"/>
                </Col>
                <Col>
                    <PieComponent info={props.player.relationships} title="Relationships" size="small"/>
                </Col>
            </Row>
            <Row style={{marginBottom: '3em'}}>
                <Col xs={6}>
                    <GaugeComponent percent={props.player.emotions} size="small" title="Emotions" id="1"/>
                </Col>
                <Col xs={6}>
                    <GaugeComponent percent={props.player.composure} size="small" title="Composure" id="1"/>
                </Col>
            </Row>
            <FormationComponent size="medium" />
        </Container>
    )
}

export default AllPlayerInfo