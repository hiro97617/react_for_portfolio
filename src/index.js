import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css';

// Reactコンポーネント一つ目：Square
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      //渡された値の表示
      <button className="square" onClick={() => { this.setState({value:'X'}) }} >
        {this.state.value}
      </button>
    );
  }
}

// Reactコンポーネント二つ目：Board
class Board extends React.Component {
  renderSquare(i) {
    // propsとしてvalueという名前の値をSquareに渡せるようにする. props = コンポーネントに渡すデータ(引数)のようなもの
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
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

// Reactコンポーネント三つ目：Game
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
