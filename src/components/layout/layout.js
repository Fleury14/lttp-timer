// @flow
import React from 'react';
import Timer from '../timer/timer';
import './layout.scss';

const TIMERS = [
    'Eastern',
    'Desert',
    'Hera',
    'Dark Palace',
    'Swamp',
    'Skull Woods',
    'Thieves Town',
    'Ice Palace',
    'Misery Mire',
    'Turtle Rock',
    'Ganons Tower'
];

const Layout = (props) => {
    return (
        <div className="layout-wrapper">
            <div className="main-timer">
                <Timer main tile={""} />
            </div>
            {TIMERS.map(loc => (
                <div key={loc}>
                    <Timer title={loc} />
                </div>
            ))}
        </div>
    )
}

export default Layout;