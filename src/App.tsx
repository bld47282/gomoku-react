import { Routes, Route, Navigate} from 'react-router-dom'
import { Home, Login, Signup, Game, History, Log } from './pages/';
import { Header, UserProvider } from './components/';

import './App.module.css';

function App() {
  return (
    <UserProvider>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/game:size" element={<Game />} />
          <Route path="/history" element={<History />} />
          <Route path="/game-log/:id" element={<Log />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </UserProvider>
  )
}

export default App;
