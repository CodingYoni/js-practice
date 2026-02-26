function checkAdult(user){

    console.log("name: ", user.name);
    
    if(user.age < 18){
        console.log("Minor");
    }
    else{
        console.log("Adult");
      
    }
    
}

let user1 = {
  name: "Yoni",
  age: 20,
  city: "London"
};

let user2 = {
  name: "Sarah",
  age: 16,
  city: "Manchester"
};

checkAdult(user1);
checkAdult(user2);