window.CHAPTER = {
 "id": "think1",
 "title": "Be the Computer",
 "sub": "WARM-UP A · THINKING IN CODE",
 "key": "burrow-ch-think1",
 "next": {
  "href": "chapter.html?c=think2",
  "label": "Warm-up B: Values, Copies and Changes"
 },
 "prev": {
  "href": "foundations.html",
  "label": "Part 0: Foundations"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "ka0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Be the computer",
   "intro": "The habit behind every other skill: run the code in your head, one line at a time."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "kat1",
   "label": "Lesson 1",
   "short": "L1",
   "name": "The trace table",
   "intro": "One box per variable, one line at a time, every change written down. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "kat2",
   "label": "Lesson 2",
   "short": "L2",
   "name": "Where loops begin and end",
   "intro": "Start, stop, count: the three questions that catch an off-by-one. One guess."
  },
  {
   "id": "t3",
   "kind": "lesson",
   "video": "kat3",
   "label": "Lesson 3",
   "short": "L3",
   "name": "The order of a condition",
   "intro": "Left to right, and it stops when it knows. Why the safety check goes first. One guess."
  }
 ],
 "notes": {
  "w": "<h3>The idea</h3><ul><li><b>A dry run</b> is running code by hand: you play the computer.</li>\n      <li><b>The computer never guesses.</b> It does one small thing, then the next. Do the same and you see what it sees.</li>\n      <li><b>Use it</b> when code surprises you, when you review code, and in interviews where nothing can be run.</li></ul>",
  "t1": "<h3>How to trace</h3><ul><li><b>One box per variable.</b> Write its name and its current value.</li>\n      <li><b>One line at a time.</b> Do exactly what the line says, nothing more.</li>\n      <li><b>Every change is written down:</b> cross out the old value, write the new one.</li>\n      <li><b>For a loop,</b> one turn is: check the condition, run the body, step the counter.</li>\n      <li><b>Mind the order of operations:</b> <code>total + i * 2</code> multiplies first.</li></ul>",
  "t2": "<h3>Three questions for every loop</h3><ul><li><b>Where does it start?</b> The first index of an array is 0.</li>\n      <li><b>When does it stop?</b> The last index is <code>length - 1</code>. <code>i &lt; length</code> visits every item; <code>i &lt;= length</code> goes one too far.</li>\n      <li><b>How many turns is that?</b> Count them, and compare with what the task needs.</li>\n      <li><b>Backwards:</b> start at <code>length - 1</code>, go on while <code>i &gt;= 0</code>.</li>\n      <li><b>If the body reads <code>i + 1</code></b>, stop one earlier: <code>i &lt; length - 1</code>.</li>\n      <li><b>Always test the first turn and the last turn by hand.</b></li></ul>",
  "t3": "<h3>How a condition is read</h3><ul><li><b>&amp;&amp;</b> (and): both must be true. <b>||</b> (or): at least one.</li>\n      <li><b>Left to right, and it stops as soon as the answer is known</b> (short-circuit). With &amp;&amp;, a false first check means the second is never run.</li>\n      <li><b>So the guard goes first:</b> <code>i &lt; words.length &amp;&amp; words[i].length &gt; 3</code>, never the other way round.</li>\n      <li><b>The same habit:</b> <code>user &amp;&amp; user.name</code>, <code>list.length &gt; 0 &amp;&amp; list[0]</code>.</li></ul>"
 },
 "quiz": {
  "kat1-q1": {
   "ask": "total is 6 and i is 3. Line 3 runs: total = total + i * 2. What is total now?",
   "opts": [
    "12",
    "18",
    "9"
   ],
   "right": 0,
   "why": "Multiplication comes first: 3 * 2 is 6. Then 6 + 6 is 12. (18 would be (6 + 3) * 2.)"
  },
  "kat2-q1": {
   "ask": "for (let i = 1; i < 4; i++). How many turns does this loop make?",
   "opts": [
    "3: i is 1, 2, 3",
    "4",
    "5"
   ],
   "right": 0,
   "why": "It starts at 1 and stops before 4. And notice: index 0 is never visited."
  },
  "kat3-q1": {
   "ask": "The two checks are swapped: words[i].length < 5 && i < words.length. The row has 4 words and i is 4. What happens first?",
   "opts": [
    "It asks for the length of words[4], which does not exist",
    "It checks i < words.length and stops",
    "Nothing: the loop has already ended"
   ],
   "right": 0,
   "why": "The left check runs first. words[4] is undefined, and asking undefined for its length crashes the program."
  },
  "ka1s-q": {
   "ask": "i is 6 and n is 6. The old condition is i < n. What happens?",
   "opts": [
    "It is false: the loop stops and 6 is never pushed",
    "It is true: 6 is pushed",
    "The code crashes"
   ],
   "right": 0,
   "why": "6 is not less than 6. The loop ends one turn too early."
  },
  "ka2s-q": {
   "ask": "\"moss\" has letters at positions 0, 1, 2 and 3. What is word[4]?",
   "opts": [
    "undefined: there is no such position",
    "\"s\"",
    "\"m\""
   ],
   "right": 0,
   "why": "The last position is length - 1. Reading one past it gives undefined, and the text \"undefined\" ended up in the answer."
  },
  "ka3s-q": {
   "ask": "i is 2 and the row has 2 words. The old code evaluates words[2].length first. What happens?",
   "opts": [
    "It crashes: undefined has no length",
    "It gives 0",
    "It gives null"
   ],
   "right": 0,
   "why": "words[2] is undefined. Asking undefined for a property throws an error and the program stops."
  },
  "ka4s-q": {
   "ask": "i is 2 in a row of 3 numbers. The old code computes nums[3] - nums[2]. What is the result?",
   "opts": [
    "NaN: nums[3] is undefined",
    "0",
    "-9"
   ],
   "right": 0,
   "why": "There is no position 3, so nums[3] is undefined. undefined - 9 is NaN, \"not a number\"."
  }
 },
 "problems": [
  {
   "id": "ka1",
   "num": 1,
   "title": "One Turn Short",
   "fn": "evens",
   "ask": "Return an array of the <b>even numbers from 2 up to and including n</b>. The code below is nearly right. <b>Trace it for n = 6</b>, find the mistake, and fix it.",
   "spec": "evens(6) → [2, 4, 6]      evens(7) → [2, 4, 6]      evens(1) → []",
   "start": "// This code is nearly right. Trace it by hand before you change anything.\nfunction evens(n) {\n  const out = [];\n  for (let i = 2; i < n; i += 2) {\n    out.push(i);\n  }\n  return out;\n}\n",
   "plan": [
    "Make a small table with i and out. Run the loop by hand for n = 6.",
    "What is i when the loop stops? Was that value pushed?",
    "Read the task again. Which word decides whether the end is included?"
   ],
   "hints": [
    "Trace: i is 2, then 4, then 6. What does the condition say when i is 6?",
    "6 < 6 is false, so the loop ends before the 6 is pushed.",
    "\"Up to and including\" needs i <= n."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      6
     ],
     "want": [
      2,
      4,
      6
     ]
    },
    {
     "args": [
      7
     ],
     "want": [
      2,
      4,
      6
     ]
    },
    {
     "args": [
      1
     ],
     "want": []
    },
    {
     "args": [
      2
     ],
     "want": [
      2
     ]
    },
    {
     "args": [
      0
     ],
     "want": []
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function evens(n) {",
    "  const out = [];",
    "  for (let i = 2; i <= n; i += 2) {",
    "    out.push(i);",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "evens(7) was already right before your fix. Why did that test not show the bug?",
   "world": "A report that should run from the first to the thirty first, and stops at the thirtieth, has exactly this bug.",
   "view": {
    "row": [
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
    "rowLabel": "out",
    "row2Label": "",
    "ptrs": [],
    "vars": [
     "i"
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
     "say": "Do not guess where the bug is. Run the loop by hand, and watch i.",
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
     "card": "trace it: watch i",
     "arrows": null
    },
    {
     "say": "A missing last item usually means the loop stopped one turn too early.",
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
     "card": "last item missing → the stop is wrong",
     "arrows": null
    },
    {
     "say": "N is six. Line three starts i at two. Push it.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "0": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "i": 2
     },
     "box": null,
     "card": "i = 2 → push",
     "arrows": null
    },
    {
     "say": "I becomes four. Push it.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "1": 4
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "i": 4
     },
     "box": null,
     "card": "i = 4 → push",
     "arrows": null
    },
    {
     "say": "I becomes six. Now the check. The old code asked: is six less than six? What is the answer?",
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
     "vars": {
      "i": 6
     },
     "box": null,
     "card": "old code: 6 < 6 → ?",
     "arrows": null
    },
    {
     "say": "No. So the loop stopped, one turn too early. The six was never pushed.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      2
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "6 < 6 is false → the 6 is lost",
     "arrows": null
    },
    {
     "say": "The task said: up to, and including. So the check must be: at most. Six is at most six. Push it.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [
      2
     ],
     "bad": [],
     "free": [
      2
     ],
     "set": {
      "2": 6
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "fix: i <= n",
     "arrows": null
    },
    {
     "say": "I becomes eight. Not at most six. The loop ends, and line six returns two, four, six.",
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
     "vars": {
      "i": 8
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The habit. Before you trust a loop, test its last turn by hand.",
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
     "card": "test the last turn by hand",
     "arrows": null
    },
    {
     "say": "Including the end means, at most. Stopping before the end means, less than.",
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
     "card": "including → <= · before → <",
     "arrows": null
    },
    {
     "say": "A report that should run from the first to the thirty first, and stops at the thirtieth, has exactly this bug.",
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
     "card": "a report missing its last day",
     "arrows": null
    }
   ]
  },
  {
   "id": "ka2",
   "num": 2,
   "title": "Backwards",
   "fn": "backwards",
   "ask": "Return the word with its letters in <b>reverse order</b>. The code below walks the word from the end, but it has <b>two small mistakes</b>. Trace it for \"moss\".",
   "spec": "backwards(\"moss\") → \"ssom\"      backwards(\"\") → \"\"",
   "start": "// This code is nearly right. Trace it by hand before you change anything.\nfunction backwards(word) {\n  let out = '';\n  for (let i = word.length; i > 0; i--) {\n    out += word[i];\n  }\n  return out;\n}\n",
   "plan": [
    "Write the positions under the letters of \"moss\". What is the position of the last letter?",
    "Trace the first turn: what is word[i]?",
    "Trace the last turn: which position is never read?"
   ],
   "hints": [
    "\"moss\" has 4 letters at positions 0 to 3. word[4] does not exist.",
    "Start at word.length - 1.",
    "Position 0 must be read too: go on while i >= 0."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "moss"
     ],
     "want": "ssom"
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
      "ab"
     ],
     "want": "ba"
    },
    {
     "args": [
      "hazel"
     ],
     "want": "lezah"
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function backwards(word) {",
    "  let out = '';",
    "  for (let i = word.length - 1; i >= 0; i--) {",
    "    out += word[i];",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "Fix only the start and run it. Then fix only the stop. What does each half-fix return for \"moss\"?",
   "world": "Your messages, newest first. Or an undo list. Both are a loop that walks backwards like this.",
   "view": {
    "row": [
     "m",
     "o",
     "s",
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
      "id": "i",
      "row": 1
     }
    ],
    "vars": [
     "out"
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
     "say": "A loop has two ends. Its first turn, and its last turn. Check both by hand.",
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
     "card": "check the first turn and the last",
     "arrows": null
    },
    {
     "say": "Going backwards, the first turn is the last position. Length minus one. And the last turn is position zero.",
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
     "card": "from length − 1 down to 0",
     "arrows": null
    },
    {
     "say": "Four letters, at positions zero to three. The old code started at word dot length. Four. What is at position four?",
     "line": 3,
     "ptr": null,
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
     "card": "old code: start at i = 4 → ?",
     "arrows": null
    },
    {
     "say": "Nothing. So the answer began with the word, undefined. The first fix. Start at length minus one. Three.",
     "line": 3,
     "ptr": {
      "i": 3
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
     "card": "fix 1: start at length − 1",
     "arrows": null
    },
    {
     "say": "Position three. S. Then two. S. Then one. O.",
     "line": 4,
     "ptr": {
      "i": 1
     },
     "hot": [],
     "ok": [
      3,
      2,
      1
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "out": "\"sso\""
     },
     "box": null,
     "card": "out grows: s, s, o",
     "arrows": null
    },
    {
     "say": "Now i is zero. The old code asked: is zero greater than zero? No. It stopped, and the m was lost.",
     "line": 3,
     "ptr": {
      "i": 0
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
     "card": "old code: 0 > 0 is false → \"m\" lost",
     "arrows": null
    },
    {
     "say": "The second fix. Go on while i is at least zero. So position zero is read too. M.",
     "line": 4,
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
     "vars": {
      "out": "\"ssom\""
     },
     "box": null,
     "card": "fix 2: i >= 0",
     "arrows": null
    },
    {
     "say": "I becomes minus one. The loop ends. Line six returns s, s, o, m.",
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
     "card": "",
     "arrows": null
    },
    {
     "say": "Going backwards. Start at length minus one. Stop after zero.",
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
     "card": "backwards: length − 1 … 0",
     "arrows": null
    },
    {
     "say": "Two mistakes, and both were at the ends. That is where to look first.",
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
     "card": "bugs live at the two ends",
     "arrows": null
    },
    {
     "say": "Your messages, newest first. Or an undo list. Both are a loop that walks backwards like this.",
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
     "card": "newest first: a backwards loop",
     "arrows": null
    }
   ]
  },
  {
   "id": "ka3",
   "num": 3,
   "title": "The First Long Word",
   "fn": "firstLong",
   "ask": "Return the <b>first word with more than n letters</b>, or <b>null</b> if there is none. The code below works when a long word exists, and <b>crashes</b> when there is none. Trace it for [\"sun\", \"oak\"] and n = 3.",
   "spec": "firstLong([\"sun\", \"moss\", \"burrow\"], 4) → \"burrow\"      firstLong([\"sun\", \"oak\"], 3) → null",
   "start": "// This code is nearly right. Trace it by hand before you change anything.\nfunction firstLong(words, n) {\n  let i = 0;\n  while (words[i].length <= n && i < words.length) {\n    i++;\n  }\n  return i < words.length ? words[i] : null;\n}\n",
   "plan": [
    "Trace it for [\"sun\", \"oak\"] and n = 3. What is i after two turns?",
    "With that i, which of the two checks runs first?",
    "What is words[i] at that moment?"
   ],
   "hints": [
    "After two turns i is 2, and words[2] does not exist.",
    "The left check runs first and asks undefined for its length: a crash.",
    "Swap the checks: i < words.length && words[i].length <= n."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       "sun",
       "moss",
       "burrow",
       "oak"
      ],
      4
     ],
     "want": "burrow"
    },
    {
     "args": [
      [
       "sun",
       "oak"
      ],
      3
     ],
     "want": null
    },
    {
     "args": [
      [],
      2
     ],
     "want": null
    },
    {
     "args": [
      [
       "hazel"
      ],
      2
     ],
     "want": "hazel"
    },
    {
     "args": [
      [
       "a",
       "bb",
       "ccc"
      ],
      2
     ],
     "want": "ccc"
    },
    {
     "args": [
      [
       "pip",
       "moss"
      ],
      9
     ],
     "want": null
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function firstLong(words, n) {",
    "  let i = 0;",
    "  while (i < words.length && words[i].length <= n) {",
    "    i++;",
    "  }",
    "  return i < words.length ? words[i] : null;",
    "}"
   ],
   "why": "Nothing was added or removed, only moved. Why does the order of two checks change what the program does?",
   "world": "Real code is full of this. User, and user dot name. Check that it exists. Then use it.",
   "view": {
    "row": [
     "sun",
     "oak"
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
     "say": "With and, the computer checks the left side first. If it is false, it never looks at the right side.",
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
     "card": "&& stops at the first false",
     "arrows": null
    },
    {
     "say": "So the check that keeps you safe, must come first.",
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
     "card": "the safety check goes first",
     "arrows": null
    },
    {
     "say": "N is three. I starts at zero. Sun has three letters. Not more than three. So i moves on.",
     "line": 4,
     "ptr": {
      "i": 0
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
     "card": "\"sun\": 3 letters → not long",
     "arrows": null
    },
    {
     "say": "Oak. Three letters as well. I moves on, to two.",
     "line": 4,
     "ptr": {
      "i": 1
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
     "card": "\"oak\": 3 letters → not long",
     "arrows": null
    },
    {
     "say": "Now i is two. There is no word at position two. The old code asked for its length first. What happens?",
     "line": 3,
     "ptr": {
      "i": 2
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
     "card": "old code: words[2].length → ?",
     "arrows": null
    },
    {
     "say": "It crashes. You cannot ask nothing, for its length.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      0,
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
     "card": "undefined has no length → crash",
     "arrows": null
    },
    {
     "say": "The fix is only the order. First ask: is i still inside the row? Two is not less than two. The computer stops right there. The second check never runs.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [
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
     "card": "fix: i < length comes first",
     "arrows": null
    },
    {
     "say": "Line six sees that i is past the end, and returns null.",
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
     "card": "",
     "arrows": null
    },
    {
     "say": "Left to right. Stop when the answer is known. So the guard goes first.",
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
     "card": "left to right · the guard first",
     "arrows": null
    },
    {
     "say": "The same order protects you from null, and from empty lists.",
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
     "card": "inside? not null? then use it",
     "arrows": null
    },
    {
     "say": "Real code is full of this. User, and user dot name. Check that it exists. Then use it.",
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
     "card": "user && user.name",
     "arrows": null
    }
   ]
  },
  {
   "id": "ka4",
   "num": 4,
   "title": "One Too Many",
   "fn": "gaps",
   "ask": "Return the <b>differences between neighbours</b>: the second number minus the first, the third minus the second, and so on. The code below returns <b>one item too many</b>. Trace it for [3, 5, 9].",
   "spec": "gaps([3, 5, 9]) → [2, 4]      gaps([7]) → []",
   "start": "// This code is nearly right. Trace it by hand before you change anything.\nfunction gaps(nums) {\n  const out = [];\n  for (let i = 0; i < nums.length; i++) {\n    out.push(nums[i + 1] - nums[i]);\n  }\n  return out;\n}\n",
   "plan": [
    "Three numbers: how many gaps are there between them?",
    "How many turns does the loop make?",
    "On the last turn, what is nums[i + 1]?"
   ],
   "hints": [
    "Three numbers have two gaps, but the loop makes three turns.",
    "On the last turn nums[i + 1] is undefined, and undefined - 9 is NaN.",
    "The body looks one ahead, so stop one early: i < nums.length - 1."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       3,
       5,
       9
      ]
     ],
     "want": [
      2,
      4
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
     "want": []
    },
    {
     "args": [
      [
       1,
       1
      ]
     ],
     "want": [
      0
     ]
    },
    {
     "args": [
      [
       10,
       4,
       6,
       6
      ]
     ],
     "want": [
      -6,
      2,
      0
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function gaps(nums) {",
    "  const out = [];",
    "  for (let i = 0; i < nums.length - 1; i++) {",
    "    out.push(nums[i + 1] - nums[i]);",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "For an empty array, nums.length - 1 is -1. Trace the fixed loop: does it still behave?",
   "world": "A chart of daily change, today minus yesterday, has one bar fewer than there are days.",
   "view": {
    "row": [
     3,
     5,
     9
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     "",
     ""
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
    "box": null,
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Count first. Three numbers have two gaps. So the loop should make two turns.",
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
     "card": "3 numbers → 2 gaps → 2 turns",
     "arrows": null
    },
    {
     "say": "The body reads the door after i. So on the very last door, there is nothing to read.",
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
     "card": "the body reads i + 1",
     "arrows": null
    },
    {
     "say": "I is zero. Five minus three. Two.",
     "line": 4,
     "ptr": {
      "i": 0
     },
     "hot": [
      0,
      1
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d0": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "5 − 3 = 2",
     "arrows": null
    },
    {
     "say": "I is one. Nine minus five. Four.",
     "line": 4,
     "ptr": {
      "i": 1
     },
     "hot": [
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d1": 4
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "9 − 5 = 4",
     "arrows": null
    },
    {
     "say": "The old code went on, to i equals two. It asked for the number after the nine. What did it get?",
     "line": 4,
     "ptr": {
      "i": 2
     },
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
     "card": "old code: nums[3] − 9 → ?",
     "arrows": null
    },
    {
     "say": "Undefined. And undefined minus nine, is not a number. That was the extra item.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      2
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "undefined − 9 = NaN",
     "arrows": null
    },
    {
     "say": "The body looks one door ahead. So the loop must stop one door early. Less than length, minus one.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [
      2
     ],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "looks 1 ahead → stop 1 early",
     "arrows": null
    },
    {
     "say": "Two turns. Line six returns two, and four.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      "d0",
      "d1"
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
     "say": "Whenever the body reads i plus one, the loop stops at length minus one.",
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
     "card": "reads i + 1 → i < length − 1",
     "arrows": null
    },
    {
     "say": "Count the turns you expect. Then check that the loop makes exactly that many.",
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
     "card": "expected turns = actual turns?",
     "arrows": null
    },
    {
     "say": "A chart of daily change, today minus yesterday, has one bar fewer than there are days.",
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
     "card": "daily change: one bar fewer",
     "arrows": null
    }
   ]
  }
 ]
};
