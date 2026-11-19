window.CHAPTER = {
 "id": "prefix",
 "title": "Prefix Sums",
 "sub": "CHAPTER 4 · PREFIX SUMS",
 "key": "burrow-ch-prefix",
 "next": {
  "href": "chapter.html?c=twoptr",
  "label": "Chapter 5: Two pointers"
 },
 "prev": {
  "href": "hashmap.html",
  "label": "Chapter 3: Hash maps"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "ps0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Add once",
   "intro": "What a prefix sum is for, in half a minute."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "pst1",
   "label": "Theory 1",
   "short": "T1",
   "name": "Add once, answer forever",
   "intro": "A row of running totals turns any range sum into one subtraction. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "pst2",
   "label": "Theory 2",
   "short": "T2",
   "name": "A total minus an earlier total",
   "intro": "Counting the stretches that add up to a target, with a map of totals. One guess."
  }
 ],
 "notes": {
  "t1": "<h3>Key ideas</h3><ul><li><b>pre[i] is the sum of everything before door i.</b> It has one more slot than the array, and <code>pre[0]</code> is 0.</li>\n      <li><b>Sum of doors l to r = <code>pre[r + 1] - pre[l]</code>.</b> The total after door r, minus the total before door l.</li>\n      <li><b>Build once in O(n), then every range sum is O(1).</b> The price is one extra row: O(n) space.</li>\n      <li><b>When to reach for it:</b> the problem asks for the sum of a stretch, more than once, and the array does not change.</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>Every stretch is one total minus an earlier total.</b></li>\n      <li><b>A stretch adds up to k exactly when two totals differ by k.</b> So at each total, look for <code>total - k</code> among the earlier ones.</li>\n      <li><b>A map of earlier totals makes that lookup one step.</b> Start it with total 0, seen once, for stretches that begin at door 0.</li>\n      <li><b>This works with negative numbers too</b>, where a sliding window does not.</li></ul>"
 },
 "quiz": {
  "pst1-q1": {
   "ask": "The totals row is 0, 3, 4, 8, 10, 15, 24. Which subtraction gives the sum of doors 1 to 3?",
   "opts": [
    "10 − 3",
    "8 − 3",
    "10 − 4"
   ],
   "right": 0,
   "why": "The total after door 3 is pre[4] = 10. The total before door 1 is pre[1] = 3. 10 − 3 = 7, and 1 + 4 + 2 = 7."
  },
  "pst2-q1": {
   "ask": "We want stretches that add up to 7. The walk is on the total 15. Which earlier total do we look for?",
   "opts": [
    "8",
    "7",
    "10"
   ],
   "right": 0,
   "why": "15 − 7 = 8. If 8 was seen earlier, the doors between those two totals add up to exactly 7."
  },
  "ps1s-q": {
   "ask": "sum is 4 and the door holds 4. What does line 6 write into the answer row?",
   "opts": [
    "4",
    "8",
    "12"
   ],
   "right": 1,
   "why": "The old total, 4, plus the new number, 4. Nothing before it is added again."
  },
  "ps2s-q": {
   "ask": "total = 10, left = 3, and this door holds 4. What is right?",
   "opts": [
    "3",
    "4",
    "7"
   ],
   "right": 0,
   "why": "10 − 3 − 4 = 3. That is the last door, which holds 3."
  },
  "ps3s-q": {
   "ask": "The query is l = 0, r = 3. Line 8 computes pre[r + 1] − pre[l]. Which slots is that?",
   "opts": [
    "pre[4] − pre[0]",
    "pre[3] − pre[0]",
    "pre[4] − pre[1]"
   ],
   "right": 0,
   "why": "r + 1 is 4 and l is 0. That is 10 − 0 = 10, the whole row."
  },
  "ps4s-q": {
   "ask": "sum = 4 and k = 3. Which earlier total does line 7 look up?",
   "opts": [
    "1",
    "3",
    "4"
   ],
   "right": 0,
   "why": "sum − k = 4 − 3 = 1. The total 1 was seen after door 0, so doors 1 and 2 add up to 3."
  }
 },
 "problems": [
  {
   "id": "ps1",
   "num": 1,
   "title": "The Running Total",
   "fn": "runningTotal",
   "ask": "Return a new array where position <b>i</b> holds the sum of <b>nums[0]</b> up to and including <b>nums[i]</b>.",
   "spec": "runningTotal([3, 1, 4, 2]) → [3, 4, 8, 10]",
   "start": "// nums is an array of numbers.\nfunction runningTotal(nums) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: each answer is everything so far, added up.",
    "Do it by hand on [3, 1, 4, 2]. How did you get 8? Did you add three numbers, or two?",
    "What one number do you need to carry from door to door?",
    "What does the function return for an empty array?"
   ],
   "hints": [
    "You do not need to re-add from the start for every door.",
    "Keep one variable, sum. At each door add its number to sum.",
    "After each add, push sum onto the answer array. Return the array at the end."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       3,
       1,
       4,
       2
      ]
     ],
     "want": [
      3,
      4,
      8,
      10
     ]
    },
    {
     "args": [
      [
       5
      ]
     ],
     "want": [
      5
     ]
    },
    {
     "args": [
      []
     ],
     "want": []
    },
    {
     "args": [
      [
       1,
       1,
       1,
       1,
       1
      ]
     ],
     "want": [
      1,
      2,
      3,
      4,
      5
     ]
    },
    {
     "args": [
      [
       2,
       -2,
       3
      ]
     ],
     "want": [
      2,
      0,
      3
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
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function runningTotal(nums) {",
    "  const out = [];",
    "  let sum = 0;",
    "  for (let i = 0; i < nums.length; i++) {",
    "    sum += nums[i];",
    "    out.push(sum);",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "Why is one variable enough? What would the code cost if it re-added from door 0 for every position?",
   "view": {
    "row": [
     3,
     1,
     4,
     2
    ],
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
     "sum"
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
     "say": "Each total is the total before it, plus one more number. So nothing needs to be added twice.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "new total = old total + one number",
     "arrows": null
    },
    {
     "say": "Carry one number, sum, from door to door. Write it down after every add.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "carry sum, write it at each door",
     "arrows": null
    },
    {
     "say": "Line two makes an empty row for the answers. Line three starts sum at zero.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "I is zero. Line five adds the three to sum. Sum is three.",
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
     "vars": {
      "sum": 3
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line six writes that total into the answer row.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      "d0"
     ],
     "bad": [],
     "set": {
      "d0": 3
     },
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Next door. Add one. Sum is four. Write it down.",
     "line": 6,
     "ptr": {
      "i": 1
     },
     "hot": [
      1
     ],
     "ok": [
      "d1"
     ],
     "bad": [],
     "set": {
      "d1": 4
     },
     "vars": {
      "sum": 4
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The next door holds four, and sum is four. What gets written?",
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
     "vars": null,
     "box": null,
     "card": "4 + 4 = ?",
     "arrows": null
    },
    {
     "say": "Eight. The old total, plus one new number.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      "d2"
     ],
     "bad": [],
     "set": {
      "d2": 8
     },
     "vars": {
      "sum": 8
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Last door. Add two. Ten.",
     "line": 6,
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
      "d3": 10
     },
     "vars": {
      "sum": 10
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The loop ends, and line eight returns the answer row.",
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
     "say": "One walk, and one add per door. O of n time.",
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
     "say": "The answer row holds n totals. O of n space. That row has a name: the prefix sums.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "n totals → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "ps2",
   "num": 2,
   "title": "The Balance Point",
   "fn": "balancePoint",
   "ask": "Return the first <b>index</b> where the sum of everything to its left equals the sum of everything to its right. The door itself counts for neither side. If there is none, return <b>-1</b>.",
   "spec": "balancePoint([2, 1, 4, 3]) → 2      balancePoint([1, 2, 3]) → -1",
   "start": "// nums is an array of numbers.\nfunction balancePoint(nums) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: a door where the left side and the right side weigh the same.",
    "Do it by hand on [2, 1, 4, 3]. At door 2, what is on the left? What is on the right?",
    "Adding up both sides again at every door is slow. If you know the total and the left side, what is the right side?",
    "How does the left side change when you step one door to the right?"
   ],
   "hints": [
    "Add up the whole array once and keep it as total.",
    "Walk the doors keeping a running left sum. The right side is total - left - nums[i].",
    "If left equals right, return i. Otherwise add nums[i] to left and move on. Return -1 after the loop."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       2,
       1,
       4,
       3
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       1,
       2,
       3
      ]
     ],
     "want": -1
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
      []
     ],
     "want": -1
    },
    {
     "args": [
      [
       1,
       7,
       3,
       6,
       5,
       6
      ]
     ],
     "want": 3
    },
    {
     "args": [
      [
       2,
       1,
       -1
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       0,
       0
      ]
     ],
     "want": 0
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function balancePoint(nums) {",
    "  let total = 0;",
    "  for (const x of nums) total += x;",
    "  let left = 0;",
    "  for (let i = 0; i < nums.length; i++) {",
    "    const right = total - left - nums[i];",
    "    if (left === right) return i;",
    "    left += nums[i];",
    "  }",
    "  return -1;",
    "}"
   ],
   "why": "Why is left updated after the comparison and not before it?",
   "view": {
    "row": [
     2,
     1,
     4,
     3
    ],
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
     "total",
     "left",
     "right"
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
     "say": "The whole row is three parts. The left side, this door, and the right side.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "left + this door + right = total",
     "arrows": null
    },
    {
     "say": "So if we know the total and the left side, the right side is one subtraction.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "right = total − left − this door",
     "arrows": null
    },
    {
     "say": "Lines two and three add everything up, once. The total is ten.",
     "line": 3,
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
     "vars": {
      "total": 10
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line four. Left starts at zero, because nothing is to the left of the first door.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "left": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door zero. Line six works out the right side. Ten, minus zero, minus two. Eight.",
     "line": 6,
     "ptr": {
      "i": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "right": 8
     },
     "box": null,
     "card": "right = 10 − 0 − 2 = 8",
     "arrows": null
    },
    {
     "say": "Line seven compares. Zero is not eight. Not balanced.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      0
     ],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line eight moves this door into the left side. Left is two.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "left": 2
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door one. Ten, minus two, minus one. Seven. Two is not seven.",
     "line": 6,
     "ptr": {
      "i": 1
     },
     "hot": [],
     "ok": [],
     "bad": [
      1
     ],
     "set": null,
     "vars": {
      "right": 7
     },
     "box": null,
     "card": "right = 10 − 2 − 1 = 7",
     "arrows": null
    },
    {
     "say": "Left becomes three.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "left": 3
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door two holds four, and left is three. What is the right side?",
     "line": 6,
     "ptr": {
      "i": 2
     },
     "hot": [
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "right = 10 − 3 − 4 = ?",
     "arrows": null
    },
    {
     "say": "Three. Left equals right. Line seven returns the index. Two.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      2
     ],
     "bad": [],
     "set": null,
     "vars": {
      "right": 3
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One walk for the total, and one to search. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "2 walks → O(n) time",
     "arrows": null
    },
    {
     "say": "Three numbers, and no extra row. O of one space.",
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
   "id": "ps3",
   "num": 3,
   "title": "Many Questions",
   "fn": "rangeSums",
   "ask": "Each query is a pair <b>[l, r]</b>. For every query, work out the sum of <b>nums[l]</b> up to and including <b>nums[r]</b>. Return the answers in order. There can be very many queries, so each answer must not walk the range.",
   "spec": "rangeSums([3, 1, 4, 2], [[1, 2], [0, 3]]) → [5, 10]",
   "start": "// nums is an array of numbers. queries is an array of [l, r] pairs, with l <= r.\nfunction rangeSums(nums, queries) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: many range sums over the same array.",
    "Do it by hand: the sum of doors 1 to 2 in [3, 1, 4, 2]. Now do doors 0 to 3. What work did you repeat?",
    "What could you work out once, before any query, so that each answer is a single subtraction?",
    "Which two of those stored numbers answer the query [l, r]?"
   ],
   "hints": [
    "Build a row pre with one more slot than nums: pre[0] = 0 and pre[i + 1] = pre[i] + nums[i].",
    "pre[i] is the sum of everything before door i.",
    "The answer to [l, r] is pre[r + 1] - pre[l]."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       3,
       1,
       4,
       2
      ],
      [
       [
        1,
        2
       ],
       [
        0,
        3
       ]
      ]
     ],
     "want": [
      5,
      10
     ]
    },
    {
     "args": [
      [
       5
      ],
      [
       [
        0,
        0
       ]
      ]
     ],
     "want": [
      5
     ]
    },
    {
     "args": [
      [
       1,
       2,
       3
      ],
      []
     ],
     "want": []
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
      [
       [
        0,
        0
       ],
       [
        4,
        4
       ],
       [
        1,
        3
       ],
       [
        0,
        4
       ]
      ]
     ],
     "want": [
      1,
      5,
      9,
      15
     ]
    },
    {
     "args": [
      [
       2,
       -2,
       3
      ],
      [
       [
        0,
        1
       ],
       [
        1,
        2
       ]
      ]
     ],
     "want": [
      0,
      1
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "const n = 150000; const nums = Array.from({ length: n }, (_, i) => i % 7); const qs = Array.from({ length: n }, (_, i) => [i % 5, n - 1 - (i % 3)]); return [nums, qs];",
    "limit": 1500,
    "label": "150,000 doors and 150,000 queries",
    "msg": "Correct on the small cases, but too slow on the big one. Walking each range costs O(n) per query. Build the totals row once."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function rangeSums(nums, queries) {",
    "  const pre = [0];",
    "  for (const x of nums) {",
    "    pre.push(pre[pre.length - 1] + x);",
    "  }",
    "  const out = [];",
    "  for (const [l, r] of queries) {",
    "    out.push(pre[r + 1] - pre[l]);",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "Why does pre have one more slot than nums? What would go wrong for a query that starts at door 0 without it?",
   "view": {
    "row": [
     3,
     1,
     4,
     2
    ],
    "row2": [
     "0",
     "",
     "",
     "",
     ""
    ],
    "rowLabel": "nums",
    "row2Label": "pre",
    "ptrs": [],
    "vars": [
     "l",
     "r"
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
     "say": "Walking every range repeats the same adding. So do the adding once, before any question.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "add once, before any question",
     "arrows": null
    },
    {
     "say": "Keep the total before every door. Then any range is one total minus another.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "range = total − earlier total",
     "arrows": null
    },
    {
     "say": "Line two starts the totals row with a zero. The sum of nothing.",
     "line": 2,
     "ptr": null,
     "hot": [
      "d0"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Lines three to five fill it in. Each slot is the slot before, plus one number. Zero plus three is three.",
     "line": 4,
     "ptr": null,
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": {
      "d1": 3
     },
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Then four. Eight. And ten.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": {
      "d2": 4,
      "d3": 8,
      "d4": 10
     },
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Now the questions. The first one asks for doors one to two.",
     "line": 7,
     "ptr": null,
     "hot": [
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "l": 1,
      "r": 2
     },
     "box": null,
     "card": "sum of doors 1 to 2 ?",
     "arrows": null
    },
    {
     "say": "Line eight takes the total after door two. That is pre at three. Eight.",
     "line": 8,
     "ptr": null,
     "hot": [
      "d3"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "pre[r + 1] = pre[3] = 8",
     "arrows": null
    },
    {
     "say": "Then it removes everything before door one. Pre at one. Three. Eight minus three is five.",
     "line": 8,
     "ptr": null,
     "hot": [
      "d1"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "8 − 3 = 5",
     "arrows": null
    },
    {
     "say": "The next question. Doors zero to three. Which two slots do we need?",
     "line": 7,
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
     "vars": {
      "l": 0,
      "r": 3
     },
     "box": null,
     "card": "pre[?] − pre[?]",
     "arrows": null
    },
    {
     "say": "Pre at four, minus pre at zero. Ten minus zero. Ten.",
     "line": 8,
     "ptr": null,
     "hot": [
      "d4",
      "d0"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "10 − 0 = 10",
     "arrows": null
    },
    {
     "say": "Line ten returns both answers.",
     "line": 10,
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
     "say": "Building the row costs n steps, once. After that, every question is one subtraction.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "build O(n), each answer O(1)",
     "arrows": null
    },
    {
     "say": "The price is one extra row. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "extra row → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "ps4",
   "num": 4,
   "title": "Stretches That Add Up",
   "fn": "countStretches",
   "ask": "Return <b>how many</b> unbroken stretches of doors add up to exactly <b>k</b>. A stretch can be a single door. Numbers can be negative.",
   "spec": "countStretches([1, 2, 1, 3], 3) → 3      (1+2, 2+1, and 3)",
   "start": "// nums is an array of numbers (they can be negative). k is the target sum.\nfunction countStretches(nums, k) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: count every run of neighbours whose sum is k.",
    "Do it by hand on [1, 2, 1, 3] with k = 3. How many did you find?",
    "Trying every start and every end is O(n²). Every stretch is one running total minus an earlier one. How does that help?",
    "At each door, which earlier total would make a stretch ending here add up to k? What can tell you, in one step, how often you have seen it?"
   ],
   "hints": [
    "Keep a running sum. A stretch ending here adds up to k when some earlier total equals sum - k.",
    "Keep a Map from total → how many times it has been seen. Start it with 0 seen once.",
    "At each door: add to sum, add seen.get(sum - k) to the count, then record sum in the map."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       2,
       1,
       3
      ],
      3
     ],
     "want": 3
    },
    {
     "args": [
      [
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
       1,
       2,
       3
      ],
      3
     ],
     "want": 2
    },
    {
     "args": [
      [],
      0
     ],
     "want": 0
    },
    {
     "args": [
      [
       3
      ],
      3
     ],
     "want": 1
    },
    {
     "args": [
      [
       1,
       -1,
       0
      ],
      0
     ],
     "want": 3
    },
    {
     "args": [
      [
       0,
       0
      ],
      0
     ],
     "want": 3
    },
    {
     "args": [
      [
       5
      ],
      1
     ],
     "want": 0
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "const n = 150000; return [Array.from({ length: n }, (_, i) => (i % 3) - 1), 2];",
    "limit": 1500,
    "label": "150,000 doors",
    "msg": "Correct on the small cases, but too slow on the big one. Trying every start and end is O(n²). Look up sum - k in a map of earlier totals."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function countStretches(nums, k) {",
    "  const seen = new Map([[0, 1]]);",
    "  let sum = 0;",
    "  let count = 0;",
    "  for (const x of nums) {",
    "    sum += x;",
    "    count += seen.get(sum - k) || 0;",
    "    seen.set(sum, (seen.get(sum) || 0) + 1);",
    "  }",
    "  return count;",
    "}"
   ],
   "why": "Why does the map start with 0 → 1? Which stretches would be missed without it?",
   "view": {
    "row": [
     1,
     2,
     1,
     3
    ],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [],
    "vars": [
     "sum",
     "count"
    ],
    "box": {
     "title": "seen",
     "rows": 5
    },
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Every stretch is the running total now, minus the running total at some earlier point.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "stretch = total now − earlier total",
     "arrows": null
    },
    {
     "say": "So a stretch ending here adds up to k, when an earlier total equals sum minus k. A map remembers the earlier totals.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "look for sum − k in a map",
     "arrows": null
    },
    {
     "say": "Line two makes the map of totals seen so far. It starts with zero, seen once. That is the total before the first door.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "0 → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Sum and count both start at zero.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 0,
      "count": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door zero. Line six adds it. Sum is one.",
     "line": 6,
     "ptr": null,
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line seven looks for sum minus k. One minus three is minus two. Never seen. Count stays zero.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "need 1 − 3 = −2 → not seen",
     "arrows": null
    },
    {
     "say": "Line eight records the total, one, in the map.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "0 → 1",
      "1 → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Door one. Sum is three. We need three minus three. Zero.",
     "line": 6,
     "ptr": null,
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 3
     },
     "box": null,
     "card": "need 3 − 3 = 0",
     "arrows": null
    },
    {
     "say": "Zero was seen once. So one stretch ends here. Doors zero and one. Count is one.",
     "line": 7,
     "ptr": null,
     "hot": [
      0,
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "count": 1
     },
     "box": [
      "0 → 1",
      "1 → 1"
     ],
     "card": "need 0 → seen once",
     "arrows": null
    },
    {
     "say": "Record the three.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "0 → 1",
      "1 → 1",
      "3 → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Door two. Sum is four. Which earlier total are we looking for?",
     "line": 6,
     "ptr": null,
     "hot": [
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 4
     },
     "box": null,
     "card": "need 4 − 3 = ?",
     "arrows": null
    },
    {
     "say": "One. Seen once. That stretch is doors one and two. Count is two.",
     "line": 7,
     "ptr": null,
     "hot": [
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "count": 2
     },
     "box": [
      "0 → 1",
      "1 → 1",
      "3 → 1",
      "4 → 1"
     ],
     "card": "need 4 − 3 = 1 → seen once",
     "arrows": null
    },
    {
     "say": "Last door. Sum is seven. We need four. Seen once. The door on its own. Count is three.",
     "line": 7,
     "ptr": null,
     "hot": [
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "sum": 7,
      "count": 3
     },
     "box": [
      "0 → 1",
      "1 → 1",
      "3 → 1",
      "4 → 1",
      "7 → 1"
     ],
     "card": "need 7 − 3 = 4 → seen once",
     "arrows": null
    },
    {
     "say": "Line ten returns the count. Three.",
     "line": 10,
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
     "say": "One walk, and each map lookup is one step. O of n time.",
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
     "say": "The map can hold one total per door. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "map of totals → O(n) space",
     "arrows": null
    }
   ]
  }
 ]
};
