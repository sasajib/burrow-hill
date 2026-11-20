window.CHAPTER = {
 "id": "dp1",
 "title": "Dynamic Programming: One Row",
 "sub": "CHAPTER 24 · DYNAMIC PROGRAMMING",
 "key": "burrow-ch-dp1",
 "next": {
  "href": "chapter.html?c=dp2",
  "label": "Chapter 25: DP, Two Sides"
 },
 "prev": {
  "href": "chapter.html?c=greedy",
  "label": "Chapter 23: Greedy"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "dp0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Small answers first",
   "intro": "A strange name for a plain idea: answer the small questions first, write them down, and reuse them."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "dpt1",
   "label": "Theory 1",
   "short": "T1",
   "name": "From a memo to a table",
   "intro": "The stairs again, this time with no recursion at all: one loop and one row of numbers. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "dpt2",
   "label": "Theory 2",
   "short": "T2",
   "name": "The recipe: meaning, choice, start",
   "intro": "Three questions that turn almost any of these puzzles into a loop. One guess."
  }
 ],
 "notes": {
  "w": "<h3>The words</h3><ul><li><b>Dynamic programming (DP):</b> solve every smaller version of the problem once, store the answers in a table, and build bigger answers from them.</li>\n      <li><b>It applies when</b> the same smaller questions come back again and again (you saw this with the stairs and the memo).</li>\n      <li><b>Signals:</b> \"how many ways\", \"the fewest\", \"the most\", \"the best total\", \"can it be done\", when a greedy choice is not safe.</li></ul>",
  "t1": "<h3>Key ideas</h3><ul><li><b>A memo fills the table from the top down</b> (recursion). <b>A loop fills it from the bottom up.</b> Same answers, no waiting calls.</li>\n      <li><b>Start with what you know</b> (the smallest cases), then fill each entry by looking back at earlier ones.</li>\n      <li><b>For the stairs:</b> ways[i] = ways[i - 1] + ways[i - 2].</li>\n      <li><b>Cost:</b> the number of entries, times the work to fill one.</li></ul>",
  "t2": "<h3>The recipe</h3><ul><li><b>1. Meaning:</b> say in one sentence what one entry of the table holds (\"the best haul using the burrows up to this one\").</li>\n      <li><b>2. Choice:</b> look at the last step of an answer. What were the options? Each option points back at an earlier entry.</li>\n      <li><b>3. Start:</b> the entries that need no looking back.</li>\n      <li><b>Then the loop writes itself:</b> fill the entries in an order in which everything you look back at is already there.</li>\n      <li><b>Two common meanings:</b> \"the best using everything up to here\" and \"the best that ends exactly here\".</li></ul>"
 },
 "quiz": {
  "dpt1-q1": {
   "ask": "The table holds 1, 1, 2, 3, 5 for steps 0 to 4. What goes under step 5?",
   "opts": [
    "8: you arrive from step 4 or step 3, so 5 + 3",
    "7",
    "10"
   ],
   "right": 0,
   "why": "Every entry is the sum of the two entries before it."
  },
  "dpt2-q1": {
   "ask": "For the last burrow, skipping it gives 6 and taking it gives 5 + 5. What is written in the table?",
   "opts": [
    "10: the larger of the two",
    "6",
    "16"
   ],
   "right": 0,
   "why": "The entry holds the best haul, so it is the better of the two choices."
  },
  "dp1s-q": {
   "ask": "To arrive at the top: from step 2 it costs 10 + 20, from step 1 it costs 0 + 15. What is best[3]?",
   "opts": [
    "15",
    "30",
    "45"
   ],
   "right": 0,
   "why": "The entry holds the cheapest way to arrive, so it is the smaller of the two."
  },
  "dp2s-q": {
   "ask": "For burrow 3: skipping keeps 11, taking gives 3 + 7 = 10. What is best[3]?",
   "opts": [
    "11: skipping is better here",
    "10",
    "21"
   ],
   "right": 0,
   "why": "The entry is the better of the two choices. Sometimes the best move is to leave a burrow alone."
  },
  "dp3s-q": {
   "ask": "For 6: with a bag of 1 last it is best[5] + 1 = 3, with a 4 last it is best[2] + 1 = 3. With a 3 last it is best[3] + 1. What is best[6]?",
   "opts": [
    "2",
    "3",
    "1"
   ],
   "right": 0,
   "why": "best[3] is 1, so a 3 on top of it gives 2 bags, which beats the other two options."
  },
  "dp4s-q": {
   "ask": "ways[4] is 1 so far. Using a bag of 2 adds ways[2], which the table now shows as 2. What is ways[4]?",
   "opts": [
    "3",
    "2",
    "4"
   ],
   "right": 0,
   "why": "ways[2] was already updated to 2 in this pass, which is how several 2s in one group get counted."
  },
  "dp5s-q": {
   "ask": "Before the 5, the largest entries belonging to smaller numbers are 2 (for the 4 and for the 2). What is best[4]?",
   "opts": [
    "3",
    "2",
    "5"
   ],
   "right": 0,
   "why": "The 5 extends a climb of length 2 by one more number."
  },
  "dp6s-q": {
   "ask": "There is a good cut after 4 letters, and the rest of the text from there is \"up\", which is in the list. What is ok[6]?",
   "opts": [
    "true: the whole text can be cut",
    "false",
    "It depends on \"sup\""
   ],
   "right": 0,
   "why": "One working combination is enough: a good cut followed by a word that ends at the end of the text."
  },
  "dp7s-q": {
   "ask": "The best stretch ending just before the 4 has a total of -1. For the 4: extend (-1 + 4 = 3) or start fresh (4)?",
   "opts": [
    "Start fresh: 4",
    "Extend: 3",
    "Either: they are the same"
   ],
   "right": 0,
   "why": "A negative total behind you can only pull the sum down, so a new stretch starts here."
  },
  "dp8s-q": {
   "ask": "The pile is 3 and the table says a sum of 2 can be made. What does line 9 do for s = 5?",
   "opts": [
    "Marks 5 as possible: 2 + 3",
    "Nothing",
    "Marks 2 as impossible"
   ],
   "right": 0,
   "why": "If s - x can be made, then adding the pile x makes s."
  }
 },
 "problems": [
  {
   "id": "dp1",
   "num": 1,
   "title": "The Cheapest Climb",
   "fn": "cheapestClimb",
   "ask": "Each step of the stairs has a price. You pay the price of a step when you <b>leave</b> it, and from it you may move <b>1 or 2 steps</b> up. You may start on step 0 or step 1. Return the <b>smallest total</b> needed to get past the last step.",
   "spec": "cheapestClimb([10, 15, 20]) → 15      (start on step 1, pay 15, move 2 up: past the end)",
   "start": "// cost[i] is the price of leaving step i.\nfunction cheapestClimb(cost) {\n  // your code here\n}\n",
   "plan": [
    "What should one entry of your table mean?",
    "How can you have arrived at step i?",
    "Which entries are known without any work?"
   ],
   "hints": [
    "Let best[i] be the cheapest total to ARRIVE at step i (the top is step n). best[0] and best[1] are 0.",
    "You arrive at i from i - 1 (having paid cost[i - 1]) or from i - 2 (having paid cost[i - 2]).",
    "best[i] is the smaller of best[i - 1] + cost[i - 1] and best[i - 2] + cost[i - 2]. Return best[n]."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       10,
       15,
       20
      ]
     ],
     "want": 15
    },
    {
     "args": [
      [
       1,
       100,
       1,
       1,
       1,
       100,
       1,
       1,
       100,
       1
      ]
     ],
     "want": 6
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
       0,
       0
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
       4,
       1,
       1,
       4
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
    "function cheapestClimb(cost) {",
    "  const n = cost.length;",
    "  const best = new Array(n + 1).fill(0);",
    "  for (let i = 2; i <= n; i++) {",
    "    const one = best[i - 1] + cost[i - 1];",
    "    const two = best[i - 2] + cost[i - 2];",
    "    best[i] = Math.min(one, two);",
    "  }",
    "  return best[n];",
    "}"
   ],
   "why": "The table has one more entry than there are steps. What does the extra one stand for?",
   "world": "A route planner prices a trip this way. The cheapest way to a stop, is the cheapest way to an earlier stop, plus one leg.",
   "view": {
    "row": [
     10,
     15,
     20,
     "top"
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
     ""
    ],
    "rowLabel": "cost",
    "row2Label": "best",
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
     "say": "One entry of the table means: the cheapest total to arrive at this step.",
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
     "card": "best[i] = cheapest way to arrive at i",
     "arrows": null
    },
    {
     "say": "You arrive from one step below, or from two steps below. Take the cheaper of the two.",
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
     "card": "arrive from 1 below, or 2 below",
     "arrows": null
    },
    {
     "say": "Arriving on step zero or step one is free. Pip may start on either.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [
      "d0",
      "d1"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d0": 0,
      "d1": 0
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "best[0] = best[1] = 0",
     "arrows": null
    },
    {
     "say": "Step two. From step one, that is zero plus fifteen. From step zero, zero plus ten. The cheaper is ten.",
     "line": 7,
     "ptr": {
      "i": 2
     },
     "hot": [
      0,
      1
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d2": 10
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "min(0 + 15, 0 + 10) = 10",
     "arrows": null
    },
    {
     "say": "Now the top. From step two, ten plus twenty. From step one, zero plus fifteen. Which is written down?",
     "line": 7,
     "ptr": {
      "i": 3
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
     "card": "min(10 + 20, 0 + 15) = ?",
     "arrows": null
    },
    {
     "say": "Fifteen. The table is full.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      "d3"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d3": 15
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "best[3] = 15",
     "arrows": null
    },
    {
     "say": "Line nine returns the last entry. Fifteen.",
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
     "card": "",
     "arrows": null
    },
    {
     "say": "One entry per step, and each looks back at two. O of n.",
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
     "card": "n entries × 2 looks → O(n)",
     "arrows": null
    },
    {
     "say": "The table. O of n space.",
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
     "card": "the table → O(n) space",
     "arrows": null
    },
    {
     "say": "A route planner prices a trip this way. The cheapest way to a stop, is the cheapest way to an earlier stop, plus one leg.",
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
     "card": "pricing a trip, stop by stop",
     "arrows": null
    }
   ]
  },
  {
   "id": "dp2",
   "num": 2,
   "title": "Never Two in a Row",
   "fn": "bestHaul",
   "ask": "The burrows stand in a row and seeds[i] is what burrow i holds. Moss may empty any burrows, but <b>never two that are side by side</b>. Return the <b>most seeds</b> Moss can collect.",
   "spec": "bestHaul([2, 7, 9, 3, 1]) → 12      (burrows 0, 2 and 4: 2 + 9 + 1)",
   "start": "// seeds[i] is the number of seeds in burrow i.\nfunction bestHaul(seeds) {\n  // your code here\n}\n",
   "plan": [
    "What should one entry of the table mean?",
    "Look at the last burrow of a stretch. What are the two choices for it?",
    "What does each choice leave you free to do with the burrows before it?"
   ],
   "hints": [
    "Let best[i] be the most seeds using only burrows 0 to i.",
    "Skip burrow i: the answer is best[i - 1]. Take it: seeds[i] + best[i - 2], because burrow i - 1 must then be left alone.",
    "best[i] is the larger of the two. Treat a missing entry (before the start) as 0."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       2,
       7,
       9,
       3,
       1
      ]
     ],
     "want": 12
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
       5,
       1,
       1,
       5
      ]
     ],
     "want": 10
    },
    {
     "args": [
      [
       1,
       2
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       2,
       1,
       1,
       2
      ]
     ],
     "want": 4
    },
    {
     "args": [
      [
       4,
       9,
       4
      ]
     ],
     "want": 9
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function bestHaul(seeds) {",
    "  const best = [];",
    "  for (let i = 0; i < seeds.length; i++) {",
    "    const skip = i >= 1 ? best[i - 1] : 0;",
    "    const take = seeds[i] + (i >= 2 ? best[i - 2] : 0);",
    "    best.push(Math.max(skip, take));",
    "  }",
    "  return best.length ? best[best.length - 1] : 0;",
    "}"
   ],
   "why": "On [4, 9, 4], taking the biggest burrow first is right. Find three numbers for which \"biggest first\" is wrong.",
   "world": "A gardener plans beds like this, when plants in two beds side by side would crowd each other.",
   "view": {
    "row": [
     2,
     7,
     9,
     3,
     1
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
    "rowLabel": "seeds",
    "row2Label": "best",
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
     "say": "One entry means: the most seeds, using only the burrows up to this one.",
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
     "card": "best[i] = the most, up to burrow i",
     "arrows": null
    },
    {
     "say": "For the last burrow, skip it, and keep the entry before. Or take it, and add the entry two before.",
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
     "card": "skip → best[i−1] · take → + best[i−2]",
     "arrows": null
    },
    {
     "say": "Burrow zero alone. Take it. Two.",
     "line": 6,
     "ptr": {
      "i": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d0": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "burrow 0 alone: 2",
     "arrows": null
    },
    {
     "say": "Burrow one. Skipping keeps two. Taking gives seven. Seven is better.",
     "line": 6,
     "ptr": {
      "i": 1
     },
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d1": 7
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "max(skip 2, take 7) = 7",
     "arrows": null
    },
    {
     "say": "Burrow two. Skipping keeps seven. Taking gives nine, plus the entry two back. Eleven.",
     "line": 6,
     "ptr": {
      "i": 2
     },
     "hot": [
      2,
      "d0"
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d2": 11
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "max(skip 7, take 9 + 2) = 11",
     "arrows": null
    },
    {
     "say": "Burrow three. Skipping keeps eleven. Taking gives three, plus seven. Which is written down?",
     "line": 6,
     "ptr": {
      "i": 3
     },
     "hot": [
      3,
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
     "box": null,
     "card": "max(skip 11, take 3 + 7) = ?",
     "arrows": null
    },
    {
     "say": "Eleven. Skipping wins. And burrow four. Skip keeps eleven. Take gives one, plus eleven. Twelve.",
     "line": 6,
     "ptr": {
      "i": 4
     },
     "hot": [
      4,
      "d2"
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d3": 11,
      "d4": 12
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "max(skip 11, take 1 + 11) = 12",
     "arrows": null
    },
    {
     "say": "Line eight returns the last entry. Twelve. From burrows zero, two and four.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      2,
      4,
      "d4"
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
     "say": "One entry per burrow, each from two earlier entries. O of n.",
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
     "card": "n entries → O(n)",
     "arrows": null
    },
    {
     "say": "The table. O of n. Two variables would also do.",
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
     "card": "the table → O(n) space",
     "arrows": null
    },
    {
     "say": "A gardener plans beds like this, when plants in two beds side by side would crowd each other.",
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
     "card": "planting beds, never 2 in a row",
     "arrows": null
    }
   ]
  },
  {
   "id": "dp3",
   "num": 3,
   "title": "The Fewest Bags",
   "fn": "fewestBags",
   "ask": "Pip owes <b>amount</b> seeds and pays with bags. Each bag size may be used <b>as often as needed</b>. Return the <b>fewest bags</b> that add up to exactly amount, or <b>-1</b> if it cannot be done.",
   "spec": "fewestBags([1, 3, 4], 6) → 2      (3 + 3)      fewestBags([2], 3) → -1",
   "start": "// bags is an array of different bag sizes. amount is 0 or more.\nfunction fewestBags(bags, amount) {\n  // your code here\n}\n",
   "plan": [
    "Taking the biggest bag first gives 4 + 1 + 1 here. So greedy is out. What should one entry of a table mean?",
    "Think about the LAST bag of the best answer. What is left once you take it away?",
    "What is known at the start, and what marks an amount that cannot be paid?"
   ],
   "hints": [
    "Let best[a] be the fewest bags for an amount of a. best[0] is 0; start the others at Infinity.",
    "For each amount a from 1 up, try every bag that fits: best[a - bag] + 1.",
    "Keep the smallest. At the end, Infinity means it cannot be done: return -1."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       3,
       4
      ],
      6
     ],
     "want": 2
    },
    {
     "args": [
      [
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
      0
     ],
     "want": 0
    },
    {
     "args": [
      [
       5,
       2
      ],
      11
     ],
     "want": 4
    },
    {
     "args": [
      [
       25,
       10,
       5,
       1
      ],
      41
     ],
     "want": 4
    },
    {
     "args": [
      [
       2,
       5
      ],
      1
     ],
     "want": -1
    },
    {
     "args": [
      [
       3,
       7
      ],
      14
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
    "function fewestBags(bags, amount) {",
    "  const best = new Array(amount + 1).fill(Infinity);",
    "  best[0] = 0;",
    "  for (let a = 1; a <= amount; a++) {",
    "    for (const bag of bags) {",
    "      if (bag <= a && best[a - bag] + 1 < best[a]) {",
    "        best[a] = best[a - bag] + 1;",
    "      }",
    "    }",
    "  }",
    "  return best[amount] === Infinity ? -1 : best[amount];",
    "}"
   ],
   "why": "Why does Infinity work as the starting value, even inside best[a - bag] + 1?",
   "world": "A vending machine gives change with the fewest coins this way, whatever coins it happens to hold.",
   "view": {
    "row": [
     0,
     1,
     2,
     3,
     4,
     5,
     6
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
     "",
     "",
     ""
    ],
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "a",
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
     "say": "The last bag is a one, a three, or a four. Take it away, and what is left is the same puzzle, for a smaller amount.",
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
     "card": "last bag b → 1 + best[amount − b]",
     "arrows": null
    },
    {
     "say": "So answer every amount, from zero upwards. Each one looks back at smaller amounts.",
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
     "card": "fill the table from 0 upwards",
     "arrows": null
    },
    {
     "say": "The bottom row is the amount owed. The top row is the fewest bags for it. Owing nothing needs no bags.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [
      "d0"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d0": 0
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "top row: fewest bags · best[0] = 0",
     "arrows": null
    },
    {
     "say": "One needs one bag. Two needs two bags of one.",
     "line": 7,
     "ptr": {
      "a": 2
     },
     "hot": [
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d1": 1,
      "d2": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 → 1 bag · 2 → 1 + 1",
     "arrows": null
    },
    {
     "say": "Three and four each have a bag of exactly that size. One bag.",
     "line": 7,
     "ptr": {
      "a": 4
     },
     "hot": [
      3,
      4
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d3": 1,
      "d4": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "3 and 4: one bag each",
     "arrows": null
    },
    {
     "say": "Five. A one, on top of the answer for four. Two bags.",
     "line": 7,
     "ptr": {
      "a": 5
     },
     "hot": [
      5,
      "d4"
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d5": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "5 = 4 + a bag of 1 → 2",
     "arrows": null
    },
    {
     "say": "Six. With a one last, it is three bags. With a three last, one plus the entry for three. With a four last, one plus the entry for two. Which is the fewest?",
     "line": 6,
     "ptr": {
      "a": 6
     },
     "hot": [
      6,
      "d5",
      "d3",
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
     "card": "last 1 → 3 · last 3 → ? · last 4 → 3",
     "arrows": null
    },
    {
     "say": "Two. A three, on top of the single bag that pays three.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      "d6",
      "d3"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d6": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "best[6] = best[3] + 1 = 2",
     "arrows": null
    },
    {
     "say": "Line eleven returns it. Two bags. The answer that greedy missed.",
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
     "say": "Every amount tries every bag. O of amount, times bags.",
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
     "card": "O(amount × bags)",
     "arrows": null
    },
    {
     "say": "The table has one entry per amount.",
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
     "card": "the table → O(amount) space",
     "arrows": null
    },
    {
     "say": "A vending machine gives change with the fewest coins this way, whatever coins it happens to hold.",
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
     "card": "change with the fewest coins",
     "arrows": null
    }
   ]
  },
  {
   "id": "dp4",
   "num": 4,
   "title": "How Many Ways to Pay?",
   "fn": "countWays",
   "ask": "Return the <b>number of different groups of bags</b> that add up to exactly amount. Each bag size may be used as often as needed, and the <b>order does not count</b>: 1 + 2 and 2 + 1 are the same group.",
   "spec": "countWays([1, 2], 4) → 3      (1+1+1+1, 1+1+2, 2+2)",
   "start": "// bags is an array of different bag sizes. amount is 0 or more.\nfunction countWays(bags, amount) {\n  // your code here\n}\n",
   "plan": [
    "How many ways are there with only the first bag size?",
    "Now allow a second size. Which new ways appear for an amount a?",
    "What makes sure that 1 + 2 and 2 + 1 are counted once?"
   ],
   "hints": [
    "Let ways[a] be the number of groups for amount a, with the bag sizes allowed so far. ways[0] is 1 (the empty group).",
    "Add the bag sizes one at a time. For a new size bag, and a from bag upwards: ways[a] += ways[a - bag].",
    "The loop over the bag sizes must be the OUTER loop."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       2
      ],
      4
     ],
     "want": 3
    },
    {
     "args": [
      [
       2
      ],
      3
     ],
     "want": 0
    },
    {
     "args": [
      [
       1,
       2,
       5
      ],
      5
     ],
     "want": 4
    },
    {
     "args": [
      [
       3
      ],
      0
     ],
     "want": 1
    },
    {
     "args": [
      [
       1
      ],
      7
     ],
     "want": 1
    },
    {
     "args": [
      [
       2,
       3
      ],
      6
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
      4
     ],
     "want": 4
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function countWays(bags, amount) {",
    "  const ways = new Array(amount + 1).fill(0);",
    "  ways[0] = 1;",
    "  for (const bag of bags) {",
    "    for (let a = bag; a <= amount; a++) {",
    "      ways[a] += ways[a - bag];",
    "    }",
    "  }",
    "  return ways[amount];",
    "}"
   ],
   "why": "Swap the two loops (amounts outside, bags inside). The answer for [1, 2] and 4 becomes 5. Which groups are now counted more than once?",
   "world": "A bank counts the ways to break a note into smaller ones like this.",
   "view": {
    "row": [
     0,
     1,
     2,
     3,
     4
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
    "rowLabel": "owes",
    "row2Label": "ways",
    "ptrs": [
     {
      "id": "a",
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
     "say": "Allow one kind of bag at a time. A new kind adds new ways. Use it once, and then pay what is left.",
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
     "card": "new bag b: ways[a] += ways[a − b]",
     "arrows": null
    },
    {
     "say": "Because the kinds are added in a fixed order, a group can never be counted twice in a different order.",
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
     "card": "one kind at a time → no repeats",
     "arrows": null
    },
    {
     "say": "There is one way to pay nothing. Use no bags.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [
      "d0"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d0": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "ways[0] = 1",
     "arrows": null
    },
    {
     "say": "Only bags of one. Every amount has exactly one way.",
     "line": 6,
     "ptr": null,
     "hot": [
      1,
      2,
      3,
      4
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d1": 1,
      "d2": 1,
      "d3": 1,
      "d4": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "only 1s: one way each",
     "arrows": null
    },
    {
     "say": "Now allow twos. Amount two. Use a two, and pay the rest, which is nothing. One more way.",
     "line": 6,
     "ptr": {
      "a": 2
     },
     "hot": [
      2,
      "d0"
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d2": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "ways[2] = 1 + ways[0] = 2",
     "arrows": null
    },
    {
     "say": "Amount three. Use a two, and pay the remaining one. One more way.",
     "line": 6,
     "ptr": {
      "a": 3
     },
     "hot": [
      3,
      "d1"
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d3": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "ways[3] = 1 + ways[1] = 2",
     "arrows": null
    },
    {
     "say": "Amount four. Use a two, and pay the remaining two. How many ways were there to pay two?",
     "line": 6,
     "ptr": {
      "a": 4
     },
     "hot": [
      4,
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
     "card": "ways[4] = 1 + ways[2] = ?",
     "arrows": null
    },
    {
     "say": "Two. So four has three ways. Four ones. Two ones and a two. Two twos.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      "d4"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d4": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1111 · 112 · 22",
     "arrows": null
    },
    {
     "say": "Line nine returns three.",
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
     "card": "",
     "arrows": null
    },
    {
     "say": "And why is the loop over the kinds on the outside? So that every group is built in one fixed order of kinds.",
     "line": 4,
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
     "card": "bags outside → order ignored",
     "arrows": null
    },
    {
     "say": "Every kind of bag passes over every amount. O of amount, times bags.",
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
     "card": "O(amount × bags)",
     "arrows": null
    },
    {
     "say": "One entry per amount.",
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
     "card": "the table → O(amount) space",
     "arrows": null
    },
    {
     "say": "A bank counts the ways to break a note into smaller ones like this.",
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
     "card": "ways to break a banknote",
     "arrows": null
    }
   ]
  },
  {
   "id": "dp5",
   "num": 5,
   "title": "The Longest Climb",
   "fn": "longestClimb",
   "ask": "Pick some of the numbers, <b>keeping their order</b>, so that each one is <b>bigger than the one before</b>. Return the largest number of numbers you can pick. (They do not have to be side by side.)",
   "spec": "longestClimb([3, 1, 4, 2, 5]) → 3      (for example 1, 2, 5)",
   "start": "function longestClimb(nums) {\n  // your code here\n}\n",
   "plan": [
    "What should one entry of the table mean? \"The best up to here\" turns out to be awkward. Try \"the best that ends exactly here\".",
    "A climb ends on nums[i]. What could the number before it have been?",
    "Where is the final answer in the table?"
   ],
   "hints": [
    "Let best[i] be the longest climb that ENDS on nums[i]. Every entry starts at 1.",
    "For each earlier j with nums[j] < nums[i], the climb ending at j can be extended: best[j] + 1.",
    "best[i] is the largest of those. The answer is the largest entry in the whole table."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       3,
       1,
       4,
       2,
       5
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
       7
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       5,
       4,
       3
      ]
     ],
     "want": 1
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
     "want": 4
    },
    {
     "args": [
      [
       2,
       2,
       2
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       10,
       9,
       2,
       5,
       3,
       7,
       101,
       18
      ]
     ],
     "want": 4
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function longestClimb(nums) {",
    "  const best = new Array(nums.length).fill(1);",
    "  let top = 0;",
    "  for (let i = 0; i < nums.length; i++) {",
    "    for (let j = 0; j < i; j++) {",
    "      if (nums[j] < nums[i] && best[j] + 1 > best[i]) {",
    "        best[i] = best[j] + 1;",
    "      }",
    "    }",
    "    top = Math.max(top, best[i]);",
    "  }",
    "  return top;",
    "}"
   ],
   "why": "Why is the answer the largest entry, and not simply the last one?",
   "world": "A fitness app finds your longest series of improving results this way, skipping the bad days.",
   "view": {
    "row": [
     3,
     1,
     4,
     2,
     5
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     1,
     1,
     1,
     1,
     1
    ],
    "rowLabel": "nums",
    "row2Label": "best",
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
     "say": "One entry means: the longest climb that ends exactly on this number.",
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
     "card": "best[i] = longest climb ending at i",
     "arrows": null
    },
    {
     "say": "It can follow any smaller number before it. So take the best of those entries, plus one.",
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
     "card": "best smaller one before it, + 1",
     "arrows": null
    },
    {
     "say": "Alone, every number is a climb of one. So the table starts with ones. The three and the one stay at one.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [
      "d0",
      "d1"
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
     "card": "alone: a climb of 1",
     "arrows": null
    },
    {
     "say": "The four. Both numbers before it are smaller. Each has a one. So the four gets two.",
     "line": 7,
     "ptr": {
      "i": 2
     },
     "hot": [
      2,
      0,
      1
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d2": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "4 follows 3 or 1 → 1 + 1 = 2",
     "arrows": null
    },
    {
     "say": "The two. Only the one before it is smaller. So it gets two as well.",
     "line": 7,
     "ptr": {
      "i": 3
     },
     "hot": [
      3,
      1
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d3": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "2 follows 1 → 2",
     "arrows": null
    },
    {
     "say": "The five. Every number before it is smaller. The best entries among them are the two twos. What does the five get?",
     "line": 6,
     "ptr": {
      "i": 4
     },
     "hot": [
      4,
      "d2",
      "d3"
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
     "card": "5 follows a climb of 2 → ?",
     "arrows": null
    },
    {
     "say": "Three. One, two, five. Or one, four, five.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      "d4"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d4": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "best[4] = 2 + 1 = 3",
     "arrows": null
    },
    {
     "say": "Line twelve returns the largest entry of the table. Three.",
     "line": 12,
     "ptr": null,
     "hot": [],
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
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Each number looks back at every number before it. O of n squared.",
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
     "card": "look back at all → O(n²)",
     "arrows": null
    },
    {
     "say": "The table. O of n space.",
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
     "card": "the table → O(n) space",
     "arrows": null
    },
    {
     "say": "A fitness app finds your longest series of improving results this way, skipping the bad days.",
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
     "card": "longest run of improving results",
     "arrows": null
    }
   ]
  },
  {
   "id": "dp6",
   "num": 6,
   "title": "Words Without Spaces",
   "fn": "canSplit",
   "ask": "Someone typed a text without spaces. Return <b>true</b> if it can be cut into words from the list, so that <b>every letter belongs to a word</b>. A word may be used more than once.",
   "spec": "canSplit(\"catsup\", [\"cat\", \"cats\", \"up\"]) → true      (\"cats\" + \"up\")      canSplit(\"catsup\", [\"cat\", \"up\"]) → false",
   "start": "// text is a string. words is an array of strings.\nfunction canSplit(text, words) {\n  // your code here\n}\n",
   "plan": [
    "\"cat\" fits at the start, but then \"sup\" is left. So the first word that fits is not always right. What could a table remember?",
    "When is a cut after i letters a \"good\" cut?",
    "What is the good cut that needs no work?"
   ],
   "hints": [
    "Let ok[i] be true if the first i letters can be cut into words. ok[0] is true (nothing to cut).",
    "For each end from 1 to the length: look for a start before it with ok[start] true and text.slice(start, end) in the word list.",
    "Put the words in a Set for fast look-ups. Return ok[text.length]."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "catsup",
      [
       "cat",
       "cats",
       "up"
      ]
     ],
     "want": true
    },
    {
     "args": [
      "catsup",
      [
       "cat",
       "up"
      ]
     ],
     "want": false
    },
    {
     "args": [
      "",
      [
       "a"
      ]
     ],
     "want": true
    },
    {
     "args": [
      "aaa",
      [
       "aa"
      ]
     ],
     "want": false
    },
    {
     "args": [
      "aaaa",
      [
       "aa"
      ]
     ],
     "want": true
    },
    {
     "args": [
      "applepie",
      [
       "pie",
       "apple"
      ]
     ],
     "want": true
    },
    {
     "args": [
      "abcd",
      [
       "a",
       "abc",
       "b",
       "cd"
      ]
     ],
     "want": true
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function canSplit(text, words) {",
    "  const set = new Set(words);",
    "  const ok = new Array(text.length + 1).fill(false);",
    "  ok[0] = true;",
    "  for (let end = 1; end <= text.length; end++) {",
    "    for (let start = 0; start < end; start++) {",
    "      if (ok[start] && set.has(text.slice(start, end))) {",
    "        ok[end] = true;",
    "        break;",
    "      }",
    "    }",
    "  }",
    "  return ok[text.length];",
    "}"
   ],
   "why": "Backtracking could also solve this. On which kind of input would it be far slower than the table?",
   "world": "A search box does this when you type without spaces. It works out where the words could end.",
   "view": {
    "row": [
     "c",
     "a",
     "t",
     "s",
     "u",
     "p",
     "end"
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
     "",
     "",
     ""
    ],
    "rowLabel": "text",
    "row2Label": "ok",
    "ptrs": [],
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
     "say": "Mark every place where the text so far can be cut into words. Call that a good cut.",
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
     "card": "ok[i] = the first i letters cut fine",
     "arrows": null
    },
    {
     "say": "A place is a good cut, if an earlier good cut is followed by a word that ends exactly here.",
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
     "card": "earlier ✓ + a word ending here → ✓",
     "arrows": null
    },
    {
     "say": "Before the first letter there is nothing to cut. That is a good cut.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [
      "d0"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d0": "✓"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "before \"c\": nothing to cut ✓",
     "arrows": null
    },
    {
     "say": "After three letters. From the start, c a t is a word. A good cut.",
     "line": 8,
     "ptr": null,
     "hot": [
      0,
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d3": "✓"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "\"cat\" → ✓ after 3 letters",
     "arrows": null
    },
    {
     "say": "After four letters. From the start, cats is a word too. Another good cut.",
     "line": 8,
     "ptr": null,
     "hot": [
      0,
      1,
      2,
      3
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d4": "✓"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "\"cats\" → ✓ after 4 letters",
     "arrows": null
    },
    {
     "say": "Now the end. From the cut after three, s u p is not a word. From the cut after four, u p. What does that give?",
     "line": 7,
     "ptr": null,
     "hot": [
      4,
      5,
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
     "card": "✓ after 4 · \"up\" is a word → ?",
     "arrows": null
    },
    {
     "say": "A good cut at the very end. Line thirteen returns true.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [
      "d6"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d6": "✓"
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
     "say": "The cut after cat led nowhere. But the table kept both cuts. So nothing had to be taken back.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      "d3"
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "after \"cat\": \"sup\" is no word",
     "arrows": null
    },
    {
     "say": "Every end tries every start. O of n squared pairs, and each one slices a word.",
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
     "card": "every (start, end) pair → O(n²)",
     "arrows": null
    },
    {
     "say": "The table, and the set of words.",
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
     "card": "table + set of words",
     "arrows": null
    },
    {
     "say": "A search box does this when you type without spaces. It works out where the words could end.",
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
     "card": "typing without spaces",
     "arrows": null
    }
   ]
  },
  {
   "id": "dp7",
   "num": 7,
   "title": "The Best Stretch",
   "fn": "bestStretch",
   "ask": "Return the largest total of any <b>stretch</b> of the array: one or more numbers <b>side by side</b>. The array has at least one number, and some may be negative.",
   "spec": "bestStretch([2, -3, 4, -1, 2]) → 5      (4 - 1 + 2)",
   "start": "// nums has at least one number.\nfunction bestStretch(nums) {\n  // your code here\n}\n",
   "plan": [
    "Trying every stretch costs n squared. What should one entry of a table mean instead?",
    "The best stretch that ends at i either continues an earlier stretch, or...?",
    "When is continuing a bad idea?"
   ],
   "hints": [
    "Let here be the best total of a stretch that ENDS at the current number.",
    "Moving on to nums[i]: either extend (here + nums[i]) or start fresh (nums[i]). Take the larger.",
    "Keep the best value of here seen so far. Only the previous entry is needed, so one variable replaces the table."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       2,
       -3,
       4,
       -1,
       2
      ]
     ],
     "want": 5
    },
    {
     "args": [
      [
       -2
      ]
     ],
     "want": -2
    },
    {
     "args": [
      [
       -3,
       -1,
       -2
      ]
     ],
     "want": -1
    },
    {
     "args": [
      [
       1,
       2,
       3
      ]
     ],
     "want": 6
    },
    {
     "args": [
      [
       5,
       -9,
       6
      ]
     ],
     "want": 6
    },
    {
     "args": [
      [
       4,
       -1,
       2,
       1,
       -5,
       4
      ]
     ],
     "want": 6
    },
    {
     "args": [
      [
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
    "function bestStretch(nums) {",
    "  let here = nums[0];",
    "  let best = nums[0];",
    "  for (let i = 1; i < nums.length; i++) {",
    "    here = Math.max(nums[i], here + nums[i]);",
    "    best = Math.max(best, here);",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "With only negative numbers the answer is the least negative one. Which line makes sure of that?",
   "world": "A trading app finds the best run of days in a row like this.",
   "view": {
    "row": [
     2,
     -3,
     4,
     -1,
     2
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
    "row2Label": "here",
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
     "say": "One entry means: the best total of a stretch that ends exactly on this number.",
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
     "card": "here = best stretch ending at i",
     "arrows": null
    },
    {
     "say": "Either it extends the stretch before it. Or it starts fresh. Starting fresh wins when the past is negative.",
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
     "card": "extend, or start fresh",
     "arrows": null
    },
    {
     "say": "The first number. The only stretch ending here is the two itself.",
     "line": 3,
     "ptr": {
      "i": 0
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d0": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "best": 2
     },
     "box": null,
     "card": "ending at the 2: 2",
     "arrows": null
    },
    {
     "say": "Minus three. Extending gives two minus three. Minus one. That still beats minus three alone.",
     "line": 5,
     "ptr": {
      "i": 1
     },
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d1": -1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "max(−3, 2 − 3) = −1",
     "arrows": null
    },
    {
     "say": "The four. Extending gives minus one plus four. Three. Starting fresh gives four. Which is kept?",
     "line": 5,
     "ptr": {
      "i": 2
     },
     "hot": [
      2,
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
     "box": null,
     "card": "max(4, −1 + 4) = ?",
     "arrows": null
    },
    {
     "say": "Four. A negative past is dropped. And four is the best so far.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d2": 4
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "best": 4
     },
     "box": null,
     "card": "a fresh start beats a negative past",
     "arrows": null
    },
    {
     "say": "Minus one. Extend to three. Then the two. Extend to five. A new best.",
     "line": 6,
     "ptr": {
      "i": 4
     },
     "hot": [
      3,
      4
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d3": 3,
      "d4": 5
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "best": 5
     },
     "box": null,
     "card": "4 − 1 = 3 · 3 + 2 = 5",
     "arrows": null
    },
    {
     "say": "Line eight returns five. The stretch from the four to the end.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [
      2,
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
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One pass. O of n.",
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
     "say": "Only the last entry is ever needed. Two numbers. O of one space.",
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
     "card": "2 numbers → O(1) space",
     "arrows": null
    },
    {
     "say": "A trading app finds the best run of days in a row like this.",
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
     "card": "the best run of days in a row",
     "arrows": null
    }
   ]
  },
  {
   "id": "dp8",
   "num": 8,
   "title": "Two Equal Shares",
   "fn": "canShare",
   "ask": "Return <b>true</b> if the numbers (whole and positive) can be divided into <b>two groups with the same total</b>. Every number goes into exactly one group.",
   "spec": "canShare([2, 3, 1, 4]) → true      (2 + 3 and 1 + 4)      canShare([1, 2, 5]) → false",
   "start": "// nums holds positive whole numbers, at least one.\nfunction canShare(nums) {\n  // your code here\n}\n",
   "plan": [
    "If the two groups are equal, what must one group add up to? When is that impossible at once?",
    "So the question becomes: can some of the numbers add up to exactly that value?",
    "Which totals can be made with no numbers? With the first number? With the first two?"
   ],
   "hints": [
    "If the total is odd, return false. Otherwise the target is half of the total.",
    "Keep can[s]: true if some of the numbers seen so far add up to s. can[0] is true.",
    "For each number x, go through s from half DOWN to x: if can[s - x] is true, set can[s] to true. Return can[half]."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       2,
       3,
       1,
       4
      ]
     ],
     "want": true
    },
    {
     "args": [
      [
       1,
       2,
       5
      ]
     ],
     "want": false
    },
    {
     "args": [
      [
       1,
       1
      ]
     ],
     "want": true
    },
    {
     "args": [
      [
       3
      ]
     ],
     "want": false
    },
    {
     "args": [
      [
       1,
       5,
       11,
       5
      ]
     ],
     "want": true
    },
    {
     "args": [
      [
       2,
       2,
       3
      ]
     ],
     "want": false
    },
    {
     "args": [
      [
       1,
       2,
       3,
       4,
       5,
       7
      ]
     ],
     "want": true
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function canShare(nums) {",
    "  const total = nums.reduce((a, b) => a + b, 0);",
    "  if (total % 2 === 1) return false;",
    "  const half = total / 2;",
    "  const can = new Array(half + 1).fill(false);",
    "  can[0] = true;",
    "  for (const x of nums) {",
    "    for (let s = half; s >= x; s--) {",
    "      if (can[s - x]) can[s] = true;",
    "    }",
    "  }",
    "  return can[half];",
    "}"
   ],
   "why": "Run the inner loop upwards instead, on [2] with a half of 4 (pretend). Which sum becomes \"possible\" although it is not?",
   "world": "Splitting a bill, or the chores, into two equal shares is exactly this question.",
   "view": {
    "row": [
     0,
     1,
     2,
     3,
     4,
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
     "",
     ""
    ],
    "rowLabel": "sum",
    "row2Label": "can",
    "ptrs": [],
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
     "say": "Two equal shares means: some of the piles add up to exactly half of the total.",
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
     "card": "find a group that sums to half",
     "arrows": null
    },
    {
     "say": "So keep a table of every sum that can be made so far. Each new pile makes more sums possible.",
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
     "card": "a table of the sums you can make",
     "arrows": null
    },
    {
     "say": "The total is ten. Even. So each share must be five.",
     "line": 4,
     "ptr": null,
     "hot": [
      5
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
     "card": "total 10 → each share is 5",
     "arrows": null
    },
    {
     "say": "A sum of zero can always be made. Take nothing.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      "d0"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d0": "✓"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "sum 0: take nothing ✓",
     "arrows": null
    },
    {
     "say": "The first pile is a two. Zero was possible. So zero plus two is possible.",
     "line": 9,
     "ptr": null,
     "hot": [
      2,
      "d0"
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d2": "✓"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "pile 2: 0 + 2 → sum 2 ✓",
     "arrows": null
    },
    {
     "say": "The next pile is a three. Line eight starts at five, and asks: is five minus three possible?",
     "line": 9,
     "ptr": null,
     "hot": [
      5,
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
     "card": "pile 3 · sum 2 is ✓ → sum 5 ?",
     "arrows": null
    },
    {
     "say": "Yes. Two plus three makes five. And three alone is possible as well.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [
      "d5"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d5": "✓",
      "d3": "✓"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "2 + 3 = 5 ✓ · 3 alone ✓",
     "arrows": null
    },
    {
     "say": "Five can be made. Line twelve returns true.",
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
     "say": "Why does line eight count downwards? So that one pile is never used twice in the same pass.",
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
     "card": "sums go down → each pile used once",
     "arrows": null
    },
    {
     "say": "Every pile passes over every sum up to half. O of n, times half.",
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
     "card": "O(n × half)",
     "arrows": null
    },
    {
     "say": "One entry per sum.",
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
     "card": "the table → O(half) space",
     "arrows": null
    },
    {
     "say": "Splitting a bill, or the chores, into two equal shares is exactly this question.",
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
     "card": "two equal shares of a bill",
     "arrows": null
    }
   ]
  }
 ]
};
