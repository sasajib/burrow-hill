window.CHAPTER = {
 "id": "stack",
 "title": "Stacks",
 "sub": "CHAPTER 7 · STACKS",
 "key": "burrow-ch-stack",
 "next": {
  "href": "index.html#chapters",
  "label": "All chapters"
 },
 "prev": {
  "href": "chapter.html?c=window",
  "label": "Chapter 6: Sliding window"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "st0",
   "label": "Welcome",
   "short": "Intro",
   "name": "The pile",
   "intro": "What a stack is and the two kinds of problem it solves."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "stt1",
   "label": "Theory 1",
   "short": "T1",
   "name": "Last in, first out",
   "intro": "Push, pop and peek, what they cost, and why brackets need a stack. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "stt2",
   "label": "Theory 2",
   "short": "T2",
   "name": "A stack that stays in order",
   "intro": "The monotonic stack: finding the next bigger item for every position in one pass. One guess."
  }
 ],
 "notes": {
  "t1": "<h3>Key ideas</h3><ul><li><b>A stack is a pile.</b> You add to the top (<code>push</code>) and take from the top (<code>pop</code>). Last in, first out.</li>\n      <li><b>In JavaScript, an array is a stack</b>: <code>push</code> and <code>pop</code> work on the end, and both are O(1). <code>stack.at(-1)</code> reads the top without removing it.</li>\n      <li><b>The top is always the most recent unfinished thing.</b> That is why it fits matching brackets, undo, and nested calls.</li>\n      <li><b>When to reach for it:</b> nesting, matching pairs, \"undo the last one\", or anything that must be finished in reverse order.</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>The stack holds the items that are still waiting for an answer.</b></li>\n      <li><b>Each new item answers every waiting item smaller than it</b>: pop them, record the answer, then push the new item.</li>\n      <li><b>What is left on the stack is always in order</b> (here, biggest at the bottom). That is the meaning of \"monotonic\".</li>\n      <li><b>Each item is pushed once and popped at most once: O(n)</b>, even with a while loop inside the for loop.</li>\n      <li><b>When to reach for it:</b> \"next bigger\", \"next smaller\", \"how long until\".</li></ul>"
 },
 "quiz": {
  "stt1-q1": {
   "ask": "The text so far is ( [ and the stack holds ( then [ on top. The next character is ). What happens?",
   "opts": [
    "It matches, pop the top",
    "The top is [, so the brackets do not match",
    "Push it onto the stack"
   ],
   "right": 1,
   "why": "A closer must match the most recent opener, which is the top of the stack. The top is [, and ) does not close it."
  },
  "stt2-q1": {
   "ask": "The waiting stack holds heights 5, 2 (2 on top). A parcel of height 4 arrives. Which waiting parcels get their answer?",
   "opts": [
    "Only the 2",
    "Both the 2 and the 5",
    "Neither"
   ],
   "right": 0,
   "why": "4 is bigger than 2, so 2 is popped and answered. 4 is not bigger than 5, so 5 keeps waiting, and 4 is pushed on top of it."
  },
  "st1s-q": {
   "ask": "The stack holds ( then { on top. The closer } arrives. What does line 6 do?",
   "opts": [
    "Pops {, which matches",
    "Pops (, which does not match",
    "Returns false"
   ],
   "right": 0,
   "why": "The top is {, the most recent opener, and } closes it."
  },
  "st2s-q": {
   "ask": "The stack holds a then c on top. The # key is pressed. What is left?",
   "opts": [
    "a",
    "c",
    "Nothing"
   ],
   "right": 0,
   "why": "pop removes the top, which is c, the newest letter."
  },
  "st3s-q": {
   "ask": "The operator is *. b = 4 and a = 5 were popped. What is pushed?",
   "opts": [
    "20",
    "9",
    "1"
   ],
   "right": 0,
   "why": "a * b = 5 * 4 = 20."
  },
  "st4s-q": {
   "ask": "The stacks are stack: 3 5 and mins: 3 3. What does \"min\" answer?",
   "opts": [
    "3",
    "5",
    "1"
   ],
   "right": 0,
   "why": "The top of mins is 3. The 1 left both stacks when it was popped."
  },
  "st5s-q": {
   "ask": "Day 3 is 5 degrees. Waiting: day 0 (4 degrees) and day 2 (3 degrees). Which days does it answer?",
   "opts": [
    "Both",
    "Only day 2",
    "Neither"
   ],
   "right": 0,
   "why": "5 is warmer than 3 and warmer than 4, so both are popped."
  },
  "st6s-q": {
   "ask": "The top of the stack is 4. The new rock is −3. What happens?",
   "opts": [
    "The new rock breaks; 4 stays",
    "4 breaks and is popped",
    "Both break"
   ],
   "right": 0,
   "why": "top >= -rock, because 4 >= 3. So line 9 sets alive to false, and nothing is popped."
  }
 },
 "problems": [
  {
   "id": "st1",
   "num": 1,
   "title": "Matching Brackets",
   "fn": "isBalanced",
   "ask": "The text holds only brackets: <b>( ) [ ] { }</b>. Return <b>true</b> if every opener is closed by the right closer, in the right order.",
   "spec": "isBalanced(\"([]{})\") → true      isBalanced(\"(]\") → false",
   "start": "// text contains only the characters ( ) [ ] { }\nfunction isBalanced(text) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: every opener has its own closer, and inner pairs close before outer ones.",
    "Check \"([]{})\" by hand. When you reach the first closer, which opener must it match?",
    "Which opener is always the one a closer has to match: the first one, or the most recent one still open?",
    "What should be true about the openers once the whole text is read?"
   ],
   "hints": [
    "Keep a stack of the openers that are still waiting to be closed.",
    "For an opener: push it. For a closer: pop the top and check it is the matching opener. If not, return false.",
    "At the end, return true only if the stack is empty."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "([]{})"
     ],
     "want": true
    },
    {
     "args": [
      "(]"
     ],
     "want": false
    },
    {
     "args": [
      ""
     ],
     "want": true
    },
    {
     "args": [
      "("
     ],
     "want": false
    },
    {
     "args": [
      ")"
     ],
     "want": false
    },
    {
     "args": [
      "([)]"
     ],
     "want": false
    },
    {
     "args": [
      "{[()]}"
     ],
     "want": true
    },
    {
     "args": [
      "(("
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
    "function isBalanced(text) {",
    "  const pairs = { ')': '(', ']': '[', '}': '{' };",
    "  const stack = [];",
    "  for (const ch of text) {",
    "    if (ch in pairs) {",
    "      if (stack.pop() !== pairs[ch]) return false;",
    "    } else {",
    "      stack.push(ch);",
    "    }",
    "  }",
    "  return stack.length === 0;",
    "}"
   ],
   "why": "Why is the last line needed? Give a text where every closer matches but the answer must still be false.",
   "view": {
    "row": [
     "(",
     "[",
     "]",
     "{",
     "}",
     ")"
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
     "title": "stack (top is last)",
     "rows": 1
    },
    "list": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "A closer must match the most recent opener that is still open. A stack keeps exactly that on top.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "closer ↔ most recent open opener",
     "arrows": null
    },
    {
     "say": "Push every opener. For every closer, pop the top, and check that the two belong together.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "opener: push · closer: pop and check",
     "arrows": null
    },
    {
     "say": "Line two is a lookup: for each closer, which opener it needs. Line three makes an empty stack.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "The first character is an opener. Line eight pushes it.",
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
     "vars": null,
     "box": [
      "("
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Another opener. Push. It now sits on top.",
     "line": 8,
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
      "(  ["
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "A closer. Line six pops the top, and checks it against what this closer needs.",
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
     "vars": null,
     "box": null,
     "card": "needs [  ·  top is [",
     "arrows": null
    },
    {
     "say": "They match. The pair is done, and the stack is back to one opener.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      2
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "("
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "An opener. Push.",
     "line": 8,
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
      "(  {"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "A closer. It needs a curly opener. What is on top?",
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
     "vars": null,
     "box": null,
     "card": "needs {  ·  top is ?",
     "arrows": null
    },
    {
     "say": "The curly opener. A match.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      3,
      4
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "("
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "The last closer pops the round opener. A match, and the stack is empty.",
     "line": 6,
     "ptr": {
      "i": 5
     },
     "hot": [],
     "ok": [
      0,
      5
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line eleven checks that nothing is still open. True.",
     "line": 11,
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
     "say": "One pass, and each push or pop is one step. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "1 pass → O(n) time",
     "arrows": null
    },
    {
     "say": "In the worst case every character is an opener, and all of them wait on the stack. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "the stack → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "st2",
   "num": 2,
   "title": "The Undo Key",
   "fn": "typed",
   "ask": "Each character is a key press. A letter types that letter. <b>#</b> is the undo key: it deletes the last letter, if there is one. Return the text that is left.",
   "spec": "typed(\"ab#c#d\") → \"ad\"",
   "start": "// keys is a string of letters and # characters.\nfunction typed(keys) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: replay the key presses and return what is on screen.",
    "Do it by hand on \"ab#c#d\". What does each # remove?",
    "Which letter does an undo always remove: the first one typed, or the last one?",
    "What should happen if # is pressed when nothing is typed?"
   ],
   "hints": [
    "Keep the letters typed so far in an array, used as a stack.",
    "For a letter: push it. For #: pop (popping an empty array does nothing harmful).",
    "At the end, join the array into a string."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "ab#c#d"
     ],
     "want": "ad"
    },
    {
     "args": [
      ""
     ],
     "want": ""
    },
    {
     "args": [
      "#"
     ],
     "want": ""
    },
    {
     "args": [
      "abc"
     ],
     "want": "abc"
    },
    {
     "args": [
      "a##b"
     ],
     "want": "b"
    },
    {
     "args": [
      "ab##"
     ],
     "want": ""
    },
    {
     "args": [
      "x#y#z#"
     ],
     "want": ""
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function typed(keys) {",
    "  const stack = [];",
    "  for (const key of keys) {",
    "    if (key === '#') stack.pop();",
    "    else stack.push(key);",
    "  }",
    "  return stack.join('');",
    "}"
   ],
   "why": "Why is the answer built with an array and join, and not by adding to a string? (Think back to the Strings chapter.)",
   "view": {
    "row": [
     "a",
     "b",
     "#",
     "c",
     "#",
     "d"
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
     "title": "stack (top is last)",
     "rows": 1
    },
    "list": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Undo always removes the most recent letter. That is last in, first out.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "undo = remove the newest",
     "arrows": null
    },
    {
     "say": "So letters are pushed, and every hash is a pop.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "letter: push · #: pop",
     "arrows": null
    },
    {
     "say": "Line two makes an empty stack.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "A. A letter. Line five pushes it.",
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
     "vars": null,
     "box": [
      "a"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "B. Push.",
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
     "vars": null,
     "box": [
      "a  b"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "A hash. Line four pops the top. B is gone.",
     "line": 4,
     "ptr": {
      "i": 2
     },
     "hot": [
      2
     ],
     "ok": [],
     "bad": [
      1
     ],
     "set": null,
     "vars": null,
     "box": [
      "a"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "C. Push.",
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
     "vars": null,
     "box": [
      "a  c"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Another hash. Which letter does it remove?",
     "line": 4,
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
     "card": "pop removes ?",
     "arrows": null
    },
    {
     "say": "C, the newest. A is left.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      3
     ],
     "set": null,
     "vars": null,
     "box": [
      "a"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "D. Push.",
     "line": 5,
     "ptr": {
      "i": 5
     },
     "hot": [
      5
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "a  d"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line seven joins what is left into one string. A, D.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      5
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One pass, one push or pop per key. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "1 pass → O(n) time",
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
     "vars": null,
     "box": null,
     "card": "the stack → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "st3",
   "num": 3,
   "title": "Sums Without Brackets",
   "fn": "evalPostfix",
   "ask": "The tokens are a sum written with each operator <b>after</b> its two numbers. Operators are <b>+</b>, <b>-</b> and <b>*</b>. Return the result.",
   "spec": "evalPostfix([\"2\", \"3\", \"+\", \"4\", \"*\"]) → 20      ((2 + 3) * 4)",
   "start": "// tokens is an array of strings: numbers, and the operators + - *\nfunction evalPostfix(tokens) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: work out the sum, where an operator applies to the two values just before it.",
    "Do [\"2\", \"3\", \"+\", \"4\", \"*\"] by hand. What did the + use? What did the * use?",
    "An operator always uses the two most recent values. Where should values wait so the most recent are easy to reach?",
    "For \"5\", \"2\", \"-\": which number is subtracted from which?"
   ],
   "hints": [
    "Keep a stack of numbers.",
    "For a number: push it (use Number(t) to convert the string). For an operator: pop b, then pop a, and push the result of a (operator) b.",
    "Order matters for minus: the first pop is the right-hand number. At the end the answer is the only thing on the stack."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       "2",
       "3",
       "+",
       "4",
       "*"
      ]
     ],
     "want": 20
    },
    {
     "args": [
      [
       "7"
      ]
     ],
     "want": 7
    },
    {
     "args": [
      [
       "5",
       "2",
       "-"
      ]
     ],
     "want": 3
    },
    {
     "args": [
      [
       "2",
       "5",
       "-"
      ]
     ],
     "want": -3
    },
    {
     "args": [
      [
       "1",
       "2",
       "3",
       "*",
       "+"
      ]
     ],
     "want": 7
    },
    {
     "args": [
      [
       "4",
       "2",
       "*",
       "3",
       "-"
      ]
     ],
     "want": 5
    },
    {
     "args": [
      [
       "10",
       "6",
       "9",
       "3",
       "+",
       "-",
       "*"
      ]
     ],
     "want": -60
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function evalPostfix(tokens) {",
    "  const stack = [];",
    "  for (const t of tokens) {",
    "    if (t === '+' || t === '-' || t === '*') {",
    "      const b = stack.pop();",
    "      const a = stack.pop();",
    "      if (t === '+') stack.push(a + b);",
    "      if (t === '-') stack.push(a - b);",
    "      if (t === '*') stack.push(a * b);",
    "    } else {",
    "      stack.push(Number(t));",
    "    }",
    "  }",
    "  return stack.pop();",
    "}"
   ],
   "why": "Why is b popped before a? What would evalPostfix([\"5\", \"2\", \"-\"]) return if they were swapped?",
   "view": {
    "row": [
     "2",
     "3",
     "+",
     "4",
     "*"
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
    "vars": [
     "a",
     "b"
    ],
    "box": {
     "title": "stack (top is last)",
     "rows": 1
    },
    "list": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "An operator always works on the two most recent values. So values wait on a stack.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "operator = uses the top two values",
     "arrows": null
    },
    {
     "say": "A number is pushed. An operator pops two values, and pushes back one result.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "operator: pop two, push one",
     "arrows": null
    },
    {
     "say": "Line two makes an empty stack.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Two is a number. Line eleven pushes it.",
     "line": 11,
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
      "2"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Three. Push.",
     "line": 11,
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
      "2  3"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "A plus. Lines five and six pop the top two. B is three, and A is two.",
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
     "vars": {
      "b": 3,
      "a": 2
     },
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line seven pushes A plus B. Five.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "5"
     ],
     "card": "2 + 3 = 5",
     "arrows": null
    },
    {
     "say": "Four. Push.",
     "line": 11,
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
      "5  4"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "A times. It pops four, then five. What gets pushed?",
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
     "vars": {
      "b": 4,
      "a": 5
     },
     "box": [],
     "card": "5 * 4 = ?",
     "arrows": null
    },
    {
     "say": "Twenty.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "20"
     ],
     "card": "5 * 4 = 20",
     "arrows": null
    },
    {
     "say": "The tokens are finished. Line fourteen pops the one value left. Twenty.",
     "line": 14,
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
     "say": "One pass, a few steps per token. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "1 pass → O(n) time",
     "arrows": null
    },
    {
     "say": "The stack holds the values that are still waiting. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "the stack → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "st4",
   "num": 4,
   "title": "The Smallest, Instantly",
   "fn": "minStack",
   "ask": "Run a list of stack operations: <b>[\"push\", x]</b>, <b>[\"pop\"]</b> and <b>[\"min\"]</b>. Return an array with the answer to every <b>min</b>, which is the smallest value on the stack at that moment. Each operation must take O(1).",
   "spec": "minStack([[\"push\",3], [\"push\",5], [\"push\",1], [\"min\"], [\"pop\"], [\"min\"]]) → [1, 3]",
   "start": "// ops is an array of operations: [\"push\", x], [\"pop\"] or [\"min\"].\n// min is only asked when the stack is not empty.\nfunction minStack(ops) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: a stack that can also tell you its smallest value at any time.",
    "Do the example by hand. After the 1 is popped, how did you know the smallest was 3 again?",
    "Scanning the whole stack for each \"min\" is O(n). What could you write down at each push so no scan is needed?",
    "When a value is popped, what must happen to what you wrote down?"
   ],
   "hints": [
    "Keep a second stack, mins, that grows and shrinks together with the main stack.",
    "On push, also push onto mins the smaller of x and the current top of mins. mins.at(-1) reads the top without removing it.",
    "On pop, pop both. The answer to \"min\" is always the top of mins."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        "push",
        3
       ],
       [
        "push",
        5
       ],
       [
        "push",
        1
       ],
       [
        "min"
       ],
       [
        "pop"
       ],
       [
        "min"
       ]
      ]
     ],
     "want": [
      1,
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
        "push",
        2
       ],
       [
        "min"
       ]
      ]
     ],
     "want": [
      2
     ]
    },
    {
     "args": [
      [
       [
        "push",
        2
       ],
       [
        "push",
        2
       ],
       [
        "pop"
       ],
       [
        "min"
       ]
      ]
     ],
     "want": [
      2
     ]
    },
    {
     "args": [
      [
       [
        "push",
        5
       ],
       [
        "push",
        4
       ],
       [
        "push",
        3
       ],
       [
        "min"
       ],
       [
        "pop"
       ],
       [
        "min"
       ],
       [
        "pop"
       ],
       [
        "min"
       ]
      ]
     ],
     "want": [
      3,
      4,
      5
     ]
    },
    {
     "args": [
      [
       [
        "push",
        1
       ],
       [
        "push",
        9
       ],
       [
        "min"
       ],
       [
        "pop"
       ],
       [
        "pop"
       ],
       [
        "push",
        7
       ],
       [
        "min"
       ]
      ]
     ],
     "want": [
      1,
      7
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "const ops = []; for (let i = 0; i < 60000; i++) ops.push([\"push\", 60000 - i]); for (let i = 0; i < 60000; i++) ops.push([\"min\"]); return [ops];",
    "limit": 1500,
    "label": "60,000 pushes, then 60,000 min questions",
    "msg": "Correct on the small cases, but too slow on the big one. Scanning the stack for every \"min\" is O(n) each time. Remember the minimum at every level."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function minStack(ops) {",
    "  const stack = [];",
    "  const mins = [];",
    "  const out = [];",
    "  for (const [op, x] of ops) {",
    "    if (op === 'push') {",
    "      stack.push(x);",
    "      mins.push(mins.length ? Math.min(x, mins.at(-1)) : x);",
    "    } else if (op === 'pop') {",
    "      stack.pop();",
    "      mins.pop();",
    "    } else {",
    "      out.push(mins.at(-1));",
    "    }",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "Why does mins need one entry for every item on the stack, and not just a single \"smallest so far\" variable?",
   "view": {
    "row": [
     "+3",
     "+5",
     "+1",
     "min",
     "pop",
     "min"
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
     "title": "stack and mins",
     "rows": 2
    },
    "list": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "One remembered minimum is not enough. When it is popped, you would not know the one before it.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "one remembered minimum is not enough",
     "arrows": null
    },
    {
     "say": "So keep a second stack. At every level, it holds the smallest value from there down.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "mins: the smallest at every level",
     "arrows": null
    },
    {
     "say": "Two empty stacks. One for the values, one for the minimums.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "stack:",
      "mins:"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Push three. It is the first value, so it is also the smallest so far.",
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
     "vars": null,
     "box": [
      "stack: 3",
      "mins:  3"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Push five. The smallest is still three, so mins gets another three.",
     "line": 8,
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
      "stack: 3 5",
      "mins:  3 3"
     ],
     "card": "min(5, 3) = 3",
     "arrows": null
    },
    {
     "say": "Push one. One is smaller than three. Mins gets a one.",
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
     "vars": null,
     "box": [
      "stack: 3 5 1",
      "mins:  3 3 1"
     ],
     "card": "min(1, 3) = 1",
     "arrows": null
    },
    {
     "say": "A min question. Line thirteen reads the top of mins. One. No searching.",
     "line": 13,
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
     "vars": null,
     "box": null,
     "card": "top of mins = 1",
     "arrows": null
    },
    {
     "say": "Pop. Both stacks lose their top, together.",
     "line": 11,
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
     "box": [
      "stack: 3 5",
      "mins:  3 3"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Another min question. What is the answer now?",
     "line": 13,
     "ptr": {
      "i": 5
     },
     "hot": [
      5
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "top of mins = ?",
     "arrows": null
    },
    {
     "say": "Three. The answer was waiting one level down.",
     "line": 13,
     "ptr": null,
     "hot": [],
     "ok": [
      5
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "top of mins = 3",
     "arrows": null
    },
    {
     "say": "Line sixteen returns both answers.",
     "line": 16,
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
     "say": "Every operation is one push, one pop or one read. O of one each.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "every operation → O(1)",
     "arrows": null
    },
    {
     "say": "The price is a second stack of the same size. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "second stack → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "st5",
   "num": 5,
   "title": "The Next Warmer Day",
   "fn": "waitDays",
   "ask": "Each number is the temperature on one day. For every day, return <b>how many days you wait</b> until a warmer day. If no warmer day comes, the answer for that day is <b>0</b>.",
   "spec": "waitDays([4, 2, 3, 5, 1]) → [3, 1, 1, 0, 0]",
   "start": "// temps[day] is the temperature on that day.\nfunction waitDays(temps) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: for each day, the distance to the next day that is warmer.",
    "Do [4, 2, 3, 5, 1] by hand. When the 5 arrives, how many earlier days does it answer at once?",
    "Looking ahead from every day is O(n²). Turn it round: when a new day arrives, which earlier days has it just answered?",
    "The days still waiting for an answer: where should they be kept, and in what order do they get answered?"
   ],
   "hints": [
    "Keep a stack of the day numbers that are still waiting for a warmer day. stack.at(-1) reads the top without removing it.",
    "For each new day: while the day on top of the stack is colder than today, pop it and set its answer to today - that day.",
    "Then push today. Days left on the stack at the end keep their answer of 0."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       4,
       2,
       3,
       5,
       1
      ]
     ],
     "want": [
      3,
      1,
      1,
      0,
      0
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
      0
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
      1,
      0
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
      0,
      0,
      0
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
      2,
      1,
      0
     ]
    },
    {
     "args": [
      [
       73,
       74,
       75,
       71,
       69,
       72,
       76,
       73
      ]
     ],
     "want": [
      1,
      1,
      4,
      2,
      1,
      1,
      0,
      0
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "const n = 120000; return [Array.from({ length: n }, (_, i) => n - i)];",
    "limit": 1500,
    "label": "120,000 days, each colder than the last",
    "msg": "Correct on the small cases, but too slow on the big one. Looking ahead from every day is O(n²). Keep the waiting days on a stack."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function waitDays(temps) {",
    "  const out = new Array(temps.length).fill(0);",
    "  const stack = [];",
    "  for (let day = 0; day < temps.length; day++) {",
    "    while (stack.length && temps[stack.at(-1)] < temps[day]) {",
    "      const waiting = stack.pop();",
    "      out[waiting] = day - waiting;",
    "    }",
    "    stack.push(day);",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "There is a while loop inside a for loop. Why is the total still O(n) and not O(n²)?",
   "view": {
    "row": [
     4,
     2,
     3,
     5,
     1
    ],
    "row2": [
     0,
     0,
     0,
     0,
     0
    ],
    "rowLabel": "temps",
    "row2Label": "out",
    "ptrs": [
     {
      "id": "day",
      "row": 1
     }
    ],
    "vars": [],
    "box": {
     "title": "waiting days",
     "rows": 1
    },
    "list": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Do not look ahead from each day. Let each new day answer the earlier days that were waiting for it.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "a new day answers the waiting days",
     "arrows": null
    },
    {
     "say": "The waiting days sit on a stack. A warm day pops every colder day off the top.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "pop every colder day off the top",
     "arrows": null
    },
    {
     "say": "Every answer starts at zero. The stack of waiting days is empty.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "Day zero. Nothing is waiting, so line nine just pushes it.",
     "line": 9,
     "ptr": {
      "day": 0
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "0"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Day one is two degrees. The day on top was four. Two is not warmer, so nobody is answered. Push.",
     "line": 9,
     "ptr": {
      "day": 1
     },
     "hot": [
      1
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "0  1"
     ],
     "card": "2 is not warmer than 4",
     "arrows": null
    },
    {
     "say": "Day two is three degrees. The top is day one, which was two. Three is warmer.",
     "line": 5,
     "ptr": {
      "day": 2
     },
     "hot": [
      1,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "3 is warmer than 2",
     "arrows": null
    },
    {
     "say": "So day one is popped, and its answer is two minus one. One day.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      "d1"
     ],
     "bad": [],
     "set": {
      "d1": 1
     },
     "vars": null,
     "box": [
      "0"
     ],
     "card": "out[1] = 2 − 1 = 1",
     "arrows": null
    },
    {
     "say": "Next on top is day zero, which was four. Three is not warmer. Stop, and push day two.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "0  2"
     ],
     "card": "3 is not warmer than 4",
     "arrows": null
    },
    {
     "say": "Day three is five degrees. Days two and zero are waiting. How many does it answer?",
     "line": 5,
     "ptr": {
      "day": 3
     },
     "hot": [
      3
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "5 against days 2 and 0",
     "arrows": null
    },
    {
     "say": "Both. Day two waited one day. Day zero waited three.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      "d2",
      "d0"
     ],
     "bad": [],
     "set": {
      "d2": 1,
      "d0": 3
     },
     "vars": null,
     "box": [],
     "card": "3 − 2 = 1  ·  3 − 0 = 3",
     "arrows": null
    },
    {
     "say": "Push day three. Day four is colder, so it is pushed too. Nobody answers them.",
     "line": 9,
     "ptr": {
      "day": 4
     },
     "hot": [
      4
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "3  4"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line eleven returns the answers. The days left on the stack keep their zero.",
     "line": 11,
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
     "say": "Each day is pushed once, and popped at most once. So the inner loop runs n times in total. O of n.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "pushed once, popped once → O(n)",
     "arrows": null
    },
    {
     "say": "The stack can hold every day. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "the stack → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "st6",
   "num": 6,
   "title": "Rocks on a Line",
   "fn": "collide",
   "ask": "Rocks move along a line at the same speed. A <b>positive</b> number moves right, a <b>negative</b> number moves left, and the size is the number without its sign. When two rocks meet, the smaller one breaks; if they are the same size, both break. Return the rocks that are left, in order.",
   "spec": "collide([4, 2, -3, -5]) → [-5]      collide([5, 10, -5]) → [5, 10]",
   "start": "// rocks: positive = moving right, negative = moving left. No rock is 0.\nfunction collide(rocks) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: play out every crash and return the survivors.",
    "Which pairs can ever crash? A rock moving right followed by one moving left. Any other pair?",
    "Do [4, 2, -3, -5] by hand. Which rock does the -3 meet first?",
    "A new left-moving rock always meets the most recent right-moving survivor first. What structure gives you that?"
   ],
   "hints": [
    "Keep a stack of the survivors so far.",
    "A new rock only fights when it moves left (negative) and the top of the stack moves right (positive).",
    "While that is true: if the top is smaller or equal, pop it; if the top is bigger or equal, the new rock is gone. If the new rock survives, push it. stack.at(-1) reads the top without removing it."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       4,
       2,
       -3,
       -5
      ]
     ],
     "want": [
      -5
     ]
    },
    {
     "args": [
      [
       5,
       10,
       -5
      ]
     ],
     "want": [
      5,
      10
     ]
    },
    {
     "args": [
      [
       8,
       -8
      ]
     ],
     "want": []
    },
    {
     "args": [
      [
       10,
       2,
       -5
      ]
     ],
     "want": [
      10
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
       -2,
       -1,
       1,
       2
      ]
     ],
     "want": [
      -2,
      -1,
      1,
      2
     ]
    },
    {
     "args": [
      [
       1,
       -2,
       3,
       -4
      ]
     ],
     "want": [
      -2,
      -4
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function collide(rocks) {",
    "  const stack = [];",
    "  for (const rock of rocks) {",
    "    let alive = true;",
    "    while (alive && rock < 0 && stack.length > 0) {",
    "      const top = stack.at(-1);",
    "      if (top < 0) break;",
    "      if (top <= -rock) stack.pop();",
    "      if (top >= -rock) alive = false;",
    "    }",
    "    if (alive) stack.push(rock);",
    "  }",
    "  return stack;",
    "}"
   ],
   "why": "When the two rocks are the same size, both ifs on lines 8 and 9 run. Why is that exactly right?",
   "view": {
    "row": [
     4,
     2,
     -3,
     -5
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
    "vars": [
     "alive"
    ],
    "box": {
     "title": "stack (top is last)",
     "rows": 1
    },
    "list": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Only one kind of pair can crash. A rock moving right, followed by a rock moving left.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "only → then ← can crash",
     "arrows": null
    },
    {
     "say": "A rock moving left meets the most recent survivor first. So the survivors wait on a stack.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "new rock fights the top of the stack",
     "arrows": null
    },
    {
     "say": "Four moves right. Nothing to fight. Line eleven pushes it.",
     "line": 11,
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
      "4"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Two moves right as well. Push.",
     "line": 11,
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
      "4  2"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Minus three moves left, and the top moves right. They crash. Size two against size three.",
     "line": 5,
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
     "vars": {
      "alive": "true"
     },
     "box": null,
     "card": "size 2 against size 3",
     "arrows": null
    },
    {
     "say": "Line eight. The top is smaller, so it breaks, and is popped.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      1
     ],
     "set": null,
     "vars": null,
     "box": [
      "4"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "The loop runs again. Now it is four against three. Who breaks?",
     "line": 5,
     "ptr": null,
     "hot": [
      0,
      2
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "size 4 against size 3",
     "arrows": null
    },
    {
     "say": "The new rock. Line nine sets alive to false, so it is never pushed.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      2
     ],
     "set": null,
     "vars": {
      "alive": "false"
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Minus five. Four against five. The four breaks, and is popped.",
     "line": 8,
     "ptr": {
      "i": 3
     },
     "hot": [
      0,
      3
     ],
     "ok": [],
     "bad": [
      0
     ],
     "set": null,
     "vars": {
      "alive": "true"
     },
     "box": [],
     "card": "size 4 against size 5",
     "arrows": null
    },
    {
     "say": "The stack is empty, so the loop stops. Minus five is still alive, and is pushed.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [
      3
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "-5"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line thirteen returns the survivors.",
     "line": 13,
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
     "say": "Each rock is pushed once, and popped at most once. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "pushed once, popped once → O(n)",
     "arrows": null
    },
    {
     "say": "The stack can hold every rock. O of n space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "the stack → O(n) space",
     "arrows": null
    }
   ]
  }
 ]
};
