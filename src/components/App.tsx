import Grid from "./Grid/Grid";
import InputNumbers from "./InputNumbers/InputNumbers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sudoku</h1>
      </header>
      <main>
        <Grid />
        <InputNumbers />
      </main>
      <footer>
        Coded by Gulmira Kojenova
      </footer>
    </div>
  );
}

export default App;
