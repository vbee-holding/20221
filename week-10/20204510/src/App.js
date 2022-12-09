import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Nav from './containers/Nav';
import Students from './containers/Students';

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
