import { Home, Login } from './pages/';
import Header from './components/Header';

import './App.module.css';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
      </main>
    </>
  )
}

export default App;
