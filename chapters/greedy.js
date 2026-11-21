window.CHAPTER = {
 "id": "greedy",
 "title": "Greedy",
 "sub": "CHAPTER 23 · GREEDY",
 "key": "burrow-ch-greedy",
 "next": {
  "href": "chapter.html?c=dp1",
  "label": "Chapter 24: Dynamic Programming"
 },
 "prev": {
  "href": "chapter.html?c=backtrack",
  "label": "Chapter 22: Backtracking"
 },
 "mock": false,
 "target": null,
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "gd0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Take the best, right now",
   "intro": "The opposite of backtracking: one pass, no going back. Fast, but only sometimes correct."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "gdt1",
   "label": "The one lesson",
   "short": "T1",
   "name": "When is the greedy choice safe?",
   "intro": "One example where greedy is right, one where it is wrong, and a test to tell them apart. One guess."
  }
 ],
 "notes": {
  "w": "<h3>The words</h3><ul><li><b>Greedy:</b> at each step take the choice that looks best right now, and never undo it.</li>\n      <li><b>It is fast</b> (usually one pass, sometimes after a sort) but <b>only correct for some problems</b>.</li>\n      <li><b>Signals:</b> \"the fewest\", \"the most\", \"can you reach\", together with a choice that obviously cannot hurt later.</li></ul>",
  "t1": "<h3>Key ideas</h3><ul><li><b>Greedy can be wrong.</b> Bags of 1, 3 and 4 for an amount of 6: greedy pays 4 + 1 + 1 (three bags), but 3 + 3 uses two.</li>\n      <li><b>The safety test (an exchange argument):</b> take any answer that does not start with the greedy choice. If you can always swap the greedy choice in without making the answer worse, greedy is safe.</li>\n      <li><b>Often a sort comes first:</b> then \"the best right now\" is simply the next item.</li>\n      <li><b>Keep one or two numbers</b> (the farthest reach, a running total) instead of trying paths.</li>\n      <li><b>If you cannot argue that it is safe,</b> look for a counter-example with 3 or 4 items before you trust it.</li></ul>"
 },
 "quiz": {
  "gdt1-q1": {
   "ask": "The bags hold 1, 3 and 4 seeds. Greedy pays 6 as 4 + 1 + 1: three bags. Is there a way with fewer bags?",
   "opts": [
    "Yes: 3 + 3, two bags",
    "No: three is the fewest",
    "Yes: 4 + 3"
   ],
   "right": 0,
   "why": "Taking the 4 first looked best but blocked the better answer. With these bag sizes the greedy choice is not safe."
  },
  "gd1s-q": {
   "ask": "far is 3. Stone 2 can reach 2 + 1 = 3 and stone 3 can reach 3 + 0 = 3. What is far after stone 3?",
   "opts": [
    "Still 3",
    "4",
    "6"
   ],
   "right": 0,
   "why": "far only grows when some stone reaches beyond it. None of them does."
  },
  "gd2s-q": {
   "ask": "The snack has size 1. The least hungry animal still waiting needs 2. What happens to this snack?",
   "opts": [
    "It is skipped: it is too small for everyone left",
    "It feeds the animal anyway",
    "It is saved for the animal with hunger 3"
   ],
   "right": 0,
   "why": "Everyone still waiting needs at least 2, so a snack of 1 can feed nobody."
  },
  "gd3s-q": {
   "ask": "i is 2, edge is 2 and far is 4. What do lines 8 and 9 do?",
   "opts": [
    "Count a second jump and move the edge to 4",
    "Nothing: the edge was already passed",
    "Return 1"
   ],
   "right": 0,
   "why": "Reaching the edge means the current jump cannot carry further. One more jump opens everything up to far."
  },
  "gd4s-q": {
   "ask": "Starting at burrow 0, the bag drops below zero on the way out of burrow 0. Which start is tried next?",
   "opts": [
    "The next burrow, with an empty bag",
    "Burrow 0 again",
    "None: return -1"
   ],
   "right": 0,
   "why": "No start up to the burrow where the bag ran empty can work, so the search restarts right after it."
  }
 },
 "problems": [
  {
   "id": "gd1",
   "num": 1,
   "title": "Stepping Stones",
   "fn": "canReach",
   "ask": "You stand on the first stone. The number on a stone is the <b>longest jump</b> you may take from it, counted in stones: a 2 lets you move 1 or 2 stones forward. Return <b>true</b> if you can reach the last stone.",
   "spec": "canReach([2, 3, 1, 1, 4]) → true      (stone 0 → stone 1 → stone 4)      canReach([3, 2, 1, 0, 4]) → false      (every way ends on stone 3, which allows no jump)",
   "start": "// hops[i] is the longest jump allowed from stone i.\nfunction canReach(hops) {\n  // your code here\n}\n",
   "plan": [
    "You could try every sequence of jumps. What would that cost?",
    "Which single number tells you everything you need to know so far?",
    "When do you know that you are stuck?"
   ],
   "hints": [
    "Keep far: the farthest stone known to be reachable. It starts at 0.",
    "Walk the stones in order. If stone i is beyond far, it cannot be reached: return false.",
    "Otherwise far becomes the larger of far and i + hops[i]."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       2,
       3,
       1,
       1,
       4
      ]
     ],
     "want": true
    },
    {
     "args": [
      [
       3,
       2,
       1,
       0,
       4
      ]
     ],
     "want": false
    },
    {
     "args": [
      [
       0
      ]
     ],
     "want": true
    },
    {
     "args": [
      [
       0,
       1
      ]
     ],
     "want": false
    },
    {
     "args": [
      [
       1,
       0
      ]
     ],
     "want": true
    },
    {
     "args": [
      [
       2,
       0,
       0
      ]
     ],
     "want": true
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
     "want": false
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function canReach(hops) {",
    "  let far = 0;",
    "  for (let i = 0; i < hops.length; i++) {",
    "    if (i > far) return false;",
    "    far = Math.max(far, i + hops[i]);",
    "  }",
    "  return true;",
    "}"
   ],
   "why": "The code never decides which jump to take. Why is it still certain that a way exists when it returns true?",
   "topic": null,
   "world": "A chain of radio towers works like this. Each has its own range. Will the signal reach the last one?",
   "view": {
    "row": [
     3,
     2,
     1,
     0,
     4
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
     }
    ],
    "vars": [
     "far"
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
     "say": "Do not try the ways one by one. Keep a single number. The farthest stone that can be reached at all.",
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
     "card": "one number: the farthest reach",
     "arrows": null
    },
    {
     "say": "Every stone up to that point is reachable. Each of them may push the number further.",
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
     "card": "each reachable stone may extend it",
     "arrows": null
    },
    {
     "say": "Far starts at zero. Only the first stone is reachable.",
     "line": 2,
     "ptr": {
      "i": 0
     },
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "far": 0
     },
     "box": null,
     "card": "far = 0",
     "arrows": null
    },
    {
     "say": "Stone zero allows a jump of three. So everything up to stone three is reachable.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      2,
      3
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "far": 3
     },
     "box": null,
     "card": "0 + 3 = 3 → far = 3",
     "arrows": null
    },
    {
     "say": "Stone one allows two. One plus two is three. No further.",
     "line": 5,
     "ptr": {
      "i": 1
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
     "card": "1 + 2 = 3 · no further",
     "arrows": null
    },
    {
     "say": "Stone two reaches three. Stone three allows nothing. So what is far, after stone three?",
     "line": 5,
     "ptr": {
      "i": 3
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
     "card": "2 + 1 = 3 · 3 + 0 = 3 → far = ?",
     "arrows": null
    },
    {
     "say": "Still three. Now i is four. Four is beyond far. No stone can get there. Line four returns false.",
     "line": 4,
     "ptr": {
      "i": 4
     },
     "hot": [],
     "ok": [],
     "bad": [
      4
     ],
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
     "say": "Notice what never happened. No way was tried and taken back. One number was enough.",
     "line": 5,
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
     "card": "no ways tried · one number kept",
     "arrows": null
    },
    {
     "say": "One pass over the stones. O of n.",
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
     "card": "one pass → O(n)",
     "arrows": null
    },
    {
     "say": "One number. O of one space.",
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
     "card": "one number → O(1) space",
     "arrows": null
    },
    {
     "say": "A chain of radio towers works like this. Each has its own range. Will the signal reach the last one?",
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
     "card": "will the signal reach the end?",
     "arrows": null
    }
   ]
  },
  {
   "id": "gd2",
   "num": 2,
   "title": "Feed the Most",
   "fn": "fedCount",
   "ask": "Each animal has a <b>hunger</b>, and is happy with one snack of <b>at least that size</b>. Each snack goes to one animal at most. Return the <b>largest number of animals</b> that can be fed. You may sort the arrays.",
   "spec": "fedCount([3, 1, 2], [1, 1, 3]) → 2",
   "start": "// hunger[i] is what animal i needs. snacks[j] is the size of snack j.\nfunction fedCount(hunger, snacks) {\n  // your code here\n}\n",
   "plan": [
    "Which animal is the easiest to feed?",
    "Which snack should that animal get, so that as much as possible is left for the others?",
    "What do you do with a snack that is too small for the easiest animal still waiting?"
   ],
   "hints": [
    "Sort both arrays, smallest first.",
    "Walk the snacks in order. Keep fed: the number of animals fed so far, which is also the position of the next animal.",
    "If the snack is big enough for hunger[fed], that animal is fed (fed++). If not, the snack is too small for everyone left: skip it."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       3,
       1,
       2
      ],
      [
       1,
       1,
       3
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       1,
       2
      ],
      [
       1,
       2,
       3
      ]
     ],
     "want": 2
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
     "want": 0
    },
    {
     "args": [
      [],
      [
       1
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       2
      ],
      []
     ],
     "want": 0
    },
    {
     "args": [
      [
       4,
       2,
       6
      ],
      [
       5,
       3,
       1,
       7
      ]
     ],
     "want": 3
    },
    {
     "args": [
      [
       2,
       2
      ],
      [
       2
      ]
     ],
     "want": 1
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function fedCount(hunger, snacks) {",
    "  hunger.sort((a, b) => a - b);",
    "  snacks.sort((a, b) => a - b);",
    "  let fed = 0;",
    "  for (const snack of snacks) {",
    "    if (fed < hunger.length && snack >= hunger[fed]) fed++;",
    "  }",
    "  return fed;",
    "}"
   ],
   "why": "Why is it never better to give the least hungry animal a bigger snack than the smallest one that is enough?",
   "topic": null,
   "world": "A cloud service places jobs on machines like this. The smallest machine that is big enough gets the smallest job.",
   "view": {
    "row": [
     3,
     1,
     2
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     1,
     1,
     3
    ],
    "rowLabel": "hunger",
    "row2Label": "snacks",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     },
     {
      "id": "s",
      "row": 2
     }
    ],
    "vars": [
     "fed"
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
     "say": "The least hungry animal is the easiest to please. Give it the smallest snack that is enough.",
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
     "card": "least hungry gets the smallest fit",
     "arrows": null
    },
    {
     "say": "And a snack that is too small for the least hungry, is too small for everyone. Skip it.",
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
     "card": "too small for the easiest → for all",
     "arrows": null
    },
    {
     "say": "Lines two and three sort both. Hunger becomes one, two, three. The snacks are already in order.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "0": 1,
      "1": 2,
      "2": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "fed": 0
     },
     "box": null,
     "card": "sort both, smallest first",
     "arrows": null
    },
    {
     "say": "The first snack is a one. The least hungry animal needs one. Enough. One animal is fed.",
     "line": 6,
     "ptr": {
      "i": 0,
      "s": 0
     },
     "hot": [],
     "ok": [
      0,
      "d0"
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "fed": 1
     },
     "box": null,
     "card": "snack 1 ≥ hunger 1 → fed = 1",
     "arrows": null
    },
    {
     "say": "The next snack is also a one. The next animal needs two. Is that enough?",
     "line": 6,
     "ptr": {
      "i": 1,
      "s": 1
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
     "card": "snack 1 ≥ hunger 2 → ?",
     "arrows": null
    },
    {
     "say": "No. And everyone still waiting is at least that hungry. So this snack feeds no one.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      "d1"
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "too small for everyone left → skip",
     "arrows": null
    },
    {
     "say": "The last snack is a three. Three is at least two. The second animal is fed.",
     "line": 6,
     "ptr": {
      "s": 2
     },
     "hot": [],
     "ok": [
      1,
      "d2"
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "fed": 2
     },
     "box": null,
     "card": "snack 3 ≥ hunger 2 → fed = 2",
     "arrows": null
    },
    {
     "say": "The snacks are used up. Line eight returns two.",
     "line": 8,
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
     "say": "The two sorts cost the most. O of n log n. The walk is one pass.",
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
     "card": "2 sorts → O(n log n)",
     "arrows": null
    },
    {
     "say": "One counter. O of one extra space.",
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
     "card": "one counter → O(1) extra",
     "arrows": null
    },
    {
     "say": "A cloud service places jobs on machines like this. The smallest machine that is big enough gets the smallest job.",
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
     "card": "the smallest machine that fits",
     "arrows": null
    }
   ]
  },
  {
   "id": "gd3",
   "num": 3,
   "title": "The Fewest Jumps",
   "fn": "fewestJumps",
   "ask": "The stepping stones again: the number on a stone is the longest jump you may take from it. This time the last stone <b>can always be reached</b>. Return the <b>fewest jumps</b> needed to get from the first stone to the last.",
   "spec": "fewestJumps([2, 3, 1, 1, 4]) → 2      (stone 0 → stone 1 → stone 4)",
   "start": "// hops[i] is the longest jump allowed from stone i. The last stone can always be reached.\nfunction fewestJumps(hops) {\n  // your code here\n}\n",
   "plan": [
    "With exactly one jump, which stones can you stand on? With two?",
    "Walking through the stones of one stretch, what do you need to learn about the next stretch?",
    "At which moment is a jump counted?"
   ],
   "hints": [
    "Keep edge: the last stone reachable with the jumps counted so far. And far: the farthest stone reachable with one more jump.",
    "Walk the stones up to, but not including, the last one. Update far with i + hops[i].",
    "When i reaches edge, one more jump is needed: jumps++ and edge = far."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       2,
       3,
       1,
       1,
       4
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       0
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       1,
       0
      ]
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
      ]
     ],
     "want": 3
    },
    {
     "args": [
      [
       3,
       1,
       1,
       1
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       2,
       1,
       2,
       1,
       0
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       1,
       4,
       1,
       1,
       1,
       0
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
    "function fewestJumps(hops) {",
    "  let jumps = 0;",
    "  let edge = 0;",
    "  let far = 0;",
    "  for (let i = 0; i < hops.length - 1; i++) {",
    "    far = Math.max(far, i + hops[i]);",
    "    if (i === edge) {",
    "      jumps++;",
    "      edge = far;",
    "    }",
    "  }",
    "  return jumps;",
    "}"
   ],
   "why": "The loop stops one stone before the end. What would go wrong if it also ran for the last stone?",
   "topic": null,
   "world": "A long drive is planned like this. How far does one tank reach? And from anywhere in that range, how far the next?",
   "view": {
    "row": [
     2,
     3,
     1,
     1,
     4
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
     }
    ],
    "vars": [
     "jumps",
     "edge",
     "far"
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
     "say": "With one jump, a whole stretch of stones can be reached. With two jumps, a further stretch. Like levels.",
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
     "card": "each jump opens a stretch of stones",
     "arrows": null
    },
    {
     "say": "So walk once. Remember how far the next stretch could go. At the edge of the current one, count a jump.",
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
     "card": "edge of a stretch → one more jump",
     "arrows": null
    },
    {
     "say": "No jumps yet. The current stretch is just stone zero. So the edge is zero.",
     "line": 4,
     "ptr": {
      "i": 0
     },
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "jumps": 0,
      "edge": 0,
      "far": 0
     },
     "box": null,
     "card": "edge = the end of this stretch",
     "arrows": null
    },
    {
     "say": "Stone zero allows two. So one more jump could reach stone two.",
     "line": 6,
     "ptr": null,
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
     "vars": {
      "far": 2
     },
     "box": null,
     "card": "0 + 2 → far = 2",
     "arrows": null
    },
    {
     "say": "And i is at the edge. So a jump has to be taken here. One jump. The new stretch ends at stone two.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      2
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "jumps": 1,
      "edge": 2
     },
     "box": null,
     "card": "at the edge → jump 1 · edge = 2",
     "arrows": null
    },
    {
     "say": "Stone one allows three. One plus three is four. The next stretch could reach the last stone.",
     "line": 6,
     "ptr": {
      "i": 1
     },
     "hot": [
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
      "far": 4
     },
     "box": null,
     "card": "1 + 3 = 4 → far = 4",
     "arrows": null
    },
    {
     "say": "Stone two only reaches three, so far stays four. But i is at the edge again. What happens?",
     "line": 7,
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
     "box": null,
     "card": "i = 2 = edge → ?",
     "arrows": null
    },
    {
     "say": "A second jump is counted. And the edge moves to four. The last stone.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [
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
      "jumps": 2,
      "edge": 4
     },
     "box": null,
     "card": "jump 2 · edge = 4",
     "arrows": null
    },
    {
     "say": "The loop stops before the last stone. Line twelve returns two.",
     "line": 12,
     "ptr": {
      "i": 3
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
     "say": "One pass over the stones. O of n.",
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
     "card": "one pass → O(n)",
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
     "say": "A long drive is planned like this. How far does one tank reach? And from anywhere in that range, how far the next?",
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
     "card": "the fewest fuel stops on a drive",
     "arrows": null
    }
   ]
  },
  {
   "id": "gd4",
   "num": 4,
   "title": "Where to Start the Lap",
   "fn": "startBurrow",
   "ask": "The burrows stand in a <b>circle</b>. At burrow i Pip picks up <b>gets[i]</b> acorns, and the walk to the next burrow <b>costs[i]</b> acorns. Pip starts with an empty bag, and the bag may never go below zero. Return the burrow where Pip can start and walk <b>one full lap</b>, or <b>-1</b> if no start works. (If a start works, there is only one.)",
   "spec": "startBurrow([2, 1, 4], [3, 2, 1]) → 2      startBurrow([1, 1], [2, 2]) → -1",
   "start": "// gets[i]: acorns picked up at burrow i. costs[i]: acorns needed to walk from burrow i to the next one.\nfunction startBurrow(gets, costs) {\n  // your code here\n}\n",
   "plan": [
    "Trying every start, and walking a full lap from each, costs n times n. What is wasted?",
    "Pip starts at A and the bag runs empty before reaching B. What does that say about starting anywhere between A and B?",
    "When is a lap impossible from every start?"
   ],
   "hints": [
    "Walk the burrows once. Keep tank (the bag since the current start), start, and total (the sum of every gets[i] - costs[i]).",
    "If tank drops below 0 at burrow i, no start up to i can work: set tank to 0 and start to i + 1.",
    "At the end: if total is below 0 the lap is impossible (-1). Otherwise the last start is the answer."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       2,
       1,
       4
      ],
      [
       3,
       2,
       1
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       1,
       1
      ],
      [
       2,
       2
      ]
     ],
     "want": -1
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
       3,
       4,
       5,
       1,
       2
      ]
     ],
     "want": 3
    },
    {
     "args": [
      [
       5
      ],
      [
       4
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       3
      ],
      [
       4
      ]
     ],
     "want": -1
    },
    {
     "args": [
      [
       3,
       1,
       1
      ],
      [
       1,
       2,
       2
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       1,
       5,
       1
      ],
      [
       2,
       1,
       3
      ]
     ],
     "want": 1
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function startBurrow(gets, costs) {",
    "  let total = 0;",
    "  let tank = 0;",
    "  let start = 0;",
    "  for (let i = 0; i < gets.length; i++) {",
    "    const gain = gets[i] - costs[i];",
    "    total += gain;",
    "    tank += gain;",
    "    if (tank < 0) {",
    "      tank = 0;",
    "      start = i + 1;",
    "    }",
    "  }",
    "  return total >= 0 ? start : -1;",
    "}"
   ],
   "why": "The loop never walks the part of the lap before the start. Why is it still sure that Pip gets through it?",
   "topic": null,
   "world": "An electric delivery van on a round trip. At which stop should it begin, so that the battery never runs flat?",
   "view": {
    "row": [
     2,
     1,
     4
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     3,
     2,
     1
    ],
    "rowLabel": "gets",
    "row2Label": "costs",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     }
    ],
    "vars": [
     "tank",
     "start"
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
     "say": "If the bag runs empty on the way from A to B, then starting anywhere in between fails as well. So skip them all.",
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
     "card": "empty before B → skip all up to B",
     "arrows": null
    },
    {
     "say": "And if the whole lap gives at least as much as it costs, some start must work.",
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
     "card": "total ≥ 0 → a start exists",
     "arrows": null
    },
    {
     "say": "Three numbers. The total for the whole lap. The bag since the current start. And the start itself. Burrow zero.",
     "line": 4,
     "ptr": {
      "i": 0
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
      "tank": 0,
      "start": 0
     },
     "box": null,
     "card": "try start = 0",
     "arrows": null
    },
    {
     "say": "Burrow zero. Two acorns in. Three out. The bag would be at minus one.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      0,
      "d0"
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "tank": -1
     },
     "box": null,
     "card": "2 − 3 = −1",
     "arrows": null
    },
    {
     "say": "The bag went below zero. So starting at burrow zero fails. Where should Pip try next?",
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
     "card": "tank < 0 → start = ?",
     "arrows": null
    },
    {
     "say": "The next burrow. Lines ten and eleven empty the bag, and set the start to one.",
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
     "vars": {
      "tank": 0,
      "start": 1
     },
     "box": null,
     "card": "restart: start = 1",
     "arrows": null
    },
    {
     "say": "Burrow one. One in. Two out. Below zero again. So the start moves on to two.",
     "line": 11,
     "ptr": {
      "i": 1
     },
     "hot": [],
     "ok": [],
     "bad": [
      1,
      "d1"
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "tank": 0,
      "start": 2
     },
     "box": null,
     "card": "1 − 2 = −1 → start = 2",
     "arrows": null
    },
    {
     "say": "Burrow two. Four in. One out. The bag holds three.",
     "line": 8,
     "ptr": {
      "i": 2
     },
     "hot": [],
     "ok": [
      2,
      "d2"
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "tank": 3
     },
     "box": null,
     "card": "4 − 1 = +3",
     "arrows": null
    },
    {
     "say": "The total is plus one. So a lap is possible. And the last restart, burrow two, is the place. Line fourteen returns it.",
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
     "card": "whole lap: −1 −1 +3 = +1 ≥ 0",
     "arrows": null
    },
    {
     "say": "And if the total were below zero? Then the whole lap costs more than it gives. No start can work.",
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
     "card": "total < 0 → -1",
     "arrows": null
    },
    {
     "say": "One pass around the circle. O of n.",
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
     "card": "one pass → O(n)",
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
     "say": "An electric delivery van on a round trip. At which stop should it begin, so that the battery never runs flat?",
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
     "card": "where to start a round trip",
     "arrows": null
    }
   ]
  }
 ]
};
