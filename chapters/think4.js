window.CHAPTER = {
 "id": "think4",
 "title": "Test It, Break It, Fix It",
 "sub": "WARM-UP D · THINKING IN CODE",
 "key": "burrow-ch-think4",
 "next": {
  "href": "chapter.html?c=arrays",
  "label": "Chapter 1: Arrays"
 },
 "prev": {
  "href": "chapter.html?c=think3",
  "label": "Warm-up C: From Words to Code"
 },
 "mock": false,
 "target": null,
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "kd0",
   "label": "Welcome",
   "short": "Intro",
   "name": "It worked on the example",
   "intro": "The example is the easy case. How to break your own code before someone else does."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "kdt1",
   "label": "Lesson 1",
   "short": "L1",
   "name": "Try to break it",
   "intro": "Four kinds of input that break most code: empty, one item, the ends, repeats and negatives. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "kdt2",
   "label": "Lesson 2",
   "short": "L2",
   "name": "Find the first wrong value",
   "intro": "A crash shows where the damage appeared, not where it started. One guess."
  }
 ],
 "notes": {
  "w": "<h3>The idea</h3><ul><li><b>One passing example proves very little.</b> It is the case the author was thinking of.</li>\n      <li><b>Try to break your own code</b> with the inputs nobody thinks of.</li>\n      <li><b>When it breaks, do not guess.</b> Find the first value that is wrong.</li></ul>",
  "t1": "<h3>The inputs that break code</h3><ul><li><b>Empty:</b> an empty list, an empty text, zero.</li>\n      <li><b>One:</b> exactly one item.</li>\n      <li><b>The ends:</b> the first item and the last item; the limit itself and one either side of it (49, 50, 51).</li>\n      <li><b>Repeats, zeros and negatives.</b></li>\n      <li><b>A made-up starting value</b> (such as <code>best = 0</code>) is a common source of bugs. Start from real data: <code>best = nums[0]</code>.</li></ul>",
  "t2": "<h3>How to debug</h3><ul><li><b>The line that crashes is where the damage showed up,</b> not always where it began.</li>\n      <li><b>Walk the values from the top.</b> For each one say what it should be, then look at what it is (console.log, or by hand).</li>\n      <li><b>Stop at the first value that differs.</b> The bug is in the line that produced it.</li>\n      <li><b>Fix that line,</b> then run every test again, including the ones that passed before.</li></ul>"
 },
 "quiz": {
  "kdt1-q1": {
   "ask": "largest() starts with best = 0 and replaces it with any bigger number. Which input gives a wrong answer?",
   "opts": [
    "[-5, -2, -9]: it returns 0",
    "[3, 9, 2]",
    "[7]"
   ],
   "right": 0,
   "why": "No negative number is bigger than 0, so best is never replaced. The answer 0 is not even in the list."
  },
  "kdt2-q1": {
   "ask": "words is [\"pip\", \"likes\", \"seeds\"]. Line 2 reads words[words.length]. What does last hold?",
   "opts": [
    "undefined: position 3 does not exist",
    "\"seeds\"",
    "\"likes\""
   ],
   "right": 0,
   "why": "Three words sit at positions 0, 1 and 2. words.length is 3, one past the end."
  },
  "kd1s-q": {
   "ask": "For an empty list, total is 0 and nums.length is 0. What is total / nums.length in JavaScript?",
   "opts": [
    "NaN, \"not a number\"",
    "0",
    "It crashes"
   ],
   "right": 0,
   "why": "0 / 0 has no value. JavaScript gives NaN, and the function returns it without any error."
  },
  "kd2s-q": {
   "ask": "best started at 0 and no number in [-5, -2, -9] is bigger than 0. What does the old code return?",
   "opts": [
    "0, which is not in the list",
    "-2",
    "-9"
   ],
   "right": 0,
   "why": "best was never replaced, so the made-up starting value comes back as the answer."
  },
  "kd3s-q": {
   "ask": "The old code runs \"then\".includes(\"the\"). What is the result?",
   "opts": [
    "true: the letters t, h, e are inside \"then\"",
    "false: they are different words",
    "It crashes"
   ],
   "right": 0,
   "why": "includes() looks for the letters anywhere inside the word. \"then\" starts with them, so it was counted."
  },
  "kd4s-q": {
   "ask": "There are three words at positions 0, 1 and 2. The old code reads words[3]. What does it get?",
   "opts": [
    "undefined",
    "\"seeds\"",
    "An error on that line"
   ],
   "right": 0,
   "why": "Reading past the end of an array does not crash. It quietly gives undefined, and the crash comes later."
  }
 },
 "problems": [
  {
   "id": "kd1",
   "num": 1,
   "title": "The Average of Nothing",
   "fn": "average",
   "ask": "Return the <b>average</b> of the numbers. For an <b>empty list the answer is 0</b>. The code below is right for the example. Find the input that breaks it.",
   "spec": "average([2, 4, 6]) → 4      average([]) → 0",
   "start": "// This code passes the example. Find an input that breaks it, then fix it.\nfunction average(nums) {\n  let total = 0;\n  for (const n of nums) total += n;\n  return total / nums.length;\n}\n",
   "plan": [
    "Go through the list: empty, one item, the ends, negatives. Which one have you not tried?",
    "Trace the code for that input. What is total, and what is nums.length?",
    "What does the task say the answer should be?"
   ],
   "hints": [
    "For an empty list the code computes 0 / 0.",
    "0 / 0 is NaN, \"not a number\".",
    "Answer the empty list first: if (nums.length === 0) return 0."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       2,
       4,
       6
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
       5
      ]
     ],
     "want": 5
    },
    {
     "args": [
      [
       1,
       2
      ]
     ],
     "want": 1.5
    },
    {
     "args": [
      [
       -2,
       2
      ]
     ],
     "want": 0
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function average(nums) {",
    "  if (nums.length === 0) return 0;",
    "  let total = 0;",
    "  for (const n of nums) total += n;",
    "  return total / nums.length;",
    "}"
   ],
   "why": "Three of the five tests passed before your fix. Which kind of input did each of the three stand for?",
   "topic": null,
   "world": "A product page with no reviews yet. Without this check, it proudly shows a rating of, not a number.",
   "view": {
    "row": [
     2,
     4,
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
    "ptrs": [],
    "vars": [
     "total"
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
     "say": "The example works. So try the inputs nobody thinks of. First on the list. Nothing at all.",
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
     "card": "try the empty list",
     "arrows": null
    },
    {
     "say": "Dividing by the length is the dangerous line. What if the length is zero?",
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
     "card": "dividing by length: is it ever 0?",
     "arrows": null
    },
    {
     "say": "With two, four and six, total reaches twelve, and twelve divided by three is four.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
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
     "vars": {
      "total": 12
     },
     "box": null,
     "card": "12 / 3 = 4 · fine",
     "arrows": null
    },
    {
     "say": "Now the empty list. The loop never runs. Total stays zero. And the length is zero. So what does the last line compute?",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [
      0,
      1,
      2
     ],
     "show": [],
     "vars": {
      "total": 0
     },
     "box": null,
     "card": "empty: 0 / 0 → ?",
     "arrows": null
    },
    {
     "say": "Not a number. No crash. No warning. Just a wrong answer, handed back quietly.",
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
     "card": "0 / 0 = NaN · no error at all",
     "arrows": null
    },
    {
     "say": "The fix goes at the very top. If the list is empty, answer zero, and stop there.",
     "line": 2,
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
     "card": "if empty → return 0",
     "arrows": null
    },
    {
     "say": "Every other input still takes the old path, unchanged.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      2
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [
      0,
      1,
      2
     ],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Whenever you divide, ask whether the bottom can be zero.",
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
     "card": "dividing? can it be zero?",
     "arrows": null
    },
    {
     "say": "Handle the odd case first, at the top. Then the main path stays simple.",
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
     "card": "odd cases first, at the top",
     "arrows": null
    },
    {
     "say": "A product page with no reviews yet. Without this check, it proudly shows a rating of, not a number.",
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
     "card": "a rating with no reviews yet",
     "arrows": null
    }
   ]
  },
  {
   "id": "kd2",
   "num": 2,
   "title": "The Largest",
   "fn": "largest",
   "ask": "Return the <b>largest number</b> in the list (it has at least one number). The code below is right for the example. Find the kind of list that breaks it.",
   "spec": "largest([3, 9, 2]) → 9      largest([-5, -2, -9]) → -2",
   "start": "// This code passes the example. Find an input that breaks it, then fix it.\nfunction largest(nums) {\n  let best = 0;\n  for (const n of nums) {\n    if (n > best) best = n;\n  }\n  return best;\n}\n",
   "plan": [
    "Go through the list of nasty inputs. Which ones could matter for \"largest\"?",
    "Trace the code on [-5, -2, -9]. What is best at the end?",
    "Where did that value come from? Is it in the list?"
   ],
   "hints": [
    "With only negative numbers, nothing is ever bigger than 0.",
    "So the code returns 0, a number that is not in the list.",
    "Start from real data: let best = nums[0]."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       3,
       9,
       2
      ]
     ],
     "want": 9
    },
    {
     "args": [
      [
       -5,
       -2,
       -9
      ]
     ],
     "want": -2
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
       0,
       -1
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       -3
      ]
     ],
     "want": -3
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function largest(nums) {",
    "  let best = nums[0];",
    "  for (const n of nums) {",
    "    if (n > best) best = n;",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "The task promises at least one number. What would nums[0] be if that promise were broken, and what would the function return?",
   "topic": null,
   "world": "A weather app that shows the warmest day of the week. In January, every day is below zero. And the app says zero.",
   "view": {
    "row": [
     -5,
     -2,
     -9
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
      "id": "n",
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
     "say": "The old code started with best equals zero. A number it made up.",
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
     "card": "old code: best = 0, made up",
     "arrows": null
    },
    {
     "say": "A made up start is only safe if the data can never be on the other side of it.",
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
     "card": "a made-up start hides a bug",
     "arrows": null
    },
    {
     "say": "Trace the old code. Best is zero. Is minus five bigger than zero? No.",
     "line": 4,
     "ptr": {
      "n": 0
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
     "vars": {
      "best": 0
     },
     "box": null,
     "card": "old: −5 > 0? no",
     "arrows": null
    },
    {
     "say": "Minus two. Bigger than zero? No. Minus nine? No. So what did the old code return?",
     "line": 4,
     "ptr": {
      "n": 2
     },
     "hot": [
      1,
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
     "card": "old: −2 > 0? no · −9 > 0? no → ?",
     "arrows": null
    },
    {
     "say": "Zero. The number it invented. Not a number from the list.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      0,
      1,
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
     "card": "it returned its own made-up 0",
     "arrows": null
    },
    {
     "say": "The fix. Start with the first number of the list. Minus five.",
     "line": 2,
     "ptr": {
      "n": 0
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [
      0,
      1,
      2
     ],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "best": -5
     },
     "box": null,
     "card": "fix: best = nums[0] = −5",
     "arrows": null
    },
    {
     "say": "Minus two is bigger than minus five. Best becomes minus two. Minus nine is not bigger.",
     "line": 4,
     "ptr": {
      "n": 2
     },
     "hot": [],
     "ok": [
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
      "best": -2
     },
     "box": null,
     "card": "−2 > −5 → best = −2",
     "arrows": null
    },
    {
     "say": "Line six returns minus two.",
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
     "say": "For a largest, or a smallest, start from the first item. Not from zero.",
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
     "card": "largest / smallest: start at nums[0]",
     "arrows": null
    },
    {
     "say": "Always test with only negatives. And with a zero in the list.",
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
     "card": "test: all negative · a zero",
     "arrows": null
    },
    {
     "say": "A weather app that shows the warmest day of the week. In January, every day is below zero. And the app says zero.",
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
     "card": "the warmest day in January",
     "arrows": null
    }
   ]
  },
  {
   "id": "kd3",
   "num": 3,
   "title": "Count the Word",
   "fn": "countWord",
   "ask": "Count how many times <b>word</b> appears in <b>text</b> as a <b>whole word</b>, <b>ignoring capitals</b>. The words of the text are separated by single spaces. The code below is right for the example and wrong in two other ways.",
   "spec": "countWord(\"the cat and the hat\", \"the\") → 2      countWord(\"The then the\", \"the\") → 2",
   "start": "// This code passes the example. Find an input that breaks it, then fix it.\nfunction countWord(text, word) {\n  let count = 0;\n  for (const w of text.split(' ')) {\n    if (w.includes(word)) count++;\n  }\n  return count;\n}\n",
   "plan": [
    "Read the task again and underline two phrases: \"whole word\" and \"ignoring capitals\".",
    "Invent a text that tests each phrase on its own.",
    "Trace the code on \"The then the\". What does it count, and what should it count?"
   ],
   "hints": [
    "includes() is true for \"then\" as well: it looks for the letters anywhere in the word.",
    "Compare whole words with ===.",
    "Make both sides lower case before comparing: w.toLowerCase() === word.toLowerCase()."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "the cat and the hat",
      "the"
     ],
     "want": 2
    },
    {
     "args": [
      "The then the",
      "the"
     ],
     "want": 2
    },
    {
     "args": [
      "",
      "a"
     ],
     "want": 0
    },
    {
     "args": [
      "a a a",
      "a"
     ],
     "want": 3
    },
    {
     "args": [
      "Pip pip PIP",
      "pip"
     ],
     "want": 3
    },
    {
     "args": [
      "other mother",
      "the"
     ],
     "want": 0
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function countWord(text, word) {",
    "  const target = word.toLowerCase();",
    "  let count = 0;",
    "  for (const w of text.split(' ')) {",
    "    if (w.toLowerCase() === target) count++;",
    "  }",
    "  return count;",
    "}"
   ],
   "why": "On \"The then the\" the old code returned 2, the right number, for the wrong reasons. Why is a test like that dangerous?",
   "topic": null,
   "world": "Search inside a document. Whole word, on or off. Match case, on or off. Those two switches are these two rules.",
   "view": {
    "row": [
     "The",
     "then",
     "the"
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
      "id": "w",
      "row": 1
     }
    ],
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
     "say": "The task has two rules. Whole words. And capitals ignored. Each rule needs its own test.",
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
     "card": "two rules → at least two tests",
     "arrows": null
    },
    {
     "say": "The old code asked whether the word includes the letters. That obeys neither rule.",
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
     "card": "old code: includes() → neither rule",
     "arrows": null
    },
    {
     "say": "The first word. The, with a capital T. The old code looked for small t, h, e, inside it. Not found. So it was skipped.",
     "line": 5,
     "ptr": {
      "w": 0
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
     "vars": {
      "count": 0
     },
     "box": null,
     "card": "old: \"The\" includes \"the\"? no",
     "arrows": null
    },
    {
     "say": "The second word. Then. Does it include t, h, e?",
     "line": 5,
     "ptr": {
      "w": 1
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
     "card": "old: \"then\" includes \"the\" → ?",
     "arrows": null
    },
    {
     "say": "Yes. So then was counted. One word missed, one word wrongly counted. And the total still came out as two.",
     "line": 5,
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
     "card": "two mistakes that cancel out",
     "arrows": null
    },
    {
     "say": "The fix. Make both sides small letters. And compare whole words, with three equals signs.",
     "line": 5,
     "ptr": {
      "w": 0
     },
     "hot": [],
     "ok": [
      0
     ],
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
     "vars": {
      "count": 1
     },
     "box": null,
     "card": "\"the\" === \"the\" → count 1",
     "arrows": null
    },
    {
     "say": "Then is not equal to the. Skipped. The last word matches. Two.",
     "line": 5,
     "ptr": {
      "w": 2
     },
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
     "vars": {
      "count": 2
     },
     "box": null,
     "card": "\"then\" ≠ \"the\" · \"the\" matches",
     "arrows": null
    },
    {
     "say": "Line seven returns two. This time, for the right reasons.",
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
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Write one small test for each rule in the task. On its own.",
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
     "card": "one small test per rule",
     "arrows": null
    },
    {
     "say": "A right answer can hide two wrong steps. So test the steps, not just the total.",
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
     "card": "right total, wrong steps: beware",
     "arrows": null
    },
    {
     "say": "Search inside a document. Whole word, on or off. Match case, on or off. Those two switches are these two rules.",
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
     "card": "whole word · match case",
     "arrows": null
    }
   ]
  },
  {
   "id": "kd4",
   "num": 4,
   "title": "The Last Word, Loudly",
   "fn": "shoutLast",
   "ask": "Return the <b>last word</b> of the sentence <b>in capitals, followed by \"!\"</b>. Spaces at the start or end of the sentence must be ignored. The code below crashes. The crash is on one line; the mistake is on another. Find the mistake and <b>fix it</b>, then check that spaces at the start or end are handled too.",
   "spec": "shoutLast(\"pip likes seeds\") → \"SEEDS!\"      shoutLast(\"  hello moss  \") → \"MOSS!\"",
   "start": "// This code crashes on its last line. Do not guess: walk the values from the top\n// and find the FIRST one that is not what you expect.\nfunction shoutLast(sentence) {\n  const words = sentence.split(' ');\n  const last = words[words.length];\n  return last.toUpperCase() + '!';\n}\n",
   "plan": [
    "For \"pip likes seeds\", say what words should be. Then last. Then the result.",
    "Now work out what each one really is. Which is the first that differs?",
    "After that fix, try the sentence with spaces around it. Walk the values again."
   ],
   "hints": [
    "words is right. last is undefined: words.length is one past the end. Use words.length - 1.",
    "With spaces around the sentence, split gives empty words at the ends.",
    "Remove the outer spaces first: sentence.trim().split(\" \")."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "pip likes seeds"
     ],
     "want": "SEEDS!"
    },
    {
     "args": [
      "moss"
     ],
     "want": "MOSS!"
    },
    {
     "args": [
      "  hello moss  "
     ],
     "want": "MOSS!"
    },
    {
     "args": [
      "a b"
     ],
     "want": "B!"
    },
    {
     "args": [
      "Hazel knows "
     ],
     "want": "KNOWS!"
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function shoutLast(sentence) {",
    "  const words = sentence.trim().split(' ');",
    "  const last = words[words.length - 1];",
    "  return last.toUpperCase() + '!';",
    "}"
   ],
   "why": "The crash message pointed at the last line, which you never changed. What does that tell you about reading error messages?",
   "topic": null,
   "world": "An error report from a real app names the line that blew up. The real mistake is usually a few lines above it.",
   "view": {
    "row": [
     "pip",
     "likes",
     "seeds"
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
      "id": "at",
      "row": 1
     }
    ],
    "vars": [
     "last"
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
     "say": "A crash tells you where the damage showed up. Not where it began.",
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
     "card": "the crash is where it showed up",
     "arrows": null
    },
    {
     "say": "So say what each value should be. Then look at what it is. Stop at the first difference.",
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
     "card": "expected vs actual · first difference",
     "arrows": null
    },
    {
     "say": "Line two. The words. Pip, likes, seeds. That is what we expect. Good.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
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
     "card": "words: as expected ✓",
     "arrows": null
    },
    {
     "say": "Line three. Last should be seeds. The old code read position words dot length. Three. What is there?",
     "line": 3,
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
     "show": [],
     "vars": null,
     "box": null,
     "card": "old: words[3] → ?",
     "arrows": null
    },
    {
     "say": "Undefined. Quietly. No error yet. That is the first wrong value. So the bug is here, on line three.",
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
      "last": "undefined"
     },
     "box": null,
     "card": "first wrong value: last = undefined",
     "arrows": null
    },
    {
     "say": "The fix. Length minus one. Position two. Seeds.",
     "line": 3,
     "ptr": {
      "at": 2
     },
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
     "vars": {
      "last": "\"seeds\""
     },
     "box": null,
     "card": "fix: words[length − 1] = \"seeds\"",
     "arrows": null
    },
    {
     "say": "And line four, which crashed before, now works without a single change.",
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
     "card": "",
     "arrows": null
    },
    {
     "say": "One more walk, with spaces around the sentence. Split then gives empty words at the ends. So line two trims the sentence first.",
     "line": 2,
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
     "card": "spaces at the ends → trim() first",
     "arrows": null
    },
    {
     "say": "Do not fix the line that crashed. Fix the line that made the first wrong value.",
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
     "card": "fix the first wrong value",
     "arrows": null
    },
    {
     "say": "After every fix, run all the tests again. One bug often hides another.",
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
     "card": "after a fix: run every test again",
     "arrows": null
    },
    {
     "say": "An error report from a real app names the line that blew up. The real mistake is usually a few lines above it.",
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
     "card": "the mistake is above the crash",
     "arrows": null
    }
   ]
  }
 ]
};
