//1.how to compare two JSON have same properties without order


	var obj={
    name:"Person1",
    age:5
}
var obj2={
    age:5,
    name:"Person1"
}
if(JSON.stringify(obj)===
JSON.stringify(obj2))


{
    console.log("Two properties are same Order");
}
else
{
    console.log("Two properties are Not same Order");
}



//2.use the rest countries api url-https://restcountries.com/v3.1/all and print the all country flags in the console
//.html


var request=new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
request.onload=function (){
var data=request.response  
var  resulte=JSON.parse(data)
for(var i=0;i<resulte.length;i++){
console.log(resulte[i].flags);
}
 
}
