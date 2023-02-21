import React, { useEffect, useState } from 'react';
import attack from "../assets/attack.png";
import defend from "../assets/defend.png";


function Counter() {
  const [count, setCount] = useState(0);
  const [gameStatus, setGameStatus] = useState('');
  const [lastPlay, setLastPlay] = useState('');

  useEffect(() => {
    if (-10 < count < 10) {
      setGameStatus('In process to define');
    }
    if (count >= 10) {
      setGameStatus('You Won');
    }
    if (count <= -10) {
      setGameStatus('You Lost');
    }
    if (count === 0) {
      setGameStatus('');
    }
  }, [count])

  // function handleStatus(newCount) {
  //   if (-10 < newCount < 10) {
  //     setGameStatus('In process to define');
  //   }
  //   if (newCount >= 10) {
  //     setGameStatus('You Won');
  //   }
  //   if (newCount <= -10) {
  //     setGameStatus('You Lost');
  //   }
  // }

  function handleAttack() {
    let newCount = count + Math.round(Math.random() * 10);
    setCount(newCount);
    setLastPlay("Attack");
  }

  function handleDefence() {
    let newCount = count - Math.round(Math.random() * 10);
    setCount(newCount);
    setLastPlay("Defend");
  }

  function handleReset() {
    setCount(0);
    setLastPlay('');
  }

  function handleRandomPlay() {
    let playMode = Math.round(Math.random());
    if (playMode == 0) {
      handleAttack();
    } else {
      handleDefence();
    }
  }

  return (
    <div className='row text-white text-center'>
      <h1>Game Score: {count}</h1>
      <p>You win at +10 points and lose at -10 points!</p>
      <p>Last Play: {lastPlay}</p>
      <h1>Game Status : {gameStatus}</h1>
      <div className="col-6 col-md-3 offset-md-3">
        <img style={{
          width: '100%',
          cursor: 'pointer',
          border: '1px solid green'
        }}
          className='p-4 rounded'
          src={attack}
          onClick={handleAttack} />
      </div>
      <div className="col-6 col-md-3 ">
        <img style={{
          width: '100%',
          cursor: 'pointer',
          border: '1px solid red'
        }}
          className='p-4 rounded'
          src={defend}
          onClick={handleDefence} />
      </div>
      <div className="col-12 col-md-4 offset-md-4">
        <button onClick={handleRandomPlay} className='btn btn-secondary w-100 mt-2'>Random Play</button>
        <button onClick={handleReset} className='btn btn-warning w-100 mt-2'>Reset Game</button>
      </div>
    </div>
  )
}

export default Counter