import {Component} from 'react';
import './CreateGameComp.styl';

class Square extends Component {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

// now export Square component
export default Square;
