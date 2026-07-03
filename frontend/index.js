const users=[
    {
        name:"Jane Doe",
        gender:"Female",
        
    },
    {
        name:"John Doe",
        gender:"Male"
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
}

console.log("Hello from JS");