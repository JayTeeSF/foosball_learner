goto: https://jayteesf.github.io/foosball_learner/
github: https://github.com/JayTeeSF/foosball_learner

test numbers:
  on last_known_good branch:
    No Bounces:
    53, 65, 72, 81 => 176.18750000000003 (maybe ok), true (should have been false) 

    Many Bounces:
    22, 32, 55, 17 => NaN, false
    53, 65, 72, 58 => NaN, false

  on current main branch:
    No Bounces:
    53, 65, 72, 81 => 127.8125,false (probably correct) // now 128.49107142857144,false
    53, 65, 72, 58 => 113.10204081632655,true // now 113.10204081632655,true

    One Bounce:
    22, 32, 55, 17 => 1.8857142857142792, true // now 92.4,true

    Many Bounces: 
    53, 65, 72, 64 => 303.68767943067405, true // the new xCoord isnt becoming less than 300 so it keeps trying to bounce on the same side

// observation: the y-coord is the ball moving up (or down) the board
// so why (if the ball is moving from 64(second-last-y) to 65(last-y) would:
//   a: we be trying to score (the ball is already moving away from our goalie)
//   b: player-row-1 be the right row ...shouldn't it be player-row-2!! <-- we can't use absolute value for getPlayerRow... calculation!!!

"53"
last: [53,65]
secondLast: [72,64]
x1:  72 x2:  53 y1:  64 y2:  65
Do we shoot true
slope: -0.05263157894736842
y intercept: 67.78947368421052
max intercept: 51.99999999999999
winning_pr: 42.857142857142854
contact row 42.857142857142854
x coordinate: 473.71428571428567

bounce count: 0
bouncing off right side
new x: 0 new y: 171.78947368421052
new slope: -0.39929824561403504
new max intercept: 51.99999999999999
new y intercept: 171.78947368421052
 new x coord: 322.8973135827266

bounce count: 1
bouncing off right side
new x: 0 new y: 275.7894736842105
new slope: -0.7459649122807017
new max intercept: 51.99999999999999
new y intercept: 275.7894736842105
 new x coord: 312.25641714823274

bounce count: 2
bouncing off right side
new x: 0 new y: 379.7894736842105
new slope: -1.0926315789473684
new max intercept: 51.99999999999999
new y intercept: 379.7894736842105
 new x coord: 308.3677401596477

bounce count: 3
bouncing off right side
new x: 0 new y: 483.7894736842105
new slope: -1.439298245614035
new max intercept: 51.99999999999999
new y intercept: 483.7894736842105
 new x coord: 306.35230201295536

bounce count: 4
bouncing off right side
new x: 0 new y: 587.7894736842105
new slope: -1.7859649122807018
new max intercept: 51.99999999999999
new y intercept: 587.7894736842105
 new x coord: 305.1192815043502

bounce count: 5
bouncing off right side
new x: 0 new y: 691.7894736842105
new slope: -2.132631578947368
new max intercept: 51.99999999999999
new y intercept: 691.7894736842105
 new x coord: 304.2871245240446

bounce count: 6
bouncing off right side
new x: 0 new y: 795.7894736842105
new slope: -2.479298245614035
new max intercept: 51.99999999999999
new y intercept: 795.7894736842105
 new x coord: 303.68767943067405

bounce count: 7
we're making a shot on goal
move info: (2) [303.68767943067405, true]



last: [22,32]
secondLast: [55,17]
x1:  55 x2:  22 y1:  17 y2:  32
Do we shoot true
slope: -0.45454545454545453
y intercept: 42
max intercept: -94.36363636363635
winning_pr: 42.857142857142854
contact row 42.857142857142854
x coordinate: -1.885714285714279
bounce count: 0
bouncing off left side
new x: 300 new y: 178.36363636363635
new slope: 0.4545454545454545
new y intercept: 42
new max intercept: 178.36363636363635
 new x coord: 1.8857142857142792
bounce count: 1
we're making a shot on goal
move info: (2) [1.8857142857142792, true]

last: [53,65]
secondLast: [72,58]
x1:  72 x2:  53 y1:  58 y2:  65
Do we shoot true
slope: -0.3684210526315789
y intercept: 84.52631578947368
max intercept: -26
winning_pr: 42.857142857142854
contact row 42.857142857142854
x coordinate: 113.10204081632655
bounce count: 0
we're making a shot on goal
move info: (2) [113.10204081632655, true]
