import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { getStudent, updateStudent } from "../apis/studentAPI";

const EditStudent = (props) => {
    const id = props.idToEdit;
    const [student, setStudent] = useState({
        name: "",
        mssv: "",
        classStudent: "",
        schoolYear: "",
        email: "",
        phone: "",
        address: "",
        image: ""
    });

    const { name, mssv, classStudent, schoolYear, email, phone, address, image } = student;

    const onInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        loadStudent();
    }, []);

    const onSubmitEdit = async (event) => {
        event.preventDefault();
        await updateStudent(id, student);
        alert('Sửa thông tin sinh viên thành công');
        window.location.reload();
    }

    const loadStudent = async () => {
        const result = await getStudent(id)
        setStudent(result);
    }

    return (
        <div>
            <Form onSubmit={e => onSubmitEdit(e)}>
                <Form.Group className="mb-3" >
                    <Form.Label>Họ tên sinh viên</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Mã số sinh viên</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter student id"
                        name="mssv"
                        value={mssv}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Lớp sinh viên</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter student's class"
                        name="classStudent"
                        value={classStudent}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Khóa</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter school year"
                        name="schoolYear"
                        value={schoolYear}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter student's phone number"
                        name="phone"
                        value={phone}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter student's address"
                        name="address"
                        value={address}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Ảnh sinh viên</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter URL"
                        name="image"
                        value={image}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Save Change
                </Button>
            </Form>
        </div>
    )

}

export default EditStudent;
