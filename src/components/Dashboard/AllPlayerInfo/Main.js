import React from 'react'
import examplePlayerInfo from './examplePlayer.json';
import MainPlayerInfo from '../MainPlayerInfo/Main';
import PieComponent from '../PieComponent/PieComponent';
import ListInfoComponent from '../ListInfo/Main';
import RadarComponent from '../RadarComponent/Main';
import { Container, Row, Col } from 'react-grid-system';

const AllPlayerInfo = () => {

    return (
        <Container fluid>
            <Row style={{height: '25em'}}>
                <Col>
                    <MainPlayerInfo info={examplePlayerInfo} size="large"/>
                </Col>
            </Row>
            <Row style={{height: '25em'}}>
                <Col>
                    <ListInfoComponent info={examplePlayerInfo.strengths} title="Strengths" size="small"/>
                </Col>
                <Col>
                    <ListInfoComponent info={examplePlayerInfo.weaknesses} title="Weaknesses" size="small"/>
                </Col>
            </Row>
            <Row style={{height: '25em'}}>
                <Col>
                    <RadarComponent info={examplePlayerInfo.characteristics}/>
                </Col>
                <Col>
                    <PieComponent />
                </Col>
            </Row>
        </Container>
    )
}

export default AllPlayerInfo