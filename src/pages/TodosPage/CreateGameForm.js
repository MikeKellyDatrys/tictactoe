import {Component} from 'react';
import {reduxForm} from 'redux-form';
import Board from './CreateBoardComp';
import Game from './CreateGameComp';

// this js file contains the shell of the game

// it defines 3 components:

// 1. Square: renders a single <button> object on page
// 2. Board: renders 9 squares
// 3. Game: renders a board with some place holders

class GameBuilder extends Component {
    render() {
        return (
            <div>
                <Board />
                <Game />
            </div>
        );
    }
}

// ==============================

GameBuilder.propTypes = {
    fields: React.PropTypes.object.isRequired,
    handleSubmit: React.PropTypes.func.isRequired
  };

export default reduxForm({
    form: 'GameBuilder',
    fields: ['text']
  })(GameBuilder);


