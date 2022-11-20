import Student from '@root/models/Student'

const studentSeeder = async () => {
    if ((await Student.countDocuments()) !== 0) return
    await Student.insertMany([
        {
            name: 'Nguyen Nhat Minh',
            studentId: '20183592',
            class: 'IT1-01',
            schoolYear: 63,
            email: 'minh.nn183592@sis.hust.edu.vn',
            phoneNumber: '0362372872',
            image: 'no',
            address: '4/196 Dai Mo'
        }
    ])

    console.log('Seeding: studentSeeder.js')
}

export default studentSeeder
