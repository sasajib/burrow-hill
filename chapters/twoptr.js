window.CHAPTER = {
 "id": "twoptr",
 "title": "Two Pointers",
 "sub": "CHAPTER 5 · TWO POINTERS",
 "key": "burrow-ch-twoptr",
 "next": {
  "href": "chapter.html?c=window",
  "label": "Chapter 6: Sliding window"
 },
 "prev": {
  "href": "chapter.html?c=prefix",
  "label": "Chapter 4: Prefix sums"
 },
 "mock": false,
 "target": null,
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "tp0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Two markers, one row",
   "intro": "What two pointers are, and the one word that tells you when they work."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "tpt1",
   "label": "Theory 1",
   "short": "T1",
   "name": "Two ends, walking in",
   "intro": "Finding a pair in a sorted row, and why each move is safe. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "tpt2",
   "label": "Theory 2",
   "short": "T2",
   "name": "The reader and the writer",
   "intro": "Changing an array in place with two walkers going the same way. One guess."
  }
 ],
 "notes": {
  "t1": "<h3>Key ideas</h3><ul><li><b>Sorted order tells you which way to move.</b> Sum too big: move the right marker left. Too small: move the left marker right.</li>\n      <li><b>Each move is safe because it throws one door away for good.</b> If the biggest number is too big even with the smallest partner, it cannot be in any answer.</li>\n      <li><b>n doors, at most n moves: O(n) time, O(1) space.</b> Trying every pair is O(n²).</li>\n      <li><b>When to reach for it:</b> sorted input, and the question is about a pair (or a triple: fix one, sweep the rest).</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>The reader visits every door. The writer marks where the next kept item goes.</b></li>\n      <li><b>Nothing is deleted</b>, so nothing shifts. Kept items are written over the front of the same array.</li>\n      <li><b>When the reader finishes, everything before the writer is the answer</b>, and the writer's index is how many items were kept.</li>\n      <li><b>When to reach for it:</b> \"in place\", \"remove\", \"move to the end\", \"keep only\".</li></ul>"
 },
 "quiz": {
  "tpt1-q1": {
   "ask": "The row is 1, 3, 4, 6, 9 and the target is 9. Pip is on 1, Moss is on 6. The sum is 7, too small. Who moves?",
   "opts": [
    "Pip, one step right",
    "Moss, one step left",
    "Both"
   ],
   "right": 0,
   "why": "To make the sum bigger, move the left marker to a bigger number. 1 was too small even with the biggest partner left, so it is out."
  },
  "tpt2-q1": {
   "ask": "The row started as 1, 1, 2, 2, 2, 3. So far 1 was written at index 0 and 2 at index 1. Where is 3 written?",
   "opts": [
    "Index 2",
    "Index 5",
    "Index 3"
   ],
   "right": 0,
   "why": "The writer stands on index 2, right after the 2. That is where the next new number goes."
  },
  "tp1s-q": {
   "ask": "left is on 1, right is on 6, and the sum 7 is too small. Which marker moves?",
   "opts": [
    "left moves right, to a bigger number",
    "right moves left, to a smaller number"
   ],
   "right": 0,
   "why": "Only a bigger left number can make the sum bigger."
  },
  "tp2s-q": {
   "ask": "left is on −1 and right is on 3. Which square is written into the slot?",
   "opts": [
    "1",
    "9",
    "−9"
   ],
   "right": 1,
   "why": "3 is further from zero than −1, so 3 × 3 = 9 goes in, and right moves inward."
  },
  "tp3s-q": {
   "ask": "read is on door 3, which holds 1. write is on door 1. What do lines 5 to 7 do?",
   "opts": [
    "Swap the 1 with door 1",
    "Swap the 1 with door 0",
    "Nothing, it is skipped"
   ],
   "right": 0,
   "why": "A non-zero number is swapped into the write position, which is door 1."
  },
  "tp4s-q": {
   "ask": "left is on a wall of 5, right is on a wall of 3. Which marker moves inward?",
   "opts": [
    "left, on the 5",
    "right, on the 3"
   ],
   "right": 1,
   "why": "The lower wall is the limit. Keeping it while the tank gets narrower can only hold less."
  },
  "tp5s-q": {
   "ask": "a[i] is 4 and b[j] is 9. What does the loop do?",
   "opts": [
    "4 goes out, i moves",
    "9 goes out, j moves",
    "Both go out"
   ],
   "right": 0,
   "why": "4 is smaller, so line 6 pushes it and moves i."
  },
  "tp6s-q": {
   "ask": "The sum is 14 and the target is 15. Which marker moves?",
   "opts": [
    "left moves right",
    "right moves left",
    "i moves on"
   ],
   "right": 0,
   "why": "Too small, so the left marker moves to a bigger number."
  }
 },
 "problems": [
  {
   "id": "tp1",
   "num": 1,
   "title": "The Pair in Order",
   "fn": "pairSorted",
   "ask": "The numbers are sorted, smallest first. Return the <b>indexes</b> of two different doors that add up to <b>target</b>, as <b>[left, right]</b>. If no pair does, return <b>[-1, -1]</b>. Use no extra memory.",
   "spec": "pairSorted([1, 3, 4, 6, 9], 9) → [1, 3]      (3 + 6)",
   "start": "// nums is sorted, smallest first. target is a number.\nfunction pairSorted(nums, target) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: two doors whose numbers add up to the target.",
    "Do it by hand on [1, 3, 4, 6, 9] with target 9. Start with the two ends: 1 + 9. Too big or too small?",
    "If the sum is too big, which end can you safely give up? Why can that number never be in the answer?",
    "When do you stop without an answer?"
   ],
   "hints": [
    "Put one marker on the first door and one on the last.",
    "Add the two numbers. If the sum is the target, return the two indexes.",
    "If the sum is too small, move the left marker right. If it is too big, move the right marker left. Stop when they meet."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       3,
       4,
       6,
       9
      ],
      9
     ],
     "want": [
      1,
      3
     ]
    },
    {
     "args": [
      [
       1,
       2
      ],
      3
     ],
     "want": [
      0,
      1
     ]
    },
    {
     "args": [
      [
       1,
       2
      ],
      5
     ],
     "want": [
      -1,
      -1
     ]
    },
    {
     "args": [
      [],
      1
     ],
     "want": [
      -1,
      -1
     ]
    },
    {
     "args": [
      [
       2,
       7,
       11,
       15
      ],
      9
     ],
     "want": [
      0,
      1
     ]
    },
    {
     "args": [
      [
       1,
       2,
       3,
       4,
       5,
       6
      ],
      11
     ],
     "want": [
      4,
      5
     ]
    },
    {
     "args": [
      [
       -3,
       -1,
       0,
       2
      ],
      -1
     ],
     "want": [
      0,
      3
     ]
    }
   ],
   "check": "const nums = args[0], t = args[1]; if (!Array.isArray(got) || got.length !== 2) return 'Return an array of two indexes.'; if (want[0] === -1) return got[0] === -1 && got[1] === -1 ? '' : 'No two doors add up to the target here, so return [-1, -1].'; const i = got[0], j = got[1]; return i !== j && nums[i] + nums[j] === t ? '' : 'Those two doors do not add up to the target.';",
   "forbid": [],
   "big": {
    "gen": "const n = 200000; return [Array.from({ length: n }, (_, i) => i * 2), 4 * n + 1];",
    "limit": 1500,
    "label": "200,000 doors, no pair",
    "msg": "Correct on the small cases, but too slow on the big one. Trying every pair is O(n²). Let the sorted order tell you which marker to move."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function pairSorted(nums, target) {",
    "  let left = 0;",
    "  let right = nums.length - 1;",
    "  while (left < right) {",
    "    const sum = nums[left] + nums[right];",
    "    if (sum === target) return [left, right];",
    "    if (sum < target) left++;",
    "    else right--;",
    "  }",
    "  return [-1, -1];",
    "}"
   ],
   "why": "When the sum is too big, why is it safe to move right and never look at that door again?",
   "topic": null,
   "world": "A shop app finds two items that use up a voucher exactly, by walking a price list from both ends.",
   "view": {
    "row": [
     1,
     3,
     4,
     6,
     9
    ],
    "tree": null,
    "grid": null,
    "graph": null,
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
     "say": "The row is sorted. So the smallest number is on the left, and the biggest is on the right.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "sorted: smallest left, biggest right",
     "arrows": null
    },
    {
     "say": "Add the two ends. If the sum is too big, give up the biggest. If it is too small, give up the smallest.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "each sum tells you who must move",
     "arrows": null
    },
    {
     "say": "Lines two and three place Pip on the first door, and Moss on the last.",
     "line": 3,
     "ptr": {
      "left": 0,
      "right": 4
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line five adds the two doors. One plus nine is ten.",
     "line": 5,
     "ptr": null,
     "hot": [
      0,
      4
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "sum": 10
     },
     "box": null,
     "card": "1 + 9 = 10",
     "arrows": null
    },
    {
     "say": "Ten is more than nine. Too big. Line eight moves Moss one step left.",
     "line": 8,
     "ptr": {
      "right": 3
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "too big → right moves in",
     "arrows": null
    },
    {
     "say": "One plus six is seven.",
     "line": 5,
     "ptr": null,
     "hot": [
      0,
      3
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "sum": 7
     },
     "box": null,
     "card": "1 + 6 = 7",
     "arrows": null
    },
    {
     "say": "Seven is less than nine. Too small. Who moves?",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "too small → who moves?",
     "arrows": null
    },
    {
     "say": "Pip. Moving the left marker forward is the only way to make the sum bigger.",
     "line": 7,
     "ptr": {
      "left": 1
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Three plus six is nine.",
     "line": 5,
     "ptr": null,
     "hot": [
      1,
      3
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "sum": 9
     },
     "box": null,
     "card": "3 + 6 = 9",
     "arrows": null
    },
    {
     "say": "That is the target. Line six returns both indexes.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      3
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Every step moves one walker inward, so there are at most n steps. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "n steps at most → O(n) time",
     "arrows": null
    },
    {
     "say": "No map, and no extra row. O of one space. That is what sorted order buys you.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "sorted → O(1) space",
     "arrows": null
    },
    {
     "say": "A shop app finds two items that use up a voucher exactly, by walking a price list from both ends.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "two prices that use up a voucher",
     "arrows": null
    }
   ]
  },
  {
   "id": "tp2",
   "num": 2,
   "title": "Squares in Order",
   "fn": "sortedSquares",
   "ask": "The numbers are sorted, and some are negative. Return a new array of their <b>squares</b>, also sorted, without calling sort.",
   "spec": "sortedSquares([-4, -1, 0, 3, 5]) → [0, 1, 9, 16, 25]",
   "start": "// nums is sorted, smallest first. Some numbers can be negative.\nfunction sortedSquares(nums) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: square everything, and hand it back in order.",
    "Square [-4, -1, 0, 3, 5] by hand. Where did the biggest square come from? And the next biggest?",
    "The biggest square is always at one of two places. Which two?",
    "If you find the biggest first, which end of the answer should you fill first?"
   ],
   "hints": [
    "The biggest square comes from the left end or the right end, whichever is further from zero.",
    "Keep a marker on each end, and fill the answer from the last slot backwards.",
    "Compare Math.abs of the two ends. Write the bigger square into the current slot, and move that marker inward."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       -4,
       -1,
       0,
       3,
       5
      ]
     ],
     "want": [
      0,
      1,
      9,
      16,
      25
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
       2,
       3
      ]
     ],
     "want": [
      1,
      4,
      9
     ]
    },
    {
     "args": [
      [
       -3,
       -2,
       -1
      ]
     ],
     "want": [
      1,
      4,
      9
     ]
    },
    {
     "args": [
      [
       -2,
       -2,
       2
      ]
     ],
     "want": [
      4,
      4,
      4
     ]
    },
    {
     "args": [
      [
       0
      ]
     ],
     "want": [
      0
     ]
    },
    {
     "args": [
      [
       -7,
       -3,
       2,
       3,
       11
      ]
     ],
     "want": [
      4,
      9,
      9,
      49,
      121
     ]
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*sort\\s*\\(",
     "msg": "Sorting works, but costs O(n log n) and skips the idea. The input is already in order: use that."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function sortedSquares(nums) {",
    "  const out = new Array(nums.length);",
    "  let left = 0;",
    "  let right = nums.length - 1;",
    "  for (let k = nums.length - 1; k >= 0; k--) {",
    "    if (Math.abs(nums[left]) > Math.abs(nums[right])) {",
    "      out[k] = nums[left] * nums[left];",
    "      left++;",
    "    } else {",
    "      out[k] = nums[right] * nums[right];",
    "      right--;",
    "    }",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "Why is the answer filled from the back and not from the front?",
   "topic": null,
   "world": "Ranking things by how far they are from a point, on either side, uses the same walk from both ends.",
   "view": {
    "row": [
     -4,
     -1,
     0,
     3,
     5
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     "",
     "",
     "",
     "",
     ""
    ],
    "rowLabel": "nums",
    "row2Label": "out",
    "ptrs": [
     {
      "id": "left",
      "row": 1
     },
     {
      "id": "right",
      "row": 1
     },
     {
      "id": "k",
      "row": 2
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
     "say": "Squaring a negative number makes it positive. So the biggest squares hide at the two ends of the row.",
     "line": 0,
     "ptr": null,
     "hot": [
      0,
      4
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "biggest squares are at the two ends",
     "arrows": null
    },
    {
     "say": "Compare the two ends, take the bigger square, and fill the answer from the back.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "bigger end first, fill from the back",
     "arrows": null
    },
    {
     "say": "Pip stands on the left end. Moss on the right end.",
     "line": 4,
     "ptr": {
      "left": 0,
      "right": 4
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "K points at the last slot of the answer. We fill from the back, biggest first.",
     "line": 5,
     "ptr": {
      "k": 4
     },
     "hot": [
      "d4"
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line six compares the sizes, ignoring the sign. Four against five. Five is bigger.",
     "line": 6,
     "ptr": null,
     "hot": [
      0,
      4
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "size 4 against size 5",
     "arrows": null
    },
    {
     "say": "So line ten writes five squared. Twenty five. And Moss steps in.",
     "line": 10,
     "ptr": {
      "right": 3
     },
     "hot": [],
     "ok": [
      "d4"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d4": 25
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The next slot. Four against three. This time the left end wins.",
     "line": 6,
     "ptr": {
      "k": 3
     },
     "hot": [
      0,
      3
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "size 4 against size 3",
     "arrows": null
    },
    {
     "say": "Minus four squared is sixteen. Pip steps in.",
     "line": 7,
     "ptr": {
      "left": 1
     },
     "hot": [],
     "ok": [
      "d3"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d3": 16
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The next slot. Minus one against three. Which square goes in?",
     "line": 6,
     "ptr": {
      "k": 2
     },
     "hot": [
      1,
      3
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "size 1 against size 3",
     "arrows": null
    },
    {
     "say": "Nine. Three is the bigger size.",
     "line": 10,
     "ptr": {
      "right": 2
     },
     "hot": [],
     "ok": [
      "d2"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d2": 9
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Then minus one against zero. One goes in. And the last slot gets zero.",
     "line": 7,
     "ptr": {
      "k": 0,
      "left": 2
     },
     "hot": [],
     "ok": [
      "d1",
      "d0"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d1": 1,
      "d0": 0
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line fourteen returns the answer row, already in order.",
     "line": 14,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Each slot is filled once. O of n time. No sorting needed.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "n slots, one pass → O(n) time",
     "arrows": null
    },
    {
     "say": "The answer row is the only extra space. O of n.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "answer row → O(n) space",
     "arrows": null
    },
    {
     "say": "Ranking things by how far they are from a point, on either side, uses the same walk from both ends.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "ranking by distance from a point",
     "arrows": null
    }
   ]
  },
  {
   "id": "tp3",
   "num": 3,
   "title": "Zeros to the Back",
   "fn": "moveZeros",
   "ask": "Move every <b>0</b> to the end of the array, keeping the other numbers in their original order. Change the array <b>in place</b>; do not build a second one.",
   "spec": "moveZeros([0, 3, 0, 1, 2])  →  the array becomes [3, 1, 2, 0, 0]",
   "start": "// Change nums itself. Nothing needs to be returned.\nfunction moveZeros(nums) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: real numbers at the front in the same order, zeros at the back.",
    "Do it by hand on [0, 3, 0, 1, 2]. Where does the 3 end up? The 1?",
    "You need to know two things as you walk: which door you are reading, and where the next real number belongs.",
    "What happens to the number that was sitting where you write?"
   ],
   "hints": [
    "Use two markers that both start at 0: read walks every door, write marks where the next non-zero number goes.",
    "When nums[read] is not 0, swap nums[read] with nums[write], then move write forward.",
    "When nums[read] is 0, do nothing. The loop moves read on."
   ],
   "mode": "inplace",
   "tests": [
    {
     "args": [
      [
       0,
       3,
       0,
       1,
       2
      ]
     ],
     "want": [
      3,
      1,
      2,
      0,
      0
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
       0
      ]
     ],
     "want": [
      0
     ]
    },
    {
     "args": [
      [
       1,
       2,
       3
      ]
     ],
     "want": [
      1,
      2,
      3
     ]
    },
    {
     "args": [
      [
       0,
       0,
       1
      ]
     ],
     "want": [
      1,
      0,
      0
     ]
    },
    {
     "args": [
      [
       4,
       0,
       5,
       0,
       0,
       6
      ]
     ],
     "want": [
      4,
      5,
      6,
      0,
      0,
      0
     ]
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*filter\\s*\\(",
     "msg": "filter builds a new array. Move the numbers inside the one you were given."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function moveZeros(nums) {",
    "  let write = 0;",
    "  for (let read = 0; read < nums.length; read++) {",
    "    if (nums[read] !== 0) {",
    "      const keep = nums[read];",
    "      nums[read] = nums[write];",
    "      nums[write] = keep;",
    "      write++;",
    "    }",
    "  }",
    "}"
   ],
   "why": "Why does the order of the non-zero numbers stay the same?",
   "topic": null,
   "world": "Deleting photos works like this. The ones you keep slide forward in order, and the free space collects at the end.",
   "view": {
    "row": [
     0,
     3,
     0,
     1,
     2
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "write",
      "row": 1
     },
     {
      "id": "read",
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
     "say": "Two walkers, moving the same way. A fast reader, and a slow writer.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a fast reader, a slow writer",
     "arrows": null
    },
    {
     "say": "The reader finds the real numbers. The writer marks where the next one belongs.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "writer = where the next number goes",
     "arrows": null
    },
    {
     "say": "Line two. Moss marks the write position: the next door that should hold a real number.",
     "line": 2,
     "ptr": {
      "write": 0
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Pip is the reader, and walks every door. Door zero holds a zero. Line four says skip it.",
     "line": 4,
     "ptr": {
      "read": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door one holds three. Not a zero.",
     "line": 4,
     "ptr": {
      "read": 1
     },
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "3 is not 0 → keep it",
     "arrows": null
    },
    {
     "say": "Lines five to seven swap it with the door Moss is on. Three goes to the front.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": [
      0,
      1
     ],
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line eight moves the write position forward.",
     "line": 8,
     "ptr": {
      "write": 1
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door two. A zero. Skip.",
     "line": 4,
     "ptr": {
      "read": 2
     },
     "hot": [
      2
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door three holds one. Moss is on door one. What happens?",
     "line": 4,
     "ptr": {
      "read": 3
     },
     "hot": [
      3
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 is not 0 → ?",
     "arrows": null
    },
    {
     "say": "The one swaps into door one, and Moss steps forward.",
     "line": 7,
     "ptr": {
      "write": 2
     },
     "hot": [],
     "ok": [
      1
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": [
      1,
      3
     ],
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The last door. Two. It swaps into door two.",
     "line": 7,
     "ptr": {
      "read": 4,
      "write": 3
     },
     "hot": [],
     "ok": [
      2
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": [
      2,
      4
     ],
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The loop ends. Every real number is at the front, in the same order. The zeros are at the back.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The reader visits each door once. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 pass → O(n) time",
     "arrows": null
    },
    {
     "say": "Everything happens inside the same array. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "in place → O(1) space",
     "arrows": null
    },
    {
     "say": "Deleting photos works like this. The ones you keep slide forward in order, and the free space collects at the end.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "closing the gaps after deleting",
     "arrows": null
    }
   ]
  },
  {
   "id": "tp4",
   "num": 4,
   "title": "The Widest Tank",
   "fn": "maxWater",
   "ask": "Each number is the height of a wall. Pick two walls: the water between them is <b>width × the lower wall</b>, where width is the distance between their indexes. Return the <b>most water</b> any two walls can hold. If there are fewer than two walls, return <b>0</b>.",
   "spec": "maxWater([1, 5, 2, 4, 3]) → 9      (walls 5 and 3, three apart: 3 × 3)",
   "start": "// heights is an array of wall heights.\nfunction maxWater(heights) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the best width times lower wall, over every pair of walls.",
    "Work out the two end walls of [1, 5, 2, 4, 3] by hand. Width 4, lower wall 1.",
    "Now you must move one end inward, which makes the tank narrower. Which wall is worth giving up?",
    "Could keeping the lower wall ever give a bigger tank than you already have?"
   ],
   "hints": [
    "Start with a marker on each end: the widest tank there is.",
    "Work out width × the lower of the two walls, and remember the best so far.",
    "Then move the marker on the lower wall inward. Stop when the markers meet."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       5,
       2,
       4,
       3
      ]
     ],
     "want": 9
    },
    {
     "args": [
      [
       1,
       1
      ]
     ],
     "want": 1
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
     "want": 0
    },
    {
     "args": [
      [
       1,
       8,
       6,
       2,
       5,
       4,
       8,
       3,
       7
      ]
     ],
     "want": 49
    },
    {
     "args": [
      [
       4,
       3,
       2,
       1,
       4
      ]
     ],
     "want": 16
    },
    {
     "args": [
      [
       1,
       2,
       1
      ]
     ],
     "want": 2
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "return [Array.from({ length: 120000 }, (_, i) => (i * 37) % 1000)];",
    "limit": 1500,
    "label": "120,000 walls",
    "msg": "Correct on the small cases, but too slow on the big one. Trying every pair of walls is O(n²). Start wide and move the lower wall."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function maxWater(heights) {",
    "  let left = 0;",
    "  let right = heights.length - 1;",
    "  let best = 0;",
    "  while (left < right) {",
    "    const width = right - left;",
    "    const low = Math.min(heights[left], heights[right]);",
    "    best = Math.max(best, width * low);",
    "    if (heights[left] < heights[right]) left++;",
    "    else right--;",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "Why is it safe to move the lower wall? What is the most a tank using that wall could ever hold?",
   "topic": null,
   "world": "It is a puzzle, but the habit is real. Start with the widest choice, then give up whichever side limits you.",
   "view": {
    "row": [
     1,
     5,
     2,
     4,
     3
    ],
    "tree": null,
    "grid": null,
    "graph": null,
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
     "say": "Water between two walls rises only as high as the lower wall. So the amount is the width, times the lower wall.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "water = width × lower wall",
     "arrows": null
    },
    {
     "say": "Start as wide as possible. Then always give up the lower wall, because keeping it can never do better.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "always move the lower wall",
     "arrows": null
    },
    {
     "say": "Pip and Moss start at the two ends, the widest tank possible. Best is zero.",
     "line": 4,
     "ptr": {
      "left": 0,
      "right": 4
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "best": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The tank is four wide. But water only rises to the lower wall, which is one. Four times one is four.",
     "line": 8,
     "ptr": null,
     "hot": [
      0,
      4
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "best": 4
     },
     "box": null,
     "card": "width 4 × lower wall 1 = 4",
     "arrows": null
    },
    {
     "say": "Which wall to give up? The lower one. It is the limit, and any narrower tank that keeps it can only hold less.",
     "line": 9,
     "ptr": {
      "left": 1
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "move the lower wall",
     "arrows": null
    },
    {
     "say": "Walls five and three. Three wide, three high. Nine. A new best.",
     "line": 8,
     "ptr": null,
     "hot": [
      1,
      4
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "best": 9
     },
     "box": null,
     "card": "width 3 × lower wall 3 = 9",
     "arrows": null
    },
    {
     "say": "Five on the left, three on the right. Which walker moves?",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "walls 5 and 3 → who moves?",
     "arrows": null
    },
    {
     "say": "Moss. The three is the limit.",
     "line": 10,
     "ptr": {
      "right": 3
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Two wide, four high. Eight. Not better than nine.",
     "line": 8,
     "ptr": null,
     "hot": [
      1,
      3
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "width 2 × lower wall 4 = 8",
     "arrows": null
    },
    {
     "say": "Moss moves again. One wide, two high. Two. Then the walkers meet.",
     "line": 10,
     "ptr": {
      "right": 2
     },
     "hot": [
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "width 1 × lower wall 2 = 2",
     "arrows": null
    },
    {
     "say": "Line twelve returns the best. Nine.",
     "line": 12,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One walker moves at every step. O of n time, instead of trying every pair.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "n steps → O(n), not O(n²)",
     "arrows": null
    },
    {
     "say": "Three numbers. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "3 numbers → O(1) space",
     "arrows": null
    },
    {
     "say": "It is a puzzle, but the habit is real. Start with the widest choice, then give up whichever side limits you.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "drop the side that limits you",
     "arrows": null
    }
   ]
  },
  {
   "id": "tp5",
   "num": 5,
   "title": "Two Rows Into One",
   "fn": "mergeSorted",
   "ask": "Both arrays are sorted. Return <b>one new sorted array</b> holding every number from both, without calling sort.",
   "spec": "mergeSorted([1, 4, 7], [2, 3, 9]) → [1, 2, 3, 4, 7, 9]",
   "start": "// a and b are both sorted, smallest first.\nfunction mergeSorted(a, b) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: one sorted row made from two sorted rows.",
    "Do it by hand on [1, 4, 7] and [2, 3, 9]. Where did you look to find the next number each time?",
    "The smallest number not yet used is always in one of two places. Which two?",
    "What is left to do when one row runs out before the other?"
   ],
   "hints": [
    "Keep one marker at the front of each row.",
    "Compare the two numbers under the markers. Push the smaller one onto the answer and move that marker forward.",
    "When one row is used up, push everything that is left of the other row."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       4,
       7
      ],
      [
       2,
       3,
       9
      ]
     ],
     "want": [
      1,
      2,
      3,
      4,
      7,
      9
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
       2,
       3
      ]
     ],
     "want": [
      2,
      3
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
       5,
       6
      ],
      [
       1,
       2
      ]
     ],
     "want": [
      1,
      2,
      5,
      6
     ]
    },
    {
     "args": [
      [
       -2,
       0
      ],
      [
       -1,
       3
      ]
     ],
     "want": [
      -2,
      -1,
      0,
      3
     ]
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*sort\\s*\\(",
     "msg": "Sorting works, but costs O(n log n) and skips the idea. The input is already in order: use that."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function mergeSorted(a, b) {",
    "  const out = [];",
    "  let i = 0;",
    "  let j = 0;",
    "  while (i < a.length && j < b.length) {",
    "    if (a[i] <= b[j]) out.push(a[i++]);",
    "    else out.push(b[j++]);",
    "  }",
    "  while (i < a.length) out.push(a[i++]);",
    "  while (j < b.length) out.push(b[j++]);",
    "  return out;",
    "}"
   ],
   "why": "Why are lines 9 and 10 needed? Can both of those loops run in the same call?",
   "topic": null,
   "world": "Your phone merges two sorted contact lists like this. And merge sort does it at every level.",
   "view": {
    "row": [
     1,
     4,
     7
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     2,
     3,
     9
    ],
    "rowLabel": "a",
    "row2Label": "b",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     },
     {
      "id": "j",
      "row": 2
     }
    ],
    "vars": [],
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
     "say": "Both rows are already sorted. So the smallest number left is always at the front of one of them.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "smallest left is at one of the fronts",
     "arrows": null
    },
    {
     "say": "Compare the two fronts, take the smaller, and move that marker. Repeat.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "take the smaller front, move on",
     "arrows": null
    },
    {
     "say": "An empty answer, and one marker at the front of each row.",
     "line": 4,
     "ptr": {
      "i": 0,
      "j": 0
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Compare the two fronts. One and two. One is smaller, so it goes out, and i moves on.",
     "line": 6,
     "ptr": {
      "i": 1
     },
     "hot": [
      0,
      "d0"
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1"
     ],
     "card": "1 against 2 → take 1",
     "arrows": null
    },
    {
     "say": "Four against two. Two goes out, and j moves on.",
     "line": 7,
     "ptr": {
      "j": 1
     },
     "hot": [
      1,
      "d0"
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1, 2"
     ],
     "card": "4 against 2 → take 2",
     "arrows": null
    },
    {
     "say": "Four against three. Three.",
     "line": 7,
     "ptr": {
      "j": 2
     },
     "hot": [
      1,
      "d1"
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1, 2, 3"
     ],
     "card": "4 against 3 → take 3",
     "arrows": null
    },
    {
     "say": "Four against nine. Which one goes out, and which marker moves?",
     "line": 5,
     "ptr": null,
     "hot": [
      1,
      "d2"
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "4 against 9 → ?",
     "arrows": null
    },
    {
     "say": "Four. And i moves on.",
     "line": 6,
     "ptr": {
      "i": 2
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1, 2, 3",
      "4"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Seven against nine. Seven. Now the first row is used up, so the main loop stops.",
     "line": 6,
     "ptr": {
      "i": 3
     },
     "hot": [
      2,
      "d2"
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1, 2, 3",
      "4, 7"
     ],
     "card": "7 against 9 → take 7",
     "arrows": null
    },
    {
     "say": "Line ten empties what is left of the other row. Nine.",
     "line": 10,
     "ptr": {
      "j": 3
     },
     "hot": [],
     "ok": [
      "d2"
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1, 2, 3",
      "4, 7, 9"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line eleven returns the merged row.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Every step sends one number out. So n plus m steps. O of n plus m.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "one number per step → O(n + m)",
     "arrows": null
    },
    {
     "say": "The answer row holds everything. O of n plus m space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "answer row → O(n + m) space",
     "arrows": null
    },
    {
     "say": "Your phone merges two sorted contact lists like this. And merge sort does it at every level.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "merging two sorted contact lists",
     "arrows": null
    }
   ]
  },
  {
   "id": "tp6",
   "num": 6,
   "title": "Three That Add Up",
   "fn": "hasTriple",
   "ask": "The numbers are sorted. Return <b>true</b> if three different doors add up to <b>target</b>, and <b>false</b> otherwise.",
   "spec": "hasTriple([1, 2, 4, 5, 8], 15) → true      (2 + 5 + 8)",
   "start": "// nums is sorted, smallest first. target is a number.\nfunction hasTriple(nums, target) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: any three doors whose numbers add up to the target.",
    "Three nested loops would work. How many steps is that for 3,000 doors?",
    "If you hold one number still, what is left is a problem you have already solved. Which one?",
    "Which part of the row does the pair search need to cover for each held number?"
   ],
   "hints": [
    "Loop i over the doors: nums[i] is the number you hold still.",
    "For each i, put left on i + 1 and right on the last door, and run the sorted pair search.",
    "The sum is nums[i] + nums[left] + nums[right]. Too small: left++. Too big: right--. Equal: return true."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       2,
       4,
       5,
       8
      ],
      15
     ],
     "want": true
    },
    {
     "args": [
      [
       1,
       2,
       4,
       5,
       8
      ],
      100
     ],
     "want": false
    },
    {
     "args": [
      [
       1,
       2
      ],
      3
     ],
     "want": false
    },
    {
     "args": [
      [],
      0
     ],
     "want": false
    },
    {
     "args": [
      [
       1,
       2,
       3
      ],
      6
     ],
     "want": true
    },
    {
     "args": [
      [
       -5,
       -1,
       0,
       2,
       6
      ],
      1
     ],
     "want": true
    },
    {
     "args": [
      [
       1,
       1,
       1,
       1
      ],
      4
     ],
     "want": false
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
     "want": true
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "return [Array.from({ length: 5000 }, (_, i) => i * 3), 7];",
    "limit": 1500,
    "label": "5,000 doors, no triple",
    "msg": "Correct on the small cases, but too slow on the big one. Three nested loops is O(n³). Hold one number and run two pointers over the rest."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function hasTriple(nums, target) {",
    "  for (let i = 0; i < nums.length - 2; i++) {",
    "    let left = i + 1;",
    "    let right = nums.length - 1;",
    "    while (left < right) {",
    "      const sum = nums[i] + nums[left] + nums[right];",
    "      if (sum === target) return true;",
    "      if (sum < target) left++;",
    "      else right--;",
    "    }",
    "  }",
    "  return false;",
    "}"
   ],
   "why": "Why does left start at i + 1 and not at 0?",
   "topic": null,
   "world": "A budgeting tool asks the same question. Do any three bills add up to exactly this payment?",
   "view": {
    "row": [
     1,
     2,
     4,
     5,
     8
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     },
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
     "say": "Three numbers is one number, plus a pair. And you already know how to find a pair in a sorted row.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "three = one held + a pair",
     "arrows": null
    },
    {
     "say": "Hold the first number still. Then run two pointers over everything to its right.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "hold one, sweep the rest",
     "arrows": null
    },
    {
     "say": "I holds the first number still. Pip and Moss take the two ends of everything after it.",
     "line": 4,
     "ptr": {
      "i": 0,
      "left": 1,
      "right": 4
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line six adds all three. One, two, eight. Eleven.",
     "line": 6,
     "ptr": null,
     "hot": [
      0,
      1,
      4
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "sum": 11
     },
     "box": null,
     "card": "1 + 2 + 8 = 11",
     "arrows": null
    },
    {
     "say": "Eleven is less than fifteen. Too small. Pip moves right.",
     "line": 8,
     "ptr": {
      "left": 2
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "too small → left moves in",
     "arrows": null
    },
    {
     "say": "One, four, eight. Thirteen. Still too small. Pip moves again.",
     "line": 8,
     "ptr": {
      "left": 3
     },
     "hot": [
      0,
      2,
      4
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "sum": 13
     },
     "box": null,
     "card": "1 + 4 + 8 = 13",
     "arrows": null
    },
    {
     "say": "One, five, eight. Fourteen. Too small. Pip moves, and meets Moss. No triple starts with one.",
     "line": 8,
     "ptr": {
      "left": 4
     },
     "hot": [
      0,
      3,
      4
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "sum": 14
     },
     "box": null,
     "card": "1 + 5 + 8 = 14",
     "arrows": null
    },
    {
     "say": "So i moves on to the next number, two. Pip and Moss reset to the ends of what follows.",
     "line": 4,
     "ptr": {
      "i": 1,
      "left": 2,
      "right": 4
     },
     "hot": [],
     "ok": [],
     "bad": [
      0
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "next held number: 2",
     "arrows": null
    },
    {
     "say": "Two, four, eight. Fourteen. The target is fifteen. Who moves?",
     "line": 6,
     "ptr": null,
     "hot": [
      1,
      2,
      4
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "sum": 14
     },
     "box": null,
     "card": "2 + 4 + 8 = 14",
     "arrows": null
    },
    {
     "say": "Pip. Too small means the left walker moves.",
     "line": 8,
     "ptr": {
      "left": 3
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Two, five, eight. Fifteen. Line seven returns true.",
     "line": 7,
     "ptr": null,
     "hot": [
      1,
      3,
      4
     ],
     "ok": [
      1,
      3,
      4
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "sum": 15
     },
     "box": null,
     "card": "2 + 5 + 8 = 15",
     "arrows": null
    },
    {
     "say": "One sweep for each held number. n times n. O of n squared. Trying every triple would be n cubed.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "n sweeps × n steps → O(n²)",
     "arrows": null
    },
    {
     "say": "Only three markers. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "3 markers → O(1) space",
     "arrows": null
    },
    {
     "say": "A budgeting tool asks the same question. Do any three bills add up to exactly this payment?",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "three bills, one payment",
     "arrows": null
    }
   ]
  }
 ]
};
