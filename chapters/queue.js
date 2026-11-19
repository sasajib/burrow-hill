window.CHAPTER = {
 "id": "queue",
 "title": "Queues",
 "sub": "CHAPTER 8 · QUEUES",
 "key": "burrow-ch-queue",
 "next": {
  "href": "chapter.html?c=linked",
  "label": "Chapter 9: Linked lists"
 },
 "prev": {
  "href": "chapter.html?c=stack",
  "label": "Chapter 7: Stacks"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "qu0",
   "label": "Welcome",
   "short": "Intro",
   "name": "The line",
   "intro": "What a queue is, in twenty seconds."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "qut1",
   "label": "Theory",
   "short": "T1",
   "name": "First in, first out",
   "intro": "Join at the back, leave from the front, and the trap in JavaScript. One guess."
  }
 ],
 "notes": {
  "t1": "<h3>Key ideas</h3><ul><li><b>A queue is a line.</b> Items join at the back and leave from the front. First in, first out.</li>\n      <li><b>In JavaScript, <code>push</code> adds to the back in O(1), but <code>shift</code> removes the front in O(n)</b>, because every other item slides down.</li>\n      <li><b>The fix: keep an index, <code>head</code>.</b> To leave the queue, move head forward. Nothing is deleted; everything before head is finished.</li>\n      <li><b>When to reach for it:</b> arrival order matters, and later, searching level by level in trees and graphs.</li></ul>"
 },
 "quiz": {
  "qut1-q1": {
   "ask": "A queue holds 100,000 items in an array. Which way of removing the front item is cheaper?",
   "opts": [
    "Move one marker (head) forward",
    "shift(), which slides every other item down",
    "They cost the same"
   ],
   "right": 0,
   "why": "Moving a marker is one step. shift() moves every remaining item, so it costs one step per item."
  },
  "qu1s-q": {
   "ask": "The new arrival is at minute 7 and span is 3. head is on the visitor from minute 6. Does head move?",
   "opts": [
    "No, 6 is not before 4",
    "Yes, by one",
    "Yes, by two"
   ],
   "right": 0,
   "why": "Only visitors before minute 4 are too old. 6 still counts."
  },
  "qu2s-q": {
   "ask": "inbox holds 3 and outbox holds 2. A take arrives. What happens?",
   "opts": [
    "Pop 2 from outbox; no pouring",
    "Pour 3 across first, then pop",
    "Pop 3 from inbox"
   ],
   "right": 0,
   "why": "The outbox is not empty, so line 9 skips the pour. Pouring now would put 3 on top of 2 and break the order."
  }
 },
 "problems": [
  {
   "id": "qu1",
   "num": 1,
   "title": "Recent Visitors",
   "fn": "recentCounts",
   "ask": "Each number is the time a visitor arrived, in order. For every visitor, return how many visitors arrived in the last <b>span</b> minutes, <b>including</b> that visitor. A visitor at time t counts for a later time now if t ≥ now − span.",
   "spec": "recentCounts([1, 2, 6, 7, 8], 3) → [1, 2, 1, 2, 3]",
   "start": "// times is sorted, earliest first. span is a positive number.\nfunction recentCounts(times, span) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: for each arrival, the number of arrivals that are still recent.",
    "Do [1, 2, 6, 7, 8] with span 3 by hand. When 6 arrives, which earlier visitors no longer count?",
    "Once a visitor is too old for one arrival, can they ever count for a later one?",
    "So visitors stop counting in the same order they arrived. What structure is that, and what marks its front?"
   ],
   "hints": [
    "The visitors that still count form a queue: they joined in order and they leave in order.",
    "Keep an index head for the oldest visitor that still counts. For each new arrival, move head forward while times[head] is too old.",
    "The answer for arrival i is the number of visitors from head to i: i - head + 1."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       2,
       6,
       7,
       8
      ],
      3
     ],
     "want": [
      1,
      2,
      1,
      2,
      3
     ]
    },
    {
     "args": [
      [],
      5
     ],
     "want": []
    },
    {
     "args": [
      [
       4
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
       2,
       3,
       4
      ],
      10
     ],
     "want": [
      1,
      2,
      3,
      4
     ]
    },
    {
     "args": [
      [
       1,
       5,
       9
      ],
      3
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
       1,
       4,
       7
      ],
      3
     ],
     "want": [
      1,
      2,
      2
     ]
    },
    {
     "args": [
      [
       2,
       2,
       2
      ],
      1
     ],
     "want": [
      1,
      2,
      3
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "const n = 150000; return [Array.from({ length: n }, (_, i) => i), n];",
    "limit": 1500,
    "label": "150,000 visitors, a very long span",
    "msg": "Correct on the small cases, but too slow on the big one. Counting back from every visitor (or calling shift) is O(n²) here. Move a head index forward."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function recentCounts(times, span) {",
    "  const out = [];",
    "  let head = 0;",
    "  for (let i = 0; i < times.length; i++) {",
    "    while (times[head] < times[i] - span) head++;",
    "    out.push(i - head + 1);",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "Why does head never need to move backwards?",
   "view": {
    "row": [
     1,
     2,
     6,
     7,
     8
    ],
    "row2": [
     "",
     "",
     "",
     "",
     ""
    ],
    "rowLabel": "times",
    "row2Label": "out",
    "ptrs": [
     {
      "id": "head",
      "row": 1
     },
     {
      "id": "i",
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
     "say": "The visitors who still count form a line. They joined in order, and they stop counting in the same order.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "recent visitors form a queue",
     "arrows": null
    },
    {
     "say": "So keep a marker, head, on the oldest one who still counts. It only ever moves forward.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "head = oldest who still counts",
     "arrows": null
    },
    {
     "say": "Line three. Moss stands on head, the oldest visitor who still counts. Door zero.",
     "line": 3,
     "ptr": {
      "head": 0
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The first arrival, at minute one. Nobody is too old. From head to here is one visitor.",
     "line": 6,
     "ptr": {
      "i": 0
     },
     "hot": [
      0
     ],
     "ok": [
      "d0"
     ],
     "bad": [],
     "set": {
      "d0": 1
     },
     "vars": null,
     "box": null,
     "card": "0 − 0 + 1 = 1",
     "arrows": null
    },
    {
     "say": "Minute two. Is minute one too old? It would need to be before two minus three. No. Two visitors.",
     "line": 6,
     "ptr": {
      "i": 1
     },
     "hot": [
      0,
      1
     ],
     "ok": [
      "d1"
     ],
     "bad": [],
     "set": {
      "d1": 2
     },
     "vars": null,
     "box": null,
     "card": "1 − 0 + 1 = 2",
     "arrows": null
    },
    {
     "say": "Minute six. Six minus three is three. Anything before minute three is too old.",
     "line": 5,
     "ptr": {
      "i": 2
     },
     "hot": [
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "too old: before 6 − 3 = 3",
     "arrows": null
    },
    {
     "say": "Minute one is too old. Head moves. Minute two is too old as well. Head moves again.",
     "line": 5,
     "ptr": {
      "head": 2
     },
     "hot": [],
     "ok": [],
     "bad": [
      0,
      1
     ],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "From head to here is one visitor.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      "d2"
     ],
     "bad": [],
     "set": {
      "d2": 1
     },
     "vars": null,
     "box": null,
     "card": "2 − 2 + 1 = 1",
     "arrows": null
    },
    {
     "say": "Minute seven. Too old means before four. Head is on six. Does head move?",
     "line": 5,
     "ptr": {
      "i": 3
     },
     "hot": [
      2,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "too old: before 7 − 3 = 4",
     "arrows": null
    },
    {
     "say": "No. Six still counts. Two visitors.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      "d3"
     ],
     "bad": [],
     "set": {
      "d3": 2
     },
     "vars": null,
     "box": null,
     "card": "3 − 2 + 1 = 2",
     "arrows": null
    },
    {
     "say": "Minute eight. Too old means before five. Six still counts. Three visitors.",
     "line": 6,
     "ptr": {
      "i": 4
     },
     "hot": [
      2,
      3,
      4
     ],
     "ok": [
      "d4"
     ],
     "bad": [],
     "set": {
      "d4": 3
     },
     "vars": null,
     "box": null,
     "card": "4 − 2 + 1 = 3",
     "arrows": null
    },
    {
     "say": "Line eight returns the counts.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Head only moves forward, so it moves at most n times in total. O of n.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "head moves forward only → O(n)",
     "arrows": null
    },
    {
     "say": "Apart from the answer row, one marker. O of one extra space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "1 marker → O(1) extra space",
     "arrows": null
    }
   ]
  },
  {
   "id": "qu2",
   "num": 2,
   "title": "A Queue From Two Piles",
   "fn": "twoStackQueue",
   "ask": "Build a queue using only two stacks (arrays where you may use just <b>push</b> and <b>pop</b>). Run the operations <b>[\"add\", x]</b> and <b>[\"take\"]</b>, and return what every <b>take</b> removed. A take must remove the <b>oldest</b> item.",
   "spec": "twoStackQueue([[\"add\",1], [\"add\",2], [\"take\"], [\"add\",3], [\"take\"], [\"take\"]]) → [1, 2, 3]",
   "start": "// ops is an array of [\"add\", x] and [\"take\"]. take is only asked when something is waiting.\n// Use two arrays, and only push and pop on them.\nfunction twoStackQueue(ops) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: first in, first out, built from two last-in-first-out piles.",
    "Put 1 then 2 on a pile. Which comes off first? Now move the whole pile, one item at a time, onto a second pile. Which comes off first now?",
    "So one pile receives new items, and the other hands items out. When should items be moved across?",
    "If the hand-out pile still has items, is it safe to move more across?"
   ],
   "hints": [
    "Use two stacks: inbox for new items, outbox for items ready to leave.",
    "add: push onto inbox. take: pop from outbox.",
    "Only when outbox is empty, move everything from inbox to outbox (pop from one, push onto the other). That reverses the order, so the oldest ends up on top."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        "add",
        1
       ],
       [
        "add",
        2
       ],
       [
        "take"
       ],
       [
        "add",
        3
       ],
       [
        "take"
       ],
       [
        "take"
       ]
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
       [
        "add",
        7
       ],
       [
        "take"
       ]
      ]
     ],
     "want": [
      7
     ]
    },
    {
     "args": [
      [
       [
        "add",
        1
       ],
       [
        "add",
        2
       ],
       [
        "add",
        3
       ],
       [
        "take"
       ],
       [
        "take"
       ],
       [
        "take"
       ]
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
       [
        "add",
        1
       ],
       [
        "take"
       ],
       [
        "add",
        2
       ],
       [
        "take"
       ]
      ]
     ],
     "want": [
      1,
      2
     ]
    },
    {
     "args": [
      [
       [
        "add",
        5
       ],
       [
        "add",
        6
       ],
       [
        "take"
       ],
       [
        "add",
        7
       ],
       [
        "add",
        8
       ],
       [
        "take"
       ],
       [
        "take"
       ],
       [
        "take"
       ]
      ]
     ],
     "want": [
      5,
      6,
      7,
      8
     ]
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*(shift|unshift|splice)\\s*\\(",
     "msg": "Only push and pop are allowed here. That is the point of the exercise."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function twoStackQueue(ops) {",
    "  const inbox = [];",
    "  const outbox = [];",
    "  const out = [];",
    "  for (const [op, x] of ops) {",
    "    if (op === 'add') {",
    "      inbox.push(x);",
    "    } else {",
    "      if (outbox.length === 0) {",
    "        while (inbox.length) outbox.push(inbox.pop());",
    "      }",
    "      out.push(outbox.pop());",
    "    }",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "Why are items only moved across when outbox is empty? What goes wrong if you move them on every take?",
   "view": {
    "row": [
     "+1",
     "+2",
     "take",
     "+3",
     "take",
     "take"
    ],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     }
    ],
    "vars": [],
    "box": {
     "title": "piles (top is last)",
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
     "say": "A pile gives back the newest first. Pour it into a second pile, and the order flips. Now the oldest is on top.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "pouring a pile flips its order",
     "arrows": null
    },
    {
     "say": "So new items go onto the inbox. Items leave from the outbox. And we only pour when the outbox is empty.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "add → inbox · take → outbox",
     "arrows": null
    },
    {
     "say": "Two empty piles. Inbox, and outbox.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "inbox:",
      "outbox:"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Add one. Line seven pushes it onto the inbox.",
     "line": 7,
     "ptr": {
      "i": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "inbox:  1",
      "outbox:"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Add two. Push. It sits on top of the one.",
     "line": 7,
     "ptr": {
      "i": 1
     },
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "inbox:  1 2",
      "outbox:"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "A take. The outbox is empty. So line ten pours the inbox across, one item at a time.",
     "line": 10,
     "ptr": {
      "i": 2
     },
     "hot": [
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "inbox:",
      "outbox: 2 1"
     ],
     "card": "outbox is empty → pour",
     "arrows": null
    },
    {
     "say": "Two went across first, then one. So one, the oldest, is on top. Line twelve pops it.",
     "line": 12,
     "ptr": null,
     "hot": [],
     "ok": [
      2
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "inbox:",
      "outbox: 2"
     ],
     "card": "take → 1",
     "arrows": null
    },
    {
     "say": "Add three. It goes onto the inbox, as always.",
     "line": 7,
     "ptr": {
      "i": 3
     },
     "hot": [
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "inbox:  3",
      "outbox: 2"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "A take. The outbox still holds two. Do we pour first?",
     "line": 9,
     "ptr": {
      "i": 4
     },
     "hot": [
      4
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "outbox holds 2 → pour?",
     "arrows": null
    },
    {
     "say": "No. The outbox is not empty, so line twelve just pops. Two.",
     "line": 12,
     "ptr": null,
     "hot": [],
     "ok": [
      4
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "inbox:  3",
      "outbox:"
     ],
     "card": "take → 2",
     "arrows": null
    },
    {
     "say": "The last take. Now the outbox is empty, so the three is poured across, and popped.",
     "line": 12,
     "ptr": {
      "i": 5
     },
     "hot": [
      5
     ],
     "ok": [
      5
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "inbox:",
      "outbox:"
     ],
     "card": "pour, then take → 3",
     "arrows": null
    },
    {
     "say": "Line fifteen returns what was taken. One, two, three. In arrival order.",
     "line": 15,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Each item is pushed twice and popped twice at most. So the average cost of an operation is O of one.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "2 pushes + 2 pops per item → O(1) each",
     "arrows": null
    },
    {
     "say": "The two piles together hold every waiting item. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "two piles → O(n) space",
     "arrows": null
    }
   ]
  }
 ]
};
