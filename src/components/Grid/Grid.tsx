import { useEffect } from 'react';
import Block from '../Block/Block'
import './Grid.scss';

const Grid = () => {
  const rowColumnLength = 3,
      grid = Array(rowColumnLength).fill([]).map(() => {
        return Array(rowColumnLength).fill('');
      });

  const randomPlace =()=> {
    return Math.floor(Math.random() * (rowColumnLength - 0) + 0);
  }

  const randomNumber = () => {
    return Math.floor(Math.random() * (9 - 1) + 1);
  }

  // const initGame = () => {
  //   grid[randomPlace()][randomPlace()] = randomNumber();
  //   grid[randomPlace()][randomPlace()] = randomNumber();
  //   grid[randomPlace()][randomPlace()] = randomNumber();
  //   grid[randomPlace()][randomPlace()] = randomNumber();
  //   grid[randomPlace()][randomPlace()] = randomNumber();
  //   grid[randomPlace()][randomPlace()] = randomNumber();
  // }

  // useEffect(() => {
  //   initGame();
  // }, [])

  return (
    <div className='GridContainer'>
      <Block rowColumnLength={rowColumnLength} grid={grid} randomPlace={randomPlace} randomNumber={randomNumber}/>
      <Block rowColumnLength={rowColumnLength} grid={grid}  randomPlace={randomPlace} randomNumber={randomNumber}/>
      <Block rowColumnLength={rowColumnLength} grid={grid}  randomPlace={randomPlace} randomNumber={randomNumber}/>
      <Block rowColumnLength={rowColumnLength} grid={grid}  randomPlace={randomPlace} randomNumber={randomNumber}/>
      <Block rowColumnLength={rowColumnLength} grid={grid}  randomPlace={randomPlace} randomNumber={randomNumber}/>
      <Block rowColumnLength={rowColumnLength} grid={grid}  randomPlace={randomPlace} randomNumber={randomNumber}/>
      <Block rowColumnLength={rowColumnLength} grid={grid}  randomPlace={randomPlace} randomNumber={randomNumber}/>
      <Block rowColumnLength={rowColumnLength} grid={grid}  randomPlace={randomPlace} randomNumber={randomNumber}/>
      <Block rowColumnLength={rowColumnLength} grid={grid}  randomPlace={randomPlace} randomNumber={randomNumber}/>
    </div>
  )
}

export default Grid
