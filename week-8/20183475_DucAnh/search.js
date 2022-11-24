import students from './students.json' assert{type: 'json'};
let searchBtn =  document.querySelector("#searchbtn");
searchBtn.onclick = function seachFunction(){
    let input = document.querySelector('#searchfield').value;
    let ressult = document.querySelector('#data-infor');
    let searchInput = (input.toString()).toLowerCase();
    let outp = "";
    var isFound = false;
    if(searchInput!=""){
        outp+=`<h4 style="text-align: left; margin-left:30px">Kết quả tìm kiếm: </h4>`;
        for (let student of students){
            if((student.fullName.toLowerCase()).includes(searchInput)){
                outp+=`
                <div class="find-res">
                    <img src="${student.avatar}" style="max-width: 150px">
                    <div>
                        <h3>Sinh viên: ${student.fullName} - ${student.id}</h3>
                        <ul class="info-list">
                            <li>Email:  ${student.email}</li>
                            <li>Địa chỉ:  ${student.address}</li>
                            <li>Lớp:  ${student.class}</li>
                            <li>Khóa:  ${student.year}</li>
                            <li>Số điện thoại:  ${student.phone}</li>
                        </ul>
                        <hr/>
                    </div>
                </div>
                `;
                isFound= true;
            }
        }
        if(!isFound){
            outp+=`
                <h4 style="color: red">Không tìm thấy sinh viên có tên như trên!</h4>
            `
        }
    }
    ressult.innerHTML = outp;
}