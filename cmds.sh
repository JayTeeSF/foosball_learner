#   11  for f in /sys/class/tacho-motor/*; do echo -n "$f: "; cat $f/address; done
export MotorA=/sys/class/tacho-motor/motor0
export MotorB=/sys/class/tacho-motor/motor1
echo reset > $MotorA/command
echo reset > $MotorB/command
echo 0 > $MotorA/position
echo 0 > $MotorB/position
#   24  cat $MotorA/position #(should equal 0 now)
#   28  while true; do echo -en "\033[0G$(cat $MotorA/position)   "; done
#   33  cat $MotorA/commands
echo 90 > $MotorA/position_sp
echo 90 > $MotorB/position_sp
echo 90 > $MotorA/speed_sp
echo 90 > $MotorB/speed_sp
echo run-to-rel-pos > $MotorA/command &
echo run-to-rel-pos > $MotorB/command

while true; do
  if [[ $(cat ${MotorA}/position) -ge 90 ]]
  then
    break;
  fi
done

echo -90 > $MotorA/position_sp
echo -90 > $MotorB/position_sp
echo 300 > $MotorA/speed_sp
echo 300 > $MotorB/speed_sp
echo run-to-rel-pos > $MotorA/command &
echo run-to-rel-pos > $MotorB/command

while true; do
  if [[ $(cat ${MotorA}/position) -le -70 ]]
  then
    break
  fi
done

echo 0 > $MotorA/position_sp
echo 0 > $MotorB/position_sp
echo 40 > $MotorA/speed_sp
echo 40 > $MotorB/speed_sp
echo run-to-abs-pos > $MotorA/command &
echo run-to-abs-pos > $MotorB/command
