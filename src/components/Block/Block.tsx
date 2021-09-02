import { useEffect } from 'react';
import './Block.scss';

type BlockProps = {
  rowColumnLength: number,
  grid: any,
  randomPlace: any,
  randomNumber: any
}

const Block = ({rowColumnLength, grid, randomPlace, randomNumber}: BlockProps) => {
  let matrix = '', i, j;

  for (i = 0; i < rowColumnLength; i += 1) {
    matrix += '<div class="row">';

    for (j = 0; j < rowColumnLength; j += 1) {
      matrix += `<div class="cell">${grid[i][j]}</div>`

    }

    matrix += '</div>'
  }

  const initGame = () => {
    grid[randomPlace()][randomPlace()] = randomNumber();
    grid[randomPlace()][randomPlace()] = randomNumber();
    grid[randomPlace()][randomPlace()] = randomNumber();
    grid[randomPlace()][randomPlace()] = randomNumber();
    grid[randomPlace()][randomPlace()] = randomNumber();
    grid[randomPlace()][randomPlace()] = randomNumber();

  }

  useEffect(() => {
    initGame();
  }, [])

  return (
    <div className='BlockContainer' dangerouslySetInnerHTML={{ __html: matrix }}>
    </div>
  )
}

export default Block
