import React from 'react'
import examplePlayerInfo from './examplePlayer.json';
import MainPlayerInfo from '../MainPlayerInfo/Main';
import PieComponent from '../PieComponent/PieComponent';
import ListInfoComponent from '../ListInfo/Main';
import RadarComponent from '../RadarComponent/Main';
import { Container, Row, Col } from 'react-grid-system';
import GaugeComponent from '../GaugeComponent/Main';
import FormationComponent from '../FormationComponent/Main';

const AllPlayerInfo = () => {

    return (
        <Container fluid style={{marginTop: '3em'}}>
            <Row style={{marginBottom: '3em'}}>
                <Col>
                    <MainPlayerInfo info={examplePlayerInfo} size="large"/>
                </Col>
            </Row>
            <Row style={{marginBottom: '3em'}}>
                <Col>
                    <ListInfoComponent info={examplePlayerInfo.strengths} title="Strengths" size="small"/>
                </Col>
                <Col>
                    <ListInfoComponent info={examplePlayerInfo.weaknesses} title="Weaknesses" size="small"/>
                </Col>
            </Row>
            <Row style={{marginBottom: '3em'}}>
                <Col>
                    <RadarComponent info={examplePlayerInfo.characteristics} size="small"/>
                </Col>
                <Col>
                    <PieComponent size="small"/>
                </Col>
            </Row>
            <Row style={{marginBottom: '3em'}}>
                <Col xs={6}>
                    <GaugeComponent percent={examplePlayerInfo.emotions} size="small" title="Emotions" id="1"/>
                </Col>
                <Col xs={6}>
                    <GaugeComponent percent={examplePlayerInfo.composure} size="small" title="Composure" id="1"/>
                </Col>
            </Row>
            <FormationComponent size="medium" />
        </Container>
    )
}

export default AllPlayerInfo