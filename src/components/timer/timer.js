// @flow
import React, { Component } from 'react';
import parseTime from '../../helpers/parse-time';

type Props = {
    title: string
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
        
        return (
            <div className="whole-wrapper">
                <span>{this.props.title}</span>
                <button onClick={() => this.beginTimer()}>start</button>
                <button onClick={() => this.endTimer()}>stop</button>
                {parseTime(this.state.currentTime)}
            </div>
        );
    }
}

export default TimerComponent;
