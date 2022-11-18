import { connect } from 'mongoose';

const mydbURI = 'mongodb+srv://anh-nnd183475:cnoGJC76@cluster0.uoiaguo.mongodb.net/test'
const dbName = 'myDB';

const con = connect(mydbURI, (error) => {
	if(error){
		console.log("Error: " + error);
	}else{
		console.log("Connected successfully to Database!")
	}
});

export default con;
