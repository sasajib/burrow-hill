window.CHAPTER = {
 "id": "mixed3",
 "title": "Mixed Set 3",
 "sub": "MIXED SET 3",
 "key": "burrow-ch-mixed3",
 "next": {
  "href": "index.html#chapters",
  "label": "All chapters"
 },
 "prev": {
  "href": "chapter.html?c=tries",
  "label": "Chapter 17: Tries"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "mz0",
   "label": "Read this first",
   "short": "Intro",
   "name": "The signals of Part 3",
   "intro": "Eight puzzles from everything so far, with no labels. The signals Part 3 added."
  }
 ],
 "notes": {
  "w": "<h3>The signals of Part 3</h3><ul><li><b>A node with children, and the answer is built from its two sides</b> → tree recursion (DFS).</li>\n      <li><b>Levels, or \"the nearest\"</b> → level by level with a queue (BFS).</li>\n      <li><b>An ordered tree (smaller left, bigger right)</b> → compare and throw a whole side away; in-order gives sorted order.</li>\n      <li><b>The smallest or biggest, again and again, while things keep arriving</b> → a heap. \"The k largest\" → a heap of size k.</li>\n      <li><b>Words by their beginnings</b> → a trie. For a handful of prefix checks, a plain Set is often enough.</li>\n      <li><b>Name the tool before you code</b>, then compare with the solution video.</li></ul>"
 },
 "quiz": {
  "mz1s-q": {
   "ask": "The node holds \"*\", left is 2 and right is 3. What does the call return?",
   "opts": [
    "6",
    "5",
    "\"*\""
   ],
   "right": 0,
   "why": "node.val is not \"+\", so line 6 runs: left * right = 6."
  },
  "mz2s-q": {
   "ask": "The node 8 has no children, and depth is 2. What does line 8 do?",
   "opts": [
    "Returns 2 at once",
    "Adds 8 to next",
    "Goes on to the nodes 1 and 4"
   ],
   "right": 0,
   "why": "A node with no children is a leaf. It is the first one met, so it is the nearest: return depth."
  },
  "mz3s-q": {
   "ask": "The node 3 is smaller than low = 5. What does line 3 do?",
   "opts": [
    "Searches only its right side",
    "Searches both of its sides",
    "Returns 0"
   ],
   "right": 0,
   "why": "Everything to the left of 3 is even smaller, so only the right side can hold a value in the range."
  },
  "mz4s-q": {
   "ask": "The heap holds the pairs for 4 (3 times), 1 (twice) and 2 (once), ordered by count with the smallest on top. Which pair is popped?",
   "opts": [
    "The pair for 2: it has the smallest count",
    "The pair for 4",
    "The pair for 1"
   ],
   "right": 0,
   "why": "The top of a min-heap ordered by count is the least frequent number, the one that cannot be in the top k."
  },
  "mz5s-q": {
   "ask": "The set holds a, ap, app, b and bat. The code checks the beginning \"ba\" of \"bat\". What happens?",
   "opts": [
    "\"ba\" is missing, so ok becomes false",
    "\"ba\" is found",
    "The word is accepted because \"b\" was found"
   ],
   "right": 0,
   "why": "Every beginning must be in the set. \"ba\" is not, so \"bat\" cannot be built."
  },
  "mz6s-q": {
   "ask": "The walk is on 8 with target 12, and the set holds 5, 3, 1, 4. What does line 5 do?",
   "opts": [
    "Returns true: 4 is in the set",
    "Adds 8 and continues",
    "Returns false"
   ],
   "right": 0,
   "why": "target - node.val is 4, which was added earlier. 8 + 4 = 12."
  },
  "mz7s-q": {
   "ask": "lo is 3 and hi is 4. What is Math.floor((3 + 4) / 2)?",
   "opts": [
    "3",
    "4",
    "3.5"
   ],
   "right": 0,
   "why": "7 / 2 is 3.5, rounded down to 3. The value there, 8, becomes the right child of 6."
  },
  "mz8s-q": {
   "ask": "a is 3 and b is 3. What does line 7 do?",
   "opts": [
    "Nothing: both stones are destroyed",
    "Pushes 0",
    "Pushes 3 back"
   ],
   "right": 0,
   "why": "a !== b is false, so nothing is pushed. Equal stones destroy each other."
  }
 },
 "problems": [
  {
   "id": "mz1",
   "num": 1,
   "title": "The Sum Tree",
   "fn": "evalTree",
   "ask": "Every leaf holds a number. Every other node holds <b>\"+\"</b> or <b>\"*\"</b> and has exactly two children. Return the <b>value of the whole tree</b>: each operator is applied to the values of its two sides.",
   "spec": "evalTree(\"+\" with children \"*\" and 4; \"*\" has children 2 and 3) → 10      ((2 * 3) + 4)",
   "start": "// A node is { val, left, right }. left and right are nodes, or null when there is no child.\n// val is a number on a leaf, and the string \"+\" or \"*\" on every other node.\nfunction evalTree(node) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? An answer built from a node's two sides, levels or \"the nearest\", an ordered tree, \"the smallest (or biggest) again and again\", words and their beginnings, or a signal from an earlier part?",
    "Do the example by hand. Which node did you have to work out first?",
    "What is the value of a leaf?",
    "For an operator node, what do you need before you can apply the operator?"
   ],
   "hints": [
    "Base case: a leaf (typeof node.val === \"number\") is worth its own number.",
    "Otherwise get the value of the left side and of the right side from the same function.",
    "Return left + right or left * right, depending on node.val."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       "+",
       "*",
       4,
       2,
       3
      ]
     ],
     "want": 10
    },
    {
     "args": [
      [
       7
      ]
     ],
     "want": 7
    },
    {
     "args": [
      [
       "*",
       2,
       5
      ]
     ],
     "want": 10
    },
    {
     "args": [
      [
       "+",
       1,
       "+",
       null,
       null,
       2,
       3
      ]
     ],
     "want": 6
    },
    {
     "args": [
      [
       "*",
       "+",
       "+",
       1,
       2,
       3,
       4
      ]
     ],
     "want": 21
    },
    {
     "args": [
      [
       "+",
       0,
       0
      ]
     ],
     "want": 0
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "return [toTree(args[0]), ...args.slice(1)];",
   "post": null,
   "solution": [
    "function evalTree(node) {",
    "  if (typeof node.val === 'number') return node.val;",
    "  const left = evalTree(node.left);",
    "  const right = evalTree(node.right);",
    "  if (node.val === '+') return left + right;",
    "  return left * right;",
    "}"
   ],
   "why": "Nothing in the code says \"multiply before you add\". What makes sure the 2 * 3 is worked out first?",
   "world": "A spreadsheet works out a formula this way. Every formula is a small tree of numbers and signs.",
   "view": {
    "row": [],
    "tree": [
     "+",
     "*",
     4,
     2,
     3
    ],
    "grid": null,
    "graph": null,
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
     "say": "An operator needs the value of its two sides. And each side is a smaller tree of the same kind.",
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
     "card": "each side is a smaller sum",
     "arrows": null
    },
    {
     "say": "So ask the same function for each side, then apply the sign. A leaf is simply its number.",
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
     "card": "a leaf is worth its number",
     "arrows": null
    },
    {
     "say": "The first call stands on the plus. Not a number. So line three asks for the value of the left side.",
     "line": 3,
     "ptr": {
      "node": 0
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
     "card": "",
     "arrows": null
    },
    {
     "say": "The times node. Not a number either. It asks its own left side. The two is a leaf. Line two returns two.",
     "line": 2,
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
     "box": null,
     "card": "a leaf → its number, 2",
     "arrows": null
    },
    {
     "say": "Its right side. Three. A leaf. Back on the times node, left is two, and right is three. What does it return?",
     "line": 6,
     "ptr": {
      "node": 1
     },
     "hot": [
      1
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
     "box": null,
     "card": "left 2 · right 3 · sign * → ?",
     "arrows": null
    },
    {
     "say": "Six. This whole side is worth six.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      1
     ],
     "bad": [],
     "set": {
      "1": 6
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "2 * 3 = 6",
     "arrows": null
    },
    {
     "say": "Back on the plus. Now the right side. Four. A leaf.",
     "line": 4,
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
     "box": null,
     "card": "right side: 4",
     "arrows": null
    },
    {
     "say": "Left is six. Right is four. The sign is plus. Ten.",
     "line": 5,
     "ptr": {
      "node": 0
     },
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "set": {
      "0": 10
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "6 + 4 = 10",
     "arrows": null
    },
    {
     "say": "Every node is visited once. O of n time.",
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
     "card": "each node once → O(n) time",
     "arrows": null
    },
    {
     "say": "The waiting calls are as deep as the tree is tall. O of height space.",
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
     "card": "waiting calls → O(height)",
     "arrows": null
    },
    {
     "say": "A spreadsheet works out a formula this way. Every formula is a small tree of numbers and signs.",
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
     "card": "how a spreadsheet does =A+B*C",
     "arrows": null
    }
   ]
  },
  {
   "id": "mz2",
   "num": 2,
   "title": "The Nearest Way Out",
   "fn": "nearestLeaf",
   "ask": "Return the number of nodes on the <b>shortest path from the root down to a leaf</b>. An empty tree gives 0. Stop as soon as you know the answer: do not walk the whole tree.",
   "spec": "nearestLeaf(5 with children 3, 8; 3 has children 1 and 4) → 2      (5 → 8)",
   "start": "// A node is { val, left, right }. left and right are nodes, or null when there is no child.\nfunction nearestLeaf(root) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? An answer built from a node's two sides, levels or \"the nearest\", an ordered tree, \"the smallest (or biggest) again and again\", words and their beginnings, or a signal from an earlier part?",
    "In the example, going deep down the left side finds a leaf at depth 3. Why is that not the answer?",
    "In which order would you have to visit the nodes so that the first leaf you meet is the nearest one?",
    "What do you need to keep track of, to know how deep you are?"
   ],
   "hints": [
    "Visit the tree level by level, with a queue that holds one level at a time.",
    "Keep a depth counter, starting at 1 for the root level.",
    "The first node with no children is the nearest leaf: return the depth at once."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       5,
       3,
       8,
       1,
       4
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
       7
      ]
     ],
     "want": 1
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
       1,
       2,
       3,
       4,
       null,
       null,
       null,
       5
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       1,
       2,
       null,
       3
      ]
     ],
     "want": 3
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "return [toTree(args[0]), ...args.slice(1)];",
   "post": null,
   "solution": [
    "function nearestLeaf(root) {",
    "  if (root === null) return 0;",
    "  let queue = [root];",
    "  let depth = 1;",
    "  while (true) {",
    "    const next = [];",
    "    for (const node of queue) {",
    "      if (!node.left && !node.right) return depth;",
    "      if (node.left) next.push(node.left);",
    "      if (node.right) next.push(node.right);",
    "    }",
    "    queue = next;",
    "    depth++;",
    "  }",
    "}"
   ],
   "why": "A depth-first answer is also correct. What does it do that this one avoids?",
   "world": "A game finds the nearest exit from where you stand by searching level by level.",
   "view": {
    "row": [],
    "tree": [
     5,
     3,
     8,
     1,
     4
    ],
    "grid": null,
    "graph": null,
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
     "depth"
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
     "say": "The nearest leaf. Nearest is the signal for going level by level.",
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
     "card": "\"the nearest\" → level by level",
     "arrows": null
    },
    {
     "say": "Level by level meets the shallow nodes first. So the first leaf it meets is the answer.",
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
     "card": "the first leaf met is the nearest",
     "arrows": null
    },
    {
     "say": "The queue starts with the root. Depth is one.",
     "line": 4,
     "ptr": {
      "node": 0
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
     "vars": {
      "depth": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Five has children, so it is not a leaf. Lines nine and ten line up three and eight for the next level.",
     "line": 10,
     "ptr": null,
     "hot": [
      1,
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
     "card": "5 is not a leaf · next: 3, 8",
     "arrows": null
    },
    {
     "say": "Line twelve moves to that level. Depth is two. First the three. It has children. They are lined up.",
     "line": 10,
     "ptr": {
      "node": 1
     },
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
     "vars": {
      "depth": 2
     },
     "box": null,
     "card": "3 is not a leaf · next: 1, 4",
     "arrows": null
    },
    {
     "say": "Then the eight. It has no left child, and no right child. What does line eight do?",
     "line": 8,
     "ptr": {
      "node": 2
     },
     "hot": [
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
     "card": "8 has no children → ?",
     "arrows": null
    },
    {
     "say": "It returns the depth. Two. The one and the four were lined up, but never visited.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      2
     ],
     "bad": [
      3,
      4
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
     "say": "At worst every node. But it stops at the first leaf, which can be much sooner.",
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
     "card": "stops at the first leaf",
     "arrows": null
    },
    {
     "say": "The queue holds one level at a time.",
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
     "card": "one level → O(width) space",
     "arrows": null
    },
    {
     "say": "A game finds the nearest exit from where you stand by searching level by level.",
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
     "card": "the nearest exit in a game",
     "arrows": null
    }
   ]
  },
  {
   "id": "mz3",
   "num": 3,
   "title": "Only the Middle Ones",
   "fn": "rangeSum",
   "ask": "The tree is a <b>binary search tree</b>. Return the <b>sum of all values from low to high</b> (both included). Do not visit parts of the tree that cannot hold such a value: on a tree of 131,071 nodes you may look at only a few hundred.",
   "spec": "rangeSum(8 with children 3, 10; then 1, 6 and 14, 5, 10) → 24      (6 + 8 + 10)",
   "start": "// A node is { val, left, right }. left and right are nodes, or null when there is no child.\n// The tree keeps the rule: smaller on the left, bigger on the right.\nfunction rangeSum(node, low, high) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? An answer built from a node's two sides, levels or \"the nearest\", an ordered tree, \"the smallest (or biggest) again and again\", words and their beginnings, or a signal from an earlier part?",
    "You stand on a node that is smaller than low. Which of its sides is worth visiting?",
    "And on a node that is bigger than high?",
    "What about a node inside the range?"
   ],
   "hints": [
    "Null adds 0.",
    "If node.val < low, the node and its whole left side are too small: return the range sum of the right side only. Mirror that for node.val > high.",
    "Otherwise the node counts: return its value plus the range sums of both sides."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       8,
       3,
       10,
       1,
       6,
       null,
       14
      ],
      5,
      10
     ],
     "want": 24
    },
    {
     "args": [
      [
       8,
       3,
       10,
       1,
       6,
       null,
       14
      ],
      1,
      14
     ],
     "want": 42
    },
    {
     "args": [
      [
       8,
       3,
       10,
       1,
       6,
       null,
       14
      ],
      0,
      2
     ],
     "want": 1
    },
    {
     "args": [
      [
       8,
       3,
       10,
       1,
       6,
       null,
       14
      ],
      15,
      20
     ],
     "want": 0
    },
    {
     "args": [
      [],
      1,
      5
     ],
     "want": 0
    },
    {
     "args": [
      [
       5
      ],
      5,
      5
     ],
     "want": 5
    },
    {
     "args": [
      [
       8,
       3,
       10,
       1,
       6,
       null,
       14
      ],
      4,
      7
     ],
     "want": 6
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "const n = 131071, a = new Array(n); let v = 0; const go = (i) => { if (i >= n) return; go(2 * i + 1); a[i] = v++; go(2 * i + 2); }; go(0); return [a, 77777, 77790];",
    "limit": 1500,
    "label": "a tree of 131,071 nodes",
    "msg": "Correct on the small trees, but it looked at more than 400 nodes of the big one. Use the rule to skip the sides that cannot hold a value in the range."
   },
   "prep": "let n = 0; const w = (x) => (x === null ? null : new Proxy(x, { get(t, k) { if (k === 'val' && ++n > 400) throw new Error('more than 400 looks at nodes'); return k === 'left' || k === 'right' ? w(t[k]) : t[k]; } })); return [w(toTree(args[0])), ...args.slice(1)];",
   "post": null,
   "solution": [
    "function rangeSum(node, low, high) {",
    "  if (node === null) return 0;",
    "  if (node.val < low) return rangeSum(node.right, low, high);",
    "  if (node.val > high) return rangeSum(node.left, low, high);",
    "  const left = rangeSum(node.left, low, high);",
    "  const right = rangeSum(node.right, low, high);",
    "  return node.val + left + right;",
    "}"
   ],
   "why": "On a node smaller than low, why is its whole left side skipped, and not just the node?",
   "world": "An ordered index sums the sales between two dates like this, without touching the other months.",
   "view": {
    "row": [],
    "tree": [
     8,
     3,
     10,
     1,
     6,
     null,
     14
    ],
    "grid": null,
    "graph": null,
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
     "say": "An ordered tree. So a node that is too small tells you its whole left side is too small as well.",
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
     "card": "too small → its left side too",
     "arrows": null
    },
    {
     "say": "Only a node inside the range needs both of its sides.",
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
     "card": "inside the range → both sides",
     "arrows": null
    },
    {
     "say": "The range is five to ten. The root is eight. Inside. So it counts, and both sides are searched.",
     "line": 5,
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
     "box": null,
     "card": "5 ≤ 8 ≤ 10 → count it",
     "arrows": null
    },
    {
     "say": "Left. Three. It is smaller than five. What does line three do?",
     "line": 3,
     "ptr": {
      "node": 1
     },
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
     "card": "3 < 5 → ?",
     "arrows": null
    },
    {
     "say": "It skips the three, and its whole left side. Only the right side can hold something big enough.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      1,
      3
     ],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "3 and its left side: too small",
     "arrows": null
    },
    {
     "say": "Six. Inside the range. It counts.",
     "line": 7,
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
     "card": "6 is inside → count it",
     "arrows": null
    },
    {
     "say": "Now the right side of the root. Ten. Inside. It counts. Its right child, fourteen, is too big, so line four looks only to its left. Nothing there.",
     "line": 4,
     "ptr": {
      "node": 2
     },
     "hot": [],
     "ok": [
      2
     ],
     "bad": [
      6
     ],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "10 counts · 14 > 10 → skip",
     "arrows": null
    },
    {
     "say": "Back at the root. Eight, plus six, plus ten.",
     "line": 7,
     "ptr": {
      "node": 0
     },
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
     "card": "8 + 6 + 10 = 24",
     "arrows": null
    },
    {
     "say": "The height of the tree, plus the nodes that are inside the range.",
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
     "card": "height + nodes in the range",
     "arrows": null
    },
    {
     "say": "The waiting calls. O of height space.",
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
     "card": "waiting calls → O(height)",
     "arrows": null
    },
    {
     "say": "An ordered index sums the sales between two dates like this, without touching the other months.",
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
     "card": "sales between two dates",
     "arrows": null
    }
   ]
  },
  {
   "id": "mz4",
   "num": 4,
   "title": "The Most Popular",
   "fn": "topK",
   "ask": "Return the <b>k numbers that appear most often</b>, most frequent first. (The tests never have a tie that would change the answer.)",
   "spec": "topK([4, 1, 4, 2, 1, 4], 2) → [4, 1]",
   "start": "// A Heap class is provided. new Heap((a, b) => a - b) keeps the SMALLEST on top;\n// new Heap((a, b) => b - a) keeps the biggest on top.\n// heap.push(x) · heap.pop() removes and returns the top · heap.peek() reads the top · heap.size\nfunction topK(nums, k) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? An answer built from a node's two sides, levels or \"the nearest\", an ordered tree, \"the smallest (or biggest) again and again\", words and their beginnings, or a signal from an earlier part?",
    "What do you need to know about each number first?",
    "After that you have a list of (number, count) pairs. You want the k with the biggest counts. Where have you kept \"the k largest so far\"?",
    "In what order do they come out, and what order was asked for?"
   ],
   "hints": [
    "Count each number in a Map.",
    "Push each [number, count] pair into a min-heap ordered by count; pop whenever it holds more than k. The k most frequent stay.",
    "Popping gives the least frequent of them first, so put each popped number at the FRONT of the output."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       4,
       1,
       4,
       2,
       1,
       4
      ],
      2
     ],
     "want": [
      4,
      1
     ]
    },
    {
     "args": [
      [
       7
      ],
      1
     ],
     "want": [
      7
     ]
    },
    {
     "args": [
      [
       1,
       1,
       2,
       2,
       2,
       3
      ],
      2
     ],
     "want": [
      2,
      1
     ]
    },
    {
     "args": [
      [
       5,
       5,
       5
      ],
      1
     ],
     "want": [
      5
     ]
    },
    {
     "args": [
      [
       3,
       1,
       3,
       1,
       3,
       2,
       1,
       3
      ],
      3
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
       9,
       8,
       9
      ],
      2
     ],
     "want": [
      9,
      8
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function topK(nums, k) {",
    "  const count = new Map();",
    "  for (const x of nums) count.set(x, (count.get(x) || 0) + 1);",
    "  const heap = new Heap((a, b) => a[1] - b[1]);",
    "  for (const pair of count) {",
    "    heap.push(pair);",
    "    if (heap.size > k) heap.pop();",
    "  }",
    "  const out = [];",
    "  while (heap.size > 0) out.unshift(heap.pop()[0]);",
    "  return out;",
    "}"
   ],
   "why": "Sorting all the pairs by count also works. When is the heap of size k clearly better?",
   "world": "A trending list is exactly this. Count everything, then keep only the top few.",
   "view": {
    "row": [
     4,
     1,
     4,
     2,
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
    "ptrs": [],
    "vars": [],
    "box": {
     "title": "count",
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
     "say": "How often does each number appear? That is a counting question. A map.",
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
     "card": "how many of each? → a map",
     "arrows": null
    },
    {
     "say": "Then, the k pairs with the biggest counts. That is the heap of size k, with the smallest count on top.",
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
     "card": "k biggest counts → heap of size k",
     "arrows": null
    },
    {
     "say": "Lines two and three count. Four appears three times. One, twice. Two, once.",
     "line": 3,
     "ptr": null,
     "hot": [
      0,
      1,
      2,
      3,
      4,
      5
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
      "4 → 3 times",
      "1 → 2 times",
      "2 → 1 time"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line four makes a heap of pairs, ordered by the count. The pair for four is pushed. Then the pair for one. Two pairs. That is k.",
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
     "box": null,
     "card": "heap: (1, twice) (4, 3 times)",
     "arrows": null
    },
    {
     "say": "The pair for two is pushed. Three pairs. One too many. Which pair does line seven pop?",
     "line": 7,
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
     "card": "size 3 > 2 → pop ?",
     "arrows": null
    },
    {
     "say": "The pair for two. It has the smallest count.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      3
     ],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "pop (2, once)",
     "arrows": null
    },
    {
     "say": "Line ten empties the heap. The least frequent comes out first, so each number goes to the front. One. Then four, in front of it.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      2,
      5,
      1,
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
     "card": "out: [1] → [4, 1]",
     "arrows": null
    },
    {
     "say": "Line eleven returns the answer.",
     "line": 11,
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
     "say": "One pass to count. Then each different number goes through a heap of size k.",
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
     "card": "n to count + m log k",
     "arrows": null
    },
    {
     "say": "The map holds every different number.",
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
     "card": "the map → O(m) space",
     "arrows": null
    },
    {
     "say": "A trending list is exactly this. Count everything, then keep only the top few.",
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
     "card": "what is trending right now",
     "arrows": null
    }
   ]
  },
  {
   "id": "mz5",
   "num": 5,
   "title": "Built Letter by Letter",
   "fn": "longestBuilt",
   "ask": "A word can be <b>built</b> if every shorter beginning of it is also in the list (\"app\" needs \"a\" and \"ap\"). Return the <b>longest word that can be built</b>. If several are equally long, return the alphabetically first. If none can be built, return \"\".",
   "spec": "longestBuilt([\"a\", \"ap\", \"app\", \"b\", \"bat\"]) → \"app\"      (\"bat\" needs \"ba\", which is missing)",
   "start": "// words is an array of lowercase words, all different.\nfunction longestBuilt(words) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? An answer built from a node's two sides, levels or \"the nearest\", an ordered tree, \"the smallest (or biggest) again and again\", words and their beginnings, or a signal from an earlier part?",
    "For one word, what exactly do you have to check?",
    "Each of those checks is \"is this text in the list?\". Looking through the list each time is slow. What makes that check instant?",
    "How do you keep the best answer so far, including the tie rule?"
   ],
   "hints": [
    "Put all the words in a Set.",
    "For each word, check that every beginning w.slice(0, n), for n from 1 up to its length minus 1, is in the Set.",
    "Keep the best word so far: replace it when the new one is longer, or equally long and alphabetically smaller."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       "a",
       "ap",
       "app",
       "b",
       "bat"
      ]
     ],
     "want": "app"
    },
    {
     "args": [
      []
     ],
     "want": ""
    },
    {
     "args": [
      [
       "x"
      ]
     ],
     "want": "x"
    },
    {
     "args": [
      [
       "b",
       "a"
      ]
     ],
     "want": "a"
    },
    {
     "args": [
      [
       "ab",
       "abc"
      ]
     ],
     "want": ""
    },
    {
     "args": [
      [
       "w",
       "wo",
       "wor",
       "worl",
       "world"
      ]
     ],
     "want": "world"
    },
    {
     "args": [
      [
       "a",
       "b",
       "ab",
       "ba"
      ]
     ],
     "want": "ab"
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function longestBuilt(words) {",
    "  const have = new Set(words);",
    "  let best = '';",
    "  for (const w of words) {",
    "    let ok = true;",
    "    for (let n = 1; n < w.length; n++) {",
    "      if (!have.has(w.slice(0, n))) ok = false;",
    "    }",
    "    if (!ok || w.length < best.length) continue;",
    "    if (w.length > best.length || w < best) best = w;",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "A trie could answer this too. Why is a plain Set enough here?",
   "world": "A word game checks this when you build a word one tile at a time.",
   "view": {
    "row": [
     "a",
     "ap",
     "app",
     "b",
     "bat"
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
      "id": "w",
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
     "say": "For each word, every shorter beginning must be in the list. That is a question of, have I got this?",
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
     "card": "is this beginning in the list?",
     "arrows": null
    },
    {
     "say": "So put the words in a set, and each check is instant. Beginnings made you think of a trie. Here, a set is enough.",
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
     "card": "a set answers that at once",
     "arrows": null
    },
    {
     "say": "Line two puts every word in a set. Best starts empty.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "best": "\"\""
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The word a. It has no shorter beginning, so it can be built. It is longer than nothing. Best is a.",
     "line": 10,
     "ptr": {
      "w": 0
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
     "vars": {
      "best": "a"
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "A p. Its beginning, a, is in the set. Best is a p. Then a p p. A, and a p, are both there. Best is a p p.",
     "line": 10,
     "ptr": {
      "w": 2
     },
     "hot": [
      1,
      2
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
     "vars": {
      "best": "app"
     },
     "box": null,
     "card": "\"a\" ✓ \"ap\" ✓ → app",
     "arrows": null
    },
    {
     "say": "The word b. It can be built. But it is shorter than the best. Line nine skips it.",
     "line": 9,
     "ptr": {
      "w": 3
     },
     "hot": [
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
     "card": "\"b\" is shorter than \"app\"",
     "arrows": null
    },
    {
     "say": "Bat. Its beginnings are b, and b a. B is in the set. Is b a?",
     "line": 7,
     "ptr": {
      "w": 4
     },
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
     "box": null,
     "card": "\"b\" ✓ · \"ba\" ?",
     "arrows": null
    },
    {
     "say": "No. So bat cannot be built, and line nine skips it.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      4
     ],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "\"ba\" is missing → skip",
     "arrows": null
    },
    {
     "say": "Line twelve returns the best.",
     "line": 12,
     "ptr": null,
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
     "card": "",
     "arrows": null
    },
    {
     "say": "Every beginning of every word is looked up once.",
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
     "card": "all beginnings of all words",
     "arrows": null
    },
    {
     "say": "The set holds every word.",
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
     "card": "the set → O(n) space",
     "arrows": null
    },
    {
     "say": "A word game checks this when you build a word one tile at a time.",
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
     "card": "building a word tile by tile",
     "arrows": null
    }
   ]
  },
  {
   "id": "mz6",
   "num": 6,
   "title": "Two Nests That Add Up",
   "fn": "hasPairSum",
   "ask": "Return <b>true</b> if two <b>different nodes</b> of the tree have values that add up to <b>target</b>. The tree is an ordinary binary tree, in no particular order.",
   "spec": "hasPairSum(5 with children 3, 8; then 1, 4 and 9, 12) → true      (8 + 4)",
   "start": "// A node is { val, left, right }. left and right are nodes, or null when there is no child.\nfunction hasPairSum(root, target) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? An answer built from a node's two sides, levels or \"the nearest\", an ordered tree, \"the smallest (or biggest) again and again\", words and their beginnings, or a signal from an earlier part?",
    "You have solved \"two values that add up to a target\" before, on an array. What did you keep, and what did you ask at each value?",
    "What changes when the values sit in a tree instead of an array?",
    "When can you stop early?"
   ],
   "hints": [
    "Walk the tree (any order) and keep a Set of the values seen so far.",
    "At each node ask: is target - node.val already in the Set? If so, return true.",
    "Otherwise add the value, and continue with the left side or the right side."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       5,
       3,
       8,
       1,
       4,
       null,
       9
      ],
      12
     ],
     "want": true
    },
    {
     "args": [
      [
       5,
       3,
       8,
       1,
       4,
       null,
       9
      ],
      100
     ],
     "want": false
    },
    {
     "args": [
      [
       5,
       3,
       8,
       1,
       4,
       null,
       9
      ],
      10
     ],
     "want": true
    },
    {
     "args": [
      [
       5,
       3,
       8,
       1,
       4,
       null,
       9
      ],
      2
     ],
     "want": false
    },
    {
     "args": [
      [],
      0
     ],
     "want": false
    },
    {
     "args": [
      [
       5
      ],
      10
     ],
     "want": false
    },
    {
     "args": [
      [
       1,
       2
      ],
      3
     ],
     "want": true
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "return [toTree(args[0]), ...args.slice(1)];",
   "post": null,
   "solution": [
    "function hasPairSum(root, target) {",
    "  const seen = new Set();",
    "  const walk = (node) => {",
    "    if (node === null) return false;",
    "    if (seen.has(target - node.val)) return true;",
    "    seen.add(node.val);",
    "    return walk(node.left) || walk(node.right);",
    "  };",
    "  return walk(root);",
    "}"
   ],
   "why": "Line 5 checks before line 6 adds. What goes wrong for target 10 on a tree with a single node 5 if the order is swapped?",
   "world": "Do any two items in the basket add up to the voucher? One walk, and a set.",
   "view": {
    "row": [],
    "tree": [
     5,
     3,
     8,
     1,
     4,
     null,
     9
    ],
    "grid": null,
    "graph": null,
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
     "title": "seen",
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
     "say": "Have I seen the partner I need? That is the hash set question from chapter three.",
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
     "card": "seen my partner? → a set",
     "arrows": null
    },
    {
     "say": "The only new part is the walk. Visit every node, deep first, and ask the question at each one.",
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
     "card": "walk the tree, ask at each node",
     "arrows": null
    },
    {
     "say": "The target is twelve. The root is five. It needs a seven. Nothing is seen yet. So five is added.",
     "line": 6,
     "ptr": {
      "node": 0
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
     "box": [
      "5"
     ],
     "card": "12 − 5 = 7: not seen",
     "arrows": null
    },
    {
     "say": "Left. Three needs a nine. Not seen. Added.",
     "line": 6,
     "ptr": {
      "node": 1
     },
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
     "box": [
      "5",
      "3"
     ],
     "card": "12 − 3 = 9: not seen",
     "arrows": null
    },
    {
     "say": "One needs eleven. Four needs eight. Neither is seen. Both are added.",
     "line": 6,
     "ptr": {
      "node": 4
     },
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
     "box": [
      "5",
      "3",
      "1",
      "4"
     ],
     "card": "11? no · 8? no",
     "arrows": null
    },
    {
     "say": "The left side found nothing. So the or, on line seven, tries the right side. Eight. It needs a four. What does line five do?",
     "line": 5,
     "ptr": {
      "node": 2
     },
     "hot": [
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
     "card": "12 − 8 = 4: seen?",
     "arrows": null
    },
    {
     "say": "Four is in the set. Eight plus four is twelve. True. The nine is never visited.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      2,
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
     "card": "",
     "arrows": null
    },
    {
     "say": "At worst every node once. O of n time.",
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
     "card": "each node once → O(n) time",
     "arrows": null
    },
    {
     "say": "The set can hold every value. O of n space.",
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
     "card": "the set → O(n) space",
     "arrows": null
    },
    {
     "say": "Do any two items in the basket add up to the voucher? One walk, and a set.",
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
     "card": "two items that match a voucher",
     "arrows": null
    }
   ]
  },
  {
   "id": "mz7",
   "num": 7,
   "title": "A Tree from a Sorted Row",
   "fn": "buildBalanced",
   "ask": "The array is sorted. Build a <b>binary search tree</b> from its values that is <b>as short as possible</b>, and return its root (null for an empty array). Any tree of the smallest possible height is accepted.",
   "spec": "buildBalanced([1, 3, 6, 8, 10]) → 6 on top, 1 and 8 below, then 3 and 10",
   "start": "// A node is { val, left, right }. left and right are nodes, or null when there is no child.\n// sorted is a sorted array of different numbers. Create the nodes yourself.\nfunction buildBalanced(sorted) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? An answer built from a node's two sides, levels or \"the nearest\", an ordered tree, \"the smallest (or biggest) again and again\", words and their beginnings, or a signal from an earlier part?",
    "Which value should be the root, so that the two sides are as equal as possible?",
    "After you pick it, what is left on each side? Describe each as the same problem, smaller.",
    "When is there nothing to build?"
   ],
   "hints": [
    "Work on a stretch of the array from lo to hi (two extra parameters with default values). If lo > hi, return null.",
    "The middle value of the stretch becomes the node.",
    "Its left child is the tree built from lo to mid - 1, its right child the tree built from mid + 1 to hi."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       3,
       6,
       8,
       10
      ]
     ],
     "want": [
      6,
      1,
      8,
      null,
      3,
      null,
      10
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
      5
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
      1,
      null,
      2
     ]
    },
    {
     "args": [
      [
       1,
       2,
       3,
       4,
       5,
       6,
       7
      ]
     ],
     "want": [
      4,
      2,
      6,
      1,
      3,
      5,
      7
     ]
    },
    {
     "args": [
      [
       2,
       4,
       6,
       8
      ]
     ],
     "want": [
      4,
      2,
      6,
      null,
      null,
      null,
      8
     ]
    }
   ],
   "check": "const a = got; if (!Array.isArray(a)) return 'Return the root node of the tree (or null).'; const out = []; let h = 0; const go = (i, d) => { if (i >= a.length || a[i] === null || a[i] === undefined) return; go(2 * i + 1, d + 1); out.push(a[i]); h = Math.max(h, d); go(2 * i + 2, d + 1); }; go(0, 1); if (JSON.stringify(out) !== JSON.stringify(args[0])) return 'Read left, node, right, the tree must give the sorted input back.'; if (h > Math.ceil(Math.log2(args[0].length + 1))) return 'The tree is taller than it needs to be: put the middle value on top, at every step.'; return '';",
   "forbid": [],
   "big": null,
   "prep": null,
   "post": "return got === undefined ? 'nothing was returned' : treeArr(got);",
   "solution": [
    "function buildBalanced(sorted, lo = 0, hi = sorted.length - 1) {",
    "  if (lo > hi) return null;",
    "  const mid = Math.floor((lo + hi) / 2);",
    "  const node = { val: sorted[mid], left: null, right: null };",
    "  node.left = buildBalanced(sorted, lo, mid - 1);",
    "  node.right = buildBalanced(sorted, mid + 1, hi);",
    "  return node;",
    "}"
   ],
   "why": "Why does picking the middle value at every step keep the tree short?",
   "world": "A database builds a fresh index from sorted data this way, so that it starts out balanced.",
   "view": {
    "row": [],
    "tree": [
     6,
     1,
     8,
     null,
     3,
     null,
     10
    ],
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [
     0,
     1,
     2,
     4,
     6
    ],
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
     "say": "The root splits the rest in two. To keep the tree short, the two sides should be the same size. So the root is the middle value.",
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
     "card": "1 3 6 8 10 → the 6 goes on top",
     "arrows": null
    },
    {
     "say": "Each side is then a smaller sorted stretch. The same problem. So the function calls itself on each.",
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
     "card": "each side: the same problem",
     "arrows": null
    },
    {
     "say": "The first call covers the whole row. Low is zero, high is four. The middle is position two. Six becomes the root.",
     "line": 4,
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
     "show": [
      0
     ],
     "vars": null,
     "box": null,
     "card": "middle of 1 3 6 8 10 → 6",
     "arrows": null
    },
    {
     "say": "Line five builds its left side from the stretch before the middle. Positions zero to one. The middle is position zero. One becomes the left child of six.",
     "line": 4,
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
     "show": [
      1
     ],
     "vars": null,
     "box": null,
     "card": "left side 1 3 → middle is 1",
     "arrows": null
    },
    {
     "say": "Left of the one, there is nothing. Low is above high. Line two returns null. To its right is the three.",
     "line": 4,
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
     "show": [
      4
     ],
     "vars": null,
     "box": null,
     "card": "3: right child of 1",
     "arrows": null
    },
    {
     "say": "Back at the root. Line six builds the right side, from positions three to four. Which position is the middle?",
     "line": 3,
     "ptr": {
      "node": 0
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
     "card": "right side 8 10 → mid = ?",
     "arrows": null
    },
    {
     "say": "Three. So eight is the right child of six. And ten, to its right, becomes the right child of eight.",
     "line": 4,
     "ptr": {
      "node": 2
     },
     "hot": [],
     "ok": [
      2,
      6
     ],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [
      2,
      6
     ],
     "vars": null,
     "box": null,
     "card": "8: right child of 6 · then 10",
     "arrows": null
    },
    {
     "say": "Line seven returns the root. Six on top. Three levels for five values.",
     "line": 7,
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
     "say": "One node is made per value. O of n time.",
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
     "card": "one node per value → O(n) time",
     "arrows": null
    },
    {
     "say": "The waiting calls are log n deep, because every call halves its stretch.",
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
     "card": "waiting calls → O(log n)",
     "arrows": null
    },
    {
     "say": "A database builds a fresh index from sorted data this way, so that it starts out balanced.",
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
     "card": "building a balanced index",
     "arrows": null
    }
   ]
  },
  {
   "id": "mz8",
   "num": 8,
   "title": "The Last Stone",
   "fn": "lastStone",
   "ask": "Again and again, take the <b>two heaviest stones</b> and smash them together. If they weigh the same, both are destroyed. Otherwise the lighter one is destroyed and the heavier one loses that much weight. Return the weight of the <b>last stone</b>, or 0 if none is left.",
   "spec": "lastStone([3, 7, 4, 1]) → 1      (7 and 4 leave 3; 3 and 3 destroy each other; 1 is left)",
   "start": "// A Heap class is provided. new Heap((a, b) => a - b) keeps the SMALLEST on top;\n// new Heap((a, b) => b - a) keeps the biggest on top.\n// heap.push(x) · heap.pop() removes and returns the top · heap.peek() reads the top · heap.size\nfunction lastStone(stones) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? An answer built from a node's two sides, levels or \"the nearest\", an ordered tree, \"the smallest (or biggest) again and again\", words and their beginnings, or a signal from an earlier part?",
    "Do [3, 7, 4, 1] by hand. What did you need at every step?",
    "After a smash, a new stone may come back. Could it be one of the two heaviest next time?",
    "When do you stop, and what is the answer in each ending?"
   ],
   "hints": [
    "Put all the stones in a max-heap (biggest on top).",
    "While there are at least two: pop two. If they differ, push the difference back.",
    "At the end the heap holds one stone (return it) or none (return 0)."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       3,
       7,
       4,
       1
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       2,
       7,
       4,
       1,
       8,
       1
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
       5
      ]
     ],
     "want": 5
    },
    {
     "args": [
      [
       4,
       4
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       10,
       3
      ]
     ],
     "want": 7
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "return [Array.from({ length: 120000 }, (_, i) => 1 + (i * 7919) % 100003)];",
    "limit": 1500,
    "label": "120,000 stones",
    "msg": "Correct on the small cases, but too slow on the big one. Sorting again after every smash is far too much work: a max-heap gives the two heaviest in O(log n)."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function lastStone(stones) {",
    "  const heap = new Heap((a, b) => b - a);",
    "  for (const s of stones) heap.push(s);",
    "  while (heap.size > 1) {",
    "    const a = heap.pop();",
    "    const b = heap.pop();",
    "    if (a !== b) heap.push(a - b);",
    "  }",
    "  return heap.size === 1 ? heap.peek() : 0;",
    "}"
   ],
   "why": "Line 2 uses b - a instead of a - b. What does that change?",
   "world": "A tournament where the two strongest always play next is run with a max heap.",
   "view": {
    "row": [
     3,
     7,
     4,
     1
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
    "vars": [],
    "box": {
     "title": "heap",
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
     "say": "The two heaviest, again and again, while new stones come back. That is the signal for a heap.",
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
     "card": "the heaviest, again and again",
     "arrows": null
    },
    {
     "say": "This time the biggest must be on top. So the comparison is turned around. b minus a.",
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
     "card": "b − a → biggest on top",
     "arrows": null
    },
    {
     "say": "Line three pushes every stone. Seven is on top.",
     "line": 3,
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
     "box": [
      "7",
      "4",
      "3",
      "1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Lines five and six pop the two heaviest. Seven and four. They differ. So line seven pushes the difference. Three.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      1,
      2
     ],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "3",
      "3",
      "1"
     ],
     "card": "7 − 4 = 3 goes back",
     "arrows": null
    },
    {
     "say": "Again. The two heaviest are three, and three. What does line seven do?",
     "line": 7,
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
     "card": "3 and 3 → ?",
     "arrows": null
    },
    {
     "say": "Nothing. Equal stones destroy each other. Only the one is left.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      0
     ],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1"
     ],
     "card": "3 = 3 → both are gone",
     "arrows": null
    },
    {
     "say": "One stone left. The loop ends, and line nine returns it.",
     "line": 9,
     "ptr": null,
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
     "say": "Every smash removes at least one stone, and costs a few heap operations. O of n log n.",
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
     "card": "n smashes × log n",
     "arrows": null
    },
    {
     "say": "The heap. O of n space.",
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
     "card": "the heap → O(n) space",
     "arrows": null
    },
    {
     "say": "A tournament where the two strongest always play next is run with a max heap.",
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
     "card": "the two strongest play next",
     "arrows": null
    }
   ]
  }
 ]
};
