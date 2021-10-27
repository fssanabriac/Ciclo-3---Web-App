import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is the header
      </header>
      <main>
        SPRINT 1 - UI
        This is the main section
        <Hello name="Marge" />
        <Hello name='Homer' />
        <Hello name='Bart' />
        <Hello name='Lisa' />
      </main>
      <footer>
        And this is the footer
      </footer>
    </div>
  );
}

function Hello(props){
  return(
    <div>Hola {props.name}</div>
  );
}

export default App;
