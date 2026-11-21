window.CHAPTER = {
 "id": "graphs",
 "title": "Graphs and Grids",
 "sub": "CHAPTER 18 · GRAPHS",
 "key": "burrow-ch-graphs",
 "next": {
  "href": "chapter.html?c=topo",
  "label": "Chapter 19: Topological Sort"
 },
 "prev": {
  "href": "chapter.html?c=mixed3",
  "label": "Mixed set 3"
 },
 "mock": false,
 "target": null,
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "gr0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Things, and what joins them",
   "intro": "What a graph is, and why maps, friendships and game boards are all the same problem."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "grt1",
   "label": "Theory 1",
   "short": "T1",
   "name": "Neighbour lists and a seen set",
   "intro": "How to store a graph, how to explore it deep first, and the one thing a tree never needed. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "grt2",
   "label": "Theory 2",
   "short": "T2",
   "name": "A grid is a graph · fewest steps",
   "intro": "Squares are nodes, sides are edges. And why level by level gives the shortest route. One guess."
  }
 ],
 "notes": {
  "w": "<h3>The words</h3><ul><li><b>Graph:</b> a set of <b>nodes</b> and the <b>edges</b> that join them. Unlike a tree there is no root, there may be loops, and it may be in several separate pieces.</li>\n      <li><b>Neighbours:</b> the nodes one edge away. <b>Path:</b> a walk along edges. <b>Connected group (component):</b> everything you can reach from one node.</li>\n      <li><b>Signals:</b> \"connected\", \"can you get from A to B\", islands, regions, \"the fewest steps\".</li></ul>",
  "t1": "<h3>Key ideas</h3><ul><li><b>Store a graph as neighbour lists</b> (an adjacency list): <code>near[a]</code> is the list of nodes joined to a. Build it once from the edge pairs.</li>\n      <li><b>Explore deep first</b> exactly like a tree: visit a node, then visit each neighbour.</li>\n      <li><b>A graph can lead you back to where you were.</b> Keep a <b>seen set</b>, and never visit a node twice. Without it the walk never ends.</li>\n      <li><b>Cost:</b> every node and every edge is handled once: O(nodes + edges).</li>\n      <li><b>To count the separate groups:</b> start a walk from every node that is not seen yet; each new start is one more group.</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>A grid is a graph:</b> each square is a node, and its neighbours are the squares above, below, left and right.</li>\n      <li><b>No neighbour lists are needed:</b> work the four neighbours out from (row, column), and check they are inside the grid.</li>\n      <li><b>Mark a square as seen</b> in a set, or by changing its value in the grid.</li>\n      <li><b>Fewest steps → level by level (BFS).</b> Level 0 is the start, level 1 is everything one step away, and so on. The level on which you first meet the target is the shortest distance.</li>\n      <li><b>Only exploring or counting → deep first (DFS)</b> is shorter to write.</li></ul>"
 },
 "quiz": {
  "grt1-q1": {
   "ask": "The walk went 3 → 1 → 0. One of the neighbours of 0 is 1. What should happen when the walk looks at 1 again?",
   "opts": [
    "Skip it: 1 is already in the seen set",
    "Visit it again",
    "Stop the whole walk"
   ],
   "right": 0,
   "why": "Visiting it again would send the walk round in circles for ever. The seen set is what stops that."
  },
  "grt2-q1": {
   "ask": "Level 0 is the start square. Level 1 holds the squares one step away. Where are the squares of level 2?",
   "opts": [
    "Two steps away, by the shortest route",
    "Anywhere not yet visited",
    "In the next row down"
   ],
   "right": 0,
   "why": "Each level is built from the unseen neighbours of the level before, so everything on level 2 is exactly two steps from the start."
  },
  "gr1s-q": {
   "ask": "The scan reaches a 1 that has not been sunk, and count is 1. What does line 12 do?",
   "opts": [
    "count becomes 2, and that island is sunk",
    "Nothing: it was already counted",
    "count becomes 4"
   ],
   "right": 0,
   "why": "Any land the scan still finds must belong to an island that was never touched before."
  },
  "gr2s-q": {
   "ask": "paint reaches a square that holds 3, and the old colour is 1. What happens?",
   "opts": [
    "It returns: this square is not the old colour",
    "It paints the square 9",
    "It changes old to 3"
   ],
   "right": 0,
   "why": "grid[y][x] !== old, so the call returns. The paint does not spread through other colours."
  },
  "gr3s-q": {
   "ask": "The square in the middle has a wall on its left, a wall below, and a marked square above. Which squares are added to the next level?",
   "opts": [
    "Only the open square on its right",
    "All four neighbours",
    "None"
   ],
   "right": 0,
   "why": "Line 13 skips walls, marked squares and anything outside. Only the open square on the right is left."
  },
  "gr4s-q": {
   "ask": "The walk is on 0 and looks at its neighbour 1, which is already in the seen set. What does visit(1) return?",
   "opts": [
    "false, at once",
    "true",
    "It walks on to 3 again"
   ],
   "right": 0,
   "why": "Line 10: a node that was seen before is not explored again. That is what prevents walking in circles."
  },
  "gr5s-q": {
   "ask": "Node 3 has not been seen and has no edges. groups is 1. What does line 15 do?",
   "opts": [
    "groups becomes 2: a group of one",
    "Nothing, because it has no edges",
    "groups becomes 4"
   ],
   "right": 0,
   "why": "An unseen node always starts a new group, even if the visit finds nobody else in it."
  },
  "gr6s-q": {
   "ask": "1 is joined to 0, 3 and 5. 2 is joined to 0 and 4. Node 0 has been seen. What is the next level?",
   "opts": [
    "3, 5 and 4",
    "0, 3, 5, 0 and 4",
    "3 and 4"
   ],
   "right": 0,
   "why": "Line 10 skips 0 because it is in the seen set. Everything else is new: 3, 5 and 4."
  },
  "gr7s-q": {
   "ask": "The walk is on 3 and came from 2. Its neighbour 1 is in the seen set. What does line 12 do?",
   "opts": [
    "Returns true: a loop",
    "Skips 1 and returns false",
    "Visits 1 again"
   ],
   "right": 0,
   "why": "1 was reached before by another route, and it is not the node we came from: 1 → 2 → 3 → 1 is a loop."
  }
 },
 "problems": [
  {
   "id": "gr1",
   "num": 1,
   "title": "Count the Islands",
   "fn": "countIslands",
   "ask": "The grid shows a sea: <b>1 is land, 0 is water</b>. Squares of land that touch <b>side to side</b> (not diagonally) belong to the same island. Return the <b>number of islands</b>. The grid may have no rows at all: that is 0 islands. You may change the grid.",
   "spec": "countIslands([[1, 1, 0, 0], [1, 0, 0, 1], [0, 0, 1, 1]]) → 2",
   "start": "// grid is an array of rows. 1 = land, 0 = water.\nfunction countIslands(grid) {\n  // your code here\n}\n",
   "plan": [
    "Walk the grid square by square. You meet a 1. Is it a new island, or part of one you already counted? How could you make that question disappear?",
    "Starting from one square of land, how do you reach the whole island?",
    "What stops that walk from going round in circles, or off the edge?"
   ],
   "hints": [
    "Scan every square. When you find land, count one island, then remove that whole island so it is never counted again.",
    "To remove it: a function sink(r, c) that turns the square into water and calls itself on the four neighbours.",
    "sink returns at once when (r, c) is outside the grid or is not land."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        1,
        1,
        0,
        0
       ],
       [
        1,
        0,
        0,
        1
       ],
       [
        0,
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
      []
     ],
     "want": 0
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
        0,
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
        1
       ],
       [
        1,
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
        0
       ],
       [
        0,
        1
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
    "function countIslands(grid) {",
    "  const sink = (r, c) => {",
    "    if (r < 0 || c < 0 || r >= grid.length) return;",
    "    if (c >= grid[0].length || grid[r][c] !== 1) return;",
    "    grid[r][c] = 0;",
    "    sink(r + 1, c); sink(r - 1, c);",
    "    sink(r, c + 1); sink(r, c - 1);",
    "  };",
    "  let count = 0;",
    "  for (let r = 0; r < grid.length; r++) {",
    "    for (let c = 0; c < grid[0].length; c++) {",
    "      if (grid[r][c] === 1) { count++; sink(r, c); }",
    "    }",
    "  }",
    "  return count;",
    "}"
   ],
   "why": "Line 5 turns the land into water before the four calls. What would happen if it came after them?",
   "topic": null,
   "world": "A photo app finds the separate objects in a picture this way. Each blob of touching pixels is one island.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      1,
      1,
      0,
      0
     ],
     [
      1,
      0,
      0,
      1
     ],
     [
      0,
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
    "ptrs": [
     {
      "id": "at",
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
     "say": "Scan every square. The first time you touch an island, count it.",
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
     "card": "first touch → count one island",
     "arrows": null
    },
    {
     "say": "Then sink the whole island, so no other square of it can be counted. Deep first, through the four neighbours.",
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
     "card": "then sink all of it",
     "arrows": null
    },
    {
     "say": "The scan starts at the top left. It is land. Line twelve counts one island, and calls sink.",
     "line": 12,
     "ptr": {
      "at": 0
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
      "count": 1
     },
     "box": null,
     "card": "land → count = 1",
     "arrows": null
    },
    {
     "say": "Sink turns this square into water, and calls itself on the four neighbours. The land to the right, and the land below, are sunk the same way.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      4
     ],
     "bad": [],
     "free": [],
     "set": {
      "0": 0,
      "1": 0,
      "4": 0
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "the whole island becomes 0",
     "arrows": null
    },
    {
     "say": "For water, or a square outside the grid, lines three and four return at once. That is what stops the walk.",
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
     "card": "water or outside → return",
     "arrows": null
    },
    {
     "say": "The scan goes on. Every square it meets is water now, until this one. Land. What happens to count?",
     "line": 12,
     "ptr": {
      "at": 7
     },
     "hot": [
      7
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
     "card": "land again → count = ?",
     "arrows": null
    },
    {
     "say": "Two. A second island. Sink removes it. This square, the one below it, and the one beside that.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      7,
      11,
      10
     ],
     "bad": [],
     "free": [],
     "set": {
      "7": 0,
      "10": 0,
      "11": 0
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "count": 2
     },
     "box": null,
     "card": "count = 2 · sunk",
     "arrows": null
    },
    {
     "say": "The scan finishes. No land is left. Line fifteen returns two.",
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
     "card": "",
     "arrows": null
    },
    {
     "say": "Every square is looked at by the scan, and sunk at most once. O of rows times columns.",
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
     "say": "The waiting calls can be as deep as one whole island.",
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
     "card": "waiting calls: up to R × C",
     "arrows": null
    },
    {
     "say": "A photo app finds the separate objects in a picture this way. Each blob of touching pixels is one island.",
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
     "card": "separate objects in a photo",
     "arrows": null
    }
   ]
  },
  {
   "id": "gr2",
   "num": 2,
   "title": "The Paint Bucket",
   "fn": "floodFill",
   "ask": "Like the paint bucket in a drawing program: start at the square in <b>row r, column c</b> (both counted from 0). Give <b>color</b> to that square and to every square of the <b>same old colour</b> connected to it side to side. Return the grid.",
   "spec": "floodFill([[1, 1, 2], [1, 2, 2], [3, 1, 2]], 0, 0, 9) → [[9, 9, 2], [9, 2, 2], [3, 1, 2]]",
   "start": "// grid is an array of rows of colour numbers. (r, c) is the starting square.\nfunction floodFill(grid, r, c, color) {\n  // your code here\n}\n",
   "plan": [
    "Which squares must change? Describe them starting from (r, c).",
    "What do you need to remember before you start painting?",
    "What happens if the new colour is the same as the old one?"
   ],
   "hints": [
    "Remember the old colour of the starting square. If it already equals the new colour, return the grid unchanged.",
    "paint(y, x): return if outside the grid or if the square is not the old colour. Otherwise set it to the new colour.",
    "Then call paint on the four neighbours. The new colour itself marks a square as done."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        1,
        1,
        2
       ],
       [
        1,
        2,
        2
       ],
       [
        3,
        1,
        2
       ]
      ],
      0,
      0,
      9
     ],
     "want": [
      [
       9,
       9,
       2
      ],
      [
       9,
       2,
       2
      ],
      [
       3,
       1,
       2
      ]
     ]
    },
    {
     "args": [
      [
       [
        5
       ]
      ],
      0,
      0,
      5
     ],
     "want": [
      [
       5
      ]
     ]
    },
    {
     "args": [
      [
       [
        0,
        0
       ],
       [
        0,
        0
       ]
      ],
      1,
      1,
      7
     ],
     "want": [
      [
       7,
       7
      ],
      [
       7,
       7
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
        2,
        1
       ]
      ],
      0,
      0,
      3
     ],
     "want": [
      [
       3,
       2
      ],
      [
       2,
       1
      ]
     ]
    },
    {
     "args": [
      [
       [
        1,
        1,
        1
       ]
      ],
      0,
      1,
      1
     ],
     "want": [
      [
       1,
       1,
       1
      ]
     ]
    },
    {
     "args": [
      [
       [
        4,
        4,
        4
       ],
       [
        4,
        0,
        4
       ],
       [
        4,
        4,
        4
       ]
      ],
      1,
      1,
      8
     ],
     "want": [
      [
       4,
       4,
       4
      ],
      [
       4,
       8,
       4
      ],
      [
       4,
       4,
       4
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
    "function floodFill(grid, r, c, color) {",
    "  const old = grid[r][c];",
    "  if (old === color) return grid;",
    "  const paint = (y, x) => {",
    "    if (y < 0 || x < 0 || y >= grid.length) return;",
    "    if (x >= grid[0].length || grid[y][x] !== old) return;",
    "    grid[y][x] = color;",
    "    paint(y + 1, x); paint(y - 1, x);",
    "    paint(y, x + 1); paint(y, x - 1);",
    "  };",
    "  paint(r, c);",
    "  return grid;",
    "}"
   ],
   "why": "Remove line 3 and call floodFill on a grid that is all 5s, with color 5. What happens, and why?",
   "topic": null,
   "world": "This is the paint bucket in every drawing program. Click, and the colour spreads to everything connected.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      1,
      1,
      2
     ],
     [
      1,
      2,
      2
     ],
     [
      3,
      1,
      2
     ]
    ],
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "at",
      "row": 1
     }
    ],
    "vars": [
     "old"
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
     "say": "This is sinking an island again. The island is every connected square of the old colour.",
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
     "card": "the island: the old colour",
     "arrows": null
    },
    {
     "say": "Painting a square also marks it as done. It no longer has the old colour, so it is never visited twice.",
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
     "card": "the new colour marks it done",
     "arrows": null
    },
    {
     "say": "Line two remembers the old colour of the starting square. One.",
     "line": 2,
     "ptr": {
      "at": 0
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
      "old": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line seven paints it nine. Then the four neighbours. Below is a one. It is painted too.",
     "line": 7,
     "ptr": {
      "at": 3
     },
     "hot": [],
     "ok": [
      0,
      3
     ],
     "bad": [],
     "free": [],
     "set": {
      "0": 9,
      "3": 9
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "old colour → paint it 9",
     "arrows": null
    },
    {
     "say": "From there, below again. This square holds a three. What does line six do?",
     "line": 6,
     "ptr": {
      "at": 6
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
     "box": null,
     "card": "a 3, and old is 1 → ?",
     "arrows": null
    },
    {
     "say": "It returns. A different colour is a wall for the paint.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
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
     "card": "not the old colour → stop",
     "arrows": null
    },
    {
     "say": "Back at the start, and to the right. A one. Painted. Its own neighbours are twos, or already nine.",
     "line": 7,
     "ptr": {
      "at": 1
     },
     "hot": [],
     "ok": [
      1
     ],
     "bad": [],
     "free": [],
     "set": {
      "1": 9
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "the last connected 1",
     "arrows": null
    },
    {
     "say": "The one at the bottom was never reached. It does not touch the others. Line twelve returns the grid.",
     "line": 12,
     "ptr": null,
     "hot": [
      7
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
     "say": "Each square is painted at most once. O of rows times columns.",
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
     "say": "The waiting calls can be as deep as the painted region.",
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
     "card": "waiting calls: the region",
     "arrows": null
    },
    {
     "say": "This is the paint bucket in every drawing program. Click, and the colour spreads to everything connected.",
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
     "card": "the paint bucket in a paint app",
     "arrows": null
    }
   ]
  },
  {
   "id": "gr3",
   "num": 3,
   "title": "Out of the Maze",
   "fn": "fewestSteps",
   "ask": "In the grid, <b>0 is open and 1 is a wall</b>. You start in the top-left square (always open) and move up, down, left or right. Return the <b>fewest steps</b> needed to reach the bottom-right square, or <b>-1</b> if it cannot be reached. You may change the grid.",
   "spec": "fewestSteps([[0, 0, 1], [1, 0, 0], [0, 1, 0]]) → 4",
   "start": "// grid is an array of rows. 0 = open, 1 = wall.\nfunction fewestSteps(grid) {\n  // your code here\n}\n",
   "plan": [
    "Going deep first finds a way out, but not necessarily the shortest one. Which way of exploring meets the nearest squares first?",
    "What does one \"level\" hold here, and how do you build the next one?",
    "How do you make sure a square is never put into two levels?"
   ],
   "hints": [
    "Level by level: start with a level holding only [0, 0], and a step counter at 0.",
    "For every square of the level: if it is the goal, return the counter. Otherwise add each open, unseen neighbour to the next level, and mark it (for example by turning it into a wall).",
    "When a level is finished, the next level becomes the current one and the counter goes up. An empty level means there is no way: return -1."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        0,
        0,
        1
       ],
       [
        1,
        0,
        0
       ],
       [
        0,
        1,
        0
       ]
      ]
     ],
     "want": 4
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
        0,
        1
       ],
       [
        1,
        0
       ]
      ]
     ],
     "want": -1
    },
    {
     "args": [
      [
       [
        0,
        0
       ],
       [
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
        0,
        0,
        0
       ],
       [
        1,
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
     "want": 4
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
     "want": 4
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "return [Array.from({ length: 30 }, () => new Array(30).fill(0))];",
    "limit": 1500,
    "label": "an open field of 30 × 30",
    "msg": "Correct on the small mazes, but too slow on an open field. Trying every possible route explodes: go level by level and never visit a square twice."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function fewestSteps(grid) {",
    "  const R = grid.length, C = grid[0].length;",
    "  const inside = (r, c) => r >= 0 && c >= 0 && r < R && c < C;",
    "  let level = [[0, 0]];",
    "  grid[0][0] = 1;",
    "  let steps = 0;",
    "  while (level.length > 0) {",
    "    const next = [];",
    "    for (const [r, c] of level) {",
    "      if (r === R - 1 && c === C - 1) return steps;",
    "      for (const [a, b] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {",
    "        const y = r + a, x = c + b;",
    "        if (!inside(y, x) || grid[y][x] === 1) continue;",
    "        grid[y][x] = 1;",
    "        next.push([y, x]);",
    "      }",
    "    }",
    "    level = next;",
    "    steps++;",
    "  }",
    "  return -1;",
    "}"
   ],
   "why": "Line 14 marks a square the moment it is added to next, not later when it is taken out. Why does that matter?",
   "topic": null,
   "world": "A game character finds the shortest way through a map like this, level by level.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      "",
      "",
      "#"
     ],
     [
      "#",
      "",
      ""
     ],
     [
      "",
      "#",
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
     "say": "The fewest steps. That is the signal for going level by level.",
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
     "card": "\"the fewest steps\" → level by level",
     "arrows": null
    },
    {
     "say": "Level zero is the start. Level one is every square one step away. The level that holds the goal is the answer.",
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
     "card": "the level number = the steps",
     "arrows": null
    },
    {
     "say": "Line four. The first level holds only the start. Line five marks it, so it is never added again. Steps is zero.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "free": [],
     "set": {
      "0": 0
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "steps": 0
     },
     "box": null,
     "card": "level 0: the start",
     "arrows": null
    },
    {
     "say": "Lines eleven to fifteen look at its four neighbours. Below is a wall. To the right is open. It is marked, and goes into next.",
     "line": 15,
     "ptr": null,
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "1": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "steps": 1
     },
     "box": null,
     "card": "level 1: one square",
     "arrows": null
    },
    {
     "say": "That square has one open neighbour, below it. That is level two.",
     "line": 15,
     "ptr": null,
     "hot": [
      4
     ],
     "ok": [
      1
     ],
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
      "steps": 2
     },
     "box": null,
     "card": "level 2: one square",
     "arrows": null
    },
    {
     "say": "Now from that square. Left is a wall. Below is a wall. Above is already marked. Which squares make level three?",
     "line": 13,
     "ptr": null,
     "hot": [
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
     "card": "neighbours of this square → ?",
     "arrows": null
    },
    {
     "say": "Only the square on its right. Level three.",
     "line": 15,
     "ptr": null,
     "hot": [
      5
     ],
     "ok": [
      4
     ],
     "bad": [],
     "free": [],
     "set": {
      "5": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "steps": 3
     },
     "box": null,
     "card": "level 3: one square",
     "arrows": null
    },
    {
     "say": "Its open neighbour is the corner below. Level four. And when that square is taken out, line ten sees the goal, and returns steps.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [
      5,
      8
     ],
     "bad": [],
     "free": [],
     "set": {
      "8": 4
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "steps": 4
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Every square enters a level at most once. O of rows times columns.",
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
     "say": "Two levels are held at a time.",
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
     "card": "two levels at a time",
     "arrows": null
    },
    {
     "say": "A game character finds the shortest way through a map like this, level by level.",
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
     "card": "the shortest way through a map",
     "arrows": null
    }
   ]
  },
  {
   "id": "gr4",
   "num": 4,
   "title": "Can You Get There?",
   "fn": "hasPath",
   "ask": "Return <b>true</b> if you can travel from node <b>from</b> to node <b>to</b> along the edges.",
   "spec": "hasPath(6, [[0, 1], [0, 2], [1, 3], [4, 5]], 3, 2) → true      hasPath(6, same edges, 3, 4) → false",
   "start": "// The graph has nodes 0 to n - 1. edges is a list of [a, b] pairs: a and b are joined, both ways.\nfunction hasPath(n, edges, from, to) {\n  // your code here\n}\n",
   "plan": [
    "The edges come as a list of pairs. Standing on a node, what would you like to be able to ask?",
    "How do you explore from \"from\"?",
    "The graph may let you walk in circles. What stops that?"
   ],
   "hints": [
    "First build neighbour lists: near[a] holds every node joined to a (add each edge both ways).",
    "visit(node): if it is the target return true. If it was seen before return false. Otherwise mark it seen.",
    "Then return true if visit(next) is true for any neighbour."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      6,
      [
       [
        0,
        1
       ],
       [
        0,
        2
       ],
       [
        1,
        3
       ],
       [
        4,
        5
       ]
      ],
      3,
      2
     ],
     "want": true
    },
    {
     "args": [
      6,
      [
       [
        0,
        1
       ],
       [
        0,
        2
       ],
       [
        1,
        3
       ],
       [
        4,
        5
       ]
      ],
      3,
      4
     ],
     "want": false
    },
    {
     "args": [
      6,
      [
       [
        0,
        1
       ],
       [
        0,
        2
       ],
       [
        1,
        3
       ],
       [
        4,
        5
       ]
      ],
      0,
      0
     ],
     "want": true
    },
    {
     "args": [
      1,
      [],
      0,
      0
     ],
     "want": true
    },
    {
     "args": [
      2,
      [],
      0,
      1
     ],
     "want": false
    },
    {
     "args": [
      4,
      [
       [
        0,
        1
       ],
       [
        1,
        2
       ],
       [
        2,
        0
       ]
      ],
      0,
      3
     ],
     "want": false
    },
    {
     "args": [
      3,
      [
       [
        0,
        1
       ],
       [
        1,
        2
       ]
      ],
      2,
      0
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
    "function hasPath(n, edges, from, to) {",
    "  const near = Array.from({ length: n }, () => []);",
    "  for (const [a, b] of edges) {",
    "    near[a].push(b);",
    "    near[b].push(a);",
    "  }",
    "  const seen = new Set();",
    "  const visit = (node) => {",
    "    if (node === to) return true;",
    "    if (seen.has(node)) return false;",
    "    seen.add(node);",
    "    return near[node].some((next) => visit(next));",
    "  };",
    "  return visit(from);",
    "}"
   ],
   "why": "Delete line 10 and run it on a graph with a loop that does not contain the target. What happens?",
   "topic": null,
   "world": "Can this computer reach that server? A network tool asks exactly this question.",
   "view": {
    "row": [],
    "tree": null,
    "grid": null,
    "graph": {
     "nodes": [
      [
       0,
       0.3,
       0
      ],
      [
       1,
       0.08,
       0.5
      ],
      [
       2,
       0.52,
       0.5
      ],
      [
       3,
       0.08,
       1
      ],
      [
       4,
       0.78,
       0.2
      ],
      [
       5,
       0.96,
       0.8
      ]
     ],
     "edges": [
      [
       0,
       1
      ],
      [
       0,
       2
      ],
      [
       1,
       3
      ],
      [
       4,
       5
      ]
     ]
    },
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "node",
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
     "say": "First, turn the list of pairs into neighbour lists. Then every node knows who is next door.",
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
     "card": "pairs → neighbour lists",
     "arrows": null
    },
    {
     "say": "Then walk, deep first, like a tree. With one addition. A set of nodes already seen.",
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
     "card": "walk deep first · keep a seen set",
     "arrows": null
    },
    {
     "say": "Lines two to six build the lists. Each edge is added both ways. Zero is next to one and two. One is next to zero and three.",
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
     "card": "near[0] = [1, 2] · near[1] = [0, 3]",
     "arrows": null
    },
    {
     "say": "Line fourteen starts on three. Not the target. Not seen. It is marked seen.",
     "line": 11,
     "ptr": {
      "node": 3
     },
     "hot": [],
     "ok": [
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
     "card": "on 3 · looking for 2",
     "arrows": null
    },
    {
     "say": "Its only neighbour is one. Marked seen.",
     "line": 11,
     "ptr": {
      "node": 1
     },
     "hot": [],
     "ok": [
      1
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
     "card": "near[3] = [1]",
     "arrows": null
    },
    {
     "say": "One is next to zero, and three. Zero first. Marked seen.",
     "line": 11,
     "ptr": {
      "node": 0
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
     "vars": null,
     "box": null,
     "card": "near[1] = [0, 3] → try 0",
     "arrows": null
    },
    {
     "say": "Zero is next to one, and two. One first. But one is already seen. What does the call on one return?",
     "line": 10,
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
     "vars": null,
     "box": null,
     "card": "near[0] = [1, 2] → 1 again?",
     "arrows": null
    },
    {
     "say": "False, at once. So the walk tries the next neighbour. Two. That is the target. Line nine returns true.",
     "line": 9,
     "ptr": {
      "node": 2
     },
     "hot": [],
     "ok": [
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
     "say": "Four and five were never reached. From three, there is no way to them.",
     "line": 14,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      4,
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
     "card": "4 and 5: not reachable from 3",
     "arrows": null
    },
    {
     "say": "Every node is visited once, and every edge is looked at twice. O of nodes plus edges.",
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
     "card": "O(nodes + edges)",
     "arrows": null
    },
    {
     "say": "The lists, and the seen set. O of nodes plus edges.",
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
     "card": "lists + seen set",
     "arrows": null
    },
    {
     "say": "Can this computer reach that server? A network tool asks exactly this question.",
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
     "card": "can A reach B on a network?",
     "arrows": null
    }
   ]
  },
  {
   "id": "gr5",
   "num": 5,
   "title": "How Many Groups?",
   "fn": "countGroups",
   "ask": "Return the number of <b>separate groups</b> in the graph. Two nodes are in the same group if you can travel between them. A node with no edges is a group of one.",
   "spec": "countGroups(6, [[0, 1], [0, 2], [4, 5]]) → 3      ({0, 1, 2}, {3}, {4, 5})",
   "start": "// The graph has nodes 0 to n - 1. edges is a list of [a, b] pairs: a and b are joined, both ways.\nfunction countGroups(n, edges) {\n  // your code here\n}\n",
   "plan": [
    "You have counted connected pieces before in this chapter. Where?",
    "What plays the role of \"land\" here, and what plays the role of \"sinking\"?",
    "What about a node with no edges at all?"
   ],
   "hints": [
    "Build neighbour lists, and keep a seen set.",
    "Go through the nodes 0 to n - 1. A node that is not seen yet starts a new group: count it.",
    "Then visit everything reachable from it (deep first), marking each node seen."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      6,
      [
       [
        0,
        1
       ],
       [
        0,
        2
       ],
       [
        4,
        5
       ]
      ]
     ],
     "want": 3
    },
    {
     "args": [
      0,
      []
     ],
     "want": 0
    },
    {
     "args": [
      3,
      []
     ],
     "want": 3
    },
    {
     "args": [
      4,
      [
       [
        0,
        1
       ],
       [
        1,
        2
       ],
       [
        2,
        3
       ]
      ]
     ],
     "want": 1
    },
    {
     "args": [
      5,
      [
       [
        0,
        1
       ],
       [
        2,
        3
       ]
      ]
     ],
     "want": 3
    },
    {
     "args": [
      3,
      [
       [
        0,
        1
       ],
       [
        1,
        2
       ],
       [
        2,
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
    "function countGroups(n, edges) {",
    "  const near = Array.from({ length: n }, () => []);",
    "  for (const [a, b] of edges) {",
    "    near[a].push(b);",
    "    near[b].push(a);",
    "  }",
    "  const seen = new Set();",
    "  const visit = (node) => {",
    "    if (seen.has(node)) return;",
    "    seen.add(node);",
    "    for (const next of near[node]) visit(next);",
    "  };",
    "  let groups = 0;",
    "  for (let node = 0; node < n; node++) {",
    "    if (!seen.has(node)) { groups++; visit(node); }",
    "  }",
    "  return groups;",
    "}"
   ],
   "why": "This is the islands solution again. Which line here does the job of \"turn the land into water\"?",
   "topic": null,
   "world": "A social app finds separate circles of friends this way. Each group is one circle.",
   "view": {
    "row": [],
    "tree": null,
    "grid": null,
    "graph": {
     "nodes": [
      [
       0,
       0.2,
       0
      ],
      [
       1,
       0.05,
       0.75
      ],
      [
       2,
       0.38,
       0.75
      ],
      [
       3,
       0.56,
       0.15
      ],
      [
       4,
       0.78,
       0.3
      ],
      [
       5,
       0.95,
       0.95
      ]
     ],
     "edges": [
      [
       0,
       1
      ],
      [
       0,
       2
      ],
      [
       4,
       5
      ]
     ]
    },
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "node",
      "row": 1
     }
    ],
    "vars": [
     "groups"
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
     "say": "This is counting islands. A node that is not seen yet is new land.",
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
     "card": "an unseen node = new land",
     "arrows": null
    },
    {
     "say": "Count it, then walk everything it is joined to, marking it seen. That sinks the whole group.",
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
     "card": "count it, then mark its group",
     "arrows": null
    },
    {
     "say": "The loop on line fourteen starts at node zero. Not seen. So line fifteen counts one group, and visits it.",
     "line": 15,
     "ptr": {
      "node": 0
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
      "groups": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The visit spreads to its neighbours. One, and two. All three are seen now.",
     "line": 10,
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
     "card": "0, 1 and 2 are seen",
     "arrows": null
    },
    {
     "say": "The loop moves on. One is seen. Two is seen. Then three. It is not seen, and it has no edges at all. What happens?",
     "line": 15,
     "ptr": {
      "node": 3
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
     "card": "3: not seen, no edges → ?",
     "arrows": null
    },
    {
     "say": "It counts. A group of one. Two groups.",
     "line": 15,
     "ptr": null,
     "hot": [],
     "ok": [
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
      "groups": 2
     },
     "box": null,
     "card": "a group of one",
     "arrows": null
    },
    {
     "say": "Four is not seen. Three groups. The visit marks four, and five.",
     "line": 15,
     "ptr": {
      "node": 4
     },
     "hot": [],
     "ok": [
      4,
      5
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "groups": 3
     },
     "box": null,
     "card": "4 and 5: the third group",
     "arrows": null
    },
    {
     "say": "Five is seen. The loop ends, and line seventeen returns three.",
     "line": 17,
     "ptr": {
      "node": 5
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
     "say": "Every node is visited once, every edge looked at twice. O of nodes plus edges.",
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
     "card": "O(nodes + edges)",
     "arrows": null
    },
    {
     "say": "The lists, and the seen set.",
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
     "card": "lists + seen set",
     "arrows": null
    },
    {
     "say": "A social app finds separate circles of friends this way. Each group is one circle.",
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
     "card": "separate circles of friends",
     "arrows": null
    }
   ]
  },
  {
   "id": "gr6",
   "num": 6,
   "title": "The Fewest Hops",
   "fn": "fewestHops",
   "ask": "This time the graph arrives as neighbour lists: <b>near[i]</b> is the list of nodes joined to node i. Return the <b>fewest edges</b> you must cross to get from <b>from</b> to <b>to</b>, or <b>-1</b> if there is no way.",
   "spec": "fewestHops([[1, 2], [0, 3, 5], [0, 4], [1, 5], [2, 5], [1, 3, 4]], 0, 5) → 2      (0 → 1 → 5)",
   "start": "// near[i] lists the neighbours of node i.\nfunction fewestHops(near, from, to) {\n  // your code here\n}\n",
   "plan": [
    "The fewest hops. Which way of exploring have you used for \"the fewest steps\"?",
    "What is level 0 here? How do you build level 1?",
    "When do you return, and what?"
   ],
   "hints": [
    "Level by level: the first level is [from], with a hop counter at 0, and a seen set holding from.",
    "If the current level contains the target, return the counter.",
    "Otherwise the next level is every unseen neighbour of the nodes in this level (mark each as you add it). Then count one more hop."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        1,
        2
       ],
       [
        0,
        3,
        5
       ],
       [
        0,
        4
       ],
       [
        1,
        5
       ],
       [
        2,
        5
       ],
       [
        1,
        3,
        4
       ]
      ],
      0,
      5
     ],
     "want": 2
    },
    {
     "args": [
      [
       [
        1,
        2
       ],
       [
        0,
        3,
        5
       ],
       [
        0,
        4
       ],
       [
        1,
        5
       ],
       [
        2,
        5
       ],
       [
        1,
        3,
        4
       ]
      ],
      0,
      0
     ],
     "want": 0
    },
    {
     "args": [
      [
       [
        1
       ],
       [
        0
       ],
       []
      ],
      0,
      2
     ],
     "want": -1
    },
    {
     "args": [
      [
       [
        1
       ],
       [
        0,
        2
       ],
       [
        1,
        3
       ],
       [
        2
       ]
      ],
      0,
      3
     ],
     "want": 3
    },
    {
     "args": [
      [
       []
      ],
      0,
      0
     ],
     "want": 0
    },
    {
     "args": [
      [
       [
        1,
        2
       ],
       [
        0,
        3,
        5
       ],
       [
        0,
        4
       ],
       [
        1,
        5
       ],
       [
        2,
        5
       ],
       [
        1,
        3,
        4
       ]
      ],
      3,
      2
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
    "function fewestHops(near, from, to) {",
    "  const seen = new Set([from]);",
    "  let level = [from];",
    "  let hops = 0;",
    "  while (level.length > 0) {",
    "    if (level.includes(to)) return hops;",
    "    const next = [];",
    "    for (const node of level) {",
    "      for (const other of near[node]) {",
    "        if (seen.has(other)) continue;",
    "        seen.add(other);",
    "        next.push(other);",
    "      }",
    "    }",
    "    level = next;",
    "    hops++;",
    "  }",
    "  return -1;",
    "}"
   ],
   "why": "A deep-first walk from 0 might reach 5 through 2 and 4 first. Why can that not happen here?",
   "topic": null,
   "world": "How many introductions from you to a stranger? Social apps count the hops like this.",
   "view": {
    "row": [],
    "tree": null,
    "grid": null,
    "graph": {
     "nodes": [
      [
       0,
       0.5,
       0
      ],
      [
       1,
       0.15,
       0.33
      ],
      [
       2,
       0.85,
       0.33
      ],
      [
       3,
       0.15,
       0.78
      ],
      [
       4,
       0.85,
       0.78
      ],
      [
       5,
       0.5,
       1
      ]
     ],
     "edges": [
      [
       0,
       1
      ],
      [
       0,
       2
      ],
      [
       1,
       3
      ],
      [
       2,
       4
      ],
      [
       3,
       5
      ],
      [
       4,
       5
      ],
      [
       1,
       5
      ]
     ]
    },
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [],
    "vars": [
     "hops"
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
     "say": "The fewest hops. Level by level again. Exactly as in the maze.",
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
     "card": "\"the fewest\" → level by level",
     "arrows": null
    },
    {
     "say": "The levels are rings around the start. Everything one hop away. Then two. The ring that holds the target is the answer.",
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
     "card": "ring 1, ring 2, … until the target",
     "arrows": null
    },
    {
     "say": "The first level holds only the start. Zero. Hops is zero. Five is not in this level.",
     "line": 6,
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
      "hops": 0
     },
     "box": null,
     "card": "level 0: [0]",
     "arrows": null
    },
    {
     "say": "Lines eight to thirteen collect the unseen neighbours of zero. One, and two. That is the next level.",
     "line": 12,
     "ptr": null,
     "hot": [
      1,
      2
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
     "vars": {
      "hops": 1
     },
     "box": null,
     "card": "level 1: [1, 2]",
     "arrows": null
    },
    {
     "say": "Five is not in it. So the next level. One is next to zero, three, and five. Two is next to zero, and four. Which nodes are added?",
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
     "card": "neighbours of 1 and 2 → ?",
     "arrows": null
    },
    {
     "say": "Three, five, and four. Zero is skipped, because it is seen.",
     "line": 12,
     "ptr": null,
     "hot": [
      3,
      5,
      4
     ],
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
      "hops": 2
     },
     "box": null,
     "card": "level 2: [3, 5, 4]",
     "arrows": null
    },
    {
     "say": "Back to line six. This level includes five. So it returns hops. Two.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      5
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
     "say": "Every node enters a level once, every edge is looked at twice. O of nodes plus edges.",
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
     "card": "O(nodes + edges)",
     "arrows": null
    },
    {
     "say": "The seen set, and two levels.",
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
     "card": "seen set + two levels",
     "arrows": null
    },
    {
     "say": "How many introductions from you to a stranger? Social apps count the hops like this.",
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
     "card": "friends of friends: the hops",
     "arrows": null
    }
   ]
  },
  {
   "id": "gr7",
   "num": 7,
   "title": "Is There a Loop?",
   "fn": "hasLoop",
   "ask": "Return <b>true</b> if the graph contains a <b>loop</b>: a way to leave a node and come back to it without using the same edge twice. (No edge is listed twice.)",
   "spec": "hasLoop(4, [[0, 1], [1, 2], [2, 3], [3, 1]]) → true      (1 → 2 → 3 → 1)",
   "start": "// The graph has nodes 0 to n - 1. edges is a list of [a, b] pairs: a and b are joined, both ways.\nfunction hasLoop(n, edges) {\n  // your code here\n}\n",
   "plan": [
    "Walk the graph deep first with a seen set. You look at a neighbour that is already seen. Does that always mean there is a loop?",
    "Which already-seen neighbour is harmless?",
    "The graph may be in several pieces. How do you check them all?"
   ],
   "hints": [
    "Build neighbour lists. visit(node, cameFrom) remembers the node you arrived from.",
    "For each neighbour: skip it if it is cameFrom. If it is already seen, you have found a loop: return true.",
    "Otherwise visit it, passing the current node as cameFrom. Start a visit from every node that is not seen yet."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      4,
      [
       [
        0,
        1
       ],
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
        1
       ]
      ]
     ],
     "want": true
    },
    {
     "args": [
      3,
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
     "want": false
    },
    {
     "args": [
      0,
      []
     ],
     "want": false
    },
    {
     "args": [
      3,
      [
       [
        0,
        1
       ],
       [
        1,
        2
       ],
       [
        2,
        0
       ]
      ]
     ],
     "want": true
    },
    {
     "args": [
      5,
      [
       [
        0,
        1
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
        2
       ]
      ]
     ],
     "want": true
    },
    {
     "args": [
      4,
      [
       [
        0,
        1
       ],
       [
        2,
        3
       ]
      ]
     ],
     "want": false
    },
    {
     "args": [
      2,
      [
       [
        0,
        1
       ]
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
    "function hasLoop(n, edges) {",
    "  const near = Array.from({ length: n }, () => []);",
    "  for (const [a, b] of edges) {",
    "    near[a].push(b);",
    "    near[b].push(a);",
    "  }",
    "  const seen = new Set();",
    "  const visit = (node, cameFrom) => {",
    "    seen.add(node);",
    "    for (const next of near[node]) {",
    "      if (next === cameFrom) continue;",
    "      if (seen.has(next) || visit(next, node)) return true;",
    "    }",
    "    return false;",
    "  };",
    "  for (let node = 0; node < n; node++) {",
    "    if (!seen.has(node) && visit(node, -1)) return true;",
    "  }",
    "  return false;",
    "}"
   ],
   "why": "Why is the neighbour you came from skipped on line 11?",
   "topic": null,
   "world": "A spreadsheet warns you about a circular reference by finding a loop, just like this.",
   "view": {
    "row": [],
    "tree": null,
    "grid": null,
    "graph": {
     "nodes": [
      [
       0,
       0.1,
       0.5
      ],
      [
       1,
       0.42,
       0.5
      ],
      [
       2,
       0.8,
       0.05
      ],
      [
       3,
       0.8,
       0.95
      ]
     ],
     "edges": [
      [
       0,
       1
      ],
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
       1
      ]
     ]
    },
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "node",
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
     "say": "Walk deep first. If a neighbour is already seen, the walk has found a second way to reach it. That is a loop.",
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
     "card": "a seen neighbour = a second way in",
     "arrows": null
    },
    {
     "say": "With one exception. The node you just came from is always seen. So each call remembers it, and skips it.",
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
     "card": "skip the one I came from",
     "arrows": null
    },
    {
     "say": "Line seventeen starts on node zero, coming from nowhere. Zero is marked seen. Its only neighbour is one.",
     "line": 9,
     "ptr": {
      "node": 0
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
     "vars": null,
     "box": null,
     "card": "on 0 · came from nowhere",
     "arrows": null
    },
    {
     "say": "On one, coming from zero. Its neighbours are zero, two and three. Zero is where it came from. Skipped. Then two.",
     "line": 11,
     "ptr": {
      "node": 1
     },
     "hot": [],
     "ok": [
      1
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
     "card": "on 1 · skip 0 · go to 2",
     "arrows": null
    },
    {
     "say": "On two, coming from one. One is skipped. Its other neighbour is three.",
     "line": 11,
     "ptr": {
      "node": 2
     },
     "hot": [],
     "ok": [
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
     "card": "on 2 · skip 1 · go to 3",
     "arrows": null
    },
    {
     "say": "On three, coming from two. Two is skipped. Its other neighbour is one. One is seen, and it is not where we came from. What does line twelve do?",
     "line": 12,
     "ptr": {
      "node": 3
     },
     "hot": [
      1
     ],
     "ok": [
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
     "card": "on 3 · neighbour 1 is seen → ?",
     "arrows": null
    },
    {
     "say": "It returns true. One, two, three, and back to one. A loop.",
     "line": 12,
     "ptr": null,
     "hot": [
      1,
      2,
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
     "card": "",
     "arrows": null
    },
    {
     "say": "And true travels straight back up through every waiting call.",
     "line": 17,
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
     "card": "true goes all the way up",
     "arrows": null
    },
    {
     "say": "Every node is visited once, every edge looked at twice. O of nodes plus edges.",
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
     "card": "O(nodes + edges)",
     "arrows": null
    },
    {
     "say": "The lists, the seen set, and the waiting calls.",
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
     "card": "lists + seen + waiting calls",
     "arrows": null
    },
    {
     "say": "A spreadsheet warns you about a circular reference by finding a loop, just like this.",
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
     "card": "a circular reference warning",
     "arrows": null
    }
   ]
  }
 ]
};
