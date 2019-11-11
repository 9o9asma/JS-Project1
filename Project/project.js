console.log("-------------------Question 1--------------------");
/*check([1, 2, 3, 4, 5], 3) ➞ true
check([1, 1, 2, 1, 1], 3) ➞ false
check([5, 5, 5, 6], 5) ➞ true
check([], 5) ➞ false*/
function array1(arr,num) {
    for (let i=0; i<arr.length; i++){
      if (arr[i]==num){
        return true ;
      }
    }
      return false;  
  }
  var num1=array1([1, 2, 3, 4,5], 3);
  console.log(num1);
  var num2=array1([1,1, 2,1,1], 3);
  console.log(num2);
  var num3=array1([5, 5, 5, 6],5);
  console.log(num3);
  var num4=array1([], 5);
  console.log(num4);

console.log("-------------------Question 2--------------------");
  /*convertToSeconds(1, 3) ➞ 3780
convertToSeconds(2, 0) ➞ 7200
convertToSeconds(0, 0) ➞ 0*/
function convertToSeconds(hours,minutes){
hours= (hours * 3600);
minutes =(minutes*60);
sec=(hours+ minutes);
}
var sec1=convertToSeconds(1,3);
console.log(sec);
var sec2=convertToSeconds(2,0);
console.log(sec);
var sec3=convertToSeconds(0,0);
console.log(sec);
console.log("-------------------Question 3--------------------");
var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
    }
console.log("Answer 3.1:");
console.log(aquarium.capacityInGallons);

console.log("Answer 3.2:");
// var sum=2;
// sum=aquarium.numberOfRocks+2;
// console.log(aquarium.numberOfRocks=sum);
console.log(aquarium.numberOfRocks += 2);

console.log("Answer 3.3:");
var clownfish=aquarium.fish[2];
console.log(clownfish);

console.log("Answer 3.4:");
console.log(aquarium.fish[1].size);

console.log("Answer 3.5:");
console.log(aquarium.fish[0].size='4 inches');

console.log("Answer 3.6:");
aquarium.fish.push({
    type: 'starfish',
    size: '5 inches',
    color: 'blue' 
})
console.log(aquarium.fish[3]);


console.log("----------------------Question 1 bonus--------------------");
 function getRandomNum(num){
   return Math.floor(Math.random()* num);
 }
 var random1=getRandomNum(6);
 console.log(random1);
 var random2=getRandomNum(10);
 console.log(random2);


 console.log("----------------------Question 2 bonus--------------------");
//  Examples
// isLeap(2020) ➞ true // Exactly divided by 4 and not by 100.
// isLeap(1800) ➞ false // Exactly divided by 4, but is also exactly divided by 100.
// isLeap(2000) ➞ true // Exactly divided by 400.
// isLeap(2019) ➞ false // It can't be exactly divided by 400 or by 4.
 function leapyear(year) {
  //return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  if(year % 100 ==0 ){
   return year % 400 == 0;
  }
else{
return year % 4 == 0;
}}
var leep1=leapyear(2020);
console.log(leep1);
var leep2=leapyear(1800);
console.log(leep2);
var leep3=leapyear(2000);
console.log(leep3);
var leep4=leapyear(2019)
console.log(leep4);


 








    

 