window.CHAPTER = {
 "id": "mixed2",
 "title": "Mixed Set 2",
 "sub": "MIXED SET 2",
 "key": "burrow-ch-mixed2",
 "next": {
  "href": "chapter.html?c=trees",
  "label": "Chapter 14: Binary trees"
 },
 "prev": {
  "href": "chapter.html?c=intervals",
  "label": "Chapter 13: Intervals"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "my0",
   "label": "Read this first",
   "short": "Intro",
   "name": "Four new signals",
   "intro": "Ten puzzles from everything so far, with no labels. The four signals Part 2 added."
  }
 ],
 "notes": {
  "w": "<h3>The signals so far</h3><ul><li><b>New in Part 2:</b> a smaller copy of the same problem → recursion. Sorted, looking for one thing or one edge → binary search.\n      \"The smallest value that works\" → search the answer. A start and an end → sort by start (or by end), then sweep. \"Easy if it were sorted\" → sort first.</li>\n      <li><b>From Part 1:</b> sorted pairs → two pointers. A stretch of neighbours → sliding window. Seen before / how many / where → hash map.\n      Most recent first → stack. Sum or product of a range → prefix. Re-pointing → linked list tools.</li>\n      <li><b>Name the tool before you code</b>, then compare with the solution video. A mismatch tells you which chapter to revisit.</li></ul>"
 },
 "quiz": {
  "my1s-q": {
   "ask": "nestedSum([3]) walks one item, the number 3. What does it return?",
   "opts": [
    "3",
    "0",
    "[3]"
   ],
   "right": 0,
   "why": "It adds the single number and returns the total, 3."
  },
  "my2s-q": {
   "ask": "With capacity 5 the parcels ship as [2, 3] and [4, 1]: 2 days, and 2 days are allowed. What does the code do?",
   "opts": [
    "high = mid: 5 fits, so the answer is 5 or smaller",
    "low = mid + 1",
    "return 5"
   ],
   "right": 0,
   "why": "daysFor(5) is 2, which is within the limit. The candidate is kept: high = mid."
  },
  "my3s-q": {
   "ask": "light is on 1, heavy is on 2, and 1 + 2 fits the limit. What does the code do?",
   "opts": [
    "Both markers move inward, and one boat is counted",
    "Only heavy moves",
    "Two boats are counted"
   ],
   "right": 0,
   "why": "Line 7 moves light because the pair fits, line 8 moves heavy, and line 9 counts one boat for the two of them."
  },
  "my4s-q": {
   "ask": "The new booking is 2-5. The booking 1-3 starts at 1, which is at or before 5. What does the code do?",
   "opts": [
    "Stretches the new booking to 1-5",
    "Copies 1-3 to the output",
    "Stops"
   ],
   "right": 0,
   "why": "They overlap, so the new interval swallows it: start = min(2, 1) = 1, end = max(5, 3) = 5."
  },
  "my5s-q": {
   "ask": "The counts are t → 1, r → 1, e → 2, and the rule puts the bigger count first. Which letter is first?",
   "opts": [
    "e",
    "t",
    "r"
   ],
   "right": 0,
   "why": "e has the biggest count, 2, so it is sorted to the front."
  },
  "my6s-q": {
   "ask": "The left half holds 4 to 7, in order. The target is 0. What does the code do?",
   "opts": [
    "low = mid + 1: throw the left half away",
    "high = mid − 1",
    "return −1"
   ],
   "right": 0,
   "why": "0 is not between 4 and 7, so it cannot be in the sorted half. The search moves to the other half."
  },
  "my7s-q": {
   "ask": "The next call is zipLists(node 4, null). Which line answers, and with what?",
   "opts": [
    "Line 3: it returns a, the node 4",
    "Line 2: it returns null",
    "Line 5: it calls itself again"
   ],
   "right": 0,
   "why": "b is null, so line 3 returns a. The rest of list a is already linked and sorted."
  },
  "my8s-q": {
   "ask": "out[2] holds 2 (the product of everything to its left) and after is 4 (everything to its right). What does line 10 make it?",
   "opts": [
    "8",
    "6",
    "24"
   ],
   "right": 0,
   "why": "2 × 4 = 8, which is 1 × 2 × 4: every number except the 3."
  },
  "my9s-q": {
   "ask": "left and right are both 2, on the comma. The loop runs while left < right. What happens?",
   "opts": [
    "The loop ends, and true is returned",
    "The comma is compared with itself",
    "left steps past the comma"
   ],
   "right": 0,
   "why": "2 is not less than 2. Every pair of letters matched, so the text is a mirror."
  },
  "my10s-q": {
   "ask": "The last arrow is at 6. The balloon 2-8 starts at 2. What does the code do?",
   "opts": [
    "Nothing: the arrow at 6 already bursts it",
    "Shoots a new arrow at 8",
    "Shoots a new arrow at 2"
   ],
   "right": 0,
   "why": "2 is not after 6, and the balloon reaches 8, so the arrow at 6 passes through it."
  }
 },
 "problems": [
  {
   "id": "my1",
   "num": 1,
   "title": "Boxes Inside Boxes",
   "fn": "nestedSum",
   "ask": "The array holds numbers and <b>arrays</b>, which can hold more arrays, to any depth. Return the <b>sum of all the numbers</b>.",
   "spec": "nestedSum([1, [2, [3]], 4]) → 10",
   "start": "// items holds numbers and arrays (which hold numbers and arrays, and so on).\n// Array.isArray(x) tells you whether x is an array.\nfunction nestedSum(items) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? A smaller copy of the same problem, sorted input, \"the smallest value that works\", things with a start and an end, \"would it be easy if sorted\", or a Part 1 signal?",
    "Do [1, [2, [3]], 4] by hand. What did you do when you met the inner array?",
    "An inner array is the same kind of thing as the outer one. What does that suggest?",
    "What is the simplest item, where no further work is needed?"
   ],
   "hints": [
    "Walk the items. A number is simply added to the total.",
    "An array is a smaller copy of the same problem: its sum is nestedSum of that array.",
    "So: for each item, add either the number itself or nestedSum(item). Do not use flat()."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       [
        2,
        [
         3
        ]
       ],
       4
      ]
     ],
     "want": 10
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
     "want": 5
    },
    {
     "args": [
      [
       [
        [
         [
          7
         ]
        ]
       ]
      ]
     ],
     "want": 7
    },
    {
     "args": [
      [
       1,
       [],
       [
        2,
        []
       ]
      ]
     ],
     "want": 3
    },
    {
     "args": [
      [
       [
        1,
        2
       ],
       [
        3,
        [
         4,
         [
          5
         ]
        ]
       ]
      ]
     ],
     "want": 15
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*flat\\s*\\(|toString|JSON",
     "msg": "No flattening tricks: let the function call itself on each inner array."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function nestedSum(items) {",
    "  let total = 0;",
    "  for (const item of items) {",
    "    if (Array.isArray(item)) total += nestedSum(item);",
    "    else total += item;",
    "  }",
    "  return total;",
    "}"
   ],
   "why": "Where is the base case in this function? (It is not written as an if.)",
   "view": {
    "row": [
     "1",
     "[2,[3]]",
     "4"
    ],
    "tree": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     }
    ],
    "vars": [
     "total"
    ],
    "box": {
     "title": "call stack",
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
     "say": "An inner array is a smaller copy of the same problem. So the function can call itself on it.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "an inner array = the same problem",
     "arrows": null
    },
    {
     "say": "A plain number is the simplest item. It needs no call at all. That is the base case, hiding in the else.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a number needs no call",
     "arrows": null
    },
    {
     "say": "The first call. Total is zero.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "total": 0
     },
     "box": [
      "sum of [1,[2,[3]],4]"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "The first item is one. A number. Line five adds it.",
     "line": 5,
     "ptr": {
      "i": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "total": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The second item is an array. Line four calls nested sum on it, and waits.",
     "line": 4,
     "ptr": {
      "i": 1
     },
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "sum of [1,[2,[3]],4]",
      "sum of [2,[3]]"
     ],
     "card": "an array → call, and wait",
     "arrows": null
    },
    {
     "say": "Inside that call, two is added. Then there is another array, three. One more call. What does that innermost call return?",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "sum of [1,[2,[3]],4]",
      "sum of [2,[3]]",
      "sum of [3]"
     ],
     "card": "sum of [3] = ?",
     "arrows": null
    },
    {
     "say": "Three. So the middle call returns two plus three. Five.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "sum of [1,[2,[3]],4]"
     ],
     "card": "2 + 3 = 5 comes back",
     "arrows": null
    },
    {
     "say": "Back in the first call. One plus five is six.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [
      1
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "total": 6
     },
     "box": null,
     "card": "1 + 5 = 6",
     "arrows": null
    },
    {
     "say": "The last item is four. Ten.",
     "line": 5,
     "ptr": {
      "i": 2
     },
     "hot": [
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "total": 10
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line seven returns the total. Ten.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Every number and every array is visited once. O of n, counting everything inside.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "each item once → O(n) time",
     "arrows": null
    },
    {
     "say": "The call stack is as deep as the nesting. O of depth.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "stack = nesting depth",
     "arrows": null
    }
   ]
  },
  {
   "id": "my2",
   "num": 2,
   "title": "The Smallest Boat",
   "fn": "shipCapacity",
   "ask": "Parcels must be shipped <b>in the given order</b>, within <b>days</b> days. Each day one boat sails with as many of the next parcels as fit: their total weight may not exceed the boat's capacity. Return the <b>smallest capacity</b> that gets everything shipped in time.",
   "spec": "shipCapacity([2, 3, 4, 1], 2) → 5      (day 1: 2 + 3, day 2: 4 + 1)",
   "start": "// weights: parcels in the order they must be shipped. days is at least 1.\nfunction shipCapacity(weights, days) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? A smaller copy of the same problem, sorted input, \"the smallest value that works\", things with a start and an end, \"would it be easy if sorted\", or a Part 1 signal?",
    "For a given capacity, how would you work out the number of days needed? Do capacity 4 and capacity 5 by hand on [2, 3, 4, 1].",
    "What is the smallest capacity worth trying? And the largest?",
    "As the capacity grows, can \"ships in time\" ever flip back to no?"
   ],
   "hints": [
    "Write a helper: for a capacity, load parcels in order and start a new day whenever the next one does not fit. Count the days.",
    "The capacity must be at least the heaviest parcel, and never needs to exceed the total weight.",
    "Too small, ..., too small, big enough, ..., big enough: binary search between those two limits for the first capacity that needs no more than days."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       2,
       3,
       4,
       1
      ],
      2
     ],
     "want": 5
    },
    {
     "args": [
      [
       2,
       3,
       4,
       1
      ],
      1
     ],
     "want": 10
    },
    {
     "args": [
      [
       2,
       3,
       4,
       1
      ],
      4
     ],
     "want": 4
    },
    {
     "args": [
      [
       5
      ],
      3
     ],
     "want": 5
    },
    {
     "args": [
      [
       1,
       2,
       3,
       4,
       5,
       6,
       7,
       8,
       9,
       10
      ],
      5
     ],
     "want": 15
    },
    {
     "args": [
      [
       3,
       2,
       2,
       4,
       1,
       4
      ],
      3
     ],
     "want": 6
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "return [Array.from({ length: 5000 }, (_, i) => 100000 + (i * 7919) % 100000), 9];",
    "limit": 1500,
    "label": "5,000 heavy parcels",
    "msg": "Correct on the small cases, but trying every capacity one by one is far too slow here. Binary search the capacities."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function shipCapacity(weights, days) {",
    "  const daysFor = (cap) => {",
    "    let used = 1;",
    "    let load = 0;",
    "    for (const w of weights) {",
    "      if (load + w > cap) { used++; load = 0; }",
    "      load += w;",
    "    }",
    "    return used;",
    "  };",
    "  let low = Math.max(...weights);",
    "  let high = weights.reduce((a, b) => a + b, 0);",
    "  while (low < high) {",
    "    const mid = Math.floor((low + high) / 2);",
    "    if (daysFor(mid) <= days) high = mid;",
    "    else low = mid + 1;",
    "  }",
    "  return low;",
    "}"
   ],
   "why": "Why is the heaviest parcel the smallest capacity worth trying?",
   "view": {
    "row": [
     4,
     5,
     6,
     7,
     8,
     9,
     10
    ],
    "tree": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "cap",
    "row2Label": "",
    "ptrs": [
     {
      "id": "low",
      "row": 1
     },
     {
      "id": "high",
      "row": 1
     },
     {
      "id": "mid",
      "row": 1
     }
    ],
    "vars": [],
    "box": null,
    "list": false,
    "nameOnly": true,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "The answer is a capacity. Small boats fail, big boats work, and it flips only once. That is the signal.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "too small … too small, fits … fits",
     "arrows": null
    },
    {
     "say": "So write a test, days for a capacity, and binary search the capacities.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a test + binary search",
     "arrows": null
    },
    {
     "say": "Lines two to ten are the test. Load the parcels in order. When the next one does not fit, start a new day.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "does not fit → a new day",
     "arrows": null
    },
    {
     "say": "The smallest boat worth trying carries the heaviest parcel. Four. The largest carries everything. Ten.",
     "line": 12,
     "ptr": {
      "low": 0,
      "high": 6
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "low = 4 · high = 10",
     "arrows": null
    },
    {
     "say": "The middle is seven. Day one takes two and three. Four does not fit, so day two takes four and one. Two days. It fits.",
     "line": 15,
     "ptr": {
      "mid": 3
     },
     "hot": [
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "cap 7 → [2,3] [4,1] → 2 days",
     "arrows": null
    },
    {
     "say": "So the answer is seven, or smaller. High moves onto seven.",
     "line": 15,
     "ptr": {
      "high": 3
     },
     "hot": [],
     "ok": [],
     "bad": [
      4,
      5,
      6
     ],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "it fits → high = mid",
     "arrows": null
    },
    {
     "say": "The middle of four and seven is five. Two and three fill day one exactly. Four and one fill day two. Does five fit?",
     "line": 15,
     "ptr": {
      "mid": 1
     },
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "cap 5 → [2,3] [4,1] → ?",
     "arrows": null
    },
    {
     "say": "Yes. Two days. High moves onto five.",
     "line": 15,
     "ptr": {
      "high": 1
     },
     "hot": [],
     "ok": [],
     "bad": [
      2,
      3
     ],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "it fits → high = mid",
     "arrows": null
    },
    {
     "say": "The middle of four and five is four. Two. Then three. Then four. Then one. Four days. Too many. Low moves to five, and meets high.",
     "line": 16,
     "ptr": {
      "mid": 0,
      "low": 1
     },
     "hot": [],
     "ok": [],
     "bad": [
      0
     ],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "cap 4 → 4 days → too small",
     "arrows": null
    },
    {
     "say": "Line eighteen returns low. Capacity five.",
     "line": 18,
     "ptr": null,
     "hot": [],
     "ok": [
      1
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "About log of the total weight tests, and each test walks the parcels once.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "log(sum) tests × n parcels",
     "arrows": null
    },
    {
     "say": "A few numbers. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a few numbers → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "my3",
   "num": 3,
   "title": "Two to a Boat",
   "fn": "boats",
   "ask": "Each boat carries <b>at most two</b> animals, and their total weight may not exceed <b>limit</b>. Every animal weighs limit or less. Return the <b>fewest boats</b> needed to carry everyone.",
   "spec": "boats([3, 2, 2, 1], 3) → 3      ([1, 2], [2], [3])",
   "start": "// weights: one number per animal. limit: the most a boat can carry.\nfunction boats(weights, limit) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? A smaller copy of the same problem, sorted input, \"the smallest value that works\", things with a start and an end, \"would it be easy if sorted\", or a Part 1 signal?",
    "Do [3, 2, 2, 1] with limit 3 by hand. Who shared a boat?",
    "Take the heaviest animal. Who is the best partner to try for it, and what if even that partner does not fit?",
    "What order would make \"heaviest\" and \"lightest\" easy to find?"
   ],
   "hints": [
    "Sort the weights.",
    "Put a marker on the lightest and one on the heaviest. The heaviest always gets a boat now.",
    "If the lightest fits beside it, it goes too (move that marker). Either way count one boat and move the heavy marker inward."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       3,
       2,
       2,
       1
      ],
      3
     ],
     "want": 3
    },
    {
     "args": [
      [
       1,
       2
      ],
      3
     ],
     "want": 1
    },
    {
     "args": [
      [
       3,
       5,
       3,
       4
      ],
      5
     ],
     "want": 4
    },
    {
     "args": [
      [],
      4
     ],
     "want": 0
    },
    {
     "args": [
      [
       2
      ],
      2
     ],
     "want": 1
    },
    {
     "args": [
      [
       1,
       1,
       1,
       1
      ],
      2
     ],
     "want": 2
    },
    {
     "args": [
      [
       5,
       1,
       4,
       2
      ],
      6
     ],
     "want": 2
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function boats(weights, limit) {",
    "  const sorted = [...weights].sort((a, b) => a - b);",
    "  let light = 0;",
    "  let heavy = sorted.length - 1;",
    "  let count = 0;",
    "  while (light <= heavy) {",
    "    if (sorted[light] + sorted[heavy] <= limit) light++;",
    "    heavy--;",
    "    count++;",
    "  }",
    "  return count;",
    "}"
   ],
   "why": "Why is it right to pair the heaviest animal with the lightest one, rather than with the heaviest partner that fits?",
   "view": {
    "row": [
     3,
     2,
     2,
     1
    ],
    "tree": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "light",
      "row": 1
     },
     {
      "id": "heavy",
      "row": 1
     }
    ],
    "vars": [
     "count"
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
     "say": "The heaviest animal needs a boat anyway. If anyone can share it, the lightest one can. So try that pair.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "heaviest + lightest: do they fit?",
     "arrows": null
    },
    {
     "say": "Heaviest and lightest are easy to find in a sorted row. So sort first, then walk in from both ends.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "sort, then two ends",
     "arrows": null
    },
    {
     "say": "Line two sorts the weights. One, two, two, three.",
     "line": 2,
     "ptr": null,
     "hot": [
      0,
      1,
      2,
      3
     ],
     "ok": [],
     "bad": [],
     "set": {
      "0": 1,
      "1": 2,
      "2": 2,
      "3": 3
     },
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "sort((a, b) => a − b)",
     "arrows": null
    },
    {
     "say": "Pip marks the lightest. Moss marks the heaviest. No boats yet.",
     "line": 5,
     "ptr": {
      "light": 0,
      "heavy": 3
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "count": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One plus three is four. Over the limit. So the three sails alone. Moss moves in. One boat.",
     "line": 9,
     "ptr": {
      "heavy": 2
     },
     "hot": [
      0,
      3
     ],
     "ok": [],
     "bad": [
      3
     ],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "count": 1
     },
     "box": null,
     "card": "1 + 3 = 4 > 3 → 3 sails alone",
     "arrows": null
    },
    {
     "say": "One plus two is three. Within the limit. What happens to the two markers?",
     "line": 7,
     "ptr": null,
     "hot": [
      0,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + 2 = 3 ≤ 3 → ?",
     "arrows": null
    },
    {
     "say": "They share a boat. Both markers move in. Two boats.",
     "line": 9,
     "ptr": {
      "light": 1,
      "heavy": 1
     },
     "hot": [],
     "ok": [
      0,
      2
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "count": 2
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Both markers are on the last animal. Two plus two is over the limit, so it sails alone. Three boats.",
     "line": 9,
     "ptr": {
      "heavy": 0
     },
     "hot": [
      1
     ],
     "ok": [
      1
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "count": 3
     },
     "box": null,
     "card": "one left → its own boat",
     "arrows": null
    },
    {
     "say": "Light has passed heavy. Line eleven returns three.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The sort costs n log n. The walk after it is one pass.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "sort + one walk → O(n log n)",
     "arrows": null
    },
    {
     "say": "The sorted copy. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a sorted copy → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "my4",
   "num": 4,
   "title": "One More Booking",
   "fn": "addBooking",
   "ask": "bookings is a <b>sorted</b> list of intervals that do not overlap. Add the interval <b>extra</b>, merging it with anything it overlaps or touches, and return the new sorted list.",
   "spec": "addBooking([[1, 3], [6, 9]], [2, 5]) → [[1, 5], [6, 9]]",
   "start": "// bookings: sorted [start, end] pairs with no overlaps. extra: one [start, end] pair.\nfunction addBooking(bookings, extra) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? A smaller copy of the same problem, sorted input, \"the smallest value that works\", things with a start and an end, \"would it be easy if sorted\", or a Part 1 signal?",
    "Do [[1, 3], [6, 9]] plus [2, 5] by hand. Which bookings were untouched?",
    "Walking left to right, the bookings fall into three groups compared with the new one. What are they?",
    "What happens to the new interval each time it overlaps a booking?"
   ],
   "hints": [
    "Bookings that end before the new one starts are copied as they are.",
    "Bookings that overlap it are swallowed: stretch the new interval to cover them (smaller start, larger end).",
    "Push the new interval, then copy every booking that is left."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        1,
        3
       ],
       [
        6,
        9
       ]
      ],
      [
       2,
       5
      ]
     ],
     "want": [
      [
       1,
       5
      ],
      [
       6,
       9
      ]
     ]
    },
    {
     "args": [
      [],
      [
       4,
       8
      ]
     ],
     "want": [
      [
       4,
       8
      ]
     ]
    },
    {
     "args": [
      [
       [
        1,
        2
       ],
       [
        3,
        5
       ],
       [
        6,
        7
       ],
       [
        8,
        10
       ],
       [
        12,
        16
       ]
      ],
      [
       4,
       8
      ]
     ],
     "want": [
      [
       1,
       2
      ],
      [
       3,
       10
      ],
      [
       12,
       16
      ]
     ]
    },
    {
     "args": [
      [
       [
        1,
        5
       ]
      ],
      [
       6,
       8
      ]
     ],
     "want": [
      [
       1,
       5
      ],
      [
       6,
       8
      ]
     ]
    },
    {
     "args": [
      [
       [
        3,
        5
       ]
      ],
      [
       1,
       2
      ]
     ],
     "want": [
      [
       1,
       2
      ],
      [
       3,
       5
      ]
     ]
    },
    {
     "args": [
      [
       [
        1,
        5
       ]
      ],
      [
       2,
       3
      ]
     ],
     "want": [
      [
       1,
       5
      ]
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function addBooking(bookings, extra) {",
    "  const out = [];",
    "  let [start, end] = extra;",
    "  let i = 0;",
    "  while (i < bookings.length && bookings[i][1] < start) {",
    "    out.push(bookings[i++]);",
    "  }",
    "  while (i < bookings.length && bookings[i][0] <= end) {",
    "    start = Math.min(start, bookings[i][0]);",
    "    end = Math.max(end, bookings[i][1]);",
    "    i++;",
    "  }",
    "  out.push([start, end]);",
    "  while (i < bookings.length) out.push(bookings[i++]);",
    "  return out;",
    "}"
   ],
   "why": "The list is already sorted. What does that save you, compared with the merge problem in chapter 13?",
   "view": {
    "row": [
     "1-3",
     "6-9"
    ],
    "tree": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     }
    ],
    "vars": [
     "start",
     "end"
    ],
    "box": {
     "title": "out",
     "rows": 2
    },
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Things with a start and an end, already sorted. So one sweep is enough.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "sorted intervals → one sweep",
     "arrows": null
    },
    {
     "say": "The old bookings come in three groups. Before the new one. Overlapping it. And after it.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "before · overlapping · after",
     "arrows": null
    },
    {
     "say": "Line three unpacks the new booking. Start two, end five.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "start": 2,
      "end": 5
     },
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "The first loop copies bookings that end before the new one starts. One to three ends at three. That is not before two. So nothing is copied.",
     "line": 5,
     "ptr": {
      "i": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "end 3 < start 2 ? no",
     "arrows": null
    },
    {
     "say": "The second loop takes bookings that start before the new one ends. One to three starts at one. Does it overlap?",
     "line": 8,
     "ptr": null,
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "start 1 ≤ end 5 ?",
     "arrows": null
    },
    {
     "say": "Yes. So the new booking swallows it. The start becomes one. The end stays five.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      0
     ],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "start": 1,
      "end": 5
     },
     "box": null,
     "card": "min(2, 1) = 1 · max(5, 3) = 5",
     "arrows": null
    },
    {
     "say": "Next, six to nine. It starts at six, after five. No overlap. The second loop stops.",
     "line": 8,
     "ptr": {
      "i": 1
     },
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "start 6 ≤ end 5 ? no",
     "arrows": null
    },
    {
     "say": "Line thirteen pushes the merged booking. One to five.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1-5"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line fourteen copies everything that is left. Six to nine.",
     "line": 14,
     "ptr": null,
     "hot": [],
     "ok": [
      1
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1-5",
      "6-9"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Each booking is looked at once. No sorting needed. O of n.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "one sweep → O(n) time",
     "arrows": null
    },
    {
     "say": "The output list. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "the output → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "my5",
   "num": 5,
   "title": "Most Common First",
   "fn": "byFrequency",
   "ask": "Return the letters of the word rearranged so that the <b>most frequent letters come first</b>. All copies of a letter stay together. If two letters are equally frequent, either order is accepted.",
   "spec": "byFrequency(\"tree\") → \"eetr\"      (or \"eert\")",
   "start": "// word is a string of lowercase letters.\nfunction byFrequency(word) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? A smaller copy of the same problem, sorted input, \"the smallest value that works\", things with a start and an end, \"would it be easy if sorted\", or a Part 1 signal?",
    "Do \"tree\" by hand. What did you need to know about each letter?",
    "Once you know that, what do you need to put in order: the word, or something smaller?",
    "How do you tell a sort to use your own rule?"
   ],
   "hints": [
    "Count each letter in a Map.",
    "Sort the different letters with a compare function that puts the bigger count first.",
    "Build the answer by repeating each letter count times, in that order."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "tree"
     ],
     "want": "eetr"
    },
    {
     "args": [
      ""
     ],
     "want": ""
    },
    {
     "args": [
      "a"
     ],
     "want": "a"
    },
    {
     "args": [
      "aabbbc"
     ],
     "want": "bbbaac"
    },
    {
     "args": [
      "zzz"
     ],
     "want": "zzz"
    },
    {
     "args": [
      "abab"
     ],
     "want": "aabb"
    }
   ],
   "check": "if (typeof got !== 'string') return 'Return a string.'; const cnt = (s) => { const m = {}; for (const c of s) m[c] = (m[c] || 0) + 1; return m; }; const a = cnt(args[0]), b = cnt(got); if (JSON.stringify(Object.entries(a).sort()) !== JSON.stringify(Object.entries(b).sort())) return 'The answer must use exactly the letters of the word.'; let prev = Infinity, i = 0; while (i < got.length) { const c = got[i]; let j = i; while (j < got.length && got[j] === c) j++; if (j - i !== a[c]) return 'All copies of a letter must stay together.'; if (j - i > prev) return 'A less frequent letter came before a more frequent one.'; prev = j - i; i = j; } return '';",
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function byFrequency(word) {",
    "  const count = new Map();",
    "  for (const ch of word) {",
    "    count.set(ch, (count.get(ch) || 0) + 1);",
    "  }",
    "  const letters = [...count.keys()];",
    "  letters.sort((a, b) => count.get(b) - count.get(a));",
    "  return letters.map((ch) => ch.repeat(count.get(ch))).join('');",
    "}"
   ],
   "why": "Why sort the different letters, and not the whole word?",
   "view": {
    "row": [
     "t",
     "r",
     "e",
     "e"
    ],
    "tree": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [],
    "vars": [
     "letters"
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
     "say": "How often does each letter appear? That is a counting question. A map.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "how many of each? → a map",
     "arrows": null
    },
    {
     "say": "Then the different letters need to be in order of their counts. That is a sort with a rule.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "order by count → sort with a rule",
     "arrows": null
    },
    {
     "say": "Lines two to five count the letters. T, one. R, one. E, two.",
     "line": 4,
     "ptr": null,
     "hot": [
      0,
      1,
      2,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "t → 1",
      "r → 1",
      "e → 2"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line six lists the different letters. T, R, E. Only three things to sort, not four.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "letters": "t, r, e"
     },
     "box": null,
     "card": "sort 3 letters, not the word",
     "arrows": null
    },
    {
     "say": "Line seven sorts them with a rule. The count of b, minus the count of a. Which letter ends up first?",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "count(b) − count(a) → first?",
     "arrows": null
    },
    {
     "say": "E. It has the biggest count.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      2,
      3
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "letters": "e, t, r"
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line eight repeats each letter by its count, and joins them. E, E, T, R.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One pass to count, and a sort of the different letters. At most twenty six of those.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "count n letters + sort ≤ 26",
     "arrows": null
    },
    {
     "say": "The map and the answer. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "map + answer → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "my6",
   "num": 6,
   "title": "Find It in the Turned Row",
   "fn": "rotatedFind",
   "ask": "A sorted array of different numbers was <b>rotated</b> (some numbers moved from the front to the back, in order). Return the <b>index</b> of target, or <b>-1</b>. On a million doors you may open at most 100.",
   "spec": "rotatedFind([4, 5, 6, 7, 0, 1, 2], 0) → 4",
   "start": "// nums was sorted, then rotated. All numbers are different.\nfunction rotatedFind(nums, target) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? A smaller copy of the same problem, sorted input, \"the smallest value that works\", things with a start and an end, \"would it be easy if sorted\", or a Part 1 signal?",
    "Cut [4, 5, 6, 7, 0, 1, 2] at the middle door. One of the two halves is always properly sorted. Which one, and how can you tell?",
    "For the half that is sorted, how do you check in one step whether the target is inside it?",
    "So which half do you throw away?"
   ],
   "hints": [
    "Keep low and high, and look at mid. If it is the target, return mid.",
    "If nums[low] <= nums[mid], the left half is sorted: the target is in it exactly when nums[low] <= target < nums[mid].",
    "Otherwise the right half is sorted: the target is in it exactly when nums[mid] < target <= nums[high]. Move low or high accordingly."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       4,
       5,
       6,
       7,
       0,
       1,
       2
      ],
      0
     ],
     "want": 4
    },
    {
     "args": [
      [
       4,
       5,
       6,
       7,
       0,
       1,
       2
      ],
      3
     ],
     "want": -1
    },
    {
     "args": [
      [
       1
      ],
      1
     ],
     "want": 0
    },
    {
     "args": [
      [
       1
      ],
      0
     ],
     "want": -1
    },
    {
     "args": [
      [],
      5
     ],
     "want": -1
    },
    {
     "args": [
      [
       3,
       1
      ],
      1
     ],
     "want": 1
    },
    {
     "args": [
      [
       5,
       1,
       3
      ],
      5
     ],
     "want": 0
    },
    {
     "args": [
      [
       1,
       2,
       3,
       4
      ],
      4
     ],
     "want": 3
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*(indexOf|includes|findIndex|find)\\s*\\(",
     "msg": "Those built-ins walk the whole row. Halve it yourself."
    }
   ],
   "big": {
    "gen": "const n = 1000000, cut = 300000; return [Array.from({ length: n }, (_, i) => (i + cut) % n), 5];",
    "limit": 1500,
    "label": "a million doors, rotated",
    "msg": "Correct on the small cases, but on a million doors it opened more than 100 of them. One half is always sorted: use it to halve the row."
   },
   "prep": "let opened = 0; const nums = new Proxy(args[0], { get(t, k) { if (typeof k === 'string' && /^[0-9]+$/.test(k) && ++opened > 100) throw new Error('more than 100 doors were opened'); return t[k]; } }); return [nums, ...args.slice(1)];",
   "post": null,
   "solution": [
    "function rotatedFind(nums, target) {",
    "  let low = 0;",
    "  let high = nums.length - 1;",
    "  while (low <= high) {",
    "    const mid = Math.floor((low + high) / 2);",
    "    if (nums[mid] === target) return mid;",
    "    if (nums[low] <= nums[mid]) {",
    "      const inL = nums[low] <= target && target < nums[mid];",
    "      if (inL) high = mid - 1;",
    "      else low = mid + 1;",
    "    } else {",
    "      const inR = nums[mid] < target && target <= nums[high];",
    "      if (inR) low = mid + 1;",
    "      else high = mid - 1;",
    "    }",
    "  }",
    "  return -1;",
    "}"
   ],
   "why": "Why is at least one of the two halves always sorted?",
   "view": {
    "row": [
     4,
     5,
     6,
     7,
     0,
     1,
     2
    ],
    "tree": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "low",
      "row": 1
     },
     {
      "id": "high",
      "row": 1
     },
     {
      "id": "mid",
      "row": 1
     }
    ],
    "vars": [],
    "box": null,
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Nearly sorted, and looking for one thing. That is the binary search signal, even though the row is turned.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "nearly sorted + one target",
     "arrows": null
    },
    {
     "say": "Cut at the middle, and one half is always in order. In that half, the two end doors tell you whether the target is inside.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "target in the sorted half?",
     "arrows": null
    },
    {
     "say": "Low on the first door. High on the last. The target is zero.",
     "line": 3,
     "ptr": {
      "low": 0,
      "high": 6
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The middle is door three. Seven. Not the target.",
     "line": 6,
     "ptr": {
      "mid": 3
     },
     "hot": [
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line seven. Is the left half sorted? Four is not more than seven. Yes. It runs from four to seven.",
     "line": 7,
     "ptr": null,
     "hot": [
      0,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "4 ≤ 7 → the left half is sorted",
     "arrows": null
    },
    {
     "say": "Is the target, zero, between four and seven? No. So what do we throw away?",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "is 0 inside 4 … 7 ?",
     "arrows": null
    },
    {
     "say": "The whole left half. Low moves to door four.",
     "line": 10,
     "ptr": {
      "low": 4
     },
     "hot": [],
     "ok": [],
     "bad": [
      0,
      1,
      2,
      3
     ],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "not inside → low = mid + 1",
     "arrows": null
    },
    {
     "say": "The middle of four and six is five. One. Not the target. The left part, zero to one, is sorted, and zero is inside it. High moves to four.",
     "line": 9,
     "ptr": {
      "mid": 5,
      "high": 4
     },
     "hot": [
      4,
      5
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "0 is inside 0 … 1 → high = 4",
     "arrows": null
    },
    {
     "say": "The middle is door four. Zero. Line six returns its index.",
     "line": 6,
     "ptr": {
      "mid": 4
     },
     "hot": [],
     "ok": [
      4
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Every look halves what is left. O of log n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "halving → O(log n) time",
     "arrows": null
    },
    {
     "say": "Three markers. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "3 markers → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "my7",
   "num": 7,
   "title": "Zip, Without a Loop",
   "fn": "zipLists",
   "ask": "Two sorted linked lists. Join them into <b>one sorted list</b> by re-hooking the nodes, and return its head. You did this with a loop in chapter 9: this time, <b>no loop</b>.",
   "spec": "zipLists(1 → 4, 2 → 3) → 1 → 2 → 3 → 4",
   "start": "// A node is { val, next }. A list head is the first node, or null when the list is empty.\n// a and b are the heads of two sorted lists. No loops.\nfunction zipLists(a, b) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? A smaller copy of the same problem, sorted input, \"the smallest value that works\", things with a start and an end, \"would it be easy if sorted\", or a Part 1 signal?",
    "Which node is the head of the answer?",
    "Once you have picked that node, what is left to do? Describe it as the same problem with smaller inputs.",
    "When is the answer known without any more work?"
   ],
   "hints": [
    "Base cases: if a is null return b; if b is null return a.",
    "Otherwise the smaller head is the head of the answer.",
    "Its next is whatever zipLists returns for the rest: for example a.next = zipLists(a.next, b); return a."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       4
      ],
      [
       2,
       3
      ]
     ],
     "want": [
      1,
      2,
      3,
      4
     ]
    },
    {
     "args": [
      [],
      []
     ],
     "want": []
    },
    {
     "args": [
      [
       1
      ],
      []
     ],
     "want": [
      1
     ]
    },
    {
     "args": [
      [],
      [
       2
      ]
     ],
     "want": [
      2
     ]
    },
    {
     "args": [
      [
       1,
       1
      ],
      [
       1
      ]
     ],
     "want": [
      1,
      1,
      1
     ]
    },
    {
     "args": [
      [
       5
      ],
      [
       1,
       2
      ]
     ],
     "want": [
      1,
      2,
      5
     ]
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\b(for|while)\\b",
     "msg": "No loops in this one: let the function call itself."
    }
   ],
   "big": null,
   "prep": "return [toList(args[0]), toList(args[1])];",
   "post": "return got === undefined ? 'nothing was returned' : toArr(got);",
   "solution": [
    "function zipLists(a, b) {",
    "  if (a === null) return b;",
    "  if (b === null) return a;",
    "  if (a.val <= b.val) {",
    "    a.next = zipLists(a.next, b);",
    "    return a;",
    "  }",
    "  b.next = zipLists(a, b.next);",
    "  return b;",
    "}"
   ],
   "why": "Lines 5 and 8 trust the inner call. What exactly are they trusting it to return?",
   "view": {
    "row": [
     1,
     4
    ],
    "tree": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     2,
     3
    ],
    "rowLabel": "a",
    "row2Label": "b",
    "ptrs": [
     {
      "id": "a",
      "row": 1
     },
     {
      "id": "b",
      "row": 2
     }
    ],
    "vars": [],
    "box": {
     "title": "answer",
     "rows": 1
    },
    "list": false,
    "nameOnly": true,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "The head of the answer is the smaller of the two heads. After that, what is left is the same problem, one node smaller.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "smaller head + the same problem",
     "arrows": null
    },
    {
     "say": "A smaller copy of the same problem. That is recursion. And an empty list is the base case.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "one list empty → return the other",
     "arrows": null
    },
    {
     "say": "The first call. One against two. One is smaller, so it will be the head. Line five asks the function to zip the rest, and waits.",
     "line": 5,
     "ptr": {
      "a": 0,
      "b": 0
     },
     "hot": [
      0,
      "d0"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1 → ..."
     ],
     "card": "1 ≤ 2 → 1 is the head",
     "arrows": null
    },
    {
     "say": "The next call. Four against two. Two is smaller. Line eight asks for the rest.",
     "line": 8,
     "ptr": {
      "a": 1
     },
     "hot": [
      1,
      "d0"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1 → 2 → ..."
     ],
     "card": "4 > 2 → take 2",
     "arrows": null
    },
    {
     "say": "Four against three. Three is taken. Now list b has run out. What does the next call return?",
     "line": 8,
     "ptr": {
      "b": 1
     },
     "hot": [
      1,
      "d1"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1 → 2 → 3 → ..."
     ],
     "card": "b is empty → ?",
     "arrows": null
    },
    {
     "say": "Line three. When b is empty, the answer is simply the rest of a. The four.",
     "line": 3,
     "ptr": {
      "b": 2
     },
     "hot": [],
     "ok": [
      1
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1 → 2 → 3 → 4"
     ],
     "card": "base case → return a",
     "arrows": null
    },
    {
     "say": "Each waiting call hooks that answer onto its node, and returns. The first call returns the head. One.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One call per node. O of n plus m time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "one call per node → O(n + m)",
     "arrows": null
    },
    {
     "say": "Every call waits on the stack. O of n plus m space. The loop version needed O of one.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "waiting calls → O(n + m) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "my8",
   "num": 8,
   "title": "Everyone But Me",
   "fn": "productExcept",
   "ask": "Return an array where position i holds the <b>product of every number except nums[i]</b>. Do <b>not</b> use division, and do it in O(n).",
   "spec": "productExcept([1, 2, 3, 4]) → [24, 12, 8, 6]",
   "start": "// nums is an array of numbers. No division.\nfunction productExcept(nums) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? A smaller copy of the same problem, sorted input, \"the smallest value that works\", things with a start and an end, \"would it be easy if sorted\", or a Part 1 signal?",
    "For position 2 in [1, 2, 3, 4], the answer is 1 × 2 × 4. Split that into \"everything to the left\" and \"everything to the right\".",
    "Multiplying everything to the left again for each position repeats work. Where have you seen \"everything before this door\" kept as a running value?",
    "How could one walk give you the left products, and another the right products?"
   ],
   "hints": [
    "First walk, left to right: out[i] = the product of everything before door i (carry a running product).",
    "Second walk, right to left: carry a running product of everything after door i.",
    "Multiply out[i] by that running product. Nothing is divided."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       2,
       3,
       4
      ]
     ],
     "want": [
      24,
      12,
      8,
      6
     ]
    },
    {
     "args": [
      [
       5
      ]
     ],
     "want": [
      1
     ]
    },
    {
     "args": [
      [
       2,
       3
      ]
     ],
     "want": [
      3,
      2
     ]
    },
    {
     "args": [
      [
       1,
       0,
       3
      ]
     ],
     "want": [
      0,
      3,
      0
     ]
    },
    {
     "args": [
      [
       0,
       0
      ]
     ],
     "want": [
      0,
      0
     ]
    },
    {
     "args": [
      [
       -1,
       2,
       -3
      ]
     ],
     "want": [
      -6,
      3,
      -2
     ]
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "[^/*]/[^/*]",
     "msg": "No division: it breaks on zeros, and it is not the idea. Use what is to the left and what is to the right."
    }
   ],
   "big": {
    "gen": "return [Array.from({ length: 40000 }, (_, i) => (i % 2 ? 1 : -1))];",
    "limit": 1500,
    "label": "40,000 numbers",
    "msg": "Correct on the small cases, but too slow on the big one. Multiplying everything again for each position is O(n²). Carry a running product from each side."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function productExcept(nums) {",
    "  const out = new Array(nums.length);",
    "  let before = 1;",
    "  for (let i = 0; i < nums.length; i++) {",
    "    out[i] = before;",
    "    before *= nums[i];",
    "  }",
    "  let after = 1;",
    "  for (let i = nums.length - 1; i >= 0; i--) {",
    "    out[i] *= after;",
    "    after *= nums[i];",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "Why is out[i] set before \"before\" is multiplied by nums[i], and not after?",
   "view": {
    "row": [
     1,
     2,
     3,
     4
    ],
    "tree": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     "",
     "",
     "",
     ""
    ],
    "rowLabel": "nums",
    "row2Label": "out",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     }
    ],
    "vars": [
     "before",
     "after"
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
     "say": "Everything except me, is everything to my left, times everything to my right.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "except me = left × right",
     "arrows": null
    },
    {
     "say": "Everything before this door, as a running value. That is the prefix idea. Here it runs once from each side.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a running product from each side",
     "arrows": null
    },
    {
     "say": "Before starts at one. It holds the product of everything to the left.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "before": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The first walk writes before into each slot, then multiplies the door in. One. One. Two. Six.",
     "line": 6,
     "ptr": {
      "i": 3
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "set": {
      "d0": 1,
      "d1": 1,
      "d2": 2,
      "d3": 6
     },
     "gone": [],
     "show": [],
     "vars": {
      "before": 24
     },
     "box": null,
     "card": "left products: 1, 1, 2, 6",
     "arrows": null
    },
    {
     "say": "Now after starts at one, and the second walk comes back from the right.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "after": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door three. Six times one. Six. Then after takes in the four.",
     "line": 11,
     "ptr": {
      "i": 3
     },
     "hot": [
      3
     ],
     "ok": [
      "d3"
     ],
     "bad": [],
     "set": {
      "d3": 6
     },
     "gone": [],
     "show": [],
     "vars": {
      "after": 4
     },
     "box": null,
     "card": "6 × 1 = 6",
     "arrows": null
    },
    {
     "say": "Door two. Its slot holds two. After is four. What is written?",
     "line": 10,
     "ptr": {
      "i": 2
     },
     "hot": [
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "2 × 4 = ?",
     "arrows": null
    },
    {
     "say": "Eight. Left times right. Then after becomes twelve.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [
      "d2"
     ],
     "bad": [],
     "set": {
      "d2": 8
     },
     "gone": [],
     "show": [],
     "vars": {
      "after": 12
     },
     "box": null,
     "card": "2 × 4 = 8",
     "arrows": null
    },
    {
     "say": "Door one. One times twelve. Twelve. And door zero. One times twenty four.",
     "line": 10,
     "ptr": {
      "i": 0
     },
     "hot": [],
     "ok": [
      "d1",
      "d0"
     ],
     "bad": [],
     "set": {
      "d1": 12,
      "d0": 24
     },
     "gone": [],
     "show": [],
     "vars": {
      "after": 24
     },
     "box": null,
     "card": "1 × 12 = 12 · 1 × 24 = 24",
     "arrows": null
    },
    {
     "say": "Line thirteen returns the answer.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Two walks. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "2 walks → O(n) time",
     "arrows": null
    },
    {
     "say": "Apart from the answer row, two numbers. O of one extra space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "2 numbers → O(1) extra space",
     "arrows": null
    }
   ]
  },
  {
   "id": "my9",
   "num": 9,
   "title": "A Messy Mirror",
   "fn": "isCleanMirror",
   "ask": "Return <b>true</b> if the text reads the same forwards and backwards when you <b>ignore everything that is not a letter</b> and ignore capitals. Do not build a cleaned-up copy.",
   "spec": "isCleanMirror(\"No lemon, no melon\") → true      isCleanMirror(\"Not a mirror\") → false",
   "start": "// text can hold letters, spaces and punctuation.\nfunction isCleanMirror(text) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? A smaller copy of the same problem, sorted input, \"the smallest value that works\", things with a start and an end, \"would it be easy if sorted\", or a Part 1 signal?",
    "Do \"No lemon, no melon\" by hand from both ends. What did you do when you met the comma?",
    "How do you compare \"N\" with \"n\"?",
    "What must each marker do before a comparison can happen?"
   ],
   "hints": [
    "One marker on each end, walking inward.",
    "Before comparing, move each marker past anything that is not a letter (a small helper that tests a character helps).",
    "Compare the two letters in lower case. If they differ, return false. If the markers meet, return true."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "No lemon, no melon"
     ],
     "want": true
    },
    {
     "args": [
      "Not a mirror"
     ],
     "want": false
    },
    {
     "args": [
      ""
     ],
     "want": true
    },
    {
     "args": [
      "a."
     ],
     "want": true
    },
    {
     "args": [
      "!!"
     ],
     "want": true
    },
    {
     "args": [
      "Was it a car or a cat I saw?"
     ],
     "want": true
    },
    {
     "args": [
      "ab_a"
     ],
     "want": true
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*(reverse|replace|replaceAll|split|filter)\\s*\\(",
     "msg": "No cleaned-up or reversed copy: walk the text itself from both ends."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function isCleanMirror(text) {",
    "  const letter = (ch) => ch.toLowerCase() !== ch.toUpperCase();",
    "  let left = 0;",
    "  let right = text.length - 1;",
    "  while (left < right) {",
    "    if (!letter(text[left])) left++;",
    "    else if (!letter(text[right])) right--;",
    "    else {",
    "      const a = text[left].toLowerCase();",
    "      if (a !== text[right].toLowerCase()) return false;",
    "      left++;",
    "      right--;",
    "    }",
    "  }",
    "  return true;",
    "}"
   ],
   "why": "Line 2 decides whether a character is a letter. Why does that test work?",
   "view": {
    "row": [
     "A",
     "b",
     ",",
     "b",
     "a"
    ],
    "tree": null,
    "treeIndex": false,
    "ghost": [],
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
    "vars": [],
    "box": null,
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Two ends, walking in. The same pattern as the mirror word in chapter two.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "two ends, walking in",
     "arrows": null
    },
    {
     "say": "With one addition. A marker standing on something that is not a letter just steps past it.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "not a letter → step past it",
     "arrows": null
    },
    {
     "say": "Line two is a helper. A letter is something whose lower case and upper case differ. A comma has no case.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "letter: lower ≠ upper",
     "arrows": null
    },
    {
     "say": "Pip on the first character. Moss on the last.",
     "line": 4,
     "ptr": {
      "left": 0,
      "right": 4
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Both are letters. Capital A, and small a. In lower case they are the same. Both markers move in.",
     "line": 12,
     "ptr": {
      "left": 1,
      "right": 3
     },
     "hot": [
      0,
      4
     ],
     "ok": [
      0,
      4
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "\"a\" = \"a\" → move both",
     "arrows": null
    },
    {
     "say": "B and b. The same. Both move in. Now Pip stands on the comma. What happens?",
     "line": 6,
     "ptr": {
      "left": 2,
      "right": 2
     },
     "hot": [
      1,
      3
     ],
     "ok": [
      1,
      3
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "left = 2 · right = 2 → ?",
     "arrows": null
    },
    {
     "say": "The two markers have met. The loop ends before the comma is ever looked at. Every pair matched.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "2 < 2 → no, stop",
     "arrows": null
    },
    {
     "say": "Line fifteen returns true.",
     "line": 15,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Each character is passed once. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 pass → O(n) time",
     "arrows": null
    },
    {
     "say": "Two markers, and no copy of the text. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "2 markers → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "my10",
   "num": 10,
   "title": "One Arrow, Many Balloons",
   "fn": "minArrows",
   "ask": "Each balloon covers a stretch <b>[start, end]</b> of a wall. An arrow shot straight up at position x bursts every balloon whose stretch includes x (ends included). Return the <b>fewest arrows</b> that burst them all.",
   "spec": "minArrows([[10, 16], [2, 8], [1, 6], [7, 12]]) → 2      (one at 6, one at 12)",
   "start": "// balloons is an array of [start, end] pairs.\nfunction minArrows(balloons) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? A smaller copy of the same problem, sorted input, \"the smallest value that works\", things with a start and an end, \"would it be easy if sorted\", or a Part 1 signal?",
    "Do the example by hand. Where did you shoot first, and why there?",
    "Take the balloon that ends first. Where is the best place to shoot it, so the arrow has the best chance of hitting others too?",
    "After that arrow, which balloons still need one?"
   ],
   "hints": [
    "Sort the balloons by where they end.",
    "Shoot at the end of the first balloon. That arrow also bursts every later balloon that starts at or before that point.",
    "The first balloon that starts after the arrow needs a new arrow, at its own end. Count the arrows."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        10,
        16
       ],
       [
        2,
        8
       ],
       [
        1,
        6
       ],
       [
        7,
        12
       ]
      ]
     ],
     "want": 2
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
       [
        1,
        2
       ]
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       [
        1,
        2
       ],
       [
        3,
        4
       ],
       [
        5,
        6
       ]
      ]
     ],
     "want": 3
    },
    {
     "args": [
      [
       [
        1,
        2
       ],
       [
        2,
        3
       ],
       [
        3,
        4
       ],
       [
        4,
        5
       ]
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       [
        1,
        10
       ],
       [
        2,
        3
       ],
       [
        4,
        5
       ]
      ]
     ],
     "want": 2
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function minArrows(balloons) {",
    "  const sorted = [...balloons].sort((a, b) => a[1] - b[1]);",
    "  let arrows = 0;",
    "  let at = -Infinity;",
    "  for (const [start, end] of sorted) {",
    "    if (start > at) {",
    "      arrows++;",
    "      at = end;",
    "    }",
    "  }",
    "  return arrows;",
    "}"
   ],
   "why": "Why shoot at the END of the balloon that ends first, and not at its start or its middle?",
   "view": {
    "row": [
     "10-16",
     "2-8",
     "1-6",
     "7-12"
    ],
    "tree": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     }
    ],
    "vars": [
     "at",
     "arrows"
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
     "say": "Things with a start and an end. So sort them, and sweep. Here, by where they end.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "start and end → sort, then sweep",
     "arrows": null
    },
    {
     "say": "The balloon that ends first must be burst. Shooting at its very end catches the most other balloons.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "shoot at the earliest end",
     "arrows": null
    },
    {
     "say": "Line two sorts by end. One to six. Two to eight. Seven to twelve. Ten to sixteen.",
     "line": 2,
     "ptr": null,
     "hot": [
      0,
      1,
      2,
      3
     ],
     "ok": [],
     "bad": [],
     "set": {
      "0": "1-6",
      "1": "2-8",
      "2": "7-12",
      "3": "10-16"
     },
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "sort by a[1] − b[1]",
     "arrows": null
    },
    {
     "say": "No arrows yet. At is the position of the last arrow. Minus infinity.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "at": "−∞",
      "arrows": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One to six. It starts after the last arrow. So it needs a new one, shot at its end. Six.",
     "line": 8,
     "ptr": {
      "i": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "arrows": 1,
      "at": 6
     },
     "box": null,
     "card": "new arrow at 6",
     "arrows": null
    },
    {
     "say": "Two to eight. It starts at two. The arrow is at six. Does this balloon need a new arrow?",
     "line": 6,
     "ptr": {
      "i": 1
     },
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "start 2 > arrow 6 ?",
     "arrows": null
    },
    {
     "say": "No. Two is not after six. The arrow at six passes straight through it.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "the arrow at 6 bursts it too",
     "arrows": null
    },
    {
     "say": "Seven to twelve. It starts after six. A new arrow, at twelve.",
     "line": 8,
     "ptr": {
      "i": 2
     },
     "hot": [
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "arrows": 2,
      "at": 12
     },
     "box": null,
     "card": "start 7 > 6 → new arrow at 12",
     "arrows": null
    },
    {
     "say": "Ten to sixteen. Ten is not after twelve. Already burst.",
     "line": 6,
     "ptr": {
      "i": 3
     },
     "hot": [
      3
     ],
     "ok": [
      2,
      3
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line eleven returns the arrows. Two.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The sort costs n log n. The sweep is one pass.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "sort + one sweep → O(n log n)",
     "arrows": null
    },
    {
     "say": "The sorted copy. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a sorted copy → O(n) space",
     "arrows": null
    }
   ]
  }
 ]
};
