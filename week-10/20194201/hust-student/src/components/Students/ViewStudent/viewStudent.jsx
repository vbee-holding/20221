import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const ViewStudent = () =>{
    let {id} = useParams();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const [state, setState] = useState({
        loading: false,
        student:'',
        errorMessage:''
    });

    useEffect(() =>{
        loadStudent();
    },[id]);
    const loadStudent = async () => {
        try{
            setState({...state, loading: true})
            const response = await axios.get(`http://localhost:8000/api/findStudent/${id}`);
            console.log(response);
            setState({
                ...state,
                loading: false,
                student: (response.data)
            });
            console.log("res", student)
        }catch(error){
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            });

        }
    }
    const {loading, student, errorMessage} = state;
    const detail = JSON.stringify(student);
    return(
        <React.Fragment>
            <pre>{detail}</pre>
            <section className="view-student-intro p-3">
                <div className="container">
                    <div className="row"  >
                        <div className="col">
                            <p className="h3 text-danger fw-bold"> View Student</p>
                            <p>{id}</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>

            {
                <React.Fragment>
                    {
                        // Object.keys(student).length > 0 &&
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            {/* <img src = "" alt="" className="student-img"></img> */}
                        </div>
                        <div className="col-md-8">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-action">
                                    Name:<span className="fw-blold">{detail.name}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Mssv:<span className="fw-blold">{student.mssv}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Class:<span className="fw-blold"></span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Course:<span className="fw-blold"></span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Email:<span className="fw-blold"></span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Phone:<span className="fw-blold"></span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Adress:<span className="fw-blold"></span>
                                </li>

                            </ul>
                            <div className="row my-2">
                            <div className="col">
                                <Link to={'/students/list'} className ="btn btn-warning" >Back</Link>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    
                </div> 

            </section>
                    }
                </React.Fragment>
                
            }
        </React.Fragment>
    )
};
export default ViewStudent;