const name = document.getElementById('Name')
const surname = document.getElementById('Surname')
const age = document.getElementById('Age')
const studentID = document.getElementById('StudentID')
const formbutton = document.getElementById('formbutton')
const avatarDiv = document.querySelector('.avatar')
const formid = document.getElementById('formid')



axios.post("https://655c30a1ab37729791aa03c7.mockapi.io/sdu/students",{
           name: name.value,
           surname: surname.value,
           age: age.value,
           studentID: studentID.value
})
.then(response => {
    console.log(response.data);
})
});
    

axios.get("https://655c30a1ab37729791aa03c7.mockapi.io/sdu/students")
.then((res) => {
    const students = res.data;
    const avatarUrl = students[1].avatar;
    const avatarImage = document.createElement('img');
    avatarImage.src = avatarUrl;
    avatarDiv.appendChild(avatarImage);
    });


    formid.addEventListener("submit", function(event){
        event.preventDefault();
        axios.post("https://655c30a1ab37729791aa03c7.mockapi.io/sdu/students",{
        name: name.value,
        surname: surname.value,
        age: age.value,
        studentID: studentID.value
     
})
    })
