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
    53, 65, 72, 81 => 26.705357142857135,false
    53, 65, 72, 58 => 119.5510204081633,true

    One Bounce:
    22, 32, 55, 17 => 1.8857142857142792, true
    53, 65, 72, 64 => 152.2219432588502, true

    285, 168, 200, 170 => 265.7584683357879, false

    Many Bounces: 

"53"
last: [53,65]
secondLast: [72,64]
x1:  72 x2:  53 y1:  64 y2:  65
Do we shoot true
slope: -0.05263157894736842
y intercept: 67.78947368421052
max intercept: 51.99999999999999
diff: -22.142857142857146; win: null, pr: 42.857142857142854, y2: 65, shot: true
winning_pr: 128.57142857142858
diff: 63.571428571428584; win: 128.57142857142858, pr: 128.57142857142858, y2: 65, shot: true
diff: 149.28571428571428; win: 128.57142857142858, pr: 214.28571428571428, y2: 65, shot: true
contact row 128.57142857142858
x coordinate: -1154.8571428571433

bounce count: 0
bouncing off left side
new x: 300 new y: 187.57894736842104
new slope: 0.39929824561403504
new y intercept: 67.78947368421052
new max intercept: 187.57894736842104
 new x coord: 152.2219432588502

bounce count: 1
we're making a shot on goal
move info: (2) [152.2219432588502, true]



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

JJS Test:

"285"
(index):445 last: [285,168]
(index):445 secondLast: [200,170]
(index):445 x1:  200 x2:  285 y1:  170 y2:  168
(index):445 Do we shoot false
(index):445 slope: -0.023529411764705882
(index):445 y intercept: 174.7058823529412
(index):445 max intercept: 167.64705882352942
(index):445 winning_pr: 42.857142857142854
(index):445 diff: 125.14285714285714; win: 42.857142857142854, pr: 42.857142857142854, y2: 168, shot: false
(index):445 winning_pr: 128.57142857142858
(index):445 diff: 39.428571428571416; win: 128.57142857142858, pr: 128.57142857142858, y2: 168, shot: false
(index):445 diff: -46.28571428571428; win: 128.57142857142858, pr: 214.28571428571428, y2: 168, shot: false
(index):445 contact row 128.57142857142858
(index):445 x coordinate: 1960.7142857142858
(index):445 bounce count: 0
(index):445 bouncing off right side
(index):445 new x: 0 new y: -174.7058823529412
(index):445 new slope: 1.1411764705882355
(index):445 new max intercept: 167.64705882352942
(index):445 new y intercept: -174.7058823529412
(index):445  new x coord: 265.7584683357879
(index):445 bounce count: 1
(index):445 move info: (2) [265.7584683357879, false]

New Answer:

last: [200,170]
(index):446 secondLast: [285,168]
(index):446 x1:  285 x2:  200 y1:  168 y2:  170
(index):446 Do we shoot true
(index):446 slope: -0.023529411764705882
(index):446 y intercept: 174.7058823529412
(index):446 max intercept: 167.64705882352942
(index):446 diff: -127.14285714285714; win: null, pr: 42.857142857142854, y2: 170, shot: true
(index):446 diff: -41.428571428571416; win: null, pr: 128.57142857142858, y2: 170, shot: true
(index):446 winning_pr: 214.28571428571428
(index):446 diff: 44.28571428571428; win: 214.28571428571428, pr: 214.28571428571428, y2: 170, shot: true
(index):446 contact row 214.28571428571428
(index):446 x coordinate: -1682.1428571428564
(index):446 bounce count: 0
(index):446 bouncing off left side
(index):446 new x: 300 new y: 181.76470588235296
(index):446 new slope: 0.023529411764705892
(index):446 new y intercept: 174.7058823529412
(index):446 new max intercept: 181.76470588235296
(index):446  new x coord: 1682.1428571428555
(index):446 bounce count: 1
(index):446 bouncing off right side
(index):446 new x: 0 new y: 188.82352941176472
(index):446 new slope: -0.023529411764705892
(index):446 new max intercept: 181.76470588235296
(index):446 new y intercept: 188.82352941176472
(index):446  new x coord: -1082.1428571428555
(index):446 bounce count: 2
(index):446 bouncing off left side
(index):446 new x: 300 new y: 195.8823529411765
(index):446 new slope: 0.023529411764705892
(index):446 new y intercept: 188.82352941176472
(index):446 new max intercept: 195.8823529411765
(index):446  new x coord: 1082.1428571428555
(index):446 bounce count: 3
(index):446 bouncing off right side
(index):446 new x: 0 new y: 202.94117647058826
(index):446 new slope: -0.023529411764705892
(index):446 new max intercept: 195.8823529411765
(index):446 new y intercept: 202.94117647058826
(index):446  new x coord: -482.1428571428555
(index):446 bounce count: 4
(index):446 bouncing off left side
(index):446 new x: 300 new y: 210.00000000000003
(index):446 new slope: 0.023529411764705892
(index):446 new y intercept: 202.94117647058826
(index):446 new max intercept: 210.00000000000003
(index):446  new x coord: 482.1428571428555
(index):446 bounce count: 5
(index):446 bouncing off right side
(index):446 new x: 0 new y: 217.0588235294118
(index):446 new slope: -0.023529411764705892
(index):446 new max intercept: 210.00000000000003
(index):446 new y intercept: 217.0588235294118
(index):446  new x coord: 117.8571428571445
(index):446 bounce count: 6
(index):446 we're making a shot on goal
(index):446 move info: (2) [117.8571428571445, true]
