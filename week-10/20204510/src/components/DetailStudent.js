import axios from "axios";
import { useEffect, useState } from "react"
import '../style/DetailStudent.scss'

const DetailStudent = (props) => {
    const [student, setStudent] = useState({
        name: "",
        mssv: "",
        classStudent: "",
        schoolYear: "",
        email: "",
        phone: "",
        address: "",
        image: ""
    })

    const id = props.idToShowDetail;
    useEffect(() => {
        loadStudent();
    }, [])

    const loadStudent = async () => {
        const result = await axios.get(`http://localhost:3300/students/${id}`);
        setStudent(result.data);
    }
    return (
        <>
            <div className="mem-inform">
                <img className="mem-img" src={student.image} alt="Check the url" />
                <div className="detail-inform">
                    <h2>Họ tên: {student.name}</h2>
                    <h3>MSSV: {student.mssv}</h3>
                    <h4>Khóa: {student.schoolYear} </h4>
                    <h4>Lớp: {student.classStudent} </h4>
                    <h4>Email: {student.email} </h4>
                    <h4>Số điện thoại: {student.phone} </h4>
                    <h4>Địa chỉ: {student.address} </h4>
                </div>
            </div>
        </>
    )
}

export default DetailStudent;
