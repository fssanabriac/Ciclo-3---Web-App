import logo from './logo.svg';
import './App.css';
import Hello from 'components/Hello'

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
      <hr></hr>
      <footer>
        And this is the footer
        <Bye name="Marge" surname="Simpson"/>
        <Bye name="Homer" surname="Simpson"/>
      </footer>
    </div>
  );
}


function Bye({ name, surname }){
  return(
    <div>
      <span>Bye bye {name} {surname}</span>
    </div>
  );
}

export default App;
