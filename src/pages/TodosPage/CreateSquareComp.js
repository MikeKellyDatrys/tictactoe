import {Component} from 'react';
import './CreateGameComp.styl';

// create the square component for the board.

// note - initially we're going to set the component state in a class constructor
// later, we'll incorporate the Redux framework to dynamically store the app state
// as user palys

class Square extends Component {
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

// now export Square component
export default Square;
