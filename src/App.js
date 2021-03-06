import Menu from './Components/MENU/index';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Rotas from './rotas';
import './App.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu />
        </header>
        <main>
          <Container fluid>
            <Rotas />
          </Container>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>

    </BrowserRouter>
  )
}

export default App;
