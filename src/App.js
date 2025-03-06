import logo from './logo.png';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="img-fluid App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by{' '}
          <a
            href="https://www.linkedin.com/in/saffron-williamson/"
            target="_blank"
            rel="noreferrer"
          >
            Saffron Williamson
          </a>
          , open sourced on{' '}
          <a
            href="https://github.com/SaffronWilliamson/dictionary-app-saffron-williamson"
            target="_blank"
            rel="noreferrer"
          >
            GitHib
          </a>
          , and hosted on{' '}
          <a
            href="https://dictionary-app-saffron-williamson.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
