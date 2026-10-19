//let box=document.getelementbytagname("div")[1]
//let box=document.getelementbyid("header");
//let box=document.getelementbyclassname("box")[0];

let box = document.querySelector("div");
//let box=document.queryselectorall("div");

console.log(box);

//class list

//1.add
//2.remove
//3.replace
//4.toggle
//contains

//box.classlist.add("box-2");

//box.classlist.remove("box")

//box.classlist.replace("box"."new-box")

//box.classlist.toggle("a");

if(box.classlist.contains("a")){
console.log("yes");
}else{
console.log("no");

}

//const red button= document.queryselector("red-button");
//redbutton.addeventlistener("click",function(){
//document.body.classlist.add("red");
console.log("clicked");

//document.body.classlist.remove("green");
//});

//const green button=document.queryselector("green.button");

//greenbutton.addeventlistener("click",function(){
 //document.body.classlist.add("red");
 //document.body.classlist.remove("red");
  
console.log("clicked");

//}