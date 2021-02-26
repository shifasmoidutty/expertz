function check(){
    let name=document.getElementById("p1")
    if(name.value=="")
    {
        alert("name can't be empty")
        name.focus()
        return false
    }
    let email=document.getElementById("p2")
    if(email.value=="")
    {
        alert("email can't be empty")
        email.focus()
        return false
    }
    let password=document.getElementById("p3")
    if(password.value=="")
    {
        alert("password can't be empty")
        password.focus()
        return false
    }
    let phone=document.getElementById("p4")
    if(phone.value=="")
    {
        alert("phone number can't be empty")
        phone.focus()
        return false
    }
    if(isNaN(phone.value) || phone.value.length!=10)
    {
        alert("mobile number is invalid")
        phone.focus()
    }
}