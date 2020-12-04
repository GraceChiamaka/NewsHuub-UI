import React from 'react';
import { Row, Col } from 'antd';
import './homepage.style.scss';

const HomepageContent = () => (
    <div className="homepage-container">
        <div className="homepage-bg">
            <div className="overlay" />
            <div className="page-content">
                <Row justify="space-between">
                    <Col span={3} className="flex-column">
                        <div className="page-nav left">
                            <p>Prev story</p>
                            <h3>Rehabd for ...</h3>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="front-page">
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
                    <Col span={3} className="flex-column">
                        <div className="page-nav next">
                            <p>next story</p>
                            <h3>Rehabd for ...</h3>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
);

export default HomepageContent;
