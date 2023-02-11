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
    53, 65, 72, 58 => 113.10204081632655,true

    One Bounce:
    22, 32, 55, 17 => 1.8857142857142792, true

    Many Bounces: 
    53, 65, 72, 64 => 303.68767943067405, true // the new xCoord isnt becoming less than 300 so it keeps trying to bounce on the same side

"53"
(index):412 last: [53,65]
(index):414 secondLast: [72,64]
(index):242 x1:  72 x2:  53 y1:  64 y2:  65
(index):244 Do we shoot true
(index):246 slope: -0.05263157894736842
(index):248 y intercept: 67.78947368421052
(index):250 max intercept: 51.99999999999999
(index):193 winning_pr: 42.857142857142854
(index):252 contact row 42.857142857142854
(index):256 x coordinate: 473.71428571428567
(index):258 bounce count: 0
(index):275 bouncing off right side
(index):277 new x: 0 new y: 171.78947368421052
(index):280 new slope: -0.39929824561403504
(index):283 new max intercept: 51.99999999999999
(index):287 new y intercept: 171.78947368421052
(index):292  new x coord: 322.8973135827266
(index):299 bounce count: 1
(index):275 bouncing off right side
(index):277 new x: 0 new y: 275.7894736842105
(index):280 new slope: -0.7459649122807017
(index):283 new max intercept: 51.99999999999999
(index):287 new y intercept: 275.7894736842105
(index):292  new x coord: 312.25641714823274
(index):299 bounce count: 2
(index):275 bouncing off right side
(index):277 new x: 0 new y: 379.7894736842105
(index):280 new slope: -1.0926315789473684
(index):283 new max intercept: 51.99999999999999
(index):287 new y intercept: 379.7894736842105
(index):292  new x coord: 308.3677401596477
(index):299 bounce count: 3
(index):275 bouncing off right side
(index):277 new x: 0 new y: 483.7894736842105
(index):280 new slope: -1.439298245614035
(index):283 new max intercept: 51.99999999999999
(index):287 new y intercept: 483.7894736842105
(index):292  new x coord: 306.35230201295536
(index):299 bounce count: 4
(index):275 bouncing off right side
(index):277 new x: 0 new y: 587.7894736842105
(index):280 new slope: -1.7859649122807018
(index):283 new max intercept: 51.99999999999999
(index):287 new y intercept: 587.7894736842105
(index):292  new x coord: 305.1192815043502
(index):299 bounce count: 5
(index):275 bouncing off right side
(index):277 new x: 0 new y: 691.7894736842105
(index):280 new slope: -2.132631578947368
(index):283 new max intercept: 51.99999999999999
(index):287 new y intercept: 691.7894736842105
(index):292  new x coord: 304.2871245240446
(index):299 bounce count: 6
(index):275 bouncing off right side
(index):277 new x: 0 new y: 795.7894736842105
(index):280 new slope: -2.479298245614035
(index):283 new max intercept: 51.99999999999999
(index):287 new y intercept: 795.7894736842105
(index):292  new x coord: 303.68767943067405
(index):299 bounce count: 7
(index):316 we're making a shot on goal
(index):319 move info: (2) [303.68767943067405, true]



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
