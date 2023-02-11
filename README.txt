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
    53, 65, 72, 81 => 127.8125,false (probably correct)

    Many Bounces:
    22, 32, 55, 17 => -44.00000000000001,true
    53, 65, 72, 58 => -118,true
# looks like we're doing integer arithmetic and we need to use decimals...
# why is it only bouncing on ONE side ?!?!

    last: [53,65]
index.html:410 secondLast: [72,58]
index.html:238 x1:  72 x2:  53 y1:  58 y2:  65
index.html:240 Do we shoot true
index.html:242 slope: -0.3684210526315789
index.html:244 y intercept: 84.52631578947368
index.html:246 max intercept: -26
index.html:248 contact row 128
index.html:252 x coordinate: -118
index.html:254 bounce count: 0
index.html:258 bouncing off left side
index.html:260 new x: 300 new y: -26
index.html:263 new slope: -0.3684210526315789
index.html:266 new y intercept: 84.52631578947368
index.html:269 new max intercept: -26
index.html:288  new x coord: -118
index.html:295 bounce count: 1
index.html:258 bouncing off left side
index.html:260 new x: 300 new y: -26
index.html:263 new slope: -0.3684210526315789
index.html:266 new y intercept: 84.52631578947368
index.html:269 new max intercept: -26
index.html:288  new x coord: -118
index.html:295 bounce count: 2
index.html:258 bouncing off left side
index.html:260 new x: 300 new y: -26
index.html:263 new slope: -0.3684210526315789
index.html:266 new y intercept: 84.52631578947368
index.html:269 new max intercept: -26
index.html:288  new x coord: -118
index.html:295 bounce count: 3
index.html:258 bouncing off left side
index.html:260 new x: 300 new y: -26
index.html:263 new slope: -0.3684210526315789
index.html:266 new y intercept: 84.52631578947368
index.html:269 new max intercept: -26
index.html:288  new x coord: -118
index.html:295 bounce count: 4
index.html:258 bouncing off left side
index.html:260 new x: 300 new y: -26
index.html:263 new slope: -0.3684210526315789
index.html:266 new y intercept: 84.52631578947368
index.html:269 new max intercept: -26
index.html:288  new x coord: -118
index.html:295 bounce count: 5
index.html:258 bouncing off left side
index.html:260 new x: 300 new y: -26
index.html:263 new slope: -0.3684210526315789
index.html:266 new y intercept: 84.52631578947368
index.html:269 new max intercept: -26
index.html:288  new x coord: -118
index.html:295 bounce count: 6
index.html:258 bouncing off left side
index.html:260 new x: 300 new y: -26
index.html:263 new slope: -0.3684210526315789
index.html:266 new y intercept: 84.52631578947368
index.html:269 new max intercept: -26
index.html:288  new x coord: -118
index.html:295 bounce count: 7
index.html:312 we're making a shot on goal
index.html:315 move info: (2) [-118, true]
index.html:406 "22"
index.html:408 last: [22,32]
index.html:410 secondLast: [55,17]
index.html:238 x1:  55 x2:  22 y1:  17 y2:  32
index.html:240 Do we shoot true
index.html:242 slope: -0.45454545454545453
index.html:244 y intercept: 42
index.html:246 max intercept: -94.36363636363635
index.html:248 contact row 62
index.html:252 x coordinate: -44
index.html:254 bounce count: 0
index.html:258 bouncing off left side
index.html:260 new x: 300 new y: -94.36363636363635
index.html:263 new slope: -0.4545454545454545
index.html:266 new y intercept: 42
index.html:269 new max intercept: -94.36363636363635
index.html:288  new x coord: -44.00000000000001
index.html:295 bounce count: 1
index.html:258 bouncing off left side
index.html:260 new x: 300 new y: -94.36363636363635
index.html:263 new slope: -0.4545454545454545
index.html:266 new y intercept: 42
index.html:269 new max intercept: -94.36363636363635
index.html:288  new x coord: -44.00000000000001
index.html:295 bounce count: 2
index.html:258 bouncing off left side
index.html:260 new x: 300 new y: -94.36363636363635
index.html:263 new slope: -0.4545454545454545
index.html:266 new y intercept: 42
index.html:269 new max intercept: -94.36363636363635
index.html:288  new x coord: -44.00000000000001
index.html:295 bounce count: 3
index.html:258 bouncing off left side
index.html:260 new x: 300 new y: -94.36363636363635
index.html:263 new slope: -0.4545454545454545
index.html:266 new y intercept: 42
index.html:269 new max intercept: -94.36363636363635
index.html:288  new x coord: -44.00000000000001
index.html:295 bounce count: 4
index.html:258 bouncing off left side
index.html:260 new x: 300 new y: -94.36363636363635
index.html:263 new slope: -0.4545454545454545
index.html:266 new y intercept: 42
index.html:269 new max intercept: -94.36363636363635
index.html:288  new x coord: -44.00000000000001
index.html:295 bounce count: 5
index.html:258 bouncing off left side
index.html:260 new x: 300 new y: -94.36363636363635
index.html:263 new slope: -0.4545454545454545
index.html:266 new y intercept: 42
index.html:269 new max intercept: -94.36363636363635
index.html:288  new x coord: -44.00000000000001
index.html:295 bounce count: 6
index.html:258 bouncing off left side
index.html:260 new x: 300 new y: -94.36363636363635
index.html:263 new slope: -0.4545454545454545
index.html:266 new y intercept: 42
index.html:269 new max intercept: -94.36363636363635
index.html:288  new x coord: -44.00000000000001
index.html:295 bounce count: 7
index.html:312 we're making a shot on goal
index.html:315 move info: (2) [-44.00000000000001, true]
PLAYER_ROW_2
128.57142857142858

