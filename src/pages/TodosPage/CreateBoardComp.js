import {Component} from 'react';
import './CreateGameComp.styl';
import Square from './CreateSquareComp';

class Board extends Component {
    renderSquare(i) {
        return <Square value={i}/>;
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
