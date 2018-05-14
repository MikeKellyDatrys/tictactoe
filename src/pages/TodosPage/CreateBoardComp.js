import {Component} from 'react';
import './CreateGameComp.styl';
import Square from './CreateSquareComp';

class Board extends Component {
    // create class constructor - remembering state of all squares on board
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        };
    }

    // definition for handlclick method
    handleClick(i) {
        // call `slice()` to copy the squares array to const squares (scope local to handleClick())
        // instead of mutating existing `this.state.squares` state - this is immutability in action!
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    // implement a mechanism for Square to update the state of
    // the board when clicked - NB - since component state is
    // considered private, we can't update Board's state from Square

    // there is a default pattern for this - pass down a function from
    // parent component to child component when child event happens (i.e.
    // in this instance, a click event on said sqaure on board)

    // note, adding patantheses around return value so that JS doesn't auto-insert
    // a semicolon after return declaration and break out code

    // note that we're now passing 2 props down from <Board /> to <Square />
    // these are value and onClick. onClick is a function that <Square /> can call

    renderSquare(i) {
        return ( <Square
                    value={this.state.squares[i]}
                    onClick={() => this.handleClick(i)} // set up a click event listener
                />
        );
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                {/* JSX status string here */}
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

// now export Board component
export default Board;
