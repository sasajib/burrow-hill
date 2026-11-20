window.CHAPTER = {
 "id": "backtrack",
 "title": "Backtracking",
 "sub": "CHAPTER 22 · BACKTRACKING",
 "key": "burrow-ch-backtrack",
 "next": {
  "href": "chapter.html?c=greedy",
  "label": "Chapter 23: Greedy"
 },
 "prev": {
  "href": "chapter.html?c=mixed4",
  "label": "Mixed set 4"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "bk0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Try it, then take it back",
   "intro": "When a puzzle asks for every possibility, there is no shortcut: you try each choice and undo it again."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "bkt1",
   "label": "Theory 1",
   "short": "T1",
   "name": "Choose, explore, un-choose",
   "intro": "The choices form a tree. One path grows and shrinks as you walk it. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "bkt2",
   "label": "Theory 2",
   "short": "T2",
   "name": "Cut the branch early",
   "intro": "When a branch can no longer lead to an answer, do not walk it. One guess."
  }
 ],
 "notes": {
  "w": "<h3>The words</h3><ul><li><b>Backtracking:</b> build an answer one choice at a time; when a choice is finished (or cannot work), <b>undo it</b> and try the next.</li>\n      <li><b>It is a deep-first walk</b> over a tree whose branches are choices.</li>\n      <li><b>Signals:</b> \"all\", \"every\", \"list each way\", \"how many ways to place\", and inputs that are small (about 10 to 20 items).</li></ul>",
  "t1": "<h3>Key ideas</h3><ul><li><b>Draw the choices as a tree.</b> A leaf is one finished answer.</li>\n      <li><b>Keep one path</b> (a list) for the choices made so far.</li>\n      <li><b>Every call does three things:</b> choose (push), explore (call yourself), un-choose (pop).</li>\n      <li><b>Save a copy</b> of the path at a leaf: <code>out.push([...path])</code>. The path itself keeps changing.</li>\n      <li><b>If each call builds a new value</b> (for example <code>word + letter</code>) there is nothing to undo.</li>\n      <li><b>Cost:</b> the number of leaves, times the work per leaf. It grows very fast, which is why inputs are small.</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>Pruning:</b> if a branch can no longer lead to an answer, return at once instead of walking it.</li>\n      <li><b>Typical cuts:</b> the total is already too big; a rule is already broken; a square is already used.</li>\n      <li><b>Cut as early as possible:</b> check before you step into a branch, not at the leaf.</li>\n      <li><b>To avoid the same group twice</b> in a different order, let each call only look at items from a start index onwards.</li></ul>"
 },
 "quiz": {
  "bkt1-q1": {
   "ask": "The path was [1, 2, 3] at the leaf. The walk goes back up one step and un-chooses. What is in the path now?",
   "opts": [
    "[1, 2]",
    "[1, 2, 3]",
    "[]"
   ],
   "right": 0,
   "why": "Un-choosing removes only the last choice. The earlier choices stay, so the other option for seed 3 can be tried."
  },
  "bkt2-q1": {
   "ask": "The weight so far is 5, exactly the target. Taking the next seed would give 9. What should the walk do with that branch?",
   "opts": [
    "Cut it: it can never come back down to 5",
    "Explore it anyway",
    "Start again from the top"
   ],
   "right": 0,
   "why": "Weights only add up. Once a branch is over the target, nothing below it can be an answer."
  },
  "bk1s-q": {
   "ask": "build(1, \"a\") called build(2, \"ac\"), which has returned. In the call build(1, \"a\"), what is word now?",
   "opts": [
    "\"a\": this call never changed its own word",
    "\"ac\"",
    "The empty word"
   ],
   "right": 0,
   "why": "word + letter makes a new string for the next call. The word of this call is still \"a\"."
  },
  "bk2s-q": {
   "ask": "The path is [1, 2]. The call that decided about 3 has returned into the call that took 2. What does line 11 do now?",
   "opts": [
    "Pops the 2: the path becomes [1]",
    "Pops the 1",
    "Saves the path again"
   ],
   "right": 0,
   "why": "Each call pops exactly what it pushed. This call pushed the 2, so the 2 comes out, and \"skip 2\" is tried next."
  },
  "bk3s-q": {
   "ask": "The path is [1]. The loop for the second place reaches the number 3. Is 3 marked as used?",
   "opts": [
    "No: line 16 un-marked it, so it can be taken",
    "Yes: it was used in [1, 2, 3]",
    "It is skipped from now on"
   ],
   "right": 0,
   "why": "Every call un-marks what it marked. That is what lets the same number appear in a different place later."
  },
  "bk4s-q": {
   "ask": "The path is [2, 2] and 2 is left to fill. The loop reaches the weight 3. What does line 10 do?",
   "opts": [
    "Skips it: it would overshoot",
    "Pushes it anyway",
    "Ends the whole search"
   ],
   "right": 0,
   "why": "A weight bigger than what is left can never lead to an exact fit, so that branch is never entered."
  },
  "bk5s-q": {
   "ask": "The text is \"((\" with open = 2 and close = 0, and n is 2. Which bracket may be added?",
   "opts": [
    "Only a closer: an opener is waiting for it",
    "Only an opener",
    "Either one"
   ],
   "right": 0,
   "why": "No openers are left (open is not less than n), and close < open, so a closer is allowed."
  },
  "bk6s-q": {
   "ask": "The trace stands on the lower \"a\" and needs a \"t\". Its neighbours are an \"x\" and the \"c\" that is marked as used. What comes back?",
   "opts": [
    "false: no neighbour can be the next letter",
    "true",
    "It steps onto the c again"
   ],
   "right": 0,
   "why": "The x is the wrong letter and the marked c no longer reads as \"c\", so all four tries fail."
  },
  "bk7s-q": {
   "ask": "In row 2 every column is attacked by the two queens above. What does place(2) do?",
   "opts": [
    "Its loop ends with nothing placed, and it returns",
    "It places a queen anyway",
    "It counts one way"
   ],
   "right": 0,
   "why": "Line 11 skips all four columns, so the loop ends. The call returns without counting, into the call for row 1."
  }
 },
 "problems": [
  {
   "id": "bk1",
   "num": 1,
   "title": "Words from Keys",
   "fn": "keyWords",
   "ask": "Each key holds a few letters. A word is made by taking <b>one letter from each key</b>, in the order of the keys. Return <b>every word</b> that can be made, in any order. (No keys at all gives one empty word.)",
   "spec": "keyWords([\"ab\", \"cd\"]) → [\"ac\", \"ad\", \"bc\", \"bd\"]",
   "start": "// keys is an array of strings. Each string holds the letters of one key.\nfunction keyWords(keys) {\n  // your code here\n}\n",
   "plan": [
    "Do the example by hand. After you picked \"a\", what was left to do?",
    "What does the function need to know, to carry on from there?",
    "When is a word finished?"
   ],
   "hints": [
    "Write build(i, word): i is the key you are deciding, word is what you have so far.",
    "If i is past the last key, the word is finished: save it.",
    "Otherwise, for each letter of keys[i], call build(i + 1, word + letter)."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       "ab",
       "cd"
      ]
     ],
     "want": [
      "ac",
      "ad",
      "bc",
      "bd"
     ]
    },
    {
     "args": [
      []
     ],
     "want": [
      ""
     ]
    },
    {
     "args": [
      [
       "a"
      ]
     ],
     "want": [
      "a"
     ]
    },
    {
     "args": [
      [
       "abc"
      ]
     ],
     "want": [
      "a",
      "b",
      "c"
     ]
    },
    {
     "args": [
      [
       "ab",
       "c",
       "de"
      ]
     ],
     "want": [
      "acd",
      "ace",
      "bcd",
      "bce"
     ]
    },
    {
     "args": [
      [
       "x",
       "y",
       "z"
      ]
     ],
     "want": [
      "xyz"
     ]
    },
    {
     "args": [
      [
       "ab",
       "ab"
      ]
     ],
     "want": [
      "aa",
      "ab",
      "ba",
      "bb"
     ]
    }
   ],
   "check": "const n1 = (L) => JSON.stringify(L.map((x) => String(x)).sort()); if (!Array.isArray(got)) return 'Return an array.'; if (got.length !== want.length) return 'Expected ' + want.length + ' answers, got ' + got.length + '.'; return n1(got) === n1(want) ? '' : 'The right number of answers, but not the right ones (or one comes twice).';",
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function keyWords(keys) {",
    "  const out = [];",
    "  const build = (i, word) => {",
    "    if (i === keys.length) {",
    "      out.push(word);",
    "      return;",
    "    }",
    "    for (const letter of keys[i]) {",
    "      build(i + 1, word + letter);",
    "    }",
    "  };",
    "  build(0, '');",
    "  return out;",
    "}"
   ],
   "why": "There is no line that undoes a choice. Why is none needed here?",
   "world": "Old phones did this. Press two keys, and they listed every word those keys could spell.",
   "view": {
    "row": [],
    "tree": [
     "\"\"",
     "a",
     "b",
     "ac",
     "ad",
     "bc",
     "bd"
    ],
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [
     1,
     2,
     3,
     4,
     5,
     6
    ],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "at",
      "row": 1
     }
    ],
    "vars": [],
    "box": {
     "title": "out",
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
     "say": "Pick a letter from the first key. What is left, is the same problem, with one key fewer.",
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
     "card": "pick one letter · the rest is the same",
     "arrows": null
    },
    {
     "say": "So the choices form a tree. Each level is one key. Each leaf is one finished word.",
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
     "card": "a level per key · a leaf per word",
     "arrows": null
    },
    {
     "say": "Line twelve starts at key zero, with an empty word.",
     "line": 12,
     "ptr": {
      "at": 0
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
     "card": "build(0, \"\")",
     "arrows": null
    },
    {
     "say": "The first key offers a, and b. The loop takes a, and calls build for the next key.",
     "line": 9,
     "ptr": {
      "at": 1
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [
      1
     ],
     "vars": null,
     "box": null,
     "card": "key 0: take \"a\"",
     "arrows": null
    },
    {
     "say": "The second key offers c, and d. Take c. The word is a c.",
     "line": 9,
     "ptr": {
      "at": 3
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [
      3
     ],
     "vars": null,
     "box": null,
     "card": "key 1: take \"c\" → \"ac\"",
     "arrows": null
    },
    {
     "say": "No keys are left. Line five saves the word.",
     "line": 5,
     "ptr": null,
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
     "box": [
      "ac"
     ],
     "card": "out: \"ac\"",
     "arrows": null
    },
    {
     "say": "That call returns. Back in the loop over c and d. In this call, what is the word?",
     "line": 8,
     "ptr": {
      "at": 1
     },
     "hot": [
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
     "card": "back one level: word = ?",
     "arrows": null
    },
    {
     "say": "Still a. Each call was handed its own new word. So there is nothing to undo. The loop takes d. A d.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [
      4
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [
      4
     ],
     "vars": null,
     "box": [
      "ac",
      "ad"
     ],
     "card": "\"a\" + \"d\" → \"ad\"",
     "arrows": null
    },
    {
     "say": "Back at the top, the loop takes b. And the same two words grow under it.",
     "line": 9,
     "ptr": {
      "at": 2
     },
     "hot": [],
     "ok": [
      5,
      6
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [
      2,
      5,
      6
     ],
     "vars": null,
     "box": [
      "ac",
      "ad",
      "bc",
      "bd"
     ],
     "card": "then \"b\": \"bc\" and \"bd\"",
     "arrows": null
    },
    {
     "say": "Line thirteen returns the four words.",
     "line": 13,
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
     "say": "Every key multiplies the number of words. Here, two times two.",
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
     "card": "choices multiply: 2 × 2 = 4",
     "arrows": null
    },
    {
     "say": "The waiting calls are as deep as the number of keys.",
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
     "card": "depth = the number of keys",
     "arrows": null
    },
    {
     "say": "Old phones did this. Press two keys, and they listed every word those keys could spell.",
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
     "card": "words from phone keys",
     "arrows": null
    }
   ]
  },
  {
   "id": "bk2",
   "num": 2,
   "title": "Every Bag of Seeds",
   "fn": "subsets",
   "ask": "Return <b>every group</b> that can be picked from the numbers (all different): the empty group, each single number, each pair, and so on. Any order.",
   "spec": "subsets([1, 2, 3]) → [[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3], []]   (8 groups, any order)",
   "start": "// nums is an array of different numbers.\nfunction subsets(nums) {\n  // your code here\n}\n",
   "plan": [
    "Look at one number. What are the possibilities for it?",
    "You keep one list for the group you are building. What must happen to it between the two possibilities?",
    "When is a group finished?"
   ],
   "hints": [
    "Write choose(i): decide about nums[i]. Keep one array, path.",
    "If i is past the end, save a COPY of path: out.push([...path]).",
    "Otherwise: push nums[i], call choose(i + 1), pop it again, and call choose(i + 1) once more."
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
      [
       1,
       2,
       3
      ],
      [
       1,
       2
      ],
      [
       1,
       3
      ],
      [
       1
      ],
      [
       2,
       3
      ],
      [
       2
      ],
      [
       3
      ],
      []
     ]
    },
    {
     "args": [
      []
     ],
     "want": [
      []
     ]
    },
    {
     "args": [
      [
       5
      ]
     ],
     "want": [
      [
       5
      ],
      []
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
       1,
       2
      ],
      [
       1
      ],
      [
       2
      ],
      []
     ]
    },
    {
     "args": [
      [
       4,
       5,
       6,
       7
      ]
     ],
     "want": [
      [
       4,
       5,
       6,
       7
      ],
      [
       4,
       5,
       6
      ],
      [
       4,
       5,
       7
      ],
      [
       4,
       5
      ],
      [
       4,
       6,
       7
      ],
      [
       4,
       6
      ],
      [
       4,
       7
      ],
      [
       4
      ],
      [
       5,
       6,
       7
      ],
      [
       5,
       6
      ],
      [
       5,
       7
      ],
      [
       5
      ],
      [
       6,
       7
      ],
      [
       6
      ],
      [
       7
      ],
      []
     ]
    },
    {
     "args": [
      [
       0,
       1
      ]
     ],
     "want": [
      [
       0,
       1
      ],
      [
       0
      ],
      [
       1
      ],
      []
     ]
    },
    {
     "args": [
      [
       9,
       8,
       7
      ]
     ],
     "want": [
      [
       9,
       8,
       7
      ],
      [
       9,
       8
      ],
      [
       9,
       7
      ],
      [
       9
      ],
      [
       8,
       7
      ],
      [
       8
      ],
      [
       7
      ],
      []
     ]
    }
   ],
   "check": "const n1 = (L) => JSON.stringify(L.map((x) => JSON.stringify([...x].sort((a, b) => a - b))).sort()); if (!Array.isArray(got)) return 'Return an array.'; if (got.length !== want.length) return 'Expected ' + want.length + ' answers, got ' + got.length + '.'; return n1(got) === n1(want) ? '' : 'The right number of answers, but not the right ones (or one comes twice).';",
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function subsets(nums) {",
    "  const out = [];",
    "  const path = [];",
    "  const choose = (i) => {",
    "    if (i === nums.length) {",
    "      out.push([...path]);",
    "      return;",
    "    }",
    "    path.push(nums[i]);",
    "    choose(i + 1);",
    "    path.pop();",
    "    choose(i + 1);",
    "  };",
    "  choose(0);",
    "  return out;",
    "}"
   ],
   "why": "Change line 6 to out.push(path). Every group in the answer comes out empty. Why?",
   "world": "A shop does this when it lists every bundle you could build from a few add-ons.",
   "view": {
    "row": [],
    "tree": [
     "[]",
     "1",
     "[]",
     "12",
     "1",
     "2",
     "[]",
     "123",
     "12",
     "13",
     "1",
     "23",
     "2",
     "3",
     "[]"
    ],
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11,
     12,
     13,
     14
    ],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "at",
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
     "say": "For every number there are two choices. Take it, or skip it.",
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
     "card": "each number: take it, or skip it",
     "arrows": null
    },
    {
     "say": "Try one choice. Explore everything after it. Then undo it, and try the other.",
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
     "card": "choose · explore · un-choose",
     "arrows": null
    },
    {
     "say": "Choose starts at the first number, with an empty path. Line nine takes it. The path is one.",
     "line": 9,
     "ptr": {
      "at": 1
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [
      1
     ],
     "vars": null,
     "box": null,
     "card": "take 1 → path [1]",
     "arrows": null
    },
    {
     "say": "The next call takes two. The one after, takes three.",
     "line": 9,
     "ptr": {
      "at": 7
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [
      3,
      7
     ],
     "vars": null,
     "box": null,
     "card": "take 2, take 3 → [1, 2, 3]",
     "arrows": null
    },
    {
     "say": "No numbers are left. Line six saves a copy of the path. The first group.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      7
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
     "card": "out: [1, 2, 3]",
     "arrows": null
    },
    {
     "say": "Now line eleven. Pop. The three comes back out. And line twelve tries the other choice. Skip three. One, two.",
     "line": 12,
     "ptr": {
      "at": 8
     },
     "hot": [],
     "ok": [
      8
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [
      8
     ],
     "vars": null,
     "box": null,
     "card": "un-choose 3 · skip it → [1, 2]",
     "arrows": null
    },
    {
     "say": "Both choices for three are done. So that call returns, into the call that took two. What does line eleven do there?",
     "line": 11,
     "ptr": {
      "at": 3
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
     "card": "back in the call for 2 → ?",
     "arrows": null
    },
    {
     "say": "It pops the two. Then it skips two, and decides about three again. One and three. And one alone.",
     "line": 12,
     "ptr": {
      "at": 4
     },
     "hot": [],
     "ok": [
      9,
      10
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [
      4,
      9,
      10
     ],
     "vars": null,
     "box": null,
     "card": "skip 2 → [1, 3] and [1]",
     "arrows": null
    },
    {
     "say": "Then all the way back to the top. Skip one. And the whole right half is explored in the same way.",
     "line": 12,
     "ptr": {
      "at": 2
     },
     "hot": [],
     "ok": [
      11,
      12,
      13,
      14
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [
      2,
      5,
      6,
      11,
      12,
      13,
      14
     ],
     "vars": null,
     "box": null,
     "card": "skip 1 → four more groups",
     "arrows": null
    },
    {
     "say": "Eight leaves. Eight groups. Line fifteen returns them.",
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
     "say": "Two choices for each of n numbers. Two to the power n groups.",
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
     "card": "2 choices, n times → 2ⁿ groups",
     "arrows": null
    },
    {
     "say": "And each group is copied. O of n, times two to the n.",
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
     "card": "copying each → O(n × 2ⁿ)",
     "arrows": null
    },
    {
     "say": "A shop does this when it lists every bundle you could build from a few add-ons.",
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
     "card": "every bundle of add-ons",
     "arrows": null
    }
   ]
  },
  {
   "id": "bk3",
   "num": 3,
   "title": "Every Order",
   "fn": "allOrders",
   "ask": "Return <b>every order</b> in which the numbers (all different) can be arranged. Any order of the answers.",
   "spec": "allOrders([1, 2, 3]) → [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]",
   "start": "// nums is an array of different numbers.\nfunction allOrders(nums) {\n  // your code here\n}\n",
   "plan": [
    "Which numbers can go in the first place? After one is chosen, which can go in the second?",
    "How does a call know which numbers are already in the path?",
    "What has to be undone when a call comes back?"
   ],
   "hints": [
    "Keep a path, and an array used with one true / false per number.",
    "build(): if the path is full, save a copy. Otherwise loop over all the numbers and skip the used ones.",
    "For an unused number: mark it used, push it, call build(), then pop it and mark it unused again."
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
      [
       1,
       2,
       3
      ],
      [
       1,
       3,
       2
      ],
      [
       2,
       1,
       3
      ],
      [
       2,
       3,
       1
      ],
      [
       3,
       1,
       2
      ],
      [
       3,
       2,
       1
      ]
     ]
    },
    {
     "args": [
      []
     ],
     "want": [
      []
     ]
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
       1,
       2
      ],
      [
       2,
       1
      ]
     ]
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
     "want": [
      [
       1,
       2,
       3,
       4
      ],
      [
       1,
       2,
       4,
       3
      ],
      [
       1,
       3,
       2,
       4
      ],
      [
       1,
       3,
       4,
       2
      ],
      [
       1,
       4,
       2,
       3
      ],
      [
       1,
       4,
       3,
       2
      ],
      [
       2,
       1,
       3,
       4
      ],
      [
       2,
       1,
       4,
       3
      ],
      [
       2,
       3,
       1,
       4
      ],
      [
       2,
       3,
       4,
       1
      ],
      [
       2,
       4,
       1,
       3
      ],
      [
       2,
       4,
       3,
       1
      ],
      [
       3,
       1,
       2,
       4
      ],
      [
       3,
       1,
       4,
       2
      ],
      [
       3,
       2,
       1,
       4
      ],
      [
       3,
       2,
       4,
       1
      ],
      [
       3,
       4,
       1,
       2
      ],
      [
       3,
       4,
       2,
       1
      ],
      [
       4,
       1,
       2,
       3
      ],
      [
       4,
       1,
       3,
       2
      ],
      [
       4,
       2,
       1,
       3
      ],
      [
       4,
       2,
       3,
       1
      ],
      [
       4,
       3,
       1,
       2
      ],
      [
       4,
       3,
       2,
       1
      ]
     ]
    },
    {
     "args": [
      [
       0,
       5
      ]
     ],
     "want": [
      [
       0,
       5
      ],
      [
       5,
       0
      ]
     ]
    },
    {
     "args": [
      [
       3,
       1,
       2
      ]
     ],
     "want": [
      [
       3,
       1,
       2
      ],
      [
       3,
       2,
       1
      ],
      [
       1,
       3,
       2
      ],
      [
       1,
       2,
       3
      ],
      [
       2,
       3,
       1
      ],
      [
       2,
       1,
       3
      ]
     ]
    }
   ],
   "check": "const n1 = (L) => JSON.stringify(L.map((x) => JSON.stringify(x)).sort()); if (!Array.isArray(got)) return 'Return an array.'; if (got.length !== want.length) return 'Expected ' + want.length + ' answers, got ' + got.length + '.'; return n1(got) === n1(want) ? '' : 'The right number of answers, but not the right ones (or one comes twice).';",
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function allOrders(nums) {",
    "  const out = [];",
    "  const path = [];",
    "  const used = new Array(nums.length).fill(false);",
    "  const build = () => {",
    "    if (path.length === nums.length) {",
    "      out.push([...path]);",
    "      return;",
    "    }",
    "    for (let i = 0; i < nums.length; i++) {",
    "      if (used[i]) continue;",
    "      used[i] = true;",
    "      path.push(nums[i]);",
    "      build();",
    "      path.pop();",
    "      used[i] = false;",
    "    }",
    "  };",
    "  build();",
    "  return out;",
    "}"
   ],
   "why": "Two things are undone after build() returns, on lines 15 and 16. What goes wrong if you forget line 16?",
   "world": "A delivery planner with only a few stops can simply try every order of the stops, like this.",
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
    "row2": [
     "",
     "",
     ""
    ],
    "rowLabel": "nums",
    "row2Label": "path",
    "ptrs": [],
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
     "say": "Any number can go first. Then any unused number can go second. And so on.",
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
     "card": "each place: any unused number",
     "arrows": null
    },
    {
     "say": "So remember which numbers are used. Take one, explore, and then un-mark it again.",
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
     "card": "mark used · explore · un-mark",
     "arrows": null
    },
    {
     "say": "The path is empty. The loop takes the first unused number. One. Marked used, and pushed.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "free": [],
     "set": {
      "d0": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "take 1 · mark it used",
     "arrows": null
    },
    {
     "say": "In the next call, one is used. So the loop takes two. And in the call after that, only three is left.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      2
     ],
     "bad": [],
     "free": [],
     "set": {
      "d1": 2,
      "d2": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "then 2, then 3",
     "arrows": null
    },
    {
     "say": "The path is full. Line seven saves a copy.",
     "line": 7,
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
     "box": [
      "1 2 3"
     ],
     "card": "out: [1, 2, 3]",
     "arrows": null
    },
    {
     "say": "Now the undoing. Lines fifteen and sixteen pop the three, and un-mark it. Then the same for the two.",
     "line": 16,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [
      2,
      1
     ],
     "set": {
      "d2": "",
      "d1": ""
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "pop 3, pop 2 · both unused again",
     "arrows": null
    },
    {
     "say": "The loop for the second place moves on, past two, to three. Is three still marked as used?",
     "line": 11,
     "ptr": null,
     "hot": [
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
     "card": "second place: is 3 used → ?",
     "arrows": null
    },
    {
     "say": "No. It was un-marked. So three goes second. And two is the only one left for the third place.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [
      2,
      1
     ],
     "bad": [],
     "free": [],
     "set": {
      "d1": 3,
      "d2": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "1 2 3",
      "1 3 2"
     ],
     "card": "out: [1, 3, 2]",
     "arrows": null
    },
    {
     "say": "Everything is undone, back to the first place. The loop moves on to two. And the same happens under it. Then under three.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [
      1
     ],
     "bad": [],
     "free": [
      0,
      1,
      2
     ],
     "set": {
      "d0": 2,
      "d1": "",
      "d2": ""
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "first place: 2 … then 3",
     "arrows": null
    },
    {
     "say": "Six orders in all. Line twenty returns them.",
     "line": 20,
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
     "box": [
      "1 2 3",
      "1 3 2",
      "… 4 more"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "n choices for the first place. n minus one for the second. And so on. n factorial orders.",
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
     "card": "n × (n − 1) × … × 1 = n! orders",
     "arrows": null
    },
    {
     "say": "Each one is copied. O of n, times n factorial.",
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
     "card": "copying each → O(n × n!)",
     "arrows": null
    },
    {
     "say": "A delivery planner with only a few stops can simply try every order of the stops, like this.",
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
     "card": "every order of a few stops",
     "arrows": null
    }
   ]
  },
  {
   "id": "bk4",
   "num": 4,
   "title": "Exactly the Weight",
   "fn": "sumTo",
   "ask": "The weights are all different and positive, and <b>each may be used as many times as you like</b>. Return every group of weights that adds up to <b>exactly target</b>. The same group in a different order counts only once.",
   "spec": "sumTo([2, 3], 6) → [[2, 2, 2], [3, 3]]      sumTo([2, 3, 5], 8) → [[2, 2, 2, 2], [2, 3, 3], [3, 5]]",
   "start": "// nums is an array of different positive numbers.\nfunction sumTo(nums, target) {\n  // your code here\n}\n",
   "plan": [
    "After you take one weight, what is the new, smaller problem?",
    "Which choices can you rule out at once?",
    "[2, 3] and [3, 2] are the same group. How can you make sure only one of them is ever built?"
   ],
   "hints": [
    "build(start, left): left is what still has to be filled. If left is 0, save a copy of the path.",
    "Loop i from start. If nums[i] is bigger than left, skip it: it would overshoot.",
    "Otherwise push it, call build(i, left - nums[i]) (i, not i + 1: it may be used again), and pop it."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       2,
       3
      ],
      6
     ],
     "want": [
      [
       2,
       2,
       2
      ],
      [
       3,
       3
      ]
     ]
    },
    {
     "args": [
      [
       2,
       3,
       5
      ],
      8
     ],
     "want": [
      [
       2,
       2,
       2,
       2
      ],
      [
       2,
       3,
       3
      ],
      [
       3,
       5
      ]
     ]
    },
    {
     "args": [
      [
       2
      ],
      1
     ],
     "want": []
    },
    {
     "args": [
      [
       1
      ],
      3
     ],
     "want": [
      [
       1,
       1,
       1
      ]
     ]
    },
    {
     "args": [
      [
       5,
       3
      ],
      8
     ],
     "want": [
      [
       5,
       3
      ]
     ]
    },
    {
     "args": [
      [
       4,
       2
      ],
      6
     ],
     "want": [
      [
       4,
       2
      ],
      [
       2,
       2,
       2
      ]
     ]
    },
    {
     "args": [
      [
       7
      ],
      7
     ],
     "want": [
      [
       7
      ]
     ]
    }
   ],
   "check": "const n1 = (L) => JSON.stringify(L.map((x) => JSON.stringify([...x].sort((a, b) => a - b))).sort()); if (!Array.isArray(got)) return 'Return an array.'; if (got.length !== want.length) return 'Expected ' + want.length + ' answers, got ' + got.length + '.'; return n1(got) === n1(want) ? '' : 'The right number of answers, but not the right ones (or one comes twice).';",
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function sumTo(nums, target) {",
    "  const out = [];",
    "  const path = [];",
    "  const build = (start, left) => {",
    "    if (left === 0) {",
    "      out.push([...path]);",
    "      return;",
    "    }",
    "    for (let i = start; i < nums.length; i++) {",
    "      if (nums[i] > left) continue;",
    "      path.push(nums[i]);",
    "      build(i, left - nums[i]);",
    "      path.pop();",
    "    }",
    "  };",
    "  build(0, target);",
    "  return out;",
    "}"
   ],
   "why": "Line 12 passes i, not i + 1 and not 0. What would each of those two changes do to the answers?",
   "world": "A cash machine lists the ways to pay out an amount with the notes it holds, like this.",
   "view": {
    "row": [
     2,
     3
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     "",
     "",
     ""
    ],
    "rowLabel": "nums",
    "row2Label": "path",
    "ptrs": [],
    "vars": [
     "left"
    ],
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
     "say": "Take a weight. What is left to fill gets smaller. That is the same problem again.",
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
     "card": "take one → less left to fill",
     "arrows": null
    },
    {
     "say": "And a weight that is bigger than what is left can never work. So it is not even tried.",
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
     "card": "bigger than what is left → skip",
     "arrows": null
    },
    {
     "say": "Line sixteen starts with six left to fill.",
     "line": 16,
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
     "vars": {
      "left": 6
     },
     "box": null,
     "card": "left to fill: 6",
     "arrows": null
    },
    {
     "say": "Take a two. Four left. Another two. Two left. Another. Nothing left.",
     "line": 11,
     "ptr": null,
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d0": 2,
      "d1": 2,
      "d2": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "left": 0
     },
     "box": null,
     "card": "2, 2, 2 → left = 0",
     "arrows": null
    },
    {
     "say": "Left is zero. Line six saves a copy of the path.",
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
     "box": [
      "2 2 2"
     ],
     "card": "out: [2, 2, 2]",
     "arrows": null
    },
    {
     "say": "Pop. Two is left again. The loop moves on to the three. But three is more than two. What happens?",
     "line": 10,
     "ptr": null,
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d2": ""
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "left": 2
     },
     "box": null,
     "card": "3 > 2 left → ?",
     "arrows": null
    },
    {
     "say": "Skipped. That is pruning. Pop again. Four left. Take the three. One left. And nothing fits into one.",
     "line": 12,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      1
     ],
     "free": [],
     "set": {
      "d1": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "left": 1
     },
     "box": null,
     "card": "2, 3 → left = 1 · a dead end",
     "arrows": null
    },
    {
     "say": "All the way back. The first choice is now the three. And three again. Nothing left. Saved.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      1
     ],
     "bad": [],
     "free": [
      1
     ],
     "set": {
      "d0": 3,
      "d1": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "left": 0
     },
     "box": [
      "2 2 2",
      "3 3"
     ],
     "card": "out: [3, 3]",
     "arrows": null
    },
    {
     "say": "Why was three, then two, never tried? Because each call only looks from its start position onwards. So no group comes twice.",
     "line": 9,
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
     "card": "i starts at \"start\" → no repeats",
     "arrows": null
    },
    {
     "say": "Line seventeen returns the two groups.",
     "line": 17,
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
     "say": "It depends on how many branches survive the pruning. At worst, it grows very fast with the target.",
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
     "card": "grows fast · pruning helps a lot",
     "arrows": null
    },
    {
     "say": "The path is at most target divided by the smallest weight.",
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
     "card": "depth ≤ target / smallest weight",
     "arrows": null
    },
    {
     "say": "A cash machine lists the ways to pay out an amount with the notes it holds, like this.",
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
     "card": "ways to pay out an amount",
     "arrows": null
    }
   ]
  },
  {
   "id": "bk5",
   "num": 5,
   "title": "Brackets That Close",
   "fn": "brackets",
   "ask": "Return every text made of exactly <b>n pairs</b> of round brackets in which every bracket is <b>properly closed</b>. Any order.",
   "spec": "brackets(2) → [\"(())\", \"()()\"]      brackets(1) → [\"()\"]",
   "start": "function brackets(n) {\n  // your code here\n}\n",
   "plan": [
    "Build the text one character at a time. Which two choices are there?",
    "When is it allowed to add an opener?",
    "When is it allowed to add a closer?"
   ],
   "hints": [
    "build(text, open, close): open and close count the brackets used so far.",
    "An opener may be added while open is less than n.",
    "A closer may be added while close is less than open. When the text has 2 * n characters, save it."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      2
     ],
     "want": [
      "(())",
      "()()"
     ]
    },
    {
     "args": [
      1
     ],
     "want": [
      "()"
     ]
    },
    {
     "args": [
      3
     ],
     "want": [
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()"
     ]
    },
    {
     "args": [
      0
     ],
     "want": [
      ""
     ]
    },
    {
     "args": [
      4
     ],
     "want": [
      "(((())))",
      "((()()))",
      "((())())",
      "((()))()",
      "(()(()))",
      "(()()())",
      "(()())()",
      "(())(())",
      "(())()()",
      "()((()))",
      "()(()())",
      "()(())()",
      "()()(())",
      "()()()()"
     ]
    }
   ],
   "check": "const n1 = (L) => JSON.stringify(L.map((x) => String(x)).sort()); if (!Array.isArray(got)) return 'Return an array.'; if (got.length !== want.length) return 'Expected ' + want.length + ' answers, got ' + got.length + '.'; return n1(got) === n1(want) ? '' : 'The right number of answers, but not the right ones (or one comes twice).';",
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function brackets(n) {",
    "  const out = [];",
    "  const build = (text, open, close) => {",
    "    if (text.length === 2 * n) {",
    "      out.push(text);",
    "      return;",
    "    }",
    "    if (open < n) build(text + '(', open + 1, close);",
    "    if (close < open) build(text + ')', open, close + 1);",
    "  };",
    "  build('', 0, 0);",
    "  return out;",
    "}"
   ],
   "why": "No finished text is ever checked for being valid. Why is that not needed?",
   "world": "A code editor uses the same two rules when it decides whether it may close a bracket for you.",
   "view": {
    "row": [
     "",
     "",
     "",
     ""
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "text",
    "row2Label": "",
    "ptrs": [],
    "vars": [
     "open",
     "close"
    ],
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
     "say": "Build the text one bracket at a time. Each time there are two choices. An opener, or a closer.",
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
     "card": "each step: \"(\" or \")\"",
     "arrows": null
    },
    {
     "say": "But only if it can still work. An opener, while some are left. A closer, only if an opener is waiting for it.",
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
     "card": "\"(\" if open < n · \")\" if close < open",
     "arrows": null
    },
    {
     "say": "The text is empty. No brackets used.",
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
     "vars": {
      "open": 0,
      "close": 0
     },
     "box": null,
     "card": "open = 0 · close = 0",
     "arrows": null
    },
    {
     "say": "Fewer than two openers are used. So line eight adds one.",
     "line": 8,
     "ptr": null,
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "0": "("
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "open": 1
     },
     "box": null,
     "card": "open 0 < 2 → add \"(\"",
     "arrows": null
    },
    {
     "say": "And another. Two openers. That is all of them.",
     "line": 8,
     "ptr": null,
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "1": "("
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "open": 2
     },
     "box": null,
     "card": "open 1 < 2 → add \"(\"",
     "arrows": null
    },
    {
     "say": "Now line eight is not allowed. Line nine asks: are there fewer closers than openers? Zero, against two.",
     "line": 9,
     "ptr": null,
     "hot": [
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
     "card": "close 0 < open 2 → ?",
     "arrows": null
    },
    {
     "say": "Yes. So a closer is added. And another. The text is full. Line five saves it.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      2,
      3
     ],
     "bad": [],
     "free": [],
     "set": {
      "2": ")",
      "3": ")"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "close": 2
     },
     "box": [
      "(())"
     ],
     "card": "out: \"(())\"",
     "arrows": null
    },
    {
     "say": "Back to the text with one opener. This time, line nine. A closer. Open, close.",
     "line": 9,
     "ptr": null,
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "free": [
      0,
      1,
      2,
      3
     ],
     "set": {
      "1": ")",
      "2": "",
      "3": ""
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "open": 1,
      "close": 1
     },
     "box": null,
     "card": "\"()\" · open 1 · close 1",
     "arrows": null
    },
    {
     "say": "Then an opener, and its closer. Full again. Saved.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      2,
      3
     ],
     "bad": [],
     "free": [],
     "set": {
      "2": "(",
      "3": ")"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "open": 2,
      "close": 2
     },
     "box": [
      "(())",
      "()()"
     ],
     "card": "out: \"()()\"",
     "arrows": null
    },
    {
     "say": "A closer is never added without an opener waiting. So a broken text is never built, and nothing has to be checked at the end.",
     "line": 12,
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
     "say": "Only valid texts are ever built. Their number grows fast with n, but far slower than all the texts.",
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
     "card": "only valid texts are built",
     "arrows": null
    },
    {
     "say": "The waiting calls are two n deep.",
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
     "card": "depth = 2n",
     "arrows": null
    },
    {
     "say": "A code editor uses the same two rules when it decides whether it may close a bracket for you.",
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
     "card": "an editor closing brackets",
     "arrows": null
    }
   ]
  },
  {
   "id": "bk6",
   "num": 6,
   "title": "A Word in the Grid",
   "fn": "findWord",
   "ask": "Return <b>true</b> if the word can be traced in the grid: start on any square, then step <b>up, down, left or right</b> to the next letter. No square may be used twice in one word. You may change the grid while you search, but put it back.",
   "spec": "findWord([[\"c\", \"a\", \"t\"], [\"a\", \"x\", \"x\"]], \"cat\") → true      findWord(same grid, \"cab\") → false",
   "start": "// grid is an array of rows of single letters.\nfunction findWord(grid, word) {\n  // your code here\n}\n",
   "plan": [
    "Where can a trace start?",
    "Standing on a square with i letters matched, what do you try next?",
    "A square may not be used twice. How do you remember which are used, and when do they become free again?"
   ],
   "hints": [
    "walk(r, c, i): try to match word[i] on square (r, c). If i is past the end of the word, return true.",
    "If the square is outside the grid or holds another letter, return false. Otherwise mark it (for example with \"#\").",
    "Try the four neighbours with i + 1. Then put the letter back, and return whether any of them worked."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        "c",
        "a",
        "t"
       ],
       [
        "a",
        "x",
        "x"
       ]
      ],
      "cat"
     ],
     "want": true
    },
    {
     "args": [
      [
       [
        "c",
        "a",
        "t"
       ],
       [
        "a",
        "x",
        "x"
       ]
      ],
      "cab"
     ],
     "want": false
    },
    {
     "args": [
      [
       [
        "a"
       ]
      ],
      "a"
     ],
     "want": true
    },
    {
     "args": [
      [
       [
        "a"
       ]
      ],
      "b"
     ],
     "want": false
    },
    {
     "args": [
      [
       [
        "a",
        "b"
       ],
       [
        "c",
        "d"
       ]
      ],
      "abdc"
     ],
     "want": true
    },
    {
     "args": [
      [
       [
        "a",
        "b"
       ],
       [
        "c",
        "d"
       ]
      ],
      "abcd"
     ],
     "want": false
    },
    {
     "args": [
      [
       [
        "a",
        "a"
       ]
      ],
      "aaa"
     ],
     "want": false
    },
    {
     "args": [
      [
       [
        "s",
        "e",
        "e"
       ],
       [
        "d",
        "e",
        "s"
       ]
      ],
      "seed"
     ],
     "want": true
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function findWord(grid, word) {",
    "  const walk = (r, c, i) => {",
    "    if (i === word.length) return true;",
    "    if (grid[r]?.[c] !== word[i]) return false;",
    "    grid[r][c] = '#';",
    "    const found = walk(r + 1, c, i + 1) || walk(r - 1, c, i + 1)",
    "      || walk(r, c + 1, i + 1) || walk(r, c - 1, i + 1);",
    "    grid[r][c] = word[i];",
    "    return found;",
    "  };",
    "  for (let r = 0; r < grid.length; r++) {",
    "    for (let c = 0; c < grid[0].length; c++) {",
    "      if (walk(r, c, 0)) return true;",
    "    }",
    "  }",
    "  return false;",
    "}"
   ],
   "why": "Line 8 puts the letter back even when the word was found. When does it matter that a dead end puts its letter back?",
   "world": "A word game checks your swipe across the letter grid in exactly this way.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      "c",
      "a",
      "t"
     ],
     [
      "a",
      "x",
      "x"
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
    "box": null,
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "From a square that matches, try each neighbour for the next letter. Deep first.",
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
     "card": "match → try the 4 neighbours",
     "arrows": null
    },
    {
     "say": "Mark the square while it is on your path. And un-mark it when you back out.",
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
     "card": "mark going in · un-mark coming out",
     "arrows": null
    },
    {
     "say": "The scan tries every square as a start. The top left holds a c. The first letter.",
     "line": 13,
     "ptr": null,
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
     "card": "start where the first letter is",
     "arrows": null
    },
    {
     "say": "It matches. Line five marks the square, so the trace cannot step on it again.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      0
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
     "card": "a match → mark the square",
     "arrows": null
    },
    {
     "say": "Line six tries below first. An a. The second letter. Marked.",
     "line": 6,
     "ptr": null,
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
     "card": "below: \"a\" → a match",
     "arrows": null
    },
    {
     "say": "From this a, the next letter must be t. Its neighbours are an x, and the c that is already used. What does the walk return?",
     "line": 4,
     "ptr": null,
     "hot": [
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
     "card": "need \"t\": an x, a used c → ?",
     "arrows": null
    },
    {
     "say": "False. A dead end. And line eight puts the letter back. The square is free again.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [
      3
     ],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "dead end → un-mark the square",
     "arrows": null
    },
    {
     "say": "Back on the c. The next direction that works is right. An a. And right again. A t.",
     "line": 7,
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
     "box": null,
     "card": "c → a → t",
     "arrows": null
    },
    {
     "say": "Every letter is matched. Line three returns true, and it travels all the way up.",
     "line": 3,
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
     "say": "From every start, each letter has up to four ways to go on. It grows fast with the length of the word.",
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
     "card": "up to 4 ways per letter",
     "arrows": null
    },
    {
     "say": "The waiting calls are as deep as the word is long.",
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
     "card": "depth = the length of the word",
     "arrows": null
    },
    {
     "say": "A word game checks your swipe across the letter grid in exactly this way.",
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
     "card": "a swipe in a word game",
     "arrows": null
    }
   ]
  },
  {
   "id": "bk7",
   "num": 7,
   "title": "Queens That Keep the Peace",
   "fn": "queens",
   "ask": "A queen attacks every square in <b>its row, its column and both diagonals</b>. Return the <b>number of ways</b> to put n queens on an n by n board so that no queen attacks another.",
   "spec": "queens(4) → 2      queens(1) → 1      queens(3) → 0",
   "start": "function queens(n) {\n  // your code here\n}\n",
   "plan": [
    "There are n queens and n rows. How many queens can one row hold?",
    "Placing row by row, what must you know about the queens above to check one square quickly?",
    "What must happen before you try the next column of a row?"
   ],
   "hints": [
    "Place one queen per row: place(r) tries every column c of row r.",
    "Keep three sets: the columns in use, and the two kinds of diagonal. All squares on one diagonal share r - c; on the other kind they share r + c.",
    "If the square is free: add the three values, call place(r + 1), then delete them again. When r reaches n, count one way."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      4
     ],
     "want": 2
    },
    {
     "args": [
      1
     ],
     "want": 1
    },
    {
     "args": [
      2
     ],
     "want": 0
    },
    {
     "args": [
      3
     ],
     "want": 0
    },
    {
     "args": [
      5
     ],
     "want": 10
    },
    {
     "args": [
      6
     ],
     "want": 4
    },
    {
     "args": [
      8
     ],
     "want": 92
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function queens(n) {",
    "  const col = new Set(), dn = new Set(), up = new Set();",
    "  let count = 0;",
    "  const place = (r) => {",
    "    if (r === n) {",
    "      count++;",
    "      return;",
    "    }",
    "    for (let c = 0; c < n; c++) {",
    "      const hit = col.has(c) || dn.has(r - c) || up.has(r + c);",
    "      if (hit) continue;",
    "      col.add(c); dn.add(r - c); up.add(r + c);",
    "      place(r + 1);",
    "      col.delete(c); dn.delete(r - c); up.delete(r + c);",
    "    }",
    "  };",
    "  place(0);",
    "  return count;",
    "}"
   ],
   "why": "Why do all the squares of one diagonal share the same value of r - c (or r + c)?",
   "world": "A timetable planner works like this. Place a lesson, check the clashes, and take it back if a later one cannot fit.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      "",
      "",
      "",
      ""
     ],
     [
      "",
      "",
      "",
      ""
     ],
     [
      "",
      "",
      "",
      ""
     ],
     [
      "",
      "",
      "",
      ""
     ]
    ],
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [],
    "vars": [
     "count"
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
     "say": "Each row holds exactly one queen. So place them row by row. For each row, try every column.",
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
     "card": "one queen per row · try each column",
     "arrows": null
    },
    {
     "say": "A square is free if its column, and both of its diagonals, are unused. Three sets remember those.",
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
     "card": "free = column + 2 diagonals unused",
     "arrows": null
    },
    {
     "say": "Row zero. Column zero is free. Line twelve records the column, and the two diagonals.",
     "line": 12,
     "ptr": null,
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "free": [],
     "set": {
      "0": "Q"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "count": 0
     },
     "box": null,
     "card": "row 0 → column 0",
     "arrows": null
    },
    {
     "say": "Row one. Column zero is taken. Column one is on a diagonal. Column two is free.",
     "line": 12,
     "ptr": null,
     "hot": [],
     "ok": [
      6
     ],
     "bad": [
      4,
      5
     ],
     "free": [],
     "set": {
      "6": "Q"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "row 1 → the first free column: 2",
     "arrows": null
    },
    {
     "say": "Row two. Every one of its four squares is attacked. What does this call do?",
     "line": 11,
     "ptr": null,
     "hot": [
      8,
      9,
      10,
      11
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
     "card": "row 2: all four attacked → ?",
     "arrows": null
    },
    {
     "say": "It returns, with nothing placed. And line fourteen takes the queen of row one back off the board.",
     "line": 14,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [
      4,
      5,
      6
     ],
     "set": {
      "6": ""
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "take back the queen of row 1",
     "arrows": null
    },
    {
     "say": "Row one moves on to column three. Now row two has a place. But row three does not. More undoing.",
     "line": 12,
     "ptr": null,
     "hot": [],
     "ok": [
      7,
      9
     ],
     "bad": [],
     "free": [],
     "set": {
      "7": "Q",
      "9": "Q"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "row 1 → column 3 · row 3 is stuck",
     "arrows": null
    },
    {
     "say": "Everything is taken back. Even the queen in row zero moves on. To column one.",
     "line": 14,
     "ptr": null,
     "hot": [],
     "ok": [
      1
     ],
     "bad": [],
     "free": [
      0,
      7,
      9
     ],
     "set": {
      "0": "",
      "1": "Q",
      "7": "",
      "9": ""
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "row 0 moves to column 1",
     "arrows": null
    },
    {
     "say": "This time, every row finds a place. Row four does not exist. So line six counts one way.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      7,
      8,
      14
     ],
     "bad": [],
     "free": [],
     "set": {
      "7": "Q",
      "8": "Q",
      "14": "Q"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "count": 1
     },
     "box": null,
     "card": "all 4 rows placed → count = 1",
     "arrows": null
    },
    {
     "say": "The search goes on, and finds the mirror image. Line eighteen returns two.",
     "line": 18,
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
     "vars": {
      "count": 2
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Without the checks there would be four to the power four boards. The three sets cut almost all of them.",
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
     "card": "pruning cuts most of the 4⁴ boards",
     "arrows": null
    },
    {
     "say": "Three sets, and one waiting call per row.",
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
     "card": "3 sets + n waiting calls → O(n)",
     "arrows": null
    },
    {
     "say": "A timetable planner works like this. Place a lesson, check the clashes, and take it back if a later one cannot fit.",
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
     "card": "a timetable without clashes",
     "arrows": null
    }
   ]
  }
 ]
};
