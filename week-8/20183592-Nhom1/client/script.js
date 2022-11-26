fetch("http://localhost:9700/students/list")
    .then(function(data){
        return data.json();
    })
    .then(objectData =>{
        let tableData = ""
        objectData.map(value => {
            tableData += `<tr>
                <td>${value.name}</td>
                <td>${value.studentId}</td>
                <td>${value.class}</td>
                <td>${value.schoolYear}</td>
                <td>${value.email}</td>
                <td>${value.phoneNumber}</td>
                <td><img src="${value.image}"/></td>
                <td>${value.address}</td>
                </tr>
</h1>`
        })
        document.getElementById("table_body").innerHTML=tableData
    });
