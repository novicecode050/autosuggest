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
document.getElementById("card-name").innerHTML=users[currId].name;
document.getElementById("card-gender").innerHTML=users[currId].gender;
document.querySelector("#card-img img").src=users[currId].image;
}

function getRandomUser(){
    fetch("https://randomuser.me/api/")
    .then(function(data){
        return data.json();
    })
    .then(function(parsedData){
       let gender=parsedData.results[0].gender;
         let name=parsedData.results[0].name.first+" "+parsedData.results[0].name.last;
         let image=parsedData.results[0].picture.large;
         document.getElementById("card-name").innerHTML=name;
         document.getElementById("card-gender").innerHTML="Gender: "+gender;
         document.querySelector("#card-img img").src=image;
    })
}