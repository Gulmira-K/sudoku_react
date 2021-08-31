import './Block.scss';

const Block = () => {
  const length = 3,
        grid = Array(length).fill([]).map(() => {
          return Array(length).fill('');
        });

  let matrix = '', i, j;

  for (i = 0; i < length; i += 1) {
    matrix += '<div class="row">';

    for (j = 0; j < length; j += 1) {
      matrix += `<div class="cell">${grid[i][j]}</div>`
    }

    matrix += '</div>'
  }
console.log(matrix)

  
  return (
    <div className='BlockContainer' dangerouslySetInnerHTML={{__html: matrix}}>
    </div>
  )
}

export default Block
