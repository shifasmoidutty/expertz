let i=10;let j=11;let k=5
if(i>=j && i>=k)
{
    console.log("i is the largest number")
}
else if(j>=i && j>=k)
{
    console.log("j is the largest number")
}
else{
    console.log("k is the largest number")
}
console.log("after if else block")
let choice="+"
switch(choice){
    case "+":{
        console.log(i+j)
        break
    }
    case "-":{
        console.log(i-j)
        break
    }
    default:
        console.log("invalid operation...")
}