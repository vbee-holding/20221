import React, { useEffect } from "react";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
const AddStudent = () => {
    let navigate = useNavigate();
    const [state, setState] = useState({
       student: {
        name:'',
        mssv:'',
        class:'',
        course:'',
        email:'',
        phone:'',
        address:'',
        avatar:'',
       },
    });   
const updateInput =(event) => {
    setState({
        ...state,
        student:{
            ...state.student,
            [event.target.name]: event.target.value
        }
    });
}
const submitForm = async(event) =>{
    event.preventDefault();
    try{
        const response = await axios.post("http://localhost:8000/api/postStudent", state.student,
        );
        if(response){
            alert('Thêm sinh viên thành công');
            navigate('/Students/list', {replace:true});
        }
    }catch(error){
        setState({...state});
        navigate('/Students/list', {replace: false} );
    }
}
    return(
        <React.Fragment>
            <section className="add-student p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-danger ">
                                Add Student
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input 
                                    required ={true}
                                    name ="name" value={state.student.name}
                                    onChange = {updateInput}
                                    type="text" className="form-control" placeholder="Name" ></input>
                                </div>
                                <div className="mb-2">
                                    <input
                                    required ={true}
                                    name ="mssv" value={state.student.mssv}
                                    onChange = {updateInput}
                                    type="text" className="form-control" placeholder="Mssv" ></input>
                                </div>
                                <div className="mb-2">
                                    
                                    <input 
                                    required ={false}
                                    name ="class" value={state.student.class}
                                    onChange = {updateInput}
                                    type="text" className="form-control" placeholder="Class" ></input>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required ={false}
                                    name ="course" value={state.student.course}
                                    onChange = {updateInput}
                                    type="text" className="form-control" placeholder="Course" ></input>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required ={true}
                                    name ="email" value={state.student.email}
                                    onChange = {updateInput}
                                    type="text" className="form-control" placeholder="Email" ></input>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required ={false}
                                    name ="phone" value={state.student.phone}
                                    onChange = {updateInput}
                                    type="text" className="form-control" placeholder="Phone" ></input>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required ={false}
                                    name ="address" value={state.student.address}
                                    onChange = {updateInput}
                                    type="text" className="form-control" placeholder="Address" ></input>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required ={false}
                                    name ="avatar" value={state.student.avatar}
                                    onChange = {updateInput}
                                    type="text" className="form-control" placeholder="Photo URL" ></input>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-success" value="Save" ></input>
                                    <Link to={'/students/list'} className ="btn btn-primary ms-2">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default AddStudent;
