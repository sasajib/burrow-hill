window.CHAPTER = {
 "id": "sorting",
 "title": "Sorting",
 "sub": "CHAPTER 12 · SORTING",
 "key": "burrow-ch-sorting",
 "next": {
  "href": "index.html#chapters",
  "label": "All chapters"
 },
 "prev": {
  "href": "chapter.html?c=bsearch",
  "label": "Chapter 11: Binary search"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "sg0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Sort so the rest is easy",
   "intro": "Why sorting matters in interviews, in twenty seconds."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "sgt1",
   "label": "Theory",
   "short": "T1",
   "name": "What a sort costs, and when to pay",
   "intro": "Merge sort in one picture, the n log n price, and the JavaScript sort trap. One guess."
  }
 ],
 "notes": {
  "t1": "<h3>Key ideas</h3><ul><li><b>Sorting is usually a first step</b>, done so that the rest of the problem becomes easy (neighbours, two pointers, binary search).</li>\n      <li><b>Merge sort:</b> split in half, sort each half the same way (recursion), merge the two sorted halves with two markers.</li>\n      <li><b>A good sort costs O(n log n):</b> about log n levels of halving, and each level handles n numbers.</li>\n      <li><b>JavaScript trap:</b> <code>[10, 9, 1].sort()</code> gives <code>[1, 10, 9]</code>, because the default compares as text. For numbers: <code>.sort((a, b) =&gt; a - b)</code>.</li>\n      <li><b>When to reach for it:</b> ask \"would this be easy if it were sorted?\"</li></ul>"
 },
 "quiz": {
  "sgt1-q1": {
   "ask": "In JavaScript, what does [10, 9, 1].sort() give?",
   "opts": [
    "[1, 10, 9]",
    "[1, 9, 10]",
    "[10, 9, 1]"
   ],
   "right": 0,
   "why": "With no compare function, sort compares the values as text: \"1\" comes before \"10\", which comes before \"9\". For numbers, pass (a, b) => a - b."
  },
  "sg1s-q": {
   "ask": "The fronts of the two halves are 2 and 8. Which is pushed onto out?",
   "opts": [
    "2, from the left half",
    "8, from the right half",
    "Both"
   ],
   "right": 0,
   "why": "left[i] <= right[j], so line 10 pushes 2 and moves i."
  },
  "sg2s-q": {
   "ask": "best is 4. The next gap is 8 − 5. What is best after line 5?",
   "opts": [
    "3",
    "4",
    "8"
   ],
   "right": 0,
   "why": "8 − 5 = 3, and 3 is smaller than 4."
  },
  "sg3s-q": {
   "ask": "Comparing positions a = 0 (height 30) and b = 1 (height 12): heights[b] − heights[a] = −18. Which position goes first?",
   "opts": [
    "Position 0, the taller one",
    "Position 1",
    "They swap"
   ],
   "right": 0,
   "why": "A negative result means a stays in front of b. Position 0 (Pip, 30) is taller, so it goes first."
  }
 },
 "problems": [
  {
   "id": "sg1",
   "num": 1,
   "title": "Split, Sort, Merge",
   "fn": "mergeSort",
   "ask": "Return a <b>new array</b> with the numbers sorted, smallest first. Write the sort yourself (merge sort): the built-in sort is not allowed here.",
   "spec": "mergeSort([5, 2, 8, 1]) → [1, 2, 5, 8]",
   "start": "// nums is an array of numbers. Do not use the built-in sort.\nfunction mergeSort(nums) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the same numbers, in order.",
    "A row of one number is already sorted. That is your base case. What is the step?",
    "If both halves of the row were already sorted, how would you combine them? You have done it before.",
    "So the function calls itself on which two smaller rows?"
   ],
   "hints": [
    "Base case: a row of 0 or 1 numbers is returned as it is.",
    "Split at the middle with slice, and call mergeSort on each half. Trust that they come back sorted.",
    "Merge the two sorted halves with two markers: push the smaller front each time, then whatever is left."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       5,
       2,
       8,
       1
      ]
     ],
     "want": [
      1,
      2,
      5,
      8
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
       7
      ]
     ],
     "want": [
      7
     ]
    },
    {
     "args": [
      [
       2,
       1
      ]
     ],
     "want": [
      1,
      2
     ]
    },
    {
     "args": [
      [
       3,
       3,
       1,
       2
      ]
     ],
     "want": [
      1,
      2,
      3,
      3
     ]
    },
    {
     "args": [
      [
       10,
       9,
       1
      ]
     ],
     "want": [
      1,
      9,
      10
     ]
    },
    {
     "args": [
      [
       -1,
       5,
       -3,
       0
      ]
     ],
     "want": [
      -3,
      -1,
      0,
      5
     ]
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*(sort|toSorted)\\s*\\(",
     "msg": "Not this once: write the split and the merge yourself."
    }
   ],
   "big": {
    "gen": "return [Array.from({ length: 150000 }, (_, i) => (i * 7919) % 100003)];",
    "limit": 1500,
    "label": "150,000 numbers",
    "msg": "Correct on the small cases, but too slow on the big one. A sort that compares every pair is O(n²). Split in half, sort each half, merge."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function mergeSort(nums) {",
    "  if (nums.length <= 1) return nums;",
    "  const mid = Math.floor(nums.length / 2);",
    "  const left = mergeSort(nums.slice(0, mid));",
    "  const right = mergeSort(nums.slice(mid));",
    "  const out = [];",
    "  let i = 0;",
    "  let j = 0;",
    "  while (i < left.length && j < right.length) {",
    "    if (left[i] <= right[j]) out.push(left[i++]);",
    "    else out.push(right[j++]);",
    "  }",
    "  return [...out, ...left.slice(i), ...right.slice(j)];",
    "}"
   ],
   "why": "Lines 4 and 5 call mergeSort and simply trust the result. What makes that trust safe?",
   "view": {
    "row": [
     5,
     2,
     8,
     1
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
     },
     {
      "id": "j",
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
     "say": "Two sorted halves can be merged in one pass, with two markers. You have done that.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "two sorted halves merge in one pass",
     "arrows": null
    },
    {
     "say": "And each half gets sorted by the very same function. That is recursion. Trust it.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "sort each half the same way",
     "arrows": null
    },
    {
     "say": "Line two is the base case. A row of one number is already sorted.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "length ≤ 1 → already sorted",
     "arrows": null
    },
    {
     "say": "Line three finds the middle. The row splits into five, two. And eight, one.",
     "line": 3,
     "ptr": null,
     "hot": [
      0,
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "split: [5, 2] and [8, 1]",
     "arrows": null
    },
    {
     "say": "Lines four and five sort each half, by calling merge sort on it. Trust the result. Two, five. And one, eight.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      2,
      3
     ],
     "bad": [],
     "set": {
      "0": 2,
      "1": 5,
      "2": 1,
      "3": 8
     },
     "vars": null,
     "box": null,
     "card": "left = [2, 5] · right = [1, 8]",
     "arrows": null
    },
    {
     "say": "Now merge. A marker at the front of each half. Two against one. One is smaller, so it goes out first.",
     "line": 11,
     "ptr": {
      "i": 0,
      "j": 2
     },
     "hot": [
      0,
      2
     ],
     "ok": [],
     "bad": [],
     "set": {
      "d0": 1
     },
     "vars": null,
     "box": null,
     "card": "2 against 1 → take 1",
     "arrows": null
    },
    {
     "say": "J moves on. Two against eight. Which one goes out?",
     "line": 10,
     "ptr": {
      "j": 3
     },
     "hot": [
      0,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "2 against 8 → ?",
     "arrows": null
    },
    {
     "say": "Two. Then five against eight. Five.",
     "line": 10,
     "ptr": {
      "i": 1
     },
     "hot": [
      1,
      3
     ],
     "ok": [],
     "bad": [],
     "set": {
      "d1": 2,
      "d2": 5
     },
     "vars": null,
     "box": null,
     "card": "5 against 8 → take 5",
     "arrows": null
    },
    {
     "say": "The left half is used up. Line thirteen adds whatever is left of the other half. Eight.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [
      "d0",
      "d1",
      "d2",
      "d3"
     ],
     "bad": [],
     "set": {
      "d3": 8
     },
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The row is halved about log n times, and each level merges n numbers. O of n log n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "log n levels × n → O(n log n)",
     "arrows": null
    },
    {
     "say": "The halves and the merged rows are new arrays. O of n extra space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "new rows → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "sg2",
   "num": 2,
   "title": "The Closest Two",
   "fn": "closestGap",
   "ask": "Return the <b>smallest difference</b> between any two numbers in the array. The array has at least two numbers.",
   "spec": "closestGap([8, 1, 13, 5]) → 3      (8 − 5)",
   "start": "// nums has at least two numbers, in no particular order.\nfunction closestGap(nums) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the two numbers that are nearest to each other, and how far apart they are.",
    "Comparing every pair is O(n²). Ask the sorting question: would this be easy if the row were sorted?",
    "In a sorted row, where do the two closest numbers stand?",
    "In JavaScript, how do you sort numbers correctly?"
   ],
   "hints": [
    "Sort a copy of the row: [...nums].sort((a, b) => a - b).",
    "In a sorted row the closest pair are neighbours.",
    "Walk once, comparing each number with the one before it, and keep the smallest gap."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       8,
       1,
       13,
       5
      ]
     ],
     "want": 3
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
       5,
       5
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       10,
       9,
       1
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       100,
       4,
       60,
       20
      ]
     ],
     "want": 16
    },
    {
     "args": [
      [
       -5,
       3,
       -4
      ]
     ],
     "want": 1
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "return [Array.from({ length: 100000 }, (_, i) => (i * 7919) % 1000003 * 3)];",
    "limit": 1500,
    "label": "100,000 numbers",
    "msg": "Correct on the small cases, but too slow on the big one. Comparing every pair is O(n²). Sort first: the closest pair become neighbours."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function closestGap(nums) {",
    "  const sorted = [...nums].sort((a, b) => a - b);",
    "  let best = Infinity;",
    "  for (let i = 1; i < sorted.length; i++) {",
    "    best = Math.min(best, sorted[i] - sorted[i - 1]);",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "What would [10, 9, 1] give if line 2 used a plain .sort() with no compare function?",
   "view": {
    "row": [
     8,
     1,
     13,
     5
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
     "say": "In a jumbled row the closest two could be anywhere. In a sorted row they must be standing next to each other.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "sorted → the closest are neighbours",
     "arrows": null
    },
    {
     "say": "So sort first, then one walk over the neighbours is enough.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "sort, then one walk",
     "arrows": null
    },
    {
     "say": "Line two sorts a copy of the row. With a compare function, a minus b, so that numbers are compared as numbers.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      2,
      3
     ],
     "bad": [],
     "set": {
      "0": 1,
      "1": 5,
      "2": 8,
      "3": 13
     },
     "vars": null,
     "box": null,
     "card": "sort((a, b) => a − b)",
     "arrows": null
    },
    {
     "say": "Best starts at infinity, so that any real gap beats it.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "best": "∞"
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The walk starts at door one. Five minus one is four. Best is four.",
     "line": 5,
     "ptr": {
      "i": 1
     },
     "hot": [
      0,
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "best": 4
     },
     "box": null,
     "card": "5 − 1 = 4",
     "arrows": null
    },
    {
     "say": "Door two. Eight minus five. What is best now?",
     "line": 5,
     "ptr": {
      "i": 2
     },
     "hot": [
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "8 − 5 = ?",
     "arrows": null
    },
    {
     "say": "Three. A new best.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "best": 3
     },
     "box": null,
     "card": "8 − 5 = 3",
     "arrows": null
    },
    {
     "say": "Door three. Thirteen minus eight is five. Not better.",
     "line": 5,
     "ptr": {
      "i": 3
     },
     "hot": [
      2,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "13 − 8 = 5",
     "arrows": null
    },
    {
     "say": "Line seven returns the best. Three.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      2
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The sort costs n log n. The walk after it is only n. So the sort is the whole price. O of n log n.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "sort n log n + walk n → O(n log n)",
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
     "vars": null,
     "box": null,
     "card": "a sorted copy → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "sg3",
   "num": 3,
   "title": "Tallest First",
   "fn": "byHeight",
   "ask": "names[i] is a person and heights[i] is that person's height (all heights are different). Return the <b>names</b>, ordered from <b>tallest to shortest</b>.",
   "spec": "byHeight([\"Pip\", \"Moss\", \"Hazel\"], [30, 12, 25]) → [\"Pip\", \"Hazel\", \"Moss\"]",
   "start": "// names and heights have the same length. All heights are different.\nfunction byHeight(names, heights) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the names, in order of their heights, biggest first.",
    "The thing you must return (names) is not the thing you sort by (heights). How can a name stay attached to its height?",
    "A compare function decides the order. What should it return to put the taller one first?",
    "After sorting, how do you turn the result back into a list of names?"
   ],
   "hints": [
    "Sort the positions 0, 1, 2, ... instead of the names: make an array of indexes.",
    "Sort those indexes with a compare function that looks up the heights: (a, b) => heights[b] - heights[a] puts the taller first.",
    "Then map each index back to its name."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       "Pip",
       "Moss",
       "Hazel"
      ],
      [
       30,
       12,
       25
      ]
     ],
     "want": [
      "Pip",
      "Hazel",
      "Moss"
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
       "Tock"
      ],
      [
       9
      ]
     ],
     "want": [
      "Tock"
     ]
    },
    {
     "args": [
      [
       "a",
       "b"
      ],
      [
       1,
       2
      ]
     ],
     "want": [
      "b",
      "a"
     ]
    },
    {
     "args": [
      [
       "a",
       "b",
       "c",
       "d"
      ],
      [
       10,
       9,
       100,
       1
      ]
     ],
     "want": [
      "c",
      "a",
      "b",
      "d"
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function byHeight(names, heights) {",
    "  const order = names.map((_, i) => i);",
    "  order.sort((a, b) => heights[b] - heights[a]);",
    "  return order.map((i) => names[i]);",
    "}"
   ],
   "why": "Why heights[b] − heights[a] and not heights[a] − heights[b]?",
   "view": {
    "row": [
     "Pip",
     "Moss",
     "Hazel"
    ],
    "row2": [
     30,
     12,
     25
    ],
    "rowLabel": "names",
    "row2Label": "cm",
    "ptrs": [],
    "vars": [],
    "box": {
     "title": "order",
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
     "say": "The names and the heights are tied together by position. So sort the positions, and both rows stay connected.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "sort the positions, not the names",
     "arrows": null
    },
    {
     "say": "A compare function tells the sort which of two positions goes first. Here, the one with the bigger height.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "the rule: bigger height first",
     "arrows": null
    },
    {
     "say": "Line two makes a list of positions. Zero, one, two.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "0, 1, 2"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line three sorts them. The compare function takes two positions, a and b, and looks up their heights.",
     "line": 3,
     "ptr": null,
     "hot": [
      "d0",
      "d1",
      "d2"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "heights[b] − heights[a]",
     "arrows": null
    },
    {
     "say": "When that is positive, b is taller, and b goes first. For positions zero and one: twelve minus thirty. Is that positive?",
     "line": 3,
     "ptr": null,
     "hot": [
      "d0",
      "d1"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "12 − 30 = ? → who goes first",
     "arrows": null
    },
    {
     "say": "No. It is negative. So position zero stays in front. The taller one.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [
      "d0"
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "negative → a stays first",
     "arrows": null
    },
    {
     "say": "The sort does that for every pair it needs. The order becomes zero, two, one. Thirty, twenty five, twelve.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [
      "d0",
      "d2",
      "d1"
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "0, 2, 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line four turns each position back into a name. Pip, Hazel, Moss.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      2,
      1
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The sort is the whole price. O of n log n.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "one sort → O(n log n)",
     "arrows": null
    },
    {
     "say": "The list of positions. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "the positions → O(n) space",
     "arrows": null
    }
   ]
  }
 ]
};
