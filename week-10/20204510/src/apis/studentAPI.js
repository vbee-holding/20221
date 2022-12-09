import axios from "axios";
import Link from "../constants/Link";

const url = Link.URL;

export const getAllStudent = async () => {
    const result = await axios.get(url);
    return result.data;
}

export const getStudent = async (id) => {
    const result = await axios.get(url+id);
    return result.data;
}

export const addStudent = async (student) => {
    const result = await axios.post(url,student);
    return result.data;
}

export const deleteStudent= async (id) => {
    await axios.delete(url+id);
}

export const updateStudent = async (id, student) => {
    await axios.put(url+id, student);
}
