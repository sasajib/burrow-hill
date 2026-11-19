window.CHAPTER = {
 "id": "hashmap",
 "title": "Hash Maps",
 "sub": "CHAPTER 3 · HASH MAPS",
 "key": "burrow-ch-hashmap",
 "next": {
  "href": "chapter.html?c=prefix",
  "label": "Chapter 4: Prefix sums"
 },
 "prev": {
  "href": "chapter.html?c=strings",
  "label": "Chapter 2: Strings"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "hw0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Meet Hazel",
   "intro": "Meet Hazel, and see why the hash map is the most useful tool in the course."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "hwt1",
   "label": "Theory 1",
   "short": "T1",
   "name": "From a key to a door",
   "intro": "How a hash function turns any key into a door number, and what happens when two keys collide. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "hwt2",
   "label": "Theory 2",
   "short": "T2",
   "name": "Three questions a map answers",
   "intro": "Seen before? How many? Where was it? And what the answers cost. One guess."
  }
 ],
 "notes": {
  "t1": "<h3>Key ideas</h3><ul><li><b>A hash function turns a key into a door number.</b> The same key always gives the same door.</li>\n      <li><b>Storing and finding use the same single calculation</b>, so both are O(1) on average, however many keys there are.</li>\n      <li><b>A collision</b> is two keys landing on the same door. The door keeps a short list and checks the key.</li>\n      <li><b>You never write the hash function yourself in JavaScript:</b> <code>Map</code> and <code>Set</code> do it for you.</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>Seen it before?</b> A <code>Set</code>: <code>has</code>, then <code>add</code>.</li>\n      <li><b>How many times?</b> A <code>Map</code> from item to count: <code>count.set(x, (count.get(x) || 0) + 1)</code>.</li>\n      <li><b>Where was it?</b> A <code>Map</code> from item to position.</li>\n      <li><b>The price is memory:</b> up to n entries, O(n) space. You trade memory for time.</li>\n      <li><b>When to reach for it:</b> a loop inside a loop that is really asking one of those three questions.</li></ul>"
 },
 "quiz": {
  "hwt1-q1": {
   "ask": "The hash function adds up the letter positions and takes the remainder after dividing by 8. \"bee\" is 2 + 5 + 5 = 12. Which door?",
   "opts": [
    "Door 4",
    "Door 12",
    "Door 1"
   ],
   "right": 0,
   "why": "12 divided by 8 is 1 with 4 left over. The remainder, 4, is the door."
  },
  "hwt2-q1": {
   "ask": "You have 10,000 names and must find out whether any name appears twice. Which is faster?",
   "opts": [
    "Add each name to a set, checking first",
    "Compare every pair of names",
    "They take the same time"
   ],
   "right": 0,
   "why": "A set needs one pass: 10,000 steps. Comparing every pair is about 50 million comparisons."
  },
  "hm1s-q": {
   "ask": "The map holds 4 → door 0 and 9 → door 1. The code is on door 2 and needs 9. What happens?",
   "opts": [
    "It returns [1, 2]",
    "It stores 2 and moves on",
    "It returns [-1, -1]"
   ],
   "right": 0,
   "why": "9 is in the map, at door 1. So the pair is doors 1 and 2."
  },
  "hm2s-q": {
   "ask": "The set holds 3, 7, 1. The door holds 7. What does line 4 do?",
   "opts": [
    "Returns true",
    "Adds 7 again",
    "Returns false"
   ],
   "right": 0,
   "why": "7 is already in the set, so this is a repeat."
  },
  "hm3s-q": {
   "ask": "The count of 2 is now 2. best is 5, whose count is 1. What does line 7 do?",
   "opts": [
    "best becomes 2",
    "best stays 5",
    "The count is reset"
   ],
   "right": 0,
   "why": "2 is greater than 1, so the number 2 takes the lead."
  },
  "hm4s-q": {
   "ask": "i = 4 and the map says 2 was last seen at door 2. k is 2. What happens?",
   "opts": [
    "4 − 2 = 2, which is within k: return true",
    "4 − 2 = 2, which is too far",
    "The map is overwritten"
   ],
   "right": 0,
   "why": "The distance is 2 and k is 2. \"At most k\" includes equal."
  },
  "hm5s-q": {
   "ask": "The word is \"ate\". What key does line 4 make, and where does the word go?",
   "opts": [
    "\"aet\": it joins eat and tea",
    "\"ate\": a new group",
    "\"ant\": it joins tan"
   ],
   "right": 0,
   "why": "a, t, e sorted is a, e, t. That key already has a list."
  },
  "hm6s-q": {
   "ask": "9 starts a chain. Is 10 in the set 5, 2, 9, 3, 4? How long is the chain?",
   "opts": [
    "1",
    "2",
    "4"
   ],
   "right": 0,
   "why": "10 is not there, so the chain is just 9. Length 1."
  }
 },
 "problems": [
  {
   "id": "hm1",
   "num": 1,
   "title": "The Pair That Adds Up",
   "fn": "pairFor",
   "ask": "Return the <b>indexes</b> of two different doors whose numbers add up to <b>target</b>, as <b>[first, second]</b>. The row is <b>not sorted</b>. If no pair does, return <b>[-1, -1]</b>.",
   "spec": "pairFor([4, 9, 2, 7], 11) → [1, 2]      (9 + 2)",
   "start": "// nums is NOT sorted. target is a number.\nfunction pairFor(nums, target) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: two doors whose numbers add up to the target.",
    "Do [4, 9, 2, 7] with target 11 by hand. Standing on 2, which number were you hoping to have seen?",
    "Checking every pair is a loop inside a loop. For each door there is exactly one partner that would work. Which?",
    "What could tell you in one step whether that partner has already gone by, and where?"
   ],
   "hints": [
    "Standing on a number, the partner you need is target minus that number.",
    "Keep a Map from number → index for the doors you have already passed.",
    "At each door: if the map has the partner, return [its index, this index]. Otherwise store this number and its index."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       4,
       9,
       2,
       7
      ],
      11
     ],
     "want": [
      1,
      2
     ]
    },
    {
     "args": [
      [
       1,
       2
      ],
      3
     ],
     "want": [
      0,
      1
     ]
    },
    {
     "args": [
      [
       1,
       2
      ],
      7
     ],
     "want": [
      -1,
      -1
     ]
    },
    {
     "args": [
      [],
      1
     ],
     "want": [
      -1,
      -1
     ]
    },
    {
     "args": [
      [
       3,
       3
      ],
      6
     ],
     "want": [
      0,
      1
     ]
    },
    {
     "args": [
      [
       5,
       1,
       5
      ],
      10
     ],
     "want": [
      0,
      2
     ]
    },
    {
     "args": [
      [
       2,
       7,
       11,
       15
      ],
      26
     ],
     "want": [
      2,
      3
     ]
    }
   ],
   "check": "const nums = args[0], t = args[1]; if (!Array.isArray(got) || got.length !== 2) return 'Return an array of two indexes.'; if (want[0] === -1) return got[0] === -1 && got[1] === -1 ? '' : 'No two doors add up to the target here, so return [-1, -1].'; const i = got[0], j = got[1]; return i !== j && nums[i] + nums[j] === t ? '' : 'Those two doors do not add up to the target.';",
   "forbid": [],
   "big": {
    "gen": "const n = 200000; return [Array.from({ length: n }, (_, i) => i * 2), 4 * n + 1];",
    "limit": 1500,
    "label": "200,000 doors, no pair",
    "msg": "Correct on the small cases, but too slow on the big one. Checking every pair is O(n²). Look up the partner in a map."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function pairFor(nums, target) {",
    "  const seen = new Map();",
    "  for (let i = 0; i < nums.length; i++) {",
    "    const need = target - nums[i];",
    "    if (seen.has(need)) return [seen.get(need), i];",
    "    seen.set(nums[i], i);",
    "  }",
    "  return [-1, -1];",
    "}"
   ],
   "why": "Why is the number stored in the map after the check, and not before it? Try pairFor([5], 10).",
   "world": "Accounting software matches two payments to one bill like this. For each amount, it looks up the one that completes the total.",
   "view": {
    "row": [
     4,
     9,
     2,
     7
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
     "need"
    ],
    "box": {
     "title": "seen",
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
     "say": "For every number, exactly one partner would complete the pair. The target, minus that number.",
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
     "card": "partner = target − this number",
     "arrows": null
    },
    {
     "say": "So remember every number you pass, and where it was. Then ask the map for the partner.",
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
     "card": "map: number → where it was",
     "arrows": null
    },
    {
     "say": "Line two makes an empty map, called seen.",
     "line": 2,
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
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Door zero holds four. Line four works out the partner. Eleven minus four. Seven.",
     "line": 4,
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
     "vars": {
      "need": 7
     },
     "box": null,
     "card": "11 − 4 = 7",
     "arrows": null
    },
    {
     "say": "Seven has not been seen. So line six stores four, and its index.",
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
      "4 → door 0"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Door one holds nine. The partner is two. Not seen. Store nine.",
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
     "vars": {
      "need": 2
     },
     "box": [
      "4 → door 0",
      "9 → door 1"
     ],
     "card": "11 − 9 = 2 → not seen",
     "arrows": null
    },
    {
     "say": "Door two holds two. The partner is nine. Is nine in the map?",
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
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "need": 9
     },
     "box": null,
     "card": "11 − 2 = 9 → seen?",
     "arrows": null
    },
    {
     "say": "Yes. At door one. Line five returns both indexes.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
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
      "4 → door 0",
      "9 → door 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "One pass, and every map operation is one step on average. O of n time.",
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
     "card": "1 pass → O(n) time",
     "arrows": null
    },
    {
     "say": "The map can hold every number. O of n space. Memory, traded for time.",
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
     "card": "the map → O(n) space",
     "arrows": null
    },
    {
     "say": "Accounting software matches two payments to one bill like this. For each amount, it looks up the one that completes the total.",
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
     "card": "matching payments to a total",
     "arrows": null
    }
   ]
  },
  {
   "id": "hm2",
   "num": 2,
   "title": "Seen It Before",
   "fn": "anyRepeat",
   "ask": "Return <b>true</b> if any number appears more than once in the array, and <b>false</b> if every number is different.",
   "spec": "anyRepeat([3, 7, 1, 7]) → true      anyRepeat([3, 7, 1]) → false",
   "start": "// nums is an array of numbers.\nfunction anyRepeat(nums) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: is there any value that shows up twice?",
    "Do [3, 7, 1, 7] by hand. At the second 7, how did you know it was a repeat?",
    "Comparing every pair is O(n²). What single question are you asking at every door?",
    "Which structure answers \"have I seen this?\" in one step?"
   ],
   "hints": [
    "Keep a Set of the numbers you have passed.",
    "At each door, ask the set whether it already has this number. If yes, return true.",
    "Otherwise add the number to the set. If the walk ends, return false."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       3,
       7,
       1,
       7
      ]
     ],
     "want": true
    },
    {
     "args": [
      [
       3,
       7,
       1
      ]
     ],
     "want": false
    },
    {
     "args": [
      []
     ],
     "want": false
    },
    {
     "args": [
      [
       5
      ]
     ],
     "want": false
    },
    {
     "args": [
      [
       2,
       2
      ]
     ],
     "want": true
    },
    {
     "args": [
      [
       1,
       2,
       3,
       4,
       1
      ]
     ],
     "want": true
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "return [Array.from({ length: 150000 }, (_, i) => i)];",
    "limit": 1500,
    "label": "150,000 different numbers",
    "msg": "Correct on the small cases, but too slow on the big one. Comparing every pair is O(n²). Ask a set."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function anyRepeat(nums) {",
    "  const seen = new Set();",
    "  for (let i = 0; i < nums.length; i++) {",
    "    if (seen.has(nums[i])) return true;",
    "    seen.add(nums[i]);",
    "  }",
    "  return false;",
    "}"
   ],
   "why": "When can the function stop early, and when does it have to look at every door?",
   "world": "A sign-up form checks your username against a set of taken names, in one step.",
   "view": {
    "row": [
     3,
     7,
     1,
     7
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
     "title": "seen",
     "rows": 1
    },
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "At every door, the question is the same. Have I seen this number before?",
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
     "card": "have I seen this before?",
     "arrows": null
    },
    {
     "say": "A set answers that in one step. Check first. Then add.",
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
     "card": "a set: check, then add",
     "arrows": null
    },
    {
     "say": "Line two makes an empty set.",
     "line": 2,
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
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Door zero. Three. Not in the set. Line five adds it.",
     "line": 5,
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
      "3"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Seven. Not in the set. Add it.",
     "line": 5,
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
     "box": [
      "3, 7"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "One. New. Add it.",
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
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "3, 7, 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Door three holds seven. What does the set say?",
     "line": 4,
     "ptr": {
      "i": 3
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
     "card": "is 7 in the set?",
     "arrows": null
    },
    {
     "say": "Seven is already there. Line four returns true.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
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
     "say": "One pass, and every map operation is one step on average. O of n time.",
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
     "card": "1 pass → O(n) time",
     "arrows": null
    },
    {
     "say": "The set can hold every number. O of n space.",
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
     "say": "A sign-up form checks your username against a set of taken names, in one step.",
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
     "card": "is this username taken?",
     "arrows": null
    }
   ]
  },
  {
   "id": "hm3",
   "num": 3,
   "title": "The Favourite",
   "fn": "mostCommon",
   "ask": "Return the number that appears <b>most often</b>. If there is a tie, return the one that reached that count first. The array has at least one number.",
   "spec": "mostCommon([5, 2, 2, 8, 2]) → 2",
   "start": "// nums has at least one number.\nfunction mostCommon(nums) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the value with the highest count.",
    "Do [5, 2, 2, 8, 2] by hand. What did you write down as you went?",
    "Counting each value by walking the whole row again is O(n²). What could hold all the counts at once?",
    "When does \"the best so far\" change?"
   ],
   "hints": [
    "Keep a Map from number → how many times you have seen it.",
    "At each door add one to that number's count: count.set(x, (count.get(x) || 0) + 1).",
    "Keep the best number so far. If this number's count is now higher than the best one's count, it becomes the best."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       5,
       2,
       2,
       8,
       2
      ]
     ],
     "want": 2
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
     "want": 1
    },
    {
     "args": [
      [
       3,
       3,
       4,
       4,
       4
      ]
     ],
     "want": 4
    },
    {
     "args": [
      [
       9,
       9,
       1,
       1
      ]
     ],
     "want": 9
    },
    {
     "args": [
      [
       0,
       1,
       0
      ]
     ],
     "want": 0
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "return [Array.from({ length: 120000 }, (_, i) => i % 60000)];",
    "limit": 1500,
    "label": "120,000 numbers",
    "msg": "Correct on the small cases, but too slow on the big one. Re-counting each number is O(n²). Keep the counts in a map."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function mostCommon(nums) {",
    "  const count = new Map();",
    "  let best = nums[0];",
    "  for (let i = 0; i < nums.length; i++) {",
    "    const x = nums[i];",
    "    count.set(x, (count.get(x) || 0) + 1);",
    "    if (count.get(x) > count.get(best)) best = x;",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "What does (count.get(x) || 0) do the first time a number is seen?",
   "world": "Counting in a map is how a shop finds its best seller, and how a poll counts votes.",
   "view": {
    "row": [
     5,
     2,
     2,
     8,
     2
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
     "best"
    ],
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
     "say": "One walk is enough, if something keeps a count for every number at the same time.",
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
     "card": "map: number → how many",
     "arrows": null
    },
    {
     "say": "And as the counts grow, remember which number is in the lead.",
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
     "card": "remember who is in the lead",
     "arrows": null
    },
    {
     "say": "An empty count map. And the first number, five, starts as the best.",
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
      "best": 5
     },
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Door zero. Five. Line six gives it a count of one.",
     "line": 6,
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
      "5 → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Two. Count one. Line seven asks: is one more than the best count, one? No.",
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
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "5 → 1",
      "2 → 1"
     ],
     "card": "1 > 1 → no",
     "arrows": null
    },
    {
     "say": "Two again. Its count is now two. Is that more than the best count?",
     "line": 7,
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
     "box": [
      "5 → 1",
      "2 → 2"
     ],
     "card": "2 > 1 → ?",
     "arrows": null
    },
    {
     "say": "Yes. Two takes the lead.",
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
     "vars": {
      "best": 2
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Eight. Count one. No change.",
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
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "5 → 1",
      "2 → 2",
      "8 → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Two once more. Three. It is already the best.",
     "line": 6,
     "ptr": {
      "i": 4
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
     "box": [
      "5 → 1",
      "2 → 3",
      "8 → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line nine returns best. Two.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
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
     "say": "One pass, and every map operation is one step on average. O of n time.",
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
     "card": "1 pass → O(n) time",
     "arrows": null
    },
    {
     "say": "One entry for each different number. O of n space.",
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
     "card": "the map → O(n) space",
     "arrows": null
    },
    {
     "say": "Counting in a map is how a shop finds its best seller, and how a poll counts votes.",
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
     "card": "best seller · counting votes",
     "arrows": null
    }
   ]
  },
  {
   "id": "hm4",
   "num": 4,
   "title": "Close Twins",
   "fn": "nearbyRepeat",
   "ask": "Return <b>true</b> if the same number appears at two doors that are <b>at most k doors apart</b> (their indexes differ by k or less). Otherwise return <b>false</b>.",
   "spec": "nearbyRepeat([4, 1, 2, 4, 2], 2) → true      (the two 2s are 2 apart)",
   "start": "// nums is an array of numbers. k is a positive number.\nfunction nearbyRepeat(nums, k) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: a repeat, with both copies close together.",
    "Do [4, 1, 2, 4, 2] with k = 2 by hand. The two 4s are 3 apart. Do they count?",
    "For each number, which earlier copy matters: the first one you saw, or the most recent?",
    "What do you need to remember about each number?"
   ],
   "hints": [
    "Keep a Map from number → the index where you last saw it.",
    "At each door: if the map has this number and i minus that index is k or less, return true.",
    "Then store (or overwrite) this number with the current index, so the map always holds the most recent one."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       4,
       1,
       2,
       4,
       2
      ],
      2
     ],
     "want": true
    },
    {
     "args": [
      [
       1,
       2,
       3,
       1
      ],
      2
     ],
     "want": false
    },
    {
     "args": [
      [
       1,
       2,
       3,
       1
      ],
      3
     ],
     "want": true
    },
    {
     "args": [
      [],
      1
     ],
     "want": false
    },
    {
     "args": [
      [
       7,
       7
      ],
      1
     ],
     "want": true
    },
    {
     "args": [
      [
       1,
       0,
       1,
       1
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
      5
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
    "function nearbyRepeat(nums, k) {",
    "  const last = new Map();",
    "  for (let i = 0; i < nums.length; i++) {",
    "    if (last.has(nums[i]) && i - last.get(nums[i]) <= k) {",
    "      return true;",
    "    }",
    "    last.set(nums[i], i);",
    "  }",
    "  return false;",
    "}"
   ],
   "why": "Why does line 7 overwrite the old index instead of keeping the first one?",
   "world": "A chat app can block the same message sent twice within a few seconds. It remembers when it last saw it.",
   "view": {
    "row": [
     4,
     1,
     2,
     4,
     2
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
     "title": "last seen",
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
     "say": "For each number, only the most recent copy matters. It is the closest one.",
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
     "card": "only the most recent copy matters",
     "arrows": null
    },
    {
     "say": "So keep a map from each number to the last door it was seen at.",
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
     "card": "map: number → last door",
     "arrows": null
    },
    {
     "say": "An empty map, called last.",
     "line": 2,
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
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Four, one, and two are all new. Each is stored with its door.",
     "line": 7,
     "ptr": {
      "i": 2
     },
     "hot": [
      0,
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
     "box": [
      "4 → door 0",
      "1 → door 1",
      "2 → door 2"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Door three holds four. It was last seen at door zero. Three minus zero is three. More than k.",
     "line": 4,
     "ptr": {
      "i": 3
     },
     "hot": [
      0,
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
     "card": "3 − 0 = 3 → too far",
     "arrows": null
    },
    {
     "say": "So line seven overwrites it. Four was last seen at door three.",
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
     "box": [
      "4 → door 3",
      "1 → door 1",
      "2 → door 2"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Door four holds two. It was last seen at door two. How far apart?",
     "line": 4,
     "ptr": {
      "i": 4
     },
     "hot": [
      2,
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
     "card": "4 − 2 = ?",
     "arrows": null
    },
    {
     "say": "Two. That is within k. Line five returns true.",
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
     "card": "4 − 2 = 2 → close enough",
     "arrows": null
    },
    {
     "say": "One pass, and every map operation is one step on average. O of n time.",
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
     "card": "1 pass → O(n) time",
     "arrows": null
    },
    {
     "say": "One entry for each different number. O of n space.",
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
     "card": "the map → O(n) space",
     "arrows": null
    },
    {
     "say": "A chat app can block the same message sent twice within a few seconds. It remembers when it last saw it.",
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
     "card": "blocking a double-sent message",
     "arrows": null
    }
   ]
  },
  {
   "id": "hm5",
   "num": 5,
   "title": "Same Letters, Same Group",
   "fn": "groupWords",
   "ask": "Put the words into groups so that words made of <b>exactly the same letters</b> are together. Return an array of groups (each group is an array of words). The order of the groups does not matter.",
   "spec": "groupWords([\"eat\", \"tea\", \"tan\", \"ate\"]) → [[\"eat\", \"tea\", \"ate\"], [\"tan\"]]",
   "start": "// words is an array of lowercase words.\nfunction groupWords(words) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: words that are rearrangements of each other belong together.",
    "How do you decide by hand that \"eat\" and \"tea\" belong together?",
    "Comparing every word with every other word is slow. Could each word be turned into a label that is the same for its whole group?",
    "What structure collects items under a label?"
   ],
   "hints": [
    "Sort the letters of a word: \"eat\", \"tea\" and \"ate\" all become \"aet\". That is the label (the key).",
    "Keep a Map from key → the list of words with that key.",
    "For each word: make its key, create an empty list if the key is new, push the word. Return [...groups.values()]."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       "eat",
       "tea",
       "tan",
       "ate"
      ]
     ],
     "want": [
      [
       "eat",
       "tea",
       "ate"
      ],
      [
       "tan"
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
       "a"
      ]
     ],
     "want": [
      [
       "a"
      ]
     ]
    },
    {
     "args": [
      [
       "ab",
       "ba",
       "ab"
      ]
     ],
     "want": [
      [
       "ab",
       "ba",
       "ab"
      ]
     ]
    },
    {
     "args": [
      [
       "abc",
       "def"
      ]
     ],
     "want": [
      [
       "abc"
      ],
      [
       "def"
      ]
     ]
    },
    {
     "args": [
      [
       "eat",
       "tea",
       "tan",
       "ate",
       "nat",
       "bat"
      ]
     ],
     "want": [
      [
       "eat",
       "tea",
       "ate"
      ],
      [
       "tan",
       "nat"
      ],
      [
       "bat"
      ]
     ]
    }
   ],
   "check": "const norm = (g) => JSON.stringify(g.map((x) => [...x].sort()).sort((a, b) => (a.join() < b.join() ? -1 : 1))); if (!Array.isArray(got) || got.some((x) => !Array.isArray(x))) return 'Return an array of groups, where each group is an array of words.'; return norm(got) === norm(want) ? '' : 'The groups are not right.';",
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function groupWords(words) {",
    "  const groups = new Map();",
    "  for (let i = 0; i < words.length; i++) {",
    "    const key = [...words[i]].sort().join('');",
    "    if (!groups.has(key)) groups.set(key, []);",
    "    groups.get(key).push(words[i]);",
    "  }",
    "  return [...groups.values()];",
    "}"
   ],
   "why": "Why do \"eat\" and \"tea\" get the same key? What would be another key that works without sorting?",
   "world": "Your photo app groups pictures the same way. Each photo gets a label, its date, and a map collects the groups.",
   "view": {
    "row": [
     "eat",
     "tea",
     "tan",
     "ate"
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
     "key"
    ],
    "box": {
     "title": "groups",
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
     "say": "Words from the same group have the same letters. Sort the letters, and they all turn into the same string.",
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
     "card": "sorted letters = the group label",
     "arrows": null
    },
    {
     "say": "So a map from that label to a list collects each group in one pass.",
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
     "card": "map: label → list of words",
     "arrows": null
    },
    {
     "say": "Line two makes an empty map of groups.",
     "line": 2,
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
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Eat. Line four sorts its letters. A, E, T. That is the key.",
     "line": 4,
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
     "vars": {
      "key": "aet"
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The key is new, so line five starts an empty list for it. Line six adds the word.",
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
      "aet: eat"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Tea. Sorted, it is also A, E, T. The same key. So it joins the same list.",
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
     "vars": {
      "key": "aet"
     },
     "box": [
      "aet: eat tea"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Tan. Sorted: A, N, T. A new key, so a new list.",
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
     "vars": {
      "key": "ant"
     },
     "box": [
      "aet: eat tea",
      "ant: tan"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Ate. What is its key, and which list does it join?",
     "line": 4,
     "ptr": {
      "i": 3
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
     "card": "sort \"ate\" → ?",
     "arrows": null
    },
    {
     "say": "A, E, T. It joins eat and tea.",
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
     "vars": {
      "key": "aet"
     },
     "box": [
      "aet: eat tea ate",
      "ant: tan"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line eight returns the lists. Two groups.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
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
     "say": "One pass over the words. Sorting the letters of a short word is a small, fixed cost. O of n words.",
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
     "card": "1 pass over the words → O(n)",
     "arrows": null
    },
    {
     "say": "The map holds every word once. O of n space.",
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
     "card": "the map → O(n) space",
     "arrows": null
    },
    {
     "say": "Your photo app groups pictures the same way. Each photo gets a label, its date, and a map collects the groups.",
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
     "card": "grouping photos by date",
     "arrows": null
    }
   ]
  },
  {
   "id": "hm6",
   "num": 6,
   "title": "The Longest Chain",
   "fn": "longestChain",
   "ask": "Return the length of the longest run of <b>consecutive numbers</b> (like 2, 3, 4, 5) that can be found in the array. The numbers can be in any order, and the answer must be found without sorting.",
   "spec": "longestChain([5, 2, 9, 3, 4]) → 4      (2, 3, 4, 5)",
   "start": "// nums is an array of whole numbers, in any order.\nfunction longestChain(nums) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the longest stretch of numbers that follow each other, wherever they sit in the row.",
    "Do [5, 2, 9, 3, 4] by hand. Where did you start counting the chain 2, 3, 4, 5?",
    "How can you tell, in one step, whether a number is the start of a chain?",
    "From a start, how do you count the chain without sorting?"
   ],
   "hints": [
    "Put every number in a Set, so \"is x here?\" takes one step.",
    "A number x starts a chain only if x − 1 is not in the set. Skip every other number.",
    "From a start, count upwards while x + len is in the set. Keep the longest count."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       5,
       2,
       9,
       3,
       4
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
       7
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       1,
       3,
       5
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       100,
       4,
       200,
       1,
       3,
       2
      ]
     ],
     "want": 4
    },
    {
     "args": [
      [
       1,
       2,
       2,
       3
      ]
     ],
     "want": 3
    },
    {
     "args": [
      [
       0,
       -1,
       1
      ]
     ],
     "want": 3
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*sort\\s*\\(",
     "msg": "Sorting works but costs O(n log n). A set can do it in O(n): find where each chain starts."
    }
   ],
   "big": {
    "gen": "return [Array.from({ length: 200000 }, (_, i) => 200000 - i)];",
    "limit": 1500,
    "label": "200,000 numbers in one long chain",
    "msg": "Correct on the small cases, but too slow on the big one. Counting a chain from every number is O(n²). Only count from the start of a chain."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function longestChain(nums) {",
    "  const have = new Set(nums);",
    "  let best = 0;",
    "  for (const x of have) {",
    "    if (have.has(x - 1)) continue;",
    "    let len = 1;",
    "    while (have.has(x + len)) len++;",
    "    best = Math.max(best, len);",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "Without line 5 the answer is still correct. So what is line 5 for?",
   "world": "A streaming app finds your longest run of days in a row like this, even when the days arrive out of order.",
   "view": {
    "row": [
     5,
     2,
     9,
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
    "ptrs": [],
    "vars": [
     "len",
     "best"
    ],
    "box": {
     "title": "have (a set)",
     "rows": 1
    },
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Put every number in a set. Then asking, is this number here, takes one step.",
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
     "card": "a set: is x here? → 1 step",
     "arrows": null
    },
    {
     "say": "A number starts a chain only if the number just below it is missing. Count upward from starts only.",
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
     "card": "x − 1 missing → x is a start",
     "arrows": null
    },
    {
     "say": "Line two puts every number into a set.",
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
     "vars": {
      "best": 0
     },
     "box": [
      "5, 2, 9, 3, 4"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Five. Is four in the set? Yes. So five is not a start. Line five skips it.",
     "line": 5,
     "ptr": null,
     "hot": [
      0
     ],
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
     "card": "4 is here → 5 is not a start",
     "arrows": null
    },
    {
     "say": "Two. Is one in the set? No. So two starts a chain.",
     "line": 5,
     "ptr": null,
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
     "vars": null,
     "box": null,
     "card": "1 is missing → 2 is a start",
     "arrows": null
    },
    {
     "say": "Line seven counts upward. Three is here. Four is here. Five is here. Six is not. The chain is four long.",
     "line": 7,
     "ptr": null,
     "hot": [
      1,
      3,
      4,
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
      "len": 4
     },
     "box": null,
     "card": "2, 3, 4, 5 → len 4",
     "arrows": null
    },
    {
     "say": "Line eight. Best is four.",
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
     "vars": {
      "best": 4
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Nine. Eight is not in the set, so nine is a start. How long is its chain?",
     "line": 7,
     "ptr": null,
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
     "card": "9, then 10 ?",
     "arrows": null
    },
    {
     "say": "One. Ten is not there. Best stays four.",
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
     "vars": {
      "len": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Three and four are not starts, so both are skipped. Line ten returns four.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [],
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
     "say": "Each number is counted only inside the one chain it belongs to. So the total is O of n.",
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
     "card": "each number counted once → O(n)",
     "arrows": null
    },
    {
     "say": "The set holds every number. O of n space.",
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
     "say": "A streaming app finds your longest run of days in a row like this, even when the days arrive out of order.",
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
     "card": "longest run of days in a row",
     "arrows": null
    }
   ]
  }
 ]
};
