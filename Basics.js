//Print
console.log("Hello from JavaScript");

//Function
function sum(val1, val2){
    return val1 + val2
}

//Switch

function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "Invalid entry!"
    }
    return answer;
}

//Counting Cards Function

function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = 'Hold'
    if(count > 0){
        holdbet = "Bet"
    }
    return count + " " + holdbet;
}

//JavaScript Objects

var carcharodonMegalodon = {
    "animal": "Shark",
    "size": "15 metres",
    "power level": 99999
}

//Accessing object properties

var carcharodonMegalodonSize = carcharodonMegalodon.size;
var carcharodonMegalodonPower = carcharodonMegalodon["power level"];

//Assigning a variable with an object property

var sharkSize = carcharodonMegalodon.size;

//Updating object properties

carcharodonMegalodon.size = "17 metres";

//Adding new properties to an object

carcharodonMegalodon.biome = "Ocean";

//Deleting a property

delete carcharodonMegalodon.biome

//Manipulating a Complex Object

var Fish = {
    "0001":{
        "Name": "Tuna",
        "Color": "Grey/Blue",
        "Size": "2 Metres",
        "Behavior": {
            "Sociability": "School",
            "Agressive": false,
            "Active time": "Day"
        }
    },
    "0002":{
        "RecordID":"0002",
        "Name": "Arapaima",
        "Color": "Green/Red",
        "Size": "3 Metres",
        "Behavior": {
            "Sociability": "Lonesome",
            "Agressive": false,
            "Active time": "Day"
        }
    }

}

var arapaimaDangerousness = Fish[0002].Behavior.Agressive;


function updateFishRecord(id, prop, value){
    if (value === ""){
        delete Fish[id][prop];
    }else if (prop === "Behavior"){
        Fish[id][prop] = Fish[id][prop] || [];
        Fish[id][prop].push(value);
    }else{
        Fish[id][prop] = value;
    }

    return Fish
}
//Copy Object
var fishCopy = JSON.parse(JSON.stringify(Fish))

//Random

Math.random()


//Parse (string to int)

parseInt(string)

//Ternary Operator
// condition ? statement-if-true : statement-if-false;

a === b ? true : false;
//Multiple Conditions
num > 0 ? "positive" : num < 0 ? "negative" : "zero";


//Anonymous Function

var magic = () => new Date();

var concatenate = (arr1, arr2) => arr1.concat(arr2)


