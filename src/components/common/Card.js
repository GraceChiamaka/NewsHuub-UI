import React from 'react';

import { Popover } from 'antd';
import { formatName } from '../../helpers/utils';

const Card = ({ storyImg, timeStamp, title, desc, id, fullTitle }) => {
    const popUpDetails = () => (
        <div className="">
            <div className="heading">
                <h3>{fullTitle}</h3>
            </div>
            <div className="content">
                <p>{desc}</p>
                <div>
                    <a
                        target="_blank"
                        href={id}
                        rel="noreferrer"
                        type="button"
                        className="story-btn ripple__out"
                        id={id}
                    >
                        Read Story
                    </a>
                </div>
            </div>
        </div>
    );
    return (
        <div className="story-card" key={id}>
            <div className="overlay" />
            <div className="story-img" style={{ backgroundImage: `url(${storyImg})` }}>
                <div className="story-desc">
                    <p className="timestamp">{timeStamp}</p>
                    <Popover content={popUpDetails} overlayClassName="headlines-details">
                        <p className="title">{title}</p>
                    </Popover>

                    {/* <p className="desc">{formatName(desc, 50)}</p> */}
                    {/* <a
                        target="_blank"
                        href={id}
                        rel="noreferrer"
                        type="button"
                        className="story-btn"
                        id={id}
                    >
                        Read Story
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default Card;
