window.CHAPTER = {
 "id": "trees",
 "title": "Binary Trees",
 "sub": "CHAPTER 14 · BINARY TREES",
 "key": "burrow-ch-trees",
 "next": {
  "href": "chapter.html?c=bst",
  "label": "Chapter 15: Search trees"
 },
 "prev": {
  "href": "chapter.html?c=mixed2",
  "label": "Mixed set 2"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "tr0",
   "label": "Welcome",
   "short": "Intro",
   "name": "A node with two children",
   "intro": "What a tree is, the words used for it, and why recursion fits it so well."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "trt1",
   "label": "Theory 1",
   "short": "T1",
   "name": "Go deep first (DFS)",
   "intro": "Every child is the root of a smaller tree, so one small recursive function walks the whole thing. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "trt2",
   "label": "Theory 2",
   "short": "T2",
   "name": "Level by level (BFS)",
   "intro": "A queue visits the tree one level at a time. When to pick it over going deep. One guess."
  }
 ],
 "notes": {
  "w": "<h3>The words</h3><ul><li><b>Node:</b> one item, <code>{ val, left, right }</code>. <b>Root:</b> the top node. <b>Child / parent:</b> the node below / above.</li>\n      <li><b>Leaf:</b> a node with no children. <b>Subtree:</b> a node together with everything below it.</li>\n      <li><b>Binary:</b> every node has at most two children, a left one and a right one. A missing child is <code>null</code>.</li>\n      <li><b>Height (or depth) of a tree:</b> the number of nodes on the longest path from the root down to a leaf.</li></ul>",
  "t1": "<h3>Key ideas</h3><ul><li><b>Every child is the root of a smaller tree.</b> That is the \"smaller copy of the same problem\" from chapter 10.</li>\n      <li><b>The shape of almost every tree function:</b> if the node is null, return the answer for an empty tree. Otherwise get the answer\n      for the left side, get the answer for the right side, and combine them with this node.</li>\n      <li><b>This is depth-first search (DFS):</b> it goes all the way down one side before it starts the other.</li>\n      <li><b>Cost:</b> every node is visited once, O(n) time. The waiting calls are as deep as the tree is tall: O(height) memory.</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>Breadth-first search (BFS) visits the tree level by level</b>: the root, then its children, then their children.</li>\n      <li><b>It uses a queue.</b> Take the nodes of one level, and line up their children as the next level.</li>\n      <li><b>Pick BFS when the question talks about levels or \"nearest to the root\"</b>: level lists, the shallowest leaf, the view from one side.</li>\n      <li><b>Pick DFS when the answer for a node is built from the answers of its two sides</b>: counts, heights, paths.</li>\n      <li><b>Cost:</b> O(n) time. The queue holds one level at a time: O(width) memory.</li></ul>"
 },
 "quiz": {
  "trt1-q1": {
   "ask": "count(node) returns 1 + count(node.left) + count(node.right). What must it return when node is null?",
   "opts": [
    "0",
    "1",
    "null"
   ],
   "right": 0,
   "why": "An empty spot holds no nodes. That is the base case, and it is what stops the recursion at the bottom of the tree."
  },
  "trt2-q1": {
   "ask": "The queue holds the nodes 3 and 8. 3 has children 1 and 4. 8 has only a right child, 9. What is the next level?",
   "opts": [
    "1, 4, 9",
    "1, 4, null, 9",
    "9, 4, 1"
   ],
   "right": 0,
   "why": "Each node lines up the children it has, left one first. Missing children are simply not added."
  },
  "tr1s-q": {
   "ask": "The node 1 has no left child, so the next call is countNodes(null). What does it return?",
   "opts": [
    "0",
    "1",
    "null"
   ],
   "right": 0,
   "why": "Line 2: an empty spot holds no nodes, so the count is 0."
  },
  "tr2s-q": {
   "ask": "On node 3, left is 0 and right is 1. What does line 5 return?",
   "opts": [
    "2",
    "1",
    "3"
   ],
   "right": 0,
   "why": "1 + Math.max(0, 1) = 2: the node itself, plus its taller side."
  },
  "tr3s-q": {
   "ask": "Both sides of the root are already mirrored inside. What do lines 5 and 6 do at the root?",
   "opts": [
    "Swap the two whole sides: the 8 side goes left",
    "Swap only the values 3 and 8",
    "Nothing more"
   ],
   "right": 0,
   "why": "node.left and node.right are swapped, and each one brings its whole subtree along."
  },
  "tr4s-q": {
   "ask": "The inner pair holds 4 and 4, and all their children are empty. What does same return for this pair?",
   "opts": [
    "true",
    "false",
    "null"
   ],
   "right": 0,
   "why": "The values match, and both crosswise pairs of children are null and null, which is true."
  },
  "tr5s-q": {
   "ask": "3 has children 1 and 4. 8 has only a right child, 9. What does next hold after the for loop?",
   "opts": [
    "1, 4, 9",
    "1, 4, null, 9",
    "9, 4, 1"
   ],
   "right": 0,
   "why": "Lines 8 and 9 only push children that exist, left one first, so the missing child is simply skipped."
  },
  "tr6s-q": {
   "ask": "The node 1 is a leaf, and rest is 3. What does line 5 return?",
   "opts": [
    "false: the path ended with 3 still needed",
    "true: it reached a leaf",
    "It keeps going down"
   ],
   "right": 0,
   "why": "rest === 0 is false. The path 5, 3, 1 adds up to 9, not 12."
  },
  "tr7s-q": {
   "ask": "At the root, left is 2 and right is 2, and best is 2. What does line 7 make best?",
   "opts": [
    "4",
    "2",
    "5"
   ],
   "right": 0,
   "why": "Math.max(2, 2 + 2) = 4: two steps down the left side and two down the right."
  },
  "tr8s-q": {
   "ask": "On node 3, the left side reported the node 1 and the right side reported the node 4. What does line 6 return?",
   "opts": [
    "The node 3 itself",
    "The node 1",
    "null"
   ],
   "right": 0,
   "why": "One was found on each side, so this is the lowest node that has both below it."
  }
 },
 "problems": [
  {
   "id": "tr1",
   "num": 1,
   "title": "Count the Nests",
   "fn": "countNodes",
   "ask": "Return the <b>number of nodes</b> in the tree. An empty tree (null) has 0.",
   "spec": "countNodes(tree with 5, 3, 8, 1, 4, 9) → 6",
   "start": "// A node is { val, left, right }. left and right are nodes, or null when there is no child.\nfunction countNodes(node) {\n  // your code here\n}\n",
   "plan": [
    "If you knew the count of the left side and the count of the right side, how would you get the count of the whole tree?",
    "Who can tell you the count of the left side?",
    "What is the count of an empty spot (null)?"
   ],
   "hints": [
    "Base case: if node is null, return 0.",
    "Ask the same function for node.left and for node.right.",
    "Return 1 (this node) plus the two answers."
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
      ]
     ],
     "want": 6
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
       null,
       3,
       null,
       null,
       null,
       4
      ]
     ],
     "want": 3
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
     "want": 7
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "return [toTree(args[0]), ...args.slice(1)];",
   "post": null,
   "solution": [
    "function countNodes(node) {",
    "  if (node === null) return 0;",
    "  const left = countNodes(node.left);",
    "  const right = countNodes(node.right);",
    "  return 1 + left + right;",
    "}"
   ],
   "why": "There is no loop and no list of nodes. What makes sure every node is counted exactly once?",
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
    "box": null,
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "A child is the root of a smaller tree. So the same function can count each side.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "each side is a smaller tree",
     "arrows": null
    },
    {
     "say": "The count is one, for this node, plus the count of the left side, plus the count of the right side.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + left side + right side",
     "arrows": null
    },
    {
     "say": "The first call stands on the root. Five. It is not null. Line three asks for the count of the left side, and waits.",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The call on three does the same. It goes left, to the one.",
     "line": 3,
     "ptr": {
      "node": 3
     },
     "hot": [
      1,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One has no children. Its left is null. What does the call on null return?",
     "line": 2,
     "ptr": {
      "node": 7
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "countNodes(null) = ?",
     "arrows": null
    },
    {
     "say": "Zero. Line two. Both sides of the one are empty. So it returns one, plus zero, plus zero. One.",
     "line": 5,
     "ptr": {
      "node": 3
     },
     "hot": [],
     "ok": [
      3
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + 0 + 0 = 1",
     "arrows": null
    },
    {
     "say": "The four is the same. One. So the three returns one, plus one, plus one. Three.",
     "line": 5,
     "ptr": {
      "node": 1
     },
     "hot": [],
     "ok": [
      1,
      4
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + 1 + 1 = 3",
     "arrows": null
    },
    {
     "say": "The right side. Eight has no left child, and the nine counts one. So eight returns two.",
     "line": 5,
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + 0 + 1 = 2",
     "arrows": null
    },
    {
     "say": "Back at the root. One, plus three, plus two. Six.",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + 3 + 2 = 6",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "each node once → O(n) time",
     "arrows": null
    },
    {
     "say": "The waiting calls go as deep as the tree is tall. O of height space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "waiting calls → O(height)",
     "arrows": null
    }
   ]
  },
  {
   "id": "tr2",
   "num": 2,
   "title": "How Tall Is the Tree?",
   "fn": "maxDepth",
   "ask": "Return the <b>height</b> of the tree: the number of nodes on the longest path from the root down to a leaf. An empty tree has height 0.",
   "spec": "maxDepth(5 with children 3 and 8; 3 has a right child 4) → 3",
   "start": "// A node is { val, left, right }. left and right are nodes, or null when there is no child.\nfunction maxDepth(node) {\n  // your code here\n}\n",
   "plan": [
    "If you knew the height of the left side and the height of the right side, what is the height of the whole tree?",
    "Which of the two sides matters?",
    "What is the height of an empty spot?"
   ],
   "hints": [
    "Base case: null has height 0.",
    "Get the height of node.left and of node.right from the same function.",
    "Return 1 + Math.max(left, right)."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       5,
       3,
       8,
       null,
       4
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
       1,
       2,
       null,
       3,
       null,
       null,
       null,
       4
      ]
     ],
     "want": 4
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
    "function maxDepth(node) {",
    "  if (node === null) return 0;",
    "  const left = maxDepth(node.left);",
    "  const right = maxDepth(node.right);",
    "  return 1 + Math.max(left, right);",
    "}"
   ],
   "why": "This is the counting function with one word changed. Which word, and why?",
   "view": {
    "row": [],
    "tree": [
     5,
     3,
     8,
     null,
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
     "say": "The height of a tree is one, for the root, plus the height of its taller side.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + the taller side",
     "arrows": null
    },
    {
     "say": "And each side is a smaller tree. So the same function measures it.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "each side: the same function",
     "arrows": null
    },
    {
     "say": "The first call stands on the root, five. Line three asks for the height of the left side, and waits.",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Now on three. Its left side is empty. Line two answers zero.",
     "line": 2,
     "ptr": {
      "node": 3
     },
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "left of 3 is empty → 0",
     "arrows": null
    },
    {
     "say": "Its right child is four. A leaf. Both of its sides are empty. One, plus the larger of zero and zero. One.",
     "line": 5,
     "ptr": {
      "node": 4
     },
     "hot": [],
     "ok": [
      4
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + max(0, 0) = 1",
     "arrows": null
    },
    {
     "say": "Back on three. Left is zero. Right is one. What does this call return?",
     "line": 5,
     "ptr": {
      "node": 1
     },
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + max(0, 1) = ?",
     "arrows": null
    },
    {
     "say": "Two. The three itself, plus its taller side.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      1
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + max(0, 1) = 2",
     "arrows": null
    },
    {
     "say": "The right side of the root. Eight is a leaf. One.",
     "line": 5,
     "ptr": {
      "node": 2
     },
     "hot": [],
     "ok": [
      2
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "8 is a leaf → 1",
     "arrows": null
    },
    {
     "say": "Back at the root. One, plus the larger of two and one. Three.",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + max(2, 1) = 3",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "waiting calls → O(height)",
     "arrows": null
    }
   ]
  },
  {
   "id": "tr3",
   "num": 3,
   "title": "The Tree in the Pond",
   "fn": "mirror",
   "ask": "<b>Mirror</b> the tree: at every node, the left and right children swap places. Change the tree itself and return its root.",
   "spec": "mirror(5 with children 3, 8) → 5 with children 8, 3      (and the same at every node below)",
   "start": "// A node is { val, left, right }. left and right are nodes, or null when there is no child.\nfunction mirror(node) {\n  // your code here\n}\n",
   "plan": [
    "What does mirroring do at the root itself?",
    "After that swap, what still has to happen to each side?",
    "What is the mirror of an empty spot?"
   ],
   "hints": [
    "Base case: the mirror of null is null.",
    "Mirror the left side and the right side with the same function.",
    "Then swap: node.left gets the mirrored right side, node.right the mirrored left side. Return node."
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
       7,
       9
      ]
     ],
     "want": [
      5,
      8,
      3,
      9,
      7,
      4,
      1
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
       7
      ]
     ],
     "want": [
      7
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
       3
      ]
     ],
     "want": [
      1,
      3,
      2
     ]
    },
    {
     "args": [
      [
       5,
       3,
       8,
       1
      ]
     ],
     "want": [
      5,
      8,
      3,
      null,
      null,
      null,
      1
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "return [toTree(args[0]), ...args.slice(1)];",
   "post": "return got === undefined ? 'nothing was returned' : treeArr(got);",
   "solution": [
    "function mirror(node) {",
    "  if (node === null) return null;",
    "  const left = mirror(node.left);",
    "  const right = mirror(node.right);",
    "  node.left = right;",
    "  node.right = left;",
    "  return node;",
    "}"
   ],
   "why": "Lines 3 and 4 save the two mirrored sides before lines 5 and 6 change anything. What would go wrong if line 5 were node.left = mirror(node.right) and line 6 node.right = mirror(node.left)?",
   "view": {
    "row": [],
    "tree": [
     5,
     3,
     8,
     1,
     4,
     7,
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
    "box": null,
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "To mirror a tree, mirror its left side, mirror its right side, and swap the two.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "mirror both sides, then swap",
     "arrows": null
    },
    {
     "say": "Each side is a smaller tree. The same function mirrors it. An empty spot is already its own mirror.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "null mirrors to null",
     "arrows": null
    },
    {
     "say": "The first call stands on the root, five. Line three sends the left side off to be mirrored, and waits.",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Now on three. Its children, one and four, are leaves. A leaf has nothing to swap. It comes back unchanged.",
     "line": 4,
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a leaf mirrors to itself",
     "arrows": null
    },
    {
     "say": "Lines five and six swap them. One and four become four and one.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      3,
      4
     ],
     "bad": [],
     "set": {
      "3": 4,
      "4": 1
     },
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "swap: 1 | 4 → 4 | 1",
     "arrows": null
    },
    {
     "say": "The right side. On eight, the same thing. Seven and nine become nine and seven.",
     "line": 6,
     "ptr": {
      "node": 2
     },
     "hot": [],
     "ok": [
      2,
      5,
      6
     ],
     "bad": [],
     "set": {
      "5": 9,
      "6": 7
     },
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "swap: 7 | 9 → 9 | 7",
     "arrows": null
    },
    {
     "say": "Back at the root. Both sides are mirrored inside. What do lines five and six do now?",
     "line": 5,
     "ptr": {
      "node": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "both sides are done → ?",
     "arrows": null
    },
    {
     "say": "They swap the two whole sides. The eight, with everything under it, goes left. The three goes right.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "set": {
      "1": 8,
      "2": 3,
      "3": 9,
      "4": 7,
      "5": 4,
      "6": 1
     },
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "the whole 8 side goes left",
     "arrows": null
    },
    {
     "say": "Line seven returns the root.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "waiting calls → O(height)",
     "arrows": null
    }
   ]
  },
  {
   "id": "tr4",
   "num": 4,
   "title": "Its Own Mirror?",
   "fn": "isMirror",
   "ask": "Return <b>true</b> if the tree is its own mirror image: the left side is the mirror of the right side. An empty tree counts as true.",
   "spec": "isMirror(1 with children 2, 2; grandchildren 3, 4, 4, 3) → true",
   "start": "// A node is { val, left, right }. left and right are nodes, or null when there is no child.\nfunction isMirror(root) {\n  // your code here\n}\n",
   "plan": [
    "Two trees are mirrors of each other. What must be true of their two roots?",
    "And which child of the first must mirror which child of the second?",
    "What if one spot is empty and the other is not? What if both are empty?"
   ],
   "hints": [
    "Write a helper same(a, b) that says whether two subtrees are mirrors of each other.",
    "Both null: true. Only one null: false. Different values: false.",
    "Otherwise: same(a.left, b.right) && same(a.right, b.left). Start with same(root.left, root.right)."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       2,
       2,
       3,
       4,
       4,
       3
      ]
     ],
     "want": true
    },
    {
     "args": [
      [
       1,
       2,
       2,
       null,
       3,
       null,
       3
      ]
     ],
     "want": false
    },
    {
     "args": [
      []
     ],
     "want": true
    },
    {
     "args": [
      [
       1
      ]
     ],
     "want": true
    },
    {
     "args": [
      [
       1,
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
       2,
       3,
       null,
       null,
       3
      ]
     ],
     "want": true
    },
    {
     "args": [
      [
       1,
       2
      ]
     ],
     "want": false
    },
    {
     "args": [
      [
       1,
       2,
       2,
       3,
       null,
       3
      ]
     ],
     "want": false
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "return [toTree(args[0]), ...args.slice(1)];",
   "post": null,
   "solution": [
    "function isMirror(root) {",
    "  const same = (a, b) => {",
    "    if (a === null && b === null) return true;",
    "    if (a === null || b === null) return false;",
    "    if (a.val !== b.val) return false;",
    "    return same(a.left, b.right) && same(a.right, b.left);",
    "  };",
    "  return root === null || same(root.left, root.right);",
    "}"
   ],
   "why": "Why does line 6 compare a.left with b.right, and not a.left with b.left?",
   "view": {
    "row": [],
    "tree": [
     1,
     2,
     2,
     3,
     4,
     4,
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
     "say": "Two subtrees are mirrors when their roots hold the same value, and their children match crosswise.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "same value + children crosswise",
     "arrows": null
    },
    {
     "say": "So the recursion walks two nodes at once. When a goes left, b goes right.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a goes left → b goes right",
     "arrows": null
    },
    {
     "say": "Line eight starts the helper on the two children of the root. A on the left two. B on the right two. Equal.",
     "line": 8,
     "ptr": {
      "a": 1,
      "b": 2
     },
     "hot": [
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "2 and 2: equal",
     "arrows": null
    },
    {
     "say": "Line six. First the outer pair. The left of a, with the right of b. Three and three.",
     "line": 6,
     "ptr": {
      "a": 3,
      "b": 6
     },
     "hot": [
      3,
      6
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "outer pair: 3 and 3",
     "arrows": null
    },
    {
     "say": "Their children are all empty. Null and null. Line three says true.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [
      3,
      6
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "null and null → true",
     "arrows": null
    },
    {
     "say": "Now the inner pair. The right of a, with the left of b. Four and four, and nothing below them. What does same return?",
     "line": 6,
     "ptr": {
      "a": 4,
      "b": 5
     },
     "hot": [
      4,
      5
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "inner pair: 4 and 4 → ?",
     "arrows": null
    },
    {
     "say": "True. The values match, and the empty spots match.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      4,
      5
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "4 = 4, empty = empty → true",
     "arrows": null
    },
    {
     "say": "Back on the two twos. The outer pair is true, and the inner pair is true.",
     "line": 6,
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
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "true && true → true",
     "arrows": null
    },
    {
     "say": "Line eight returns true. The tree is its own mirror.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "waiting calls → O(height)",
     "arrows": null
    }
   ]
  },
  {
   "id": "tr5",
   "num": 5,
   "title": "Floor by Floor",
   "fn": "levels",
   "ask": "Return the values <b>level by level</b>: an array with one array per level, top level first, each level from left to right. An empty tree gives [].",
   "spec": "levels(5 with children 3, 8; then 1, 4 and 9) → [[5], [3, 8], [1, 4, 9]]",
   "start": "// A node is { val, left, right }. left and right are nodes, or null when there is no child.\nfunction levels(root) {\n  // your code here\n}\n",
   "plan": [
    "If you hold all the nodes of one level, how do you get all the nodes of the next level?",
    "In what order must you go through them, so the next level comes out left to right?",
    "When do you stop?"
   ],
   "hints": [
    "Keep an array (a queue) holding the nodes of the current level. Start with [root], or [] if the root is null.",
    "Push the values of the current level to the answer.",
    "Build the next level: for each node, add its left child and then its right child when they exist. Repeat while the level is not empty."
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
      ]
     ],
     "want": [
      [
       5
      ],
      [
       3,
       8
      ],
      [
       1,
       4,
       9
      ]
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
       7
      ]
     ],
     "want": [
      [
       7
      ]
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
      [
       1
      ],
      [
       2
      ]
     ]
    },
    {
     "args": [
      [
       1,
       null,
       3,
       null,
       null,
       6
      ]
     ],
     "want": [
      [
       1
      ],
      [
       3
      ],
      [
       6
      ]
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
      [
       1
      ],
      [
       2,
       3
      ],
      [
       4,
       5,
       6,
       7
      ]
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "return [toTree(args[0]), ...args.slice(1)];",
   "post": null,
   "solution": [
    "function levels(root) {",
    "  const out = [];",
    "  let queue = root === null ? [] : [root];",
    "  while (queue.length > 0) {",
    "    const next = [];",
    "    out.push(queue.map((node) => node.val));",
    "    for (const node of queue) {",
    "      if (node.left !== null) next.push(node.left);",
    "      if (node.right !== null) next.push(node.right);",
    "    }",
    "    queue = next;",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "Why is the left child pushed before the right child?",
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
    "ptrs": [],
    "vars": [],
    "box": {
     "title": "queue",
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
     "say": "Level by level. That is the signal for breadth first search, with a queue.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "level by level → BFS, a queue",
     "arrows": null
    },
    {
     "say": "The queue holds one whole level. Its nodes line up their children, and that is the next level.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a level lines up its children",
     "arrows": null
    },
    {
     "say": "Line three. The queue starts with just the root. Five.",
     "line": 3,
     "ptr": null,
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "5"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line six writes down the values in the queue. That is level one.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "level 1: [5]",
     "arrows": null
    },
    {
     "say": "Lines seven to ten. Each node in the queue puts its children into next. Three, then eight.",
     "line": 9,
     "ptr": null,
     "hot": [
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "3",
      "8"
     ],
     "card": "children of 5 → 3, 8",
     "arrows": null
    },
    {
     "say": "Line eleven makes that the new queue. And line six writes level two.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      2
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "level 2: [3, 8]",
     "arrows": null
    },
    {
     "say": "Now the children. Three has one and four. Eight has no left child, only nine. What is the next level?",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "children of 3 and 8 → ?",
     "arrows": null
    },
    {
     "say": "One, four, nine. The missing child is simply not added.",
     "line": 9,
     "ptr": null,
     "hot": [
      3,
      4,
      6
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1",
      "4",
      "9"
     ],
     "card": "next = 1, 4, 9",
     "arrows": null
    },
    {
     "say": "Line six writes level three.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      3,
      4,
      6
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "level 3: [1, 4, 9]",
     "arrows": null
    },
    {
     "say": "None of them has a child. Next is empty, the loop ends, and line thirteen returns the answer.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Every node enters the queue once. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "each node once → O(n) time",
     "arrows": null
    },
    {
     "say": "The queue holds one level at a time. O of the widest level.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "one level → O(width) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "tr6",
   "num": 6,
   "title": "A Path That Adds Up",
   "fn": "hasPath",
   "ask": "Return <b>true</b> if some path from the <b>root down to a leaf</b> has values that add up to exactly <b>target</b>. The path must end on a leaf. An empty tree gives false.",
   "spec": "hasPath(5 with children 3, 8; then 1, 4 and 9, 12) → true      (5 + 3 + 4)",
   "start": "// A node is { val, left, right }. left and right are nodes, or null when there is no child.\nfunction hasPath(node, target) {\n  // your code here\n}\n",
   "plan": [
    "You are on the root, 5, and need 12. What do you need from the rest of the path?",
    "So what question do you ask each child?",
    "On a leaf, how do you know whether the path worked?"
   ],
   "hints": [
    "Subtract this node's value from the target: that is what the rest of the path must add up to.",
    "On a leaf (no children), the path works exactly when nothing is left: rest === 0.",
    "Otherwise ask the left child or the right child for the rest. Null returns false."
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
      9
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
      22
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
      8
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
      13
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
       7
      ],
      7
     ],
     "want": true
    },
    {
     "args": [
      [
       1,
       2
      ],
      1
     ],
     "want": false
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "return [toTree(args[0]), ...args.slice(1)];",
   "post": null,
   "solution": [
    "function hasPath(node, target) {",
    "  if (node === null) return false;",
    "  const rest = target - node.val;",
    "  const isLeaf = node.left === null && node.right === null;",
    "  if (isLeaf) return rest === 0;",
    "  return hasPath(node.left, rest) || hasPath(node.right, rest);",
    "}"
   ],
   "why": "hasPath(tree, 8) is false although 5 + 3 = 8. Which line makes sure of that?",
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
    "vars": [
     "rest"
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
     "say": "Each node takes its own value off the target, and passes the rest down to its children.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "pass down what is still needed",
     "arrows": null
    },
    {
     "say": "On a leaf, the path worked if nothing is left to find.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "on a leaf: is the rest 0?",
     "arrows": null
    },
    {
     "say": "The root. Five. The target is twelve. So seven is still needed.",
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
     "gone": [],
     "show": [],
     "vars": {
      "rest": 7
     },
     "box": null,
     "card": "12 − 5 = 7 still needed",
     "arrows": null
    },
    {
     "say": "Five is not a leaf. Line six asks the left child for seven. On three, four is still needed.",
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
     "gone": [],
     "show": [],
     "vars": {
      "rest": 4
     },
     "box": null,
     "card": "7 − 3 = 4 still needed",
     "arrows": null
    },
    {
     "say": "Left again, to the one. Three is still needed. And one is a leaf. What does line five return?",
     "line": 5,
     "ptr": {
      "node": 3
     },
     "hot": [
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "rest": 3
     },
     "box": null,
     "card": "a leaf, and rest = 3 → ?",
     "arrows": null
    },
    {
     "say": "False. The path ended, with three still needed.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      3
     ],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "5 + 3 + 1 = 9, not 12",
     "arrows": null
    },
    {
     "say": "So the or, on line six, tries the right child. Four. Nothing is left, and four is a leaf. True.",
     "line": 5,
     "ptr": {
      "node": 4
     },
     "hot": [],
     "ok": [
      4
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "rest": 0
     },
     "box": null,
     "card": "4 − 4 = 0, on a leaf → true",
     "arrows": null
    },
    {
     "say": "True travels back up. An or stops at the first true. The right side of the root is never visited.",
     "line": 6,
     "ptr": {
      "node": 0
     },
     "hot": [],
     "ok": [
      1,
      0
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "true || … stops early",
     "arrows": null
    },
    {
     "say": "The answer is true. Five, three, four.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "At worst, every node is visited once. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "waiting calls → O(height)",
     "arrows": null
    }
   ]
  },
  {
   "id": "tr7",
   "num": 7,
   "title": "The Longest Walk",
   "fn": "widest",
   "ask": "Return the length of the <b>longest path between any two nodes</b>, counted in <b>steps</b> (edges). The path may or may not pass through the root. An empty tree or a single node gives 0.",
   "spec": "widest(5 with children 3, 8; then 1, 4 and 9) → 4      (1 → 3 → 5 → 8 → 9)",
   "start": "// A node is { val, left, right }. left and right are nodes, or null when there is no child.\nfunction widest(root) {\n  // your code here\n}\n",
   "plan": [
    "The longest path has a highest node, where it turns. If that node is the root, how long is the path, in terms of the two sides?",
    "The turn could be at any node. How could you check every node without walking the tree many times?",
    "You already have a function that visits every node and knows both heights. Which one?"
   ],
   "hints": [
    "Write the height function from problem 2 as a helper inside widest.",
    "Inside it, at every node, left + right is the longest path that turns at this node. Keep the biggest one seen in a variable.",
    "The helper still returns the height. widest returns the biggest path."
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
      ]
     ],
     "want": 4
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
       1
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
       1,
       2,
       null,
       3,
       4,
       null,
       null,
       5,
       null,
       null,
       6
      ]
     ],
     "want": 4
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "return [toTree(args[0]), ...args.slice(1)];",
   "post": null,
   "solution": [
    "function widest(root) {",
    "  let best = 0;",
    "  const height = (node) => {",
    "    if (node === null) return 0;",
    "    const left = height(node.left);",
    "    const right = height(node.right);",
    "    best = Math.max(best, left + right);",
    "    return 1 + Math.max(left, right);",
    "  };",
    "  height(root);",
    "  return best;",
    "}"
   ],
   "why": "The helper returns one thing (the height) and records another (the best path). Why can it not simply return the best path?",
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
     "say": "Every path has a highest node, where it turns. The longest path turning there is the left height plus the right height.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "turning here: left + right",
     "arrows": null
    },
    {
     "say": "The height function already visits every node, and knows both heights. So it can keep the best turn it sees.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "height, and keep the best turn",
     "arrows": null
    },
    {
     "say": "Best starts at zero. Line ten starts the height helper on the root, and it goes down the left side.",
     "line": 10,
     "ptr": {
      "node": 0
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "best": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The one is a leaf. Left is zero, right is zero. A turn here is zero steps. It returns height one.",
     "line": 8,
     "ptr": {
      "node": 3
     },
     "hot": [
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "turn 0 + 0 = 0 · height 1",
     "arrows": null
    },
    {
     "say": "The four is the same. Back on three. Left is one, right is one. A path turning here has two steps. Best is two.",
     "line": 7,
     "ptr": {
      "node": 1
     },
     "hot": [
      3,
      1,
      4
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "best": 2
     },
     "box": null,
     "card": "turning at 3: 1 + 1 = 2",
     "arrows": null
    },
    {
     "say": "And three returns its height. One, plus one. Two.",
     "line": 8,
     "ptr": null,
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "height of 3 = 1 + 1 = 2",
     "arrows": null
    },
    {
     "say": "The right side. On eight, left is zero, and right is one, for the nine. A turn of one. Its height is two.",
     "line": 8,
     "ptr": {
      "node": 2
     },
     "hot": [
      2,
      6
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "turn 0 + 1 = 1 · height 2",
     "arrows": null
    },
    {
     "say": "Back at the root. Left is two. Right is two. What does best become?",
     "line": 7,
     "ptr": {
      "node": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "turning at 5: 2 + 2 = ?",
     "arrows": null
    },
    {
     "say": "Four. One, three, five, eight, nine. Four steps.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      3,
      1,
      0,
      2,
      6
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": {
      "best": 4
     },
     "box": null,
     "card": "1 → 3 → 5 → 8 → 9: 4 steps",
     "arrows": null
    },
    {
     "say": "Line eleven returns best.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One walk of the tree. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "one walk → O(n) time",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "waiting calls → O(height)",
     "arrows": null
    }
   ]
  },
  {
   "id": "tr8",
   "num": 8,
   "title": "Where Two Paths Meet",
   "fn": "meet",
   "ask": "All values in the tree are different, and a and b are both in it. Return the <b>lowest node that has both of them at or below it</b> (their lowest common ancestor). A node counts as being below itself. Return the node, not its value.",
   "spec": "meet(5 with children 3, 8; then 1, 4 and 9, 1, 4) → the node 3      meet(tree, 1, 9) → the node 5",
   "start": "// A node is { val, left, right }. left and right are nodes, or null when there is no child.\n// a and b are values. Return the node where their paths to the root meet.\nfunction meet(node, a, b) {\n  // your code here\n}\n",
   "plan": [
    "Stand on any node. Where can a and b be? List the cases.",
    "If one is on the left side and the other on the right, what is the answer?",
    "What could each side report back, so the node can tell those cases apart?"
   ],
   "hints": [
    "Let the function return \"the node I found\": null if neither value is in this subtree.",
    "If this node is a or b, return it straight away.",
    "Ask both sides. If both report something, this node is the meeting point. Otherwise pass up whichever side reported something."
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
      1,
      4
     ],
     "want": 3
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
      1,
      9
     ],
     "want": 5
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
      3,
      4
     ],
     "want": 3
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
      8,
      9
     ],
     "want": 8
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
      4,
      9
     ],
     "want": 5
    },
    {
     "args": [
      [
       7
      ],
      7,
      7
     ],
     "want": 7
    },
    {
     "args": [
      [
       2,
       1
      ],
      2,
      1
     ],
     "want": 2
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "return [toTree(args[0]), ...args.slice(1)];",
   "post": "return got === undefined ? 'nothing was returned' : got === null ? null : got.val;",
   "solution": [
    "function meet(node, a, b) {",
    "  if (node === null) return null;",
    "  if (node.val === a || node.val === b) return node;",
    "  const left = meet(node.left, a, b);",
    "  const right = meet(node.right, a, b);",
    "  if (left !== null && right !== null) return node;",
    "  return left !== null ? left : right;",
    "}"
   ],
   "why": "Line 3 returns as soon as it finds a or b, without looking below. Why is that still right when the other value is somewhere below this node?",
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
    "box": null,
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Each call reports what it found in its subtree. One of the two nodes, the meeting point, or nothing.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "each side reports what it found",
     "arrows": null
    },
    {
     "say": "If the left side found one, and the right side found the other, this node is where they meet.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "one on each side → this node",
     "arrows": null
    },
    {
     "say": "Looking for one and four. The root is five. Neither of them. Line four searches the left side.",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Three. Neither. It searches its own left side.",
     "line": 4,
     "ptr": {
      "node": 1
     },
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One. That is a. Line three returns this node.",
     "line": 3,
     "ptr": {
      "node": 3
     },
     "hot": [],
     "ok": [
      3
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "found 1 → report it",
     "arrows": null
    },
    {
     "say": "Then the right side of three. Four. That is b. Reported too.",
     "line": 3,
     "ptr": {
      "node": 4
     },
     "hot": [],
     "ok": [
      4
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "found 4 → report it",
     "arrows": null
    },
    {
     "say": "Back on three. The left side found something. The right side found something. What does line six return?",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "left: 1 · right: 4 → ?",
     "arrows": null
    },
    {
     "say": "The three itself. One on each side. This is where the paths meet.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      1
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "one on each side → the node 3",
     "arrows": null
    },
    {
     "say": "Back at the root. The left side reported three. The right side holds neither, and reports null. Line seven passes the three up.",
     "line": 7,
     "ptr": {
      "node": 0
     },
     "hot": [],
     "ok": [],
     "bad": [
      2,
      6
     ],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "left: 3 · right: null → 3",
     "arrows": null
    },
    {
     "say": "The answer is the node three.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "At worst, every node is visited once. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "waiting calls → O(height)",
     "arrows": null
    }
   ]
  }
 ]
};
