import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addStudent } from "../apis/studentAPI";

const AddStudent = () => {
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

    const onInputChange = e => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }

    const onSubmitAddNew = async (e) => {
        e.preventDefault();
        await addStudent(student);
        alert('Thêm sinh viên thành công');
        window.location.reload();
    }

    return (
        <div>
            <Form onSubmit={(e) => onSubmitAddNew(e)}>
                <Form.Group className="mb-3" >
                    <Form.Label>Họ tên sinh viên</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nhập tên sinh viên"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Mã số sinh viên</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nhập mã số sinh viên"
                        name="mssv"
                        value={mssv}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Lớp sinh viên</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nhập lớp sinh viên"
                        name="classStudent"
                        value={classStudent}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Khóa</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Nhập khóa sinh viên"
                        name="schoolYear"
                        value={schoolYear}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Nhập email"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nhập số điện thoại"
                        name="phone"
                        value={phone}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nhập địa chỉ"
                        name="address"
                        value={address}
                        onChange={e => onInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Ảnh sinh viên</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nhập đường dẫn ảnh"
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

export default AddStudent;
