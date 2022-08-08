import { Routes, Route, Navigate} from 'react-router-dom'
import { Home, Login, Signup, Game, History, Log } from './pages/';
import { Header } from './components/';

import './App.module.css';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/game" element={<Game />} />
          <Route path="/games" element={<History />} />
          <Route path="/game-log/:id" element={<Log />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
