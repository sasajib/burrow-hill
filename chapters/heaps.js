window.CHAPTER = {
 "id": "heaps",
 "title": "Heaps",
 "sub": "CHAPTER 16 · HEAPS",
 "key": "burrow-ch-heaps",
 "next": {
  "href": "index.html#chapters",
  "label": "All chapters"
 },
 "prev": {
  "href": "chapter.html?c=bst",
  "label": "Chapter 15: Search trees"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "hp0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Always the smallest, cheaply",
   "intro": "What a heap is for: the smallest (or biggest) item on demand while new items keep arriving."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "hpt1",
   "label": "Theory 1",
   "short": "T1",
   "name": "A tree in an array",
   "intro": "The heap rule, how the tree is stored in a plain array, and how a push sifts up. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "hpt2",
   "label": "Theory 2",
   "short": "T2",
   "name": "Pop, and the top-k pattern",
   "intro": "How a pop sifts down, what to say about heaps in a JavaScript interview, and the heap of size k. One guess."
  }
 ],
 "notes": {
  "w": "<h3>Why a heap</h3><ul><li><b>A heap gives you the smallest item at once, and lets you add or remove one in O(log n).</b></li>\n      <li>A sorted array also gives the smallest at once, but every insert is O(n).</li>\n      <li><b>Signals:</b> \"the k largest / smallest\", \"the smallest so far, again and again\", \"always process the cheapest next\".</li></ul>",
  "t1": "<h3>Key ideas</h3><ul><li><b>Heap rule (min-heap):</b> every parent is smaller than or equal to its children. So the root is the smallest.</li>\n      <li><b>Left and right are in no order.</b> A heap is only partly sorted, which is why it is cheap to maintain.</li>\n      <li><b>The tree has no gaps</b> (filled level by level, left to right), so it is stored in a plain array.</li>\n      <li><b>Positions:</b> children of i are 2i + 1 and 2i + 2. The parent of i is Math.floor((i − 1) / 2).</li>\n      <li><b>Push = sift up:</b> add at the end, then swap with the parent while the parent is bigger. O(log n).</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>Pop = sift down:</b> take the root, move the last value to the root, then swap it with its <b>smaller</b> child\n      while a child is smaller. O(log n).</li>\n      <li><b>JavaScript has no built-in heap.</b> In an interview say so, then either write push and pop (about 25 lines) or ask to assume a heap class.</li>\n      <li><b>Top-k pattern:</b> to keep the k largest, use a min-heap of size k. Push each item; if the size passes k, pop the smallest.\n      The top is then the k-th largest. Cost O(n log k).</li>\n      <li><b>A max-heap</b> is the same thing with the comparison turned around.</li></ul>"
 },
 "quiz": {
  "hpt1-q1": {
   "ask": "The new 1 was swapped with its parent 3. It now sits under the root, 2. What happens next?",
   "opts": [
    "It swaps with the 2 and becomes the root",
    "It stays: one swap is enough",
    "It swaps with its sibling, the 5"
   ],
   "right": 0,
   "why": "1 is still smaller than its parent, so the rule is still broken. It swaps again, and stops at the root."
  },
  "hpt2-q1": {
   "ask": "3 sits on top. Its children are 5 and 2. Which one must it swap with?",
   "opts": [
    "The 2, the smaller child",
    "The 5, the bigger child",
    "Either one"
   ],
   "right": 0,
   "why": "The child that moves up becomes the parent of the other child, so it has to be the smaller of the two."
  },
  "hp1s-q": {
   "ask": "i is 2 and holds 1. Its parent, at position 0, holds 2. What does the code do?",
   "opts": [
    "Swaps them, and i becomes 0",
    "Breaks out of the loop",
    "Swaps the 1 with the 5"
   ],
   "right": 0,
   "why": "heap[parent] <= heap[i] is false (2 is not ≤ 1), so the loop does not break: lines 7 and 8 swap and move up."
  },
  "hp2s-q": {
   "ask": "i is 2. Its children would be at positions 5 and 6, but heap.length is 5. What does the code do?",
   "opts": [
    "small stays 2, so line 13 returns top",
    "It swaps with position 5",
    "It reads undefined and crashes"
   ],
   "right": 0,
   "why": "Both \"l < heap.length\" and \"r < heap.length\" are false, so small is still i and the function returns."
  },
  "hp3s-q": {
   "ask": "The heap holds 1, 5 and 9, which is more than k = 2. What does heap.pop() remove?",
   "opts": [
    "1, the smallest",
    "9, the largest",
    "5, the middle one"
   ],
   "right": 0,
   "why": "It is a min-heap: the top is always the smallest, and that is the one that cannot be among the 2 largest."
  },
  "hp4s-q": {
   "ask": "The cost so far is 5. The heap holds 4, 5, 6. The next join is 4 + 5 = 9. What is the cost afterwards?",
   "opts": [
    "14",
    "9",
    "20"
   ],
   "right": 0,
   "why": "cost += joined: 5 + 9 = 14. The rope of length 5 has now been paid for twice."
  },
  "hp5s-q": {
   "ask": "3 is popped from the heap. It was the last number of list B. What does the heap hold afterwards?",
   "opts": [
    "Only the 6 from A",
    "6 and null",
    "It is empty"
   ],
   "right": 0,
   "why": "Line 11 is false for list B, so nothing is pushed. The 6 from list A is still waiting in the heap."
  },
  "hp6s-q": {
   "ask": "low holds 2. high holds 5 and 8, so high.size > low.size. What does line 8 do?",
   "opts": [
    "Moves the 5, the top of high, into low",
    "Moves the 8 into low",
    "Nothing"
   ],
   "right": 0,
   "why": "high.pop() returns its smallest value, 5, and that is pushed into low. The halves are balanced again."
  }
 },
 "problems": [
  {
   "id": "hp1",
   "num": 1,
   "title": "A New Arrival",
   "fn": "heapPush",
   "ask": "Add <b>value</b> to the min-heap and <b>return the array</b>. It must still be a valid heap afterwards (every parent ≤ its children). Any valid arrangement is accepted. Do it in O(log n): no sorting.",
   "spec": "heapPush([2, 5, 3, 9, 6], 1) → [1, 5, 2, 9, 6, 3]",
   "start": "// heap is an array holding a min-heap: heap[0] is the smallest, and the children of\n// position i are at 2 * i + 1 and 2 * i + 2.\nfunction heapPush(heap, value) {\n  // your code here\n}\n",
   "plan": [
    "Where is the only place a new value can go without leaving a gap in the tree?",
    "The new value may be smaller than its parent. What fixes that, for those two?",
    "After that fix, where could the rule be broken next? When are you done?"
   ],
   "hints": [
    "Push the value onto the end of the array. Keep its position in i.",
    "Its parent is at Math.floor((i - 1) / 2). If the parent is bigger, swap the two and move i up to the parent.",
    "Stop when the parent is not bigger, or when i reaches 0."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       2,
       5,
       3,
       9,
       6
      ],
      1
     ],
     "want": [
      1,
      5,
      2,
      9,
      6,
      3
     ]
    },
    {
     "args": [
      [],
      4
     ],
     "want": [
      4
     ]
    },
    {
     "args": [
      [
       3
      ],
      5
     ],
     "want": [
      3,
      5
     ]
    },
    {
     "args": [
      [
       3
      ],
      1
     ],
     "want": [
      1,
      3
     ]
    },
    {
     "args": [
      [
       1,
       2,
       3
      ],
      0
     ],
     "want": [
      0,
      1,
      3,
      2
     ]
    },
    {
     "args": [
      [
       1,
       3,
       2,
       7,
       4
      ],
      3
     ],
     "want": [
      1,
      3,
      2,
      7,
      4,
      3
     ]
    },
    {
     "args": [
      [
       2,
       2
      ],
      2
     ],
     "want": [
      2,
      2,
      2
     ]
    }
   ],
   "check": "const h = got; if (!Array.isArray(h)) return 'Return the heap array.'; const exp = [...args[0], args[1]].sort((a, b) => a - b), has = [...h].sort((a, b) => a - b); if (JSON.stringify(exp) !== JSON.stringify(has)) return 'The heap must hold the old values plus the new one.'; for (let i = 1; i < h.length; i++) if (h[(i - 1) >> 1] > h[i]) return 'Heap rule broken: position ' + i + ' (' + h[i] + ') is smaller than its parent.'; return '';",
   "forbid": [
    {
     "re": "\\.\\s*sort\\s*\\(",
     "msg": "No sorting here: the heap does the ordering, and that is the point of the exercise."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function heapPush(heap, value) {",
    "  heap.push(value);",
    "  let i = heap.length - 1;",
    "  while (i > 0) {",
    "    const parent = Math.floor((i - 1) / 2);",
    "    if (heap[parent] <= heap[i]) break;",
    "    [heap[i], heap[parent]] = [heap[parent], heap[i]];",
    "    i = parent;",
    "  }",
    "  return heap;",
    "}"
   ],
   "why": "After a swap, why is it enough to look at the new parent only, and not at the sibling or the children?",
   "view": {
    "row": [],
    "tree": [
     2,
     5,
     3,
     9,
     6,
     1
    ],
    "treeIndex": true,
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     }
    ],
    "vars": [
     "parent"
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
     "say": "The new value goes in the next free spot, at the end of the array. Here, the one, at position five.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "the new value goes at the end",
     "arrows": null
    },
    {
     "say": "Then, while it is smaller than its parent, swap the two. It climbs until the rule holds.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "smaller than the parent → swap",
     "arrows": null
    },
    {
     "say": "Line two pushes the one. Line three remembers where it is. Position five.",
     "line": 3,
     "ptr": {
      "i": 5
     },
     "hot": [
      5
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line five finds the parent. Five minus one, divided by two. Position two. That is the three.",
     "line": 5,
     "ptr": null,
     "hot": [
      5,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": {
      "parent": 2
     },
     "box": null,
     "card": "parent of 5: (5 − 1) / 2 = 2",
     "arrows": null
    },
    {
     "say": "Is three smaller than one? No. So line seven swaps them, and i moves up to position two.",
     "line": 7,
     "ptr": {
      "i": 2
     },
     "hot": [],
     "ok": [
      5
     ],
     "bad": [],
     "set": {
      "2": 1,
      "5": 3
     },
     "gone": [],
     "vars": null,
     "box": null,
     "card": "3 > 1 → swap, i = 2",
     "arrows": null
    },
    {
     "say": "Again. The parent of position two is position zero. The two. And the two is bigger than the one. What happens?",
     "line": 6,
     "ptr": null,
     "hot": [
      2,
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": {
      "parent": 0
     },
     "box": null,
     "card": "parent of 2 is 0 · 2 > 1 → ?",
     "arrows": null
    },
    {
     "say": "Another swap. The one is the root, and i is zero.",
     "line": 8,
     "ptr": {
      "i": 0
     },
     "hot": [],
     "ok": [
      2,
      0
     ],
     "bad": [],
     "set": {
      "0": 1,
      "2": 2
     },
     "gone": [],
     "vars": null,
     "box": null,
     "card": "2 > 1 → swap, i = 0",
     "arrows": null
    },
    {
     "say": "The loop needs i above zero. It ends, and line ten returns the heap.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "At most one swap per level, and there are only log n levels.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "one swap per level → O(log n)",
     "arrows": null
    },
    {
     "say": "Two numbers. O of one extra space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "2 numbers → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "hp2",
   "num": 2,
   "title": "Take the Smallest",
   "fn": "heapPop",
   "ask": "<b>Remove and return the smallest value</b> of the min-heap (it has at least one value). The array must be a valid heap of the remaining values afterwards. Do it in O(log n): no sorting, no shift().",
   "spec": "heapPop([1, 5, 2, 9, 6, 3]) → 1      and the array becomes [2, 5, 3, 9, 6]",
   "start": "// heap is an array holding a min-heap: heap[0] is the smallest, and the children of\n// position i are at 2 * i + 1 and 2 * i + 2.\nfunction heapPop(heap) {\n  // your code here\n}\n",
   "plan": [
    "The smallest value is easy to find. Taking it leaves a hole at the top. Which value can fill it without leaving a gap in the tree?",
    "That value is probably too big for the top. Which of its two children should it swap with, and why that one?",
    "When does the sinking stop?"
   ],
   "hints": [
    "Remember heap[0]. Remove the last value with heap.pop() and put it at position 0 (unless the heap is now empty).",
    "At position i, find the smallest of: the value itself, the left child (2i + 1) and the right child (2i + 2). Check that the children exist.",
    "If the smallest is the value itself, stop. Otherwise swap with that child and continue from there. Return the remembered value."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       5,
       2,
       9,
       6,
       3
      ]
     ],
     "want": {
      "top": 1,
      "heap": [
       2,
       5,
       3,
       9,
       6
      ]
     }
    },
    {
     "args": [
      [
       4
      ]
     ],
     "want": {
      "top": 4,
      "heap": []
     }
    },
    {
     "args": [
      [
       1,
       2
      ]
     ],
     "want": {
      "top": 1,
      "heap": [
       2
      ]
     }
    },
    {
     "args": [
      [
       1,
       3,
       2
      ]
     ],
     "want": {
      "top": 1,
      "heap": [
       2,
       3
      ]
     }
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
     "want": {
      "top": 1,
      "heap": [
       2,
       4,
       3,
       7,
       5,
       6
      ]
     }
    },
    {
     "args": [
      [
       2,
       2,
       2
      ]
     ],
     "want": {
      "top": 2,
      "heap": [
       2,
       2
      ]
     }
    },
    {
     "args": [
      [
       1,
       9,
       4,
       10,
       12,
       6
      ]
     ],
     "want": {
      "top": 1,
      "heap": [
       4,
       9,
       6,
       10,
       12
      ]
     }
    }
   ],
   "check": "const src = args[0], h = got && got.heap; if (!got || !Array.isArray(h)) return 'Something went wrong with the heap array.'; if (got.top !== src[0]) return 'It should return the smallest value, ' + src[0] + '.'; const exp = src.slice(1).sort((a, b) => a - b), has = [...h].sort((a, b) => a - b); if (JSON.stringify(exp) !== JSON.stringify(has)) return 'After the pop the array must hold the other values, each once.'; for (let i = 1; i < h.length; i++) if (h[(i - 1) >> 1] > h[i]) return 'Heap rule broken: position ' + i + ' (' + h[i] + ') is smaller than its parent.'; return '';",
   "forbid": [
    {
     "re": "\\.\\s*sort\\s*\\(",
     "msg": "No sorting here: the heap does the ordering, and that is the point of the exercise."
    },
    {
     "re": "\\.\\s*shift\\s*\\(",
     "msg": "shift() moves every value (O(n)) and breaks the heap. Move the last value to the top and sift it down."
    }
   ],
   "big": null,
   "prep": null,
   "post": "return { top: got, heap: args[0] };",
   "solution": [
    "function heapPop(heap) {",
    "  const top = heap[0];",
    "  const last = heap.pop();",
    "  if (heap.length === 0) return top;",
    "  heap[0] = last;",
    "  let i = 0;",
    "  while (true) {",
    "    let small = i;",
    "    const l = 2 * i + 1;",
    "    const r = 2 * i + 2;",
    "    if (l < heap.length && heap[l] < heap[small]) small = l;",
    "    if (r < heap.length && heap[r] < heap[small]) small = r;",
    "    if (small === i) return top;",
    "    [heap[i], heap[small]] = [heap[small], heap[i]];",
    "    i = small;",
    "  }",
    "}"
   ],
   "why": "Why must the sinking value swap with its SMALLER child?",
   "view": {
    "row": [],
    "tree": [
     1,
     5,
     2,
     9,
     6,
     3
    ],
    "treeIndex": true,
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     }
    ],
    "vars": [
     "top",
     "small"
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
     "say": "The smallest is the root. Take it, and fill the hole with the last value in the array. The shape stays right.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "the last value fills the hole",
     "arrows": null
    },
    {
     "say": "Then let that value sink. Swap it with its smaller child, until no child is smaller.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "swap with the smaller child",
     "arrows": null
    },
    {
     "say": "Line two remembers the top. One.",
     "line": 2,
     "ptr": null,
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": {
      "top": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line three takes the last value, three, off the end. Line five puts it on top.",
     "line": 5,
     "ptr": {
      "i": 0
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "set": {
      "0": 3
     },
     "gone": [
      5
     ],
     "vars": null,
     "box": null,
     "card": "the last value, 3, goes on top",
     "arrows": null
    },
    {
     "say": "Small starts as i. Lines nine to twelve look at both children. Five, and two. Two is the smallest of the three.",
     "line": 12,
     "ptr": null,
     "hot": [
      0,
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": {
      "small": 2
     },
     "box": null,
     "card": "smallest of 3, 5, 2 → the 2",
     "arrows": null
    },
    {
     "say": "Small is not i. So line fourteen swaps the three with the two, and i moves down to position two.",
     "line": 15,
     "ptr": {
      "i": 2
     },
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "set": {
      "0": 2,
      "2": 3
     },
     "gone": [],
     "vars": null,
     "box": null,
     "card": "swap with the smaller child",
     "arrows": null
    },
    {
     "say": "Again. The children of position two would be at positions five and six. But the array now has only five values. What happens?",
     "line": 11,
     "ptr": null,
     "hot": [
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": {
      "small": 2
     },
     "box": null,
     "card": "children at 5 and 6: not there → ?",
     "arrows": null
    },
    {
     "say": "No children. Small is still i. The three has found its place. Line thirteen returns the top. One.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      2,
      3,
      4
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "At most one swap per level. O of log n.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "one swap per level → O(log n)",
     "arrows": null
    },
    {
     "say": "A few numbers. O of one extra space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "a few numbers → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "hp3",
   "num": 3,
   "title": "The Runner-Up",
   "fn": "kthLargest",
   "ask": "Return the <b>k-th largest</b> number in the array (k = 1 is the largest; duplicates count separately). Use the provided <b>Heap</b>, and never let it hold more than k + 1 values.",
   "spec": "kthLargest([5, 2, 9, 1, 7], 2) → 7",
   "start": "// A Heap class is provided. new Heap((a, b) => a - b) keeps the SMALLEST on top;\n// new Heap((a, b) => b - a) keeps the biggest on top.\n// heap.push(x) · heap.pop() removes and returns the top · heap.peek() reads the top · heap.size\nfunction kthLargest(nums, k) {\n  // your code here\n}\n",
   "plan": [
    "Suppose you keep only the k largest numbers seen so far. Which of them is the answer at the end?",
    "A new number arrives. Now you hold k + 1. Which one do you throw away?",
    "Which kind of heap hands you that one at once?"
   ],
   "hints": [
    "Use a min-heap (smallest on top).",
    "Push every number. Whenever the heap holds more than k values, pop: that removes the smallest.",
    "At the end the heap holds the k largest, and its top (peek) is the smallest of those: the k-th largest."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       5,
       2,
       9,
       1,
       7
      ],
      2
     ],
     "want": 7
    },
    {
     "args": [
      [
       3
      ],
      1
     ],
     "want": 3
    },
    {
     "args": [
      [
       4,
       4,
       4
      ],
      2
     ],
     "want": 4
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
     "want": 1
    },
    {
     "args": [
      [
       9,
       8,
       7
      ],
      1
     ],
     "want": 9
    },
    {
     "args": [
      [
       2,
       1
      ],
      2
     ],
     "want": 1
    },
    {
     "args": [
      [
       -1,
       -5,
       -3
      ],
      2
     ],
     "want": -3
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*sort\\s*\\(",
     "msg": "No sorting here: the heap does the ordering, and that is the point of the exercise."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function kthLargest(nums, k) {",
    "  const heap = new Heap((a, b) => a - b);",
    "  for (const x of nums) {",
    "    heap.push(x);",
    "    if (heap.size > k) heap.pop();",
    "  }",
    "  return heap.peek();",
    "}"
   ],
   "why": "To find the k LARGEST, the heap keeps the SMALLEST on top. Why?",
   "view": {
    "row": [
     5,
     2,
     9,
     1,
     7
    ],
    "tree": null,
    "treeIndex": false,
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "x",
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
     "say": "Keep only the k largest numbers seen so far. The smallest of those is the k-th largest.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "keep the k largest so far",
     "arrows": null
    },
    {
     "say": "When there is one too many, the smallest must go. A min heap has it on top.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "one too many → pop the smallest",
     "arrows": null
    },
    {
     "say": "K is two. Line two makes a heap with the smallest on top. Five is pushed.",
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
     "gone": [],
     "vars": null,
     "box": [
      "5"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Two is pushed. The heap holds two values. That is not more than k.",
     "line": 5,
     "ptr": {
      "x": 1
     },
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": [
      "2",
      "5"
     ],
     "card": "size 2 is not > 2",
     "arrows": null
    },
    {
     "say": "Nine is pushed. Three values. One too many. Line five pops the smallest. The two.",
     "line": 5,
     "ptr": {
      "x": 2
     },
     "hot": [
      2
     ],
     "ok": [],
     "bad": [
      1
     ],
     "set": null,
     "gone": [],
     "vars": null,
     "box": [
      "5",
      "9"
     ],
     "card": "size 3 > 2 → pop the 2",
     "arrows": null
    },
    {
     "say": "One is pushed. The heap holds one, five, nine. Which value does line five pop?",
     "line": 5,
     "ptr": {
      "x": 3
     },
     "hot": [
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": [
      "1",
      "5",
      "9"
     ],
     "card": "size 3 > 2 → pop ?",
     "arrows": null
    },
    {
     "say": "The one. It went straight back out.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      3
     ],
     "set": null,
     "gone": [],
     "vars": null,
     "box": [
      "5",
      "9"
     ],
     "card": "pop the 1",
     "arrows": null
    },
    {
     "say": "Seven is pushed. Five, seven, nine. The five is popped.",
     "line": 5,
     "ptr": {
      "x": 4
     },
     "hot": [
      4
     ],
     "ok": [],
     "bad": [
      0
     ],
     "set": null,
     "gone": [],
     "vars": null,
     "box": [
      "7",
      "9"
     ],
     "card": "pop the 5",
     "arrows": null
    },
    {
     "say": "The heap holds the two largest. Seven and nine. Line seven returns the top.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      2,
      4
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "n pushes, on a heap that never holds more than k plus one values. O of n log k.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "n pushes × log k → O(n log k)",
     "arrows": null
    },
    {
     "say": "The heap. O of k space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "the heap → O(k) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "hp4",
   "num": 4,
   "title": "Tying the Ropes",
   "fn": "joinCost",
   "ask": "Join all the ropes into one. Joining two ropes costs the <b>sum of their lengths</b> and makes one rope of that length. Return the <b>smallest total cost</b>. No ropes, or one rope, costs 0.",
   "spec": "joinCost([4, 3, 2, 6]) → 29      (2 + 3 = 5, then 4 + 5 = 9, then 6 + 9 = 15)",
   "start": "// A Heap class is provided. new Heap((a, b) => a - b) keeps the SMALLEST on top;\n// new Heap((a, b) => b - a) keeps the biggest on top.\n// heap.push(x) · heap.pop() removes and returns the top · heap.peek() reads the top · heap.size\nfunction joinCost(ropes) {\n  // your code here\n}\n",
   "plan": [
    "Do [4, 3, 2, 6] by hand. A rope that is joined early gets paid for again in every later join. Which ropes should go first?",
    "After a join there is a new rope. Could it be one of the two shortest next time?",
    "What do you need again and again, while the set keeps changing?"
   ],
   "hints": [
    "Always join the two shortest ropes.",
    "Put all the ropes in a min-heap. Pop two, add them, add the sum to the cost.",
    "Push the joined rope back. Repeat while more than one rope is left."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       4,
       3,
       2,
       6
      ]
     ],
     "want": 29
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
     "want": 0
    },
    {
     "args": [
      [
       1,
       2
      ]
     ],
     "want": 3
    },
    {
     "args": [
      [
       1,
       1,
       1,
       1
      ]
     ],
     "want": 8
    },
    {
     "args": [
      [
       8,
       4,
       6,
       12
      ]
     ],
     "want": 58
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "return [Array.from({ length: 120000 }, (_, i) => 1 + (i * 7919) % 1000)];",
    "limit": 1500,
    "label": "120,000 ropes",
    "msg": "Correct on the small cases, but too slow on the big one. Sorting again after every join is far too much work: a heap gives the two shortest in O(log n)."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function joinCost(ropes) {",
    "  const heap = new Heap((a, b) => a - b);",
    "  for (const r of ropes) heap.push(r);",
    "  let cost = 0;",
    "  while (heap.size > 1) {",
    "    const joined = heap.pop() + heap.pop();",
    "    cost += joined;",
    "    heap.push(joined);",
    "  }",
    "  return cost;",
    "}"
   ],
   "why": "Why does joining the two SHORTEST ropes first give the smallest total?",
   "view": {
    "row": [
     4,
     3,
     2,
     6
    ],
    "tree": null,
    "treeIndex": false,
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [],
    "vars": [
     "cost"
    ],
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
     "say": "A rope joined early is counted again in every later join. So the short ones should go first.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "short ropes first",
     "arrows": null
    },
    {
     "say": "The two shortest, again and again, while new ropes keep arriving. That is the signal for a heap.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "the 2 smallest, again and again",
     "arrows": null
    },
    {
     "say": "Line three pushes every rope into a min heap. Two is on top.",
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
     "gone": [],
     "vars": {
      "cost": 0
     },
     "box": [
      "2",
      "3",
      "4",
      "6"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line six pops the two shortest. Two and three. Joined, five. The cost is five. Line eight pushes the new rope back.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      2,
      1
     ],
     "set": null,
     "gone": [],
     "vars": {
      "cost": 5
     },
     "box": [
      "4",
      "5",
      "6"
     ],
     "card": "2 + 3 = 5 · cost 5",
     "arrows": null
    },
    {
     "say": "Again. The two shortest are now four, and the five we just made. What is the cost after this join?",
     "line": 6,
     "ptr": null,
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "4 + 5 = 9 · cost = 5 + ?",
     "arrows": null
    },
    {
     "say": "Nine. The cost becomes fourteen. The nine goes back in.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      0
     ],
     "set": null,
     "gone": [],
     "vars": {
      "cost": 14
     },
     "box": [
      "6",
      "9"
     ],
     "card": "4 + 5 = 9 · cost 14",
     "arrows": null
    },
    {
     "say": "Two ropes left. Six and nine. Fifteen. The cost is twenty nine.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      3
     ],
     "set": null,
     "gone": [],
     "vars": {
      "cost": 29
     },
     "box": [
      "15"
     ],
     "card": "6 + 9 = 15 · cost 29",
     "arrows": null
    },
    {
     "say": "One rope left. The loop ends, and line ten returns the cost.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "About n joins, each a few heap operations. O of n log n.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "n joins × log n → O(n log n)",
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
     "gone": [],
     "vars": null,
     "box": null,
     "card": "the heap → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "hp5",
   "num": 5,
   "title": "Many Queues, One Line",
   "fn": "mergeSorted",
   "ask": "lists is an array of <b>sorted</b> arrays. Return <b>one sorted array</b> with all their numbers. Do not concatenate and sort: use the provided <b>Heap</b> so that it only ever holds one value per list.",
   "spec": "mergeSorted([[1, 6], [2, 3]]) → [1, 2, 3, 6]",
   "start": "// A Heap class is provided. new Heap((a, b) => a - b) keeps the SMALLEST on top;\n// new Heap((a, b) => b - a) keeps the biggest on top.\n// heap.push(x) · heap.pop() removes and returns the top · heap.peek() reads the top · heap.size\n// Tip: the heap can hold small arrays. new Heap((a, b) => a[0] - b[0]) orders them by their first item.\nfunction mergeSorted(lists) {\n  // your code here\n}\n",
   "plan": [
    "Which numbers could possibly be the smallest of all? How many candidates are there?",
    "After you take one candidate, which number replaces it?",
    "What must you remember about a number in the heap, to find its replacement?"
   ],
   "hints": [
    "Only the first unused number of each list can be the next smallest. Keep exactly those in a min-heap.",
    "Store [value, which list, position] so you know where a value came from.",
    "Pop the smallest, add it to the output, and push the next number from the same list if there is one."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        1,
        6
       ],
       [
        2,
        3
       ]
      ]
     ],
     "want": [
      1,
      2,
      3,
      6
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
       [],
       [
        1
       ]
      ]
     ],
     "want": [
      1
     ]
    },
    {
     "args": [
      [
       [
        1,
        4,
        7
       ],
       [
        2,
        5,
        8
       ],
       [
        3,
        6,
        9
       ]
      ]
     ],
     "want": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
     ]
    },
    {
     "args": [
      [
       [
        5
       ],
       [
        5
       ],
       [
        5
       ]
      ]
     ],
     "want": [
      5,
      5,
      5
     ]
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
     "want": [
      1,
      2,
      3
     ]
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*(sort|flat)\\s*\\(",
     "msg": "No flattening and sorting: the lists are already sorted. Let a heap pick the next smallest."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function mergeSorted(lists) {",
    "  const heap = new Heap((a, b) => a[0] - b[0]);",
    "  lists.forEach((list, which) => {",
    "    if (list.length > 0) heap.push([list[0], which, 0]);",
    "  });",
    "  const out = [];",
    "  while (heap.size > 0) {",
    "    const [value, which, at] = heap.pop();",
    "    out.push(value);",
    "    const next = at + 1;",
    "    if (next < lists[which].length) {",
    "      heap.push([lists[which][next], which, next]);",
    "    }",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "With k lists and n numbers in total, why is this O(n log k) and not O(n log n)?",
   "view": {
    "row": [
     1,
     6
    ],
    "tree": null,
    "treeIndex": false,
    "row2": [
     2,
     3
    ],
    "rowLabel": "A",
    "row2Label": "B",
    "ptrs": [],
    "vars": [],
    "box": {
     "title": "heap",
     "rows": 2
    },
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "The next smallest number is always at the front of one of the lists. So there is one candidate per list.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "one candidate per list",
     "arrows": null
    },
    {
     "say": "Keep the candidates in a min heap. Pop the smallest, and replace it with the next one from the same list.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "pop one, push its neighbour",
     "arrows": null
    },
    {
     "say": "Lines three to five push the front of every list. Each entry remembers its list, and its position.",
     "line": 4,
     "ptr": null,
     "hot": [
      0,
      "d0"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": [
      "1 · from A",
      "2 · from B"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line eight pops the smallest. One, from list A. It goes to the output. And line twelve pushes the next of A. Six.",
     "line": 12,
     "ptr": null,
     "hot": [
      1
     ],
     "ok": [
      0
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": [
      "2 · from B",
      "6 · from A"
     ],
     "card": "out: 1 · push 6",
     "arrows": null
    },
    {
     "say": "Pop again. Two, from list B. Output. The next of B is three.",
     "line": 12,
     "ptr": null,
     "hot": [
      "d1"
     ],
     "ok": [
      "d0"
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": [
      "3 · from B",
      "6 · from A"
     ],
     "card": "out: 1, 2 · push 3",
     "arrows": null
    },
    {
     "say": "The heap holds three and six. Three is popped. But list B has nothing after it. What does the heap hold now?",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [
      "d1"
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "B has run out → ?",
     "arrows": null
    },
    {
     "say": "Only the six. Nothing is pushed when a list has run out.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": [
      "6 · from A"
     ],
     "card": "out: 1, 2, 3",
     "arrows": null
    },
    {
     "say": "Six is popped. The heap is empty, and line fifteen returns the output.",
     "line": 15,
     "ptr": null,
     "hot": [],
     "ok": [
      1
     ],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Every number is pushed and popped once, on a heap of k candidates. O of n log k.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "n numbers × log k",
     "arrows": null
    },
    {
     "say": "The heap holds k entries. The output holds n.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "heap: k · output: n",
     "arrows": null
    }
   ]
  },
  {
   "id": "hp6",
   "num": 6,
   "title": "The Middle, All the Time",
   "fn": "medians",
   "ask": "The numbers arrive one at a time. Return an array with the <b>median after each arrival</b>. The median is the middle value of the sorted numbers, or the <b>average of the two middle values</b> when the count is even.",
   "spec": "medians([5, 2, 8, 1]) → [5, 3.5, 5, 3.5]",
   "start": "// A Heap class is provided. new Heap((a, b) => a - b) keeps the SMALLEST on top;\n// new Heap((a, b) => b - a) keeps the biggest on top.\n// heap.push(x) · heap.pop() removes and returns the top · heap.peek() reads the top · heap.size\nfunction medians(nums) {\n  // your code here\n}\n",
   "plan": [
    "To know the median you only need the one or two values in the middle. Cut the sorted numbers into a small half and a big half. Which value of each half do you need?",
    "Which kind of heap gives you the biggest of the small half? And the smallest of the big half?",
    "A new number arrives. How do you keep the two halves the same size (or the small half one bigger)?"
   ],
   "hints": [
    "Two heaps: low is a max-heap holding the small half, high is a min-heap holding the big half.",
    "For each number: push it into low, then move low's top into high. If high is now bigger than low, move high's top back to low.",
    "If low is bigger, the median is low.peek(). Otherwise it is the average of the two tops."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       5,
       2,
       8,
       1
      ]
     ],
     "want": [
      5,
      3.5,
      5,
      3.5
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
       2,
       3,
       4,
       5
      ]
     ],
     "want": [
      1,
      1.5,
      2,
      2.5,
      3
     ]
    },
    {
     "args": [
      [
       3,
       3,
       3
      ]
     ],
     "want": [
      3,
      3,
      3
     ]
    },
    {
     "args": [
      [
       10,
       1
      ]
     ],
     "want": [
      10,
      5.5
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "return [Array.from({ length: 60000 }, (_, i) => (i * 7919) % 100003)];",
    "limit": 1500,
    "label": "60,000 arrivals",
    "msg": "Correct on the small cases, but too slow on the big one. Sorting everything again after each arrival is O(n² log n). Two heaps keep the middle at hand."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function medians(nums) {",
    "  const low = new Heap((a, b) => b - a);",
    "  const high = new Heap((a, b) => a - b);",
    "  const out = [];",
    "  for (const x of nums) {",
    "    low.push(x);",
    "    high.push(low.pop());",
    "    if (high.size > low.size) low.push(high.pop());",
    "    if (low.size > high.size) out.push(low.peek());",
    "    else out.push((low.peek() + high.peek()) / 2);",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "Every new number goes into low and then low's biggest moves to high. Why not simply push it into whichever heap is smaller?",
   "view": {
    "row": [
     5,
     2,
     8,
     1
    ],
    "tree": null,
    "treeIndex": false,
    "row2": [
     "",
     "",
     "",
     ""
    ],
    "rowLabel": "nums",
    "row2Label": "out",
    "ptrs": [
     {
      "id": "x",
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
     "say": "Keep the small half of the numbers in one heap, and the big half in another.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "a small half and a big half",
     "arrows": null
    },
    {
     "say": "Low keeps its biggest on top. High keeps its smallest on top. So the middle is always at the two tops.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "the two tops are the middle",
     "arrows": null
    },
    {
     "say": "Line two. Low is a max heap. The comparison is turned around, b minus a. Line three. High is an ordinary min heap.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": {
      "low": "–",
      "high": "–"
     },
     "box": null,
     "card": "low: b − a → biggest on top",
     "arrows": null
    },
    {
     "say": "Five arrives. It goes into low. Low hands its biggest to high. Then high is the bigger one, so it hands it back. Low holds the five.",
     "line": 8,
     "ptr": {
      "x": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": {
      "low": "5",
      "high": "–"
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Low is bigger. So the median is its top. Five.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [
      "d0"
     ],
     "bad": [],
     "set": {
      "d0": 5
     },
     "gone": [],
     "vars": null,
     "box": null,
     "card": "low is bigger → its top: 5",
     "arrows": null
    },
    {
     "say": "Two arrives. Into low. Low hands its biggest, the five, to high. Now they are equal. The median is the average of the two tops.",
     "line": 10,
     "ptr": {
      "x": 1
     },
     "hot": [
      1
     ],
     "ok": [
      "d1"
     ],
     "bad": [],
     "set": {
      "d1": 3.5
     },
     "gone": [],
     "vars": {
      "low": "2",
      "high": "5"
     },
     "box": null,
     "card": "(2 + 5) / 2 = 3.5",
     "arrows": null
    },
    {
     "say": "Eight arrives. Into low. Low hands its biggest, the eight, to high. Now high holds two values, and low holds one. What does line eight do?",
     "line": 8,
     "ptr": {
      "x": 2
     },
     "hot": [
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": {
      "low": "2",
      "high": "5, 8"
     },
     "box": null,
     "card": "low: 1 value · high: 2 → ?",
     "arrows": null
    },
    {
     "say": "It moves the smallest of high, the five, back to low. Low is bigger again. The median is its top. Five.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [
      "d2"
     ],
     "bad": [],
     "set": {
      "d2": 5
     },
     "gone": [],
     "vars": {
      "low": "5, 2",
      "high": "8"
     },
     "box": null,
     "card": "low is bigger → its top: 5",
     "arrows": null
    },
    {
     "say": "One arrives. Into low. Low hands its biggest, the five, to high. Equal again. Two plus five, divided by two.",
     "line": 10,
     "ptr": {
      "x": 3
     },
     "hot": [
      3
     ],
     "ok": [
      "d3"
     ],
     "bad": [],
     "set": {
      "d3": 3.5
     },
     "gone": [],
     "vars": {
      "low": "2, 1",
      "high": "5, 8"
     },
     "box": null,
     "card": "(2 + 5) / 2 = 3.5",
     "arrows": null
    },
    {
     "say": "Line twelve returns the medians.",
     "line": 12,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Each arrival is a few heap operations. O of n log n in total.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "log n per arrival → O(n log n)",
     "arrows": null
    },
    {
     "say": "The two heaps hold every number. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "gone": [],
     "vars": null,
     "box": null,
     "card": "2 heaps → O(n) space",
     "arrows": null
    }
   ]
  }
 ]
};
