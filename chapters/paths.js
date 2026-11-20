window.CHAPTER = {
 "id": "paths",
 "title": "Shortest Paths",
 "sub": "CHAPTER 21 · SHORTEST PATHS",
 "key": "burrow-ch-paths",
 "next": {
  "href": "chapter.html?c=mixed4",
  "label": "Mixed set 4"
 },
 "prev": {
  "href": "chapter.html?c=unionfind",
  "label": "Chapter 20: Union-Find"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "sp0",
   "label": "Welcome",
   "short": "Intro",
   "name": "When tunnels have different lengths",
   "intro": "Why the fewest tunnels is not always the shortest walk, and what question replaces it."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "spt1",
   "label": "The one lesson",
   "short": "T1",
   "name": "Always take the cheapest next",
   "intro": "One number per burrow, one rule, and a heap to make it fast. This is Dijkstra's algorithm. One guess."
  }
 ],
 "notes": {
  "w": "<h3>The words</h3><ul><li><b>Weight (cost):</b> a number on an edge: a distance, a time, a price.</li>\n      <li><b>Cheapest path:</b> the path whose costs add up to the least. It may use more edges than another path.</li>\n      <li><b>Level by level (BFS)</b> finds the fewest edges. It is only right when every edge costs the same.</li>\n      <li><b>Signals:</b> \"cheapest\", \"fastest\", \"shortest distance\" together with costs, times or lengths on the links.</li></ul>",
  "t1": "<h3>Key ideas</h3><ul><li><b>Keep best[x]:</b> the cheapest cost found so far to reach x. 0 for the start, Infinity for the rest.</li>\n      <li><b>Always take the unfinished node with the smallest cost.</b> That cost is final: any other way to it passes through something that already costs at least as much.</li>\n      <li><b>From it, try to improve each neighbour:</b> if best[node] + step is smaller than best[other], replace it.</li>\n      <li><b>A min-heap of [cost, node] pairs</b> gives the smallest quickly. Push a pair whenever a cost improves.</li>\n      <li><b>Old pairs stay in the heap.</b> When one is popped with a cost above best[node], skip it.</li>\n      <li><b>This is Dijkstra's algorithm</b> (say \"dike-stra\"). It needs every cost to be zero or more.</li>\n      <li><b>Cost:</b> O(edges × log nodes).</li></ul>"
 },
 "quiz": {
  "spt1-q1": {
   "ask": "Burrows 0 and 2 are finished. Burrow 1 has a cost of 3 and burrow 3 has a cost of 9. Which burrow is taken next?",
   "opts": [
    "Burrow 1: it has the smallest cost",
    "Burrow 3: it is the target",
    "Burrow 0, again"
   ],
   "right": 0,
   "why": "The rule is always the same: take the unfinished burrow with the smallest cost. Here that is burrow 1, at 3."
  },
  "sp1s-q": {
   "ask": "The heap gives [4, burrow 1], but best[1] is already 3. What does line 14 do?",
   "opts": [
    "Skips it: it is an old, worse entry",
    "Sets best[1] back to 4",
    "Returns 4"
   ],
   "right": 0,
   "why": "Old entries are never removed from the heap. When one comes out with a cost above the best known cost, it is simply skipped."
  },
  "sp2s-q": {
   "ask": "From burrow 4 the news would reach burrow 3 at 6 + 4 = 10. But best[3] is 9. What does the code do?",
   "opts": [
    "Nothing: 10 is not smaller than 9",
    "Sets best[3] to 10",
    "Pushes [10, 3] onto the heap"
   ],
   "right": 0,
   "why": "Line 15 only replaces a cost with a smaller one. Burrow 3 already hears the news at 9."
  },
  "sp3s-q": {
   "ask": "The heap holds a 4 (top middle) and two 8s. Which square is taken next?",
   "opts": [
    "The top middle square, at 4",
    "One of the 8s: they were pushed last",
    "The middle square: it is nearest to the goal"
   ],
   "right": 0,
   "why": "The heap always gives the smallest effort so far. That is the top middle square, at 4."
  }
 },
 "problems": [
  {
   "id": "sp1",
   "num": 1,
   "title": "The Cheapest Way",
   "fn": "cheapest",
   "ask": "Every tunnel has a <b>cost</b>. Return the <b>smallest total cost</b> of a way from burrow <b>from</b> to burrow <b>to</b>, or <b>-1</b> if there is no way.",
   "spec": "cheapest(4, [[0, 1, 4], [0, 2, 1], [2, 1, 2], [1, 3, 5], [2, 3, 8]], 0, 3) → 8      (0 → 2 → 1 → 3: 1 + 2 + 5)",
   "start": "// A Heap class is provided. new Heap((x, y) => x[0] - y[0]) keeps the pair with the SMALLEST first value on top.\n// heap.push(x) · heap.pop() removes and returns the top · heap.size\n// The burrows are numbered 0 to n - 1. roads is a list of [a, b, cost]: a tunnel between a and b, usable both ways.\nfunction cheapest(n, roads, from, to) {\n  // your code here\n}\n",
   "plan": [
    "Going level by level finds the fewest tunnels. Why can that be the wrong answer here?",
    "Which burrow should be handled next, at every moment?",
    "What do you do when you find a cheaper way to a burrow you had already given a cost?"
   ],
   "hints": [
    "Build neighbour lists that hold [other, cost] pairs. Keep best[x], the cheapest cost found so far: 0 for the start, Infinity for the rest.",
    "Use a min-heap of [cost, node] pairs. Pop the smallest. If the node is the target, return its cost.",
    "For each neighbour: if cost + step is smaller than best[other], store it and push [best[other], other]. A popped pair whose cost is above best[node] is old: skip it."
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
        4
       ],
       [
        0,
        2,
        1
       ],
       [
        2,
        1,
        2
       ],
       [
        1,
        3,
        5
       ],
       [
        2,
        3,
        8
       ]
      ],
      0,
      3
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
        4
       ],
       [
        0,
        2,
        1
       ],
       [
        2,
        1,
        2
       ],
       [
        1,
        3,
        5
       ],
       [
        2,
        3,
        8
       ]
      ],
      0,
      1
     ],
     "want": 3
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
      3,
      [
       [
        0,
        1,
        5
       ]
      ],
      0,
      2
     ],
     "want": -1
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
      3
     ],
     "want": 9
    },
    {
     "args": [
      3,
      [
       [
        0,
        1,
        1
       ],
       [
        1,
        2,
        1
       ],
       [
        0,
        2,
        5
       ]
      ],
      2,
      0
     ],
     "want": 2
    },
    {
     "args": [
      2,
      [
       [
        0,
        1,
        7
       ],
       [
        0,
        1,
        3
       ]
      ],
      0,
      1
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
    "function cheapest(n, roads, from, to) {",
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
    "    if (node === to) return cost;",
    "    if (cost > best[node]) continue;",
    "    for (const [other, step] of near[node]) {",
    "      if (cost + step < best[other]) {",
    "        best[other] = cost + step;",
    "        heap.push([best[other], other]);",
    "      }",
    "    }",
    "  }",
    "  return -1;",
    "}"
   ],
   "why": "Line 13 returns as soon as the target is popped, not when it is first given a cost. Why does that matter?",
   "world": "A map app finds your fastest route this way. Every road has a travel time, and the cheapest next road is always tried first.",
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
       4
      ],
      [
       0,
       2,
       1
      ],
      [
       2,
       1,
       2
      ],
      [
       1,
       3,
       5
      ],
      [
       2,
       3,
       8
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
     "say": "Keep, for every burrow, the cheapest cost found so far. Then always handle the burrow with the smallest cost.",
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
     "card": "always the smallest cost next",
     "arrows": null
    },
    {
     "say": "From it, try each tunnel. If that gives a neighbour a cheaper cost, write it down, and push it on a heap.",
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
     "card": "cheaper way found → push it",
     "arrows": null
    },
    {
     "say": "Lines two to six build the neighbour lists, with the costs. Then the start gets a cost of zero, and goes on the heap.",
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
     "box": [
      "0 → burrow 0"
     ],
     "card": "best[0] = 0 · the rest unknown",
     "arrows": null
    },
    {
     "say": "The heap gives burrow zero. Its tunnels give burrow one a cost of four, and burrow two a cost of one.",
     "line": 18,
     "ptr": {
      "node": 0
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
      "1 → burrow 2",
      "4 → burrow 1"
     ],
     "card": "best[1] = 4 · best[2] = 1",
     "arrows": null
    },
    {
     "say": "The smallest is burrow two, at one. From two, burrow one costs one plus two. Three. That beats four.",
     "line": 17,
     "ptr": {
      "node": 2
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
      "3 → burrow 1",
      "4 → burrow 1",
      "9 → burrow 3"
     ],
     "card": "1 + 2 = 3 < 4 → best[1] = 3",
     "arrows": null
    },
    {
     "say": "Burrow one, at three. From there, burrow three costs three plus five. Eight. That beats nine.",
     "line": 17,
     "ptr": {
      "node": 1
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
      "4 → burrow 1",
      "8 → burrow 3",
      "9 → burrow 3"
     ],
     "card": "3 + 5 = 8 < 9 → best[3] = 8",
     "arrows": null
    },
    {
     "say": "Now the heap gives four, for burrow one. But the best cost for one is already three. What should happen?",
     "line": 14,
     "ptr": null,
     "hot": [
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
     "card": "popped 4 · best[1] = 3 → ?",
     "arrows": null
    },
    {
     "say": "It is skipped. An old entry. Next comes eight, for burrow three. That is the target. Line thirteen returns eight.",
     "line": 13,
     "ptr": {
      "node": 3
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
     "box": [
      "9 → burrow 3"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Every tunnel can push one entry onto the heap, and each push or pop costs log n. O of tunnels, times log n.",
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
     "say": "A map app finds your fastest route this way. Every road has a travel time, and the cheapest next road is always tried first.",
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
     "card": "the fastest route in a map app",
     "arrows": null
    }
   ]
  },
  {
   "id": "sp2",
   "num": 2,
   "title": "When Does Everyone Know?",
   "fn": "spreadTime",
   "ask": "News starts in burrow <b>from</b> and travels through every tunnel; the number on a tunnel is the <b>time</b> it takes. Return the time at which the <b>last burrow</b> hears the news, or <b>-1</b> if some burrow never hears it.",
   "spec": "spreadTime(5, [[0, 1, 2], [0, 2, 6], [1, 2, 3], [1, 3, 7], [2, 4, 1], [3, 4, 4]], 0) → 9",
   "start": "// A Heap class is provided. new Heap((x, y) => x[0] - y[0]) keeps the pair with the SMALLEST first value on top.\n// heap.push(x) · heap.pop() removes and returns the top · heap.size\n// The burrows are numbered 0 to n - 1. roads is a list of [a, b, cost]: a tunnel between a and b, usable both ways.\nfunction spreadTime(n, roads, from) {\n  // your code here\n}\n",
   "plan": [
    "When does one particular burrow hear the news?",
    "So which number, over all the burrows, is the answer?",
    "How do you notice a burrow that the news never reaches?"
   ],
   "hints": [
    "A burrow hears the news at its cheapest cost from the start. So this is the previous puzzle without a target: let the loop run until the heap is empty.",
    "The answer is the largest value in best.",
    "If that largest value is still Infinity, some burrow was never reached: return -1."
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
      0
     ],
     "want": 9
    },
    {
     "args": [
      4,
      [
       [
        0,
        1,
        4
       ],
       [
        0,
        2,
        1
       ],
       [
        2,
        1,
        2
       ],
       [
        1,
        3,
        5
       ],
       [
        2,
        3,
        8
       ]
      ],
      0
     ],
     "want": 8
    },
    {
     "args": [
      1,
      [],
      0
     ],
     "want": 0
    },
    {
     "args": [
      3,
      [
       [
        0,
        1,
        5
       ]
      ],
      0
     ],
     "want": -1
    },
    {
     "args": [
      3,
      [
       [
        0,
        1,
        1
       ],
       [
        1,
        2,
        1
       ],
       [
        0,
        2,
        5
       ]
      ],
      0
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
        4
       ],
       [
        0,
        2,
        1
       ],
       [
        2,
        1,
        2
       ],
       [
        1,
        3,
        5
       ],
       [
        2,
        3,
        8
       ]
      ],
      3
     ],
     "want": 8
    },
    {
     "args": [
      2,
      [
       [
        0,
        1,
        4
       ]
      ],
      1
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
    "function spreadTime(n, roads, from) {",
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
    "  const last = Math.max(...best);",
    "  return last === Infinity ? -1 : last;",
    "}"
   ],
   "why": "Why is the answer the largest of the cheapest costs, and not the sum of all the tunnels used?",
   "world": "Network engineers ask this. If one server sends an update, how long until every server has it?",
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
     "say": "A burrow hears the news at its cheapest cost from the start. So find the cheapest cost to every burrow.",
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
     "card": "heard at = cheapest cost from start",
     "arrows": null
    },
    {
     "say": "It is the same search, with no target. Let it run until the heap is empty. The answer is the largest cost.",
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
     "card": "no target · answer = the largest",
     "arrows": null
    },
    {
     "say": "The same start. Lists with costs. Zero for the start, on the heap.",
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
     "say": "Burrow one, at two. Burrow two improves, to two plus three. Five. And burrow three gets nine.",
     "line": 16,
     "ptr": {
      "node": 1
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
      "5 → burrow 2",
      "6 → burrow 2",
      "9 → burrow 3"
     ],
     "card": "best[2] = 5 · best[3] = 9",
     "arrows": null
    },
    {
     "say": "Burrow two, at five. Burrow four gets six. The old six for burrow two is skipped, when it comes out.",
     "line": 17,
     "ptr": {
      "node": 2
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
      "6 → burrow 4",
      "9 → burrow 3"
     ],
     "card": "best[4] = 5 + 1 = 6",
     "arrows": null
    },
    {
     "say": "Burrow four, at six. Its tunnel to three would give six plus four. Ten. And three already has nine. What happens?",
     "line": 15,
     "ptr": {
      "node": 4
     },
     "hot": [],
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
     "box": null,
     "card": "6 + 4 = 10 · best[3] = 9 → ?",
     "arrows": null
    },
    {
     "say": "Nothing. Ten is not better. Burrow three comes out at nine, and the heap is empty.",
     "line": 13,
     "ptr": {
      "node": 3
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
     "box": [],
     "card": "best = [0, 2, 5, 9, 6]",
     "arrows": null
    },
    {
     "say": "Line twenty one takes the largest. Nine. If it were still infinity, a burrow was never reached, and the answer is minus one.",
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
     "say": "Every tunnel can push one entry onto the heap, and each push or pop costs log n. O of tunnels, times log n.",
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
     "say": "Network engineers ask this. If one server sends an update, how long until every server has it?",
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
     "card": "when every server has the update",
     "arrows": null
    }
   ]
  },
  {
   "id": "sp3",
   "num": 3,
   "title": "Across the Field",
   "fn": "cheapestWalk",
   "ask": "Each square of the field has a number: the <b>effort</b> it costs to stand on it. You start on the top-left square and may step <b>up, down, left or right</b>. Return the smallest total effort to reach the bottom-right square, <b>counting both the first and the last square</b>.",
   "spec": "cheapestWalk([[1, 3, 1], [1, 6, 1], [6, 2, 1]]) → 7      (1 + 3 + 1 + 1 + 1)",
   "start": "// A Heap class is provided. new Heap((x, y) => x[0] - y[0]) keeps the array with the SMALLEST first value on top.\n// heap.push(x) · heap.pop() removes and returns the top · heap.size\n// grid is an array of rows; grid[r][c] is the effort of that square (1 or more).\nfunction cheapestWalk(grid) {\n  // your code here\n}\n",
   "plan": [
    "A grid is a graph. What are the nodes, and what does it cost to move to a neighbour?",
    "Which square should be handled next?",
    "The cheapest walk may have to go up or left for a while. Does your method allow that?"
   ],
   "hints": [
    "Keep best[r][c], the cheapest effort found so far for each square. The start costs grid[0][0].",
    "Use a min-heap of [effort, r, c]. Pop the smallest. If it is the bottom-right square, return its effort.",
    "For each of the four neighbours inside the grid: if effort + grid[y][x] is smaller than best[y][x], store it and push it."
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
        6,
        1
       ],
       [
        6,
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
        1,
        9,
        1,
        1,
        1
       ],
       [
        1,
        9,
        1,
        9,
        1
       ],
       [
        1,
        1,
        1,
        9,
        1
       ]
      ]
     ],
     "want": 11
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
     "want": 3
    },
    {
     "args": [
      [
       [
        1,
        9
       ],
       [
        1,
        9
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
        2,
        1,
        1
       ],
       [
        9,
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
     "want": 6
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function cheapestWalk(grid) {",
    "  const R = grid.length, C = grid[0].length;",
    "  const best = grid.map((row) => row.map(() => Infinity));",
    "  best[0][0] = grid[0][0];",
    "  const heap = new Heap((x, y) => x[0] - y[0]);",
    "  heap.push([grid[0][0], 0, 0]);",
    "  while (heap.size > 0) {",
    "    const [cost, r, c] = heap.pop();",
    "    if (r === R - 1 && c === C - 1) return cost;",
    "    if (cost > best[r][c]) continue;",
    "    for (const [a, b] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {",
    "      const y = r + a, x = c + b;",
    "      if (y < 0 || x < 0 || y >= R || x >= C) continue;",
    "      if (cost + grid[y][x] < best[y][x]) {",
    "        best[y][x] = cost + grid[y][x];",
    "        heap.push([best[y][x], y, x]);",
    "      }",
    "    }",
    "  }",
    "  return -1;",
    "}"
   ],
   "why": "On the test with the 9s arranged like a snake, the cheapest walk goes up for two squares. Which line makes that possible?",
   "world": "A game character crosses a map this way. Grass costs little, a swamp costs a lot, and the cheapest walk goes around.",
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
      6,
      1
     ],
     [
      6,
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
     "say": "A grid is a graph. Each square is a node. Stepping onto a neighbour costs the number on that neighbour.",
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
     "card": "a step costs the square you enter",
     "arrows": null
    },
    {
     "say": "So it is the same search. Always take the cheapest square known so far, and try its four neighbours.",
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
     "card": "cheapest square next · 4 neighbours",
     "arrows": null
    },
    {
     "say": "The start costs its own number. One. It goes on the heap.",
     "line": 6,
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
     "box": [
      "1 → top left"
     ],
     "card": "best = 1 at the start",
     "arrows": null
    },
    {
     "say": "It comes out. The square below costs one plus one. Two. The square to the right, one plus three. Four.",
     "line": 16,
     "ptr": null,
     "hot": [
      3,
      1
     ],
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
      "2 → below",
      "4 → right"
     ],
     "card": "below: 2 · right: 4",
     "arrows": null
    },
    {
     "say": "The cheapest is the square below, at two. Its neighbours both cost eight. Two plus six.",
     "line": 16,
     "ptr": null,
     "hot": [
      6,
      4
     ],
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
     "box": [
      "4 → top middle",
      "8 → middle",
      "8 → bottom left"
     ],
     "card": "2 + 6 = 8, twice",
     "arrows": null
    },
    {
     "say": "Three entries on the heap. Four, eight, and eight. Which square is taken next?",
     "line": 8,
     "ptr": null,
     "hot": [
      1,
      4,
      6
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
     "card": "4, 8 or 8 → ?",
     "arrows": null
    },
    {
     "say": "The top middle, at four. It gives the top right corner a cost of five.",
     "line": 16,
     "ptr": null,
     "hot": [
      2
     ],
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
      "5 → top right",
      "8 → middle",
      "8 → bottom left"
     ],
     "card": "4 + 1 = 5",
     "arrows": null
    },
    {
     "say": "Then five. Then six, one square down. Then seven. That is the bottom right corner. Line nine returns seven.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [
      2,
      5,
      8
     ],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "8 → middle",
      "8 → bottom left"
     ],
     "card": "5 → 6 → 7: the corner",
     "arrows": null
    },
    {
     "say": "The two eights were never taken. The search stopped before it needed them.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      4,
      6
     ],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "the 8s were never needed",
     "arrows": null
    },
    {
     "say": "Each square can be pushed a few times, and each push costs log of the squares. O of squares, times log.",
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
     "card": "O(R × C × log(R × C))",
     "arrows": null
    },
    {
     "say": "The best costs and the heap. O of R times C.",
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
     "card": "best + heap → O(R × C)",
     "arrows": null
    },
    {
     "say": "A game character crosses a map this way. Grass costs little, a swamp costs a lot, and the cheapest walk goes around.",
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
     "card": "a game map: around the swamp",
     "arrows": null
    }
   ]
  }
 ]
};
