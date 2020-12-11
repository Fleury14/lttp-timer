// @flow
import React, { Component } from 'react';
import parseTime from '../../helpers/parse-time';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faRedo } from '@fortawesome/free-solid-svg-icons';
import './timer.scss';

type Props = {
    title: string,
    main: boolean
}

type State = {
    timerActive: boolean,
    startTime: number,
    currentTime: number,
    pauseTime: number,
    finished: boolean,
}

class TimerComponent extends Component<Props, State> {
    interval:any = null;
    state: State = {
        timerActive: false,
        startTime: 0,
        currentTime: 0,
        pauseTime: 0,
        finished: false,
    }


    beginTimer() {
        if (this.state.timerActive) return;
        const startDate = this.state.pauseTime === 0 ? Date.now() : Date.now() - this.state.pauseTime;
        this.interval = setInterval(() => {
            this.setState({
                timerActive: true,
                startTime: startDate,
                currentTime: Date.now() - startDate,
            });
        }, 100);
    }

    endTimer() {
        if (this.state.timerActive) {
            if (this.interval) {
                clearInterval(this.interval);
            }
            this.setState({ pauseTime: Date.now() - this.state.startTime, timerActive: false });
        }
        
    }

    resetTimer() {
        this.setState({ 
            timerActive: false,
            startTime: 0,
            currentTime: 0,
            pauseTime: 0,
        })
    }

    render() {
        const { title, main } = this.props;
        return (
            <div className="timer-wrapper">
                <span className="timer-title">{title}</span>
                <div className="button-row">
                    <button onClick={() => this.beginTimer()} className="start-icon"><FontAwesomeIcon icon={faCheck} /></button>
                    <button onClick={() => this.endTimer()} className="stop-icon"><FontAwesomeIcon icon={faTimes} /></button>
                    <button onClick={() => this.resetTimer()} className="reset-icon"><FontAwesomeIcon icon={faRedo} /></button>
                </div>
                <p className="timer-time">{parseTime(this.state.currentTime)}</p>
            </div>
        );
    }
}

export default TimerComponent;
