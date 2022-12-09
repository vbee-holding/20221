import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const EditStudent = () => {
    let {id} = useParams();
    let navigate = useNavigate();
    const [student, setStudent] = useState({
        name: "",
        mssv: "",
        class: "",
        course: "",
        email: "",
        phone: "",
        address: "",
        avatar: ""
    });

    const { name, mssv, Class, course, email, phone, address, avatar } = student;


    const updateInput = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        loadStudent();
    }, []);

    const submitForm = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:8000/api/updateStudentId/${id}`, student);
        alert('Sửa thông tin sinh viên thành công');
        navigate('/Students/list', {replace:true});
    }

    const loadStudent = async () => {
        const result = await axios.get(`http://localhost:8000/api/findStudent/${id}`);
        setStudent(result.data);
        console.log(student);
    }
    
    // const {loading, student, errorMesage} = state;
    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(info)}</pre> */}
            {/* <pre>{JSON.stringify(student)}</pre> */}
            <section className="add-student p-3">
                
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success ">
                                Edit Student
                            </p>
                            <p className="fst-italic">Enter information about the fields that need to be corrected</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input 
                                    required = {false}
                                    name="name"
                                    value={name}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required = {false}
                                    name="mssv"
                                    value={mssv}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Mssv" ></input>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required = {false}
                                    name="Class"
                                    value={Class}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Class" ></input>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required = {false}
                                    name="course"
                                    value={course}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Course" ></input>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required = {false}
                                    name="email"
                                    value={email}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Email" ></input>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required = {false}
                                    name="Phone"
                                    value={phone}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Phone" ></input>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required = {false}
                                    name="address"
                                    value={address}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Address" ></input>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required = {false}
                                    name="avatar"
                                    value={avatar}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Photo URL" ></input>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-success" value="Save" ></input>
                                    <Link to={'/students/list'} className ="btn btn-primary ms-2">Cancel</Link>
                                </div>
                            </form>
                        </div>
                        {/* <div className="col-md-6">
                            <img src ={avatar} alt="" className="img-fluid student-img"></img>
                        </div> */}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

};
export default EditStudent;
