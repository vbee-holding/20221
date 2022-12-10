import { useEffect, useState } from "react"
import { getStudent } from "../apis/student";
import '../style/DetailStudent.scss'

export const studentInfo = (props) => {
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

    const id = props.idToShowDetail;

    useEffect(() => {
        loadStudent();
    }, [])

    const loadStudent = async () => {
        const result = await getStudent(id)
        setStudent(result);
    }
    return (
        <>
            <div className="mem-inform">
                <img className="mem-img" src={student.image} alt="Check the url" />
                <div className="detail-inform">
                    <h2>Họ tên: {student.name}</h2>
                    <h3>MSSV: {student.studentId}</h3>
                    <h4>Khóa: {student.schoolYear} </h4>
                    <h4>Lớp: {student.className} </h4>
                    <h4>Email: {student.email} </h4>
                    <h4>Số điện thoại: {student.phoneNumber} </h4>
                    <h4>Địa chỉ: {student.address} </h4>
                </div>
            </div>
        </>
    )
}
