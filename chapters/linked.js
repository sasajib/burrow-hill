window.CHAPTER = {
 "id": "linked",
 "title": "Linked Lists",
 "sub": "CHAPTER 9 · LINKED LISTS",
 "key": "burrow-ch-linked",
 "next": {
  "href": "chapter.html?c=mixed1",
  "label": "Mixed set 1"
 },
 "prev": {
  "href": "chapter.html?c=queue",
  "label": "Chapter 8: Queues"
 },
 "mock": false,
 "target": null,
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "ll0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Boxes and notes",
   "intro": "What a linked list is, and why interviews like it."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "llt1",
   "label": "Theory 1",
   "short": "T1",
   "name": "Nodes and arrows",
   "intro": "How a list is stored, why reaching an item is slow, and why changing the list is cheap. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "llt2",
   "label": "Theory 2",
   "short": "T2",
   "name": "Never lose the rest",
   "intro": "Three tools: save next, the dummy node, and fast and slow walkers. One guess."
  }
 ],
 "notes": {
  "t1": "<h3>Key ideas</h3><ul><li><b>A node holds a value and the address of the next node</b>: <code>{ val, next }</code>. The last node's <code>next</code> is <code>null</code>.</li>\n      <li><b>You only hold the head.</b> Reaching the k-th item means following k arrows: O(n).</li>\n      <li><b>Adding a node changes two arrows. Removing one changes one arrow.</b> Nothing shifts, so both are O(1) once you stand at the right node.</li>\n      <li><b>Slow to reach, cheap to change.</b> The opposite trade to an array.</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>Save next before you change an arrow.</b> <code>const next = curr.next;</code> Otherwise the rest of the list cannot be reached any more.</li>\n      <li><b>The dummy node</b>: a fake node in front of the head, so that the first real node is not a special case. Return <code>dummy.next</code> at the end.</li>\n      <li><b>Fast and slow walkers</b>: fast takes two steps for each step of slow. When fast finishes, slow is in the middle. In a loop, fast catches slow.</li></ul>"
 },
 "quiz": {
  "llt1-q1": {
   "ask": "A new node goes between two nodes of a linked list. How many arrows have to change?",
   "opts": [
    "Two",
    "One",
    "Every arrow after it"
   ],
   "right": 0,
   "why": "The new node points to the node after it, and the node before it points to the new node. Nothing else moves."
  },
  "llt2-q1": {
   "ask": "fast takes two steps for every step of slow. Where is slow when fast reaches the end of the list?",
   "opts": [
    "In the middle",
    "At the end too",
    "On the second node"
   ],
   "right": 0,
   "why": "slow has covered exactly half the distance fast has. That finds the middle without knowing the length."
  },
  "ll1s-q": {
   "ask": "curr is on the last node. What does line 5 save in next?",
   "opts": [
    "null",
    "The node 2",
    "The node 3"
   ],
   "right": 0,
   "why": "Nothing comes after the last node, so its next is null."
  },
  "ll2s-q": {
   "ask": "fast is on node 3 and moves two nodes forward in 1 → 2 → 3 → 4 → 5. Where does it land?",
   "opts": [
    "On 5, the last node",
    "On 4",
    "Past the end, on null"
   ],
   "right": 0,
   "why": "3 → 4 → 5. fast is on the last node, and slow is on 3."
  },
  "ll3s-q": {
   "ask": "slow has just moved to 4. fast is on 2 and takes two steps: 2 → 3 → ?",
   "opts": [
    "4, the same node as slow",
    "3",
    "1"
   ],
   "right": 0,
   "why": "2 → 3 → 4. fast lands on the node slow is standing on."
  },
  "ll4s-q": {
   "ask": "a is on the node 4 and b is on the node 3. Which node is hooked onto tail?",
   "opts": [
    "3, from list b",
    "4, from list a",
    "Both"
   ],
   "right": 0,
   "why": "3 is smaller, so line 9 hooks it on and b moves forward."
  },
  "ll5s-q": {
   "ask": "lead is on the last node, and trail is 2 nodes behind it. Which node is trail on?",
   "opts": [
    "The node just before the one to remove",
    "The node to remove",
    "The last node"
   ],
   "right": 0,
   "why": "The node to remove is 2nd from the end. trail stays one further back than that, which is exactly where the arrow must be changed."
  },
  "ll6s-q": {
   "ask": "curr is on the first 3, and the next node also holds 3. What does the code do?",
   "opts": [
    "curr points past the repeat, and stays put",
    "curr moves forward",
    "The loop ends"
   ],
   "right": 0,
   "why": "Line 5 unhooks the repeat. curr only moves when the next value is different."
  }
 },
 "problems": [
  {
   "id": "ll1",
   "num": 1,
   "title": "Turn the List Around",
   "fn": "reverse",
   "ask": "Reverse the linked list and return its new head. Do not create new nodes: re-point the arrows of the ones you have.",
   "spec": "reverse(1 → 2 → 3) → 3 → 2 → 1",
   "start": "// A node is { val, next }. head is the first node, or null when the list is empty.\nfunction reverse(head) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: every arrow should point the other way.",
    "Draw 1 → 2 → 3 on paper. Turn the arrow of node 1 around. Can you still get to node 2?",
    "What must you write down before you turn an arrow?",
    "After turning an arrow, which node becomes \"the one behind\" for the next node?"
   ],
   "hints": [
    "Keep three markers: prev (the node behind, starting at null), curr (the node you are on) and next.",
    "In each round: save next = curr.next, then set curr.next = prev.",
    "Then step forward: prev = curr, curr = next. When curr is null, prev is the new head."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       2,
       3
      ]
     ],
     "want": [
      3,
      2,
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
      2,
      1
     ]
    },
    {
     "args": [
      [
       1,
       2,
       3,
       4,
       5
      ]
     ],
     "want": [
      5,
      4,
      3,
      2,
      1
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "return [toList(args[0])];",
   "post": "return got === undefined ? 'nothing was returned' : toArr(got);",
   "solution": [
    "function reverse(head) {",
    "  let prev = null;",
    "  let curr = head;",
    "  while (curr !== null) {",
    "    const next = curr.next;",
    "    curr.next = prev;",
    "    prev = curr;",
    "    curr = next;",
    "  }",
    "  return prev;",
    "}"
   ],
   "why": "Why does the function return prev and not curr?",
   "topic": null,
   "world": "A music player turns its play queue around like this when you ask for reverse order. No song is copied.",
   "view": {
    "row": [
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
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "prev",
      "row": 1
     },
     {
      "id": "curr",
      "row": 1
     },
     {
      "id": "next",
      "row": 1
     }
    ],
    "vars": [],
    "box": null,
    "list": true,
    "nameOnly": false,
    "leftNull": true,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Reversing a list does not move any node. It only turns every arrow around.",
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
     "card": "turn every arrow around",
     "arrows": null
    },
    {
     "say": "But the moment you turn an arrow, you lose the way forward. So save it first.",
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
     "card": "save next before you flip",
     "arrows": null
    },
    {
     "say": "Prev starts as null, because nothing is behind the first node yet. Curr starts on the first node.",
     "line": 3,
     "ptr": {
      "prev": -1,
      "curr": 0
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
     "arrows": {
      "show": [
       "nulL"
      ]
     }
    },
    {
     "say": "Line five saves the rest of the list in next, before we touch any arrow.",
     "line": 5,
     "ptr": {
      "next": 1
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
     "card": "next = curr.next",
     "arrows": null
    },
    {
     "say": "Line six flips the arrow. One now points back to prev, which is null.",
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
     "card": "curr.next = prev",
     "arrows": {
      "hide": [
       "f0"
      ],
      "show": [
       "b0"
      ]
     }
    },
    {
     "say": "Lines seven and eight step both markers forward.",
     "line": 8,
     "ptr": {
      "prev": 0,
      "curr": 1
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
     "say": "Again. Save next. Then flip. Two now points back to one.",
     "line": 6,
     "ptr": {
      "next": 2
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
     "arrows": {
      "hide": [
       "f1"
      ],
      "show": [
       "b1"
      ]
     }
    },
    {
     "say": "Step forward.",
     "line": 8,
     "ptr": {
      "prev": 1,
      "curr": 2
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
     "say": "Curr is on three, the last node. Line five saves next. What is it?",
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
     "card": "next = curr.next = ?",
     "arrows": null
    },
    {
     "say": "Null. Nothing comes after three. Then line six flips its arrow back to two.",
     "line": 6,
     "ptr": {
      "next": 3
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
     "card": "next = null · 3 points back to 2",
     "arrows": {
      "hide": [
       "f2",
       "nulR"
      ],
      "show": [
       "b2"
      ]
     }
    },
    {
     "say": "Step forward. Prev is three. Curr is null, so the loop ends.",
     "line": 8,
     "ptr": {
      "prev": 2,
      "curr": 3
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
     "card": "curr = null → the loop ends",
     "arrows": null
    },
    {
     "say": "Line ten returns prev. The old last node is the new head.",
     "line": 10,
     "ptr": null,
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
     "say": "One pass, and a few steps per node. O of n time.",
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
     "card": "1 pass → O(n) time",
     "arrows": null
    },
    {
     "say": "Three markers, and no new nodes. O of one space.",
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
     "card": "3 markers → O(1) space",
     "arrows": null
    },
    {
     "say": "A music player turns its play queue around like this when you ask for reverse order. No song is copied.",
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
     "card": "reversing a play queue in place",
     "arrows": null
    }
   ]
  },
  {
   "id": "ll2",
   "num": 2,
   "title": "The Middle Node",
   "fn": "middle",
   "ask": "Return the <b>middle node</b> of the list. If there are two middle nodes, return the second one. For an empty list return <b>null</b>. (The tests show the value of the node you return.)",
   "spec": "middle(1 → 2 → 3 → 4 → 5) → the node holding 3",
   "start": "// A node is { val, next }. head is the first node, or null when the list is empty.\nfunction middle(head) {\n  // return a node, not a value\n}\n",
   "plan": [
    "Say the goal in your own words: the node that is halfway along.",
    "With an array you would use length / 2. What do you not have here?",
    "Counting the length first works, but needs two walks. Could two walkers at different speeds do it in one?",
    "If one walker moves twice as fast, where is the slow one when the fast one finishes?"
   ],
   "hints": [
    "Start two markers, slow and fast, on the head.",
    "While fast and fast.next both exist: slow moves one node, fast moves two.",
    "When the loop stops, slow is the middle. Return slow."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       2,
       3,
       4,
       5
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
       4
      ]
     ],
     "want": 3
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
       1,
       2
      ]
     ],
     "want": 2
    },
    {
     "args": [
      []
     ],
     "want": null
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "return [toList(args[0])];",
   "post": "return got === undefined ? 'nothing was returned' : (got ? got.val : null);",
   "solution": [
    "function middle(head) {",
    "  let slow = head;",
    "  let fast = head;",
    "  while (fast !== null && fast.next !== null) {",
    "    slow = slow.next;",
    "    fast = fast.next.next;",
    "  }",
    "  return slow;",
    "}"
   ],
   "why": "Why does the loop check both fast and fast.next before moving?",
   "topic": null,
   "world": "Finding the middle without counting is how merge sort splits a linked list in two.",
   "view": {
    "row": [
     1,
     2,
     3,
     4,
     5
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
      "id": "slow",
      "row": 1
     },
     {
      "id": "fast",
      "row": 1
     }
    ],
    "vars": [],
    "box": null,
    "list": true,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "You cannot jump to the middle of a list. And you do not know its length without walking it.",
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
     "card": "no index, and no length",
     "arrows": null
    },
    {
     "say": "So send two walkers. One at double speed. When the fast one finishes, the slow one is halfway.",
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
     "card": "fast finishes → slow is halfway",
     "arrows": null
    },
    {
     "say": "Both markers start on the first node.",
     "line": 3,
     "ptr": {
      "slow": 0,
      "fast": 0
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
     "say": "Line four checks that fast can take two more steps. It can.",
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
     "card": "fast and fast.next exist → go",
     "arrows": null
    },
    {
     "say": "Slow takes one step. Fast takes two.",
     "line": 6,
     "ptr": {
      "slow": 1,
      "fast": 2
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
     "say": "Again. Slow takes one step, and fast takes two. Where is fast now?",
     "line": 6,
     "ptr": {
      "slow": 2
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
     "card": "fast: two steps from 3 → ?",
     "arrows": null
    },
    {
     "say": "On the last node. And slow is on three.",
     "line": 6,
     "ptr": {
      "fast": 4
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
     "card": "fast on 5 · slow on 3",
     "arrows": null
    },
    {
     "say": "Line four again. Fast has no next node. So the loop stops.",
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
     "card": "fast.next is null → stop",
     "arrows": null
    },
    {
     "say": "Line eight returns slow. The node holding three. The middle.",
     "line": 8,
     "ptr": null,
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
     "say": "One pass. O of n time.",
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
     "card": "1 pass → O(n) time",
     "arrows": null
    },
    {
     "say": "Two markers. O of one space.",
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
     "card": "2 markers → O(1) space",
     "arrows": null
    },
    {
     "say": "Finding the middle without counting is how merge sort splits a linked list in two.",
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
     "card": "splitting a list for merge sort",
     "arrows": null
    }
   ]
  },
  {
   "id": "ll3",
   "num": 3,
   "title": "Round and Round",
   "fn": "hasCycle",
   "ask": "Return <b>true</b> if following the arrows ever brings you back to a node you have already visited, and <b>false</b> if the list ends at null. (In the tests, the second number is the <b>position</b>, counting from 0, of the node the last node points back to; -1 means no loop. Your function only receives the head.)",
   "spec": "hasCycle(1 → 2 → 3 → 4 → back to 2) → true      hasCycle(1 → 2 → 3 → null) → false",
   "start": "// A node is { val, next }. head is the first node, or null when the list is empty.\nfunction hasCycle(head) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: does this list ever end?",
    "If you just walk and wait for null, what happens when there is a loop?",
    "A set of visited nodes works, but uses O(n) memory. What happens to two runners on a round track if one is faster?",
    "And if the track is not round, what does the faster runner reach?"
   ],
   "hints": [
    "Start slow and fast on the head. slow moves one node per round, fast moves two.",
    "If fast or fast.next becomes null, the list ends: return false.",
    "If slow and fast are ever the same node (compare with ===), return true."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       2,
       3,
       4
      ],
      1
     ],
     "want": true
    },
    {
     "args": [
      [
       1,
       2,
       3,
       4
      ],
      -1
     ],
     "want": false
    },
    {
     "args": [
      [],
      -1
     ],
     "want": false
    },
    {
     "args": [
      [
       1
      ],
      0
     ],
     "want": true
    },
    {
     "args": [
      [
       1
      ],
      -1
     ],
     "want": false
    },
    {
     "args": [
      [
       1,
       2
      ],
      0
     ],
     "want": true
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "const h = toList(args[0]); if (args[1] >= 0) { let t = h, c = h; while (t.next) t = t.next; for (let i = 0; i < args[1]; i++) c = c.next; t.next = c; } return [h];",
   "post": null,
   "solution": [
    "function hasCycle(head) {",
    "  let slow = head;",
    "  let fast = head;",
    "  while (fast !== null && fast.next !== null) {",
    "    slow = slow.next;",
    "    fast = fast.next.next;",
    "    if (slow === fast) return true;",
    "  }",
    "  return false;",
    "}"
   ],
   "why": "Why can fast never jump over slow without landing on it?",
   "topic": null,
   "world": "This catches a real bug. A chain of redirects that leads back to itself would loop for ever.",
   "view": {
    "row": [
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
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "slow",
      "row": 1
     },
     {
      "id": "fast",
      "row": 1
     }
    ],
    "vars": [],
    "box": null,
    "list": true,
    "nameOnly": false,
    "leftNull": false,
    "cycle": 1,
    "skips": []
   },
   "steps": [
    {
     "say": "In a list with a loop, a walker never reaches null. It goes round for ever.",
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
     "card": "a loop never reaches null",
     "arrows": null
    },
    {
     "say": "So send a slow walker and a fast one. Inside a loop, the fast one must catch the slow one from behind.",
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
     "card": "in a loop, fast catches slow",
     "arrows": null
    },
    {
     "say": "Both markers start on the first node.",
     "line": 3,
     "ptr": {
      "slow": 0,
      "fast": 0
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
     "say": "Slow steps once, to two. Fast steps twice, to three. Not the same node.",
     "line": 7,
     "ptr": {
      "slow": 1,
      "fast": 2
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
     "card": "slow on 2 · fast on 3",
     "arrows": null
    },
    {
     "say": "Slow steps to three. Fast steps to four, and then follows the arrow back round, to two.",
     "line": 7,
     "ptr": {
      "slow": 2,
      "fast": 1
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
     "card": "slow on 3 · fast on 2",
     "arrows": null
    },
    {
     "say": "Once more. Slow moves to four. Fast takes two steps from two. Where does it land?",
     "line": 6,
     "ptr": {
      "slow": 3
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
     "card": "fast: two steps from 2 → ?",
     "arrows": null
    },
    {
     "say": "On four. Fast has caught slow from behind. Line seven sees the same node, and returns true.",
     "line": 7,
     "ptr": {
      "fast": 3
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
     "card": "same node → a loop",
     "arrows": null
    },
    {
     "say": "Fast gains one node on slow at every step, so it catches up within one lap. O of n time.",
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
     "card": "fast gains 1 per step → O(n) time",
     "arrows": null
    },
    {
     "say": "Two markers, and no set of visited nodes. O of one space.",
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
     "card": "2 markers → O(1) space",
     "arrows": null
    },
    {
     "say": "This catches a real bug. A chain of redirects that leads back to itself would loop for ever.",
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
     "card": "redirects that loop for ever",
     "arrows": null
    }
   ]
  },
  {
   "id": "ll4",
   "num": 4,
   "title": "Zip Two Lists",
   "fn": "mergeLists",
   "ask": "Both lists are sorted. Join them into <b>one sorted list</b> by re-hooking the existing nodes, and return its head.",
   "spec": "mergeLists(1 → 4 → 7, 2 → 3) → 1 → 2 → 3 → 4 → 7",
   "start": "// A node is { val, next }. head is the first node, or null when the list is empty.\n// a and b are the heads of two sorted lists.\nfunction mergeLists(a, b) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: one sorted chain made from the nodes of two sorted chains.",
    "Do it by hand for 1 → 4 → 7 and 2 → 3. Which node is first? Which is hooked on after it?",
    "The first node of the answer could come from either list. How can you avoid a special case for it?",
    "When one list runs out, how much work is it to attach the rest of the other?"
   ],
   "hints": [
    "Make a dummy node and a marker tail that starts on it. tail is always the last node of the new list.",
    "While both lists have nodes: hook the smaller front node onto tail.next, move that list forward, then move tail forward.",
    "After the loop, hook on whichever list is not empty. Return dummy.next."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       4,
       7
      ],
      [
       2,
       3
      ]
     ],
     "want": [
      1,
      2,
      3,
      4,
      7
     ]
    },
    {
     "args": [
      [],
      []
     ],
     "want": []
    },
    {
     "args": [
      [
       1
      ],
      []
     ],
     "want": [
      1
     ]
    },
    {
     "args": [
      [],
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
       1,
       1
      ],
      [
       1
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
       5
      ],
      [
       1,
       2
      ]
     ],
     "want": [
      1,
      2,
      5
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "return [toList(args[0]), toList(args[1])];",
   "post": "return got === undefined ? 'nothing was returned' : toArr(got);",
   "solution": [
    "function mergeLists(a, b) {",
    "  const dummy = { val: 0, next: null };",
    "  let tail = dummy;",
    "  while (a !== null && b !== null) {",
    "    if (a.val <= b.val) {",
    "      tail.next = a;",
    "      a = a.next;",
    "    } else {",
    "      tail.next = b;",
    "      b = b.next;",
    "    }",
    "    tail = tail.next;",
    "  }",
    "  tail.next = a !== null ? a : b;",
    "  return dummy.next;",
    "}"
   ],
   "why": "Line 14 attaches the rest of a list in one step, however long it is. Why is that enough?",
   "topic": null,
   "world": "Re-hooking nodes like this is the heart of merge sort on a linked list. Nothing is copied.",
   "view": {
    "row": [
     1,
     4,
     7
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     2,
     3
    ],
    "rowLabel": "a",
    "row2Label": "b",
    "ptrs": [
     {
      "id": "a",
      "row": 1
     },
     {
      "id": "b",
      "row": 2
     }
    ],
    "vars": [],
    "box": {
     "title": "new list",
     "rows": 2
    },
    "list": false,
    "nameOnly": true,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "The same idea as merging two sorted arrays. The smallest unused node is at the front of one of the lists.",
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
     "card": "take the smaller front node",
     "arrows": null
    },
    {
     "say": "But nothing is copied. Each node is simply hooked onto the end of the new list.",
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
     "card": "no copying: just re-hook nodes",
     "arrows": null
    },
    {
     "say": "Line two makes a dummy node. A fake first node, so that the real first node needs no special case. Tail marks the end of the new list.",
     "line": 3,
     "ptr": {
      "a": 0,
      "b": 0
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
     "box": [],
     "card": "dummy: a fake first node",
     "arrows": null
    },
    {
     "say": "Compare the two fronts. One and two. One is smaller. Line six hooks it onto tail, and a moves on.",
     "line": 6,
     "ptr": {
      "a": 1
     },
     "hot": [
      0,
      "d0"
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
      "1"
     ],
     "card": "1 against 2 → take 1",
     "arrows": null
    },
    {
     "say": "Four against two. Two is hooked on, and b moves on.",
     "line": 9,
     "ptr": {
      "b": 1
     },
     "hot": [
      1,
      "d0"
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
      "1 → 2"
     ],
     "card": "4 against 2 → take 2",
     "arrows": null
    },
    {
     "say": "Four against three. Which node is hooked on next?",
     "line": 5,
     "ptr": null,
     "hot": [
      1,
      "d1"
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
     "card": "4 against 3 → ?",
     "arrows": null
    },
    {
     "say": "Three. And now b has run out, so the loop stops.",
     "line": 9,
     "ptr": {
      "b": 2
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
     "box": [
      "1 → 2 → 3"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line fourteen hooks on whatever is left. The rest of a. Four and seven come along in one step, because they are already linked.",
     "line": 14,
     "ptr": null,
     "hot": [],
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
     "vars": null,
     "box": [
      "1 → 2 → 3",
      "→ 4 → 7"
     ],
     "card": "hook on the rest of a",
     "arrows": null
    },
    {
     "say": "Line fifteen returns dummy dot next. The real first node.",
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
     "say": "One step per node. O of n plus m time.",
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
     "card": "one node per step → O(n + m)",
     "arrows": null
    },
    {
     "say": "No new nodes, except the dummy. O of one space.",
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
     "card": "only the dummy is new → O(1) space",
     "arrows": null
    },
    {
     "say": "Re-hooking nodes like this is the heart of merge sort on a linked list. Nothing is copied.",
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
     "card": "merge sort on a linked list",
     "arrows": null
    }
   ]
  },
  {
   "id": "ll5",
   "num": 5,
   "title": "Second From the End",
   "fn": "removeFromEnd",
   "ask": "Remove the <b>k-th node from the end</b> of the list and return the head. k = 1 means the last node. You can assume 1 ≤ k ≤ the length of the list. Do it in one pass.",
   "spec": "removeFromEnd(1 → 2 → 3 → 4, 2) → 1 → 2 → 4",
   "start": "// A node is { val, next }. head is the first node, or null when the list is empty.\nfunction removeFromEnd(head, k) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: unhook one node, counted from the back.",
    "To unhook a node, which other node do you need to be standing on?",
    "You cannot walk backwards, and you do not know the length. How could two markers, a fixed distance apart, find the place?",
    "What if the node to remove is the head? What would give even the head a node before it?"
   ],
   "hints": [
    "Put a dummy node in front of the head. Start two markers, lead and trail, on the dummy.",
    "Move lead forward k nodes. Then move both together until lead is on the last node.",
    "trail is now just before the node to remove: set trail.next = trail.next.next. Return dummy.next."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       2,
       3,
       4
      ],
      2
     ],
     "want": [
      1,
      2,
      4
     ]
    },
    {
     "args": [
      [
       1
      ],
      1
     ],
     "want": []
    },
    {
     "args": [
      [
       1,
       2
      ],
      1
     ],
     "want": [
      1
     ]
    },
    {
     "args": [
      [
       1,
       2
      ],
      2
     ],
     "want": [
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
       5
      ],
      5
     ],
     "want": [
      2,
      3,
      4,
      5
     ]
    },
    {
     "args": [
      [
       1,
       2,
       3
      ],
      1
     ],
     "want": [
      1,
      2
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "return [toList(args[0]), args[1]];",
   "post": "return got === undefined ? 'nothing was returned' : toArr(got);",
   "solution": [
    "function removeFromEnd(head, k) {",
    "  const dummy = { val: 0, next: head };",
    "  let lead = dummy;",
    "  let trail = dummy;",
    "  for (let i = 0; i < k; i++) lead = lead.next;",
    "  while (lead.next !== null) {",
    "    lead = lead.next;",
    "    trail = trail.next;",
    "  }",
    "  trail.next = trail.next.next;",
    "  return dummy.next;",
    "}"
   ],
   "why": "Try removeFromEnd(1 → 2, 2) by hand. Why would the code break without the dummy node?",
   "topic": null,
   "world": "Keeping the last few lines of a long log works like this. One marker runs a fixed distance ahead of the other.",
   "view": {
    "row": [
     "D",
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
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "trail",
      "row": 1
     },
     {
      "id": "lead",
      "row": 1
     }
    ],
    "vars": [],
    "box": null,
    "list": true,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": [
     2
    ]
   },
   "steps": [
    {
     "say": "To remove a node, you must stand on the node just before it. But counting from the end needs the length.",
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
     "card": "need the node before the target",
     "arrows": null
    },
    {
     "say": "So send one marker k nodes ahead, and then walk both together. When the leader reaches the end, the follower is in place.",
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
     "card": "a gap of k between two markers",
     "arrows": null
    },
    {
     "say": "A dummy node, D, goes in front, so that even the first real node has a node before it. Both markers start there.",
     "line": 4,
     "ptr": {
      "trail": 0,
      "lead": 0
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
     "box": null,
     "card": "dummy: a fake node in front",
     "arrows": null
    },
    {
     "say": "Line five sends lead ahead by k nodes. K is two.",
     "line": 5,
     "ptr": {
      "lead": 2
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
     "card": "lead is 2 nodes ahead",
     "arrows": null
    },
    {
     "say": "Now they walk together, one step each. The gap stays at two.",
     "line": 8,
     "ptr": {
      "lead": 3,
      "trail": 1
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
     "say": "Another step. Lead is now on the last node. Where is trail?",
     "line": 6,
     "ptr": {
      "lead": 4
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
     "card": "lead is last → trail is ?",
     "arrows": null
    },
    {
     "say": "Just before the node to remove. Exactly where we need to stand.",
     "line": 8,
     "ptr": {
      "trail": 2
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
     "card": "trail is just before the target",
     "arrows": null
    },
    {
     "say": "Line ten points trail past the next node, straight to the one after it. Three is no longer in the list.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [],
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
     "card": "trail.next = trail.next.next",
     "arrows": {
      "hide": [
       "f2"
      ],
      "show": [
       "s2"
      ]
     }
    },
    {
     "say": "Line eleven returns dummy dot next. The real head.",
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
     "say": "One pass. O of n time.",
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
     "card": "1 pass → O(n) time",
     "arrows": null
    },
    {
     "say": "Two markers and a dummy. O of one space.",
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
     "card": "2 markers → O(1) space",
     "arrows": null
    },
    {
     "say": "Keeping the last few lines of a long log works like this. One marker runs a fixed distance ahead of the other.",
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
     "card": "the last k lines of a long log",
     "arrows": null
    }
   ]
  },
  {
   "id": "ll6",
   "num": 6,
   "title": "No Repeats",
   "fn": "removeRepeats",
   "ask": "The list is sorted. Remove every repeated value so that each value appears once, and return the head.",
   "spec": "removeRepeats(1 → 1 → 2 → 3 → 3) → 1 → 2 → 3",
   "start": "// A node is { val, next }. head is the first node, or null when the list is empty.\nfunction removeRepeats(head) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: keep the first node of each value and unhook the others.",
    "Because the list is sorted, where do repeats sit?",
    "Standing on a node, how do you unhook the node right after it?",
    "After unhooking, should you move forward straight away? Think about 1 → 1 → 1."
   ],
   "hints": [
    "Walk with one marker, curr, starting on the head.",
    "If curr.val equals curr.next.val, unhook the next node: curr.next = curr.next.next. Do not move curr.",
    "Otherwise move curr forward. Stop when curr or curr.next is null."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       1,
       2,
       3,
       3
      ]
     ],
     "want": [
      1,
      2,
      3
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
       1
      ]
     ],
     "want": [
      1
     ]
    },
    {
     "args": [
      [
       1,
       1,
       1
      ]
     ],
     "want": [
      1
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
      2,
      3
     ]
    },
    {
     "args": [
      [
       1,
       1,
       2,
       2
      ]
     ],
     "want": [
      1,
      2
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "return [toList(args[0])];",
   "post": "return got === undefined ? 'nothing was returned' : toArr(got);",
   "solution": [
    "function removeRepeats(head) {",
    "  let curr = head;",
    "  while (curr !== null && curr.next !== null) {",
    "    if (curr.val === curr.next.val) {",
    "      curr.next = curr.next.next;",
    "    } else {",
    "      curr = curr.next;",
    "    }",
    "  }",
    "  return head;",
    "}"
   ],
   "why": "Why does curr stay where it is after unhooking a node?",
   "topic": null,
   "world": "A sorted contact list is cleaned of repeats like this, just by re-pointing arrows.",
   "view": {
    "row": [
     1,
     1,
     2,
     3,
     3
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
      "id": "curr",
      "row": 1
     }
    ],
    "vars": [],
    "box": null,
    "list": true,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": [
     0,
     3
    ]
   },
   "steps": [
    {
     "say": "The list is sorted, so repeats sit right next to each other.",
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
     "card": "sorted: repeats are neighbours",
     "arrows": null
    },
    {
     "say": "And removing a node from a list is one move. Point the node before it, past it.",
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
     "card": "remove = point past it",
     "arrows": null
    },
    {
     "say": "Curr starts on the first node.",
     "line": 2,
     "ptr": {
      "curr": 0
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
     "say": "Line four compares this node with the next one. One and one. A repeat.",
     "line": 4,
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
     "card": "1 = 1 → a repeat",
     "arrows": null
    },
    {
     "say": "Line five points curr past the repeat. Curr itself does not move, because the node after might be a repeat too.",
     "line": 5,
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
     "vars": null,
     "box": null,
     "card": "curr.next = curr.next.next",
     "arrows": {
      "hide": [
       "f0"
      ],
      "show": [
       "s0"
      ]
     }
    },
    {
     "say": "Now the next node holds two. Different. So line seven moves curr forward.",
     "line": 7,
     "ptr": {
      "curr": 2
     },
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
     "card": "1 ≠ 2 → move on",
     "arrows": null
    },
    {
     "say": "Two and three are different as well. Move on.",
     "line": 7,
     "ptr": {
      "curr": 3
     },
     "hot": [
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
     "say": "Three and three. What happens?",
     "line": 4,
     "ptr": null,
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
     "vars": null,
     "box": null,
     "card": "3 = 3 → ?",
     "arrows": null
    },
    {
     "say": "The arrow skips the repeat, and now points to null.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      4
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "the repeat is unhooked",
     "arrows": {
      "hide": [
       "f3",
       "f4"
      ],
      "show": [
       "s3"
      ]
     }
    },
    {
     "say": "Curr has no next node, so the loop ends. Line ten returns the same head.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
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
     "card": "",
     "arrows": null
    },
    {
     "say": "One pass. O of n time.",
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
     "card": "1 pass → O(n) time",
     "arrows": null
    },
    {
     "say": "Nothing new is built. O of one space.",
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
     "card": "in place → O(1) space",
     "arrows": null
    },
    {
     "say": "A sorted contact list is cleaned of repeats like this, just by re-pointing arrows.",
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
     "card": "cleaning a sorted contact list",
     "arrows": null
    }
   ]
  }
 ]
};
