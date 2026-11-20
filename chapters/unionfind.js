window.CHAPTER = {
 "id": "unionfind",
 "title": "Union-Find",
 "sub": "CHAPTER 20 · UNION-FIND",
 "key": "burrow-ch-unionfind",
 "next": {
  "href": "index.html#chapters",
  "label": "All chapters"
 },
 "prev": {
  "href": "chapter.html?c=topo",
  "label": "Chapter 19: Topological Sort"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "uf0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Groups that only ever merge",
   "intro": "When groups keep joining and you keep being asked \"are these two together?\", there is a tiny structure for it."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "uft1",
   "label": "The one lesson",
   "short": "T1",
   "name": "Every group has a leader",
   "intro": "One array of parents, and two small moves: find the leader, and join two leaders. One guess."
  }
 ],
 "notes": {
  "w": "<h3>The words</h3><ul><li><b>Union-find</b> (also called a disjoint set): a structure for groups that <b>merge and never split</b>.</li>\n      <li><b>It answers one question fast:</b> are these two items in the same group?</li>\n      <li><b>Signals:</b> \"connected\" while links keep arriving, \"merge the groups\", \"which link closes a loop\", \"how many groups are left\".</li></ul>",
  "t1": "<h3>Key ideas</h3><ul><li><b>parent[x]</b> is one step towards the leader of x's group. A <b>leader</b> is its own parent: <code>parent[x] === x</code>.</li>\n      <li><b>At the start</b> every item is its own leader: n groups of one.</li>\n      <li><b>find(x):</b> follow the parents until you reach a leader.</li>\n      <li><b>union(a, b):</b> find both leaders and point one at the other: <code>parent[find(a)] = find(b)</code>.</li>\n      <li><b>Same group?</b> <code>find(a) === find(b)</code>.</li>\n      <li><b>A shortcut that makes it fast:</b> while climbing, point each item at its grandparent (<code>parent[x] = parent[parent[x]]</code>). Chains shrink as they are used, and a find becomes almost a single step.</li>\n      <li><b>When a plain walk is enough:</b> if all the links are known before the questions start, one DFS or BFS does the job. Union-find wins when links and questions are mixed.</li></ul>"
 },
 "quiz": {
  "uft1-q1": {
   "ask": "The leader of 0 is 2. Burrow 4 is its own parent, so its leader is 4. Are 0 and 4 connected?",
   "opts": [
    "No: they have different leaders",
    "Yes: every burrow is connected",
    "It cannot be known without walking the tunnels"
   ],
   "right": 0,
   "why": "Two burrows are in the same group exactly when find gives the same leader for both."
  },
  "uf1s-q": {
   "ask": "find(0) is on burrow 0, whose parent is 1. And parent[1] is 2. What does find do next?",
   "opts": [
    "Moves to 1, then to 2, and stops there",
    "Stops at 1",
    "Returns 0"
   ],
   "right": 0,
   "why": "It keeps climbing while a burrow is not its own parent. Burrow 2 is its own parent, so 2 is the leader."
  },
  "uf2s-q": {
   "ask": "For the tunnel 0-2, both burrows have the leader 2. What does that tell you?",
   "opts": [
    "They were already connected: this tunnel is extra",
    "They are not connected yet",
    "The parent array is broken"
   ],
   "right": 0,
   "why": "The same leader means the same group. A tunnel inside one group joins nothing new."
  },
  "uf3s-q": {
   "ask": "The tunnel 1-0 joins two burrows with the same leader. There were 2 groups. What is pushed to out?",
   "opts": [
    "2: nothing was merged",
    "1: every tunnel removes a group",
    "3"
   ],
   "right": 0,
   "why": "A tunnel inside one group merges nothing, so the count stays at 2."
  }
 },
 "problems": [
  {
   "id": "uf1",
   "num": 1,
   "title": "The Same Group?",
   "fn": "sameGroup",
   "ask": "The tunnels in <b>links</b> are dug one by one, and each one joins two groups of burrows into one. Afterwards, return <b>true</b> if burrows <b>a</b> and <b>b</b> are in the same group. Write it with a <b>parent array</b>, not with a walk over the graph.",
   "spec": "sameGroup(5, [[0, 1], [3, 4], [1, 2]], 0, 2) → true      sameGroup(5, same links, 0, 4) → false",
   "start": "// The burrows are numbered 0 to n - 1. links is a list of [p, q] pairs: a tunnel is dug between p and q.\nfunction sameGroup(n, links, a, b) {\n  // your code here\n}\n",
   "plan": [
    "If every group had one leader, how would you answer \"same group?\"",
    "What could each burrow remember, so that its leader can be found?",
    "What has to change when a tunnel joins two groups?"
   ],
   "hints": [
    "Make an array parent where parent[i] = i: every burrow starts as its own leader.",
    "find(x): while parent[x] is not x, move x to parent[x]. Return x.",
    "For each tunnel [p, q]: parent[find(p)] = find(q). At the end compare find(a) with find(b)."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      5,
      [
       [
        0,
        1
       ],
       [
        3,
        4
       ],
       [
        1,
        2
       ]
      ],
      0,
      2
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
        3,
        4
       ],
       [
        1,
        2
       ]
      ],
      0,
      4
     ],
     "want": false
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
      3,
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
        2,
        3
       ],
       [
        1,
        3
       ]
      ],
      0,
      2
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
        0,
        1
       ]
      ],
      1,
      0
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
        2,
        3
       ],
       [
        4,
        5
       ]
      ],
      1,
      4
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
    "function sameGroup(n, links, a, b) {",
    "  const parent = Array.from({ length: n }, (_, i) => i);",
    "  const find = (x) => {",
    "    while (parent[x] !== x) x = parent[x];",
    "    return x;",
    "  };",
    "  for (const [p, q] of links) {",
    "    parent[find(p)] = find(q);",
    "  }",
    "  return find(a) === find(b);",
    "}"
   ],
   "why": "Line 8 points the leader of p at the leader of q, not p at q. What goes wrong if you write parent[p] = q instead?",
   "world": "A social app answers \"do you two share a circle of friends\" exactly like this.",
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
    "row2": null,
    "rowLabel": "parent",
    "row2Label": "",
    "ptrs": [
     {
      "id": "x",
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
     "say": "Every burrow stores its parent. A burrow that is its own parent, is the leader of its group.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "parent[x] = x → x is a leader",
     "arrows": null
    },
    {
     "say": "Find follows the parents up to the leader. Union points one leader at the other.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "find: climb · union: join leaders",
     "arrows": null
    },
    {
     "say": "Line two. Every burrow starts as its own parent. Five groups of one.",
     "line": 2,
     "ptr": null,
     "hot": [
      0,
      1,
      2,
      3,
      4
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "5 groups of one",
     "arrows": null
    },
    {
     "say": "The first tunnel joins zero and one. Both are leaders. Line eight points zero at one.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1
     ],
     "bad": [],
     "set": {
      "0": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "union(0, 1): parent[0] = 1",
     "arrows": null
    },
    {
     "say": "The second tunnel joins three and four. Three now points at four.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [
      3,
      4
     ],
     "bad": [],
     "set": {
      "3": 4
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "union(3, 4): parent[3] = 4",
     "arrows": null
    },
    {
     "say": "The third joins one and two. The leader of one is one itself. It now points at two.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      2
     ],
     "bad": [],
     "set": {
      "1": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "union(1, 2): parent[1] = 2",
     "arrows": null
    },
    {
     "say": "Now the question. Are zero and two connected? Find zero. Its parent is one. Not a leader. Where does find go next?",
     "line": 4,
     "ptr": {
      "x": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "find(0): parent[0] = 1 → ?",
     "arrows": null
    },
    {
     "say": "It climbs. To one. Then to two. Two is its own parent. So the leader of zero is two.",
     "line": 5,
     "ptr": {
      "x": 2
     },
     "hot": [],
     "ok": [
      2
     ],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "find(0) = 2",
     "arrows": null
    },
    {
     "say": "The leader of two is two. The same leader. Line ten returns true.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
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
     "say": "Each find climbs a chain of parents. Short in practice. And with one small trick, two puzzles from now, almost a single step.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "find: a short climb",
     "arrows": null
    },
    {
     "say": "One array of n numbers. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
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
     "say": "A social app answers \"do you two share a circle of friends\" exactly like this.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "do we share a circle of friends?",
     "arrows": null
    }
   ]
  },
  {
   "id": "uf2",
   "num": 2,
   "title": "The Extra Tunnel",
   "fn": "extraTunnel",
   "ask": "The tunnels are dug in the given order. One of them may be a waste: it joins two burrows that were <b>already connected</b>. Return the <b>first such tunnel</b> as [p, q], or <b>null</b> if every tunnel was useful.",
   "spec": "extraTunnel(4, [[0, 1], [1, 2], [0, 2], [2, 3]]) → [0, 2]      extraTunnel(3, [[0, 1], [1, 2]]) → null",
   "start": "// The burrows are numbered 0 to n - 1. links is a list of [p, q] pairs: a tunnel is dug between p and q.\nfunction extraTunnel(n, links) {\n  // your code here\n}\n",
   "plan": [
    "Just before a tunnel is dug, what would tell you that its two burrows are already connected?",
    "And if they are not, what must be updated?"
   ],
   "hints": [
    "Use the parent array and find from the previous puzzle.",
    "For each tunnel [p, q]: find both leaders. If they are the same, this is the extra tunnel: return [p, q].",
    "Otherwise point one leader at the other and continue. Return null at the end."
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
        0,
        2
       ],
       [
        2,
        3
       ]
      ]
     ],
     "want": [
      0,
      2
     ]
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
     "want": null
    },
    {
     "args": [
      2,
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
     "want": [
      1,
      0
     ]
    },
    {
     "args": [
      1,
      []
     ],
     "want": null
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
       ],
       [
        0,
        2
       ],
       [
        3,
        4
       ]
      ]
     ],
     "want": [
      0,
      2
     ]
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
     "want": null
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function extraTunnel(n, links) {",
    "  const parent = Array.from({ length: n }, (_, i) => i);",
    "  const find = (x) => {",
    "    while (parent[x] !== x) x = parent[x];",
    "    return x;",
    "  };",
    "  for (const [p, q] of links) {",
    "    const a = find(p);",
    "    const b = find(q);",
    "    if (a === b) return [p, q];",
    "    parent[a] = b;",
    "  }",
    "  return null;",
    "}"
   ],
   "why": "A tunnel between two burrows with the same leader closes a loop. Why is that always true, and never true otherwise?",
   "world": "A network planner uses this to spot a cable that adds nothing. Both of its ends were already connected.",
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
    "ptrs": [
     {
      "id": "a",
      "row": 1
     },
     {
      "id": "b",
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
     "say": "Before digging, find the leader of each end.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "find both leaders first",
     "arrows": null
    },
    {
     "say": "The same leader means they are already connected. This tunnel adds nothing. Different leaders, join them.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "same → extra · different → join",
     "arrows": null
    },
    {
     "say": "Every burrow starts as its own leader.",
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
     "say": "Tunnel zero to one. The leaders are zero, and one. Different. So the tunnel is useful, and line eleven joins them.",
     "line": 11,
     "ptr": {
      "a": 0,
      "b": 1
     },
     "hot": [],
     "ok": [
      0,
      1
     ],
     "bad": [],
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
     "say": "Tunnel one to two. Leaders one, and two. Different. Joined.",
     "line": 11,
     "ptr": {
      "a": 1,
      "b": 2
     },
     "hot": [],
     "ok": [
      1,
      2
     ],
     "bad": [],
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
     "say": "Tunnel zero to two. Find zero climbs to one, then to two. Find two is two. What does that mean?",
     "line": 10,
     "ptr": {
      "a": 2,
      "b": 2
     },
     "hot": [
      0,
      2
     ],
     "ok": [],
     "bad": [],
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
     "say": "They were already connected. This tunnel is the extra one. Line ten returns it.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      0,
      2
     ],
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
     "say": "Two finds for every tunnel. Each one a short climb.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
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
     "say": "A network planner uses this to spot a cable that adds nothing. Both of its ends were already connected.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a cable that adds nothing",
     "arrows": null
    }
   ]
  },
  {
   "id": "uf3",
   "num": 3,
   "title": "Groups After Every Tunnel",
   "fn": "groupsOverTime",
   "ask": "There are n burrows, and at first each is a group of its own. The tunnels are dug in order. Return an array with <b>the number of groups after each tunnel</b>.",
   "spec": "groupsOverTime(4, [[0, 1], [2, 3], [1, 0], [1, 3]]) → [3, 2, 2, 1]",
   "start": "// The burrows are numbered 0 to n - 1. links is a list of [p, q] pairs: a tunnel is dug between p and q.\nfunction groupsOverTime(n, links) {\n  // your code here\n}\n",
   "plan": [
    "How many groups are there before any tunnel?",
    "Which tunnels lower the count, and which leave it alone?",
    "Walking the whole graph after every tunnel would work. Why is that wasteful?"
   ],
   "hints": [
    "Start a counter at n. Use the parent array and find.",
    "For each tunnel: if the two leaders differ, join them and lower the counter by one. Either way, push the counter to the output.",
    "To keep find fast on long inputs, add one line inside its loop: parent[x] = parent[parent[x]]."
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
        2,
        3
       ],
       [
        1,
        0
       ],
       [
        1,
        3
       ]
      ]
     ],
     "want": [
      3,
      2,
      2,
      1
     ]
    },
    {
     "args": [
      1,
      []
     ],
     "want": []
    },
    {
     "args": [
      3,
      []
     ],
     "want": []
    },
    {
     "args": [
      2,
      [
       [
        0,
        1
       ],
       [
        0,
        1
       ]
      ]
     ],
     "want": [
      1,
      1
     ]
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
        0
       ],
       [
        3,
        4
       ],
       [
        0,
        4
       ]
      ]
     ],
     "want": [
      4,
      3,
      3,
      2,
      1
     ]
    },
    {
     "args": [
      3,
      [
       [
        0,
        2
       ]
      ]
     ],
     "want": [
      2
     ]
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
       ],
       [
        3,
        0
       ]
      ]
     ],
     "want": [
      3,
      2,
      1,
      1
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function groupsOverTime(n, links) {",
    "  const parent = Array.from({ length: n }, (_, i) => i);",
    "  const find = (x) => {",
    "    while (parent[x] !== x) {",
    "      parent[x] = parent[parent[x]];",
    "      x = parent[x];",
    "    }",
    "    return x;",
    "  };",
    "  let groups = n;",
    "  const out = [];",
    "  for (const [p, q] of links) {",
    "    const a = find(p);",
    "    const b = find(q);",
    "    if (a !== b) {",
    "      parent[a] = b;",
    "      groups--;",
    "    }",
    "    out.push(groups);",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "Line 5 changes the parent array while find is reading it. Why can that never give a wrong leader?",
   "world": "An online game does this as players link up. After every new friendship, it knows how many separate teams are left.",
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
    "row2": [
     "",
     "",
     "",
     ""
    ],
    "rowLabel": "parent",
    "row2Label": "out",
    "ptrs": [],
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
     "say": "Start with n groups. Every tunnel that really joins two groups, removes one.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a real join → one group fewer",
     "arrows": null
    },
    {
     "say": "A tunnel inside one group changes nothing. The leaders tell the two cases apart.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "same leader → nothing changes",
     "arrows": null
    },
    {
     "say": "Four burrows. Four groups. Line ten starts the counter at n.",
     "line": 10,
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
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "groups": 4
     },
     "box": null,
     "card": "groups = 4",
     "arrows": null
    },
    {
     "say": "Tunnel zero to one. Different leaders. Joined. One group fewer. Three.",
     "line": 17,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1
     ],
     "bad": [],
     "set": {
      "0": 1,
      "d0": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "groups": 3
     },
     "box": null,
     "card": "join → groups = 3",
     "arrows": null
    },
    {
     "say": "Tunnel two to three. Different leaders. Joined. Two groups.",
     "line": 17,
     "ptr": null,
     "hot": [],
     "ok": [
      2,
      3
     ],
     "bad": [],
     "set": {
      "2": 3,
      "d1": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "groups": 2
     },
     "box": null,
     "card": "join → groups = 2",
     "arrows": null
    },
    {
     "say": "Tunnel one to zero. Find one is one. Find zero climbs to one. The same leader. What is written?",
     "line": 15,
     "ptr": null,
     "hot": [
      0,
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "same leader → groups = ?",
     "arrows": null
    },
    {
     "say": "Two again. Nothing merged, so the counter did not move.",
     "line": 19,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": {
      "d2": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "no join → still 2",
     "arrows": null
    },
    {
     "say": "Tunnel one to three. Leaders one, and three. Joined. One group. Everything is connected.",
     "line": 17,
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
      "1": 3,
      "d3": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "groups": 1
     },
     "box": null,
     "card": "join → groups = 1",
     "arrows": null
    },
    {
     "say": "One line is new. Line five. While climbing, each burrow is pointed at its grandparent. So chains get shorter, every time they are used.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "shortcut: point at the grandparent",
     "arrows": null
    },
    {
     "say": "With that shortcut, a find is almost a single step. All the tunnels together cost close to O of n.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "find ≈ one step",
     "arrows": null
    },
    {
     "say": "The parent array, and the output.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "O(n) space",
     "arrows": null
    },
    {
     "say": "An online game does this as players link up. After every new friendship, it knows how many separate teams are left.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "teams left after each link-up",
     "arrows": null
    }
   ]
  }
 ]
};
