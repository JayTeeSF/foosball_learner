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

    Many Bounces: ??

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
