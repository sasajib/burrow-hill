window.CHAPTER = {
 "id": "mixed4",
 "title": "Mixed Set 4",
 "sub": "MIXED SET 4",
 "key": "burrow-ch-mixed4",
 "next": {
  "href": "chapter.html?c=backtrack",
  "label": "Chapter 22: Backtracking"
 },
 "prev": {
  "href": "chapter.html?c=paths",
  "label": "Chapter 21: Shortest Paths"
 },
 "mock": false,
 "target": null,
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "mq0",
   "label": "Read this first",
   "short": "Intro",
   "name": "The signals of Part 4",
   "intro": "Eight puzzles from everything so far, with no labels. The signals Part 4 added."
  }
 ],
 "notes": {
  "w": "<h3>The signals of Part 4</h3><ul><li><b>Things joined to things; explore, reach, or count the groups</b> → walk the graph deep first, with a seen set.</li>\n      <li><b>\"The fewest steps\", or something that spreads round by round</b> → level by level (BFS). Several starting points? Put them all in the first level.</li>\n      <li><b>\"This before that\"</b> → count the arrows pointing in, and take the zeros (topological sort).</li>\n      <li><b>Groups that keep merging, with \"same group?\" asked in between</b> → a parent array (union-find).</li>\n      <li><b>The cheapest way, with a cost on every link</b> → smallest first, with a heap (Dijkstra).</li>\n      <li><b>Name the tool before you code</b>, then compare with the solution video.</li></ul>"
 },
 "quiz": {
  "mq1s-q": {
   "ask": "The middle sack is damp. The square to its right holds 0, an empty spot. What does line 13 do with it?",
   "opts": [
    "Skips it: only a 1 can turn damp",
    "Turns it into a 2",
    "Stops the whole walk"
   ],
   "right": 0,
   "why": "Line 13 continues unless the neighbour is exactly 1, a dry sack. Empty spots and squares outside the grid are skipped."
  },
  "mq2s-q": {
   "ask": "A note says jars 0 and 2 are different. Both have the leader 2. What follows?",
   "opts": [
    "The notes contradict each other: return false",
    "The note is fine",
    "The two jars must be merged"
   ],
   "right": 0,
   "why": "The same leader means the \"same\" notes force these two jars to hold the same kind. A note saying they differ cannot also be true."
  },
  "mq3s-q": {
   "ask": "Job 2 needs jobs 0 and 1. Through job 1 it could end at 6, through job 0 at 7. Which is its real end?",
   "opts": [
    "7: it must wait for the slower one",
    "6: the earlier one",
    "13: both added"
   ],
   "right": 0,
   "why": "A job starts only when everything before it is finished, so the later of the two decides."
  },
  "mq4s-q": {
   "ask": "The way to burrow 2 has a highest wall of 3. The tunnel from 2 to 1 has a wall of 4. What is the highest wall on this way to burrow 1?",
   "opts": [
    "4: the larger of 3 and 4",
    "7: 3 + 4",
    "3"
   ],
   "right": 0,
   "why": "Only the highest wall matters, so the two are compared, not added."
  },
  "mq5s-q": {
   "ask": "The scan calls size on a square that is 0. What comes back?",
   "opts": [
    "0, at once",
    "1",
    "The size of the nearest field"
   ],
   "right": 0,
   "why": "Line 3: anything that is not a field square, including squares outside the grid, has size 0."
  },
  "mq6s-q": {
   "ask": "The tunnel 2-0 joins two burrows that both have the leader 2. What does that tell you?",
   "opts": [
    "It closes a loop: return false",
    "It is a useful tunnel",
    "Burrow 3 is connected"
   ],
   "right": 0,
   "why": "The two burrows were already joined, so this tunnel gives a second way between them: a loop."
  },
  "mq7s-q": {
   "ask": "Burrows 1 and 2 are rivals, and the walk has put both in team B. What does line 14 do?",
   "opts": [
    "Returns false: it cannot be done",
    "Moves burrow 2 to team A",
    "Skips burrow 2"
   ],
   "right": 0,
   "why": "Every team choice was forced by burrow 0. If the forced choices clash, no split into two teams exists."
  },
  "mq8s-q": {
   "ask": "The cheapest costs are [0, 2, 5, 9, 6] and the budget is 6. How many burrows are within reach?",
   "opts": [
    "4: every cost of 6 or less, the start included",
    "3",
    "5"
   ],
   "right": 0,
   "why": "Costs 0, 2, 5 and 6 are at most 6. Only burrow 3, at 9, is too far."
  }
 },
 "problems": [
  {
   "id": "mq1",
   "num": 1,
   "title": "The Damp Spreads",
   "fn": "dampTime",
   "ask": "A store room is a grid: <b>2</b> is a damp sack, <b>1</b> is a dry sack, <b>0</b> is an empty spot. Every minute, each damp sack makes the dry sacks <b>next to it</b> (up, down, left, right) damp. Return the <b>number of minutes</b> until no dry sack is left, or <b>-1</b> if some sack stays dry for ever. You may change the grid.",
   "spec": "dampTime([[2, 1, 1], [1, 1, 0], [0, 1, 1]]) → 4",
   "start": "// grid is an array of rows. 2 = damp, 1 = dry, 0 = empty.\nfunction dampTime(grid) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Things joined to things (explore or count), \"the fewest steps\", \"this before that\", groups that keep merging, a cheapest way with costs, or a signal from an earlier part?",
    "All the damp sacks spread at the same moment. Where does your walk have to start?",
    "What does one \"minute\" correspond to in that walk?",
    "How will you know that a dry sack was never reached?"
   ],
   "hints": [
    "Scan the grid once: put every damp square in a first level, and count the dry sacks.",
    "Go level by level. For each square of the level, each neighbour that is dry becomes damp, the dry count goes down, and it joins the next level. One level is one minute.",
    "Stop when no dry sack is left or the level is empty. If dry sacks remain, return -1. (grid[y]?.[x] gives undefined outside the grid, which saves the border checks.)"
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        2,
        1,
        1
       ],
       [
        1,
        1,
        0
       ],
       [
        0,
        1,
        1
       ]
      ]
     ],
     "want": 4
    },
    {
     "args": [
      [
       [
        2
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
     "want": -1
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
        2,
        1,
        0,
        1
       ]
      ]
     ],
     "want": -1
    },
    {
     "args": [
      [
       [
        2,
        1,
        1,
        1,
        2
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
        2
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
    "function dampTime(grid) {",
    "  let level = [], dry = 0, minutes = 0;",
    "  for (let r = 0; r < grid.length; r++) {",
    "    for (let c = 0; c < grid[0].length; c++) {",
    "      if (grid[r][c] === 2) level.push([r, c]);",
    "      if (grid[r][c] === 1) dry++;",
    "    }",
    "  }",
    "  while (dry > 0 && level.length > 0) {",
    "    const next = [];",
    "    for (const [r, c] of level) {",
    "      for (const [a, b] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {",
    "        if (grid[r + a]?.[c + b] !== 1) continue;",
    "        grid[r + a][c + b] = 2;",
    "        dry--;",
    "        next.push([r + a, c + b]);",
    "      }",
    "    }",
    "    level = next;",
    "    minutes++;",
    "  }",
    "  return dry === 0 ? minutes : -1;",
    "}"
   ],
   "why": "Why must every damp sack be in the first level, instead of running one walk per damp sack?",
   "topic": null,
   "world": "A game times a spreading fire like this. Every burning square lights its neighbours, one round at a time.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      2,
      1,
      1
     ],
     [
      1,
      1,
      0
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
     "dry",
     "minutes"
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
     "say": "Every damp sack spreads at the same moment. So the walk starts from all of them at once.",
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
     "card": "start from every damp sack at once",
     "arrows": null
    },
    {
     "say": "Then go level by level. One level, is one minute.",
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
     "card": "one level = one minute",
     "arrows": null
    },
    {
     "say": "Lines three to eight scan the grid. One damp sack goes into the first level. And six sacks are dry.",
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
      "dry": 6,
      "minutes": 0
     },
     "box": null,
     "card": "first level: 1 sack · dry = 6",
     "arrows": null
    },
    {
     "say": "Minute one. The damp spreads to the right, and down. Four dry sacks are left.",
     "line": 20,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      3
     ],
     "bad": [],
     "free": [],
     "set": {
      "1": 2,
      "3": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "dry": 4,
      "minutes": 1
     },
     "box": null,
     "card": "minute 1 → dry = 4",
     "arrows": null
    },
    {
     "say": "Minute two. Two more sacks. Two are left.",
     "line": 20,
     "ptr": null,
     "hot": [],
     "ok": [
      2,
      4
     ],
     "bad": [],
     "free": [],
     "set": {
      "2": 2,
      "4": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "dry": 2,
      "minutes": 2
     },
     "box": null,
     "card": "minute 2 → dry = 2",
     "arrows": null
    },
    {
     "say": "The middle sack has an empty spot on its right. A zero. Does the damp spread into it?",
     "line": 13,
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
     "card": "an empty spot → ?",
     "arrows": null
    },
    {
     "say": "No. Only a one can turn. Minute three reaches the sack below.",
     "line": 20,
     "ptr": null,
     "hot": [],
     "ok": [
      7
     ],
     "bad": [],
     "free": [],
     "set": {
      "7": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "dry": 1,
      "minutes": 3
     },
     "box": null,
     "card": "minute 3 → dry = 1",
     "arrows": null
    },
    {
     "say": "Minute four. The corner. No dry sack is left, so the loop ends. Line twenty two returns four.",
     "line": 22,
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
     "vars": {
      "dry": 0,
      "minutes": 4
     },
     "box": null,
     "card": "minute 4 → dry = 0",
     "arrows": null
    },
    {
     "say": "And if a dry sack could never be reached, dry would stay above zero. Then the answer is minus one.",
     "line": 22,
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
     "card": "dry left over → -1",
     "arrows": null
    },
    {
     "say": "Every square is looked at a fixed number of times. O of R times C.",
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
     "say": "The levels hold at most every square.",
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
     "card": "the levels → O(R × C)",
     "arrows": null
    },
    {
     "say": "A game times a spreading fire like this. Every burning square lights its neighbours, one round at a time.",
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
     "card": "a fire spreading in a game",
     "arrows": null
    }
   ]
  },
  {
   "id": "mq2",
   "num": 2,
   "title": "Same or Different",
   "fn": "notesAgree",
   "ask": "There are n jars of seeds. Some notes say that two jars hold the <b>same</b> kind of seed, and some say that two jars hold <b>different</b> kinds. Return <b>true</b> if all the notes can be true at once.",
   "spec": "notesAgree(4, [[0, 1], [1, 2]], [[0, 2]]) → false      notesAgree(4, [[0, 1], [1, 2]], [[0, 3]]) → true",
   "start": "// The jars are numbered 0 to n - 1. same and diff are lists of [a, b] pairs.\nfunction notesAgree(n, same, diff) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Things joined to things (explore or count), \"the fewest steps\", \"this before that\", groups that keep merging, a cheapest way with costs, or a signal from an earlier part?",
    "If jar 0 is the same as jar 1, and jar 1 the same as jar 2, what follows?",
    "When exactly does a \"different\" note contradict the others?",
    "Which notes should you handle first, and why?"
   ],
   "hints": [
    "\"Same\" notes merge jars into groups, and groups never split. Keep a parent array with find.",
    "Handle every \"same\" note first: join the two leaders.",
    "Then check every \"different\" note: if both jars have the same leader, the notes contradict each other."
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
       ]
      ],
      [
       [
        0,
        2
       ]
      ]
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
       ]
      ],
      [
       [
        0,
        3
       ]
      ]
     ],
     "want": true
    },
    {
     "args": [
      1,
      [],
      []
     ],
     "want": true
    },
    {
     "args": [
      2,
      [],
      [
       [
        0,
        1
       ]
      ]
     ],
     "want": true
    },
    {
     "args": [
      2,
      [
       [
        0,
        1
       ]
      ],
      [
       [
        1,
        0
       ]
      ]
     ],
     "want": false
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
        1,
        3
       ]
      ],
      [
       [
        0,
        4
       ],
       [
        2,
        4
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
        1,
        3
       ]
      ],
      [
       [
        4,
        0
       ],
       [
        2,
        0
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
    "function notesAgree(n, same, diff) {",
    "  const parent = Array.from({ length: n }, (_, i) => i);",
    "  const find = (x) => {",
    "    while (parent[x] !== x) x = parent[x];",
    "    return x;",
    "  };",
    "  for (const [a, b] of same) parent[find(a)] = find(b);",
    "  for (const [a, b] of diff) {",
    "    if (find(a) === find(b)) return false;",
    "  }",
    "  return true;",
    "}"
   ],
   "why": "What could go wrong if you checked each \"different\" note as soon as you read it, before all the \"same\" notes were handled?",
   "topic": null,
   "world": "A compiler checks its rules like this. Things declared equal are merged, then every \"not equal\" rule is tested.",
   "view": {
    "row": [
     0,
     1,
     2,
     3
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "parent",
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
     "say": "Every note that says same, merges two groups of jars. Groups that only ever merge. That is the signal.",
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
     "card": "\"same\" merges groups → a parent array",
     "arrows": null
    },
    {
     "say": "When all of them are merged, a note that says different is wrong, exactly if its two jars share a leader.",
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
     "card": "\"different\" + same leader → false",
     "arrows": null
    },
    {
     "say": "Every jar starts as its own group.",
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
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "4 groups of one",
     "arrows": null
    },
    {
     "say": "Line seven handles the same notes. Zero and one. Jar zero now points at one.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1
     ],
     "bad": [],
     "free": [],
     "set": {
      "0": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "same(0, 1) → join",
     "arrows": null
    },
    {
     "say": "One and two. The leader of one, now points at two.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      2
     ],
     "bad": [],
     "free": [],
     "set": {
      "1": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "same(1, 2) → join",
     "arrows": null
    },
    {
     "say": "Now the notes that say different. Zero and two. Find zero climbs to one, then to two. Find two is two. What does that mean?",
     "line": 9,
     "ptr": null,
     "hot": [
      0,
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
     "card": "different(0, 2) · leaders 2, 2 → ?",
     "arrows": null
    },
    {
     "say": "The same leader. So the same kind. But the note says different. Line nine returns false.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      0,
      2
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
     "say": "Why all the same notes first? Because a group is only complete after its last join.",
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
     "card": "all \"same\" first, then \"different\"",
     "arrows": null
    },
    {
     "say": "One or two short climbs for every note.",
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
     "card": "a short climb per note",
     "arrows": null
    },
    {
     "say": "One array of n numbers.",
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
     "card": "parent array → O(n) space",
     "arrows": null
    },
    {
     "say": "A compiler checks its rules like this. Things declared equal are merged, then every \"not equal\" rule is tested.",
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
     "card": "a compiler checking its rules",
     "arrows": null
    }
   ]
  },
  {
   "id": "mq3",
   "num": 3,
   "title": "When Is It All Done?",
   "fn": "finishTime",
   "ask": "Job i takes <b>times[i]</b> hours. A rule <b>[a, b]</b> says job a must be finished before job b starts. There are plenty of helpers, so any number of jobs can run at the same time. Return the <b>earliest hour at which every job is finished</b>. (The rules never form a loop.)",
   "spec": "finishTime([3, 2, 4, 1], [[0, 2], [1, 2], [2, 3]]) → 8      (job 2 starts at hour 3 and ends at 7; job 3 ends at 8)",
   "start": "// times[i] is how long job i takes. rules is a list of [a, b] pairs: a must be finished before b starts.\nfunction finishTime(times, rules) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Things joined to things (explore or count), \"the fewest steps\", \"this before that\", groups that keep merging, a cheapest way with costs, or a signal from an earlier part?",
    "When can one particular job start?",
    "So in what order do the jobs have to be looked at?",
    "A job waits for several others. Which of them decides when it starts?"
   ],
   "hints": [
    "Keep end[i], the earliest hour job i can end. A job with nothing before it ends at times[i].",
    "Take the jobs in an order that obeys the rules: count the arrows pointing in, and start with the zeros.",
    "When a job is taken, for each job after it: end[to] = the larger of end[to] and end[job] + times[to]. The answer is the largest end."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       3,
       2,
       4,
       1
      ],
      [
       [
        0,
        2
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
     "want": 8
    },
    {
     "args": [
      [
       5
      ],
      []
     ],
     "want": 5
    },
    {
     "args": [
      [
       2,
       9,
       4
      ],
      []
     ],
     "want": 9
    },
    {
     "args": [
      [
       1,
       1,
       1
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
     "want": 3
    },
    {
     "args": [
      [
       4,
       1,
       1,
       1
      ],
      [
       [
        0,
        3
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
     "want": 5
    },
    {
     "args": [
      [
       2,
       3,
       1,
       6
      ],
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
        2,
        3
       ]
      ]
     ],
     "want": 9
    },
    {
     "args": [
      [
       1,
       5,
       1
      ],
      [
       [
        0,
        2
       ],
       [
        1,
        2
       ]
      ]
     ],
     "want": 6
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function finishTime(times, rules) {",
    "  const n = times.length;",
    "  const next = Array.from({ length: n }, () => []);",
    "  const waiting = new Array(n).fill(0);",
    "  for (const [a, b] of rules) {",
    "    next[a].push(b);",
    "    waiting[b]++;",
    "  }",
    "  const end = [...times];",
    "  const ready = [];",
    "  for (let i = 0; i < n; i++) {",
    "    if (waiting[i] === 0) ready.push(i);",
    "  }",
    "  while (ready.length > 0) {",
    "    const job = ready.pop();",
    "    for (const to of next[job]) {",
    "      end[to] = Math.max(end[to], end[job] + times[to]);",
    "      waiting[to]--;",
    "      if (waiting[to] === 0) ready.push(to);",
    "    }",
    "  }",
    "  return Math.max(...end);",
    "}"
   ],
   "why": "Why is a job only pushed onto the ready pile when its count reaches 0, and not as soon as its end time is first set?",
   "topic": null,
   "world": "A build system predicts how long a build will take this way. Each step starts when the slowest thing it needs is ready.",
   "view": {
    "row": [],
    "tree": null,
    "grid": null,
    "graph": {
     "directed": true,
     "nodes": [
      [
       0,
       0.02,
       0.05
      ],
      [
       1,
       0.02,
       0.95
      ],
      [
       2,
       0.5,
       0.5
      ],
      [
       3,
       0.98,
       0.5
      ]
     ],
     "edges": [
      [
       0,
       2
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
    },
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "job",
      "row": 1
     }
    ],
    "vars": [],
    "box": {
     "title": "ends at",
     "rows": 4
    },
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "A job can start when the last of the jobs before it has ended. So it ends at that hour, plus its own time.",
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
     "card": "end = latest end before it + own time",
     "arrows": null
    },
    {
     "say": "To know those ends first, take the jobs in an order that obeys the arrows.",
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
     "card": "take the jobs in arrow order",
     "arrows": null
    },
    {
     "say": "Line nine. To begin, every job ends after just its own time. Three, two, four, one.",
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
     "box": [
      "job 0 → 3",
      "job 1 → 2",
      "job 2 → 4",
      "job 3 → 1"
     ],
     "card": "to begin: end = its own time",
     "arrows": null
    },
    {
     "say": "Jobs zero and one wait for nothing. They are ready.",
     "line": 12,
     "ptr": null,
     "hot": [
      0,
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
     "card": "ready: [0, 1]",
     "arrows": null
    },
    {
     "say": "Job one is taken. It ends at two. So job two cannot end before two plus four. Six.",
     "line": 17,
     "ptr": {
      "job": 1
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
     "box": [
      "job 0 → 3",
      "job 1 → 2",
      "job 2 → 6",
      "job 3 → 1"
     ],
     "card": "after job 1: 2 + 4 = 6",
     "arrows": null
    },
    {
     "say": "Job zero is taken. It ends at three. That would let job two end at three plus four. Seven. It says six. Which one is kept?",
     "line": 17,
     "ptr": {
      "job": 0
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
     "card": "max(6, 3 + 4) → ?",
     "arrows": null
    },
    {
     "say": "Seven. Job two must wait for the slower one. Now its count is zero, and it is ready.",
     "line": 19,
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
     "box": [
      "job 0 → 3",
      "job 1 → 2",
      "job 2 → 7",
      "job 3 → 1"
     ],
     "card": "job 2 ends at 7",
     "arrows": null
    },
    {
     "say": "Job two is taken. Job three ends at seven plus one. Eight.",
     "line": 17,
     "ptr": {
      "job": 2
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
     "box": [
      "job 0 → 3",
      "job 1 → 2",
      "job 2 → 7",
      "job 3 → 8"
     ],
     "card": "7 + 1 = 8",
     "arrows": null
    },
    {
     "say": "Line twenty two returns the largest end. Eight hours.",
     "line": 22,
     "ptr": {
      "job": 3
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
     "card": "",
     "arrows": null
    },
    {
     "say": "Every job and every arrow is handled once. O of jobs plus arrows.",
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
     "card": "O(jobs + arrows)",
     "arrows": null
    },
    {
     "say": "The lists, the counts, and the ends.",
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
     "card": "lists + counts + ends",
     "arrows": null
    },
    {
     "say": "A build system predicts how long a build will take this way. Each step starts when the slowest thing it needs is ready.",
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
     "card": "how long will the build take?",
     "arrows": null
    }
   ]
  },
  {
   "id": "mq4",
   "num": 4,
   "title": "The Lowest Wall",
   "fn": "lowestWall",
   "ask": "There are <b>n burrows</b>, numbered 0 to n - 1. Every tunnel has a <b>wall</b> of some height that you must climb over. A way is only as easy as its <b>highest wall</b>. Return the smallest possible \"highest wall\" on a way from burrow <b>from</b> to burrow <b>to</b>. If from and to are the same burrow, return <b>0</b>. (A way always exists.)",
   "spec": "lowestWall(4, [[0, 1, 7], [0, 2, 3], [2, 1, 4], [1, 3, 2], [2, 3, 9]], 0, 3) → 4      (0 → 2 → 1 → 3: walls 3, 4, 2)",
   "start": "// A Heap class is provided. new Heap((x, y) => x[0] - y[0]) keeps the pair with the SMALLEST first value on top.\n// heap.push(x) · heap.pop() removes and returns the top · heap.size\n// The burrows are numbered 0 to n - 1.\n// roads is a list of [a, b, wall]: a tunnel between a and b with a wall of that height, usable both ways.\nfunction lowestWall(n, roads, from, to) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Things joined to things (explore or count), \"the fewest steps\", \"this before that\", groups that keep merging, a cheapest way with costs, or a signal from an earlier part?",
    "What does one way \"cost\" here? It is not the sum.",
    "You know a search that always handles the cheapest burrow next. What has to change in it?"
   ],
   "hints": [
    "Keep best[x]: the lowest \"highest wall\" found so far on a way to x. 0 for the start, Infinity for the rest.",
    "Use the cheapest-way search with a min-heap of [high, node].",
    "Going through a tunnel, the new value is Math.max(high, wall), not high + wall. If that is smaller than best[other], store it and push it."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      4,
      [
       [
        0,
        1,
        7
       ],
       [
        0,
        2,
        3
       ],
       [
        2,
        1,
        4
       ],
       [
        1,
        3,
        2
       ],
       [
        2,
        3,
        9
       ]
      ],
      0,
      3
     ],
     "want": 4
    },
    {
     "args": [
      1,
      [],
      0,
      0
     ],
     "want": 0
    },
    {
     "args": [
      2,
      [
       [
        0,
        1,
        5
       ]
      ],
      0,
      1
     ],
     "want": 5
    },
    {
     "args": [
      3,
      [
       [
        0,
        1,
        9
       ],
       [
        1,
        2,
        1
       ],
       [
        0,
        2,
        8
       ]
      ],
      0,
      1
     ],
     "want": 8
    },
    {
     "args": [
      4,
      [
       [
        0,
        1,
        7
       ],
       [
        0,
        2,
        3
       ],
       [
        2,
        1,
        4
       ],
       [
        1,
        3,
        2
       ],
       [
        2,
        3,
        9
       ]
      ],
      3,
      0
     ],
     "want": 4
    },
    {
     "args": [
      3,
      [
       [
        0,
        1,
        2
       ],
       [
        1,
        2,
        2
       ],
       [
        0,
        2,
        3
       ]
      ],
      0,
      2
     ],
     "want": 2
    },
    {
     "args": [
      4,
      [
       [
        0,
        1,
        1
       ],
       [
        1,
        2,
        6
       ],
       [
        2,
        3,
        1
       ],
       [
        0,
        3,
        5
       ]
      ],
      0,
      2
     ],
     "want": 5
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function lowestWall(n, roads, from, to) {",
    "  const near = Array.from({ length: n }, () => []);",
    "  for (const [a, b, wall] of roads) {",
    "    near[a].push([b, wall]);",
    "    near[b].push([a, wall]);",
    "  }",
    "  const best = new Array(n).fill(Infinity);",
    "  best[from] = 0;",
    "  const heap = new Heap((x, y) => x[0] - y[0]);",
    "  heap.push([0, from]);",
    "  while (heap.size > 0) {",
    "    const [high, node] = heap.pop();",
    "    if (node === to) return high;",
    "    if (high > best[node]) continue;",
    "    for (const [other, wall] of near[node]) {",
    "      const top = Math.max(high, wall);",
    "      if (top < best[other]) {",
    "        best[other] = top;",
    "        heap.push([top, other]);",
    "      }",
    "    }",
    "  }",
    "}"
   ],
   "why": "With sums, the search is correct because adding a tunnel never makes a way cheaper. Is the same true for \"the highest wall so far\"?",
   "topic": null,
   "world": "A hiking app finds the route whose steepest climb is as gentle as possible, like this.",
   "view": {
    "row": [],
    "tree": null,
    "grid": null,
    "graph": {
     "nodes": [
      [
       0,
       0.02,
       0.5
      ],
      [
       1,
       0.5,
       0.02
      ],
      [
       2,
       0.5,
       0.98
      ],
      [
       3,
       0.98,
       0.5
      ]
     ],
     "edges": [
      [
       0,
       1,
       7
      ],
      [
       0,
       2,
       3
      ],
      [
       2,
       1,
       4
      ],
      [
       1,
       3,
       2
      ],
      [
       2,
       3,
       9
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
    "box": {
     "title": "heap",
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
     "say": "A way costs its highest wall. So keep, for every burrow, the lowest highest wall found so far.",
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
     "card": "a way costs its highest wall",
     "arrows": null
    },
    {
     "say": "Then it is the cheapest way search, with one change. Take the larger, instead of adding.",
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
     "card": "same search · max instead of +",
     "arrows": null
    },
    {
     "say": "The start has climbed nothing. Zero. It goes on the heap.",
     "line": 10,
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
     "vars": null,
     "box": [
      "0 → burrow 0"
     ],
     "card": "highest wall so far: 0",
     "arrows": null
    },
    {
     "say": "Burrow zero comes out. The wall to one is seven. The wall to two is three.",
     "line": 19,
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
     "box": [
      "3 → burrow 2",
      "7 → burrow 1"
     ],
     "card": "best[1] = 7 · best[2] = 3",
     "arrows": null
    },
    {
     "say": "The lowest is burrow two, at three. From two, the wall to burrow one is four. What is the highest wall on this way to one?",
     "line": 16,
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
     "card": "so far 3 · next wall 4 → ?",
     "arrows": null
    },
    {
     "say": "Four. The larger of the two. Not the sum. And four beats seven.",
     "line": 18,
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
     "box": [
      "4 → burrow 1",
      "7 → burrow 1",
      "9 → burrow 3"
     ],
     "card": "max(3, 4) = 4 < 7 → best[1] = 4",
     "arrows": null
    },
    {
     "say": "Burrow one, at four. The wall to three is only two. The highest stays four. That beats nine.",
     "line": 18,
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
     "box": [
      "4 → burrow 3",
      "7 → burrow 1",
      "9 → burrow 3"
     ],
     "card": "max(4, 2) = 4 < 9 → best[3] = 4",
     "arrows": null
    },
    {
     "say": "Burrow three comes out, at four. That is the target. Line thirteen returns four.",
     "line": 13,
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
     "card": "",
     "arrows": null
    },
    {
     "say": "The same cost as the cheapest way search. O of tunnels, times log n.",
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
     "card": "O(tunnels × log n)",
     "arrows": null
    },
    {
     "say": "The lists, the best values, and the heap.",
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
     "card": "lists + best + heap",
     "arrows": null
    },
    {
     "say": "A hiking app finds the route whose steepest climb is as gentle as possible, like this.",
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
     "card": "the gentlest steepest climb",
     "arrows": null
    }
   ]
  },
  {
   "id": "mq5",
   "num": 5,
   "title": "The Biggest Field",
   "fn": "biggestField",
   "ask": "In the grid, <b>1 is a field</b> square and <b>0 is path</b>. Field squares that touch side to side belong to the same field. Return the <b>number of squares in the biggest field</b> (0 if there is no field). You may change the grid.",
   "spec": "biggestField([[1, 1, 0, 0], [1, 1, 0, 1], [0, 0, 0, 1]]) → 4",
   "start": "// grid is an array of rows. 1 = field, 0 = path.\nfunction biggestField(grid) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Things joined to things (explore or count), \"the fewest steps\", \"this before that\", groups that keep merging, a cheapest way with costs, or a signal from an earlier part?",
    "You have counted groups of squares before. What is new here?",
    "How can the walk that removes a field also tell you how big it was?"
   ],
   "hints": [
    "Write size(r, c): outside the grid or not a field square → 0.",
    "Otherwise turn the square into path, and return 1 plus the sizes of its four neighbours.",
    "Call size on every square and keep the largest answer."
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
        1,
        0,
        1
       ],
       [
        0,
        0,
        0,
        1
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
        1
       ],
       [
        1,
        1
       ]
      ]
     ],
     "want": 4
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
        0,
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
        0
       ]
      ]
     ],
     "want": 5
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function biggestField(grid) {",
    "  const size = (r, c) => {",
    "    if (grid[r]?.[c] !== 1) return 0;",
    "    grid[r][c] = 0;",
    "    return 1 + size(r + 1, c) + size(r - 1, c)",
    "      + size(r, c + 1) + size(r, c - 1);",
    "  };",
    "  let best = 0;",
    "  for (let r = 0; r < grid.length; r++) {",
    "    for (let c = 0; c < grid[0].length; c++) {",
    "      best = Math.max(best, size(r, c));",
    "    }",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "Line 4 changes the grid. What would happen to the count, and to the walk, without it?",
   "topic": null,
   "world": "A map tool finds the largest lake like this. And a photo app, the biggest object in a picture.",
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
      1,
      0,
      1
     ],
     [
      0,
      0,
      0,
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
     "say": "Walk a whole field from one of its squares, deep first, removing it as you go. You know that walk.",
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
     "card": "walk one field, removing it",
     "arrows": null
    },
    {
     "say": "The new part. Each call reports a number. One for its own square, plus what its four neighbours report.",
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
     "card": "size = 1 + the four neighbours",
     "arrows": null
    },
    {
     "say": "The scan starts in the top left corner. A one. So line eleven calls size.",
     "line": 11,
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
      "best": 0
     },
     "box": null,
     "card": "a field square → measure it",
     "arrows": null
    },
    {
     "say": "Size turns the square into path, and asks its four neighbours. They ask theirs. Four squares answer one each.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      4,
      5
     ],
     "bad": [],
     "free": [],
     "set": {
      "0": 0,
      "1": 0,
      "4": 0,
      "5": 0
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + 1 + 1 + 1 = 4",
     "arrows": null
    },
    {
     "say": "Four comes back. It is the best so far.",
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
      "best": 4
     },
     "box": null,
     "card": "best = 4",
     "arrows": null
    },
    {
     "say": "The scan moves on. The next squares are path now. What does size return for them?",
     "line": 3,
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
     "card": "a path square → ?",
     "arrows": null
    },
    {
     "say": "Zero, at once. Then it meets new field. This one has two squares. Not better than four.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [
      7,
      11
     ],
     "bad": [],
     "free": [],
     "set": {
      "7": 0,
      "11": 0
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "the next field: 2 · best stays 4",
     "arrows": null
    },
    {
     "say": "The scan ends. Line fourteen returns four.",
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
     "say": "Every square is turned to path at most once. O of R times C.",
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
     "say": "The waiting calls can be as many as the squares of one field.",
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
     "card": "waiting calls → O(R × C)",
     "arrows": null
    },
    {
     "say": "A map tool finds the largest lake like this. And a photo app, the biggest object in a picture.",
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
     "card": "the largest lake on a map",
     "arrows": null
    }
   ]
  },
  {
   "id": "mq6",
   "num": 6,
   "title": "Not a Tunnel Too Many",
   "fn": "isOneTree",
   "ask": "Return <b>true</b> if the tunnels join all n burrows <b>without any loop</b>: every burrow can be reached from every other, in exactly one way.",
   "spec": "isOneTree(4, [[0, 1], [0, 2], [2, 3]]) → true      isOneTree(4, [[0, 1], [1, 2], [2, 0]]) → false",
   "start": "// The burrows are numbered 0 to n - 1. links is a list of [p, q] pairs: a tunnel between p and q.\nfunction isOneTree(n, links) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Things joined to things (explore or count), \"the fewest steps\", \"this before that\", groups that keep merging, a cheapest way with costs, or a signal from an earlier part?",
    "How many tunnels do n burrows need at the very least to be connected? What happens with one more?",
    "How do you notice a tunnel that closes a loop?"
   ],
   "hints": [
    "A network without loops that joins n burrows has exactly n - 1 tunnels. Check that first.",
    "Then add the tunnels one by one with a parent array.",
    "If a tunnel joins two burrows that already have the same leader, it closes a loop: return false. If none does, return true."
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
        0,
        2
       ],
       [
        2,
        3
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
        1,
        2
       ],
       [
        2,
        0
       ]
      ]
     ],
     "want": false
    },
    {
     "args": [
      1,
      []
     ],
     "want": true
    },
    {
     "args": [
      2,
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
     "want": false
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
        1,
        2
       ],
       [
        3,
        4
       ]
      ]
     ],
     "want": false
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
       ]
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
    "function isOneTree(n, links) {",
    "  if (links.length !== n - 1) return false;",
    "  const parent = Array.from({ length: n }, (_, i) => i);",
    "  const find = (x) => {",
    "    while (parent[x] !== x) x = parent[x];",
    "    return x;",
    "  };",
    "  for (const [p, q] of links) {",
    "    const a = find(p);",
    "    const b = find(q);",
    "    if (a === b) return false;",
    "    parent[a] = b;",
    "  }",
    "  return true;",
    "}"
   ],
   "why": "The code never checks that every burrow is reached. Why is that not needed?",
   "topic": null,
   "world": "A network designer checks this. Every office connected, and not one cable more than needed.",
   "view": {
    "row": [
     0,
     1,
     2,
     3
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "parent",
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
     "say": "Four burrows need exactly three tunnels. Fewer leaves a burrow out. More closes a loop.",
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
     "card": "n burrows → exactly n − 1 tunnels",
     "arrows": null
    },
    {
     "say": "With the right number, only one thing can still be wrong. A tunnel that joins two burrows already connected.",
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
     "card": "then: does any tunnel close a loop?",
     "arrows": null
    },
    {
     "say": "Line two counts. Three tunnels, for four burrows. The right number. So far so good.",
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
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "3 tunnels for 4 burrows: fine",
     "arrows": null
    },
    {
     "say": "The first tunnel. Zero and one. Different leaders. Joined.",
     "line": 12,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1
     ],
     "bad": [],
     "free": [],
     "set": {
      "0": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "leaders 0 and 1 → join",
     "arrows": null
    },
    {
     "say": "One and two. Different leaders. Joined.",
     "line": 12,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      2
     ],
     "bad": [],
     "free": [],
     "set": {
      "1": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "leaders 1 and 2 → join",
     "arrows": null
    },
    {
     "say": "Two and zero. Find two is two. Find zero climbs to two. What does that mean?",
     "line": 11,
     "ptr": null,
     "hot": [
      0,
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
     "card": "leaders 2 and 2 → ?",
     "arrows": null
    },
    {
     "say": "A loop. Line eleven returns false. And with only three tunnels, a loop means a burrow got none. Burrow three.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      0,
      2
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
     "say": "And if no tunnel closes a loop? Then n minus one tunnels reach every burrow. One way to each. That is a tree.",
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
     "card": "n − 1 tunnels + no loop → true",
     "arrows": null
    },
    {
     "say": "Two short climbs for every tunnel.",
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
     "card": "2 finds per tunnel",
     "arrows": null
    },
    {
     "say": "One array of n numbers.",
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
     "card": "parent array → O(n) space",
     "arrows": null
    },
    {
     "say": "A network designer checks this. Every office connected, and not one cable more than needed.",
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
     "card": "no cable more than needed",
     "arrows": null
    }
   ]
  },
  {
   "id": "mq7",
   "num": 7,
   "title": "Two Teams",
   "fn": "twoTeams",
   "ask": "Some pairs of burrows are <b>rivals</b>. Return <b>true</b> if the burrows can be split into <b>two teams</b> so that no two rivals are in the same team.",
   "spec": "twoTeams(4, [[0, 1], [1, 2], [2, 3], [3, 0]]) → true      twoTeams(4, [[0, 1], [1, 2], [2, 0], [2, 3]]) → false",
   "start": "// The burrows are numbered 0 to n - 1. links is a list of [a, b] pairs: a and b are rivals.\nfunction twoTeams(n, links) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Things joined to things (explore or count), \"the fewest steps\", \"this before that\", groups that keep merging, a cheapest way with costs, or a signal from an earlier part?",
    "Put burrow 0 in the first team. What does that force?",
    "When do you find out that it cannot be done?",
    "The burrows may be in several separate groups. What does that change?"
   ],
   "hints": [
    "Build neighbour lists. Keep team[x]: 0 for \"no team yet\", 1 and -1 for the two teams.",
    "Walk from a burrow with no team: give it team 1. Every rival of a burrow gets the opposite team (-team[node]) and is visited next.",
    "If a rival already has the same team as the burrow you are on, return false. Start a new walk from every burrow that still has no team."
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
        0
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
        1,
        2
       ],
       [
        2,
        0
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
      1,
      []
     ],
     "want": true
    },
    {
     "args": [
      3,
      []
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
     "want": false
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
        1,
        2
       ],
       [
        3,
        4
       ]
      ]
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
        0
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
    "function twoTeams(n, links) {",
    "  const near = Array.from({ length: n }, () => []);",
    "  for (const [a, b] of links) {",
    "    near[a].push(b);",
    "    near[b].push(a);",
    "  }",
    "  const team = new Array(n).fill(0);",
    "  for (let start = 0; start < n; start++) {",
    "    if (team[start] !== 0) continue;",
    "    team[start] = 1;",
    "    const queue = [start];",
    "    for (const node of queue) {",
    "      for (const other of near[node]) {",
    "        if (team[other] === team[node]) return false;",
    "        if (team[other] === 0) {",
    "          team[other] = -team[node];",
    "          queue.push(other);",
    "        }",
    "      }",
    "    }",
    "  }",
    "  return true;",
    "}"
   ],
   "why": "Line 12 loops over a queue that grows while the loop runs. Why does every burrow of the group still get visited exactly once?",
   "topic": null,
   "world": "An exam planner does this. Two exams that share a student cannot be in the same slot. Are two slots enough?",
   "view": {
    "row": [],
    "tree": null,
    "grid": null,
    "graph": {
     "nodes": [
      [
       0,
       0.05,
       0.95
      ],
      [
       1,
       0.3,
       0
      ],
      [
       2,
       0.55,
       0.95
      ],
      [
       3,
       0.98,
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
       0
      ],
      [
       2,
       3
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
     "say": "Put the first burrow in team A. Then its rivals must all be in team B. And their rivals, in team A again.",
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
     "card": "my rivals go in the other team",
     "arrows": null
    },
    {
     "say": "Walk the graph like that. If two rivals ever land in the same team, it cannot be done.",
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
     "card": "two rivals, same team → false",
     "arrows": null
    },
    {
     "say": "Lines two to six build the lists of rivals.",
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
     "card": "rivals → neighbour lists",
     "arrows": null
    },
    {
     "say": "Burrow zero has no team yet. Line ten puts it in team A.",
     "line": 10,
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
     "card": "burrow 0 → team A",
     "arrows": null
    },
    {
     "say": "Its rivals are one and two. Line sixteen gives both the other team. Team B.",
     "line": 16,
     "ptr": null,
     "hot": [],
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
     "vars": null,
     "box": null,
     "card": "1 and 2 → team B",
     "arrows": null
    },
    {
     "say": "Next in the queue is burrow one. It looks at its rival, two. Both are in team B. What does that mean?",
     "line": 14,
     "ptr": {
      "node": 1
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
     "card": "1 and 2: rivals, same team → ?",
     "arrows": null
    },
    {
     "say": "It cannot be done. Every choice was forced, and two rivals still share a team. Line fourteen returns false.",
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
     "say": "And if the walk ends with no clash, for every group of burrows, two teams are enough.",
     "line": 22,
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
     "card": "no clash anywhere → true",
     "arrows": null
    },
    {
     "say": "Every burrow is visited once, and every line is looked at twice.",
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
     "card": "O(burrows + lines)",
     "arrows": null
    },
    {
     "say": "The lists, the teams, and the queue.",
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
     "card": "lists + teams + queue",
     "arrows": null
    },
    {
     "say": "An exam planner does this. Two exams that share a student cannot be in the same slot. Are two slots enough?",
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
     "card": "exams into two time slots",
     "arrows": null
    }
   ]
  },
  {
   "id": "mq8",
   "num": 8,
   "title": "Within Reach",
   "fn": "withinReach",
   "ask": "There are <b>n burrows</b>, numbered 0 to n - 1, and every tunnel has a <b>cost</b>. Return <b>how many burrows</b> can be reached from burrow <b>from</b> with a total cost of <b>budget or less</b>. The starting burrow counts too.",
   "spec": "withinReach(5, [[0, 1, 2], [0, 2, 6], [1, 2, 3], [1, 3, 7], [2, 4, 1], [3, 4, 4]], 0, 6) → 4",
   "start": "// A Heap class is provided. new Heap((x, y) => x[0] - y[0]) keeps the pair with the SMALLEST first value on top.\n// heap.push(x) · heap.pop() removes and returns the top · heap.size\n// The burrows are numbered 0 to n - 1.\n// roads is a list of [a, b, cost]: a tunnel between a and b, usable both ways.\nfunction withinReach(n, roads, from, budget) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Things joined to things (explore or count), \"the fewest steps\", \"this before that\", groups that keep merging, a cheapest way with costs, or a signal from an earlier part?",
    "When exactly is one burrow within reach?",
    "So what do you need to know about every burrow?"
   ],
   "hints": [
    "A burrow is within reach if its cheapest cost from the start is at most the budget.",
    "Find the cheapest cost to every burrow: the cheapest-way search with no target, run until the heap is empty.",
    "Then count the values in best that are at most budget."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      5,
      [
       [
        0,
        1,
        2
       ],
       [
        0,
        2,
        6
       ],
       [
        1,
        2,
        3
       ],
       [
        1,
        3,
        7
       ],
       [
        2,
        4,
        1
       ],
       [
        3,
        4,
        4
       ]
      ],
      0,
      6
     ],
     "want": 4
    },
    {
     "args": [
      5,
      [
       [
        0,
        1,
        2
       ],
       [
        0,
        2,
        6
       ],
       [
        1,
        2,
        3
       ],
       [
        1,
        3,
        7
       ],
       [
        2,
        4,
        1
       ],
       [
        3,
        4,
        4
       ]
      ],
      0,
      0
     ],
     "want": 1
    },
    {
     "args": [
      5,
      [
       [
        0,
        1,
        2
       ],
       [
        0,
        2,
        6
       ],
       [
        1,
        2,
        3
       ],
       [
        1,
        3,
        7
       ],
       [
        2,
        4,
        1
       ],
       [
        3,
        4,
        4
       ]
      ],
      0,
      100
     ],
     "want": 5
    },
    {
     "args": [
      1,
      [],
      0,
      3
     ],
     "want": 1
    },
    {
     "args": [
      3,
      [
       [
        0,
        1,
        4
       ]
      ],
      0,
      10
     ],
     "want": 2
    },
    {
     "args": [
      5,
      [
       [
        0,
        1,
        2
       ],
       [
        0,
        2,
        6
       ],
       [
        1,
        2,
        3
       ],
       [
        1,
        3,
        7
       ],
       [
        2,
        4,
        1
       ],
       [
        3,
        4,
        4
       ]
      ],
      3,
      5
     ],
     "want": 3
    },
    {
     "args": [
      3,
      [
       [
        0,
        1,
        2
       ],
       [
        1,
        2,
        2
       ],
       [
        0,
        2,
        5
       ]
      ],
      0,
      4
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
    "function withinReach(n, roads, from, budget) {",
    "  const near = Array.from({ length: n }, () => []);",
    "  for (const [a, b, cost] of roads) {",
    "    near[a].push([b, cost]);",
    "    near[b].push([a, cost]);",
    "  }",
    "  const best = new Array(n).fill(Infinity);",
    "  best[from] = 0;",
    "  const heap = new Heap((x, y) => x[0] - y[0]);",
    "  heap.push([0, from]);",
    "  while (heap.size > 0) {",
    "    const [cost, node] = heap.pop();",
    "    if (cost > best[node]) continue;",
    "    for (const [other, step] of near[node]) {",
    "      if (cost + step < best[other]) {",
    "        best[other] = cost + step;",
    "        heap.push([best[other], other]);",
    "      }",
    "    }",
    "  }",
    "  return best.filter((c) => c <= budget).length;",
    "}"
   ],
   "why": "Could the search stop early, as soon as the heap gives a cost above the budget? Why?",
   "topic": null,
   "world": "A delivery app shows every address it can reach within thirty minutes. It is this search, and a count.",
   "view": {
    "row": [],
    "tree": null,
    "grid": null,
    "graph": {
     "nodes": [
      [
       0,
       0.02,
       0.5
      ],
      [
       1,
       0.42,
       0.02
      ],
      [
       2,
       0.42,
       0.98
      ],
      [
       3,
       0.98,
       0.02
      ],
      [
       4,
       0.98,
       0.98
      ]
     ],
     "edges": [
      [
       0,
       1,
       2
      ],
      [
       0,
       2,
       6
      ],
      [
       1,
       2,
       3
      ],
      [
       1,
       3,
       7
      ],
      [
       2,
       4,
       1
      ],
      [
       3,
       4,
       4
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
    "box": {
     "title": "heap",
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
     "say": "A burrow is within reach, if its cheapest cost from the start fits in the budget.",
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
     "card": "within reach = cheapest cost ≤ budget",
     "arrows": null
    },
    {
     "say": "So find the cheapest cost to every burrow. Then count.",
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
     "card": "cheapest cost to all · then count",
     "arrows": null
    },
    {
     "say": "The start costs zero, and goes on the heap.",
     "line": 10,
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
     "vars": null,
     "box": [
      "0 → burrow 0"
     ],
     "card": "best[0] = 0",
     "arrows": null
    },
    {
     "say": "Burrow zero comes out. Burrow one gets two. Burrow two gets six.",
     "line": 17,
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
     "box": [
      "2 → burrow 1",
      "6 → burrow 2"
     ],
     "card": "best[1] = 2 · best[2] = 6",
     "arrows": null
    },
    {
     "say": "Burrow one, at two. Burrow two improves to five. Burrow three gets nine.",
     "line": 16,
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
     "box": [
      "5 → burrow 2",
      "6 → burrow 2",
      "9 → burrow 3"
     ],
     "card": "best[2] = 5 · best[3] = 9",
     "arrows": null
    },
    {
     "say": "Burrow two, at five. Burrow four gets six. The rest of the heap changes nothing.",
     "line": 17,
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
     "box": [
      "6 → burrow 4",
      "9 → burrow 3"
     ],
     "card": "best[4] = 6",
     "arrows": null
    },
    {
     "say": "The search ends with these costs. Zero, two, five, nine, six. The budget is six. How many burrows are within reach?",
     "line": 21,
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
     "card": "costs 0 2 5 9 6 · budget 6 → ?",
     "arrows": null
    },
    {
     "say": "Four. Only burrow three, at nine, is too far. Line twenty one counts them.",
     "line": 21,
     "ptr": null,
     "hot": [],
     "ok": [
      4
     ],
     "bad": [
      3
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
     "say": "The search costs O of tunnels, times log n. The count is one more pass.",
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
     "card": "O(tunnels × log n)",
     "arrows": null
    },
    {
     "say": "The lists, the best costs, and the heap.",
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
     "card": "lists + best + heap",
     "arrows": null
    },
    {
     "say": "A delivery app shows every address it can reach within thirty minutes. It is this search, and a count.",
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
     "card": "everywhere within 30 minutes",
     "arrows": null
    }
   ]
  }
 ]
};
