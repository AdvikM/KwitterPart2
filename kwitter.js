function addUser(){
    let user=document.getElementById("userName").value;
    localStorage.setItem("User", user);
    window.location="kwitter_room.html"
}