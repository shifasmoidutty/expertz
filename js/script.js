function getname(){
    let name= prompt("enter your name")
    alert("hey"+name)
}
function changestyle()
{
    document.getElementById('p1').style.color="red"
    document.getElementById('p1').style.fontSize="20px"
}
function changeimg()
{
var image=document.getElementById('p1');
if (image.src.match("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg")) {
    image.src = "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg";
}
else {
    image.src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg";
}
}
function changeimg2()
{
    "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg"
}
function demo(){
    let uname=document.getElementById("username").value;
    alert("hey "+uname+ "welcome")
    document.getElementById("p1").innerText="your login was successfull"
}
function change(){
    document.getElementById("p1").innerText="your name changed"
}
let s="123"
let i=100
let j=i.toString()
console.log(j,typeof j)
let data=String("hello")
console.log(data,typeof data)
let num=Number(1224)
console.log(typeof num)

let s1="hello world"
console.log(s1)
console.log(typeof s1)
let s2=new String("hello world")
console.log(s2)
console.log(s2.length)
console.log(typeof s2)
console.log(s2.toUpperCase())
console.log(s2)
console.log(s1.startsWith("h"))
console.log(s1.endsWith("world"))
console.log(s1.indexOf("o"))
console.log(s1.lastIndexOf("o"))
let s3=" hello all"
console.log(s3)
console.log(s3.trim())
console.log(s3.concat("how are u"))
console.log(s3.substr(2,5))
console.log(s3.substring(2,5))
console.log(s3.charAt(4))
for(letter of s3){
    console.log(letter)

}