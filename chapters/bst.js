window.CHAPTER = {
 "id": "bst",
 "title": "Binary Search Trees",
 "sub": "CHAPTER 15 · SEARCH TREES",
 "key": "burrow-ch-bst",
 "next": {
  "href": "chapter.html?c=heaps",
  "label": "Chapter 16: Heaps"
 },
 "prev": {
  "href": "chapter.html?c=trees",
  "label": "Chapter 14: Binary trees"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "bt0",
   "label": "Welcome",
   "short": "Intro",
   "name": "A tree with one rule",
   "intro": "What makes a binary tree a binary search tree, and what the rule buys you."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "btt1",
   "label": "Theory 1",
   "short": "T1",
   "name": "Compare, pick a side",
   "intro": "Searching an ordered tree throws away a whole side with every look. What it costs, and when it goes wrong. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "btt2",
   "label": "Theory 2",
   "short": "T2",
   "name": "Left, node, right",
   "intro": "The in-order walk reads a search tree in sorted order. One guess."
  }
 ],
 "notes": {
  "w": "<h3>The rule</h3><ul><li><b>Binary search tree (BST):</b> at every node, everything in its left subtree is smaller and everything in its right subtree is bigger.</li>\n      <li><b>The rule covers whole subtrees</b>, not just the two children.</li>\n      <li><b>What it buys:</b> search, insert and delete in O(height), and the values can be read in sorted order.</li></ul>",
  "t1": "<h3>Key ideas</h3><ul><li><b>To search:</b> compare with the node. Equal: found. Smaller: go left. Bigger: go right. Null: not there.</li>\n      <li><b>Every look throws away a whole side</b>, exactly like binary search on a sorted array.</li>\n      <li><b>Cost: O(height).</b> In a balanced tree the height is about log n.</li>\n      <li><b>Inserting sorted values one by one gives one long branch</b>: the height becomes n and search is O(n). Real libraries use\n      self-balancing trees to prevent this; you rarely have to write one in an interview, but you should know why they exist.</li>\n      <li><b>To insert:</b> search for the value; put the new node in the empty spot where the search falls off the tree.</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>In-order walk: left subtree, then the node, then the right subtree.</b></li>\n      <li><b>On a BST, an in-order walk visits the values in sorted order.</b></li>\n      <li><b>\"k-th smallest\", \"next bigger value\", \"is it sorted?\" on a BST → think in-order.</b></li>\n      <li><b>To check that a tree is a BST</b>, checking each node against its two children is not enough: pass down the range\n      (low, high) that each node's value must stay inside.</li></ul>"
 },
 "quiz": {
  "btt1-q1": {
   "ask": "You are looking for 6 and you stand on 3. Which way do you go?",
   "opts": [
    "Right: 6 is bigger than 3",
    "Left: 6 is smaller than 8",
    "Both ways, to be safe"
   ],
   "right": 0,
   "why": "Everything bigger than 3 in this subtree is on its right. The left side holds only smaller values, so it is thrown away."
  },
  "btt2-q1": {
   "ask": "The in-order walk has just read 1, the left child of 3. 1 has no children. What is read next?",
   "opts": [
    "3",
    "6",
    "8"
   ],
   "right": 0,
   "why": "The left side of 3 is finished, so 3 itself is read, and only then its right side."
  },
  "bt1s-q": {
   "ask": "target is 6 and node is on 3. What does the code do?",
   "opts": [
    "node = node.right",
    "node = node.left",
    "return false"
   ],
   "right": 0,
   "why": "6 is not smaller than 3, so line 6 runs: the marker moves to the right child."
  },
  "bt2s-q": {
   "ask": "The node 9 has the range low = 3, high = 8. What does line 3 do?",
   "opts": [
    "Returns false: 9 is not below 8",
    "Nothing: 9 is bigger than 3",
    "Returns true"
   ],
   "right": 0,
   "why": "node.val >= high is true (9 ≥ 8). The 9 sits in the left side of the 8, so it must be smaller than 8."
  },
  "bt3s-q": {
   "ask": "seen becomes 3 on the node 6, and k is 3. What does line 8 do?",
   "opts": [
    "Sets answer to 6",
    "Nothing, the walk goes on",
    "Sets answer to 3"
   ],
   "right": 0,
   "why": "seen === k, so the value of the node being visited, 6, is the k-th smallest."
  },
  "bt4s-q": {
   "ask": "node is on 3. a = 1 is smaller than 3, b = 6 is bigger than 3. What does the code do?",
   "opts": [
    "Returns the node 3",
    "Goes left",
    "Goes right"
   ],
   "right": 0,
   "why": "Neither \"both smaller\" nor \"both bigger\" is true, so line 6 returns this node: the paths part here."
  }
 },
 "problems": [
  {
   "id": "bt1",
   "num": 1,
   "title": "Is It in the Tree?",
   "fn": "has",
   "ask": "The tree is a binary search tree. Return <b>true</b> if target is in it. Look at as few nodes as you can: on a tree of 131,071 nodes you may look at no more than about 100.",
   "spec": "has(8 with children 3, 10; then 1, 6 and 14, 6) → true      has(tree, 7) → false",
   "start": "// A node is { val, left, right }. In this tree, everything to the left of a node is smaller\n// than it, and everything to the right is bigger.\nfunction has(root, target) {\n  // your code here\n}\n",
   "plan": [
    "You stand on the root, 8, and want 6. Which side can you ignore, and why?",
    "What do you do on the next node?",
    "How do you know the target is not in the tree at all?"
   ],
   "hints": [
    "Keep one marker, node, starting on the root. Loop while it is not null.",
    "If target equals node.val, return true. If it is smaller, move to node.left; otherwise to node.right.",
    "If the marker falls off the tree (null), return false."
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
      6
     ],
     "want": true
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
      7
     ],
     "want": false
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
      8
     ],
     "want": true
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
      14
     ],
     "want": true
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
      0
     ],
     "want": false
    },
    {
     "args": [
      [],
      3
     ],
     "want": false
    },
    {
     "args": [
      [
       5
      ],
      5
     ],
     "want": true
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "const n = 131071, a = new Array(n); let v = 0; const go = (i) => { if (i >= n) return; go(2 * i + 1); a[i] = v++; go(2 * i + 2); }; go(0); return [a, 77777];",
    "limit": 1500,
    "label": "a tree of 131,071 nodes",
    "msg": "Correct on the small trees, but it looked at more than 200 nodes of the big one. Compare with the node and go down only one side."
   },
   "prep": "let n = 0; const w = (x) => (x === null ? null : new Proxy(x, { get(t, k) { if (k === 'val' && ++n > 200) throw new Error('more than 200 looks at nodes'); return k === 'left' || k === 'right' ? w(t[k]) : t[k]; } })); return [w(toTree(args[0])), ...args.slice(1)];",
   "post": null,
   "solution": [
    "function has(root, target) {",
    "  let node = root;",
    "  while (node !== null) {",
    "    if (target === node.val) return true;",
    "    if (target < node.val) node = node.left;",
    "    else node = node.right;",
    "  }",
    "  return false;",
    "}"
   ],
   "why": "Why is it safe to never look at the side you did not choose?",
   "world": "A database index is an ordered tree like this. That is how it finds one row among millions in a few steps.",
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
     "say": "Left is smaller, right is bigger. So one comparison tells you which side the target must be on.",
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
     "card": "one comparison picks the side",
     "arrows": null
    },
    {
     "say": "The other side is thrown away without a look. This is binary search, on a tree.",
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
     "card": "binary search, on a tree",
     "arrows": null
    },
    {
     "say": "Looking for six. The marker starts on the root. Eight. Not equal.",
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
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Six is smaller than eight. So it can only be on the left. The whole right side is thrown away.",
     "line": 5,
     "ptr": {
      "node": 1
     },
     "hot": [],
     "ok": [],
     "bad": [
      2,
      6
     ],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "6 < 8 → go left",
     "arrows": null
    },
    {
     "say": "Now on three. Not equal. Six is bigger than three. Which way?",
     "line": 5,
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
     "card": "6 > 3 → ?",
     "arrows": null
    },
    {
     "say": "Right. Line six. The one, on the left, is thrown away.",
     "line": 6,
     "ptr": {
      "node": 4
     },
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
     "card": "6 > 3 → go right",
     "arrows": null
    },
    {
     "say": "The marker is on six. Equal. Line four returns true.",
     "line": 4,
     "ptr": null,
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
     "card": "",
     "arrows": null
    },
    {
     "say": "And for a value that is not there, the marker falls off the bottom, onto null. The loop ends, and line eight returns false.",
     "line": 8,
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
     "card": "falls off the tree → false",
     "arrows": null
    },
    {
     "say": "Each look goes one level down. O of height. In a balanced tree, that is log n.",
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
     "card": "one level per look → O(height)",
     "arrows": null
    },
    {
     "say": "One marker. O of one space.",
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
     "card": "1 marker → O(1) space",
     "arrows": null
    },
    {
     "say": "A database index is an ordered tree like this. That is how it finds one row among millions in a few steps.",
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
     "card": "a database index",
     "arrows": null
    }
   ]
  },
  {
   "id": "bt2",
   "num": 2,
   "title": "Does It Keep the Rule?",
   "fn": "isOrdered",
   "ask": "Return <b>true</b> if the tree is a valid binary search tree: for <b>every</b> node, everything in its left subtree is smaller and everything in its right subtree is bigger. Equal values are not allowed. An empty tree is valid.",
   "spec": "isOrdered(8 with children 3, 10; 3 has children 1 and 9) → false      (the 9 is left of the 8)",
   "start": "// A node is { val, left, right }. In this tree, everything to the left of a node is smaller\n// Hint: a function can take extra parameters with default values.\nfunction isOrdered(node) {\n  // your code here\n}\n",
   "plan": [
    "In the example, every node is bigger than its left child and smaller than its right child. Why is the tree still wrong?",
    "What does a node deep in the tree have to respect, besides its parent?",
    "Walking down, how could you carry that information with you?"
   ],
   "hints": [
    "Give the function two more parameters: low and high, the range this node's value must stay strictly inside. Start with -Infinity and Infinity.",
    "If node.val is not inside the range, return false. Null is fine: return true.",
    "Going left, the node's value becomes the new high. Going right, it becomes the new low. Both sides must be valid."
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
       9
      ]
     ],
     "want": false
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
      ]
     ],
     "want": true
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
       2,
       2
      ]
     ],
     "want": false
    },
    {
     "args": [
      [
       5,
       1,
       7,
       null,
       null,
       6,
       8
      ]
     ],
     "want": true
    },
    {
     "args": [
      [
       5,
       1,
       7,
       null,
       null,
       4,
       8
      ]
     ],
     "want": false
    },
    {
     "args": [
      [
       2,
       1,
       3
      ]
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
    "function isOrdered(node, low = -Infinity, high = Infinity) {",
    "  if (node === null) return true;",
    "  if (node.val <= low || node.val >= high) return false;",
    "  const leftOk = isOrdered(node.left, low, node.val);",
    "  return leftOk && isOrdered(node.right, node.val, high);",
    "}"
   ],
   "why": "Why is it not enough to check that each node is bigger than its left child and smaller than its right child?",
   "world": "After a crash, a database checks its index this way, to be sure the order still holds.",
   "view": {
    "row": [],
    "tree": [
     8,
     3,
     10,
     1,
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
     "say": "Comparing a node with its two children is not enough. A node must respect every ancestor above it.",
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
     "card": "respect every ancestor",
     "arrows": null
    },
    {
     "say": "So each call carries a range. The value must be above low, and below high. Going down narrows it.",
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
     "card": "low < value < high",
     "arrows": null
    },
    {
     "say": "The root. Eight. Its range is everything. Minus infinity, to infinity. Fine.",
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
     "vars": {
      "low": "−∞",
      "high": "∞"
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line four goes left, and passes eight as the new high. Three must be below eight. It is.",
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
     "vars": {
      "low": "−∞",
      "high": 8
     },
     "box": null,
     "card": "left of 8 → high = 8",
     "arrows": null
    },
    {
     "say": "Left again. The one must be below three. Fine. And its empty sides are fine.",
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
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "low": "−∞",
      "high": 3
     },
     "box": null,
     "card": "left of 3 → high = 3",
     "arrows": null
    },
    {
     "say": "Now the right child of three. Nine. Going right, three becomes the low. The high is still eight. Is nine allowed?",
     "line": 3,
     "ptr": {
      "node": 4
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
     "vars": {
      "low": 3,
      "high": 8
     },
     "box": null,
     "card": "3 < 9 < 8 ?",
     "arrows": null
    },
    {
     "say": "No. Nine is bigger than its parent, which looks right. But it sits on the left side of eight, and it is not below eight.",
     "line": 3,
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
     "card": "9 ≥ 8 → false",
     "arrows": null
    },
    {
     "say": "False travels back up. The and, on line five, stops at once. The right side of the root is never checked.",
     "line": 5,
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
     "say": "After a crash, a database checks its index this way, to be sure the order still holds.",
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
     "card": "checking an index is in order",
     "arrows": null
    }
   ]
  },
  {
   "id": "bt3",
   "num": 3,
   "title": "The Third Smallest",
   "fn": "kthSmallest",
   "ask": "The tree is a binary search tree with at least k nodes. Return its <b>k-th smallest value</b> (k = 1 is the smallest). Do not copy the values into an array and sort them.",
   "spec": "kthSmallest(8 with children 3, 10; then 1, 6 and 14, 3) → 6",
   "start": "// A node is { val, left, right }. In this tree, everything to the left of a node is smaller\n// than it, and everything to the right is bigger.\nfunction kthSmallest(root, k) {\n  // your code here\n}\n",
   "plan": [
    "Where in the tree is the smallest value? And the second smallest?",
    "In what order would you have to visit the nodes to meet them from smallest to biggest?",
    "How do you know when you have reached the k-th one?"
   ],
   "hints": [
    "An in-order walk (left side, the node, right side) visits a BST in sorted order.",
    "Keep a counter outside the walking function. Add one each time a node is visited (between the two recursive calls).",
    "When the counter reaches k, remember that node's value, and stop the other calls early."
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
      3
     ],
     "want": 6
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
      1
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
      4
     ],
     "want": 8
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
      6
     ],
     "want": 14
    },
    {
     "args": [
      [
       5
      ],
      1
     ],
     "want": 5
    },
    {
     "args": [
      [
       2,
       1
      ],
      2
     ],
     "want": 2
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*sort\\s*\\(",
     "msg": "No sorting: the tree is already in order. Walk it left, node, right."
    }
   ],
   "big": null,
   "prep": "return [toTree(args[0]), ...args.slice(1)];",
   "post": null,
   "solution": [
    "function kthSmallest(root, k) {",
    "  let seen = 0;",
    "  let answer = null;",
    "  const walk = (node) => {",
    "    if (node === null || answer !== null) return;",
    "    walk(node.left);",
    "    seen++;",
    "    if (seen === k) answer = node.val;",
    "    walk(node.right);",
    "  };",
    "  walk(root);",
    "  return answer;",
    "}"
   ],
   "why": "Lines 7 and 8 sit between the two recursive calls. What would the function return if they were moved above line 6?",
   "world": "Who is in third place? A ranking kept in an ordered tree answers by walking it in order.",
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
    "vars": [
     "seen"
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
     "say": "Left side, then the node, then the right side. On a search tree, that walk meets the values in sorted order.",
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
     "card": "left · node · right = sorted",
     "arrows": null
    },
    {
     "say": "So count the nodes as the walk meets them, and stop at number k.",
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
     "card": "count as you go, stop at k",
     "arrows": null
    },
    {
     "say": "K is three. The walk starts on the root, eight. Line six goes left first, and waits.",
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
     "vars": {
      "seen": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "On three, left first again. On one, its left is empty. So one is the first node to be counted.",
     "line": 7,
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
     "vars": {
      "seen": 1
     },
     "box": null,
     "card": "the smallest: 1",
     "arrows": null
    },
    {
     "say": "One has no right side. Back on three. Its left side is finished. So three is counted now.",
     "line": 7,
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
     "vars": {
      "seen": 2
     },
     "box": null,
     "card": "then its parent: 3",
     "arrows": null
    },
    {
     "say": "Line nine goes to its right side. Six. Its left is empty, so six is counted. What happens on line eight?",
     "line": 8,
     "ptr": {
      "node": 4
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
     "card": "seen becomes 3 → ?",
     "arrows": null
    },
    {
     "say": "Seen is three. That equals k. The answer is six.",
     "line": 8,
     "ptr": null,
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
     "vars": {
      "seen": 3
     },
     "box": null,
     "card": "seen = k → answer = 6",
     "arrows": null
    },
    {
     "say": "From now on, line five stops every call at once. The eight, the ten, the fourteen are never counted.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      2,
      6
     ],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "answer is set → stop early",
     "arrows": null
    },
    {
     "say": "Line twelve returns the answer.",
     "line": 12,
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
     "say": "The walk goes down the height, then counts k nodes. O of height plus k.",
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
     "card": "down, then k nodes → O(h + k)",
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
     "say": "Who is in third place? A ranking kept in an ordered tree answers by walking it in order.",
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
     "card": "who is in third place?",
     "arrows": null
    }
   ]
  },
  {
   "id": "bt4",
   "num": 4,
   "title": "Where the Paths Split",
   "fn": "split",
   "ask": "The tree is a binary search tree, and a and b are both in it. Return the <b>lowest node that has both at or below it</b> (their lowest common ancestor). Return the node, not its value. You solved this for any tree in chapter 14: here the rule lets you walk <b>one path</b>, with no recursion.",
   "spec": "split(8 with children 3, 10; then 1, 6 and 14, 1, 6) → the node 3      split(tree, 1, 14) → the node 8",
   "start": "// A node is { val, left, right }. In this tree, everything to the left of a node is smaller\n// than it, and everything to the right is bigger.\n// a and b are values that are in the tree.\nfunction split(root, a, b) {\n  // your code here\n}\n",
   "plan": [
    "Stand on the root. If a and b are both smaller than it, where is the answer?",
    "And if both are bigger?",
    "What is left, when neither of those is true?"
   ],
   "hints": [
    "Keep one marker, starting on the root.",
    "Both values smaller than the node: go left. Both bigger: go right.",
    "Otherwise the two values are on different sides (or one of them is this node): this node is the answer."
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
      1,
      6
     ],
     "want": 3
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
     "want": 8
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
      3,
      6
     ],
     "want": 3
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
      10,
      14
     ],
     "want": 10
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
      6,
      6
     ],
     "want": 6
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
      14,
      1
     ],
     "want": 8
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "const n = 131071, a = new Array(n); let v = 0; const go = (i) => { if (i >= n) return; go(2 * i + 1); a[i] = v++; go(2 * i + 2); }; go(0); return [a, 77777, 77790];",
    "limit": 1500,
    "label": "a tree of 131,071 nodes",
    "msg": "Correct on the small trees, but it looked at more than 200 nodes of the big one. Use the rule: both smaller go left, both bigger go right."
   },
   "prep": "let n = 0; const w = (x) => (x === null ? null : new Proxy(x, { get(t, k) { if (k === 'val' && ++n > 200) throw new Error('more than 200 looks at nodes'); return k === 'left' || k === 'right' ? w(t[k]) : t[k]; } })); return [w(toTree(args[0])), ...args.slice(1)];",
   "post": "return got === undefined ? 'nothing was returned' : got === null ? null : got.val;",
   "solution": [
    "function split(root, a, b) {",
    "  let node = root;",
    "  while (node !== null) {",
    "    if (a < node.val && b < node.val) node = node.left;",
    "    else if (a > node.val && b > node.val) node = node.right;",
    "    else return node;",
    "  }",
    "  return null;",
    "}"
   ],
   "why": "The else on line 6 also covers the case where a or b equals node.val. Why is the node the right answer then?",
   "world": "In an ordered index, this finds the smallest branch that covers two keys.",
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
     "say": "In a search tree, comparing with the node tells you which side each value is on. No searching needed.",
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
     "card": "compare: which side is each on?",
     "arrows": null
    },
    {
     "say": "While both are on the same side, walk that way. Where they part, that node is the answer.",
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
     "card": "same side → walk · they part → stop",
     "arrows": null
    },
    {
     "say": "Looking for one and six. The marker starts on the root. Eight.",
     "line": 2,
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
     "say": "One is smaller than eight. Six is smaller than eight. Both are on the left. So walk left.",
     "line": 4,
     "ptr": {
      "node": 1
     },
     "hot": [],
     "ok": [],
     "bad": [
      2,
      6
     ],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 < 8 and 6 < 8 → go left",
     "arrows": null
    },
    {
     "say": "Now on three. One is smaller than three. Six is bigger. What does the code do?",
     "line": 4,
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
     "card": "1 < 3, but 6 > 3 → ?",
     "arrows": null
    },
    {
     "say": "Not both smaller. Not both bigger. So they are on different sides, and the paths part here.",
     "line": 6,
     "ptr": null,
     "hot": [
      3,
      4
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
     "box": null,
     "card": "different sides → this node",
     "arrows": null
    },
    {
     "say": "Line six returns the node three.",
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
     "card": "",
     "arrows": null
    },
    {
     "say": "One walk down from the root. O of height.",
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
     "card": "one path down → O(height)",
     "arrows": null
    },
    {
     "say": "One marker, and no waiting calls. O of one space.",
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
     "card": "1 marker → O(1) space",
     "arrows": null
    },
    {
     "say": "In an ordered index, this finds the smallest branch that covers two keys.",
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
     "card": "the smallest branch with both",
     "arrows": null
    }
   ]
  }
 ]
};
