fetch("students.json")
.then(function(response){
    return response.json();
})
.then(function(students){
    let placeholder = document.querySelector("#data-output");
    let out = "";
        for (let student of students){
            out +=`
                <tr>
                    <td>${student.id}</td>
                        
                        <td>${student.fullName}</td>
                        <td>${student.year}</td>
                        <td>${student.class}</td>
                </tr>
            `;
        }    
    placeholder.innerHTML = out;
})
