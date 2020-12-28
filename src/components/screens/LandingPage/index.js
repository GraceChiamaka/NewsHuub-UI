import React, { useEffect, useState } from 'react';
import { Row, Col, message, Button } from 'antd';
import { Link } from 'react-router-dom';
import { allHeadlines, allNewsSource } from '../../../helpers/api';
import { formatDate, formatName } from '../../../helpers/utils';
import './landing.style.scss';
import Card from '../../common/Card';
import SourceCard from '../../common/SourceCard';

const LandingPageContent = () => {
    const [headlinesData, setHeadlinesData] = useState(null);
    const [sourcesData, setSourcesData] = useState(null);

    useEffect(() => {
        getHeadlines();
        getSources();
    }, []);

    const getHeadlines = async () => {
        const arr = [];
        try {
            const result = await allHeadlines();
            arr.push(result.articles.slice(0, 4));
            arr.push(result.articles.slice(4, 5));
        } catch (error) {
            if (error) {
                message.error(error);
            }
        } finally {
            setHeadlinesData(arr);
        }
    };

    const getSources = async () => {
        const arr = [];
        try {
            const result = await allNewsSource();
            console.log(result);
            arr.push(result.sources.slice(0, 4));
            arr.push(result.sources.slice(4, 5));
        } catch (error) {
            if (error) {
                message.error(error);
            }
        } finally {
            setSourcesData(arr);
        }
    };

    const displayHeadlines = () => {
        if (headlinesData === null) {
            return <h3>Loading...</h3>;
        }

        return headlinesData.map((article, index) => {
            if (index < 1) {
                return (
                    <div className="story-columns">
                        <Row gutter={12}>
                            {article.map((data) => {
                                return (
                                    <Col lg={12}>
                                        <Card
                                            storyImg={data.urlToImage}
                                            timeStamp={formatDate(data.publishedAt)}
                                            title={formatName(data.title, 13)}
                                            fullTitle={data.title}
                                            desc={data.description}
                                            id={data.url}
                                            content={data.content}
                                            key={data.url}
                                        />
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                );
            }
            return (
                <div className="story-columns">
                    <Row gutter={12}>
                        {article.map((data) => {
                            return (
                                <Col lg={24}>
                                    <Card
                                        storyImg={data.urlToImage}
                                        timeStamp={formatDate(data.publishedAt)}
                                        title={formatName(data.title, 30)}
                                        fullTitle={data.title}
                                        desc={data.description}
                                        id={data.url}
                                        content={data.content}
                                        key={data.url}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            );
        });
    };
    const displaySources = () => {
        if (sourcesData === null) {
            return <h3>Loading...</h3>;
        }

        return sourcesData.map((source, index) => {
            if (index < 1) {
                return (
                    <div className="story-columns">
                        <Row gutter={12}>
                            {source.map((data) => {
                                return (
                                    <Col lg={12}>
                                        <SourceCard
                                            sourceUrl={data.url}
                                            name={data.name}
                                            desc={data.description}
                                            country={data.country}
                                            language={data.language}
                                            id={data.id}
                                            category={data.category}
                                            key={data.id}
                                        />
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                );
            }
            return (
                <div className="story-columns">
                    <Row gutter={12}>
                        {source.map((data) => {
                            return (
                                <Col lg={24}>
                                    <SourceCard
                                        sourceUrl={data.url}
                                        name={data.name}
                                        desc={data.description}
                                        country={data.country}
                                        language={data.language}
                                        id={data.id}
                                        category={data.category}
                                        key={data.id}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </div>
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
                                <Col lg={24}>
                                    <Row justify="space-between">
                                        <Col>
                                            <h2>TOP HEADLINES</h2>
                                        </Col>
                                        <Col>
                                            <Link to="/headlines">View All</Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <div className="story-container">{displayHeadlines()}</div>
                        </div>
                        <div className="news-content">
                            <Row className="row" gutter={10}>
                                <Col lg={24}>
                                    <Row justify="space-between">
                                        <Col>
                                            <h2>NEWS SOURCES</h2>
                                        </Col>
                                        <Col>
                                            <Link to="/sources">View All</Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <div className="story-container">{displaySources()}</div>
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
