# Block-Balls-Problem-Testing
# dont't forget to open the browser console!

We have 2 balls and 1 block of 100 floors. We need to TEST at what floor the balls will break. 

1. try1(); - With this function you can go floor by floor to verify where the first ball will break.

2. try2(); - With this function you can go 2 by 2 floors to verify where the first ball will break. 
           - When the variable "currentFloor" exceeds the number from variable "whereBallBreaks" the "availableBalls" decreases.
           - It is clear that the floor between "currentFloor" and "whereBallBreaks" MUST BE TESTED WITH THE LAST BALL AVAILABLE.

3. try3(); - With this function you can go 10 by 10 floors to check where ball will break. 
           - When the variable "currentFloor" exceeds the number from variable "whereBallBreaks" the "availableBalls" decreases. So, it is obvious that "whereBallBreaks" is somewhere between "lastFloorChecked" where the first ball broke and the previous floor verified.
           - And now we need to find out where is exactly the floor from which the last ball will break
           - In order to do so, we will call function try1() to verify each floor 1 by 1, using the last ball, from previous floor from where ball didn't break to the floor from where ball breaks.

*This step (try3) can be made progressive, after the first 10 floors you can decrease the number of floors tested: you can go and TEST the next 9 floors, then the next 8 floors, the next 7 floors and so on.

**Feel free to change "calculationType" value with 1 / 2 / 3 for different TESTS

***I've created distinct functions that can be reused in other functions, in order to not repeat them every time and just to call them.
 
