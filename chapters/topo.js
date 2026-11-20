window.CHAPTER = {
 "id": "topo",
 "title": "Topological Sort",
 "sub": "CHAPTER 19 · TOPOLOGICAL SORT",
 "key": "burrow-ch-topo",
 "next": {
  "href": "chapter.html?c=unionfind",
  "label": "Chapter 20: Union-Find"
 },
 "prev": {
  "href": "chapter.html?c=graphs",
  "label": "Chapter 18: Graphs and Grids"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "to0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Some things must come first",
   "intro": "Rules of the kind \"this before that\", and what it means to find an order that obeys all of them."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "tot1",
   "label": "The one lesson",
   "short": "T1",
   "name": "Count the arrows pointing in",
   "intro": "Take the jobs that wait for nothing, cross out their arrows, and repeat. And how a loop shows itself. One guess."
  }
 ],
 "notes": {
  "w": "<h3>The words</h3><ul><li><b>Prerequisite:</b> something that must be done first. Drawn as an <b>arrow</b> from \"before\" to \"after\".</li>\n      <li><b>Directed graph:</b> a graph whose edges have a direction (arrows).</li>\n      <li><b>Topological order:</b> a list of all the nodes in which every arrow points forwards. There may be several, or none.</li>\n      <li><b>Signals:</b> \"must come before\", prerequisites, dependencies, \"in what order\", \"can everything be finished\".</li></ul>",
  "t1": "<h3>Key ideas</h3><ul><li><b>Count the arrows pointing in</b> to every node (its in-degree). A count of 0 means nothing has to come before it.</li>\n      <li><b>Take a node with count 0</b>, add it to the order, and lower the count of every node it points to. A node whose count reaches 0 becomes ready.</li>\n      <li><b>Repeat until nothing is ready.</b> This is known as Kahn's algorithm.</li>\n      <li><b>A loop shows itself:</b> the nodes in a loop never reach 0, so the order comes out shorter than the number of nodes.</li>\n      <li><b>Cost:</b> every node and every arrow is handled once: O(nodes + arrows).</li>\n      <li><b>Taking the ready nodes round by round</b> (level by level) tells you how many rounds are needed when ready jobs can be done together.</li></ul>"
 },
 "quiz": {
  "tot1-q1": {
   "ask": "Jobs 0 and 1 are done. Job 2 had two arrows pointing in, one from each of them. What can be done next?",
   "opts": [
    "Job 2: its count has reached 0",
    "Job 3: it is the next number",
    "Nothing: everything is still waiting"
   ],
   "right": 0,
   "why": "Both jobs that had to come before job 2 are done, so its count is 0 and it is ready."
  },
  "to1s-q": {
   "ask": "Job 3 had two arrows pointing in. Job 2 is done, so its count is now 1. Is job 3 ready?",
   "opts": [
    "No: it still waits for job 1",
    "Yes: one of its jobs is done",
    "Yes: the count does not matter"
   ],
   "right": 0,
   "why": "A job is ready only when its count reaches 0, which means every job before it is done."
  },
  "to2s-q": {
   "ask": "Jobs 3 and 4 are both ready. Does it matter which one is taken first?",
   "opts": [
    "No: both orders obey every arrow",
    "Yes: the smaller number must go first",
    "Yes: 3 must come before 4"
   ],
   "right": 0,
   "why": "No arrow joins 3 and 4, so either may go first. That is why several answers are accepted."
  },
  "to3s-q": {
   "ask": "Jobs 2 and 3 are done. Job 4 waited for both of them. Job 5 waits for job 4. Who is in round 3?",
   "opts": [
    "Only job 4",
    "Jobs 4 and 5",
    "Only job 5"
   ],
   "right": 0,
   "why": "Job 5 still has an arrow from job 4, which is not done yet. So it has to wait one more round."
  }
 },
 "problems": [
  {
   "id": "to1",
   "num": 1,
   "title": "Can It All Be Done?",
   "fn": "canFinish",
   "ask": "There are <b>n jobs</b>. Each rule <b>[a, b]</b> says job a must be done <b>before</b> job b. Return <b>true</b> if all the jobs can be done in some order that obeys every rule.",
   "spec": "canFinish(4, [[0, 1], [0, 2], [1, 3], [2, 3]]) → true      canFinish(2, [[0, 1], [1, 0]]) → false",
   "start": "// The jobs are numbered 0 to n - 1. rules is a list of [a, b] pairs: job a must be done before job b.\nfunction canFinish(n, rules) {\n  // your code here\n}\n",
   "plan": [
    "Which job can you safely do first? What is special about it?",
    "Once that job is done, what changes for the jobs that were waiting for it?",
    "When is it impossible to finish, and how would your method notice?"
   ],
   "hints": [
    "For every job, count the rules that point at it (how many jobs must come before). Also keep, for every job, the list of jobs that come after it.",
    "Put every job with a count of 0 on a ready pile. Take one, count it as done, and lower the count of each job after it. A job that reaches 0 joins the pile.",
    "When the pile is empty, compare the number of jobs done with n."
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
        1,
        3
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
      5,
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
        1
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
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function canFinish(n, rules) {",
    "  const next = Array.from({ length: n }, () => []);",
    "  const waiting = new Array(n).fill(0);",
    "  for (const [a, b] of rules) {",
    "    next[a].push(b);",
    "    waiting[b]++;",
    "  }",
    "  const ready = [];",
    "  for (let i = 0; i < n; i++) {",
    "    if (waiting[i] === 0) ready.push(i);",
    "  }",
    "  let done = 0;",
    "  while (ready.length > 0) {",
    "    const job = ready.pop();",
    "    done++;",
    "    for (const other of next[job]) {",
    "      waiting[other]--;",
    "      if (waiting[other] === 0) ready.push(other);",
    "    }",
    "  }",
    "  return done === n;",
    "}"
   ],
   "why": "Why is it enough to compare done with n? What exactly happens to the jobs that sit in a loop?",
   "world": "A build tool does this before it compiles anything. If two files need each other, it stops and tells you.",
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
     "title": "arrows in",
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
     "say": "A job with no arrow pointing at it waits for nothing. It is safe to do now.",
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
     "card": "no arrows in → safe to do",
     "arrows": null
    },
    {
     "say": "Doing it removes its arrows. That may free other jobs. Repeat until nothing is ready.",
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
     "card": "do it · remove its arrows · repeat",
     "arrows": null
    },
    {
     "say": "Lines two to seven build two things. For each job, the jobs that come after it. And how many arrows point in.",
     "line": 6,
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
     "box": [
      "0 → 0",
      "1 → 1",
      "2 → 1",
      "3 → 2"
     ],
     "card": "count the arrows pointing in",
     "arrows": null
    },
    {
     "say": "Line ten collects the jobs with a count of zero. Only job zero.",
     "line": 10,
     "ptr": null,
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
     "card": "ready: [0]",
     "arrows": null
    },
    {
     "say": "The loop takes job zero, and counts it as done. Then it lowers the count of one, and of two. Both reach zero.",
     "line": 18,
     "ptr": {
      "job": 0
     },
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "0 → done",
      "1 → 0",
      "2 → 0",
      "3 → 2"
     ],
     "card": "done = 1 · ready: [1, 2]",
     "arrows": null
    },
    {
     "say": "It takes job two. Done. Job three drops from two, to one. Is three ready now?",
     "line": 17,
     "ptr": {
      "job": 2
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
     "box": [
      "0 → done",
      "1 → 0",
      "2 → done",
      "3 → 1"
     ],
     "card": "3 still has one arrow in → ?",
     "arrows": null
    },
    {
     "say": "No. It still waits for job one. So job one is taken. Done. And three drops to zero.",
     "line": 18,
     "ptr": {
      "job": 1
     },
     "hot": [],
     "ok": [
      1
     ],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "0 → done",
      "1 → done",
      "2 → done",
      "3 → 0"
     ],
     "card": "done = 3 · ready: [3]",
     "arrows": null
    },
    {
     "say": "Job three. Done. Four jobs done, out of four. Line twenty one returns true.",
     "line": 21,
     "ptr": {
      "job": 3
     },
     "hot": [],
     "ok": [
      3
     ],
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
     "say": "With a loop, the jobs inside it never reach zero. Done stays below n, and the answer is false.",
     "line": 21,
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
     "card": "a loop → done < n → false",
     "arrows": null
    },
    {
     "say": "Every job is taken once, and every arrow is removed once. O of jobs plus arrows.",
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
     "card": "O(jobs + arrows)",
     "arrows": null
    },
    {
     "say": "The lists and the counts. O of jobs plus arrows.",
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
     "card": "lists + counts",
     "arrows": null
    },
    {
     "say": "A build tool does this before it compiles anything. If two files need each other, it stops and tells you.",
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
     "card": "a build tool: circular imports",
     "arrows": null
    }
   ]
  },
  {
   "id": "to2",
   "num": 2,
   "title": "A Valid Order",
   "fn": "jobOrder",
   "ask": "Same jobs, same rules. Now return <b>the jobs in an order</b> that obeys every rule. If no such order exists, return <b>[]</b>. Often several orders are right: any one of them is accepted.",
   "spec": "jobOrder(5, [[0, 2], [1, 2], [2, 3], [2, 4]]) → [0, 1, 2, 3, 4]  (or another valid order)      jobOrder(2, [[0, 1], [1, 0]]) → []",
   "start": "// The jobs are numbered 0 to n - 1. rules is a list of [a, b] pairs: job a must be done before job b.\nfunction jobOrder(n, rules) {\n  // your code here\n}\n",
   "plan": [
    "You already know how to tell whether the jobs can all be done. At which moment does that method \"do\" a job?",
    "What must you return when there is a loop, and how do you know there was one?"
   ],
   "hints": [
    "It is the previous solution with one change: instead of counting the jobs done, write each one into an order array as it is taken.",
    "At the end, if the order holds all n jobs return it. Otherwise there was a loop: return []."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      5,
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
       ],
       [
        2,
        4
       ]
      ]
     ],
     "want": [
      1,
      0,
      2,
      4,
      3
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
        0,
        2
       ],
       [
        1,
        3
       ],
       [
        2,
        3
       ]
      ]
     ],
     "want": [
      0,
      2,
      1,
      3
     ]
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
     "want": []
    },
    {
     "args": [
      1,
      []
     ],
     "want": [
      0
     ]
    },
    {
     "args": [
      3,
      []
     ],
     "want": [
      2,
      1,
      0
     ]
    },
    {
     "args": [
      3,
      [
       [
        2,
        1
       ],
       [
        1,
        0
       ]
      ]
     ],
     "want": [
      2,
      1,
      0
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
        1
       ]
      ]
     ],
     "want": []
    }
   ],
   "check": "const n = args[0], rules = args[1]; const w = new Array(n).fill(0), nx = Array.from({ length: n }, () => []); for (const [a, b] of rules) { nx[a].push(b); w[b]++; } const rd = []; for (let i = 0; i < n; i++) if (w[i] === 0) rd.push(i); let d = 0; while (rd.length) { const j = rd.pop(); d++; for (const o of nx[j]) { w[o]--; if (w[o] === 0) rd.push(o); } } if (!Array.isArray(got)) return 'Return an array.'; if (d < n) return got.length === 0 ? '' : 'These rules contain a loop, so the answer is [].'; if (got.length !== n || new Set(got).size !== n) return 'The order must hold every job exactly once.'; const at = {}; got.forEach((j, i) => { at[j] = i; }); for (const [a, b] of rules) if (!(at[a] < at[b])) return 'Job ' + a + ' must come before job ' + b + '.'; return '';",
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function jobOrder(n, rules) {",
    "  const next = Array.from({ length: n }, () => []);",
    "  const waiting = new Array(n).fill(0);",
    "  for (const [a, b] of rules) {",
    "    next[a].push(b);",
    "    waiting[b]++;",
    "  }",
    "  const ready = [];",
    "  for (let i = 0; i < n; i++) {",
    "    if (waiting[i] === 0) ready.push(i);",
    "  }",
    "  const order = [];",
    "  while (ready.length > 0) {",
    "    const job = ready.pop();",
    "    order.push(job);",
    "    for (const other of next[job]) {",
    "      waiting[other]--;",
    "      if (waiting[other] === 0) ready.push(other);",
    "    }",
    "  }",
    "  return order.length === n ? order : [];",
    "}"
   ],
   "why": "Replace ready.pop() with ready.shift(). The answer changes. Is it still correct, and why?",
   "world": "A course planner does this. It lists your classes so that each one comes after the classes it needs.",
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
       0.05
      ],
      [
       4,
       0.98,
       0.95
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
      ],
      [
       2,
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
      "id": "job",
      "row": 1
     }
    ],
    "vars": [],
    "box": {
     "title": "order",
     "rows": 5
    },
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "This is the same method. Count the arrows in, and take the jobs that wait for nothing.",
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
     "card": "count arrows in · take the zeros",
     "arrows": null
    },
    {
     "say": "The only change. Each job is written into the order, at the moment it is taken.",
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
     "card": "taken → written into the order",
     "arrows": null
    },
    {
     "say": "The same start as before. Lists of what comes after, and a count of the arrows pointing in. Jobs zero and one are ready.",
     "line": 10,
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
     "card": "ready: [0, 1]",
     "arrows": null
    },
    {
     "say": "Line fourteen takes one from the ready pile. Job one. Line fifteen writes it into the order.",
     "line": 15,
     "ptr": {
      "job": 1
     },
     "hot": [],
     "ok": [
      1
     ],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1"
     ],
     "card": "order: 1",
     "arrows": null
    },
    {
     "say": "Job two was waiting for two jobs. Now for one. Not ready. So job zero is next.",
     "line": 15,
     "ptr": {
      "job": 0
     },
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1",
      "0"
     ],
     "card": "2 still waits for one more",
     "arrows": null
    },
    {
     "say": "That frees job two. It joins the order. And it frees both three and four.",
     "line": 18,
     "ptr": {
      "job": 2
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
     "box": [
      "1",
      "0",
      "2"
     ],
     "card": "ready: [3, 4]",
     "arrows": null
    },
    {
     "say": "Three and four are both ready. Does it matter which one goes first?",
     "line": 14,
     "ptr": null,
     "hot": [
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
     "card": "3 or 4 first → ?",
     "arrows": null
    },
    {
     "say": "No. No arrow joins them. The pile gives four, then three.",
     "line": 15,
     "ptr": {
      "job": 3
     },
     "hot": [],
     "ok": [
      4,
      3
     ],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1",
      "0",
      "2",
      "4",
      "3"
     ],
     "card": "order: 1, 0, 2, 4, 3",
     "arrows": null
    },
    {
     "say": "Five jobs in the order, out of five. Line twenty one returns it. With a loop it would be shorter, and the answer is an empty array.",
     "line": 21,
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
     "say": "Every job is taken once, and every arrow is removed once. O of jobs plus arrows.",
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
     "card": "O(jobs + arrows)",
     "arrows": null
    },
    {
     "say": "The lists and the counts. O of jobs plus arrows.",
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
     "card": "lists + counts",
     "arrows": null
    },
    {
     "say": "A course planner does this. It lists your classes so that each one comes after the classes it needs.",
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
     "card": "classes in an order you can take",
     "arrows": null
    }
   ]
  },
  {
   "id": "to3",
   "num": 3,
   "title": "How Many Rounds?",
   "fn": "fewestRounds",
   "ask": "Now there are plenty of helpers: in one <b>round</b>, every job that is ready can be done at the same time. Return the <b>fewest rounds</b> needed to finish all the jobs, or <b>-1</b> if they can never all be done.",
   "spec": "fewestRounds(6, [[0, 2], [1, 2], [1, 3], [2, 4], [3, 4], [4, 5]]) → 4      fewestRounds(2, [[0, 1], [1, 0]]) → -1",
   "start": "// The jobs are numbered 0 to n - 1. rules is a list of [a, b] pairs: job a must be done before job b.\nfunction fewestRounds(n, rules) {\n  // your code here\n}\n",
   "plan": [
    "Which jobs can be done in the very first round?",
    "When that round is finished, which jobs form the next one? You have walked a graph this way before.",
    "How do you notice that some jobs can never be done?"
   ],
   "hints": [
    "Count the arrows pointing in, as before. Round one is every job with a count of 0.",
    "Go level by level: for each job of the round, lower the count of the jobs after it, and collect those that reach 0 into the next round. Count the rounds.",
    "At the end, if any job still has a count above 0, there was a loop: return -1."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      6,
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
        1,
        3
       ],
       [
        2,
        4
       ],
       [
        3,
        4
       ],
       [
        4,
        5
       ]
      ]
     ],
     "want": 4
    },
    {
     "args": [
      1,
      []
     ],
     "want": 1
    },
    {
     "args": [
      3,
      []
     ],
     "want": 1
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
     "want": 3
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
     "want": -1
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
        1
       ]
      ]
     ],
     "want": -1
    },
    {
     "args": [
      5,
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
       ],
       [
        2,
        4
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
    "function fewestRounds(n, rules) {",
    "  const next = Array.from({ length: n }, () => []);",
    "  const waiting = new Array(n).fill(0);",
    "  for (const [a, b] of rules) {",
    "    next[a].push(b);",
    "    waiting[b]++;",
    "  }",
    "  let now = [];",
    "  for (let i = 0; i < n; i++) if (waiting[i] === 0) now.push(i);",
    "  let rounds = 0;",
    "  while (now.length > 0) {",
    "    const later = [];",
    "    for (const job of now) {",
    "      for (const other of next[job]) {",
    "        waiting[other]--;",
    "        if (waiting[other] === 0) later.push(other);",
    "      }",
    "    }",
    "    now = later;",
    "    rounds++;",
    "  }",
    "  return waiting.some((w) => w > 0) ? -1 : rounds;",
    "}"
   ],
   "why": "Why does a job never land in an earlier round than it could, and never in a later one?",
   "world": "A project plan works like this. Tasks that do not depend on each other run side by side, and the rounds give the shortest schedule.",
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
       0.36,
       0.05
      ],
      [
       3,
       0.36,
       0.95
      ],
      [
       4,
       0.68,
       0.5
      ],
      [
       5,
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
       1,
       3
      ],
      [
       2,
       4
      ],
      [
       3,
       4
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
    "ptrs": [],
    "vars": [],
    "box": {
     "title": "rounds",
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
     "say": "Every job that waits for nothing can be done now. Together, they are round one.",
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
     "card": "round 1 = every job with no arrows in",
     "arrows": null
    },
    {
     "say": "The jobs they free are round two. That is level by level, with the counts deciding who is next.",
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
     "card": "freed jobs = the next round",
     "arrows": null
    },
    {
     "say": "Lists and counts, as before. The first round holds every job that waits for nothing. Zero and one.",
     "line": 9,
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
     "box": [
      "1: jobs 0, 1"
     ],
     "card": "round 1: jobs 0 and 1",
     "arrows": null
    },
    {
     "say": "Both are done together. Their arrows are removed. Two and three reach zero. They form the next round.",
     "line": 19,
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
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1: jobs 0, 1",
      "2: jobs 2, 3"
     ],
     "card": "round 2: jobs 2 and 3",
     "arrows": null
    },
    {
     "say": "This is level by level, exactly like the fewest steps in a maze. Round two is done. Who is in round three?",
     "line": 16,
     "ptr": null,
     "hot": [],
     "ok": [
      2,
      3
     ],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "round 3 → ?",
     "arrows": null
    },
    {
     "say": "Only job four. Five still waits for four.",
     "line": 19,
     "ptr": null,
     "hot": [
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
     "box": [
      "1: jobs 0, 1",
      "2: jobs 2, 3",
      "3: job 4"
     ],
     "card": "round 3: job 4",
     "arrows": null
    },
    {
     "say": "Then job five, alone, in round four. After it, nothing is left.",
     "line": 20,
     "ptr": null,
     "hot": [
      5
     ],
     "ok": [
      4
     ],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1: jobs 0, 1",
      "2: jobs 2, 3",
      "3: job 4",
      "4: job 5"
     ],
     "card": "round 4: job 5",
     "arrows": null
    },
    {
     "say": "No job is still waiting. Line twenty two returns four rounds.",
     "line": 22,
     "ptr": null,
     "hot": [],
     "ok": [
      5
     ],
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
     "say": "Every job is taken once, and every arrow is removed once. O of jobs plus arrows.",
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
     "card": "O(jobs + arrows)",
     "arrows": null
    },
    {
     "say": "The lists and the counts. O of jobs plus arrows.",
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
     "card": "lists + counts",
     "arrows": null
    },
    {
     "say": "A project plan works like this. Tasks that do not depend on each other run side by side, and the rounds give the shortest schedule.",
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
     "card": "the shortest project schedule",
     "arrows": null
    }
   ]
  }
 ]
};
