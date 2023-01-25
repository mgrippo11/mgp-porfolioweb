import './App.css';

import Home from './views/Home';
import Main from './views/Main';
import Footer from './views/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
      <main className="App-main">
        <Main />
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
