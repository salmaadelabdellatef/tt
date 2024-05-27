var users=[{usernameeeee:"salma",passwordddd:"1234"}]
function signup(){
    let user_name=document.getElementById("user").value;
    let E_mail=document.getElementById("email").value;
    let Age=document.getElementById("age").value;
    let password=document.getElementById("pass").value;
    let passconfirm=document.getElementById("confirm").value;
    let phonenum=document.getElementById("phone").value;
    let regex=/^(?=.*[-\#$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d).{5,12}$/;
    if(user_name==""||E_mail==""||Age==""||password==""||passconfirm=="")
    {
        alert("please fill empty felids")
    }
    else if(user_name.length <5 ||user_name.length > 10)
    {
        alert("please fill valid name")
    }
    else if (password!==passconfirm)
    {
        alert("please enter pass match confirm pass")
    }
    else if(phonenum.length<11)
    {
        alert("must your phone 11 num")
    }
    else if(Age<18 || Age>60)
    {
         alert("must your age 18 between 60 ")

    }
    else if(!regex.test(password))
    {
        alert("must your strong password")
    }
    else
    {
        var obj = {usernameeeee:user_name,passwordddd:password}
        console.log(obj);
        users.push(obj);
        alert("succssefuly!!")
    }
}
function login(){
    let pass=document.getElementById("password").value;
    let username=document.getElementById("username").value;
    if(pass==""||username=="")
    {
        alert("Enter field !!")
    } 
    for(let i=0; i<users.length;i++)
    {
        if(pass==users[i].passwordddd && username==users[i].usernameeeee)
        {
            alert("succse login ...")
            location.href="review.html"
        }
       
    }

}
function forget(){
    var user_namee=document.getElementById("username").value;
    var passs=document.getElementById("newpass").value;
    for(var i=0;i<=users.length;i++)
    {
     
        if(users[i].usernameeeee === user_namee)
        {
           users[i].passwordddd=passs;
           
           alert("the password has changed ");

        }
        else
        {
            alert("this not user");
        }
    }
   
  
}