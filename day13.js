let data = {
  users: [
    { name: "Tom", posts: ["Hello World", "Learning JS"] },
    { name: "Lisa", posts: ["My First Blog"] }
  ]
};

// Print all user names
for(let i = 0; i < data.users.length; i++){
  console.log(data.users[i].name);
}

// Print each post
for(let i = 0; i < data.users.length; i++){
  
  let posts = data.users[i].posts;

  for(let j = 0; j < posts.length; j++){
    console.log(posts[j]);
  }

}

// Print user + post
for(let i = 0; i < data.users.length; i++){

  let user = data.users[i];
  let posts = user.posts;

  for(let j = 0; j < posts.length; j++){
    console.log(user.name + " - " + posts[j]);
  }

}