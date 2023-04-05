where=$1
export MotorA=/sys/class/tacho-motor/motor0
export MotorB=/sys/class/tacho-motor/motor1
echo reset > $MotorA/command
echo reset > $MotorB/command
radius=3
pi=3.14
width=12
circumference=$(echo "scale=5; $pi * 2 * $radius" | bc)
revolutions=$(echo "scale=5; $where / $circumference / 300 * $width" | bc)
tmp_degrees=$(echo "$revolutions * 360" | bc)
degrees=$(printf "%3.0f" $tmp_degrees)
echo -e "\nDegrees: ${degrees}, Radius: ${radius}, Pi: ${pi}, Circumference: ${circumference}, Revolutions: ${revolutions}, Where: ${where}, Width: ${width} \n"
echo $degrees > $MotorA/position_sp
echo $degrees > $MotorB/position_sp
echo 40 > $MotorA/speed_sp
echo 40 > $MotorB/speed_sp
echo run-to-abs-pos > $MotorA/command &
echo run-to-abs-pos > $MotorB/command
