window.CHAPTER = {
 "id": "mixed1",
 "title": "Mixed Set 1",
 "sub": "MIXED SET 1",
 "key": "burrow-ch-mixed1",
 "next": {
  "href": "chapter.html?c=recur",
  "label": "Chapter 10: Recursion"
 },
 "prev": {
  "href": "chapter.html?c=linked",
  "label": "Chapter 9: Linked lists"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "mx0",
   "label": "Read this first",
   "short": "Intro",
   "name": "Nobody tells you the tool",
   "intro": "Ten puzzles from chapters 1 to 9, with no labels. How to use this set."
  }
 ],
 "notes": {
  "w": "<h3>How to use a mixed set</h3><ul><li><b>Name the tool before you code.</b> Say it out loud or write it down: \"this is a sliding window because...\".</li>\n      <li><b>Signals:</b> sorted input → two pointers. A stretch of neighbours → sliding window. Seen before / how many / where → hash map or set.\n      Most recent first → stack. Sum of a range → prefix sums. Re-pointing → linked list tools (save next, dummy, fast and slow).</li>\n      <li><b>If your tool did not match the solution video</b>, that is the most useful result: go back to that chapter's key ideas.</li>\n      <li><b>Come back in a few days</b> and solve the ones you missed again from a blank editor.</li></ul>"
 },
 "quiz": {
  "mx1s-q": {
   "ask": "out is a Set holding 9 and 4. The code calls out.add(9). What does out hold?",
   "opts": [
    "9 and 4",
    "9, 4 and 9",
    "Only 9"
   ],
   "right": 0,
   "why": "A set holds each value once. Adding 9 again changes nothing."
  },
  "mx2s-q": {
   "ask": "read is on door 3 (value 3), write is 2, and the last value written is 2. What happens?",
   "opts": [
    "3 is written at door 2",
    "3 is written at door 3",
    "It is skipped"
   ],
   "right": 0,
   "why": "3 differs from 2, so it is new. It goes to the write position, door 2."
  },
  "mx3s-q": {
   "ask": "count is 1. \"a\" enters the window and \"d\" leaves. What is count?",
   "opts": [
    "2",
    "1",
    "0"
   ],
   "right": 0,
   "why": "\"a\" is a vowel, so +1. \"d\" is not, so nothing is subtracted."
  },
  "mx4s-q": {
   "ask": "The stack holds only \"a\". The new letter is \"a\". What does line 4 do?",
   "opts": [
    "Pops: the two a's vanish",
    "Pushes a second a",
    "Nothing"
   ],
   "right": 0,
   "why": "When \"bb\" vanished, the first \"a\" became the top again. So it meets the new \"a\" and both go."
  },
  "mx5s-q": {
   "ask": "height is −4 and the leg is +5. best is 0. What are they after lines 5 and 6?",
   "opts": [
    "height 1, best 1",
    "height 1, best 0",
    "height 9, best 9"
   ],
   "right": 0,
   "why": "−4 + 5 = 1, and 1 is higher than 0."
  },
  "mx6s-q": {
   "ask": "The map holds b → 2 and a → 0. The note needs a \"b\". What happens?",
   "opts": [
    "One b is spent, leaving 1",
    "Return false",
    "Nothing"
   ],
   "right": 0,
   "why": "There are 2, so the test on line 7 passes and line 8 lowers the count to 1."
  },
  "mx7s-q": {
   "ask": "curr is on the node 2. The next node holds 6 and is the last node. After line 5, where does curr.next point?",
   "opts": [
    "null",
    "The node 6",
    "The dummy"
   ],
   "right": 0,
   "why": "curr.next.next is null, so the 2 becomes the last node."
  },
  "mx8s-q": {
   "ask": "nums[3] is 4. Waiting: index 1 (value 5) and, on top, index 2 (value 1). Which get an answer?",
   "opts": [
    "Only index 2",
    "Both",
    "Neither"
   ],
   "right": 0,
   "why": "4 is bigger than 1, so index 2 is popped and answered. 4 is not bigger than 5, so index 1 keeps waiting."
  },
  "mx9s-q": {
   "ask": "i = 4 and the total 1 was first seen at index 0. How long is the balanced stretch?",
   "opts": [
    "4",
    "5",
    "2"
   ],
   "right": 0,
   "why": "i − first = 4 − 0 = 4: the doors 1, 2, 3 and 4."
  },
  "mx10s-q": {
   "ask": "The row is 5, 4, 3, 2, 1. flip(0, 1) reverses the first two doors. What is the row now?",
   "opts": [
    "4, 5, 3, 2, 1",
    "5, 4, 1, 2, 3",
    "1, 2, 3, 4, 5"
   ],
   "right": 0,
   "why": "Only doors 0 and 1 swap: 5, 4 becomes 4, 5."
  }
 },
 "problems": [
  {
   "id": "mx1",
   "num": 1,
   "title": "In Both Rows",
   "fn": "shared",
   "ask": "Return the numbers that appear in <b>both</b> arrays. Each number should be in the answer <b>once</b>, in any order.",
   "spec": "shared([4, 9, 5], [9, 4, 9, 8]) → [9, 4]      (any order)",
   "start": "// a and b are arrays of numbers, in no particular order.\nfunction shared(a, b) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Sorted input, a stretch of neighbours, \"seen before\", \"most recent first\", a sum of a range, arrows to re-point?",
    "Do [4, 9, 5] and [9, 4, 9, 8] by hand. For each number of the second row, what did you ask about the first row?",
    "Asking that by walking the first row every time is slow. What answers it in one step?",
    "The 9 appears twice in the second row. How do you keep it out of the answer twice?"
   ],
   "hints": [
    "The question you keep asking is: \"is this number in the other row?\"",
    "Put the first row in a Set. Walk the second row and keep the numbers the set has.",
    "Collect the answer in a second Set so that repeats are dropped, then return [...out]."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       4,
       9,
       5
      ],
      [
       9,
       4,
       9,
       8
      ]
     ],
     "want": [
      9,
      4
     ]
    },
    {
     "args": [
      [],
      [
       1,
       2
      ]
     ],
     "want": []
    },
    {
     "args": [
      [
       1,
       2
      ],
      []
     ],
     "want": []
    },
    {
     "args": [
      [
       1,
       2,
       2,
       1
      ],
      [
       2,
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
       2,
       3
      ],
      [
       4,
       5
      ]
     ],
     "want": []
    },
    {
     "args": [
      [
       7
      ],
      [
       7
      ]
     ],
     "want": [
      7
     ]
    }
   ],
   "check": "if (!Array.isArray(got)) return 'Return an array.'; const s = (x) => JSON.stringify([...x].sort((p, q) => p - q)); return s(got) === s(want) ? '' : (new Set(got).size !== got.length ? 'A number is in your answer more than once.' : 'That is not the right set of numbers.');",
   "forbid": [],
   "big": {
    "gen": "const n = 60000; return [Array.from({ length: n }, (_, i) => i * 2), Array.from({ length: n }, (_, i) => i * 2 + 1)];",
    "limit": 1500,
    "label": "two rows of 60,000 numbers",
    "msg": "Correct on the small cases, but too slow on the big one. Searching one row for every number of the other is O(n × m)."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function shared(a, b) {",
    "  const inA = new Set(a);",
    "  const out = new Set();",
    "  for (let i = 0; i < b.length; i++) {",
    "    if (inA.has(b[i])) out.add(b[i]);",
    "  }",
    "  return [...out];",
    "}"
   ],
   "why": "Why is out a Set and not an array?",
   "view": {
    "row": [
     9,
     4,
     9,
     8
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     4,
     9,
     5
    ],
    "rowLabel": "b",
    "row2Label": "a",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     }
    ],
    "vars": [],
    "box": {
     "title": "out (a set)",
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
     "say": "For every number in b, the question is: is this number in a? That is a seen before question.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "is this number in the other row?",
     "arrows": null
    },
    {
     "say": "So put a into a set. Then every question takes one step.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a set answers it in one step",
     "arrows": null
    },
    {
     "say": "Line two puts every number of a into a set.",
     "line": 2,
     "ptr": null,
     "hot": [
      "d0",
      "d1",
      "d2"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line three makes a second set, for the answer. A set, so that nothing can be added twice.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Now walk b. Nine. Is it in a? Yes. Add it to the answer.",
     "line": 5,
     "ptr": {
      "i": 0
     },
     "hot": [
      0,
      "d1"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "9"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Four. Also in a. Add it.",
     "line": 5,
     "ptr": {
      "i": 1
     },
     "hot": [
      1,
      "d0"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "9, 4"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Nine again. It is in a. So line five adds it. What does the answer hold now?",
     "line": 5,
     "ptr": {
      "i": 2
     },
     "hot": [
      2,
      "d1"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "add 9 to a set that has 9",
     "arrows": null
    },
    {
     "say": "Still nine and four. A set ignores repeats.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "9, 4"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Eight. Not in a. Skip it.",
     "line": 5,
     "ptr": {
      "i": 3
     },
     "hot": [],
     "ok": [],
     "bad": [
      3
     ],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line seven turns the set into an array, and returns it.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One pass to build the set, and one pass over b. O of n plus m.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "build + one pass → O(n + m)",
     "arrows": null
    },
    {
     "say": "The two sets hold at most every number. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "the sets → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "mx2",
   "num": 2,
   "title": "One of Each",
   "fn": "keepUnique",
   "ask": "The array is <b>sorted</b>. Change it <b>in place</b> so that the first part holds each value once, in order, and return <b>how many</b> different values there are. (The tests look at that first part of your array.)",
   "spec": "keepUnique([1, 1, 2, 3, 3]) → 3      and the array now starts with 1, 2, 3",
   "start": "// nums is sorted. Change nums itself, and return the number of different values.\nfunction keepUnique(nums) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Sorted input, a stretch of neighbours, \"seen before\", \"most recent first\", a sum of a range, arrows to re-point?",
    "Do [1, 1, 2, 3, 3] by hand. Which doors end up holding the answer?",
    "Deleting from the middle shifts everything. How can you avoid deleting at all?",
    "Because the row is sorted, how do you know a number is new?"
   ],
   "hints": [
    "Two markers going the same way: one reads every door, one marks where the next new value is written.",
    "A value is new if it differs from the last value written, nums[write - 1].",
    "When it is new: nums[write] = nums[read], then write++. At the end, write is the count."
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
       2,
       2,
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
       0,
       0,
       1,
       1,
       1,
       2,
       2,
       3,
       3,
       4
      ]
     ],
     "want": [
      0,
      1,
      2,
      3,
      4
     ]
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*(splice|filter)\\s*\\(|new Set",
     "msg": "No deleting, filtering or sets here: write the kept values over the front of the same array."
    }
   ],
   "big": null,
   "prep": null,
   "post": "return typeof got === 'number' ? args[0].slice(0, got) : 'no count was returned';",
   "solution": [
    "function keepUnique(nums) {",
    "  if (nums.length === 0) return 0;",
    "  let write = 1;",
    "  for (let read = 1; read < nums.length; read++) {",
    "    if (nums[read] !== nums[write - 1]) {",
    "      nums[write] = nums[read];",
    "      write++;",
    "    }",
    "  }",
    "  return write;",
    "}"
   ],
   "why": "Why do both markers start at 1 and not at 0?",
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
      "id": "write",
      "row": 1
     },
     {
      "id": "read",
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
     "say": "Nothing is deleted. The values worth keeping are written over the front of the same row.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "write the keepers over the front",
     "arrows": null
    },
    {
     "say": "The row is sorted, so a value is new exactly when it differs from the last one written.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "new = differs from the last written",
     "arrows": null
    },
    {
     "say": "The first value always stays. So both markers start on door one.",
     "line": 4,
     "ptr": {
      "write": 1,
      "read": 1
     },
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line five compares the door being read with the last value written. One and one. The same. Skip.",
     "line": 5,
     "ptr": null,
     "hot": [
      1,
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 = 1 → a repeat",
     "arrows": null
    },
    {
     "say": "Pip reads door two. Two. Different from one. So it is new.",
     "line": 5,
     "ptr": {
      "read": 2
     },
     "hot": [
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "2 ≠ 1 → new",
     "arrows": null
    },
    {
     "say": "Line six writes it at Moss, door one. Line seven moves Moss on.",
     "line": 7,
     "ptr": {
      "write": 2
     },
     "hot": [],
     "ok": [
      1
     ],
     "bad": [],
     "set": {
      "1": 2
     },
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Door three holds three. The last value written is two. Where is the three written?",
     "line": 5,
     "ptr": {
      "read": 3
     },
     "hot": [
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "3 ≠ 2 → written at ?",
     "arrows": null
    },
    {
     "say": "At door two. And Moss moves to door three.",
     "line": 7,
     "ptr": {
      "write": 3
     },
     "hot": [],
     "ok": [
      2
     ],
     "bad": [],
     "set": {
      "2": 3
     },
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The last door holds three again. A repeat. Skip.",
     "line": 5,
     "ptr": {
      "read": 4
     },
     "hot": [],
     "ok": [],
     "bad": [
      4
     ],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "3 = 3 → a repeat",
     "arrows": null
    },
    {
     "say": "Line ten returns write. Three values, in the first three doors.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The reader visits each door once. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 pass → O(n) time",
     "arrows": null
    },
    {
     "say": "Everything happens inside the same row. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "in place → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "mx3",
   "num": 3,
   "title": "The Most Vowels",
   "fn": "mostVowels",
   "ask": "Return the largest number of vowels (<b>a, e, i, o, u</b>) found in any stretch of <b>k</b> neighbouring letters. You can assume 1 ≤ k ≤ the length of the word.",
   "spec": "mostVowels(\"ideas\", 2) → 2      (\"ea\")",
   "start": "// word is lowercase letters. k is the length of the stretch.\nfunction mostVowels(word, k) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Sorted input, a stretch of neighbours, \"seen before\", \"most recent first\", a sum of a range, arrows to re-point?",
    "Do \"ideas\" with k = 2 by hand: count the vowels in \"id\", \"de\", \"ea\", \"as\".",
    "Two stretches next to each other share almost all their letters. Which letters differ?",
    "So how does the count change when the stretch moves one letter?"
   ],
   "hints": [
    "Count the vowels in the first k letters.",
    "Slide the stretch one letter at a time: add one if the letter that enters is a vowel, subtract one if the letter that leaves is a vowel.",
    "Keep the best count seen."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "ideas",
      2
     ],
     "want": 2
    },
    {
     "args": [
      "rhythm",
      3
     ],
     "want": 0
    },
    {
     "args": [
      "a",
      1
     ],
     "want": 1
    },
    {
     "args": [
      "leetcode",
      3
     ],
     "want": 2
    },
    {
     "args": [
      "aeiou",
      2
     ],
     "want": 2
    },
    {
     "args": [
      "beautiful",
      3
     ],
     "want": 3
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "const n = 120000; return [\"ab\".repeat(n / 2), n / 2];",
    "limit": 1500,
    "label": "120,000 letters, a stretch of 60,000",
    "msg": "Correct on the small cases, but too slow on the big one. Counting every stretch from scratch is O(n × k)."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function mostVowels(word, k) {",
    "  const isVowel = (ch) => 'aeiou'.includes(ch);",
    "  let count = 0;",
    "  for (let i = 0; i < k; i++) if (isVowel(word[i])) count++;",
    "  let best = count;",
    "  for (let right = k; right < word.length; right++) {",
    "    if (isVowel(word[right])) count++;",
    "    if (isVowel(word[right - k])) count--;",
    "    best = Math.max(best, count);",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "Which letter is word[right - k], and why is it the one that leaves?",
   "view": {
    "row": [
     "i",
     "d",
     "e",
     "a",
     "s"
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
      "id": "right",
      "row": 1
     }
    ],
    "vars": [
     "count",
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
     "say": "A stretch of fixed size, moving along the row. That is a sliding window.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a stretch of fixed size → a window",
     "arrows": null
    },
    {
     "say": "When it moves, one letter enters and one leaves. Only those two can change the count.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "count: + entering − leaving",
     "arrows": null
    },
    {
     "say": "Line two is a small helper that says whether a letter is a vowel.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line four counts the first window. I, D. One vowel.",
     "line": 4,
     "ptr": null,
     "hot": [
      0,
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": {
      "count": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line five. Best is one.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": {
      "best": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Slide. E enters, a vowel, so count goes up. I leaves, a vowel, so count goes down. Still one.",
     "line": 8,
     "ptr": {
      "right": 2
     },
     "hot": [
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + 1 − 1 = 1",
     "arrows": null
    },
    {
     "say": "Slide again. A enters. D leaves. What is the count?",
     "line": 7,
     "ptr": {
      "right": 3
     },
     "hot": [
      2,
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a enters · d leaves → ?",
     "arrows": null
    },
    {
     "say": "Two. A is a vowel, and D is not. A new best.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": {
      "count": 2,
      "best": 2
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The last slide. S enters, E leaves. One. Not better.",
     "line": 8,
     "ptr": {
      "right": 4
     },
     "hot": [
      3,
      4
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": {
      "count": 1
     },
     "box": null,
     "card": "2 + 0 − 1 = 1",
     "arrows": null
    },
    {
     "say": "Line eleven returns the best. Two.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Each slide is two checks, however wide the window. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "2 checks per slide → O(n) time",
     "arrows": null
    },
    {
     "say": "Two numbers. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "2 numbers → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "mx4",
   "num": 4,
   "title": "Vanishing Pairs",
   "fn": "collapse",
   "ask": "Whenever two <b>equal letters sit next to each other</b>, both vanish. This repeats until no such pair is left. Return what remains.",
   "spec": "collapse(\"abbac\") → \"c\"      (bb vanishes, then aa, leaving c)",
   "start": "// text is a string of lowercase letters.\nfunction collapse(text) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Sorted input, a stretch of neighbours, \"seen before\", \"most recent first\", a sum of a range, arrows to re-point?",
    "Do \"abbac\" by hand. After \"bb\" vanishes, which two letters become neighbours?",
    "Rebuilding the whole string after every removal is slow. Reading left to right, which earlier letter can a new letter ever cancel with?",
    "What keeps that letter ready for you?"
   ],
   "hints": [
    "A new letter can only cancel with the most recent letter that has not vanished.",
    "Keep the surviving letters on a stack. If the top equals the new letter, pop. Otherwise push.",
    "At the end, join the stack into a string."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "abbac"
     ],
     "want": "c"
    },
    {
     "args": [
      ""
     ],
     "want": ""
    },
    {
     "args": [
      "a"
     ],
     "want": "a"
    },
    {
     "args": [
      "aa"
     ],
     "want": ""
    },
    {
     "args": [
      "abba"
     ],
     "want": ""
    },
    {
     "args": [
      "abbaca"
     ],
     "want": "ca"
    },
    {
     "args": [
      "abc"
     ],
     "want": "abc"
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "const n = 100000; return [\"a\".repeat(n) + \"b\".repeat(n) + \"b\".repeat(n) + \"a\".repeat(n)];",
    "limit": 1500,
    "label": "400,000 letters",
    "msg": "Correct on the small cases, but too slow on the big one. Rebuilding the string after every removal is O(n²)."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function collapse(text) {",
    "  const stack = [];",
    "  for (let i = 0; i < text.length; i++) {",
    "    if (stack.length && stack.at(-1) === text[i]) stack.pop();",
    "    else stack.push(text[i]);",
    "  }",
    "  return stack.join('');",
    "}"
   ],
   "why": "After a pair vanishes, the letters on either side become neighbours. How does the stack take care of that without any extra code?",
   "view": {
    "row": [
     "a",
     "b",
     "b",
     "a",
     "c"
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
     "title": "stack (top is last)",
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
     "say": "A new letter can only cancel with the most recent letter that is still standing.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "cancel with the most recent survivor",
     "arrows": null
    },
    {
     "say": "The most recent thing first. That is a stack.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "most recent first → a stack",
     "arrows": null
    },
    {
     "say": "Line two makes an empty stack of survivors.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "A. The stack is empty, so line five pushes it.",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "a"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "B. The top is A. Different. Push.",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "a  b"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "B again. The top is B. Equal. So line four pops it. The pair is gone.",
     "line": 4,
     "ptr": {
      "i": 2
     },
     "hot": [
      2
     ],
     "ok": [],
     "bad": [
      1,
      2
     ],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "a"
     ],
     "card": "top = b → pop",
     "arrows": null
    },
    {
     "say": "A. What is on top of the stack now?",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "top = ? · new letter = a",
     "arrows": null
    },
    {
     "say": "A. The two A's have become neighbours, and they cancel. The stack is empty.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      0,
      3
     ],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "C. Nothing to cancel with. Push.",
     "line": 5,
     "ptr": {
      "i": 4
     },
     "hot": [
      4
     ],
     "ok": [
      4
     ],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "c"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line seven joins the survivors. C.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Each letter is pushed once, and popped at most once. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "pushed once, popped once → O(n)",
     "arrows": null
    },
    {
     "say": "The stack can hold every letter. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "the stack → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "mx5",
   "num": 5,
   "title": "The Hill Walk",
   "fn": "highestPoint",
   "ask": "A walk starts at height <b>0</b>. Each number is how much the path rises (positive) or falls (negative) on that leg. Return the <b>highest point</b> reached at any moment, including the start.",
   "spec": "highestPoint([-5, 1, 5, 0, -7]) → 1      (heights: 0, -5, -4, 1, 1, -6)",
   "start": "// gains[i] is the change in height on leg i. The walk starts at height 0.\nfunction highestPoint(gains) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Sorted input, a stretch of neighbours, \"seen before\", \"most recent first\", a sum of a range, arrows to re-point?",
    "Work out the height after each leg of [-5, 1, 5, 0, -7] by hand.",
    "What two numbers were you keeping track of?",
    "What should the answer be if every leg goes downhill?"
   ],
   "hints": [
    "Keep a running height: add each leg to it.",
    "After each leg, compare the height with the best so far.",
    "Start best at 0, because the starting point counts."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       -5,
       1,
       5,
       0,
       -7
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
       -1,
       -2
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       3
      ]
     ],
     "want": 3
    },
    {
     "args": [
      [
       1,
       2,
       3
      ]
     ],
     "want": 6
    },
    {
     "args": [
      [
       -4,
       -3,
       -2,
       -1,
       4,
       3,
       2
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       2,
       -1,
       4
      ]
     ],
     "want": 5
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function highestPoint(gains) {",
    "  let height = 0;",
    "  let best = 0;",
    "  for (let i = 0; i < gains.length; i++) {",
    "    height += gains[i];",
    "    best = Math.max(best, height);",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "Why does best start at 0 and not at the first height?",
   "view": {
    "row": [
     -5,
     1,
     5,
     0,
     -7
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
     "height",
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
     "say": "The numbers are changes. The height at any moment is the sum of all the changes so far.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "height = sum of changes so far",
     "arrows": null
    },
    {
     "say": "A sum of everything so far is a running total. Carry it, and remember its highest value.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "carry the total, remember the best",
     "arrows": null
    },
    {
     "say": "Height starts at zero. And so does best, because the start counts.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": {
      "height": 0,
      "best": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The first leg goes down five. Height is minus five. Best stays zero.",
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
     "gone": [],
     "show": [],
     "vars": {
      "height": -5
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Up one. Minus four.",
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
     "gone": [],
     "show": [],
     "vars": {
      "height": -4
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Up five. What is the height, and what is best?",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "−4 + 5 = ?",
     "arrows": null
    },
    {
     "say": "Height is one. And one beats zero. Best is one.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      2
     ],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": {
      "height": 1,
      "best": 1
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "A flat leg. Still one.",
     "line": 5,
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Down seven. Minus six. Best keeps its one.",
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
     "gone": [],
     "show": [],
     "vars": {
      "height": -6
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line eight returns the best. One.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One walk. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 walk → O(n) time",
     "arrows": null
    },
    {
     "say": "Two numbers. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "2 numbers → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "mx6",
   "num": 6,
   "title": "Cut-Out Letters",
   "fn": "canWrite",
   "ask": "You want to write <b>note</b> using letters cut out of <b>letters</b>. Each cut-out letter can be used once. Return <b>true</b> if the note can be written.",
   "spec": "canWrite(\"aab\", \"baba\") → true      canWrite(\"aab\", \"ab\") → false",
   "start": "// note and letters are strings of lowercase letters.\nfunction canWrite(note, letters) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Sorted input, a stretch of neighbours, \"seen before\", \"most recent first\", a sum of a range, arrows to re-point?",
    "Do \"aab\" from \"baba\" by hand. What did you tick off as you went?",
    "For each letter of the note, what do you need to know about the supply?",
    "What holds that number for every letter at once?"
   ],
   "hints": [
    "Count how many of each letter the supply has, in a Map.",
    "Walk the note. If the count for a letter is missing or 0, return false.",
    "Otherwise lower that count by one. If the walk ends, return true."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "aab",
      "baba"
     ],
     "want": true
    },
    {
     "args": [
      "aab",
      "ab"
     ],
     "want": false
    },
    {
     "args": [
      "",
      "abc"
     ],
     "want": true
    },
    {
     "args": [
      "a",
      ""
     ],
     "want": false
    },
    {
     "args": [
      "abc",
      "cba"
     ],
     "want": true
    },
    {
     "args": [
      "zz",
      "z"
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
    "function canWrite(note, letters) {",
    "  const count = new Map();",
    "  for (const ch of letters) {",
    "    count.set(ch, (count.get(ch) || 0) + 1);",
    "  }",
    "  for (let i = 0; i < note.length; i++) {",
    "    if (!count.get(note[i])) return false;",
    "    count.set(note[i], count.get(note[i]) - 1);",
    "  }",
    "  return true;",
    "}"
   ],
   "why": "Line 7 uses !count.get(...). Which two different situations does that one test catch?",
   "view": {
    "row": [
     "a",
     "a",
     "b"
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     "b",
     "a",
     "b",
     "a"
    ],
    "rowLabel": "note",
    "row2Label": "have",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     }
    ],
    "vars": [],
    "box": {
     "title": "count",
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
     "say": "For every letter of the note, the question is: how many of these are left? That is a counting question.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "how many of each are left?",
     "arrows": null
    },
    {
     "say": "So count the supply in a map first. Then spend it, one letter at a time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "count the supply, then spend it",
     "arrows": null
    },
    {
     "say": "Lines three to five count the supply. Two B, and two A.",
     "line": 4,
     "ptr": null,
     "hot": [
      "d0",
      "d1",
      "d2",
      "d3"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "b → 2",
      "a → 2"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Now the note. A. Line seven asks: is there one left? Yes, two.",
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
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a → 2 left",
     "arrows": null
    },
    {
     "say": "Line eight spends it. One A left.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "b → 2",
      "a → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "A again. One left. Spend it.",
     "line": 8,
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "b → 2",
      "a → 0"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "B. How many are left, and what happens?",
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "b → ? left",
     "arrows": null
    },
    {
     "say": "Two. So one is spent.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [
      2
     ],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "b → 1",
      "a → 0"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "The note is finished, and nothing ran out. Line ten returns true.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One pass over the supply, one over the note. O of n plus m.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "2 passes → O(n + m)",
     "arrows": null
    },
    {
     "say": "With lowercase letters, the map has at most twenty six entries. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "≤ 26 entries → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "mx7",
   "num": 7,
   "title": "Take Them All Out",
   "fn": "removeValue",
   "ask": "Remove <b>every node</b> whose value is <b>x</b> from the linked list, and return the head of what is left.",
   "spec": "removeValue(1 → 6 → 2 → 6, 6) → 1 → 2",
   "start": "// A node is { val, next }. head is the first node, or null when the list is empty.\nfunction removeValue(head, x) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Sorted input, a stretch of neighbours, \"seen before\", \"most recent first\", a sum of a range, arrows to re-point?",
    "To unhook a node, which node do you need to be standing on?",
    "What if the very first node has to go? What would give it a node before it?",
    "After unhooking a node, should you move forward straight away? Think about two x nodes in a row."
   ],
   "hints": [
    "Put a dummy node in front of the head, and start a marker curr on it.",
    "Look at the node after curr. If its value is x, point past it: curr.next = curr.next.next. Do not move curr.",
    "Otherwise move curr forward. Return dummy.next."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       6,
       2,
       6
      ],
      6
     ],
     "want": [
      1,
      2
     ]
    },
    {
     "args": [
      [],
      1
     ],
     "want": []
    },
    {
     "args": [
      [
       7,
       7,
       7
      ],
      7
     ],
     "want": []
    },
    {
     "args": [
      [
       1,
       2,
       3
      ],
      9
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
       6,
       1,
       6
      ],
      6
     ],
     "want": [
      1
     ]
    },
    {
     "args": [
      [
       5
      ],
      5
     ],
     "want": []
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "return [toList(args[0]), args[1]];",
   "post": "return got === undefined ? 'nothing was returned' : toArr(got);",
   "solution": [
    "function removeValue(head, x) {",
    "  const dummy = { val: 0, next: head };",
    "  let curr = dummy;",
    "  while (curr.next !== null) {",
    "    if (curr.next.val === x) curr.next = curr.next.next;",
    "    else curr = curr.next;",
    "  }",
    "  return dummy.next;",
    "}"
   ],
   "why": "Try removeValue(6 → 1, 6) by hand. Why would this be awkward without the dummy node?",
   "view": {
    "row": [
     "D",
     1,
     6,
     2,
     6
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
     1,
     3
    ]
   },
   "steps": [
    {
     "say": "Removing a node means pointing the node before it, past it. So always look one node ahead.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "look ahead, point past it",
     "arrows": null
    },
    {
     "say": "And a dummy node in front means even the first real node has a node before it.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "dummy: a fake node in front",
     "arrows": null
    },
    {
     "say": "Line two puts a dummy node, D, in front. Curr starts on it.",
     "line": 3,
     "ptr": {
      "curr": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line five looks at the next node. One. Not a six. So line six moves curr forward.",
     "line": 6,
     "ptr": {
      "curr": 1
     },
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "next is 1 → keep it",
     "arrows": null
    },
    {
     "say": "The next node holds six. Line five points curr past it. Curr does not move.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      2
     ],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "next is 6 → point past it",
     "arrows": {
      "hide": [
       "f1"
      ],
      "show": [
       "s1"
      ]
     }
    },
    {
     "say": "Now the next node holds two. Keep it, and move on.",
     "line": 6,
     "ptr": {
      "curr": 3
     },
     "hot": [
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "next is 2 → keep it",
     "arrows": null
    },
    {
     "say": "The next node holds six. And after it, there is nothing. Where does the arrow point now?",
     "line": 5,
     "ptr": null,
     "hot": [
      4
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "next is 6 → point to ?",
     "arrows": null
    },
    {
     "say": "To null. Two is now the last node.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      4
     ],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
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
     "say": "Curr has no next node, so the loop ends. Line eight returns dummy dot next.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      3
     ],
     "bad": [],
     "set": null,
     "swap": null,
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
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 pass → O(n) time",
     "arrows": null
    },
    {
     "say": "One marker and a dummy. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 marker → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "mx8",
   "num": 8,
   "title": "The Next Bigger One",
   "fn": "nextBigger",
   "ask": "For every number, find the <b>first number to its right that is bigger</b>. Return those in an array; use <b>-1</b> where there is none.",
   "spec": "nextBigger([2, 5, 1, 4]) → [5, -1, 4, -1]",
   "start": "// nums is an array of numbers.\nfunction nextBigger(nums) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Sorted input, a stretch of neighbours, \"seen before\", \"most recent first\", a sum of a range, arrows to re-point?",
    "Do [2, 5, 1, 4] by hand. When the 4 arrives, which earlier numbers has it just answered?",
    "Looking to the right from every number is O(n²). Turn it round: who is still waiting for an answer?",
    "In what order do the waiting numbers get answered?"
   ],
   "hints": [
    "Keep a stack of the indexes that are still waiting for a bigger number.",
    "For each new number: while the number at the top index is smaller, pop that index and write the new number as its answer.",
    "Then push the new index. Start every answer at -1."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       2,
       5,
       1,
       4
      ]
     ],
     "want": [
      5,
      -1,
      4,
      -1
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
      -1
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
      2,
      3,
      -1
     ]
    },
    {
     "args": [
      [
       3,
       2,
       1
      ]
     ],
     "want": [
      -1,
      -1,
      -1
     ]
    },
    {
     "args": [
      [
       2,
       2,
       3
      ]
     ],
     "want": [
      3,
      3,
      -1
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "const n = 120000; return [Array.from({ length: n }, (_, i) => n - i)];",
    "limit": 1500,
    "label": "120,000 numbers, each smaller than the last",
    "msg": "Correct on the small cases, but too slow on the big one. Looking to the right from every number is O(n²)."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function nextBigger(nums) {",
    "  const out = new Array(nums.length).fill(-1);",
    "  const stack = [];",
    "  for (let i = 0; i < nums.length; i++) {",
    "    while (stack.length && nums[stack.at(-1)] < nums[i]) {",
    "      out[stack.pop()] = nums[i];",
    "    }",
    "    stack.push(i);",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "Why does the stack hold indexes and not the numbers themselves?",
   "view": {
    "row": [
     2,
     5,
     1,
     4
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     -1,
     -1,
     -1,
     -1
    ],
    "rowLabel": "nums",
    "row2Label": "out",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     }
    ],
    "vars": [],
    "box": {
     "title": "waiting",
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
     "say": "Next bigger. That phrase is the signal. Let each new number answer the smaller ones that are still waiting.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "\"next bigger\" → who is waiting?",
     "arrows": null
    },
    {
     "say": "The waiting indexes sit on a stack. A new number pops every smaller one off the top.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "pop every smaller one off the top",
     "arrows": null
    },
    {
     "say": "Every answer starts at minus one. The stack of waiting indexes is empty.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Index zero. Nobody is waiting. Line eight pushes it.",
     "line": 8,
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "0"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Index one holds five. The waiting index zero holds two. Five is bigger, so index zero gets its answer.",
     "line": 6,
     "ptr": {
      "i": 1
     },
     "hot": [
      0,
      1
     ],
     "ok": [
      "d0"
     ],
     "bad": [],
     "set": {
      "d0": 5
     },
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [],
     "card": "5 > 2 → out[0] = 5",
     "arrows": null
    },
    {
     "say": "Push index one. Then index two, which holds one. One answers nobody, so it waits too.",
     "line": 8,
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1  2"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Index three holds four. Indexes one and two are waiting. Which of them does it answer?",
     "line": 5,
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
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "4 against 1, then 5",
     "arrows": null
    },
    {
     "say": "Only index two. Four is bigger than one, but not bigger than five.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      "d2"
     ],
     "bad": [],
     "set": {
      "d2": 4
     },
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1"
     ],
     "card": "out[2] = 4 · index 1 waits",
     "arrows": null
    },
    {
     "say": "Push index three. The row is finished. Indexes one and three never got an answer.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1  3"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "So they keep their minus one. Line ten returns the answers.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Each index is pushed once, and popped at most once. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "pushed once, popped once → O(n)",
     "arrows": null
    },
    {
     "say": "The stack can hold every index. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "the stack → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "mx9",
   "num": 9,
   "title": "Evenly Matched",
   "fn": "longestBalanced",
   "ask": "The array holds only <b>1</b> and <b>0</b>. Return the length of the longest unbroken stretch that contains <b>as many 1s as 0s</b>.",
   "spec": "longestBalanced([1, 1, 0, 1, 0]) → 4      (1, 0, 1, 0)",
   "start": "// nums holds only 1 and 0.\nfunction longestBalanced(nums) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Sorted input, a stretch of neighbours, \"seen before\", \"most recent first\", a sum of a range, arrows to re-point?",
    "Count +1 for every 1 and −1 for every 0. What is the total of a balanced stretch?",
    "Every stretch is a running total minus an earlier running total. When is that difference zero?",
    "For the longest stretch, which earlier position with the same total do you want: the first, or the latest?"
   ],
   "hints": [
    "Keep a running total: +1 for a 1, −1 for a 0. A stretch is balanced when the total is the same before it and after it.",
    "Keep a Map from total → the first index where that total appeared. Start it with 0 → -1.",
    "At each door: if the total was seen before, the stretch since then is balanced (length i − that index). Otherwise store it."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       1,
       0,
       1,
       0
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
       0,
       1
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       0,
       1,
       0
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       1,
       1,
       1
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       0,
       0,
       1,
       0,
       0,
       0,
       1,
       1
      ]
     ],
     "want": 6
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "return [Array.from({ length: 150000 }, (_, i) => (i % 3 === 0 ? 0 : 1))];",
    "limit": 1500,
    "label": "150,000 doors",
    "msg": "Correct on the small cases, but too slow on the big one. Trying every stretch is O(n²)."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function longestBalanced(nums) {",
    "  const first = new Map([[0, -1]]);",
    "  let sum = 0;",
    "  let best = 0;",
    "  for (let i = 0; i < nums.length; i++) {",
    "    sum += nums[i] === 1 ? 1 : -1;",
    "    if (first.has(sum)) {",
    "      best = Math.max(best, i - first.get(sum));",
    "    } else {",
    "      first.set(sum, i);",
    "    }",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "Why does the map store only the first index for each total, and never update it?",
   "view": {
    "row": [
     1,
     1,
     0,
     1,
     0
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
     "sum",
     "best"
    ],
    "box": {
     "title": "first seen",
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
     "say": "Count plus one for a one, and minus one for a zero. Then a balanced stretch adds up to zero.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 → +1 · 0 → −1 · balanced = 0",
     "arrows": null
    },
    {
     "say": "A stretch adds up to zero when the running total is the same before it and after it. A map remembers where each total first appeared.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "same total twice → balanced between",
     "arrows": null
    },
    {
     "say": "The map starts with total zero, seen just before the first door. Index minus one.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": {
      "sum": 0,
      "best": 0
     },
     "box": [
      "0 → at −1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Door zero is a one. Sum is one. Never seen. Store it.",
     "line": 10,
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
     "gone": [],
     "show": [],
     "vars": {
      "sum": 1
     },
     "box": [
      "0 → at −1",
      "1 → at 0"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Another one. Sum is two. New. Store it.",
     "line": 10,
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
     "gone": [],
     "show": [],
     "vars": {
      "sum": 2
     },
     "box": [
      "0 → at −1",
      "1 → at 0",
      "2 → at 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "A zero. Sum drops to one. One was first seen at index zero. So the doors after it are balanced. Two wide.",
     "line": 8,
     "ptr": {
      "i": 2
     },
     "hot": [
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": {
      "sum": 1,
      "best": 2
     },
     "box": [
      "0 → at −1",
      "1 → at 0",
      "2 → at 1"
     ],
     "card": "2 − 0 = 2 wide",
     "arrows": null
    },
    {
     "say": "A one. Sum is two again. First seen at index one. Two wide. No better.",
     "line": 8,
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
     "swap": null,
     "gone": [],
     "show": [],
     "vars": {
      "sum": 2
     },
     "box": [
      "0 → at −1",
      "1 → at 0",
      "2 → at 1"
     ],
     "card": "3 − 1 = 2 wide",
     "arrows": null
    },
    {
     "say": "A zero. Sum is one. First seen at index zero. How wide is this stretch?",
     "line": 8,
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
     "gone": [],
     "show": [],
     "vars": {
      "sum": 1
     },
     "box": null,
     "card": "4 − 0 = ?",
     "arrows": null
    },
    {
     "say": "Four. Doors one to four. A new best.",
     "line": 8,
     "ptr": null,
     "hot": [
      1,
      2,
      3,
      4
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": {
      "best": 4
     },
     "box": null,
     "card": "4 − 0 = 4 wide",
     "arrows": null
    },
    {
     "say": "Line thirteen returns the best. Four.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One pass, one map lookup per door. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 pass → O(n) time",
     "arrows": null
    },
    {
     "say": "The map can hold a total for every door. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "the map → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "mx10",
   "num": 10,
   "title": "Shift the Row",
   "fn": "rotateRight",
   "ask": "Shift every number <b>k doors to the right</b>; numbers that fall off the end come back at the front. Change the array <b>in place</b>, using no second array.",
   "spec": "rotateRight([1, 2, 3, 4, 5], 2)  →  the array becomes [4, 5, 1, 2, 3]",
   "start": "// Change nums itself. k is 0 or more, and can be bigger than nums.length.\nfunction rotateRight(nums, k) {\n  // your code here\n}\n",
   "plan": [
    "Before anything else: which signal do you see? Sorted input, a stretch of neighbours, \"seen before\", \"most recent first\", a sum of a range, arrows to re-point?",
    "Do [1, 2, 3, 4, 5] with k = 2 by hand. Which numbers end up at the front, and in what order?",
    "Moving every number one door, k times, is slow. Reverse the whole row and look at it. What is nearly right?",
    "What does shifting by 5 do to a row of 5? So what should a k of 7 become?"
   ],
   "hints": [
    "Reverse the whole row: the last k numbers are now at the front, but back to front.",
    "Reverse just the first k doors, then reverse the rest. Both parts are now in the right order.",
    "First reduce k with k % nums.length. Write one helper that reverses the doors from left to right in place."
   ],
   "mode": "inplace",
   "tests": [
    {
     "args": [
      [
       1,
       2,
       3,
       4,
       5
      ],
      2
     ],
     "want": [
      4,
      5,
      1,
      2,
      3
     ]
    },
    {
     "args": [
      [],
      3
     ],
     "want": []
    },
    {
     "args": [
      [
       1
      ],
      5
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
      1
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
       3
      ],
      3
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
       2,
       3,
       4
      ],
      6
     ],
     "want": [
      3,
      4,
      1,
      2
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
      1,
      2,
      3
     ]
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*(slice|concat|splice|unshift)\\s*\\(",
     "msg": "No second array, and no shifting helpers: do it with swaps inside the same array."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function rotateRight(nums, k) {",
    "  const flip = (left, right) => {",
    "    while (left < right) {",
    "      [nums[left], nums[right]] = [nums[right], nums[left]];",
    "      left++; right--;",
    "    }",
    "  };",
    "  if (nums.length === 0) return;",
    "  k = k % nums.length;",
    "  flip(0, nums.length - 1);",
    "  flip(0, k - 1);",
    "  flip(k, nums.length - 1);",
    "}"
   ],
   "why": "Why is line 9 needed? What would flip(0, k - 1) do for a row of 3 and k = 7 without it?",
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
      "id": "left",
      "row": 1
     },
     {
      "id": "right",
      "row": 1
     }
    ],
    "vars": [
     "k"
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
     "say": "Reverse the whole row, and the last k numbers arrive at the front. In the wrong order, but in the right place.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "reverse all: the last k come first",
     "arrows": null
    },
    {
     "say": "Then reverse each part on its own, and both are in order again. Reversing is the two ends swap you already know.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "then reverse each part",
     "arrows": null
    },
    {
     "say": "Lines two to seven are a helper. Flip reverses the doors between left and right, by swapping the ends and walking inward.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "flip = swap the ends, walk inward",
     "arrows": null
    },
    {
     "say": "Line nine keeps k inside the row. Two stays two.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": {
      "k": 2
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line ten flips the whole row. Five, four, three, two, one.",
     "line": 10,
     "ptr": {
      "left": 0,
      "right": 4
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": [
      [
       0,
       4
      ],
      [
       1,
       3
      ]
     ],
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "flip(0, 4)",
     "arrows": null
    },
    {
     "say": "Four and five are at the front, where they belong. But back to front.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1
     ],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "5, 4 are in front, reversed",
     "arrows": null
    },
    {
     "say": "Line eleven flips the first k doors. What do they hold now?",
     "line": 11,
     "ptr": {
      "left": 0,
      "right": 1
     },
     "hot": [
      0,
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "flip(0, 1) → ?",
     "arrows": null
    },
    {
     "say": "Four, five. In order.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1
     ],
     "bad": [],
     "set": null,
     "swap": [
      0,
      1
     ],
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line twelve flips the rest. Three, two, one becomes one, two, three.",
     "line": 12,
     "ptr": {
      "left": 2,
      "right": 4
     },
     "hot": [],
     "ok": [
      2,
      3,
      4
     ],
     "bad": [],
     "set": null,
     "swap": [
      2,
      4
     ],
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "flip(2, 4)",
     "arrows": null
    },
    {
     "say": "Every door is swapped at most twice. O of n time, whatever k is.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "≤ 2 swaps per door → O(n) time",
     "arrows": null
    },
    {
     "say": "Only swaps inside the row. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "swap": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "in place → O(1) space",
     "arrows": null
    }
   ]
  }
 ]
};
