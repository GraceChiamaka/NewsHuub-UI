import React from 'react';

const Card = ({ storyImg, timeStamp, title, desc, id }) => (
    <div className="story-card" key={id}>
        <div className="overlay" />
        <div className="story-img" style={{ backgroundImage: `url(${storyImg})` }} />
        <div className="story-desc">
            <p className="timestamp">{timeStamp}</p>
            <p className="title">{title}</p>
            <p className="desc">{desc}</p>
            <button type="button" id={id}>
                Read Story
            </button>
        </div>
    </div>
);

export default Card;
