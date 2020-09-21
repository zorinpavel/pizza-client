import React from 'react';

import css from './assets/container.scss';


export default (props) => (
    <div className={css.layoutMiddle}>
        <div className={css.layoutMiddleWrapper}>
            {props.header && (
                <div className={css.layoutMiddleHeader}>
                    <h1>{props.header}</h1>
                    {props.caption && <p className={css.layoutMiddleHeaderCaption}>{props.caption}</p>}
                </div>
            )}

            {props.children}

        </div>
    </div>
);
