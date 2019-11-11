json = (require('./data'));
console.log(json);
var myObj = JSON.parse(json)
console.log(myObj);
//console.log=(myObj);
console.log('Q1/Write a function that console.logs each character object in the data:');
 let logData = function() {
   for(let i=0; i<myObj.people.length; i++){
     console.log(myObj.people[i]);
}
};
logData();

console.log('Q2/Write a function that console.logs each characters name:');
let logNames = function() {
 for(let j=0; j<myObj.people.length; j++){
   let name1=myObj.people[j].name;
   console.log(name1);
 }
 };
 logNames();

 console.log('Q3/Write a function that console.logs each characters name and eye color:');
let logNameEyes = function() {
   for(let k=0; k<myObj.people.length; k++){
        let name2=myObj.people[k].name;
        console.log(name2);
        let eye_color=myObj.people[k].eye_color;
      console.log(eye_color);
   }   
 };
logNameEyes();


console.log('Q4:Write a function that console.logs each characters name whose mass is greater than 75:');
 let logByMass = function() {
 for(let q=0; q<myObj.people.length; q++){ 
  if (myObj.people[q].mass> 75){
           console.log("mass:"+myObj.people[q].mass);
  }
 }
}
 logByMass();
 