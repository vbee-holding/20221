import React, { useRef, useState } from 'react'
import './App.css'

function App() {
    const list = [
      {
        "id":20181111,
        "email": "paolo@hust.edu.vn",
        "fullName": "Paolo Maldini",
        "Class": "IT2-04",
        "year": "63",
        "phone": "0392673583",
        "address": "10 Xã Đàn, Đống Đa, Hà Nội",
        "avatar": 'https://drive.google.com/file/d/1vhv4K8tpHYmgIhRg0pAmtH1xLeB1o0gW/view?usp=share_link'
    },
    {
        "id":20182222,
        "email": "delpiero@hust.edu.vn",
        "fullName": "Alexandro Del Piero",
        "Class": "IT1-02",
        "year": "63",
        "phone": "0392678899",
        "address": "22 Phố Huế, Hà Nội",
        "avatar": "../public/img2.jpg"
    },
    {
        "id":20178777,
        "email": "davidbeckham@hust.edu.vn",
        "fullName": "David Beckham",
        "Class": "IT1-01",
        "year": "62",
        "phone": "0392674576",
        "address": "276 Đường Láng, Đống Đa, Hà Nội",
        "avatar": "../public/img3.jpg"
    },
    {
        "id":20198888,
        "email": "cannavaro@hust.edu.vn",
        "fullName": "Fabio Cannavaro",
        "Class": "IT1-05",
        "year": "64",
        "phone": "0392689987",
        "address": "Vinh, Nghệ An",
        "avatar": "../public/img4.jpg"
    },
    ]
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    return(
      <>
      <div className='header'>
          <h1 className='h1'>Trang quản lý sinh viên</h1>
          <hr className='hr1'></hr>
        </div>  
      <div className='listsv'>    
        <div>
            <AddList setList = {setList }/>
            <form onSubmit={handleSubmit}>
            <table>
                            <td>Student ID</td>
                            <td>Email</td>
                            <td>Full Name</td>
                            <td>Class</td>
                            <td>School Year</td>
                            <td>Avatar</td>
                            <td>Address</td>
                {
                    lists.map((current) => (
                        updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                        <tr>
                            <td>{current.id}</td>
                            <td>{current.email}</td>
                            <td>{current.fullName}</td>
                            <td>{current.Class}</td>
                            <td>{current.year}</td>
                            <td><img src={current.avatar} width="180px" height="240px"/></td>
                            <td>{current.address}</td>
                            <td>
                                <button className='edit' onClick={() => handleEdit(current.id)}>Sửa</button>
                                <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
            </div>
        </div></>
    )

    function handleEdit(id) {
        setUpdateState(id)
    }
    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    function handleSubmit(event) {
      event.preventDefault()
      const fullName = event.target.elements.fullName.value
      const id = event.target.elements.id.value
      const Class = event.target.elements.Class.value
      const schoolYear = event.target.elements.schoolYear.value
      const email = event.target.elements.email.value
      const avatar = event.target.elements.avatar.value
      const address = event.target.elements.address.value
      const newlist = lists.map((li) => (
          li.id === updateState ? {...li, id:id, email:email,Class:Class,schoolYear:schoolYear,fullName:fullName,avatar:avatar,address:address} : li
      ))

      setList(newlist)
      setUpdateState(-1)
  }
}

function EditList({current, lists, setList}) {
  function handInputname(event) {
      const value = event.target.value;
      const newlist = lists.map((li) => (
          li.id === current.id ? {...li, name :value} : li
      ))

      setList(newlist)
  }
  function handInputMSSV(event) {
      const value = event.target.value;
      const newlist = lists.map((li) => (
          li.id === current.id ? {...li, MSSV :value} : li
      ))

      setList(newlist)
  }
  function handInputClass(event) {
      const value = event.target.value;
      const newlist = lists.map((li) => (
          li.id === current.id ? {...li, Class :value} : li
      ))

      setList(newlist)
  }
  function handInputSchoolYear(event) {
      const value = event.target.value;
      const newlist = lists.map((li) => (
          li.id === current.id ? {...li, course :value} : li
      ))

      setList(newlist)
  }
  function handInputemail(event) {
      const value = event.target.value;
      const newlist = lists.map((li) => (
          li.id === current.id ? {...li, email :value} : li
      ))

      setList(newlist)
  }
  function handInputAvatar(event) {
      const value = event.target.value;
      const newlist = lists.map((li) => (
          li.id === current.id ? {...li, image :value} : li
      ))

      setList(newlist)
  }
  function handInputaddress(event) {
      const value = event.target.value;
      const newlist = lists.map((li) => (
          li.id === current.id ? {...li, adress :value} : li
      ))

      setList(newlist)
  }
  return(
      <tr>
          <td><input type="text" onChange={handInputname} name='fullName' value={current.fullName}/></td>
          <td><input type="text" onChange={handInputMSSV} name='id' value={current.id}/></td>
          <td><input type="text" onChange={handInputClass} name='Class' value={current.Class}/></td>
          <td><input type="text" onChange={handInputSchoolYear} name='schoolYear' value={current.schoolYear}/></td>
          <td><input type="text" onChange={handInputemail} name='email' value={current.email}/></td>
          <td><input type="text" onChange={handInputAvatar} name='image' value={current.avatar}/></td>
          <td><input type="text" onChange={handInputaddress} name='address' value={current.address}/></td>
          <td><button type='submit'>Update</button></td>
      </tr>
  )
}


function AddList({setList}) {
    const fullNameRef = useRef()
    const idRef = useRef()
    const classRef = useRef()
    const schoolYearRef = useRef()
    const emailRef = useRef()
    const avatarRef = useRef()
    const addressRef = useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const fullName = event.target.elements.fullName.value;
        const id = event.target.elements.id.value;
        const Class = event.target.elements.Class.value;
        const schoolYear = event.target.elements.schoolYear.value;
        const email = event.target.elements.email.value;
        const avatar = event.target.elements.avatar.value;
        const address = event.target.elements.address.value;
        
        const newlist = {
            id,
            fullName,
            Class,
            schoolYear,
            email,
            avatar,
            address            
        }
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        fullNameRef.current.value = ""
        idRef.current.value = "" 
        classRef.current.value = ""
        avatarRef.current.value = ""
        schoolYearRef.current.value = ""
        emailRef.current.value = ""
        addressRef.current.value = ""
    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input type="text" name="fullName" placeholder="nhập tên" ref={fullNameRef}/>
            <input type="text" name="id" placeholder="nhập MSSV" ref={idRef}/>
            <input type="text" name="Class" placeholder="nhập lớp" ref={classRef}/>
            <input type="text" name="schoolYear" placeholder="nhập khóa" ref={schoolYearRef}/>
            <input type="text" name="email" placeholder="nhập email" ref={emailRef}/>
            <input type="text" name="avatar" placeholder="nhập địa chỉ" ref={avatarRef}/>
            <input type="text" name="address" placeholder="ảnh đại diện" ref={addressRef}/>
            <button type="submit">Thêm</button>
        </form>
    )
}

export default App;
