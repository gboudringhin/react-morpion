import { useState } from 'react'
import './App.css'
import Square from './components/Square'

function App() {

  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [status, setStatus] = useState(false);

  const checkIfWin = (squares) => {
    const layouts = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [6, 4, 2]
    ]

    for(let i = 0; i < layouts.length; i++) {
      const [a, b, c] = layouts[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return true;
      }
    }

    return false;
  }

  const handleClick = (index) => {
    const nextPlayer = currentPlayer === "O" ? "X" : "O"

    if (squares[index] || status) {
      return;
    }
    
    setSquares(squares => {
      const squaresCopy = [...squares];
      squaresCopy[index] = currentPlayer

      if (checkIfWin(squaresCopy)) {
        setStatus(true);
        setCurrentPlayer(currentPlayer);
      }

      return squaresCopy;
    })

    setCurrentPlayer(nextPlayer);
    
  }

  const handleRestart = () => {
    setSquares(Array(9).fill(null))
    setCurrentPlayer("X")
    setStatus(false)
  }

  return (
    <>
      <h1 className="title">Morpion react</h1>

      <div className="game-status">
        <h2>Joueur : {currentPlayer}</h2>
        {status && 
          <p>Le joueur {currentPlayer} a gagné la partie ! <button onClick={handleRestart}>Relancer</button></p>
        }
      </div>

      <div className="container">
        <div className="morpion-grid">
          <div className="row">
            <Square isClicked={() => handleClick(0)}>{squares[0]}</Square>
            <Square isClicked={() => handleClick(1)}>{squares[1]}</Square>
            <Square isClicked={() => handleClick(2)}>{squares[2]}</Square>
          </div>
          <div className="row">
            <Square isClicked={() => handleClick(3)}>{squares[3]}</Square>
            <Square isClicked={() => handleClick(4)}>{squares[4]}</Square>
            <Square isClicked={() => handleClick(5)}>{squares[5]}</Square>
          </div>
          <div className="row">
            <Square isClicked={() => handleClick(6)}>{squares[6]}</Square>
            <Square isClicked={() => handleClick(7)}>{squares[7]}</Square>
            <Square isClicked={() => handleClick(8)}>{squares[8]}</Square>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
