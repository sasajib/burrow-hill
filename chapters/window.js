window.CHAPTER = {
 "id": "window",
 "title": "Sliding Window",
 "sub": "CHAPTER 6 · SLIDING WINDOW",
 "key": "burrow-ch-window",
 "next": {
  "href": "chapter.html?c=stack",
  "label": "Chapter 7: Stacks"
 },
 "prev": {
  "href": "chapter.html?c=twoptr",
  "label": "Chapter 5: Two pointers"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "sw0",
   "label": "Welcome",
   "short": "Intro",
   "name": "A frame that moves",
   "intro": "What a sliding window is, and the kind of question that calls for it."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "swt1",
   "label": "Theory 1",
   "short": "T1",
   "name": "A window that slides",
   "intro": "A window of fixed size: one door leaves, one door enters. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "swt2",
   "label": "Theory 2",
   "short": "T2",
   "name": "A window that grows and shrinks",
   "intro": "A window with two edges that move on their own. One guess."
  }
 ],
 "notes": {
  "t1": "<h3>Key ideas</h3><ul><li><b>Neighbouring windows share every door but two.</b> One leaves on the left, one enters on the right.</li>\n      <li><b>Keep one running value and update it</b>: new sum = old sum − leaving door + entering door.</li>\n      <li><b>Each slide costs two steps, however wide the window is.</b> O(n) instead of O(n × k).</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>Two edges.</b> The right edge only grows the window. The left edge only shrinks it.</li>\n      <li><b>The loop:</b> grow on the right; <i>while</i> the window breaks the rule, shrink on the left; then measure.</li>\n      <li><b>Each door enters once and leaves at most once</b>, so a loop inside a loop is still O(n).</li>\n      <li><b>When to reach for it:</b> \"longest\", \"shortest\" or \"best\" unbroken stretch that keeps some rule.</li></ul>"
 },
 "quiz": {
  "swt1-q1": {
   "ask": "The window holds 2, 1, 5 and its sum is 8. It slides one step: 2 leaves and 1 enters. What is the new sum?",
   "opts": [
    "7",
    "9",
    "8"
   ],
   "right": 0,
   "why": "8 − 2 + 1 = 7. Nothing else in the window changed, so nothing else is added again."
  },
  "swt2-q1": {
   "ask": "The rule is: sum at most 6. The window holds 5, 1. Then 3 enters and the sum is 9. Which door leaves?",
   "opts": [
    "The 5, on the left edge",
    "The 3 that just entered",
    "The 1 in the middle"
   ],
   "right": 0,
   "why": "A window only shrinks from the left. 5 leaves, the sum drops to 4, and the rule holds again."
  },
  "sw1s-q": {
   "ask": "sum is 7. The window slides: 3 enters and 1 leaves. What is sum now?",
   "opts": [
    "9",
    "10",
    "11"
   ],
   "right": 0,
   "why": "7 + 3 − 1 = 9. The window is now 5, 1, 3."
  },
  "sw2s-q": {
   "ask": "best is 4. Selling today would earn 3 − 1 = 2. What happens to best?",
   "opts": [
    "It stays 4",
    "It becomes 2",
    "low becomes 3"
   ],
   "right": 0,
   "why": "Math.max(4, 2) is 4. And 3 is not lower than low, which is 1."
  },
  "sw3s-q": {
   "ask": "The window is doors 0 to 4 and holds two zeros (doors 1 and 4). left moves until zeros is 1. Where does left stop?",
   "opts": [
    "On door 1",
    "On door 2",
    "On door 4"
   ],
   "right": 1,
   "why": "Door 0 leaves, then door 1 leaves and takes a zero with it. left ends on door 2."
  },
  "sw4s-q": {
   "ask": "The window is \"abc\" and a second \"b\" wants to enter. Letters leave from the left until \"b\" is out. How many leave?",
   "opts": [
    "One: a",
    "Two: a and b",
    "Three: a, b and c"
   ],
   "right": 1,
   "why": "a leaves, and b is still inside. Then b leaves. Now the new b can enter."
  },
  "sw5s-q": {
   "ask": "The window is 5, 2 and its sum is 7. The target is 7. Is the window still big enough?",
   "opts": [
    "Yes, 7 is at least 7",
    "No, it has to be more than 7"
   ],
   "right": 0,
   "why": "\"At least\" includes equal. So this window counts, and it is only 2 wide."
  },
  "sw6s-q": {
   "ask": "The count of \"b\" has just dropped to 0. What does line 10 do?",
   "opts": [
    "Deletes \"b\", so the map has 2 kinds",
    "Keeps \"b\" with a count of 0",
    "Nothing"
   ],
   "right": 0,
   "why": "count.size counts keys. A key with count 0 would still be counted as a kind, and the loop would never stop correctly."
  }
 },
 "problems": [
  {
   "id": "sw1",
   "num": 1,
   "title": "The Best Three",
   "fn": "bestSum",
   "ask": "Return the biggest sum of <b>k</b> neighbouring doors. You can assume 1 ≤ k ≤ the number of doors.",
   "spec": "bestSum([2, 1, 5, 1, 3, 2], 3) → 9      (5 + 1 + 3)",
   "start": "// nums is an array of numbers. k is the window size.\nfunction bestSum(nums, k) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the best total of k doors that sit side by side.",
    "Do it by hand on [2, 1, 5, 1, 3, 2] with k = 3. Write down the sum of each window.",
    "Look at two windows that are next to each other. Which doors do they share?",
    "How can you get the next sum from the previous one without adding k numbers again?"
   ],
   "hints": [
    "Add up the first k doors once. That is your first sum, and your best so far.",
    "To slide: add the door that enters, nums[right], and subtract the door that leaves, nums[right - k].",
    "After each slide compare the sum with the best so far."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       2,
       1,
       5,
       1,
       3,
       2
      ],
      3
     ],
     "want": 9
    },
    {
     "args": [
      [
       1,
       2,
       3
      ],
      3
     ],
     "want": 6
    },
    {
     "args": [
      [
       5
      ],
      1
     ],
     "want": 5
    },
    {
     "args": [
      [
       1,
       2,
       3,
       4
      ],
      1
     ],
     "want": 4
    },
    {
     "args": [
      [
       -1,
       -2,
       -3
      ],
      2
     ],
     "want": -3
    },
    {
     "args": [
      [
       4,
       4,
       4,
       4
      ],
      2
     ],
     "want": 8
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "const n = 200000; return [Array.from({ length: n }, (_, i) => (i * 31) % 100), n / 2];",
    "limit": 1500,
    "label": "200,000 doors, window of 100,000",
    "msg": "Correct on the small cases, but too slow on the big one. Adding up every window from scratch is O(n × k). Slide: one door leaves, one enters."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function bestSum(nums, k) {",
    "  let sum = 0;",
    "  for (let i = 0; i < k; i++) sum += nums[i];",
    "  let best = sum;",
    "  for (let right = k; right < nums.length; right++) {",
    "    sum += nums[right] - nums[right - k];",
    "    best = Math.max(best, sum);",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "Why is nums[right - k] the door that leaves?",
   "view": {
    "row": [
     2,
     1,
     5,
     1,
     3,
     2
    ],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "right",
      "row": 1
     }
    ],
    "vars": [
     "sum",
     "best"
    ],
    "box": null,
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Neighbouring windows share all their doors but two. One leaves, and one enters.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "windows share all doors but two",
     "arrows": null
    },
    {
     "say": "So keep one running sum. Subtract the door that leaves, and add the door that enters.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "sum − leaving door + entering door",
     "arrows": null
    },
    {
     "say": "Lines two and three add up the first window. Two, one, five. Eight.",
     "line": 3,
     "ptr": null,
     "hot": [
      0,
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 8
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line four. That is the best so far.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "best": 8
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Right moves to door three. Line six adds the door that enters, one, and removes the door that left, two. Seven.",
     "line": 6,
     "ptr": {
      "right": 3
     },
     "hot": [
      1,
      2,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 7
     },
     "box": null,
     "card": "8 + 1 − 2 = 7",
     "arrows": null
    },
    {
     "say": "Line seven. Seven does not beat eight.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "best stays 8",
     "arrows": null
    },
    {
     "say": "Slide again. Three enters, one leaves. What is the sum?",
     "line": 6,
     "ptr": {
      "right": 4
     },
     "hot": [
      2,
      3,
      4
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "7 + 3 − 1 = ?",
     "arrows": null
    },
    {
     "say": "Nine. A new best.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 9,
      "best": 9
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The last slide. Two enters, five leaves. Six. Not better.",
     "line": 6,
     "ptr": {
      "right": 5
     },
     "hot": [
      3,
      4,
      5
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 6
     },
     "box": null,
     "card": "9 + 2 − 5 = 6",
     "arrows": null
    },
    {
     "say": "Line nine returns the best. Nine.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Each slide is two steps, however wide the window is. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "each slide = 2 steps → O(n) time",
     "arrows": null
    },
    {
     "say": "Two numbers. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "2 numbers → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "sw2",
   "num": 2,
   "title": "Buy Low, Sell High",
   "fn": "bestTrade",
   "ask": "Each number is the price on one day. Buy on one day and sell on a <b>later</b> day. Return the most profit possible, or <b>0</b> if no trade makes money.",
   "spec": "bestTrade([7, 1, 5, 3, 6]) → 5      (buy at 1, sell at 6)",
   "start": "// prices[day] is the price on that day.\nfunction bestTrade(prices) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the biggest later price minus earlier price.",
    "Do it by hand on [7, 1, 5, 3, 6]. Why is 7 never the buying price?",
    "Suppose you must sell on day 4. Which earlier day would you have wanted to buy on?",
    "So what single thing do you need to remember as you walk forward?"
   ],
   "hints": [
    "Walk the days once, remembering the lowest price seen so far.",
    "If today is lower than that, it becomes the new lowest price.",
    "Otherwise, selling today would earn today minus the lowest price. Keep the best of those."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       7,
       1,
       5,
       3,
       6
      ]
     ],
     "want": 5
    },
    {
     "args": [
      [
       7,
       6,
       4,
       3,
       1
      ]
     ],
     "want": 0
    },
    {
     "args": [
      []
     ],
     "want": 0
    },
    {
     "args": [
      [
       5
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       1,
       2
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       2,
       4,
       1
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       3,
       3,
       3
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       7,
       1,
       5,
       3,
       6,
       4
      ]
     ],
     "want": 5
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "return [Array.from({ length: 150000 }, (_, i) => (i * 7919) % 10007)];",
    "limit": 1500,
    "label": "150,000 days",
    "msg": "Correct on the small cases, but too slow on the big one. Trying every pair of days is O(n²). Remember the lowest price so far."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function bestTrade(prices) {",
    "  let low = Infinity;",
    "  let best = 0;",
    "  for (let day = 0; day < prices.length; day++) {",
    "    if (prices[day] < low) low = prices[day];",
    "    else best = Math.max(best, prices[day] - low);",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "Why is it enough to remember only the lowest price so far, and not every earlier price?",
   "view": {
    "row": [
     7,
     1,
     5,
     3,
     6
    ],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "day",
      "row": 1
     }
    ],
    "vars": [
     "low",
     "best"
    ],
    "box": null,
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "To sell on some day for the most profit, you want to have bought at the lowest price before it.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "best buy = lowest price so far",
     "arrows": null
    },
    {
     "say": "So walk once, remember the lowest price so far, and try selling on every day.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "remember low, try selling each day",
     "arrows": null
    },
    {
     "say": "Low starts at infinity, so that any price beats it. Best starts at zero.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "low": "∞",
      "best": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Day zero. Seven is lower than anything so far. Low is seven.",
     "line": 5,
     "ptr": {
      "day": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "low": 7
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Day one. One is lower. Low becomes one.",
     "line": 5,
     "ptr": {
      "day": 1
     },
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "low": 1
     },
     "box": null,
     "card": "1 < 7 → new low",
     "arrows": null
    },
    {
     "say": "Day two. Five is not lower. So line six asks: what if we sold today? Five minus one. Four.",
     "line": 6,
     "ptr": {
      "day": 2
     },
     "hot": [
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "best": 4
     },
     "box": null,
     "card": "sell at 5 − buy at 1 = 4",
     "arrows": null
    },
    {
     "say": "Day three. Three. Sell today, and the profit is two. Does best change?",
     "line": 6,
     "ptr": {
      "day": 3
     },
     "hot": [
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "sell at 3 − buy at 1 = 2",
     "arrows": null
    },
    {
     "say": "No. Two does not beat four.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "best stays 4",
     "arrows": null
    },
    {
     "say": "Day four. Six minus one. Five. A new best.",
     "line": 6,
     "ptr": {
      "day": 4
     },
     "hot": [
      4
     ],
     "ok": [
      1,
      4
     ],
     "bad": [],
     "set": null,
     "vars": {
      "best": 5
     },
     "box": null,
     "card": "sell at 6 − buy at 1 = 5",
     "arrows": null
    },
    {
     "say": "Line eight returns the best. Five.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One walk. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "1 walk → O(n) time",
     "arrows": null
    },
    {
     "say": "Two numbers. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "2 numbers → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "sw3",
   "num": 3,
   "title": "Light the Dark Lamps",
   "fn": "longestOnes",
   "ask": "Each lamp is lit (<b>1</b>) or dark (<b>0</b>). You may light up to <b>k</b> dark lamps. Return the length of the longest unbroken run of lit lamps you can get.",
   "spec": "longestOnes([1, 0, 1, 1, 0, 1], 1) → 4      (light the second dark lamp)",
   "start": "// nums holds only 1 and 0. k is how many 0s you may turn into 1s.\nfunction longestOnes(nums, k) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in a different way: the longest stretch that contains at most k zeros.",
    "Do it by hand on [1, 0, 1, 1, 0, 1] with k = 1. Which stretch did you pick?",
    "Grow a window to the right. What do you need to count to know whether it is still allowed?",
    "When it is no longer allowed, which side must give up doors, and until when?"
   ],
   "hints": [
    "Keep a window with a left and a right edge, and a count of the zeros inside it.",
    "Move right one door at a time. If the new door is 0, add one to the count.",
    "While the count is more than k, move left forward (lowering the count if a 0 leaves). Then measure right - left + 1."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       0,
       1,
       1,
       0,
       1
      ],
      1
     ],
     "want": 4
    },
    {
     "args": [
      [
       1,
       1,
       1
      ],
      0
     ],
     "want": 3
    },
    {
     "args": [
      [
       0,
       0,
       0
      ],
      0
     ],
     "want": 0
    },
    {
     "args": [
      [],
      2
     ],
     "want": 0
    },
    {
     "args": [
      [
       0,
       0,
       1,
       1,
       0,
       0,
       1,
       1,
       1,
       0,
       1,
       1,
       0,
       0,
       0,
       1,
       1,
       1,
       1
      ],
      3
     ],
     "want": 10
    },
    {
     "args": [
      [
       0
      ],
      1
     ],
     "want": 1
    },
    {
     "args": [
      [
       1,
       0,
       0,
       1
      ],
      1
     ],
     "want": 2
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "const n = 150000; return [Array.from({ length: n }, (_, i) => i % 2), n / 3];",
    "limit": 1500,
    "label": "150,000 lamps",
    "msg": "Correct on the small cases, but too slow on the big one. Restarting from every lamp is O(n²). Keep one window and move its two edges."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function longestOnes(nums, k) {",
    "  let left = 0;",
    "  let zeros = 0;",
    "  let best = 0;",
    "  for (let right = 0; right < nums.length; right++) {",
    "    if (nums[right] === 0) zeros++;",
    "    while (zeros > k) {",
    "      if (nums[left] === 0) zeros--;",
    "      left++;",
    "    }",
    "    best = Math.max(best, right - left + 1);",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "Why does the code never actually change a 0 into a 1?",
   "view": {
    "row": [
     1,
     0,
     1,
     1,
     0,
     1
    ],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "left",
      "row": 1
     },
     {
      "id": "right",
      "row": 1
     }
    ],
    "vars": [
     "zeros",
     "best"
    ],
    "box": null,
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Lighting at most k dark lamps is the same as finding the longest stretch with at most k zeros.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "longest stretch with ≤ k zeros",
     "arrows": null
    },
    {
     "say": "Grow on the right. When there are too many zeros, shrink on the left.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "grow right, shrink left",
     "arrows": null
    },
    {
     "say": "Moss holds the left edge at door zero. No dark lamps counted yet.",
     "line": 4,
     "ptr": {
      "left": 0
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "zeros": 0,
      "best": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Pip grows the window to door zero. A lit lamp. The window is one wide.",
     "line": 11,
     "ptr": {
      "right": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "best": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door one is dark. Zeros becomes one. We are allowed one, so the window is fine. Two wide.",
     "line": 6,
     "ptr": {
      "right": 1
     },
     "hot": [
      0,
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "zeros": 1,
      "best": 2
     },
     "box": null,
     "card": "zeros = 1 → allowed",
     "arrows": null
    },
    {
     "say": "Two more lit lamps. The window grows to four wide.",
     "line": 11,
     "ptr": {
      "right": 3
     },
     "hot": [
      0,
      1,
      2,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "best": 4
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door four is dark. Zeros is two. Too many.",
     "line": 6,
     "ptr": {
      "right": 4
     },
     "hot": [
      0,
      1,
      2,
      3,
      4
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "zeros": 2
     },
     "box": null,
     "card": "zeros = 2 → too many",
     "arrows": null
    },
    {
     "say": "Line seven shrinks from the left until the rule holds again. Where does Moss stop?",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "shrink until zeros = 1",
     "arrows": null
    },
    {
     "say": "Door zero leaves. Then door one leaves, and it was dark, so zeros drops to one. Moss stops on door two.",
     "line": 9,
     "ptr": {
      "left": 2
     },
     "hot": [
      2,
      3,
      4
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "zeros": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Pip adds door five. Four wide again. That ties the best.",
     "line": 11,
     "ptr": {
      "right": 5
     },
     "hot": [
      2,
      3,
      4,
      5
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "doors 2 to 5 → 4 wide",
     "arrows": null
    },
    {
     "say": "Line thirteen returns the best. Four.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Each door enters the window once, and leaves at most once. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "in once, out once → O(n) time",
     "arrows": null
    },
    {
     "say": "Three numbers. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "3 numbers → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "sw4",
   "num": 4,
   "title": "No Letter Twice",
   "fn": "longestUnique",
   "ask": "Return the length of the longest unbroken stretch of the word in which <b>no letter appears twice</b>.",
   "spec": "longestUnique(\"abcbd\") → 3      (\"abc\" or \"cbd\")",
   "start": "// word is a string.\nfunction longestUnique(word) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the longest run of letters that are all different.",
    "Do it by hand on \"abcbd\". What stopped \"abc\" from growing?",
    "When a repeat arrives, which letters have to leave the window before it can come in?",
    "What can tell you, in one step, whether a letter is already inside the window?"
   ],
   "hints": [
    "Keep a window with two edges and a Set of the letters inside it.",
    "Before a new letter enters: while it is already in the set, delete word[left] from the set and move left forward.",
    "Then add the new letter and measure right - left + 1."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "abcbd"
     ],
     "want": 3
    },
    {
     "args": [
      ""
     ],
     "want": 0
    },
    {
     "args": [
      "aaaa"
     ],
     "want": 1
    },
    {
     "args": [
      "abc"
     ],
     "want": 3
    },
    {
     "args": [
      "pwwkew"
     ],
     "want": 3
    },
    {
     "args": [
      "abba"
     ],
     "want": 2
    },
    {
     "args": [
      "dvdf"
     ],
     "want": 3
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function longestUnique(word) {",
    "  const seen = new Set();",
    "  let left = 0;",
    "  let best = 0;",
    "  for (let right = 0; right < word.length; right++) {",
    "    while (seen.has(word[right])) {",
    "      seen.delete(word[left]);",
    "      left++;",
    "    }",
    "    seen.add(word[right]);",
    "    best = Math.max(best, right - left + 1);",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "On \"abba\", the window must shrink twice in a row for the second b. Trace it. Why is \"while\" needed and not \"if\"?",
   "view": {
    "row": [
     "a",
     "b",
     "c",
     "b",
     "d"
    ],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "left",
      "row": 1
     },
     {
      "id": "right",
      "row": 1
     }
    ],
    "vars": [
     "best"
    ],
    "box": {
     "title": "seen",
     "rows": 1
    },
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Keep a window that never holds the same letter twice. A set remembers what is inside it.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "a window with no repeats + a set",
     "arrows": null
    },
    {
     "say": "Grow on the right. If the new letter is already inside, shrink on the left until it is gone.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "repeat? shrink until it is gone",
     "arrows": null
    },
    {
     "say": "An empty set, Moss on the left edge, and best at zero.",
     "line": 4,
     "ptr": {
      "left": 0
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "best": 0
     },
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Pip reads A. Not in the set. Add it. The window is one wide.",
     "line": 10,
     "ptr": {
      "right": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "best": 1
     },
     "box": [
      "a"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "B and C are new as well. The window grows to three.",
     "line": 11,
     "ptr": {
      "right": 2
     },
     "hot": [
      0,
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "best": 3
     },
     "box": [
      "a, b, c"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Next is B. Line six checks the set. B is already inside the window.",
     "line": 6,
     "ptr": {
      "right": 3
     },
     "hot": [
      1,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "\"b\" is already inside",
     "arrows": null
    },
    {
     "say": "So the window shrinks from the left until that B is gone. How many letters leave?",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "shrink until \"b\" is gone",
     "arrows": null
    },
    {
     "say": "Two. A leaves, then the old B leaves. Moss stops on C.",
     "line": 8,
     "ptr": {
      "left": 2
     },
     "hot": [
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "c"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Now the new B can enter. The window is C, B.",
     "line": 10,
     "ptr": null,
     "hot": [
      2,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "c, b"
     ],
     "card": "window \"cb\" → 2 wide",
     "arrows": null
    },
    {
     "say": "D is new. Three wide. That ties the best.",
     "line": 11,
     "ptr": {
      "right": 4
     },
     "hot": [
      2,
      3,
      4
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "c, b, d"
     ],
     "card": "window \"cbd\" → 3 wide",
     "arrows": null
    },
    {
     "say": "Line thirteen returns the best. Three.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Each door enters the window once, and leaves at most once. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "in once, out once → O(n) time",
     "arrows": null
    },
    {
     "say": "The set holds at most one of each letter. O of n space at most.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "set of letters → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "sw5",
   "num": 5,
   "title": "The Shortest That Reaches",
   "fn": "shortestReach",
   "ask": "All numbers are positive. Return the length of the <b>shortest</b> unbroken stretch whose sum is <b>at least target</b>. If no stretch reaches it, return <b>0</b>.",
   "spec": "shortestReach([2, 1, 5, 2, 3], 7) → 2      (5 + 2)",
   "start": "// nums holds positive numbers. target is a positive number.\nfunction shortestReach(nums, target) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the fewest neighbouring doors that add up to the target or more.",
    "Do it by hand on [2, 1, 5, 2, 3] with target 7.",
    "Once a window reaches the target, growing it further cannot help. What can?",
    "This time, when do you measure the window: after growing, or while shrinking?"
   ],
   "hints": [
    "Keep a window with two edges and its running sum.",
    "Add nums[right] to the sum. While the sum is at least target: record the width, subtract nums[left], move left forward.",
    "Start best at Infinity. If it is still Infinity at the end, return 0."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       2,
       1,
       5,
       2,
       3
      ],
      7
     ],
     "want": 2
    },
    {
     "args": [
      [
       1,
       1,
       1
      ],
      5
     ],
     "want": 0
    },
    {
     "args": [
      [
       7
      ],
      7
     ],
     "want": 1
    },
    {
     "args": [
      [],
      3
     ],
     "want": 0
    },
    {
     "args": [
      [
       2,
       3,
       1,
       2,
       4,
       3
      ],
      7
     ],
     "want": 2
    },
    {
     "args": [
      [
       1,
       4,
       4
      ],
      4
     ],
     "want": 1
    },
    {
     "args": [
      [
       1,
       2,
       3,
       4,
       5
      ],
      15
     ],
     "want": 5
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "const n = 150000; return [Array.from({ length: n }, () => 1), n / 2];",
    "limit": 1500,
    "label": "150,000 doors",
    "msg": "Correct on the small cases, but too slow on the big one. Restarting from every door is O(n²). Keep one window and move its two edges."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function shortestReach(nums, target) {",
    "  let left = 0;",
    "  let sum = 0;",
    "  let best = Infinity;",
    "  for (let right = 0; right < nums.length; right++) {",
    "    sum += nums[right];",
    "    while (sum >= target) {",
    "      best = Math.min(best, right - left + 1);",
    "      sum -= nums[left];",
    "      left++;",
    "    }",
    "  }",
    "  return best === Infinity ? 0 : best;",
    "}"
   ],
   "why": "This only works because the numbers are positive. What breaks if a number can be negative?",
   "view": {
    "row": [
     2,
     1,
     5,
     2,
     3
    ],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "left",
      "row": 1
     },
     {
      "id": "right",
      "row": 1
     }
    ],
    "vars": [
     "sum",
     "best"
    ],
    "box": null,
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Grow the window until the sum is big enough. Then shrink it from the left, for as long as it stays big enough.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "grow until enough, then shrink",
     "arrows": null
    },
    {
     "say": "Every time it is big enough, measure it. The smallest measurement wins.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "measure each time it is enough",
     "arrows": null
    },
    {
     "say": "Moss on the left edge. Sum is zero. Best starts at infinity, so that any real window beats it.",
     "line": 4,
     "ptr": {
      "left": 0
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 0,
      "best": "∞"
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Pip adds two, then one. Sum is three. Not enough yet.",
     "line": 6,
     "ptr": {
      "right": 1
     },
     "hot": [
      0,
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 3
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Five enters. Sum is eight. That reaches seven.",
     "line": 6,
     "ptr": {
      "right": 2
     },
     "hot": [
      0,
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 8
     },
     "box": null,
     "card": "8 ≥ 7 → enough",
     "arrows": null
    },
    {
     "say": "Line eight records the width. Three doors.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "best": 3
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Now try to make it shorter. The left door leaves. Sum is six. Not enough any more.",
     "line": 10,
     "ptr": {
      "left": 1
     },
     "hot": [
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 6
     },
     "box": null,
     "card": "try shorter: drop the left door",
     "arrows": null
    },
    {
     "say": "So Pip grows again. Two enters. Eight. Three wide. No better.",
     "line": 6,
     "ptr": {
      "right": 3
     },
     "hot": [
      1,
      2,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 8
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Shrink. One leaves. Sum is seven. Is that still enough?",
     "line": 7,
     "ptr": {
      "left": 2
     },
     "hot": [
      2,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 7
     },
     "box": null,
     "card": "7 ≥ 7 → ?",
     "arrows": null
    },
    {
     "say": "Yes. Seven reaches seven. And the window is only two wide. A new best.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [
      2,
      3
     ],
     "bad": [],
     "set": null,
     "vars": {
      "best": 2
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Shrink once more. Five leaves. Sum is two. The inner loop stops.",
     "line": 10,
     "ptr": {
      "left": 3
     },
     "hot": [
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 2
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Three enters. Five. Not enough, and the row is finished.",
     "line": 6,
     "ptr": {
      "right": 4
     },
     "hot": [
      3,
      4
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 5
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line thirteen returns the best. Two.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Each door enters the window once, and leaves at most once. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "in once, out once → O(n) time",
     "arrows": null
    },
    {
     "say": "Three numbers. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "3 numbers → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "sw6",
   "num": 6,
   "title": "Two Kinds Only",
   "fn": "longestTwoKinds",
   "ask": "Return the length of the longest unbroken stretch of the row that uses <b>at most two different letters</b>.",
   "spec": "longestTwoKinds(\"abacc\") → 3      (\"aba\" or \"acc\")",
   "start": "// row is a string of letters.\nfunction longestTwoKinds(row) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the longest run that contains no more than two kinds of letter.",
    "Do it by hand on \"abacc\". What stopped \"aba\" from growing?",
    "To know how many kinds are inside the window, what do you need to keep?",
    "When a letter leaves the window, how do you know whether its kind is gone completely?"
   ],
   "hints": [
    "Keep a window with two edges and a Map: letter → how many of it are inside.",
    "Add row[right] to the map. While the map holds more than 2 keys, lower the count of row[left], delete the key if it reaches 0, and move left forward.",
    "Then measure right - left + 1."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "abacc"
     ],
     "want": 3
    },
    {
     "args": [
      ""
     ],
     "want": 0
    },
    {
     "args": [
      "aaaa"
     ],
     "want": 4
    },
    {
     "args": [
      "ab"
     ],
     "want": 2
    },
    {
     "args": [
      "abc"
     ],
     "want": 2
    },
    {
     "args": [
      "abaccc"
     ],
     "want": 4
    },
    {
     "args": [
      "eceba"
     ],
     "want": 3
    },
    {
     "args": [
      "ccaabbb"
     ],
     "want": 5
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function longestTwoKinds(row) {",
    "  const count = new Map();",
    "  let left = 0;",
    "  let best = 0;",
    "  for (let right = 0; right < row.length; right++) {",
    "    count.set(row[right], (count.get(row[right]) || 0) + 1);",
    "    while (count.size > 2) {",
    "      const out = row[left];",
    "      count.set(out, count.get(out) - 1);",
    "      if (count.get(out) === 0) count.delete(out);",
    "      left++;",
    "    }",
    "    best = Math.max(best, right - left + 1);",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "Why must a letter be deleted from the map when its count reaches 0? What would count.size say otherwise?",
   "view": {
    "row": [
     "a",
     "b",
     "a",
     "c",
     "c"
    ],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "left",
      "row": 1
     },
     {
      "id": "right",
      "row": 1
     }
    ],
    "vars": [
     "best"
    ],
    "box": {
     "title": "count",
     "rows": 3
    },
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Keep a window with at most two kinds of letter. A map counts how many of each kind are inside.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "window with ≤ 2 kinds + a count map",
     "arrows": null
    },
    {
     "say": "Grow on the right. With three kinds, shrink on the left until one kind is gone completely.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "3 kinds? shrink until one is gone",
     "arrows": null
    },
    {
     "say": "An empty count map, and Moss on the left edge.",
     "line": 4,
     "ptr": {
      "left": 0
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "best": 0
     },
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "A enters. One kind.",
     "line": 6,
     "ptr": {
      "right": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "best": 1
     },
     "box": [
      "a → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "B enters. Two kinds. Still allowed.",
     "line": 6,
     "ptr": {
      "right": 1
     },
     "hot": [
      0,
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "best": 2
     },
     "box": [
      "a → 1",
      "b → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Another A. Still two kinds. Three wide.",
     "line": 13,
     "ptr": {
      "right": 2
     },
     "hot": [
      0,
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "best": 3
     },
     "box": [
      "a → 2",
      "b → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "C enters. Now the map has three kinds. Too many.",
     "line": 6,
     "ptr": {
      "right": 3
     },
     "hot": [
      0,
      1,
      2,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "a → 2",
      "b → 1",
      "c → 1"
     ],
     "card": "3 kinds → too many",
     "arrows": null
    },
    {
     "say": "So shrink. The left A leaves. Its count drops to one. Still three kinds.",
     "line": 9,
     "ptr": {
      "left": 1
     },
     "hot": [
      1,
      2,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "a → 1",
      "b → 1",
      "c → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "B leaves next. Its count drops to zero. What must happen to B in the map?",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "\"b\" count is 0 → ?",
     "arrows": null
    },
    {
     "say": "It is deleted. Otherwise the map would still say three kinds. Now the window is A, C.",
     "line": 10,
     "ptr": {
      "left": 2
     },
     "hot": [
      2,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "a → 1",
      "c → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Another C. Three wide. That ties the best.",
     "line": 13,
     "ptr": {
      "right": 4
     },
     "hot": [
      2,
      3,
      4
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "a → 1",
      "c → 2"
     ],
     "card": "window \"acc\" → 3 wide",
     "arrows": null
    },
    {
     "say": "Line fifteen returns the best. Three.",
     "line": 15,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Each door enters the window once, and leaves at most once. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "in once, out once → O(n) time",
     "arrows": null
    },
    {
     "say": "The map never holds more than three kinds. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "≤ 3 kinds in the map → O(1) space",
     "arrows": null
    }
   ]
  }
 ]
};
