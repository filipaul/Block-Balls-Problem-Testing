// We have 2 balls and 1 block of 100 floors. We need to TEST at what floor the balls will break. 


const floors = 100;
let whereBallBreaks = Math.floor(Math.random() * 100); //the floor where balls will break is randomly picked (ground floor is included).
let ballsAvailable = 2;
let stepsTaken = 0;
let calculationType = 1;

// with this function you can go floor by floor to verify where the first ball will break.
function try1(currentFloorParam) {
    let currentFloor = 0;
    if(currentFloorParam != null){
        currentFloor = currentFloorParam;
    }
    while (true){
        countStep();
        if (dropBall(currentFloor)){
            breakBall();
            break;
        } else {
            currentFloor++;
        }
    }
}

// With this function you can go 2 by 2 floors to verify where the first ball will break. 
// When the variable "currentFloor" exceeds the number from variable "whereBallBreaks" the "availableBalls" decreases.
// it's clear that the floor between "currentFloor" and "whereBallBreaks" MUST BE TESTED WITH THE LAST BALL AVAILABLE.
function try2() {
    let currentFloor = 0;
    let step = 2;
    while (true){
        countStep();
        if (dropBall(currentFloor)){
            breakBall();
            break;
        } else if(currentFloor > whereBallBreaks) {
            breakBall();
            currentFloor = currentFloor - step;
        } else {
            currentFloor = currentFloor + step;
        }
    
    }
}

// * This step (try3) can be made progressive, after the first 10 floors you can decrease the number of floors tested:
// ** you can go and TEST the next 9 floors, then the next 8 floors, the next 7 floors and so on.

// with this function you can go 10 by 10 floors to check where ball will break. 
// When the variable "currentFloor" exceeds the number from variable "whereBallBreaks" the "availableBalls" decreases.
// So, it is obvious that "whereBallBreaks" is somewhere between "lastFloorChecked" where the first ball broke and the previous floor verified.
// And now we need to find out where is exactly the floor from which the last ball will break
// In order to do so, we will call function try1() to verify each floor 1 by 1, using the last ball, from previous floor from where ball didn't break to the floor from where ball breaks.
function try3() {
    let currentFloor = 0;
    let step = 10;
    let lastFloorChecked = 0;    

    while (true){
        countStep();
        if (currentFloor == whereBallBreaks){
            breakBall();
            break;
        } else if(currentFloor > whereBallBreaks) {
            breakBall();
            try1(lastFloorChecked + 1);
            break;
        } else {
            lastFloorChecked = currentFloor;
            currentFloor = currentFloor + step;
            console.log("Going to next floor: " + currentFloor);
        }
    }
}

function countStep(){
    stepsTaken++; //count 1 by 1
}

function breakBall(){
    ballsAvailable = ballsAvailable - 1;
}

function dropBall(floor) {
    if (floor >= whereBallBreaks){
        console.log("Ball breaks at " + floor);
        return true;
    }
    console.log("Ball is at " + floor);
 return false;
}

// feel free to change "calculationType" value with 1 / 2 / 3
function init(){
    whereBallBreaks = Math.floor(Math.random() * 100);
    ballsAvailable = 2;
    stepsTaken = 0;
    calculationType = 3; 
    console.log("Ball will break at " + whereBallBreaks);
}

function start(){
    init();
    if(calculationType == 1){
        try1();
    } else if (calculationType == 2) {
        try2();
    } else if (calculationType == 3) {
        try3();
    }
    printResult();
}

function printResult() {
    console.log("Steps taken: " + stepsTaken + "; Available balls: " + ballsAvailable);
}

start();


// I've created distinct functions that can be reused in other functions, in order to not repeat them every time and just to call them.
 