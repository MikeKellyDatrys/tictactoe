import {Component} from 'react';
import './CreateGameComp.styl';

// create the square component for the board.

// note - initially we're going to set the component state in a class constructor
// later, we'll incorporate the Redux framework to dynamically store the app state
// as user palys

class Square extends Component {
    // define constructor boiler plate code
    // NB - react components can have state by setting `this.state` in
    //      component constructor.
    //      so we're going to store the current value of square in the state
    //      and change it (i.e. update the state when the square is clicked)

    //      So - adding constructor to the class to initialise the state
    constructor(props) {
        // NB - in Javascript classes, have to explicitly call `super();` when
        //      defining the constructor of a subclass
        super(props);
        this.state = {
            value: 'M'
        };
    }
    // now that we've enabled state controll within the component, we can display
    // the value from the current state and toggle it on click

    // NB - whenever `this.setState` is called, an update to the component is scheduled
    //      causing react to:
    //
    //      1. merge in the passed state update
    //      2. render the component along with its descendants
    //
    render() {
        return (
            <button className="square" onClick={() => this.setState({value: 'X'})}>
                {this.state.value}
            </button>
        );
    }

}

// now export Square component
export default Square;
