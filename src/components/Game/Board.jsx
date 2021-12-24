import Cell from "./Cell";
import { useEffect, useState } from "react";

const isFull = (board) => {
  return !board.some((element) => {
    return element === "";
  });
};

const Board = ({ setBoard, board, logo, setLogo }) => {
  const [radar, setRadar] = useState(Array(9).fill(false));

  useEffect(() => {
    if (winner(board, "X")) {
      alert("X wins");
      setBoard(Array(9).fill(""));
    } else if (winner(board, "O")) {
      alert("O wins");
      setBoard(Array(9).fill(""));
    } else if (isFull(board)) {
      alert("DRAW!");
    }
  }, [board]);

  const affectChoice = (id) => {
    setBoard(
      board.map((element, index) => {
        if (index === id) {
          let symbol = logo;
          logo === "X" ? setLogo("O") : setLogo("X");
          return symbol;
        }
        return element;
      })
    );
  };

  return (
    <div className="board">
      {board.map((element, index) => {
        return (
          <Cell
            id={index}
            value={element}
            radar={radar}
            setRadar={setRadar}
            affectChoice={affectChoice}
          />
        );
      })}
    </div>
  );
};

export default Board;

const winner = (board, logo) => {
  return (
    (board[0] === board[1] && board[1] === board[2] && board[2] === logo) ||
    (board[3] === board[4] && board[4] === board[5] && board[5] === logo) ||
    (board[6] === board[7] && board[7] === board[8] && board[8] === logo) ||
    (board[0] === board[3] && board[3] === board[6] && board[6] === logo) ||
    (board[1] === board[4] && board[4] === board[7] && board[7] === logo) ||
    (board[2] === board[5] && board[5] === board[8] && board[8] === logo) ||
    (board[0] === board[4] && board[4] === board[8] && board[8] === logo) ||
    (board[2] === board[4] && board[4] === board[6] && board[6] === logo)
  );
};
