/*
function driveForward(inches)  {
	resetEncoder(B) 
	syncMotors(B,C, 75)
	waitHereWhile  abs(encoderValue(B)) <50*inches
	stopAllMotors()
}
function driveBackward(inches)  {
	resetEncoder(B) 
	syncMotors(B,C, -50)
	waitHereWhile  abs(encoderValue(B)) <50*inches
	stopAllMotors()
}
distance = 12

driveForward( distance )
driveBackward( distance )
*/


function motorToPoint(motorLetter, secondaryLetter, power=25, point) {
  syncMotors(motorLetter, secondaryLetter, power, point)
}

function motorToPosition(motorLetter, secondaryLetter, power=25, point) {
  syncMotors(motorLetter, secondaryLetter, power)
  waitHereWhile  encoderValue(motorLetter) != point
  stopAllMotors()
}
