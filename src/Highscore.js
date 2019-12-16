import React, { Component } from 'react';

class Highscore extends Component {
    render() {
        const { overTen, onReset } = this.props;
        if (overTen) {
            return (<div>
                <h1>Beat highscore of 10</h1>
                <button onClick={onReset}>Reset</button>
            </div>
            )
        } else {
            return null
        }
    }
}

export default Highscore;