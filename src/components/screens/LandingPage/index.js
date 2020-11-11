import React from 'react';
import { Row, Col } from 'antd';
import NewsShot from '../../../assets/images/alucard.jpg';

import './landing.style.scss';

const LandingPageContent = () => (
    <div className="landing-page-container">
        <div className="page-content">
            <Row justify="space-between">
                <Col span={1} className="flex-column">
                    <div className="page-nav left">
                        <p>Prev story</p>
                        <h3>Rehabd for ...</h3>
                    </div>
                </Col>
                <Col span={21}>
                    <div className="center-pad">
                        <div className="news-sketch">
                            <div>
                                <img src={NewsShot} alt="new shot " />
                            </div>
                        </div>
                        <p className="timestamp">01.11.2020</p>
                        <h1 className="front-page-heading">Rehab for distracted people</h1>
                        <p className="front-page-description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                            voluptates nobis excepturi ipsa tenetur fugit voluptate earum
                        </p>
                        <div className="credits">
                            <p className="">
                                <em>Journalist / </em>
                                <span>Carl Pirata</span>
                            </p>
                            <p className="">
                                <em>Photographer / </em>
                                <span>Antoine Muti</span>
                            </p>
                        </div>
                    </div>
                </Col>
                <Col span={2} className="flex-column">
                    <div className="page-nav next">
                        <p>next story</p>
                        <h3>Rehabd for ...</h3>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
);

export default LandingPageContent;
