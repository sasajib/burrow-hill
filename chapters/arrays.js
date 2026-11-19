window.CHAPTER = {
 "id": "arrays",
 "title": "Arrays",
 "sub": "CHAPTER 1 · ARRAYS",
 "key": "burrow-ch-arrays",
 "next": {
  "href": "chapter.html?c=strings",
  "label": "Chapter 2: Strings"
 },
 "prev": {
  "href": "foundations.html",
  "label": "Part 0: Foundations"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "ar0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Welcome to Burrow Hill",
   "intro": "Meet Pip and Moss, and see what this chapter covers."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "art1",
   "label": "Theory 1",
   "short": "T1",
   "name": "A row of numbered doors",
   "intro": "What an array is, why indexes start at zero, and why reaching any door takes one step. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "art2",
   "label": "Theory 2",
   "short": "T2",
   "name": "What a row makes slow",
   "intro": "Inserting, removing and searching: where the walking comes from. One guess."
  }
 ],
 "notes": {
  "t1": "<h3>Key ideas</h3><ul><li><b>An array is a row of same-sized doors, side by side.</b> Each has an index, starting at 0.</li>\n      <li><b>The index is a distance from the start</b>, so the address of a door is: start + index × width. One calculation, one jump.</li>\n      <li><b>Reading or writing by index is O(1)</b>, however long the row is.</li>\n      <li><b>The last index is length − 1.</b></li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>Inserting or removing in the middle shifts everything after it:</b> O(n).</li>\n      <li><b>Adding or removing at the end shifts nothing:</b> <code>push</code> and <code>pop</code> are O(1).</li>\n      <li><b>Finding a value without knowing its index is a walk:</b> O(n).</li>\n      <li><b>Summary:</b> by index or at the end, instant. In the middle or by value, a walk.</li></ul>"
 },
 "quiz": {
  "art1-q1": {
   "ask": "A row has five doors. What is the index of the last door?",
   "opts": [
    "4",
    "5",
    "6"
   ],
   "right": 0,
   "why": "Indexes start at 0, so five doors are numbered 0, 1, 2, 3, 4. The last index is always length − 1."
  },
  "art2-q1": {
   "ask": "You need to find the number 9 in a row of n doors, and you do not know its index. In the worst case, how many doors are opened?",
   "opts": [
    "All n",
    "One",
    "Half of them, always"
   ],
   "right": 0,
   "why": "Without an index there is nothing to jump to. If 9 is behind the last door, or not there at all, every door gets opened."
  },
  "ar1s-q": {
   "ask": "left = 1 and right = 3. Which two doors swap?",
   "opts": [
    "Doors 1 and 3",
    "Doors 0 and 4",
    "Doors 2 and 2"
   ],
   "right": 0,
   "why": "The swap always uses the doors under the two markers."
  },
  "ar2s-q": {
   "ask": "best is 8 and the door holds 9. What does line 4 do?",
   "opts": [
    "best becomes 9",
    "best stays 8",
    "The loop stops"
   ],
   "right": 0,
   "why": "9 is greater than 8, so best is replaced."
  },
  "ar3s-q": {
   "ask": "j = 2 and i = 2. The loop runs while j > i. Does it run again?",
   "opts": [
    "No, 2 is not greater than 2",
    "Yes, once more",
    "Yes, twice more"
   ],
   "right": 0,
   "why": "The shifting stops exactly at the door where x belongs."
  },
  "ar4s-q": {
   "ask": "expected was 3 and gains 3. actual was 3 and gains 1. What are they now?",
   "opts": [
    "expected 6, actual 4",
    "expected 5, actual 4",
    "expected 6, actual 6"
   ],
   "right": 0,
   "why": "3 + 3 = 6 and 3 + 1 = 4."
  },
  "ar5s-q": {
   "ask": "The digit is 1 and a carry has arrived. What does the code do?",
   "opts": [
    "Makes it 2 and returns",
    "Makes it 0 and carries on",
    "Adds a new door"
   ],
   "right": 0,
   "why": "1 is less than 9, so line 4 adds one and line 5 returns straight away."
  },
  "ar6s-q": {
   "ask": "run was 1 and best was 2. The door holds a 1. What are they after line 7?",
   "opts": [
    "run 2, best 2",
    "run 2, best 3",
    "run 1, best 2"
   ],
   "right": 0,
   "why": "run goes up to 2. best is the larger of 2 and 2, so it stays 2."
  }
 },
 "problems": [
  {
   "id": "ar1",
   "num": 1,
   "title": "Turn the Row Around",
   "fn": "reverseInPlace",
   "ask": "Reverse the array <b>in place</b>: change the array you were given, without building a second one and without the built-in reverse.",
   "spec": "reverseInPlace([1, 2, 3, 4, 5])  →  the array becomes [5, 4, 3, 2, 1]",
   "start": "// Change nums itself. Nothing needs to be returned.\nfunction reverseInPlace(nums) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the first number ends up last, the second ends up second to last, and so on.",
    "Do it by hand on [1, 2, 3, 4, 5]. Which two numbers trade places first? Which two next?",
    "To swap two doors you need somewhere to hold one number for a moment. Why?",
    "When do you stop? What happens to the middle door?"
   ],
   "hints": [
    "Put one marker on the first door and one on the last.",
    "Swap the two numbers under the markers. You need a spare variable to hold one of them while you overwrite it.",
    "Move both markers one door inward and repeat while left < right."
   ],
   "mode": "inplace",
   "tests": [
    {
     "args": [
      [
       1,
       2,
       3,
       4,
       5
      ]
     ],
     "want": [
      5,
      4,
      3,
      2,
      1
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
       1,
       2
      ]
     ],
     "want": [
      2,
      1
     ]
    },
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
      4,
      3,
      2,
      1
     ]
    },
    {
     "args": [
      [
       5,
       5,
       1
      ]
     ],
     "want": [
      1,
      5,
      5
     ]
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*reverse\\s*\\(",
     "msg": "The built-in reverse does the whole job. Swap the doors yourself this once."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function reverseInPlace(nums) {",
    "  let left = 0;",
    "  let right = nums.length - 1;",
    "  while (left < right) {",
    "    const keep = nums[left];",
    "    nums[left] = nums[right];",
    "    nums[right] = keep;",
    "    left++;",
    "    right--;",
    "  }",
    "}"
   ],
   "why": "Why is the spare variable keep needed? What would the two doors hold after lines 6 and 7 without it?",
   "view": {
    "row": [
     1,
     2,
     3,
     4,
     5
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
     "keep"
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
     "say": "In a reversed row, the first number and the last number have traded places. So have the second, and the second to last.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "pairs from the two ends swap",
     "arrows": null
    },
    {
     "say": "So put a marker on each end, swap, and walk both markers inward.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "swap the ends, walk inward",
     "arrows": null
    },
    {
     "say": "Lines two and three place the markers. Pip on the first door, Moss on the last.",
     "line": 3,
     "ptr": {
      "left": 0,
      "right": 4
     },
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
     "say": "Line five puts the left number aside, in keep. Otherwise the next line would destroy it.",
     "line": 5,
     "ptr": null,
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "keep": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line six copies the right number into the left door. Line seven puts the kept number into the right door.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      4
     ],
     "bad": [],
     "set": {
      "0": 5,
      "4": 1
     },
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Lines eight and nine step both markers inward.",
     "line": 9,
     "ptr": {
      "left": 1,
      "right": 3
     },
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
     "say": "One is less than three, so the loop runs again. Which two doors swap now?",
     "line": 4,
     "ptr": null,
     "hot": [
      1,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "1 < 3 → swap again",
     "arrows": null
    },
    {
     "say": "Doors one and three. Two and four trade places.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      3
     ],
     "bad": [],
     "set": {
      "1": 4,
      "3": 2
     },
     "vars": {
      "keep": 2
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Step inward. Both markers stand on door two. Two is not less than two, so the loop ends.",
     "line": 4,
     "ptr": {
      "left": 2,
      "right": 2
     },
     "hot": [],
     "ok": [
      2
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "2 < 2 → no, stop",
     "arrows": null
    },
    {
     "say": "The middle door has no partner, and stays where it is. The row is reversed.",
     "line": 11,
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
     "say": "Each round fixes two doors, so n over two rounds. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "n/2 swaps → O(n) time",
     "arrows": null
    },
    {
     "say": "Two markers and one spare variable. O of one space. That is what in place means.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "in place → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "ar2",
   "num": 2,
   "title": "The Biggest Parcel",
   "fn": "biggest",
   "ask": "Return the largest number in the array. The array has at least one number. Do not use Math.max.",
   "spec": "biggest([3, 8, 2, 9, 4]) → 9",
   "start": "// nums has at least one number.\nfunction biggest(nums) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the largest value behind any door.",
    "Do it by hand on [3, 8, 2, 9, 4]. What did you keep in your head as you looked along the row?",
    "What is the best guess before you have looked at anything but the first door?",
    "When does that guess change?"
   ],
   "hints": [
    "Keep one variable, best, and start it with the first number.",
    "Walk the other doors. If a number is larger than best, it becomes the new best.",
    "After the walk, return best."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       3,
       8,
       2,
       9,
       4
      ]
     ],
     "want": 9
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
       -3,
       -1,
       -7
      ]
     ],
     "want": -1
    },
    {
     "args": [
      [
       2,
       2,
       2
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       9,
       1,
       1
      ]
     ],
     "want": 9
    },
    {
     "args": [
      [
       1,
       1,
       9
      ]
     ],
     "want": 9
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "Math\\s*\\.\\s*max",
     "msg": "Math.max does the walk for you. Write the walk yourself this once."
    },
    {
     "re": "\\.\\s*sort\\s*\\(",
     "msg": "Sorting costs far more than one walk. Look at each door once."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function biggest(nums) {",
    "  let best = nums[0];",
    "  for (let i = 1; i < nums.length; i++) {",
    "    if (nums[i] > best) best = nums[i];",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "Why does best start as nums[0] and not as 0? Try the array [-3, -1, -7].",
   "view": {
    "row": [
     3,
     8,
     2,
     9,
     4
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
     "say": "The biggest number could be behind any door. So every door has to be looked at once.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "look at every door once",
     "arrows": null
    },
    {
     "say": "Carry one number as you walk: the best so far. Replace it whenever you see a bigger one.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "carry the best so far",
     "arrows": null
    },
    {
     "say": "Line two takes the first number as the best so far. Three.",
     "line": 2,
     "ptr": null,
     "hot": [
      0
     ],
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
     "say": "The walk starts at door one. Eight is bigger than three, so best becomes eight.",
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
     "vars": {
      "best": 8
     },
     "box": null,
     "card": "8 > 3 → new best",
     "arrows": null
    },
    {
     "say": "Door two. Two is not bigger than eight. Nothing changes.",
     "line": 4,
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
     "card": "2 > 8 → no",
     "arrows": null
    },
    {
     "say": "Door three holds nine. What happens to best?",
     "line": 4,
     "ptr": {
      "i": 3
     },
     "hot": [
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "9 > 8 → ?",
     "arrows": null
    },
    {
     "say": "It becomes nine.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [
      3
     ],
     "bad": [],
     "set": null,
     "vars": {
      "best": 9
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door four. Four is not bigger. And the row is finished.",
     "line": 4,
     "ptr": {
      "i": 4
     },
     "hot": [
      4
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "4 > 9 → no",
     "arrows": null
    },
    {
     "say": "Line six returns best. Nine.",
     "line": 6,
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
     "say": "One walk, one comparison per door. O of n time.",
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
     "say": "One remembered number. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "1 number → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "ar3",
   "num": 3,
   "title": "Make Room",
   "fn": "makeRoom",
   "ask": "Insert the number <b>x</b> at index <b>i</b>, shifting the numbers after it one door to the right. Change the array in place, and do not use splice.",
   "spec": "makeRoom([1, 2, 4, 5], 2, 3)  →  the array becomes [1, 2, 3, 4, 5]",
   "start": "// Change nums itself: put x at index i and shift the rest right. 0 <= i <= nums.length.\nfunction makeRoom(nums, i, x) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: open a gap at index i and put x in it.",
    "Do it by hand on [1, 2, 4, 5] with i = 2. Which number has to move first so that nothing is lost?",
    "What goes wrong if you start shifting from the left?",
    "After the shifting, which door is free?"
   ],
   "hints": [
    "Start from the back: copy the last number one door to the right (the array grows by one).",
    "Keep copying nums[j - 1] into nums[j], moving j left, until j reaches i.",
    "Door i is now free to overwrite: nums[i] = x."
   ],
   "mode": "inplace",
   "tests": [
    {
     "args": [
      [
       1,
       2,
       4,
       5
      ],
      2,
      3
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
      [],
      0,
      7
     ],
     "want": [
      7
     ]
    },
    {
     "args": [
      [
       1
      ],
      0,
      0
     ],
     "want": [
      0,
      1
     ]
    },
    {
     "args": [
      [
       1
      ],
      1,
      2
     ],
     "want": [
      1,
      2
     ]
    },
    {
     "args": [
      [
       5,
       6,
       7
      ],
      0,
      4
     ],
     "want": [
      4,
      5,
      6,
      7
     ]
    },
    {
     "args": [
      [
       1,
       2,
       3
      ],
      3,
      4
     ],
     "want": [
      1,
      2,
      3,
      4
     ]
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*splice\\s*\\(",
     "msg": "splice does the shifting for you. Shift the numbers yourself, starting from the back."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function makeRoom(nums, i, x) {",
    "  for (let j = nums.length; j > i; j--) {",
    "    nums[j] = nums[j - 1];",
    "  }",
    "  nums[i] = x;",
    "}"
   ],
   "why": "Why does the loop run from the back towards i, and not from i towards the back?",
   "view": {
    "row": [
     1,
     2,
     4,
     5,
     ""
    ],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
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
     "say": "To open a gap, everything after it moves one door to the right.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "everything after i moves right",
     "arrows": null
    },
    {
     "say": "Start from the back. Each number moves into a door that is already free, so nothing is lost.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "back first: nothing is overwritten",
     "arrows": null
    },
    {
     "say": "Line two starts j on a new door at the end of the row. Door four. It is empty.",
     "line": 2,
     "ptr": {
      "j": 4
     },
     "hot": [
      4
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
     "say": "Line three copies the number from the door on its left. Five moves into door four.",
     "line": 3,
     "ptr": null,
     "hot": [
      3,
      4
     ],
     "ok": [],
     "bad": [],
     "set": {
      "4": 5
     },
     "vars": null,
     "box": null,
     "card": "nums[4] = nums[3]",
     "arrows": null
    },
    {
     "say": "J moves left, to door three. Four moves into it.",
     "line": 3,
     "ptr": {
      "j": 3
     },
     "hot": [
      2,
      3
     ],
     "ok": [],
     "bad": [],
     "set": {
      "3": 4
     },
     "vars": null,
     "box": null,
     "card": "nums[3] = nums[2]",
     "arrows": null
    },
    {
     "say": "J moves to door two. The loop test is j greater than i. Is two greater than two?",
     "line": 2,
     "ptr": {
      "j": 2
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "j > i → 2 > 2 ?",
     "arrows": null
    },
    {
     "say": "No. The loop stops. Door two still shows the old four, but its copy is safe next door.",
     "line": 2,
     "ptr": null,
     "hot": [
      2
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
     "say": "Line five writes x into door two. Three.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      2
     ],
     "bad": [],
     "set": {
      "2": 3
     },
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Inserting at the front moves every number. So in the worst case, O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "up to n moves → O(n) time",
     "arrows": null
    },
    {
     "say": "No second array. O of one extra space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "in place → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "ar4",
   "num": 4,
   "title": "The Missing Number",
   "fn": "missing",
   "ask": "The array holds the numbers <b>0 to n</b> in any order, but <b>one is missing</b> (so it has n numbers). Return the missing one.",
   "spec": "missing([3, 0, 1]) → 2",
   "start": "// nums holds every number from 0 to nums.length except one.\nfunction missing(nums) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: which number from 0 to n is not in the row?",
    "Do [3, 0, 1] by hand. How did you spot that 2 is missing?",
    "Checking every candidate against the whole row is O(n²). What do you get if you add up the numbers that should be there?",
    "And how does that differ from what is actually there?"
   ],
   "hints": [
    "Add up what should be there: 1 + 2 + ... + n (0 adds nothing).",
    "Add up what is actually there.",
    "The difference between the two sums is the missing number."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       3,
       0,
       1
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       0,
       1
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       1
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       0
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       9,
       6,
       4,
       2,
       3,
       5,
       7,
       0,
       1
      ]
     ],
     "want": 8
    },
    {
     "args": [
      []
     ],
     "want": 0
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "const n = 200000; return [Array.from({ length: n }, (_, i) => i)];",
    "limit": 1500,
    "label": "200,000 numbers",
    "msg": "Correct on the small cases, but too slow on the big one. Searching the row for every candidate is O(n²). Compare two sums."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function missing(nums) {",
    "  let expected = 0;",
    "  let actual = 0;",
    "  for (let i = 0; i < nums.length; i++) {",
    "    expected += i + 1;",
    "    actual += nums[i];",
    "  }",
    "  return expected - actual;",
    "}"
   ],
   "why": "Line 5 adds i + 1, not i. Why? What numbers should be in a row of length 3?",
   "view": {
    "row": [
     3,
     0,
     1
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
     "expected",
     "actual"
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
     "say": "If nothing were missing, the numbers would add up to a total we can work out in advance.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "we know what the total should be",
     "arrows": null
    },
    {
     "say": "The real total is smaller, by exactly the number that is missing.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "expected − actual = missing",
     "arrows": null
    },
    {
     "say": "Two totals, both starting at zero. Expected, and actual.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "expected": 0,
      "actual": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door zero. Line five adds i plus one to expected. One. Line six adds the door, three, to actual.",
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
      "expected": 1,
      "actual": 3
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door one. Expected gains two. Actual gains zero.",
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
     "vars": {
      "expected": 3,
      "actual": 3
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door two. Expected gains three. Actual gains one. What are the two totals?",
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
     "card": "expected 3 + 3 · actual 3 + 1",
     "arrows": null
    },
    {
     "say": "Six, and four.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "expected": 6,
      "actual": 4
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line eight subtracts. Six minus four. The missing number is two.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "6 − 4 = 2",
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
     "say": "Two totals. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "2 totals → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "ar5",
   "num": 5,
   "title": "Add One",
   "fn": "plusOne",
   "ask": "The array holds the <b>digits</b> of a number, most important digit first. Add one to the number and return the digits of the result.",
   "spec": "plusOne([1, 9, 9]) → [2, 0, 0]      plusOne([9, 9]) → [1, 0, 0]",
   "start": "// digits: each entry is 0 to 9. [1, 9, 9] means 199.\nfunction plusOne(digits) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: do \"plus one\" the way you do it on paper.",
    "Add one to 199 by hand. Which digit did you touch first? Where did you stop?",
    "What happens to a 9 when one is added to it, and what does that do to the digit on its left?",
    "What is special about a number made only of nines?"
   ],
   "hints": [
    "Walk from the last digit towards the first.",
    "If the digit is less than 9, add one to it and return: you are done. If it is 9, set it to 0 and keep going left (that is the carry).",
    "If the loop ends, every digit was a 9: the answer is a 1 followed by all those zeros."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       9,
       9
      ]
     ],
     "want": [
      2,
      0,
      0
     ]
    },
    {
     "args": [
      [
       9,
       9
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
       0
      ]
     ],
     "want": [
      1
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
      4
     ]
    },
    {
     "args": [
      [
       9
      ]
     ],
     "want": [
      1,
      0
     ]
    },
    {
     "args": [
      [
       2,
       9
      ]
     ],
     "want": [
      3,
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
    "function plusOne(digits) {",
    "  for (let i = digits.length - 1; i >= 0; i--) {",
    "    if (digits[i] < 9) {",
    "      digits[i]++;",
    "      return digits;",
    "    }",
    "    digits[i] = 0;",
    "  }",
    "  return [1, ...digits];",
    "}"
   ],
   "why": "When does the last line run? What do the digits look like at that moment?",
   "view": {
    "row": [
     1,
     9,
     9
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
     "say": "Adding one starts at the last digit, just like on paper.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "start at the last digit",
     "arrows": null
    },
    {
     "say": "A nine turns into zero and passes the one along. Any other digit takes the one, and we are finished.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "9 → 0 and carry · else +1 and stop",
     "arrows": null
    },
    {
     "say": "Line two starts at the last door. Door two.",
     "line": 2,
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
     "card": "",
     "arrows": null
    },
    {
     "say": "Line three asks: is this digit less than nine? No. It is a nine.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "9 < 9 → no",
     "arrows": null
    },
    {
     "say": "So line seven turns it into zero. The one is carried to the left.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      2
     ],
     "set": {
      "2": 0
     },
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door one. Another nine. Zero again, and the carry moves on.",
     "line": 7,
     "ptr": {
      "i": 1
     },
     "hot": [
      1
     ],
     "ok": [],
     "bad": [
      1
     ],
     "set": {
      "1": 0
     },
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door zero holds a one. Is one less than nine?",
     "line": 3,
     "ptr": {
      "i": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "1 < 9 → ?",
     "arrows": null
    },
    {
     "say": "Yes. Line four makes it two, and line five returns straight away.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "set": {
      "0": 2
     },
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "At most one visit per digit. O of n time. Usually far less, because the carry stops early.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "at most n digits → O(n) time",
     "arrows": null
    },
    {
     "say": "The digits are changed in place. Only all nines need one extra door.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "in place → O(1) space, usually",
     "arrows": null
    }
   ]
  },
  {
   "id": "ar6",
   "num": 6,
   "title": "The Longest Streak",
   "fn": "longestRun",
   "ask": "The array holds only <b>1</b> and <b>0</b>. Return the length of the longest unbroken run of 1s.",
   "spec": "longestRun([1, 1, 0, 1, 1, 1]) → 3",
   "start": "// nums holds only 1 and 0.\nfunction longestRun(nums) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the most 1s in a row, with no 0 between them.",
    "Do [1, 1, 0, 1, 1, 1] by hand. What two things were you keeping track of?",
    "What happens to the current run when you meet a 0?",
    "When should you compare the current run with the best one?"
   ],
   "hints": [
    "Keep two numbers: run (the current streak) and best (the longest seen).",
    "For a 1, add one to run. For a 0, set run back to 0.",
    "After each door, best is the larger of best and run."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       1,
       0,
       1,
       1,
       1
      ]
     ],
     "want": 3
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
       0,
       0
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       1
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       1,
       1,
       1
      ]
     ],
     "want": 3
    },
    {
     "args": [
      [
       1,
       0,
       1,
       0,
       1
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       1,
       1,
       0,
       1
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
    "function longestRun(nums) {",
    "  let run = 0;",
    "  let best = 0;",
    "  for (let i = 0; i < nums.length; i++) {",
    "    if (nums[i] === 1) run++;",
    "    else run = 0;",
    "    best = Math.max(best, run);",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "Why are two variables needed? What would be lost with only run?",
   "view": {
    "row": [
     1,
     1,
     0,
     1,
     1,
     1
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
     "run",
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
     "say": "Walk the row once, counting the current streak. A zero sets it back to nothing.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "count the current streak",
     "arrows": null
    },
    {
     "say": "And remember the longest streak seen so far, because a later zero must not erase it.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "remember the best streak",
     "arrows": null
    },
    {
     "say": "Run and best both start at zero.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "run": 0,
      "best": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door zero is a one. Run is one. Best is one.",
     "line": 7,
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
      "run": 1,
      "best": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Another one. Run is two. Best is two.",
     "line": 7,
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
      "run": 2,
      "best": 2
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "A zero. Line six sets run back to zero. But best keeps its two.",
     "line": 6,
     "ptr": {
      "i": 2
     },
     "hot": [],
     "ok": [],
     "bad": [
      2
     ],
     "set": null,
     "vars": {
      "run": 0
     },
     "box": null,
     "card": "run = 0 · best stays 2",
     "arrows": null
    },
    {
     "say": "A one. Run is one. That does not beat two.",
     "line": 7,
     "ptr": {
      "i": 3
     },
     "hot": [
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "run": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Another one. What are run and best now?",
     "line": 7,
     "ptr": {
      "i": 4
     },
     "hot": [
      3,
      4
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "run = ? · best = ?",
     "arrows": null
    },
    {
     "say": "Run is two. Best stays two.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": {
      "run": 2
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The last door. Run is three, and that beats two. Best is three.",
     "line": 7,
     "ptr": {
      "i": 5
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
      "run": 3,
      "best": 3
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line nine returns best. Three.",
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
  }
 ]
};
