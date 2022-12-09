import {
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Box
} from "@mui/material"
import { useState } from "react";
import { createStudent } from "../services/StudentService";

export default function CreateData({ open, handleClose }) {
  const [student, setStudent] = useState({
    name: '',
    MSSV: '',
    class: '',
    course: '',
    email: '',
    phonenumber: '',
    adress: '',
    image: [{url:''},{imagename:''}]
  })

  const handleChange = (event) => {
    const { value, name } = event.target;
    setStudent({ ...student, [name]: value })
  }

  const handleSubmit = async (student) => {
    const success = await createStudent(student);
    if (success) {
      alert("Thêm mới sinh viên thành công!");
      handleClose();
      window.location.reload();
    } else {
      alert("Thêm mới sinh viên thất bại!");
    }
  }

  return (
    <Container>
      <Dialog open={open}>
        <DialogTitle>Thêm mới sinh viên</DialogTitle>
        <DialogContent>
          <Box style={{ height: '60px', marginLeft: '40%' }}>
            <img src={student.imagePath} alt="Failed to load" width="60px" height="60px" />
          </Box>
          <TextField
            autoFocus
            margin="dense"
            name="imagePath"
            label="URL"
            fullWidth
            value={student.imagePath}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="MSSV"
            label="MSSV"
            fullWidth
            value={student.MSSV}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Họ và tên"
            fullWidth
            value={student.name}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="class"
            label="Lớp"
            fullWidth
            value={student.class}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="course"
            label="Khóa"
            fullWidth
            value={student.course}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={student.email}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="phonenumber"
            label="Số điện thoại"
            fullWidth
            value={student.phonenumber}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="adress"
            label="Địa chỉ"
            fullWidth
            value={student.adress}
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose("create")}>Cancel</Button>
          <Button onClick={() => handleSubmit(student)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
