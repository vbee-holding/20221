import axios from "axios"

const URL = 'http://localhost:3000/students/'

export const getAllStudent = async () => {
    const result = await axios.get(URL+'list')
    return result.data
}

export const getStudent = async (id) => {
    const result = await axios.get(URL+'info?studentId='+id)
    return result.data
}

export const addStudent = async (student) => {
    const result = await axios.post(URL,student)
    return result.data
}

export const deleteStudent= async (id) => {
    await axios.delete(URL+'delete?studentId='+ id)
}

export const updateStudent = async (id, student) => {
    await axios.put(URL, student)
}