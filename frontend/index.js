const users=[
    {
        "name":"Jane Doe",
        "gender":"Female",
        "image":"./images/jane.png"
    },
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"./images/john.png"
    }
]
let currId=0;
function toggle(){
    if(currId==0){
        currId=1;
    }
    else{
        currId=0;
    }
document.getElementById("name").innerHTML=users[currId].name;
document.getElementById("gender").innerHTML=users[currId].gender;
document.getElementById("image").src=users[currId].image;
}
console.log("Hello from JS");