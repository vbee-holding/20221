import Nav from './container/Nav'
import { Students } from './container/student'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

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
