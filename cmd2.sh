export MotorA=/sys/class/tacho-motor/motor0
export MotorB=/sys/class/tacho-motor/motor1
echo reset > $MotorA/command
echo reset > $MotorB/command
echo 0 > $MotorA/position
echo 0 > $MotorB/position

echo -90 > $MotorA/position_sp
echo -90 > $MotorB/position_sp
echo 45 > $MotorA/speed_sp
echo 45 > $MotorB/speed_sp
echo run-to-rel-pos > $MotorA/command &
echo run-to-rel-pos > $MotorB/command

sleep 3

echo 0 > $MotorA/position_sp
echo 0 > $MotorB/position_sp
echo 40 > $MotorA/speed_sp
echo 40 > $MotorB/speed_sp
echo run-to-abs-pos > $MotorA/command &
echo run-to-abs-pos > $MotorB/command
