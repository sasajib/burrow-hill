window.CHAPTER = {
 "id": "dp2",
 "title": "Dynamic Programming: Two Sides",
 "sub": "CHAPTER 25 · DYNAMIC PROGRAMMING",
 "key": "burrow-ch-dp2",
 "next": {
  "href": "chapter.html?c=bits",
  "label": "Chapter 26: Bit Tricks"
 },
 "prev": {
  "href": "chapter.html?c=dp1",
  "label": "Chapter 24: Dynamic Programming, One Row"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "dq0",
   "label": "Welcome",
   "short": "Intro",
   "name": "A table with two sides",
   "intro": "When an answer depends on two things at once, the table becomes a grid."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "dqt1",
   "label": "Theory 1",
   "short": "T1",
   "name": "From above, and from the left",
   "intro": "Counting the routes across a field, one square at a time. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "dqt2",
   "label": "Theory 2",
   "short": "T2",
   "name": "Two words, one table",
   "intro": "One word down the side, one along the top, and a rule for equal and for different letters. One guess."
  }
 ],
 "notes": {
  "w": "<h3>The words</h3><ul><li><b>A two-sided (2-D) table:</b> one entry for every pair: a row and a column, a place in one word and a place in another, a number of items and an amount of room.</li>\n      <li><b>Each entry looks at its neighbours:</b> above, to the left, and sometimes the diagonal.</li>\n      <li><b>Signals:</b> a grid with moves right and down; two texts compared; \"pick items within a limit\".</li></ul>",
  "t1": "<h3>Key ideas</h3><ul><li><b>Meaning:</b> the entry for a square is the answer for getting to that square.</li>\n      <li><b>Choice:</b> you arrived from above or from the left. For counting, add the two. For the cheapest, take the smaller and add the square's own cost.</li>\n      <li><b>Start:</b> the top row and the left column have only one way in.</li>\n      <li><b>Fill row by row</b>, so that \"above\" and \"left\" are always ready.</li>\n      <li><b>This only works because you cannot go back</b> (right and down only). With all four directions you need a search instead.</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>One word down the side, one along the top.</b> The entry for (i, j) is the answer for the first i letters of one and the first j letters of the other.</li>\n      <li><b>Letters equal:</b> use the diagonal entry (plus one, for the longest shared part).</li>\n      <li><b>Letters different:</b> use the neighbours above and to the left (the better one for the shared part; one plus the smallest of three for the number of changes).</li>\n      <li><b>The empty beginning</b> gives the start row and column.</li>\n      <li><b>Cost:</b> one entry per pair of letters: O(n × m).</li></ul>"
 },
 "quiz": {
  "dqt1-q1": {
   "ask": "The square above holds 4 and the square on the left holds 6. What goes in the last square?",
   "opts": [
    "10",
    "24",
    "6"
   ],
   "right": 0,
   "why": "You arrive from above or from the left, so the ways are added: 4 + 6."
  },
  "dqt2-q1": {
   "ask": "p and p are the same letter. The entry up and to the left holds 1. What goes here?",
   "opts": [
    "2",
    "1",
    "0"
   ],
   "right": 0,
   "why": "Equal letters extend what was shared before both of them: the diagonal entry, plus one."
  },
  "dq1s-q": {
   "ask": "The square above the corner holds 3 and the square on its left holds 3. What goes in the corner?",
   "opts": [
    "6",
    "9",
    "3"
   ],
   "right": 0,
   "why": "Every route into the corner comes from above or from the left, so the two counts are added."
  },
  "dq2s-q": {
   "ask": "The middle square costs 5. The entry above is 4 and the entry on the left is 2. What is its entry?",
   "opts": [
    "7",
    "9",
    "11"
   ],
   "right": 0,
   "why": "The cheaper way in is from the left, at 2. So the entry is 5 + 2."
  },
  "dq3s-q": {
   "ask": "The square right of the rock has 1 route arriving from above. The rock on its left has 0. What is its entry?",
   "opts": [
    "1",
    "2",
    "0"
   ],
   "right": 0,
   "why": "The rock contributes nothing, so only the route from above counts."
  },
  "dq4s-q": {
   "ask": "The letters are both \"a\". The entry up and to the left holds 1. What goes here?",
   "opts": [
    "2",
    "1",
    "3"
   ],
   "right": 0,
   "why": "Equal letters extend what the two shorter beginnings already shared: 1 + 1."
  },
  "dq5s-q": {
   "ask": "The letters a and u differ. The diagonal neighbour holds 0, the one above holds 1, the one on the left holds 1. What is the entry?",
   "opts": [
    "1",
    "2",
    "0"
   ],
   "right": 0,
   "why": "One change, on top of the cheapest neighbour: 1 + 0. That neighbour is the diagonal: replace a with u."
  },
  "dq6s-q": {
   "ask": "With room 4, taking the parcel of weight 3 (worth 20) leaves room 1. The row above says the best for room 1 is 15. What is the entry?",
   "opts": [
    "35",
    "20",
    "15"
   ],
   "right": 0,
   "why": "20 for this parcel, plus 15 for the room that is left: both parcels fit."
  },
  "dq7s-q": {
   "ask": "For this square the neighbour above holds 0, the left one holds 2 and the diagonal one holds 1. What is its entry?",
   "opts": [
    "1",
    "3",
    "2"
   ],
   "right": 0,
   "why": "The smallest neighbour is 0, so only a square of side 1 can end here. One 0 nearby blocks anything bigger."
  }
 },
 "problems": [
  {
   "id": "dq1",
   "num": 1,
   "title": "Routes Across the Field",
   "fn": "gridPaths",
   "ask": "A field has <b>rows × cols</b> squares. You start in the top-left square and may only step <b>right or down</b>. Return the number of different routes to the bottom-right square.",
   "spec": "gridPaths(3, 3) → 6      gridPaths(1, 5) → 1",
   "start": "function gridPaths(rows, cols) {\n  // your code here\n}\n",
   "plan": [
    "What should the entry for one square mean?",
    "From which squares can you step onto it?",
    "Which squares can be reached in only one way?"
   ],
   "hints": [
    "Let ways[r][c] be the number of routes to square (r, c).",
    "The top row and the left column are all 1.",
    "Everywhere else: ways[r][c] = ways[r - 1][c] + ways[r][c - 1]. Return the bottom-right entry."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      3,
      3
     ],
     "want": 6
    },
    {
     "args": [
      1,
      1
     ],
     "want": 1
    },
    {
     "args": [
      1,
      5
     ],
     "want": 1
    },
    {
     "args": [
      2,
      2
     ],
     "want": 2
    },
    {
     "args": [
      3,
      7
     ],
     "want": 28
    },
    {
     "args": [
      4,
      4
     ],
     "want": 20
    },
    {
     "args": [
      2,
      3
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
    "function gridPaths(rows, cols) {",
    "  const ways = [];",
    "  for (let r = 0; r < rows; r++) {",
    "    ways.push(new Array(cols).fill(1));",
    "    for (let c = 1; c < cols && r > 0; c++) {",
    "      ways[r][c] = ways[r - 1][c] + ways[r][c - 1];",
    "    }",
    "  }",
    "  return ways[rows - 1][cols - 1];",
    "}"
   ],
   "why": "Why must the table be filled row by row (or column by column), and not in any order you like?",
   "world": "A robot in a warehouse counts its possible routes between two shelves like this.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      "",
      "",
      ""
     ],
     [
      "",
      "",
      ""
     ],
     [
      "",
      "",
      ""
     ]
    ],
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
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
     "say": "The entry for a square is the number of routes that reach it.",
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
     "card": "entry = routes to this square",
     "arrows": null
    },
    {
     "say": "Pip arrives from above, or from the left. So add those two entries.",
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
     "card": "from above + from the left",
     "arrows": null
    },
    {
     "say": "Line four starts every row with ones. For the top row and the left column, that is already right. There is only one way to reach them.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      2,
      3,
      6
     ],
     "bad": [],
     "free": [],
     "set": {
      "0": 1,
      "1": 1,
      "2": 1,
      "3": 1,
      "6": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "top row and left column: 1 way",
     "arrows": null
    },
    {
     "say": "The middle square. One from above, one from the left. Two.",
     "line": 6,
     "ptr": null,
     "hot": [
      1,
      3
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "4": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + 1 = 2",
     "arrows": null
    },
    {
     "say": "The square on its right. One from above. Two from the left. Three.",
     "line": 6,
     "ptr": null,
     "hot": [
      2,
      4
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "5": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + 2 = 3",
     "arrows": null
    },
    {
     "say": "The bottom row. Two from above, one from the left. Three. And now the corner. Three from above, three from the left. How many routes?",
     "line": 6,
     "ptr": null,
     "hot": [
      5,
      7
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "7": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "3 from above + 3 from the left → ?",
     "arrows": null
    },
    {
     "say": "Six.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      8
     ],
     "bad": [],
     "free": [],
     "set": {
      "8": 6
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "3 + 3 = 6",
     "arrows": null
    },
    {
     "say": "Line nine returns the corner. Six routes.",
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
     "say": "One entry per square of the table. O of rows times columns.",
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
     "card": "one entry per square → O(R × C)",
     "arrows": null
    },
    {
     "say": "The table itself. The same size.",
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
     "card": "the table → the same space",
     "arrows": null
    },
    {
     "say": "A robot in a warehouse counts its possible routes between two shelves like this.",
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
     "card": "routes between two shelves",
     "arrows": null
    }
   ]
  },
  {
   "id": "dq2",
   "num": 2,
   "title": "The Cheapest Way Down",
   "fn": "cheapestDown",
   "ask": "Each square has a cost. Starting top-left and stepping only <b>right or down</b>, return the smallest total cost of a way to the bottom-right square (the first and the last square count).",
   "spec": "cheapestDown([[1, 3, 1], [1, 5, 1], [4, 2, 1]]) → 7      (1 + 3 + 1 + 1 + 1)",
   "start": "// grid is an array of rows of numbers (0 or more).\nfunction cheapestDown(grid) {\n  // your code here\n}\n",
   "plan": [
    "What should the entry for one square mean?",
    "Which two squares could you have come from, and which one do you want?",
    "What about the top row and the left column?"
   ],
   "hints": [
    "Let best[r][c] be the cheapest total to stand on square (r, c). Start best as a copy of the grid.",
    "For each square except the first: add the smaller of best[r - 1][c] and best[r][c - 1].",
    "Outside the grid, use Infinity so that it is never chosen. Return the bottom-right entry."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        1,
        3,
        1
       ],
       [
        1,
        5,
        1
       ],
       [
        4,
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
        5
       ]
      ]
     ],
     "want": 5
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
     "want": 6
    },
    {
     "args": [
      [
       [
        1
       ],
       [
        2
       ],
       [
        3
       ]
      ]
     ],
     "want": 6
    },
    {
     "args": [
      [
       [
        1,
        2
       ],
       [
        1,
        1
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
        9,
        1
       ],
       [
        1,
        9,
        1
       ],
       [
        1,
        1,
        1
       ]
      ]
     ],
     "want": 5
    },
    {
     "args": [
      [
       [
        2,
        1
       ],
       [
        9,
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
    "function cheapestDown(grid) {",
    "  const R = grid.length, C = grid[0].length;",
    "  const best = grid.map((row) => [...row]);",
    "  for (let r = 0; r < R; r++) {",
    "    for (let c = 0; c < C; c++) {",
    "      if (r === 0 && c === 0) continue;",
    "      const up = r > 0 ? best[r - 1][c] : Infinity;",
    "      const left = c > 0 ? best[r][c - 1] : Infinity;",
    "      best[r][c] += Math.min(up, left);",
    "    }",
    "  }",
    "  return best[R - 1][C - 1];",
    "}"
   ],
   "why": "In chapter 21 a field like this needed a heap. What is different here, so that a plain table is enough?",
   "world": "A printer plans the cheapest path of its head across a page in this way.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      1,
      3,
      1
     ],
     [
      1,
      5,
      1
     ],
     [
      4,
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
     "say": "The entry for a square is the cheapest total to stand on it.",
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
     "card": "entry = cheapest total to here",
     "arrows": null
    },
    {
     "say": "Pip arrives from above, or from the left. Take the cheaper of the two, and add the cost of the square itself.",
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
     "card": "own cost + min(above, left)",
     "arrows": null
    },
    {
     "say": "The table starts as a copy of the grid. The first square keeps its own cost. One.",
     "line": 3,
     "ptr": null,
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
     "vars": null,
     "box": null,
     "card": "the start: 1",
     "arrows": null
    },
    {
     "say": "Along the top row, Pip can only come from the left. One plus three. Four. Then five.",
     "line": 9,
     "ptr": null,
     "hot": [
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "1": 4,
      "2": 5
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "top row: 4, then 5",
     "arrows": null
    },
    {
     "say": "Down the left column, only from above. Two. Then six.",
     "line": 9,
     "ptr": null,
     "hot": [
      3,
      6
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "3": 2,
      "6": 6
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "left column: 2, then 6",
     "arrows": null
    },
    {
     "say": "The middle square costs five. Above it is four. On its left is two. Which one is added?",
     "line": 9,
     "ptr": null,
     "hot": [
      4,
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
     "card": "5 + min(4, 2) = ?",
     "arrows": null
    },
    {
     "say": "The two. Seven. And the square on its right. One, plus the cheaper of five and seven. Six.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "4": 7,
      "5": 6
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "5 + 2 = 7 · then 1 + 5 = 6",
     "arrows": null
    },
    {
     "say": "The bottom row. Two, plus the cheaper of seven and six. Eight. And the corner. One, plus the cheaper of six and eight. Seven.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [
      8
     ],
     "bad": [],
     "free": [],
     "set": {
      "7": 8,
      "8": 7
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "2 + 6 = 8 · then 1 + 6 = 7",
     "arrows": null
    },
    {
     "say": "Line twelve returns the corner. Seven.",
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
     "say": "One entry per square of the table. O of rows times columns.",
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
     "card": "one entry per square → O(R × C)",
     "arrows": null
    },
    {
     "say": "The table itself. The same size.",
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
     "card": "the table → the same space",
     "arrows": null
    },
    {
     "say": "A printer plans the cheapest path of its head across a page in this way.",
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
     "card": "the cheapest path across a page",
     "arrows": null
    }
   ]
  },
  {
   "id": "dq3",
   "num": 3,
   "title": "Rocks in the Field",
   "fn": "blockedPaths",
   "ask": "In the grid, <b>1 is a rock</b> and 0 is open. Stepping only <b>right or down</b>, return the number of routes from the top-left to the bottom-right square that touch no rock. (If the start or the end is a rock, the answer is 0.)",
   "spec": "blockedPaths([[0, 0, 0], [0, 1, 0], [0, 0, 0]]) → 2",
   "start": "// grid is an array of rows. 1 = rock, 0 = open.\nfunction blockedPaths(grid) {\n  // your code here\n}\n",
   "plan": [
    "You have counted routes before. What is the entry for a rock?",
    "Does the rule \"from above plus from the left\" still work next to a rock?",
    "What about the top row behind a rock?"
   ],
   "hints": [
    "Start every entry at 0. A rock keeps 0.",
    "The start square (if it is open) gets 1.",
    "Every other open square adds the entry above and the entry on the left, when they exist."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        0,
        0,
        0
       ],
       [
        0,
        1,
        0
       ],
       [
        0,
        0,
        0
       ]
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       [
        0
       ]
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       [
        1
       ]
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       [
        0,
        1
       ],
       [
        0,
        0
       ]
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       [
        0,
        0
       ],
       [
        1,
        1
       ]
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       [
        0,
        0,
        0
       ],
       [
        0,
        0,
        0
       ]
      ]
     ],
     "want": 3
    },
    {
     "args": [
      [
       [
        0,
        1,
        0
       ],
       [
        0,
        1,
        0
       ],
       [
        0,
        0,
        0
       ]
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
    "function blockedPaths(grid) {",
    "  const R = grid.length, C = grid[0].length;",
    "  const ways = grid.map((row) => row.map(() => 0));",
    "  for (let r = 0; r < R; r++) {",
    "    for (let c = 0; c < C; c++) {",
    "      if (grid[r][c] === 1) continue;",
    "      if (r === 0 && c === 0) ways[r][c] = 1;",
    "      if (r > 0) ways[r][c] += ways[r - 1][c];",
    "      if (c > 0) ways[r][c] += ways[r][c - 1];",
    "    }",
    "  }",
    "  return ways[R - 1][C - 1];",
    "}"
   ],
   "why": "A rock in the top row leaves every square to its right in that row with 0 routes. Which lines make that happen without a special case?",
   "world": "A delivery robot counts its routes around closed aisles in exactly this way.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      "",
      "",
      ""
     ],
     [
      "",
      "#",
      ""
     ],
     [
      "",
      "",
      ""
     ]
    ],
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
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
     "say": "It is the same table as before. Routes from above, plus routes from the left.",
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
     "card": "from above + from the left",
     "arrows": null
    },
    {
     "say": "One change. A rock gets zero. So nothing can ever come through it.",
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
     "card": "a rock: 0 routes",
     "arrows": null
    },
    {
     "say": "The start gets one. And along the top row, and down the left column, the one is passed along.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      2,
      3,
      6
     ],
     "bad": [],
     "free": [],
     "set": {
      "0": 1,
      "1": 1,
      "2": 1,
      "3": 1,
      "6": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "the edges: 1 route each",
     "arrows": null
    },
    {
     "say": "The middle square is a rock. Line six skips it. Its entry stays zero.",
     "line": 6,
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
     "card": "the rock keeps 0",
     "arrows": null
    },
    {
     "say": "The square to the right of the rock. One from above. And from the left, the rock. How many routes?",
     "line": 9,
     "ptr": null,
     "hot": [
      5,
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
     "card": "1 from above + the rock → ?",
     "arrows": null
    },
    {
     "say": "One. The rock adds nothing.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "5": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + 0 = 1",
     "arrows": null
    },
    {
     "say": "Below the rock, the same. Zero from above. One from the left. One.",
     "line": 9,
     "ptr": null,
     "hot": [
      7,
      6
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "7": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "0 + 1 = 1",
     "arrows": null
    },
    {
     "say": "And the corner. One from above. One from the left. Two.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [
      8
     ],
     "bad": [],
     "free": [],
     "set": {
      "8": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + 1 = 2",
     "arrows": null
    },
    {
     "say": "Line twelve returns the corner. Two routes.",
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
     "say": "One entry per square of the table. O of rows times columns.",
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
     "card": "one entry per square → O(R × C)",
     "arrows": null
    },
    {
     "say": "The table itself. The same size.",
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
     "card": "the table → the same space",
     "arrows": null
    },
    {
     "say": "A delivery robot counts its routes around closed aisles in exactly this way.",
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
     "card": "routes around closed aisles",
     "arrows": null
    }
   ]
  },
  {
   "id": "dq4",
   "num": 4,
   "title": "What Two Words Share",
   "fn": "longestShared",
   "ask": "Return the length of the longest run of letters that appears in <b>both</b> words <b>in the same order</b>. Letters may be skipped in either word.",
   "spec": "longestShared(\"sea\", \"eat\") → 2      (\"ea\")      longestShared(\"abcde\", \"ace\") → 3",
   "start": "function longestShared(a, b) {\n  // your code here\n}\n",
   "plan": [
    "What should the entry for row i and column j mean?",
    "What do you do when the two letters are the same?",
    "And when they differ?"
   ],
   "hints": [
    "Let best[i][j] be the answer for the first i letters of a and the first j letters of b. Row 0 and column 0 are all 0.",
    "If a[i - 1] === b[j - 1]: best[i][j] = best[i - 1][j - 1] + 1.",
    "Otherwise it is the larger of best[i - 1][j] and best[i][j - 1]."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "sea",
      "eat"
     ],
     "want": 2
    },
    {
     "args": [
      "",
      "abc"
     ],
     "want": 0
    },
    {
     "args": [
      "abc",
      "abc"
     ],
     "want": 3
    },
    {
     "args": [
      "abc",
      "def"
     ],
     "want": 0
    },
    {
     "args": [
      "abcde",
      "ace"
     ],
     "want": 3
    },
    {
     "args": [
      "a",
      "a"
     ],
     "want": 1
    },
    {
     "args": [
      "ab",
      "ba"
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
    "function longestShared(a, b) {",
    "  const best = [];",
    "  for (let i = 0; i <= a.length; i++) {",
    "    best.push(new Array(b.length + 1).fill(0));",
    "  }",
    "  for (let i = 1; i <= a.length; i++) {",
    "    for (let j = 1; j <= b.length; j++) {",
    "      if (a[i - 1] === b[j - 1]) {",
    "        best[i][j] = best[i - 1][j - 1] + 1;",
    "      } else {",
    "        best[i][j] = Math.max(best[i - 1][j], best[i][j - 1]);",
    "      }",
    "    }",
    "  }",
    "  return best[a.length][b.length];",
    "}"
   ],
   "why": "When the letters differ, why is it safe to look only above and to the left, and not at the diagonal?",
   "world": "A tool that compares two versions of a file finds the lines they share like this. Everything else is shown as changed.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      "",
      "e",
      "a",
      "t"
     ],
     [
      "s",
      "",
      "",
      ""
     ],
     [
      "e",
      "",
      "",
      ""
     ],
     [
      "a",
      "",
      "",
      ""
     ]
    ],
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
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
     "say": "One entry answers the question for two beginnings. The letters up to this row, and the letters up to this column.",
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
     "card": "entry = answer for two beginnings",
     "arrows": null
    },
    {
     "say": "Same letters extend the diagonal entry by one. Different letters take the better of above, and left.",
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
     "card": "same → diagonal + 1 · else max",
     "arrows": null
    },
    {
     "say": "Sea runs down the side. Eat runs along the top.",
     "line": 4,
     "ptr": null,
     "hot": [
      1,
      2,
      3,
      4,
      8,
      12
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
     "card": "rows: s e a · columns: e a t",
     "arrows": null
    },
    {
     "say": "The row for s. S matches none of them. Zeros.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "5": 0,
      "6": 0,
      "7": 0
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "\"s\" shares nothing: 0 0 0",
     "arrows": null
    },
    {
     "say": "The row for e. E against e. The same letter. Diagonal, plus one. One.",
     "line": 9,
     "ptr": null,
     "hot": [
      8,
      1
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "9": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "e = e → 0 + 1 = 1",
     "arrows": null
    },
    {
     "say": "The rest of that row has no match. Each takes the better of above, and left. One, and one.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "10": 1,
      "11": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "no match → max(above, left) = 1",
     "arrows": null
    },
    {
     "say": "The row for a. Against e, no match. One. Then a against a. The same letter. The diagonal holds one. What goes here?",
     "line": 8,
     "ptr": null,
     "hot": [
      12,
      2,
      9
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "13": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a = a → diagonal 1 + 1 = ?",
     "arrows": null
    },
    {
     "say": "Two. E, a.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [
      14
     ],
     "bad": [],
     "free": [],
     "set": {
      "14": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "shared: \"ea\" → 2",
     "arrows": null
    },
    {
     "say": "The last entry has no match, and keeps the two. Line fifteen returns it.",
     "line": 15,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "15": 2
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
     "say": "One entry per square of the table. O of n times m.",
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
     "card": "one entry per square → O(n × m)",
     "arrows": null
    },
    {
     "say": "The table itself. The same size.",
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
     "card": "the table → the same space",
     "arrows": null
    },
    {
     "say": "A tool that compares two versions of a file finds the lines they share like this. Everything else is shown as changed.",
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
     "card": "comparing two versions of a file",
     "arrows": null
    }
   ]
  },
  {
   "id": "dq5",
   "num": 5,
   "title": "How Far Apart?",
   "fn": "editSteps",
   "ask": "One change is: <b>insert</b> a letter, <b>delete</b> a letter, or <b>replace</b> a letter. Return the fewest changes that turn word a into word b.",
   "spec": "editSteps(\"cat\", \"cut\") → 1      editSteps(\"horse\", \"ros\") → 3",
   "start": "function editSteps(a, b) {\n  // your code here\n}\n",
   "plan": [
    "How many changes turn a word into nothing? And nothing into a word?",
    "What should the entry for (i, j) mean?",
    "If the two last letters are the same, what does that cost? If not, which three things could you do?"
   ],
   "hints": [
    "Let d[i][j] be the fewest changes from the first i letters of a to the first j letters of b. d[i][0] = i and d[0][j] = j.",
    "Same letters: d[i][j] = d[i - 1][j - 1].",
    "Different: 1 + the smallest of d[i - 1][j - 1] (replace), d[i - 1][j] (delete) and d[i][j - 1] (insert)."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "cat",
      "cut"
     ],
     "want": 1
    },
    {
     "args": [
      "",
      "abc"
     ],
     "want": 3
    },
    {
     "args": [
      "abc",
      ""
     ],
     "want": 3
    },
    {
     "args": [
      "same",
      "same"
     ],
     "want": 0
    },
    {
     "args": [
      "horse",
      "ros"
     ],
     "want": 3
    },
    {
     "args": [
      "a",
      "b"
     ],
     "want": 1
    },
    {
     "args": [
      "kitten",
      "sitting"
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
    "function editSteps(a, b) {",
    "  const d = [];",
    "  for (let i = 0; i <= a.length; i++) {",
    "    const row = [i];",
    "    const up = d[i - 1];",
    "    for (let j = 1; j <= b.length; j++) {",
    "      if (i === 0) row[j] = j;",
    "      else if (a[i - 1] === b[j - 1]) row[j] = up[j - 1];",
    "      else row[j] = 1 + Math.min(up[j - 1], up[j], row[j - 1]);",
    "    }",
    "    d.push(row);",
    "  }",
    "  return d[a.length][b.length];",
    "}"
   ],
   "why": "Each of the three neighbours stands for one kind of change. Which neighbour is \"replace\", which is \"delete\", which is \"insert\"?",
   "world": "A spell checker ranks its suggestions this way. The word with the fewest changes from your typo comes first.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      "",
      "-",
      "c",
      "u",
      "t"
     ],
     [
      "-",
      "",
      "",
      "",
      ""
     ],
     [
      "c",
      "",
      "",
      "",
      ""
     ],
     [
      "a",
      "",
      "",
      "",
      ""
     ],
     [
      "t",
      "",
      "",
      "",
      ""
     ]
    ],
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
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
     "say": "One entry is the fewest changes, from a beginning of the first word, to a beginning of the second.",
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
     "card": "entry = fewest changes so far",
     "arrows": null
    },
    {
     "say": "Same letters cost nothing. Copy the diagonal. Different letters cost one, plus the smallest of the three neighbours.",
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
     "card": "same → diagonal · else 1 + min of 3",
     "arrows": null
    },
    {
     "say": "The dash stands for an empty text. Turning nothing into c, u, t takes one, two, three insertions. And the first column is the same, with deletions.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "6": 0,
      "7": 1,
      "8": 2,
      "9": 3,
      "11": 1,
      "16": 2,
      "21": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "to or from nothing: 0 1 2 3",
     "arrows": null
    },
    {
     "say": "C against c. The same letter. Nothing to change. Copy the diagonal. Zero.",
     "line": 8,
     "ptr": null,
     "hot": [
      10,
      2
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "12": 0
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "c = c → diagonal: 0",
     "arrows": null
    },
    {
     "say": "The rest of that row costs one more each time.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "13": 1,
      "14": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "then 1, then 2",
     "arrows": null
    },
    {
     "say": "The row for a. Against c, one. Then a against u. Different. The three neighbours hold zero, one, and one. What goes here?",
     "line": 9,
     "ptr": null,
     "hot": [
      12,
      13,
      17
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "17": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a ≠ u → 1 + min(0, 1, 1) = ?",
     "arrows": null
    },
    {
     "say": "One. Replace the a with a u.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "18": 1,
      "19": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "replace a → u: 1",
     "arrows": null
    },
    {
     "say": "The row for t. Two, two. Then t against t. The same letter. Copy the diagonal. One.",
     "line": 8,
     "ptr": null,
     "hot": [
      18
     ],
     "ok": [
      24
     ],
     "bad": [],
     "free": [],
     "set": {
      "22": 2,
      "23": 2,
      "24": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "t = t → diagonal: 1",
     "arrows": null
    },
    {
     "say": "Line thirteen returns the corner. One change.",
     "line": 13,
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
     "say": "One entry per square of the table. O of n times m.",
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
     "card": "one entry per square → O(n × m)",
     "arrows": null
    },
    {
     "say": "The table itself. The same size.",
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
     "card": "the table → the same space",
     "arrows": null
    },
    {
     "say": "A spell checker ranks its suggestions this way. The word with the fewest changes from your typo comes first.",
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
     "card": "spell-check suggestions",
     "arrows": null
    }
   ]
  },
  {
   "id": "dq6",
   "num": 6,
   "title": "The Best Load",
   "fn": "bestPack",
   "ask": "Parcel i weighs <b>weights[i]</b> and is worth <b>values[i]</b>. The cart carries at most <b>cap</b>. Each parcel is taken <b>whole or not at all</b>, and only once. Return the largest total value the cart can carry.",
   "spec": "bestPack([1, 3, 4], [15, 20, 30], 4) → 35      (the parcels of weight 1 and 3)",
   "start": "// weights and values have the same length. cap is 0 or more.\nfunction bestPack(weights, values, cap) {\n  // your code here\n}\n",
   "plan": [
    "Taking the most valuable parcel first gives 30 here. So greedy is out. What two things does an answer depend on?",
    "For one parcel and one amount of room: what are the choices?",
    "If you take the parcel, which entry tells you what to do with the room that is left?"
   ],
   "hints": [
    "Keep a row prev: prev[c] is the best value with room c, using the parcels seen so far. It starts as all 0.",
    "For a new parcel, start the new row as a copy of prev (the \"skip\" choice).",
    "For each room c that fits it: take = value + prev[c - weight]. Keep the larger. Then prev becomes the new row."
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
      [
       15,
       20,
       30
      ],
      4
     ],
     "want": 35
    },
    {
     "args": [
      [],
      [],
      5
     ],
     "want": 0
    },
    {
     "args": [
      [
       5
      ],
      [
       10
      ],
      4
     ],
     "want": 0
    },
    {
     "args": [
      [
       2,
       2,
       2
      ],
      [
       3,
       4,
       5
      ],
      4
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
      [
       6,
       10,
       12
      ],
      5
     ],
     "want": 22
    },
    {
     "args": [
      [
       4
      ],
      [
       9
      ],
      4
     ],
     "want": 9
    },
    {
     "args": [
      [
       3,
       4,
       5
      ],
      [
       4,
       5,
       6
      ],
      7
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
    "function bestPack(weights, values, cap) {",
    "  let prev = new Array(cap + 1).fill(0);",
    "  for (let i = 0; i < weights.length; i++) {",
    "    const row = [...prev];",
    "    for (let c = weights[i]; c <= cap; c++) {",
    "      const take = values[i] + prev[c - weights[i]];",
    "      if (take > row[c]) row[c] = take;",
    "    }",
    "    prev = row;",
    "  }",
    "  return prev[cap];",
    "}"
   ],
   "why": "Line 6 reads from prev, the row above, and not from the row being filled. What would go wrong otherwise?",
   "world": "An airline loads cargo like this. The most valuable set of crates that stays under the weight limit.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      "",
      0,
      1,
      2,
      3,
      4
     ],
     [
      "w1",
      "",
      "",
      "",
      "",
      ""
     ],
     [
      "w3",
      "",
      "",
      "",
      "",
      ""
     ],
     [
      "w4",
      "",
      "",
      "",
      "",
      ""
     ]
    ],
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
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
     "say": "The answer depends on two things. Which parcels are allowed so far. And how much room there is.",
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
     "card": "rows: parcels so far · columns: room",
     "arrows": null
    },
    {
     "say": "For each parcel. Skip it, and keep the entry above. Or take it, and add the best for the room that is left.",
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
     "card": "skip → above · take → value + rest",
     "arrows": null
    },
    {
     "say": "The columns are the room in the cart. Zero to four. Each row allows one more parcel. Weight one, worth fifteen. Weight three, worth twenty. Weight four, worth thirty.",
     "line": 2,
     "ptr": null,
     "hot": [
      1,
      2,
      3,
      4,
      5,
      6,
      12,
      18
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
     "card": "w1 → 15 · w3 → 20 · w4 → 30",
     "arrows": null
    },
    {
     "say": "The first row. Only the light parcel. With room for one or more, take it. Fifteen.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "7": 0,
      "8": 15,
      "9": 15,
      "10": 15,
      "11": 15
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "w1 fits from room 1: 15",
     "arrows": null
    },
    {
     "say": "The second row adds the parcel of weight three. With less room than three, it cannot go in. Copy the row above.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "13": 0,
      "14": 15,
      "15": 15
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "room < 3 → copy the row above",
     "arrows": null
    },
    {
     "say": "Room three. Skipping keeps fifteen. Taking gives twenty, plus the best for the room that is left. None. Twenty.",
     "line": 7,
     "ptr": null,
     "hot": [
      16,
      7
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "16": 20
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "max(15, 20 + 0) = 20",
     "arrows": null
    },
    {
     "say": "Room four. Skipping keeps fifteen. Taking gives twenty, plus the best for a room of one, in the row above. What is that?",
     "line": 6,
     "ptr": null,
     "hot": [
      17,
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
     "card": "take: 20 + best(room 1) = ?",
     "arrows": null
    },
    {
     "say": "Fifteen. So thirty five. Both light parcels.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      17
     ],
     "bad": [],
     "free": [],
     "set": {
      "17": 35
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "20 + 15 = 35",
     "arrows": null
    },
    {
     "say": "The last row adds the heavy parcel. It only fits with room four. Thirty, against thirty five. The table keeps thirty five.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      23
     ],
     "bad": [],
     "free": [],
     "set": {
      "19": 0,
      "20": 15,
      "21": 15,
      "22": 20,
      "23": 35
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "max(35, 30 + 0) = 35",
     "arrows": null
    },
    {
     "say": "Line eleven returns the last entry. Thirty five.",
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
     "say": "One entry for every parcel, and every amount of room. O of parcels, times room.",
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
     "card": "O(parcels × room)",
     "arrows": null
    },
    {
     "say": "Only the row above is ever needed. So two rows are enough.",
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
     "card": "2 rows → O(room) space",
     "arrows": null
    },
    {
     "say": "An airline loads cargo like this. The most valuable set of crates that stays under the weight limit.",
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
     "card": "cargo under a weight limit",
     "arrows": null
    }
   ]
  },
  {
   "id": "dq7",
   "num": 7,
   "title": "The Biggest Square",
   "fn": "biggestSquare",
   "ask": "The grid holds 1s and 0s. Return the <b>side length</b> of the biggest square that contains <b>only 1s</b> (0 if there is no 1).",
   "spec": "biggestSquare([[1, 1, 0], [1, 1, 1], [0, 1, 1]]) → 2",
   "start": "// grid is an array of rows of 1s and 0s.\nfunction biggestSquare(grid) {\n  // your code here\n}\n",
   "plan": [
    "Checking every possible square is slow. What could the entry for one square of the grid mean?",
    "A square of side 3 ends at a corner. What must be true just above it, just left of it, and diagonally?",
    "Where is the answer in the table?"
   ],
   "hints": [
    "Let side[r][c] be the side of the biggest all-1 square whose bottom-right corner is (r, c). A 0 gives 0.",
    "For a 1: side[r][c] = 1 + the smallest of side[r - 1][c], side[r][c - 1] and side[r - 1][c - 1] (0 outside the grid).",
    "The answer is the largest entry."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        1,
        1,
        0
       ],
       [
        1,
        1,
        1
       ],
       [
        0,
        1,
        1
       ]
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       [
        0
       ]
      ]
     ],
     "want": 0
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
      [
       [
        1,
        1
       ],
       [
        1,
        1
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
        0
       ],
       [
        0,
        1
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
        1,
        1
       ],
       [
        1,
        1,
        1
       ],
       [
        1,
        1,
        1
       ]
      ]
     ],
     "want": 3
    },
    {
     "args": [
      [
       [
        0,
        1,
        1,
        1
       ],
       [
        1,
        1,
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
     "want": 3
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function biggestSquare(grid) {",
    "  const R = grid.length, C = grid[0].length;",
    "  const side = grid.map((row) => row.map(() => 0));",
    "  let best = 0;",
    "  for (let r = 0; r < R; r++) {",
    "    for (let c = 0; c < C; c++) {",
    "      if (grid[r][c] === 0) continue;",
    "      const up = r > 0 ? side[r - 1][c] : 0;",
    "      const left = c > 0 ? side[r][c - 1] : 0;",
    "      const diag = r > 0 && c > 0 ? side[r - 1][c - 1] : 0;",
    "      side[r][c] = 1 + Math.min(up, left, diag);",
    "      best = Math.max(best, side[r][c]);",
    "    }",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "Why the smallest of the three neighbours, and not the largest?",
   "world": "A map tool finds the largest square plot of free land on a grid map like this.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      1,
      1,
      0
     ],
     [
      1,
      1,
      1
     ],
     [
      0,
      1,
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
     "say": "One entry means: the side of the biggest square of ones, that has its bottom right corner on this square.",
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
     "card": "entry = biggest square ending here",
     "arrows": null
    },
    {
     "say": "It can be one bigger than the smallest of its three neighbours. Above, left, and diagonal.",
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
     "card": "1 + min(above, left, diagonal)",
     "arrows": null
    },
    {
     "say": "In the top row and the left column, a one can only end a square of side one. And a zero is zero.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
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
     "vars": {
      "best": 1
     },
     "box": null,
     "card": "the edges: 1 stays 1 · 0 stays 0",
     "arrows": null
    },
    {
     "say": "The middle. Above, left and diagonal are all one. So a square of side two ends here.",
     "line": 11,
     "ptr": null,
     "hot": [
      0,
      1,
      3
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "4": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "best": 2
     },
     "box": null,
     "card": "1 + min(1, 1, 1) = 2",
     "arrows": null
    },
    {
     "say": "The square on its right. Its left neighbour holds two. But above it is a zero. What is the biggest square ending here?",
     "line": 11,
     "ptr": null,
     "hot": [
      5,
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
     "card": "1 + min(0, 2, 1) = ?",
     "arrows": null
    },
    {
     "say": "One. A single zero among the three neighbours blocks any bigger square.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "5": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a 0 nearby → side 1 only",
     "arrows": null
    },
    {
     "say": "The bottom row. The middle one has a zero on its left. One. And the corner. Above, one. Left, one. Diagonal, two. The smallest is one. Side two.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [
      8
     ],
     "bad": [],
     "free": [],
     "set": {
      "7": 1,
      "8": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + min(1, 1, 2) = 2",
     "arrows": null
    },
    {
     "say": "Line fifteen returns the biggest side seen. Two.",
     "line": 15,
     "ptr": null,
     "hot": [],
     "ok": [
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
     "say": "One entry per square of the table. O of rows times columns.",
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
     "card": "one entry per square → O(R × C)",
     "arrows": null
    },
    {
     "say": "The table itself. The same size.",
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
     "card": "the table → the same space",
     "arrows": null
    },
    {
     "say": "A map tool finds the largest square plot of free land on a grid map like this.",
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
     "card": "the largest free square plot",
     "arrows": null
    }
   ]
  }
 ]
};
