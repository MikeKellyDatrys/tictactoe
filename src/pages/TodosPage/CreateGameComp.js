import {Component} from 'react';
import './CreateGameComp.styl';

class Game extends Component {
    render() {
        return (
            <div className="game">
                {/* <div className="game-board">
                    <Board />
                </div> */}
                <div className="game-info">
                    <div>
                        {/* TODO: STATUS */}
                    </div>
                    <ol>
                        {/* TODO: LIST */}
                    </ol>
                </div>
            </div>
        );
    }
}

// now export Game component
export default Game;
