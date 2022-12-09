import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import StudentList from './components/Students/StudentList/StudentList';
import AddStudent from './components/Students/AddStudent/AddStudent';
import EditStudent from './components/Students/EditStudent/EditStudent';
const App = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path={'/'} 
               element ={ <Navigate to ={'/Students/list'} />} >
        </Route>
        <Route path={'/Students/list'} 
               element ={<StudentList/>} >
        </Route>
        <Route path={'/Students/add'}
               element = {<AddStudent/>} >
        </Route>
        <Route path={'/Students/edit/:id'} 
               element ={<EditStudent/>} >
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
