import '../style/Students.scss'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import DetailStudent from './DetailStudent';

const Students = () => {
    const [students, setStudents] = useState([]);

    // open/close modal add new
    const [showAddNew, setShowAddNew] = useState(false);
    const handleCloseAddNew = () => setShowAddNew(false);
    const handleShowAddNew = (id) => setShowAddNew(true);

    // open/close modal edit
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    // open/close modal detail
    const [showDetail, setShowDetail] = useState(false);
    const handleCloseDetail = () => setShowDetail(false);
    const handleShowDetail = () => setShowDetail(true);

    useEffect(() => {
        loadStudents();
    }, [])

    const loadStudents = async () => {
        const result = await axios.get("http://localhost:3300/students");
        setStudents(result.data);
    }

    const deleteStudent = async (id) => {
        alert('Xóa sinh viên thành công');
        await axios.delete(`http://localhost:3300/students/${id}`);
        loadStudents();
    }

    const [idToEdit, setIdToEdit] = useState();
    const handleEdit = (id) => {
        setIdToEdit(id);
        handleShowEdit();
    }

    const [idToShowDetail, setIdToShowDetail] = useState();
    const handleDetail = (id) => {
        setIdToShowDetail(id);
        handleShowDetail();
    }
    return (
        <>
            <Modal show={showAddNew} onHide={handleCloseAddNew}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm sinh viên</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <AddStudent />
                </Modal.Body>
            </Modal>

            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa thông tin sinh viên</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditStudent idToEdit={idToEdit}/>
                </Modal.Body>
            </Modal>

            <Modal size="lg" show={showDetail} onHide={handleCloseDetail}>
                <Modal.Header closeButton>
                    <Modal.Title>Chi tiết thông tin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DetailStudent idToShowDetail={idToShowDetail} />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDetail}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <h2 className='intro'>Student Information</h2>
            <Button className="btn-add-new" variant="primary" onClick={handleShowAddNew}>
                Thêm sinh viên
            </Button>
            <table className='table-inform'>
                <tr>
                    <th>Name</th>
                    <th>Student ID</th>
                    <th>Class</th>
                    <th>School Year</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Image</th>
                    <th>Option</th>
                </tr>
                {students.map(student => {
                    return (
                        <tr key={student._id}>
                            <td>{student.name}</td>
                            <td>{student.mssv}</td>
                            <td>{student.classStudent}</td>
                            <td>{student.schoolYear}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>{student.address}</td>
                            <td><img className="member-img" alt="test" src={`${student.image}`} /></td>
                            <td>
                                <table className='student-option'>
                                    <button onClick={() => handleDetail(student._id)}>Detail</button>
                                    <button onClick={() => handleEdit(student._id)}>Edit</button>
                                    <button onClick={() => deleteStudent(student._id)}>Delete</button>
                                </table>
                            </td>
                        </tr>
                    )
                })
            }
            </table>
        </>
    )
}

export default Students;
