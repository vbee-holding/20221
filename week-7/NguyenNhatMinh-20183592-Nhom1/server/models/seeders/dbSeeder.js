import mongooseConnection from '@root/config/mongodb'
import studentSeeder from "@root/models/seeders/studentSeeder";

const seed = async () => {
    try {
        await studentSeeder()
        await mongooseConnection.close()
    } catch (error) {
        console.log(error)
    }
}

seed()
