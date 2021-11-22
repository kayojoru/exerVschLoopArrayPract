//#1 Loop through the following array and count how many "computers" there are. Log the final count:

var computercount = 0

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for(var i = 0; i < officeItems.length; i++){
  if(officeItems[i] === "computer"){computercount++}
}
console.log("The count of computers is ", computercount)

//#2 Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
] 

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++)
  {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male")
    {console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name, " is old enough to watch Mad Max. Please admit him.")}
  
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female")
    {console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name, " is old enough to watch Mad Max. Please admit her.")}
    
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female")
    {console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name, " is NOT old enough to watch Mad Max. Please do NOT admit her.")}
    
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male")
    {console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name, " is NOT old enough to watch Mad Max. Please do NOT admit him.")}
  }

//BONUS LIGHTS Optional Bonus challenge
//Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times. The light is off to start with. Log to the console whether or not the light is on at the end.

var playwithlights = [
  {
    array: [2, 5, 435, 4, 3] //The light is on
  },{
    array: [1, 1, 1, 1, 3] //The light is on
  },{
    array: [9, 3, 4, 2] //The light is off
  }
]
for(var i = 0; i < playwithlights.length; i++){  
  //console.log(playwithlights[i]) PASS
  switchsum = 0 
  for(var j = 0; j < playwithlights[i].array.length; j++)
  //console.log(playwithlights[i].array[j]) PASS
     {
     switchsum += playwithlights[i].array[j]
  //console.log(switchsum) PASS
     }
   // if(switchsum % 2 === 0){console.log("The Light is Off")}else{console.log("The Light is On")} 
  console.log(switchsum % 2 === 0 ? "The Light is Off" : "The Light is On")
}
  

