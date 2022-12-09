import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const StudentList = () => {
    const [state, setState] = useState({
        loading: false,
        students: [],
        errorMesage:''
    });
    useEffect(() =>{
        loadStudents();
    },[]);
    const loadStudents = async () => {
        try{
            setState({...state, loading: true})
            const response = await axios.get("http://localhost:8000/api/getAllStudent");
            console.log(response);
            setState({
                ...state,
                loading: false,
                students: response.data
            });
        }catch(error){
            setState({
                ...state,
                loading: false,
                errorMesage: error.message
            });
        }
    }
    const clickDelete = async(id) => {
        try{
            let response = await axios.delete(`http://localhost:8000/api/deleteStudentId/${id}`);
            if(response){
                alert('Xóa thông tin sinh viên có id:'+`${id}`+' thành công');
                console.log("deleted")
                setState({...state, loading: true})
                let response = await axios.get("http://localhost:8000/api/getAllStudent");
                setState({
                    ...state,
                    loading: false,
                    students: response.data
            });
            }
        }catch(error){
            console.log("can't delete")
            setState({
                ...state,
                loading: false,
                errorMesage: error.message
            });
        }
    }
    return(
        <React.Fragment>
            <section className="student-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">
                                    Student Manager
                                </p>
                            </div>
                        </div>
                        <div className="row">
 
                        </div>
                    </div>
                </div>

            </section>

            <section className="student-list" >
                <div className="container">
                    <div className="row">
                        {
                            state.students.length > 0 &&
                            state.students.map(student =>{
                            return (
                            <div className="col-md-6" key={student._id}>
                            <div className="card my-2">
                               <div className="card-body">
                                <div className= "row align-items-center ">
                                   <div className="col-md-4">
                                       <img src={student.avatar} alt="" className="img-fluid student-img"></img>
                                   </div>
                                   <div className="col-md-7">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                            Name: <span>{student.name}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            MSSV: <span>{student.mssv}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Class: <span>{student.class}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Course: <span>{student.course}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Email: <span>{student.email}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Phone: <span>{student.phone}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Address: <span>{student.address}</span>
                                        </li>
                                    </ul>
                                   </div>
                                   <div className="col-md-1 d-flex flex-column align-items-center">
                                    <Link to={`/students/edit/${student._id}`} className="btn btn-warning my-1">
                                        <i className="fa fa-pencil"></i>
                                    </Link>
                                    <button className="btn btn-danger my-1 " onClick={() => clickDelete(student._id)}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                   </div>
                                </div>
                               </div> 
                            </div>
                        </div>
                               )
                        })
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default StudentList;
