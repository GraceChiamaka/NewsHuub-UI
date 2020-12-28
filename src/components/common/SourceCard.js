import React from 'react';

import { formatName } from '../../helpers/utils';

const Card = ({ sourceUrl, name, id, desc, country, language }) => {
    return (
        <div className="news-source-card" key={id}>
            <div className="overlay" />

            <div className="story-desc">
                <p className="timestamp">{language}</p>

                <p className="title">{name}</p>

                <p className="desc">{formatName(desc, 50)}</p>
                <a
                    target="_blank"
                    href={sourceUrl}
                    rel="noreferrer"
                    type="button"
                    className="source-btn"
                    id={id}
                >
                    View Source
                </a>
            </div>
        </div>
    );
};

export default Card;
