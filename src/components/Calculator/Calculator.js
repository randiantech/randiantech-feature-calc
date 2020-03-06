import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Board, {moveCard} from '@lourenci/react-kanban';

import './Calculator.css';

const board = {
  columns: [
    {
      id: 1,
      title: 'Available Packages',
      cards: [
        {
          id: 1,
          title: 'Minor Visual Defect',
          description: 'usd4K',
          cost: 4,
        },
        {
          id: 2,
          title: 'Medium Visual Defect',
          description: 'usd6K',
          cost: 6,
        },
        {
          id: 3,
          title: 'Major Visual Defect',
          description: 'usd12K',
          cost: 12,
        },
        {
          id: 4,
          title: 'Minor API Defect',
          description: 'usd4K',
          cost: 4,
        },
        {
          id: 5,
          title: 'Medium API Defect',
          description: 'usd6K',
          cost: 6,
        },
        {
          id: 6,
          title: 'Major API Defect',
          description: 'usd12K',
          cost: 12,
        },
        {
          id: 7,
          title: 'Minor Visual Feature',
          description: 'usd6K',
          cost: 6,
        },
        {
          id: 8,
          title: 'Medium Visual Feature',
          description: 'usd15K',
          cost: 15,
        },
        {
          id: 9,
          title: 'Major Visual Feature',
          description: 'usd35K',
          cost: 35,
        },
                {
          id: 10,
          title: 'Minor API Feature',
          description: 'usd6K',
          cost: 6,
        },
        {
          id: 11,
          title: 'Medium API Feature',
          description: 'usd15K',
          cost: 15,
        },
        {
          id: 12,
          title: 'Major API Feature',
          description: 'usd35K',
          cost: 35,
        },
      ],
    },
    {
      id: 2,
      title: 'Selected Packages',
      cards: [],
    },
  ],
};

function ControlledBoard(setTotalHandler) {
  const [controlledBoard, setBoard] = useState(board);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  let total = 0;
  controlledBoard.columns[1].cards.forEach(card => total += card.cost);
  setTotalHandler.setTotal(total);

  return (
    <Board onCardDragEnd={handleCardMove} disableColumnDrag>
      {controlledBoard}
    </Board>
  );
}

function Calculator() {
  const [total, setTotalHandler] = useState(0);
  return (
    <div className="calculator-container">
      <div className="calculator-container-title">
        Drag And Drop Feature / Defect Packages to calculate Price of Complex
        Requirements
      </div>
      <div className="calculator-container-wrapper">
        <ControlledBoard setTotal={setTotalHandler}/>
        <div className="calculator-price-label">{total === 0 ? 'Drag and Drop packages to Selected Column' : `Total: usd ${total}K`}</div>
      </div>
    </div>
  );
}

export default Calculator;
