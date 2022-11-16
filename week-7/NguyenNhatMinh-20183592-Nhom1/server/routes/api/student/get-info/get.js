import {getStudentInfo} from "@root/controllers/studentController";
import {HTTP_STATUS} from "@root/utils/constant";

export default async (req, res) => {
    try {
        const response = await getStudentInfo(req)
        return res.status(HTTP_STATUS.OK).json(response)
    } catch (error) {
        console.log(error)
    }
}