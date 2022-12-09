import { useState } from "react";
import { Button, Form } from "react-bootstrap"
import { addStudent } from "../apis/student"

export const AddStudent = () => {
    const [student, setStudent] = useState({
        name: "",
        studentId: "",
        className: "",
        schoolYear: "",
        email: "",
        phoneNumber: "",
        image: "",
        address: "",
    })

    const { name, studentId, className, schoolYear, email, phoneNumber, image, address } = student

    const onInputChange = e => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    const onSubmitAddNew = async (e) => {
        e.preventDefault()
        await addStudent(student)
        alert('Add student successfully')
        window.location.reload()
    }

    return (
        <div>
            <Form onSubmit={(e) => onSubmitAddNew(e)}>
                <Form.Group className="mb-3" >
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Student Name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Student ID</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Student ID"
                        name="studentId"
                        value={studentId}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Lớp sinh viên</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Class Name"
                        name="className"
                        value={className}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Khóa</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="School Year"
                        name="schoolYear"
                        value={schoolYear}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={address}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Image Link"
                        name="image"
                        value={image}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
