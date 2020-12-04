import React, { useEffect, useState } from 'react';
import { Row, Col, message } from 'antd';
import { allHeadlines } from '../../../helpers/api';
import { formatName, formatDate } from '../../../helpers/utils';
import './landing.style.scss';
import Card from '../../common/Card';

const LandingPageContent = () => {
    const [headlinesData, setHeadlinesData] = useState(null);
    useEffect(() => {
        getHeadlines();
    }, []);

    const getHeadlines = async () => {
        try {
            const result = await allHeadlines();
            setHeadlinesData(result);
        } catch (error) {
            if (error) {
                message.error(error);
            }
        }
    };

    const displayHeadlines = () => {
        if (headlinesData === null) {
            return <h3>Loading...</h3>;
        }
        return headlinesData.articles.map((article) => {
            return (
                <Col span={6}>
                    <Card
                        storyImg={article.urlToImage}
                        timeStamp={formatDate(article.publishedAt)}
                        title={formatName(article.title, 12)}
                        desc={formatName(article.description, 150)}
                        id={article.url}
                    />
                </Col>
            );
        });
    };
    return (
        <div className="landing-page-container">
            <div className="page-content">
                <Row justify="space-between">
                    <Col span={2} className="flex-column">
                        <div className="page-nav left">
                            <p>Prev story</p>
                            <h3>Rehabd for ...</h3>
                        </div>
                    </Col>
                    <Col span={20}>
                        <div className="center-pad">
                            <div className="news-sketch">
                                <div className="sketch-bg">
                                    {/* <img src={NewsShot} alt="new shot " /> */}
                                </div>
                            </div>
                            <div className="details">
                                <div className="details-content">
                                    <p className="timestamp">01.11.2020</p>
                                    <h1 className="front-page-heading">
                                        How to turn a drawing tool into a useful tool
                                    </h1>
                                </div>
                                <div className="more-info">
                                    <p className="front-page-description">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Facere voluptates nobis excepturi ipsa tenetur fugit
                                        voluptate earum
                                    </p>
                                    <button type="button" className="read-btn">
                                        Read story
                                    </button>
                                </div>
                                <div className="credits">
                                    {/* <p className="">
                                        <em>Journalist / </em>
                                        <span>Carl Pirata</span>
                                    </p>
                                    <p className="">
                                        <em>Photographer / </em>
                                        <span>Antoine Muti</span>
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="news-content">
                            <Row className="row" gutter={10}>
                                {displayHeadlines()}
                            </Row>
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
};

export default LandingPageContent;
