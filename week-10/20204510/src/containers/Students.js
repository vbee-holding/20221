import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import CustomModal from '../component/CustomModal';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import DetailStudent from './DetailStudent';
import { getAllStudent } from '../apis/studentAPI';
import { deleteStudent } from '../apis/studentAPI';
import '../style/Students.scss';

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
        const result = await getAllStudent();
        setStudents(result);
    }

    const handleDeleteStudent = async (id) => {
        await deleteStudent(id);
        alert('Xóa sinh viên thành công');
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
            <CustomModal 
                show={showAddNew}
                onAction={handleCloseAddNew}
                title={'Thêm sinh viên'}
                form={<AddStudent/>}
            />

            <CustomModal 
                show={showEdit}
                onAction={handleCloseEdit}
                title={'Chỉnh sửa thông tin sinh viên'}
                form={<EditStudent idToEdit={idToEdit} />}
            />            

            <CustomModal 
                isDetail={'true'}
                size={'lg'}
                show={showDetail}
                onAction={handleCloseDetail}
                title={'Chi tiết thông tin'}
                form={<DetailStudent idToShowDetail={idToShowDetail} />}
            />  

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
                                    <button onClick={() => handleDeleteStudent(student._id)}>Delete</button>
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
