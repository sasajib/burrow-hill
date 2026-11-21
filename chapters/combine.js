window.CHAPTER = {
 "id": "combine",
 "title": "Combining Tools",
 "sub": "CHAPTER 27 · COMBINING TOOLS",
 "key": "burrow-ch-combine",
 "next": {
  "href": "chapter.html?c=mock",
  "label": "Mock Interviews"
 },
 "prev": {
  "href": "chapter.html?c=bits",
  "label": "Chapter 26: Bit Tricks"
 },
 "mock": false,
 "target": null,
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "cm0",
   "label": "Welcome",
   "short": "Intro",
   "name": "One tool is rarely enough",
   "intro": "Real problems need two steps: one tool gets the data ready, a second one answers."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "cmt1",
   "label": "The one lesson",
   "short": "T1",
   "name": "Prepare once, answer fast",
   "intro": "How to split a problem into a preparing step and an answering step. One guess."
  }
 ],
 "notes": {
  "w": "<h3>The idea</h3><ul><li><b>One tool gets the data ready</b> (sort it, total it, group it, build a graph).</li>\n      <li><b>A second tool answers the question</b> (binary search, a lookup, a walk).</li>\n      <li><b>Signals:</b> \"many questions about the same data\", \"for each … find …\", and any puzzle where your first idea is a loop inside a loop.</li></ul>",
  "t1": "<h3>Common pairs</h3><ul><li><b>Sort, then binary search</b> or two pointers: \"how many are below x?\", \"is there a pair?\".</li>\n      <li><b>Running totals, then binary search:</b> \"how many fit in this budget?\".</li>\n      <li><b>Group in a map, then search each group:</b> \"what was the value at time t?\".</li>\n      <li><b>Running totals over a grid, then four lookups:</b> \"the sum of this block\".</li>\n      <li><b>A stack, plus a greedy rule:</b> \"remove k things to make the smallest …\".</li>\n      <li><b>A walk, plus a memo:</b> \"the longest path from every square\".</li></ul>\n      <p><b>The two questions to ask:</b> what do I prepare once? What answers one question fast?</p>"
 },
 "quiz": {
  "cmt1-q1": {
   "ask": "Many questions each ask for the sum of a block of a grid. Which pair of tools fits best?",
   "opts": [
    "Running totals over the grid first, then a few lookups per question",
    "Sort the grid first, then binary search",
    "A stack first, then a queue"
   ],
   "right": 0,
   "why": "Totals from the corner to every square are built once. After that, any block is four lookups, however large it is."
  },
  "cm1s-q": {
   "ask": "The map holds 10 → 1, 20 → 2 and 40 → 3. What is rank.get(40)?",
   "opts": [
    "3",
    "1",
    "4"
   ],
   "right": 0,
   "why": "40 is the third different score in sorted order, so its rank is 3. Both 40s get the same answer."
  },
  "cm2s-q": {
   "ask": "The budget is 6. total[3] is 10. low is 3 and high is 4. What happens?",
   "opts": [
    "high becomes 3",
    "low becomes 4",
    "The loop returns 10"
   ],
   "right": 0,
   "why": "10 is larger than the budget, so sack 3 does not fit. Line 13 moves high down to mid, which is 3."
  },
  "cm3s-q": {
   "ask": "The question is day 8. list[2] is the change of day 9. low is 2 and high is 3. What happens?",
   "opts": [
    "high becomes 2",
    "low becomes 3",
    "It returns the price of day 9"
   ],
   "right": 0,
   "why": "Day 9 is after day 8, so that change has not happened yet. Line 13 moves high down to 2."
  },
  "cm4s-q": {
   "ask": "cur is \"b\". The stack gives back before = \"a\" and times = 2. What is before + cur.repeat(times)?",
   "opts": [
    "\"abb\"",
    "\"abab\"",
    "\"bba\""
   ],
   "right": 0,
   "why": "The inner text \"b\" is repeated twice, giving \"bb\". Then it is glued after the parked text \"a\"."
  },
  "cm5s-q": {
   "ask": "The stack is 1, 4. The new digit is 3 and k is 2. What does the loop on line 4 do?",
   "opts": [
    "Pops the 4, and k becomes 1",
    "Pushes the 3 on top of the 4",
    "Pops the 4 and the 1"
   ],
   "right": 0,
   "why": "The top, 4, is larger than 3, so it is popped. Then the top is 1, which is not larger than 3, so the loop stops."
  },
  "cm6s-q": {
   "ask": "The row above (1, 2, 3) and the column on the left (1, 4, 7) were both taken away. What is wrong?",
   "opts": [
    "The corner square, 1, was taken away twice",
    "Nothing: 45 − 6 − 12 is the answer",
    "The 5 was taken away by mistake"
   ],
   "right": 0,
   "why": "The square in the top-left corner belongs to both the row above and the column on the left. So it must be added back once."
  },
  "cm7s-q": {
   "ask": "cog already took dog out of the unused set. Then dot is checked. Is dog added to the next level a second time?",
   "opts": [
    "No: dog is no longer in the set",
    "Yes: once for each word that reaches it",
    "No: because dot comes later in the alphabet"
   ],
   "right": 0,
   "why": "Line 14 deleted dog from the set when cog reached it. Line 8 only loops over words that are still unused, so dot never sees it."
  },
  "cm8s-q": {
   "ask": "walk is called for the square with 5 a second time. Its answer, 5, is in the memo. What happens?",
   "opts": [
    "Line 5 returns 5 at once",
    "It walks 5 → 4 → 3 → 2 → 1 again",
    "It returns 1"
   ],
   "right": 0,
   "why": "Line 5 finds the key in the memo and returns the stored answer. That is why each square is worked out only once."
  }
 },
 "problems": [
  {
   "id": "cm1",
   "num": 1,
   "title": "Rank the Scores",
   "fn": "rankScores",
   "ask": "Replace every score with its <b>rank</b>: the smallest score gets rank 1, the next larger one rank 2, and so on. <b>Equal scores share a rank</b>, and the ranks have no gaps. Return a new array.",
   "spec": "rankScores([40, 10, 40, 20]) → [3, 1, 3, 2]",
   "start": "function rankScores(scores) {\n  // your code here\n}\n",
   "plan": [
    "Two tools are needed here. First: what could you prepare once, so that the question becomes easy?",
    "What would the scores look like if the rank of each one could be read off directly?",
    "Equal scores must share a rank. What removes repeats?",
    "Once every different score has a rank, how do you look it up fast for each original position?"
   ],
   "hints": [
    "Make a sorted list of the different scores: [...new Set(scores)].sort((a, b) => a - b).",
    "In that list, the score at index i has rank i + 1. Store that in a Map.",
    "Then map every original score to rank.get(score). Remember that sort() without a compare function sorts numbers as text."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       40,
       10,
       40,
       20
      ]
     ],
     "want": [
      3,
      1,
      3,
      2
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
       7,
       7,
       7
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
       100,
       -5,
       0
      ]
     ],
     "want": [
      3,
      1,
      2
     ]
    },
    {
     "args": [
      [
       10,
       9,
       100
      ]
     ],
     "want": [
      2,
      1,
      3
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function rankScores(scores) {",
    "  const unique = [...new Set(scores)];",
    "  const sorted = unique.sort((a, b) => a - b);",
    "  const rank = new Map();",
    "  for (let i = 0; i < sorted.length; i++) {",
    "    rank.set(sorted[i], i + 1);",
    "  }",
    "  return scores.map((s) => rank.get(s));",
    "}"
   ],
   "why": "What would [10, 9, 100] give if line 3 used sort() with no compare function?",
   "topic": null,
   "world": "A leaderboard shows ranks, not raw scores. And databases shrink huge values into small ranks, the same way.",
   "view": {
    "row": [
     40,
     10,
     40,
     20
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     "",
     "",
     ""
    ],
    "rowLabel": "in",
    "row2Label": "sort",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     }
    ],
    "vars": [],
    "box": {
     "title": "rank",
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
     "say": "In a sorted list with no repeats, the position of a score is its rank.",
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
     "card": "sorted, no repeats: position = rank",
     "arrows": null
    },
    {
     "say": "So sort once. Store each rank in a map. Then look every score up.",
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
     "card": "sort once → map → look up",
     "arrows": null
    },
    {
     "say": "Line two. A set drops the second forty. Line three sorts. Ten, twenty, forty.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d0": 10,
      "d1": 20,
      "d2": 40
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "no repeats, sorted: 10 · 20 · 40",
     "arrows": null
    },
    {
     "say": "Lines five and six. Each score, with its position plus one.",
     "line": 6,
     "ptr": null,
     "hot": [
      "d0",
      "d1",
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
      "10 → 1",
      "20 → 2",
      "40 → 3"
     ],
     "card": "rank = position + 1",
     "arrows": null
    },
    {
     "say": "Now line eight walks the original scores. The first one is forty. What does the map say?",
     "line": 8,
     "ptr": {
      "i": 0
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
     "box": [
      "10 → 1",
      "20 → 2",
      "40 → 3"
     ],
     "card": "rank.get(40) → ?",
     "arrows": null
    },
    {
     "say": "Three. One lookup, no searching.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "free": [],
     "set": {
      "0": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "10 → 1",
      "20 → 2",
      "40 → 3"
     ],
     "card": "40 → rank 3",
     "arrows": null
    },
    {
     "say": "Ten is one. The second forty is three again. Twenty is two.",
     "line": 8,
     "ptr": {
      "i": 3
     },
     "hot": [],
     "ok": [
      0,
      1,
      2,
      3
     ],
     "bad": [],
     "free": [],
     "set": {
      "1": 1,
      "2": 3,
      "3": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "10 → 1",
      "20 → 2",
      "40 → 3"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "The sort is the expensive part. O of n log n. Every lookup after it is one step.",
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
     "card": "sort → O(n log n)",
     "arrows": null
    },
    {
     "say": "The sorted list and the map hold at most n scores.",
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
     "card": "list + map → O(n) space",
     "arrows": null
    },
    {
     "say": "A leaderboard shows ranks, not raw scores. And databases shrink huge values into small ranks, the same way.",
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
     "card": "leaderboards · compressed values",
     "arrows": null
    }
   ]
  },
  {
   "id": "cm2",
   "num": 2,
   "title": "How Many Sacks Fit",
   "fn": "fitCount",
   "ask": "<code>sizes</code> holds the sizes of the sacks in a row (all above 0). Each number in <code>budgets</code> is the <b>total size one cart can hold</b>. For each cart, load sacks <b>from the front of the row, in order</b>, and stop at the first sack that does not fit. A sack that fills the cart exactly still fits. Return an array with the <b>number of sacks loaded</b> for each budget, in the same order. There can be very many budgets.",
   "spec": "fitCount([2, 3, 1, 4], [5, 0, 10, 6]) → [2, 0, 4, 3]      (budget 5: 2 + 3 fits, the next sack does not)",
   "start": "function fitCount(sizes, budgets) {\n  // your code here\n}\n",
   "plan": [
    "Two tools are needed here. First: what could you prepare once, so that the question becomes easy?",
    "For one budget you could add sizes until it overflows. What makes that slow for many budgets?",
    "Which list, built once, tells you the total size of the first k sacks?",
    "That list only ever grows. Which search does that allow?"
   ],
   "hints": [
    "Build running totals once: total[i] is the size of the first i + 1 sacks.",
    "The totals are sorted, because every size is above 0. So for each budget, binary search them.",
    "Search for the first total that is larger than the budget. Its index is the number of sacks that fit."
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
      ],
      [
       5,
       0,
       10,
       6
      ]
     ],
     "want": [
      2,
      0,
      4,
      3
     ]
    },
    {
     "args": [
      [],
      [
       3
      ]
     ],
     "want": [
      0
     ]
    },
    {
     "args": [
      [
       5
      ],
      [
       4,
       5,
       6
      ]
     ],
     "want": [
      0,
      1,
      1
     ]
    },
    {
     "args": [
      [
       1,
       1,
       1
      ],
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
       2,
       3,
       1,
       4
      ],
      []
     ],
     "want": []
    },
    {
     "args": [
      [
       3,
       3,
       3
      ],
      [
       100,
       8
      ]
     ],
     "want": [
      3,
      2
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function fitCount(sizes, budgets) {",
    "  const total = [];",
    "  let sum = 0;",
    "  for (const s of sizes) {",
    "    sum += s;",
    "    total.push(sum);",
    "  }",
    "  return budgets.map((b) => {",
    "    let low = 0, high = total.length;",
    "    while (low < high) {",
    "      const mid = Math.floor((low + high) / 2);",
    "      if (total[mid] <= b) low = mid + 1;",
    "      else high = mid;",
    "    }",
    "    return low;",
    "  });",
    "}"
   ],
   "why": "The binary search is only correct because every size is above 0. What breaks if a size could be negative?",
   "topic": null,
   "world": "A video player knows the length of every chunk. It finds the chunk that holds minute forty, exactly like this.",
   "view": {
    "row": [
     2,
     3,
     1,
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
     ""
    ],
    "rowLabel": "sizes",
    "row2Label": "total",
    "ptrs": [],
    "vars": [
     "low",
     "high"
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
     "say": "Running totals say how big the first sacks are, together. Build them once.",
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
     "card": "running totals, built once",
     "arrows": null
    },
    {
     "say": "Sizes are above zero, so the totals only grow. A sorted list. So each budget is a binary search.",
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
     "card": "totals only grow → binary search",
     "arrows": null
    },
    {
     "say": "Lines four to seven build the totals. Two, five, six, ten.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d0": 2,
      "d1": 5,
      "d2": 6,
      "d3": 10
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "totals: 2 · 5 · 6 · 10",
     "arrows": null
    },
    {
     "say": "Take the budget six. Low is zero. High is four.",
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
     "vars": {
      "low": 0,
      "high": 4
     },
     "box": null,
     "card": "budget 6 · low 0 · high 4",
     "arrows": null
    },
    {
     "say": "The middle is two. That total is six. It fits. So the answer is further right. Low becomes three.",
     "line": 12,
     "ptr": null,
     "hot": [
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
     "vars": {
      "low": 3,
      "high": 4
     },
     "box": null,
     "card": "mid 2: 6 ≤ 6 → low = 3",
     "arrows": null
    },
    {
     "say": "The middle is now three. That total is ten. Against a budget of six. Which marker moves?",
     "line": 11,
     "ptr": null,
     "hot": [
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
     "card": "mid 3: 10 against 6 → ?",
     "arrows": null
    },
    {
     "say": "Ten is too much. High comes down to three. Low and high meet.",
     "line": 13,
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
     "vars": {
      "low": 3,
      "high": 3
     },
     "box": null,
     "card": "10 > 6 → high = 3",
     "arrows": null
    },
    {
     "say": "Line fifteen returns low. Three sacks fit.",
     "line": 15,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
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
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The totals cost O of n, once. Then every budget costs log n.",
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
     "card": "O(n) once + log n per budget",
     "arrows": null
    },
    {
     "say": "One list of totals.",
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
     "card": "totals → O(n) space",
     "arrows": null
    },
    {
     "say": "A video player knows the length of every chunk. It finds the chunk that holds minute forty, exactly like this.",
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
     "card": "which chunk holds minute 40?",
     "arrows": null
    }
   ]
  },
  {
   "id": "cm3",
   "num": 3,
   "title": "The Price on That Day",
   "fn": "pricesAt",
   "ask": "A shop logs every price change as <code>[day, item, price]</code>, <b>sorted by day</b>. For each question <code>[item, day]</code> in <code>asks</code>, return the price of that item on that day: the <b>latest change on or before the day</b>, or <b>-1</b> if the item had no price yet. There can be very many questions.",
   "spec": "pricesAt([[1, \"nut\", 5], [3, \"fig\", 2], [4, \"nut\", 7], [9, \"nut\", 6]], [[\"nut\", 8]]) → [7]",
   "start": "// changes is sorted by day. Each entry is [day, item, price].\nfunction pricesAt(changes, asks) {\n  // your code here\n}\n",
   "plan": [
    "Two tools are needed here. First: what could you prepare once, so that the question becomes easy?",
    "One question only cares about one item. How do you avoid walking past all the other items every time?",
    "Inside one item, the changes are still sorted by day. What does that allow?",
    "What do you return when every change is after the day that was asked?"
   ],
   "hints": [
    "Group the changes in a Map: item → a list of [day, price]. The lists stay sorted by day.",
    "For a question, binary search that list for the first change AFTER the day.",
    "The change just before that one is the answer. If there is none (the index is 0), return -1."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        1,
        "nut",
        5
       ],
       [
        3,
        "fig",
        2
       ],
       [
        4,
        "nut",
        7
       ],
       [
        9,
        "nut",
        6
       ]
      ],
      [
       [
        "nut",
        8
       ]
      ]
     ],
     "want": [
      7
     ]
    },
    {
     "args": [
      [
       [
        1,
        "nut",
        5
       ],
       [
        3,
        "fig",
        2
       ],
       [
        4,
        "nut",
        7
       ],
       [
        9,
        "nut",
        6
       ]
      ],
      [
       [
        "nut",
        9
       ],
       [
        "nut",
        1
       ],
       [
        "fig",
        2
       ],
       [
        "fig",
        100
       ],
       [
        "pea",
        5
       ]
      ]
     ],
     "want": [
      6,
      5,
      -1,
      2,
      -1
     ]
    },
    {
     "args": [
      [],
      [
       [
        "nut",
        3
       ]
      ]
     ],
     "want": [
      -1
     ]
    },
    {
     "args": [
      [
       [
        2,
        "nut",
        4
       ]
      ],
      []
     ],
     "want": []
    },
    {
     "args": [
      [
       [
        5,
        "a",
        1
       ],
       [
        5,
        "b",
        2
       ],
       [
        6,
        "a",
        3
       ]
      ],
      [
       [
        "a",
        5
       ],
       [
        "b",
        6
       ],
       [
        "a",
        4
       ]
      ]
     ],
     "want": [
      1,
      2,
      -1
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function pricesAt(changes, asks) {",
    "  const byItem = new Map();",
    "  for (const [day, item, price] of changes) {",
    "    if (!byItem.has(item)) byItem.set(item, []);",
    "    byItem.get(item).push([day, price]);",
    "  }",
    "  return asks.map(([item, day]) => {",
    "    const list = byItem.get(item) || [];",
    "    let low = 0, high = list.length;",
    "    while (low < high) {",
    "      const mid = Math.floor((low + high) / 2);",
    "      if (list[mid][0] <= day) low = mid + 1;",
    "      else high = mid;",
    "    }",
    "    return low === 0 ? -1 : list[low - 1][1];",
    "  });",
    "}"
   ],
   "why": "Why do the lists inside the map not need to be sorted again?",
   "topic": null,
   "world": "Your bank shows your balance on any past day. A wiki shows a page as it was last March. Group by key. Then search by time.",
   "view": {
    "row": [
     1,
     4,
     9
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     5,
     7,
     6
    ],
    "rowLabel": "nut: day",
    "row2Label": "price",
    "ptrs": [],
    "vars": [
     "low",
     "high"
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
     "say": "A question is about one item. So first, group the changes by item, in a map.",
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
     "card": "map: item → its changes",
     "arrows": null
    },
    {
     "say": "Inside one item, the changes are still sorted by day. So the day can be found by halving.",
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
     "card": "sorted by day → binary search",
     "arrows": null
    },
    {
     "say": "Lines three to six fill the map. The nut gets three changes. The fig gets one.",
     "line": 5,
     "ptr": null,
     "hot": [
      0,
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
     "card": "nut → 3 changes · fig → 1",
     "arrows": null
    },
    {
     "say": "The question. A nut, on day eight. Line eight fetches the nut list. Low is zero. High is three.",
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
     "vars": {
      "low": 0,
      "high": 3
     },
     "box": null,
     "card": "nut, day 8 · low 0 · high 3",
     "arrows": null
    },
    {
     "say": "The middle is one. Day four. That is on or before day eight. So look further right. Low becomes two.",
     "line": 12,
     "ptr": null,
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
     "vars": {
      "low": 2,
      "high": 3
     },
     "box": null,
     "card": "mid 1: day 4 ≤ 8 → low = 2",
     "arrows": null
    },
    {
     "say": "The middle is two. Day nine. Against day eight. Which marker moves?",
     "line": 11,
     "ptr": null,
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
     "card": "mid 2: day 9 against 8 → ?",
     "arrows": null
    },
    {
     "say": "Day nine is too late. High comes down to two. Low and high meet.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      2,
      "d2"
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "low": 2,
      "high": 2
     },
     "box": null,
     "card": "day 9 > 8 → high = 2",
     "arrows": null
    },
    {
     "say": "Low points at the first change that is too late. So the answer is the one just before it. Seven.",
     "line": 15,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
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
     "card": "the one before low → 7",
     "arrows": null
    },
    {
     "say": "And if low is zero, nothing came before. Then the answer is minus one.",
     "line": 15,
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
     "card": "low = 0 → -1",
     "arrows": null
    },
    {
     "say": "Grouping costs O of n, once. Then every question costs log n.",
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
     "card": "O(n) once + log n per question",
     "arrows": null
    },
    {
     "say": "The map holds every change.",
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
     "card": "map → O(n) space",
     "arrows": null
    },
    {
     "say": "Your bank shows your balance on any past day. A wiki shows a page as it was last March. Group by key. Then search by time.",
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
     "card": "your balance on any past day",
     "arrows": null
    }
   ]
  },
  {
   "id": "cm4",
   "num": 4,
   "title": "Unpack the Label",
   "fn": "unpack",
   "ask": "A packed label uses <code>digit[text]</code> to mean \"repeat the text that many times\". Groups can sit <b>inside</b> other groups. Each count is a single digit from 1 to 9. Return the unpacked text.",
   "spec": "unpack(\"3[ab]c\") → \"abababc\"      unpack(\"2[a2[b]]\") → \"abbabb\"",
   "start": "function unpack(s) {\n  // your code here\n}\n",
   "plan": [
    "Two tools are needed here. First: what could you prepare once, so that the question becomes easy?",
    "When you meet \"[\", you start a new piece of text. What must you remember about the text you had so far?",
    "When you meet \"]\", which opener does it belong to: the first one, or the most recent one?",
    "Which tool gives you \"the most recent one\" back?"
   ],
   "hints": [
    "Keep the text you are building in cur, and the last digit you saw in count.",
    "At \"[\": push [cur, count] on a stack and start cur again as an empty string.",
    "At \"]\": pop [before, times]. The new cur is before + cur.repeat(times)."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "3[ab]c"
     ],
     "want": "abababc"
    },
    {
     "args": [
      "2[a2[b]]"
     ],
     "want": "abbabb"
    },
    {
     "args": [
      "abc"
     ],
     "want": "abc"
    },
    {
     "args": [
      ""
     ],
     "want": ""
    },
    {
     "args": [
      "1[x]"
     ],
     "want": "x"
    },
    {
     "args": [
      "a2[b]c3[d]"
     ],
     "want": "abbcddd"
    },
    {
     "args": [
      "2[2[2[z]]]"
     ],
     "want": "zzzzzzzz"
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function unpack(s) {",
    "  const stack = [];",
    "  let cur = '';",
    "  let count = 0;",
    "  for (const ch of s) {",
    "    if (ch >= '0' && ch <= '9') {",
    "      count = Number(ch);",
    "    } else if (ch === '[') {",
    "      stack.push([cur, count]);",
    "      cur = '';",
    "    } else if (ch === ']') {",
    "      const [before, times] = stack.pop();",
    "      cur = before + cur.repeat(times);",
    "    } else {",
    "      cur += ch;",
    "    }",
    "  }",
    "  return cur;",
    "}"
   ],
   "why": "What would have to change if a count could have two digits, like 12[a]?",
   "topic": null,
   "world": "A web page is boxes inside boxes. A browser reads its tags like this. Open, park. Close, pop, and attach.",
   "view": {
    "row": [
     "2",
     "[",
     "a",
     "2",
     "[",
     "b",
     "]",
     "]"
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
     "cur"
    ],
    "box": {
     "title": "stack (top is last)",
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
     "say": "At an opening bracket, park the text so far, and the count, on a stack. Then start fresh.",
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
     "card": "[ → park text and count, start fresh",
     "arrows": null
    },
    {
     "say": "At a closing bracket, pop them back. Repeat the inner text, and glue it on.",
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
     "card": "] → pop, repeat, glue on",
     "arrows": null
    },
    {
     "say": "A digit. Line seven remembers it. Count is two.",
     "line": 7,
     "ptr": {
      "i": 0
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
     "vars": {
      "cur": "\"\""
     },
     "box": [],
     "card": "count = 2",
     "arrows": null
    },
    {
     "say": "An opening bracket. Line nine parks the empty text, and the two. Cur starts fresh.",
     "line": 9,
     "ptr": {
      "i": 1
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
     "box": [
      "\"\" × 2"
     ],
     "card": "park: \"\" and 2",
     "arrows": null
    },
    {
     "say": "A letter. Line fifteen adds it. Cur is a.",
     "line": 15,
     "ptr": {
      "i": 2
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
     "vars": {
      "cur": "\"a\""
     },
     "box": [
      "\"\" × 2"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Another two, and another bracket. Park the a, and the two. Cur starts fresh again.",
     "line": 9,
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
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "cur": "\"\""
     },
     "box": [
      "\"\" × 2",
      "\"a\" × 2"
     ],
     "card": "park: \"a\" and 2",
     "arrows": null
    },
    {
     "say": "The letter b. Cur is b.",
     "line": 15,
     "ptr": {
      "i": 5
     },
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
     "vars": {
      "cur": "\"b\""
     },
     "box": [
      "\"\" × 2",
      "\"a\" × 2"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "A closing bracket. Line twelve pops the a, and the two. What is cur, after line thirteen?",
     "line": 12,
     "ptr": {
      "i": 6
     },
     "hot": [
      6
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
      "\"\" × 2",
      "\"a\" × 2"
     ],
     "card": "\"a\" + \"b\" × 2 → ?",
     "arrows": null
    },
    {
     "say": "A, b, b. The inner group is done.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [
      3,
      4,
      5,
      6
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "cur": "\"abb\""
     },
     "box": [
      "\"\" × 2"
     ],
     "card": "\"a\" + \"bb\" = \"abb\"",
     "arrows": null
    },
    {
     "say": "The last bracket. Pop the empty text, and the two. A b b, twice.",
     "line": 13,
     "ptr": {
      "i": 7
     },
     "hot": [],
     "ok": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "cur": "\"abbabb\""
     },
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "One pass over the label, plus the letters that are written.",
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
     "card": "O(length of the output)",
     "arrows": null
    },
    {
     "say": "The stack is as deep as the brackets are nested.",
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
     "card": "stack → as deep as the nesting",
     "arrows": null
    },
    {
     "say": "A web page is boxes inside boxes. A browser reads its tags like this. Open, park. Close, pop, and attach.",
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
     "card": "a browser reading nested tags",
     "arrows": null
    }
   ]
  },
  {
   "id": "cm5",
   "num": 5,
   "title": "The Smallest Number Left",
   "fn": "smallestAfter",
   "ask": "<code>digits</code> is a number written as text. Remove <b>exactly k digits</b> so that the digits that are left, in the same order, form the <b>smallest</b> number. Return it as text, without leading zeros (\"0\" if nothing is left).",
   "spec": "smallestAfter(\"1432\", 2) → \"12\"      smallestAfter(\"10200\", 1) → \"200\"",
   "start": "function smallestAfter(digits, k) {\n  // your code here\n}\n",
   "plan": [
    "Two tools are needed here. First: what could you prepare once, so that the question becomes easy?",
    "Which matters more for the size of a number: an early digit or a late one?",
    "You are walking left to right and meet a digit that is smaller than the one just before it. Which of the two should go?",
    "After removing one, the same question comes up with the digit before that. Which tool gives you \"the one before\" again and again?"
   ],
   "hints": [
    "Keep the digits you want in a stack. Before pushing a digit, look at the top.",
    "While you may still remove (k > 0) and the top is larger than the new digit: pop it and count one removal.",
    "If removals are left at the end, drop digits from the end. Then strip leading zeros."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "1432",
      2
     ],
     "want": "12"
    },
    {
     "args": [
      "1432219",
      3
     ],
     "want": "1219"
    },
    {
     "args": [
      "10200",
      1
     ],
     "want": "200"
    },
    {
     "args": [
      "10",
      2
     ],
     "want": "0"
    },
    {
     "args": [
      "123",
      1
     ],
     "want": "12"
    },
    {
     "args": [
      "9",
      0
     ],
     "want": "9"
    },
    {
     "args": [
      "321",
      2
     ],
     "want": "1"
    },
    {
     "args": [
      "100",
      1
     ],
     "want": "0"
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function smallestAfter(digits, k) {",
    "  const stack = [];",
    "  for (const d of digits) {",
    "    while (k > 0 && stack.length > 0 && stack.at(-1) > d) {",
    "      stack.pop();",
    "      k--;",
    "    }",
    "    stack.push(d);",
    "  }",
    "  while (k > 0) {",
    "    stack.pop();",
    "    k--;",
    "  }",
    "  const out = stack.join('').replace(/^0+/, '');",
    "  return out === '' ? '0' : out;",
    "}"
   ],
   "why": "For \"123\" and k = 1 the first loop never pops. Which lines remove the digit, and why from the end?",
   "topic": null,
   "world": "A trading screen uses the same stack to find, for every day, the last day with a higher price. One pass.",
   "view": {
    "row": [
     "1",
     "4",
     "3",
     "2"
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
     "k"
    ],
    "box": {
     "title": "stack (top is last)",
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
     "say": "Early digits matter most. So a big digit, right before a smaller one, should go.",
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
     "card": "big digit before a smaller one → out",
     "arrows": null
    },
    {
     "say": "Keep the digits in a stack. A new digit pops every bigger top, while removals are left.",
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
     "card": "new digit pops bigger tops",
     "arrows": null
    },
    {
     "say": "The one. The stack is empty, so line eight pushes it.",
     "line": 8,
     "ptr": {
      "i": 0
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
     "vars": {
      "k": 2
     },
     "box": [
      "1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "The four. The top is one. Not bigger. Push.",
     "line": 8,
     "ptr": {
      "i": 1
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
     "box": [
      "1  4"
     ],
     "card": "top 1 > 4? no → push",
     "arrows": null
    },
    {
     "say": "The three. The top is four. Bigger than three. And one removal is still allowed. What happens?",
     "line": 4,
     "ptr": {
      "i": 2
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
     "box": [
      "1  4"
     ],
     "card": "top 4 > 3 → ?",
     "arrows": null
    },
    {
     "say": "The four is popped. K is one. Then the three is pushed.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      1
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "k": 1
     },
     "box": [
      "1  3"
     ],
     "card": "pop 4 · push 3 · k = 1",
     "arrows": null
    },
    {
     "say": "The two. The top is three. Bigger. Pop it. K is zero. Push the two.",
     "line": 8,
     "ptr": {
      "i": 3
     },
     "hot": [
      3
     ],
     "ok": [],
     "bad": [
      1,
      2
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "k": 0
     },
     "box": [
      "1  2"
     ],
     "card": "pop 3 · push 2 · k = 0",
     "arrows": null
    },
    {
     "say": "No removals are left. Line fourteen joins the stack. Twelve.",
     "line": 14,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
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
     "box": [
      "1  2"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "And if removals were left over, lines ten to thirteen would drop digits from the end.",
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
     "card": "k left over → drop from the end",
     "arrows": null
    },
    {
     "say": "Every digit is pushed once, and popped at most once. O of n.",
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
     "card": "push once, pop once → O(n)",
     "arrows": null
    },
    {
     "say": "The stack holds at most every digit.",
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
     "card": "stack → O(n) space",
     "arrows": null
    },
    {
     "say": "A trading screen uses the same stack to find, for every day, the last day with a higher price. One pass.",
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
     "card": "the last day with a higher price",
     "arrows": null
    }
   ]
  },
  {
   "id": "cm6",
   "num": 6,
   "title": "Sums of Blocks",
   "fn": "blockSums",
   "ask": "Each block is <code>[r1, c1, r2, c2]</code>: the <b>row and column</b> of its top-left square, then the row and column of its bottom-right square. Rows and columns count from 0, and both corners are included. For each block, return the <b>sum of the grid values inside it</b>, in the same order. There can be very many blocks, so do not add each block up square by square.",
   "spec": "blockSums([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 1, 2, 2]]) → [28]      (5 + 6 + 8 + 9)",
   "start": "// grid is an array of rows. A block is [r1, c1, r2, c2], both corners included.\nfunction blockSums(grid, blocks) {\n  // your code here\n}\n",
   "plan": [
    "Two tools are needed here. First: what could you prepare once, so that the question becomes easy?",
    "In a row, running totals give any stretch as one subtraction. What would the same idea be for a grid?",
    "If you know the sum from the top-left corner down to every square, which sums do you take away to get a block?",
    "One small piece gets taken away twice. Which one?"
   ],
   "hints": [
    "Build pre, with one extra row and column of zeros: pre[r + 1][c + 1] is the sum of everything above and left of square (r, c), including it.",
    "Build it row by row: the square, plus the total to its left in this row, plus the total above, minus the total above-left.",
    "A block is: the whole corner sum, minus the part above, minus the part to the left, plus the corner piece that was taken away twice."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        1,
        2,
        3
       ],
       [
        4,
        5,
        6
       ],
       [
        7,
        8,
        9
       ]
      ],
      [
       [
        1,
        1,
        2,
        2
       ]
      ]
     ],
     "want": [
      28
     ]
    },
    {
     "args": [
      [
       [
        1,
        2,
        3
       ],
       [
        4,
        5,
        6
       ],
       [
        7,
        8,
        9
       ]
      ],
      [
       [
        0,
        0,
        2,
        2
       ],
       [
        0,
        0,
        0,
        0
       ],
       [
        1,
        0,
        1,
        2
       ],
       [
        0,
        1,
        2,
        1
       ]
      ]
     ],
     "want": [
      45,
      1,
      15,
      15
     ]
    },
    {
     "args": [
      [
       [
        5
       ]
      ],
      [
       [
        0,
        0,
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
       [
        1,
        2,
        3
       ],
       [
        4,
        5,
        6
       ],
       [
        7,
        8,
        9
       ]
      ],
      []
     ],
     "want": []
    },
    {
     "args": [
      [
       [
        1,
        -1
       ],
       [
        -1,
        1
       ]
      ],
      [
       [
        0,
        0,
        1,
        1
       ],
       [
        0,
        1,
        1,
        1
       ]
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
    "function blockSums(grid, blocks) {",
    "  const C = grid[0].length;",
    "  const pre = [new Array(C + 1).fill(0)];",
    "  for (let r = 0; r < grid.length; r++) {",
    "    const row = [0];",
    "    for (let c = 0; c < C; c++) {",
    "      const side = row[c], up = pre[r][c + 1];",
    "      row.push(grid[r][c] + side + up - pre[r][c]);",
    "    }",
    "    pre.push(row);",
    "  }",
    "  return blocks.map(([r1, c1, r2, c2]) => {",
    "    const whole = pre[r2 + 1][c2 + 1];",
    "    const above = pre[r1][c2 + 1];",
    "    const left = pre[r2 + 1][c1];",
    "    return whole - above - left + pre[r1][c1];",
    "  });",
    "}"
   ],
   "why": "Why does pre have one extra row and one extra column of zeros?",
   "topic": null,
   "world": "A photo app blurs a picture by averaging the block around every pixel. With this table, each block costs four lookups.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      1,
      2,
      3
     ],
     [
      4,
      5,
      6
     ],
     [
      7,
      8,
      9
     ]
    ],
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [],
    "vars": [
     "whole",
     "above"
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
     "say": "For every square, store the sum of everything from the top left corner, down to that square.",
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
     "card": "pre: the sum from the corner to here",
     "arrows": null
    },
    {
     "say": "Then a block is one big corner sum, minus the part above, minus the part on the left.",
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
     "card": "block = whole − above − left + corner",
     "arrows": null
    },
    {
     "say": "Lines four to eleven build the table. One pass over the grid.",
     "line": 8,
     "ptr": null,
     "hot": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
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
     "card": "built once: one pass",
     "arrows": null
    },
    {
     "say": "The block. Start with the whole corner sum, down to the last square. Forty five.",
     "line": 13,
     "ptr": null,
     "hot": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
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
      "whole": 45
     },
     "box": null,
     "card": "whole = 45",
     "arrows": null
    },
    {
     "say": "Take away the part above the block. The first row. Six.",
     "line": 14,
     "ptr": null,
     "hot": [
      3,
      4,
      5,
      6,
      7,
      8
     ],
     "ok": [],
     "bad": [
      0,
      1,
      2
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "whole": 45,
      "above": 6
     },
     "box": null,
     "card": "above = 1 + 2 + 3 = 6",
     "arrows": null
    },
    {
     "say": "Take away the part on the left. The first column. Twelve. But look at the corner square. What went wrong?",
     "line": 15,
     "ptr": null,
     "hot": [
      4,
      5,
      7,
      8
     ],
     "ok": [],
     "bad": [
      0,
      1,
      2,
      3,
      6
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "left = 1 + 4 + 7 = 12 → ?",
     "arrows": null
    },
    {
     "say": "The corner was taken away twice. So line sixteen adds it back. Forty five, minus six, minus twelve, plus one.",
     "line": 16,
     "ptr": null,
     "hot": [],
     "ok": [
      4,
      5,
      7,
      8
     ],
     "bad": [
      1,
      2,
      3,
      6
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "45 − 6 − 12 + 1 = 28",
     "arrows": null
    },
    {
     "say": "The table costs O of R times C, once. After that, any block is four lookups.",
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
     "card": "built once · O(1) per block",
     "arrows": null
    },
    {
     "say": "One table, the size of the grid.",
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
     "card": "table → O(R × C) space",
     "arrows": null
    },
    {
     "say": "A photo app blurs a picture by averaging the block around every pixel. With this table, each block costs four lookups.",
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
     "card": "blur: a block around each pixel",
     "arrows": null
    }
   ]
  },
  {
   "id": "cm7",
   "num": 7,
   "title": "One Letter at a Time",
   "fn": "fewestChanges",
   "ask": "Turn the word <code>from</code> into the word <code>to</code>. Each step changes <b>exactly one letter</b>, and every word you land on must be in <code>words</code>. All words have the same length. Return the <b>fewest steps</b>, or <b>-1</b> if it cannot be done.",
   "spec": "fewestChanges(\"cat\", \"dog\", [\"cot\", \"cog\", \"dot\", \"dog\"]) → 3      (cat → cot → cog → dog)",
   "start": "function fewestChanges(from, to, words) {\n  // your code here\n}\n",
   "plan": [
    "Two tools are needed here. First: what could you prepare once, so that the question becomes easy?",
    "Nobody gives you a graph. What are the \"things\", and when are two of them joined?",
    "The question says \"the fewest steps\". Which walk gives that?",
    "How do you make sure a word is never visited twice, without a separate seen list?"
   ],
   "hints": [
    "Put the words in a Set of words that are still unused. Two words are joined if they differ in exactly one letter.",
    "Walk level by level from the start word. One level is one step.",
    "When a word is one letter away, delete it from the set and put it in the next level. Return the step count when you take the target out of a level."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "cat",
      "dog",
      [
       "cot",
       "cog",
       "dot",
       "dog"
      ]
     ],
     "want": 3
    },
    {
     "args": [
      "cat",
      "dog",
      [
       "cot",
       "cog"
      ]
     ],
     "want": -1
    },
    {
     "args": [
      "a",
      "a",
      []
     ],
     "want": 0
    },
    {
     "args": [
      "hit",
      "cog",
      [
       "hot",
       "dot",
       "dog",
       "lot",
       "log",
       "cog"
      ]
     ],
     "want": 4
    },
    {
     "args": [
      "ab",
      "cd",
      [
       "ad",
       "cd"
      ]
     ],
     "want": 2
    },
    {
     "args": [
      "cat",
      "bat",
      [
       "bat"
      ]
     ],
     "want": 1
    },
    {
     "args": [
      "cat",
      "dog",
      [
       "dog"
      ]
     ],
     "want": -1
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function fewestChanges(from, to, words) {",
    "  const unused = new Set(words);",
    "  let level = [from], steps = 0;",
    "  while (level.length > 0) {",
    "    const next = [];",
    "    for (const word of level) {",
    "      if (word === to) return steps;",
    "      for (const other of [...unused]) {",
    "        let diff = 0;",
    "        for (let i = 0; i < word.length; i++) {",
    "          if (word[i] !== other[i]) diff++;",
    "        }",
    "        if (diff === 1) {",
    "          unused.delete(other);",
    "          next.push(other);",
    "        }",
    "      }",
    "    }",
    "    level = next;",
    "    steps++;",
    "  }",
    "  return -1;",
    "}"
   ],
   "why": "Line 14 deletes a word as soon as it is reached. Why can a later, longer route never need that word again?",
   "topic": null,
   "world": "A spell checker suggests words that are one edit away. The graph is never stored. It is worked out on the way.",
   "view": {
    "row": [
     "cat",
     "cot",
     "cog",
     "dot",
     "dog"
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [],
    "vars": [
     "steps"
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
     "say": "Every word is a place. Two words are joined, when they differ in exactly one letter.",
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
     "card": "one letter apart = joined",
     "arrows": null
    },
    {
     "say": "Fewest steps means level by level. And a set of unused words stops you from going back.",
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
     "card": "level by level + a set of unused words",
     "arrows": null
    },
    {
     "say": "Line three. The first level holds only cat. Steps is zero.",
     "line": 3,
     "ptr": null,
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
     "vars": {
      "steps": 0
     },
     "box": null,
     "card": "level: cat",
     "arrows": null
    },
    {
     "say": "Which unused words are one letter from cat? Only cot. It leaves the set, and joins the next level.",
     "line": 15,
     "ptr": null,
     "hot": [
      1
     ],
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
     "vars": null,
     "box": null,
     "card": "cat → cot",
     "arrows": null
    },
    {
     "say": "Level two. Steps is one. From cot, two words are one letter away. Cog, and dot.",
     "line": 15,
     "ptr": null,
     "hot": [
      2,
      3
     ],
     "ok": [
      0,
      1
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "steps": 1
     },
     "box": null,
     "card": "cot → cog, dot",
     "arrows": null
    },
    {
     "say": "Level three. Steps is two. Cog reaches dog. Then dot is checked. Dot is also one letter from dog. Is dog added again?",
     "line": 13,
     "ptr": null,
     "hot": [
      4
     ],
     "ok": [
      0,
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
      "steps": 2
     },
     "box": null,
     "card": "cog → dog · and dot → dog?",
     "arrows": null
    },
    {
     "say": "No. Dog already left the set. Every word is reached once, by the shortest route.",
     "line": 14,
     "ptr": null,
     "hot": [
      4
     ],
     "ok": [
      0,
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
     "vars": null,
     "box": null,
     "card": "each word is reached once",
     "arrows": null
    },
    {
     "say": "Level four. Steps is three. The word is dog. Line seven returns three.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      2,
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
      "steps": 3
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Each word is compared with the words still unused. About n squared, times the word length.",
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
     "card": "O(n² × word length)",
     "arrows": null
    },
    {
     "say": "The set and the levels hold every word.",
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
     "card": "set + levels → O(n) space",
     "arrows": null
    },
    {
     "say": "A spell checker suggests words that are one edit away. The graph is never stored. It is worked out on the way.",
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
     "card": "spell check: one edit away",
     "arrows": null
    }
   ]
  },
  {
   "id": "cm8",
   "num": 8,
   "title": "The Longest Way Down",
   "fn": "longestDownhill",
   "ask": "Each square holds a height. From a square you may step up, down, left or right, but only to a square that is <b>strictly lower</b>. Return the number of squares on the <b>longest</b> such walk. You may start anywhere.",
   "spec": "longestDownhill([[5, 4, 9], [6, 3, 8], [7, 2, 1]]) → 7      (7 → 6 → 5 → 4 → 3 → 2 → 1)",
   "start": "// grid is an array of rows of heights.\nfunction longestDownhill(grid) {\n  // your code here\n}\n",
   "plan": [
    "Two tools are needed here. First: what could you prepare once, so that the question becomes easy?",
    "Suppose you know the longest walk from each lower neighbour. What is the longest walk from this square?",
    "Many walks pass through the same square. What do you do with an answer you have already worked out?",
    "Can a walk ever come back to a square it has left? Why does that matter?"
   ],
   "hints": [
    "Write walk(r, c): the longest walk that starts on that square. It is 1, or 1 + the best walk from a strictly lower neighbour.",
    "Store every answer in a memo (a Map with the key r + \",\" + c) and return it at once the next time.",
    "Call walk for every square and keep the largest. grid[r + a]?.[c + b] gives undefined outside the grid."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        5,
        4,
        9
       ],
       [
        6,
        3,
        8
       ],
       [
        7,
        2,
        1
       ]
      ]
     ],
     "want": 7
    },
    {
     "args": [
      [
       [
        9,
        8,
        7
       ],
       [
        2,
        3,
        6
       ],
       [
        1,
        4,
        5
       ]
      ]
     ],
     "want": 9
    },
    {
     "args": [
      [
       [
        1
       ]
      ]
     ],
     "want": 1
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
        5,
        5
       ],
       [
        5,
        5
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
        2,
        3
       ]
      ]
     ],
     "want": 3
    },
    {
     "args": [
      [
       [
        3,
        4
       ],
       [
        2,
        1
       ]
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
    "function longestDownhill(grid) {",
    "  const memo = new Map();",
    "  const walk = (r, c) => {",
    "    const key = r + ',' + c;",
    "    if (memo.has(key)) return memo.get(key);",
    "    let best = 1;",
    "    for (const [a, b] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {",
    "      const h = grid[r + a]?.[c + b];",
    "      if (h !== undefined && h < grid[r][c]) {",
    "        best = Math.max(best, 1 + walk(r + a, c + b));",
    "      }",
    "    }",
    "    memo.set(key, best);",
    "    return best;",
    "  };",
    "  let longest = 0;",
    "  for (let r = 0; r < grid.length; r++) {",
    "    for (let c = 0; c < grid[0].length; c++) {",
    "      longest = Math.max(longest, walk(r, c));",
    "    }",
    "  }",
    "  return longest;",
    "}"
   ],
   "why": "This walk needs no \"seen\" set, unlike the island walks. Which word in the task makes going round in a circle impossible?",
   "topic": null,
   "world": "A build tool finds its longest chain of steps this way. And a ski map finds its longest run. Walk, and remember.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      5,
      4,
      9
     ],
     [
      6,
      3,
      8
     ],
     [
      7,
      2,
      1
     ]
    ],
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [],
    "vars": [
     "longest"
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
     "say": "The longest walk from a square is one, plus the longest walk from its best lower neighbour.",
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
     "card": "here = 1 + the best lower neighbour",
     "arrows": null
    },
    {
     "say": "Many walks share squares. So store every answer, and never work it out twice.",
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
     "card": "store each answer: a memo",
     "arrows": null
    },
    {
     "say": "Line nineteen starts with the first square. The five. It can only go down to the four. Then the three, the two, the one.",
     "line": 10,
     "ptr": null,
     "hot": [
      0,
      1,
      4,
      7,
      8
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
     "card": "5 → 4 → 3 → 2 → 1",
     "arrows": null
    },
    {
     "say": "On the way back, line thirteen stores every answer. One, two, three, four. And five, for the first square.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      4,
      7,
      8
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "longest": 5
     },
     "box": null,
     "card": "stored: 1 · 2 · 3 · 4 · 5",
     "arrows": null
    },
    {
     "say": "Later, the six. One of its lower neighbours is the five. The five was already worked out. What does that call cost now?",
     "line": 5,
     "ptr": null,
     "hot": [
      3
     ],
     "ok": [
      0,
      1,
      4,
      7,
      8
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
     "card": "walk(5) again → ?",
     "arrows": null
    },
    {
     "say": "One lookup. So the six is one, plus five. Six squares.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      3,
      4,
      7,
      8
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "longest": 6
     },
     "box": null,
     "card": "6: 1 + 5 = 6",
     "arrows": null
    },
    {
     "say": "And the seven is one, plus six. Seven squares.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      3,
      4,
      6,
      7,
      8
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "longest": 7
     },
     "box": null,
     "card": "7: 1 + 6 = 7",
     "arrows": null
    },
    {
     "say": "The nine and the eight only reach the one. Shorter. Line twenty two returns seven.",
     "line": 22,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      3,
      4,
      6,
      7,
      8
     ],
     "bad": [
      2,
      5
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
     "say": "Every square is worked out once, and looks at four neighbours. O of R times C.",
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
     "card": "each square once → O(R × C)",
     "arrows": null
    },
    {
     "say": "The memo holds one answer per square.",
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
     "card": "memo → O(R × C) space",
     "arrows": null
    },
    {
     "say": "A build tool finds its longest chain of steps this way. And a ski map finds its longest run. Walk, and remember.",
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
     "card": "the longest run on a ski map",
     "arrows": null
    }
   ]
  }
 ]
};
