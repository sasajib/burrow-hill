window.CHAPTER = {
 "id": "intervals",
 "title": "Intervals",
 "sub": "CHAPTER 13 · INTERVALS",
 "key": "burrow-ch-intervals",
 "next": {
  "href": "chapter.html?c=mixed2",
  "label": "Mixed set 2"
 },
 "prev": {
  "href": "chapter.html?c=sorting",
  "label": "Chapter 12: Sorting"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "iv0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Things with a start and an end",
   "intro": "What an interval is, and the one move that solves most interval problems."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "ivt1",
   "label": "Theory 1",
   "short": "T1",
   "name": "Sort by start, then sweep",
   "intro": "When two intervals overlap, and how sorting turns every pair into just neighbours. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "ivt2",
   "label": "Theory 2",
   "short": "T2",
   "name": "How many at once?",
   "intro": "Counting overlaps with two sorted lists, and why the earliest finisher is the one to keep. One guess."
  }
 ],
 "notes": {
  "t1": "<h3>Key ideas</h3><ul><li><b>An interval is a pair [start, end].</b> Two intervals overlap when each one starts before the other ends.</li>\n      <li><b>Sort by start.</b> Then an interval can only overlap the ones just before it, so one walk is enough.</li>\n      <li><b>Merging:</b> keep the last interval you built. If the next one starts before it ends, stretch its end; otherwise start a new one.</li>\n      <li><b>When to reach for it:</b> meetings, bookings, ranges: anything with a start and an end.</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>How many overlap at once?</b> Sort the starts and the ends separately. Walk the starts: each start needs a room unless an earlier meeting has already ended.</li>\n      <li><b>Keeping as many as possible without overlap?</b> Sort by end and always keep the one that finishes first: it leaves the most room for the rest.</li>\n      <li><b>Both are one sort plus one walk:</b> O(n log n).</li></ul>"
 },
 "quiz": {
  "ivt1-q1": {
   "ask": "The intervals are sorted by start. The last merged interval is 1-6. The next one is 5-8. What happens?",
   "opts": [
    "They overlap: the merged interval becomes 1-8",
    "A new interval 5-8 is started",
    "Nothing changes"
   ],
   "right": 0,
   "why": "5 is before 6, so they overlap. The end is stretched to the larger of 6 and 8."
  },
  "ivt2-q1": {
   "ask": "You want to keep as many meetings as possible with no overlaps. Which meeting should you always keep first?",
   "opts": [
    "The one that ends earliest",
    "The one that starts earliest",
    "The longest one"
   ],
   "right": 0,
   "why": "The meeting that ends first leaves the most time for all the others."
  },
  "iv1s-q": {
   "ask": "Meeting 2-4 starts at 2. The meeting before it, 1-3, ends at 3. What does line 4 do?",
   "opts": [
    "Returns false: they overlap",
    "Carries on to the next meeting",
    "Returns true"
   ],
   "right": 0,
   "why": "2 is less than 3, so the second meeting starts before the first has ended."
  },
  "iv2s-q": {
   "ask": "The last built interval is 1-6. The next is 8-10. What does the code do?",
   "opts": [
    "Pushes 8-10 as a new interval",
    "Stretches 1-6 to 1-10",
    "Skips it"
   ],
   "right": 0,
   "why": "8 is after 6, so there is a gap. The else branch pushes a new interval."
  },
  "iv3s-q": {
   "ask": "A meeting starts at 15. The earliest unused end is 10. What does the code do?",
   "opts": [
    "Reuses that room: e moves on, rooms stays 2",
    "Adds a third room",
    "Returns 2 straight away"
   ],
   "right": 0,
   "why": "10 is at or before 15, so a room has been freed. e moves to the next end and no room is added."
  },
  "iv4s-q": {
   "ask": "lastEnd is 3. The next interval, 1-3, starts at 1. What does the code do?",
   "opts": [
    "Removes it: removed becomes 1",
    "Keeps it and sets lastEnd to 3",
    "Returns 0"
   ],
   "right": 0,
   "why": "1 is before 3, so it overlaps something already kept. It has to go."
  },
  "iv5s-q": {
   "ask": "The later start is 5 and the earlier end is 5. Line 8 tests start <= end. What happens?",
   "opts": [
    "[5, 5] is pushed: one shared moment",
    "Nothing is pushed",
    "The loop stops"
   ],
   "right": 0,
   "why": "5 <= 5 is true. They share exactly one moment, and the question says that counts."
  }
 },
 "problems": [
  {
   "id": "iv1",
   "num": 1,
   "title": "Can One Person Attend?",
   "fn": "canAttend",
   "ask": "Each meeting is a pair <b>[start, end]</b>. Return <b>true</b> if one person can attend <b>all</b> of them, meaning no two meetings overlap. A meeting that starts exactly when another ends is fine.",
   "spec": "canAttend([[1, 3], [5, 6], [2, 4]]) → false      (1-3 and 2-4 overlap)",
   "start": "// meetings is an array of [start, end] pairs, in no particular order.\nfunction canAttend(meetings) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: do any two meetings clash?",
    "Checking every pair is O(n²). Would this be easy if the meetings were in some order?",
    "Once they are sorted by start time, which other meeting can a meeting clash with first?",
    "What exactly do you compare?"
   ],
   "hints": [
    "Sort a copy of the meetings by start time.",
    "Walk the sorted meetings from the second one. Compare its start with the end of the one before.",
    "If a start is earlier than the previous end, they overlap: return false. If the walk ends, return true."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        1,
        3
       ],
       [
        5,
        6
       ],
       [
        2,
        4
       ]
      ]
     ],
     "want": false
    },
    {
     "args": [
      [
       [
        1,
        3
       ],
       [
        3,
        5
       ]
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
       [
        4,
        9
       ]
      ]
     ],
     "want": true
    },
    {
     "args": [
      [
       [
        7,
        10
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
      [
       [
        0,
        30
       ],
       [
        5,
        10
       ],
       [
        15,
        20
       ]
      ]
     ],
     "want": false
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "return [Array.from({ length: 60000 }, (_, i) => [((i * 7919) % 60000) * 10, ((i * 7919) % 60000) * 10 + 5])];",
    "limit": 1500,
    "label": "60,000 meetings that never overlap",
    "msg": "Correct on the small cases, but too slow on the big one. Comparing every pair is O(n²). Sort by start and compare neighbours."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function canAttend(meetings) {",
    "  const sorted = [...meetings].sort((a, b) => a[0] - b[0]);",
    "  for (let i = 1; i < sorted.length; i++) {",
    "    if (sorted[i][0] < sorted[i - 1][1]) return false;",
    "  }",
    "  return true;",
    "}"
   ],
   "why": "After sorting by start, why is it enough to compare each meeting with only the one before it?",
   "world": "Your calendar warns you about a clash like this. Sort the meetings, and compare each one with the next.",
   "view": {
    "row": [
     "1-3",
     "5-6",
     "2-4"
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
     "say": "In start order, a meeting can only clash with the one just before it. If it does not, it cannot reach back any further.",
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
     "card": "sorted: only neighbours can clash",
     "arrows": null
    },
    {
     "say": "So sort by start, and compare each start with the end before it.",
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
     "card": "this start < previous end → clash",
     "arrows": null
    },
    {
     "say": "Line two sorts a copy by start time. One to three. Two to four. Five to six.",
     "line": 2,
     "ptr": null,
     "hot": [
      0,
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "set": {
      "1": "2-4",
      "2": "5-6"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "sort by a[0] − b[0]",
     "arrows": null
    },
    {
     "say": "The walk starts at door one. Its start is two. The meeting before it ends at three. Is two before three?",
     "line": 4,
     "ptr": {
      "i": 1
     },
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
     "card": "start 2 < end 3 ?",
     "arrows": null
    },
    {
     "say": "Yes. The second meeting starts before the first one has ended. Line four returns false.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      0,
      1
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
     "say": "The sort costs n log n, and the walk after it is one pass. O of n log n.",
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
     "card": "sort + one walk → O(n log n)",
     "arrows": null
    },
    {
     "say": "The sorted copy. O of n space.",
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
     "card": "a sorted copy → O(n) space",
     "arrows": null
    },
    {
     "say": "Your calendar warns you about a clash like this. Sort the meetings, and compare each one with the next.",
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
     "card": "a calendar warning of a clash",
     "arrows": null
    }
   ]
  },
  {
   "id": "iv2",
   "num": 2,
   "title": "Join the Overlaps",
   "fn": "mergeAll",
   "ask": "Merge every group of overlapping intervals into one, and return the result sorted by start. Intervals that only touch (one ends where the next starts) are merged too.",
   "spec": "mergeAll([[1, 3], [8, 10], [2, 6]]) → [[1, 6], [8, 10]]",
   "start": "// intervals is an array of [start, end] pairs, in no particular order.\nfunction mergeAll(intervals) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: wherever intervals overlap, one bigger interval should cover them.",
    "Do [[1, 3], [8, 10], [2, 6]] by hand. Which order did you look at them in?",
    "In start order, which interval can the next one overlap: any earlier one, or only the last one you built?",
    "When they overlap, what is the end of the joined interval? Careful with [1, 9] followed by [2, 4]."
   ],
   "hints": [
    "Sort a copy by start. Keep an output list; the last interval in it is the one being built.",
    "For each interval: if it starts at or before the end of the last one, they overlap: set that end to the larger of the two ends.",
    "Otherwise push a copy of the interval as a new last one."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        1,
        3
       ],
       [
        8,
        10
       ],
       [
        2,
        6
       ]
      ]
     ],
     "want": [
      [
       1,
       6
      ],
      [
       8,
       10
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
       [
        5,
        7
       ]
      ]
     ],
     "want": [
      [
       5,
       7
      ]
     ]
    },
    {
     "args": [
      [
       [
        1,
        4
       ],
       [
        4,
        5
       ]
      ]
     ],
     "want": [
      [
       1,
       5
      ]
     ]
    },
    {
     "args": [
      [
       [
        1,
        9
       ],
       [
        2,
        4
       ]
      ]
     ],
     "want": [
      [
       1,
       9
      ]
     ]
    },
    {
     "args": [
      [
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
     "want": [
      [
       1,
       2
      ],
      [
       3,
       4
      ]
     ]
    },
    {
     "args": [
      [
       [
        2,
        3
       ],
       [
        1,
        5
       ],
       [
        6,
        7
       ],
       [
        7,
        9
       ]
      ]
     ],
     "want": [
      [
       1,
       5
      ],
      [
       6,
       9
      ]
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function mergeAll(intervals) {",
    "  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);",
    "  const out = [];",
    "  for (const [start, end] of sorted) {",
    "    const last = out.at(-1);",
    "    if (last && start <= last[1]) {",
    "      last[1] = Math.max(last[1], end);",
    "    } else {",
    "      out.push([start, end]);",
    "    }",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "Why Math.max(last[1], end) and not simply end?",
   "world": "A calendar joins overlapping busy times into one block exactly like this.",
   "view": {
    "row": [
     "1-3",
     "8-10",
     "2-6"
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
      "id": "i",
      "row": 1
     }
    ],
    "vars": [],
    "box": {
     "title": "out",
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
     "say": "In start order, the next interval can only overlap the last one you built.",
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
     "card": "sorted: compare with the last built",
     "arrows": null
    },
    {
     "say": "If it overlaps, stretch the end. If not, that interval is finished, and a new one begins.",
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
     "card": "overlap → stretch · else → new",
     "arrows": null
    },
    {
     "say": "Line two sorts by start. One to three. Two to six. Eight to ten.",
     "line": 2,
     "ptr": null,
     "hot": [
      0,
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "set": {
      "1": "2-6",
      "2": "8-10"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "sort by start",
     "arrows": null
    },
    {
     "say": "The first interval. The output is empty, so line nine pushes it.",
     "line": 9,
     "ptr": {
      "i": 0
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
      "1-3"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Two to six. It starts at two, and the last one ends at three. Two is not after three. So they overlap.",
     "line": 6,
     "ptr": {
      "i": 1
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
     "card": "start 2 ≤ end 3 → overlap",
     "arrows": null
    },
    {
     "say": "Line seven stretches the end, to the bigger of three and six. The interval is now one to six.",
     "line": 7,
     "ptr": null,
     "hot": [],
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
      "1-6"
     ],
     "card": "end = max(3, 6) = 6",
     "arrows": null
    },
    {
     "say": "Eight to ten. It starts at eight, and the last one ends at six. What happens?",
     "line": 6,
     "ptr": {
      "i": 2
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
     "card": "start 8 ≤ end 6 ?",
     "arrows": null
    },
    {
     "say": "No overlap. Line nine pushes it as a new interval.",
     "line": 9,
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
      "1-6",
      "8-10"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line twelve returns the two merged intervals.",
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
     "say": "The sort costs n log n, and the walk after it is one pass. O of n log n.",
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
     "card": "sort + one walk → O(n log n)",
     "arrows": null
    },
    {
     "say": "The sorted copy and the output. O of n space.",
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
     "card": "copy + output → O(n) space",
     "arrows": null
    },
    {
     "say": "A calendar joins overlapping busy times into one block exactly like this.",
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
     "card": "busy times joined into blocks",
     "arrows": null
    }
   ]
  },
  {
   "id": "iv3",
   "num": 3,
   "title": "How Many Rooms?",
   "fn": "minRooms",
   "ask": "Each meeting is a pair <b>[start, end]</b>. Return the <b>smallest number of rooms</b> needed so that no two meetings share a room at the same time. A room is free again at the moment a meeting ends.",
   "spec": "minRooms([[0, 30], [5, 10], [15, 20]]) → 2",
   "start": "// meetings is an array of [start, end] pairs.\nfunction minRooms(meetings) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in a different way: what is the largest number of meetings going on at the same moment?",
    "Do [[0, 30], [5, 10], [15, 20]] by hand, moving forward in time. When does a room become free?",
    "You only care about two kinds of moment: a meeting starts, a meeting ends. What if those were two sorted lists?",
    "When a meeting starts, how do you know whether a room has been freed by then?"
   ],
   "hints": [
    "Make two sorted lists: all the start times, and all the end times.",
    "Walk the starts in order with a second marker on the ends. If the earliest end not yet used is at or before this start, a room is free: reuse it (move the end marker).",
    "Otherwise a new room is needed: add one to the count."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        0,
        30
       ],
       [
        5,
        10
       ],
       [
        15,
        20
       ]
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
       [
        1,
        2
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
        5
       ],
       [
        2,
        6
       ],
       [
        3,
        7
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
     "want": 1
    },
    {
     "args": [
      [
       [
        7,
        10
       ],
       [
        2,
        4
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
        10
       ],
       [
        2,
        3
       ],
       [
        4,
        5
       ],
       [
        6,
        7
       ]
      ]
     ],
     "want": 2
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "return [Array.from({ length: 80000 }, (_, i) => [i, i + 40000])];",
    "limit": 1500,
    "label": "80,000 long meetings",
    "msg": "Correct on the small cases, but too slow on the big one. Checking every meeting against every other is O(n²). Sort the starts and the ends."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function minRooms(meetings) {",
    "  const byNum = (a, b) => a - b;",
    "  const starts = meetings.map((m) => m[0]).sort(byNum);",
    "  const ends = meetings.map((m) => m[1]).sort(byNum);",
    "  let rooms = 0;",
    "  let e = 0;",
    "  for (const start of starts) {",
    "    if (ends[e] <= start) e++;",
    "    else rooms++;",
    "  }",
    "  return rooms;",
    "}"
   ],
   "why": "When a room is reused, rooms does not go up. Why does that count the right number of rooms?",
   "world": "How many meeting rooms does an office need? How many servers at the busiest moment? This sweep answers both.",
   "view": {
    "row": [
     0,
     5,
     15
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     10,
     20,
     30
    ],
    "rowLabel": "start",
    "row2Label": "end",
    "ptrs": [
     {
      "id": "s",
      "row": 1
     },
     {
      "id": "e",
      "row": 2
     }
    ],
    "vars": [
     "rooms"
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
     "say": "Only two kinds of moment matter. A meeting starts, and needs a room. A meeting ends, and frees one.",
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
     "card": "start: needs a room · end: frees one",
     "arrows": null
    },
    {
     "say": "So sort all the starts, and all the ends. Then walk forward in time.",
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
     "card": "two sorted lists, one walk",
     "arrows": null
    },
    {
     "say": "Lines three and four. The starts, sorted. Zero, five, fifteen. The ends, sorted. Ten, twenty, thirty.",
     "line": 4,
     "ptr": null,
     "hot": [
      0,
      1,
      2,
      "d0",
      "d1",
      "d2"
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
     "say": "Rooms is zero. And e marks the earliest end that has not been used yet. Ten.",
     "line": 6,
     "ptr": {
      "e": 0
     },
     "hot": [
      "d0"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "rooms": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "A meeting starts at zero. Has anything ended by then? The earliest end is ten. No. So it needs a new room.",
     "line": 9,
     "ptr": {
      "s": 0
     },
     "hot": [
      0,
      "d0"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "rooms": 1
     },
     "box": null,
     "card": "end 10 ≤ start 0 ? no → new room",
     "arrows": null
    },
    {
     "say": "A meeting starts at five. The earliest end is still ten. Nothing is free. A second room.",
     "line": 9,
     "ptr": {
      "s": 1
     },
     "hot": [
      1,
      "d0"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "rooms": 2
     },
     "box": null,
     "card": "end 10 ≤ start 5 ? no → new room",
     "arrows": null
    },
    {
     "say": "A meeting starts at fifteen. The earliest end is ten. What happens?",
     "line": 8,
     "ptr": {
      "s": 2
     },
     "hot": [
      2,
      "d0"
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
     "card": "end 10 ≤ start 15 ?",
     "arrows": null
    },
    {
     "say": "Ten is before fifteen. A room is free. Line eight reuses it, and e moves on. Rooms stays at two.",
     "line": 8,
     "ptr": {
      "e": 1
     },
     "hot": [],
     "ok": [
      "d0",
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
     "card": "reuse the room → rooms stays 2",
     "arrows": null
    },
    {
     "say": "Line eleven returns the rooms. Two.",
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
     "say": "Two sorts, and one walk. O of n log n.",
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
     "card": "2 sorts + one walk → O(n log n)",
     "arrows": null
    },
    {
     "say": "The two sorted lists. O of n space.",
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
     "card": "two lists → O(n) space",
     "arrows": null
    },
    {
     "say": "How many meeting rooms does an office need? How many servers at the busiest moment? This sweep answers both.",
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
     "card": "rooms or servers at the peak",
     "arrows": null
    }
   ]
  },
  {
   "id": "iv4",
   "num": 4,
   "title": "Keep the Most",
   "fn": "removeFewest",
   "ask": "Some intervals overlap. Return the <b>smallest number of intervals to remove</b> so that none of the rest overlap. Intervals that only touch do not overlap.",
   "spec": "removeFewest([[1, 2], [2, 3], [3, 4], [1, 3]]) → 1      (remove 1-3)",
   "start": "// intervals is an array of [start, end] pairs.\nfunction removeFewest(intervals) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal the other way round: keep as many intervals as possible with no overlaps.",
    "Suppose you can keep only one of two overlapping intervals. Which is the better one to keep: the one that ends sooner, or later? Why?",
    "So in what order should you look at the intervals?",
    "What do you need to remember about the ones you have kept?"
   ],
   "hints": [
    "Sort a copy by end time.",
    "Keep the first one. Remember where the last kept interval ends.",
    "For each next interval: if it starts at or after that end, keep it and update the end. Otherwise it has to go: add one to the count."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
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
        1,
        3
       ]
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
       [
        1,
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
        1,
        2
       ],
       [
        1,
        2
       ],
       [
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
        2
       ],
       [
        2,
        3
       ]
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       [
        1,
        100
       ],
       [
        11,
        22
       ],
       [
        1,
        11
       ],
       [
        2,
        12
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
    "function removeFewest(intervals) {",
    "  const sorted = [...intervals].sort((a, b) => a[1] - b[1]);",
    "  let removed = 0;",
    "  let lastEnd = -Infinity;",
    "  for (const [start, end] of sorted) {",
    "    if (start >= lastEnd) lastEnd = end;",
    "    else removed++;",
    "  }",
    "  return removed;",
    "}"
   ],
   "why": "Why sort by end time here, when the other problems sorted by start time?",
   "world": "A booking system keeps the most bookings it can by always keeping the one that ends first.",
   "view": {
    "row": [
     "1-2",
     "2-3",
     "3-4",
     "1-3"
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
      "id": "i",
      "row": 1
     }
    ],
    "vars": [
     "lastEnd",
     "removed"
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
     "say": "Removing the fewest is the same as keeping the most.",
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
     "card": "remove the fewest = keep the most",
     "arrows": null
    },
    {
     "say": "And the interval that ends first leaves the most room for the others. So sort by end, and keep whatever still fits.",
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
     "card": "earliest end leaves the most room",
     "arrows": null
    },
    {
     "say": "Line two sorts by end time. One to two. Two to three. One to three. Three to four.",
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
     "set": {
      "2": "1-3",
      "3": "3-4"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "sort by a[1] − b[1]",
     "arrows": null
    },
    {
     "say": "Nothing is kept yet, so last end starts at minus infinity. And nothing is removed.",
     "line": 4,
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
      "lastEnd": "−∞",
      "removed": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One to two. It starts after last end. Keep it. Last end becomes two.",
     "line": 6,
     "ptr": {
      "i": 0
     },
     "hot": [
      0
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
     "vars": {
      "lastEnd": 2
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Two to three. It starts at two, exactly when the last one ends. That is allowed. Keep it. Last end is three.",
     "line": 6,
     "ptr": {
      "i": 1
     },
     "hot": [
      1
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
     "vars": {
      "lastEnd": 3
     },
     "box": null,
     "card": "start 2 ≥ lastEnd 2 → keep",
     "arrows": null
    },
    {
     "say": "One to three. It starts at one. Last end is three. What happens?",
     "line": 6,
     "ptr": {
      "i": 2
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
     "card": "start 1 ≥ lastEnd 3 ?",
     "arrows": null
    },
    {
     "say": "One is before three. It overlaps what we kept. Line seven removes it.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      2
     ],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "removed": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Three to four. It starts at three. That fits. Keep it.",
     "line": 6,
     "ptr": {
      "i": 3
     },
     "hot": [
      3
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
     "vars": {
      "lastEnd": 4
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line nine returns the number removed. One.",
     "line": 9,
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
     "say": "The sort costs n log n, and the walk after it is one pass. O of n log n.",
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
     "card": "sort + one walk → O(n log n)",
     "arrows": null
    },
    {
     "say": "Apart from the sorted copy, two numbers. O of n space for the copy.",
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
     "card": "a sorted copy → O(n) space",
     "arrows": null
    },
    {
     "say": "A booking system keeps the most bookings it can by always keeping the one that ends first.",
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
     "card": "fitting the most bookings in",
     "arrows": null
    }
   ]
  },
  {
   "id": "iv5",
   "num": 5,
   "title": "When Are Both Free?",
   "fn": "bothFree",
   "ask": "Two friends each give a list of the times they are free. Each list is <b>sorted</b> and its intervals do not overlap. Return every stretch of time when <b>both</b> are free, in order. A single shared moment counts (like [5, 5]).",
   "spec": "bothFree([[0, 2], [5, 10]], [[1, 5], [8, 12]]) → [[1, 2], [5, 5], [8, 10]]",
   "start": "// a and b are sorted lists of [start, end] pairs; inside each list nothing overlaps.\nfunction bothFree(a, b) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the pieces of time that are inside an interval of a and an interval of b.",
    "Take one interval from each list. If they share any time, where does the shared part start and end?",
    "Both lists are sorted. After comparing two intervals, which one is finished and can be moved past?",
    "What kind of loop walks two sorted lists at once?"
   ],
   "hints": [
    "Keep one marker in each list.",
    "The shared part of two intervals starts at the later start and ends at the earlier end. If that start is not after that end, it is real: push it.",
    "Then move the marker of whichever interval ends first: it cannot overlap anything else."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        0,
        2
       ],
       [
        5,
        10
       ]
      ],
      [
       [
        1,
        5
       ],
       [
        8,
        12
       ]
      ]
     ],
     "want": [
      [
       1,
       2
      ],
      [
       5,
       5
      ],
      [
       8,
       10
      ]
     ]
    },
    {
     "args": [
      [],
      [
       [
        1,
        2
       ]
      ]
     ],
     "want": []
    },
    {
     "args": [
      [
       [
        1,
        3
       ]
      ],
      [
       [
        4,
        6
       ]
      ]
     ],
     "want": []
    },
    {
     "args": [
      [
       [
        1,
        9
       ]
      ],
      [
       [
        2,
        3
       ],
       [
        5,
        6
       ]
      ]
     ],
     "want": [
      [
       2,
       3
      ],
      [
       5,
       6
      ]
     ]
    },
    {
     "args": [
      [
       [
        1,
        4
       ]
      ],
      [
       [
        1,
        4
       ]
      ]
     ],
     "want": [
      [
       1,
       4
      ]
     ]
    },
    {
     "args": [
      [
       [
        0,
        1
       ],
       [
        3,
        4
       ]
      ],
      [
       [
        1,
        3
       ]
      ]
     ],
     "want": [
      [
       1,
       1
      ],
      [
       3,
       3
      ]
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function bothFree(a, b) {",
    "  const out = [];",
    "  let i = 0;",
    "  let j = 0;",
    "  while (i < a.length && j < b.length) {",
    "    const start = Math.max(a[i][0], b[j][0]);",
    "    const end = Math.min(a[i][1], b[j][1]);",
    "    if (start <= end) out.push([start, end]);",
    "    if (a[i][1] < b[j][1]) i++;",
    "    else j++;",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "Why is it the interval that ends first whose marker moves?",
   "world": "When two people look for a time to meet, a calendar app finds where both are free, just like this.",
   "view": {
    "row": [
     "0-2",
     "5-10"
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     "1-5",
     "8-12"
    ],
    "rowLabel": "a",
    "row2Label": "b",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     },
     {
      "id": "j",
      "row": 2
     }
    ],
    "vars": [],
    "box": {
     "title": "out",
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
     "say": "Two intervals share the time from the later start, to the earlier end. If that start comes after that end, they share nothing.",
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
     "card": "shared = later start … earlier end",
     "arrows": null
    },
    {
     "say": "Then the interval that ends first is used up. Move past it. That is two markers on two sorted lists.",
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
     "card": "whoever ends first moves on",
     "arrows": null
    },
    {
     "say": "An empty output, and one marker on each list.",
     "line": 4,
     "ptr": {
      "i": 0,
      "j": 0
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
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Zero to two, and one to five. The later start is one. The earlier end is two. One to two is shared.",
     "line": 8,
     "ptr": null,
     "hot": [
      0,
      "d0"
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
      "1-2"
     ],
     "card": "max(0, 1) = 1 · min(2, 5) = 2",
     "arrows": null
    },
    {
     "say": "Zero to two ends first, so it is used up. Line nine moves i.",
     "line": 9,
     "ptr": {
      "i": 1
     },
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
     "box": null,
     "card": "end 2 < end 5 → i moves",
     "arrows": null
    },
    {
     "say": "Five to ten, and one to five. The later start is five. The earlier end is five. Is that a shared stretch?",
     "line": 8,
     "ptr": null,
     "hot": [
      1,
      "d0"
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
     "card": "start 5 ≤ end 5 ?",
     "arrows": null
    },
    {
     "say": "Yes. Five is not after five. They share that one moment.",
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
     "box": [
      "1-2",
      "5-5"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "One to five ends first. J moves. Now five to ten, and eight to twelve. Eight to ten is shared.",
     "line": 8,
     "ptr": {
      "j": 1
     },
     "hot": [
      1,
      "d1"
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
      "1-2",
      "5-5",
      "8-10"
     ],
     "card": "max(5, 8) = 8 · min(10, 12) = 10",
     "arrows": null
    },
    {
     "say": "Five to ten ends first, and list a is finished. Line twelve returns the three shared stretches.",
     "line": 12,
     "ptr": {
      "i": 2
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
     "say": "Every step moves one marker forward. O of n plus m.",
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
     "card": "one marker per step → O(n + m)",
     "arrows": null
    },
    {
     "say": "Apart from the output, two markers. O of one extra space.",
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
     "card": "2 markers → O(1) extra space",
     "arrows": null
    },
    {
     "say": "When two people look for a time to meet, a calendar app finds where both are free, just like this.",
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
     "card": "finding a time you are both free",
     "arrows": null
    }
   ]
  }
 ]
};
