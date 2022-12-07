import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import DetailStudent from './components/DetailStudent';
import Nav from './components/Nav';
import Students from './components/Students';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Students />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
