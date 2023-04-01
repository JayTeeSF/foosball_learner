where=$1
export MotorA=/sys/class/tacho-motor/motor0
export MotorB=/sys/class/tacho-motor/motor1
echo reset > $MotorA/command
echo reset > $MotorB/command
radius=5
pi=3.14
circumference=$(echo "$pi * 2 * $radius" | bc)
revolutions=$(echo "$where / $circumference" | bc)
degrees=$(echo "$revolutions * 360" | bc)
pos=$(echo "$degrees - (cat ${MotorA}/position)" | bc)
echo -e "\nRelative Position: ${pos}, Radius: ${radius}, Pi: ${pi}, Circumference: ${circumference}, Revolutions: ${revolutions}, Where: ${where} \n"
echo $pos > $MotorA/position_sp
echo $pos > $MotorA/position_sp
echo 40 > $MotorA/speed_sp
echo 40 > $MotorB/speed_sp
echo run-to-rel-pos > $MotorA/command &
echo run-to-rel-pos > $MotorB/command
