window.CHAPTER = {
 "id": "recur",
 "title": "Recursion",
 "sub": "CHAPTER 10 · RECURSION",
 "key": "burrow-ch-recur",
 "next": {
  "href": "chapter.html?c=bsearch",
  "label": "Chapter 11: Binary search"
 },
 "prev": {
  "href": "chapter.html?c=mixed1",
  "label": "Mixed set 1"
 },
 "mock": false,
 "target": null,
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "rc0",
   "label": "Welcome",
   "short": "Intro",
   "name": "A function that calls itself",
   "intro": "What recursion is and why so much of what follows depends on it."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "rct1",
   "label": "Theory 1",
   "short": "T1",
   "name": "The base case and the step",
   "intro": "The two parts of every recursion, and what the call stack does meanwhile. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "rct2",
   "label": "Theory 2",
   "short": "T2",
   "name": "Trust the smaller answer",
   "intro": "How to write recursion without tracing every call, and how a memo stops repeated work. One guess."
  }
 ],
 "notes": {
  "t1": "<h3>Key ideas</h3><ul><li><b>Recursion: solve a problem by solving a smaller copy of the same problem.</b></li>\n      <li><b>The base case</b> is a version so small the answer is known. Write it first. Without it the calls never stop (stack overflow).</li>\n      <li><b>The step</b> does a little work and hands a smaller version to the same function.</li>\n      <li><b>Every unfinished call waits on the call stack</b>, so a recursion n calls deep uses O(n) memory.</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>Trust the smaller call.</b> Assume it already returns the right answer, and write only what your call adds.</li>\n      <li><b>You write one step and one base case.</b> Do not try to follow every call in your head.</li>\n      <li><b>If the same small question is asked many times, write each answer down the first time</b> (a memo: a Map from input to answer).</li>\n      <li><b>A memo turns an exploding tree of calls into one call per different input.</b></li></ul>"
 },
 "quiz": {
  "rct1-q1": {
   "ask": "A function calls itself and has no base case. What happens when it runs?",
   "opts": [
    "The calls pile up until the stack is full: a stack overflow",
    "It returns 0",
    "It runs once and stops"
   ],
   "right": 0,
   "why": "Nothing ever answers without asking again, so the waiting calls keep piling up until memory for the call stack runs out."
  },
  "rct2-q1": {
   "ask": "A recursion keeps asking the same small question again and again. What is the fix?",
   "opts": [
    "Write each answer down the first time, and look it up after that",
    "Add a second base case",
    "Call it with a bigger input"
   ],
   "right": 0,
   "why": "That note is a memo. Each different question is then worked out only once."
  },
  "rc1s-q": {
   "ask": "sumTo(2) was waiting for sumTo(1), which returned 1. What does sumTo(2) return?",
   "opts": [
    "3",
    "2",
    "1"
   ],
   "right": 0,
   "why": "Line 3: n + the smaller answer = 2 + 1 = 3."
  },
  "rc2s-q": {
   "ask": "In power(2, 2), half is 2 and the exponent is even. What does line 4 return?",
   "opts": [
    "4",
    "2",
    "8"
   ],
   "right": 0,
   "why": "half * half = 2 × 2 = 4, which is 2 to the power 2."
  },
  "rc3s-q": {
   "ask": "left and right are both 2. Line 2 tests left >= right. What happens?",
   "opts": [
    "It returns true: nothing is left to compare",
    "It compares the middle letter with itself",
    "It calls itself again"
   ],
   "right": 0,
   "why": "2 >= 2, so this is the base case. A single letter is always a mirror."
  },
  "rc4s-q": {
   "ask": "stairs(4) now calls stairs(2). The memo holds 2 → 2 ways. What happens inside that call?",
   "opts": [
    "Line 3 finds it in the memo and returns 2",
    "It calls stairs(1) and stairs(0) again",
    "It returns 1"
   ],
   "right": 0,
   "why": "memo.has(2) is true, so the answer comes back without any further calls."
  }
 },
 "problems": [
  {
   "id": "rc1",
   "num": 1,
   "title": "Add Them Up",
   "fn": "sumTo",
   "ask": "Return <b>1 + 2 + ... + n</b>. Use <b>recursion</b>: the function must call itself, with no loop. n is 0 or more, and sumTo(0) is 0.",
   "spec": "sumTo(4) → 10      (4 + 3 + 2 + 1)",
   "start": "// n is a whole number, 0 or more. No loops: call sumTo from inside sumTo.\nfunction sumTo(n) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: add up every whole number from 1 to n.",
    "If someone handed you the answer for n − 1, how would you get the answer for n?",
    "What is the smallest n, where the answer needs no adding at all?",
    "Write that smallest case first. Then the step."
   ],
   "hints": [
    "The base case: when n is 0, return 0.",
    "The step: the sum up to n is n plus the sum up to n − 1.",
    "So: return n + sumTo(n - 1)."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      4
     ],
     "want": 10
    },
    {
     "args": [
      0
     ],
     "want": 0
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
     "want": 3
    },
    {
     "args": [
      10
     ],
     "want": 55
    },
    {
     "args": [
      100
     ],
     "want": 5050
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\b(for|while)\\b",
     "msg": "No loops in this one: let the function call itself."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function sumTo(n) {",
    "  if (n === 0) return 0;",
    "  return n + sumTo(n - 1);",
    "}"
   ],
   "why": "What would happen if line 2 were removed?",
   "topic": null,
   "world": "The size of a folder is worked out like this. Its own files, plus the size of every folder inside it.",
   "view": {
    "row": [
     4,
     3,
     2,
     1,
     0
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     "",
     "",
     "",
     "",
     ""
    ],
    "rowLabel": "n",
    "row2Label": "gives",
    "ptrs": [
     {
      "id": "call",
      "row": 1
     }
    ],
    "vars": [],
    "box": {
     "title": "call stack",
     "rows": 5
    },
    "list": false,
    "nameOnly": true,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "The sum up to four is four, plus the sum up to three. The same question, one size smaller.",
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
     "card": "sumTo(4) = 4 + sumTo(3)",
     "arrows": null
    },
    {
     "say": "And the sum up to zero needs no thinking. It is zero. That is where the chain stops.",
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
     "card": "sumTo(0) = 0 → the base case",
     "arrows": null
    },
    {
     "say": "The first call. N is four. Not zero. So line three needs sum to three, and has to wait for it.",
     "line": 3,
     "ptr": {
      "call": 0
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
     "box": [
      "sumTo(4)"
     ],
     "card": "4 + sumTo(3) → wait",
     "arrows": null
    },
    {
     "say": "So a new call starts, with n three. It waits too, for sum to two.",
     "line": 3,
     "ptr": {
      "call": 1
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
     "box": [
      "sumTo(4)",
      "sumTo(3)"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Two waits for one. One waits for zero. Four calls are now waiting on the call stack.",
     "line": 3,
     "ptr": {
      "call": 3
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
     "box": [
      "sumTo(4)",
      "sumTo(3)",
      "sumTo(2)",
      "sumTo(1)"
     ],
     "card": "4 calls are waiting",
     "arrows": null
    },
    {
     "say": "N is zero. Line two. The base case. It returns zero straight away, without asking anyone.",
     "line": 2,
     "ptr": {
      "call": 4
     },
     "hot": [
      4
     ],
     "ok": [
      "d4"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d4": 0
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "sumTo(4)",
      "sumTo(3)",
      "sumTo(2)",
      "sumTo(1)",
      "sumTo(0)"
     ],
     "card": "n = 0 → return 0",
     "arrows": null
    },
    {
     "say": "Now the answers travel back up. The call with n one was waiting. One plus zero. It returns one.",
     "line": 3,
     "ptr": {
      "call": 3
     },
     "hot": [],
     "ok": [
      "d3"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d3": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "sumTo(4)",
      "sumTo(3)",
      "sumTo(2)",
      "sumTo(1)"
     ],
     "card": "1 + 0 = 1",
     "arrows": null
    },
    {
     "say": "The call with n two was waiting for that. What does it return?",
     "line": 3,
     "ptr": {
      "call": 2
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
     "box": [
      "sumTo(4)",
      "sumTo(3)",
      "sumTo(2)"
     ],
     "card": "2 + 1 = ?",
     "arrows": null
    },
    {
     "say": "Three. Two, plus the one that came back.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [
      "d2"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d2": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "sumTo(4)",
      "sumTo(3)"
     ],
     "card": "2 + 1 = 3",
     "arrows": null
    },
    {
     "say": "Three plus three is six. Four plus six is ten. Every waiting call has finished.",
     "line": 3,
     "ptr": {
      "call": 0
     },
     "hot": [],
     "ok": [
      "d1",
      "d0"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d1": 6,
      "d0": 10
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [],
     "card": "3 + 3 = 6 · 4 + 6 = 10",
     "arrows": null
    },
    {
     "say": "One call for each number from n down to zero. O of n time.",
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
     "card": "n calls → O(n) time",
     "arrows": null
    },
    {
     "say": "And all of them wait on the call stack at the same moment. O of n space.",
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
     "card": "n waiting calls → O(n) space",
     "arrows": null
    },
    {
     "say": "The size of a folder is worked out like this. Its own files, plus the size of every folder inside it.",
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
     "card": "the size of a folder of folders",
     "arrows": null
    }
   ]
  },
  {
   "id": "rc2",
   "num": 2,
   "title": "Powers in a Hurry",
   "fn": "power",
   "ask": "Return <b>base</b> multiplied by itself <b>exp</b> times (base to the power exp). exp is a whole number, 0 or more, and anything to the power 0 is 1. It must stay fast when exp is in the billions.",
   "spec": "power(2, 5) → 32      power(3, 0) → 1",
   "start": "// exp is a whole number, 0 or more.\nfunction power(base, exp) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: multiply base by itself exp times.",
    "Multiplying one at a time takes exp steps. If you knew base to the power 5, how many more multiplications to get the power 10?",
    "So what smaller question could power(base, exp) ask? Not exp − 1.",
    "What is different when exp is odd?"
   ],
   "hints": [
    "The base case: exp is 0, return 1.",
    "Ask for half: half = power(base, Math.floor(exp / 2)). Then half * half is base to the power of an even exp.",
    "If exp is odd, one base is still missing: return half * half * base."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      2,
      5
     ],
     "want": 32
    },
    {
     "args": [
      2,
      0
     ],
     "want": 1
    },
    {
     "args": [
      3,
      3
     ],
     "want": 27
    },
    {
     "args": [
      5,
      1
     ],
     "want": 5
    },
    {
     "args": [
      2,
      10
     ],
     "want": 1024
    },
    {
     "args": [
      7,
      2
     ],
     "want": 49
    },
    {
     "args": [
      1,
      1000
     ],
     "want": 1
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "Math\\s*\\.\\s*pow|\\*\\*",
     "msg": "Math.pow and ** do the whole job. Build it from multiplication."
    }
   ],
   "big": {
    "gen": "return [1, 20000000000];",
    "limit": 1500,
    "label": "power(1, 20,000,000,000)",
    "msg": "Correct on the small cases, but one multiplication per step is too slow (or too deep) for twenty billion. Ask for half the exponent."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function power(base, exp) {",
    "  if (exp === 0) return 1;",
    "  const half = power(base, Math.floor(exp / 2));",
    "  if (exp % 2 === 0) return half * half;",
    "  return half * half * base;",
    "}"
   ],
   "why": "Why is half worked out once and stored, instead of calling power(...) * power(...)?",
   "topic": null,
   "world": "Fast powers like this are used every time your browser sets up a secure connection.",
   "view": {
    "row": [
     5,
     2,
     1,
     0
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     "",
     "",
     "",
     ""
    ],
    "rowLabel": "exp",
    "row2Label": "gives",
    "ptrs": [
     {
      "id": "call",
      "row": 1
     }
    ],
    "vars": [],
    "box": {
     "title": "call stack",
     "rows": 4
    },
    "list": false,
    "nameOnly": true,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "Two to the power four is two squared, times two squared. So work out half the exponent once, and multiply it by itself.",
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
     "card": "half × half = the full power",
     "arrows": null
    },
    {
     "say": "An odd exponent leaves one extra base. Multiply it in at the end.",
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
     "card": "odd exp → one extra × base",
     "arrows": null
    },
    {
     "say": "Power of two to the five. Line three asks for half the exponent. Five divided by two, rounded down. Two.",
     "line": 3,
     "ptr": {
      "call": 0
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
     "box": [
      "power(2, 5)"
     ],
     "card": "floor(5 / 2) = 2",
     "arrows": null
    },
    {
     "say": "That call asks for half of two. One. And that one asks for half of one, which rounds down to zero.",
     "line": 3,
     "ptr": {
      "call": 2
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
     "box": [
      "power(2, 5)",
      "power(2, 2)",
      "power(2, 1)"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Exponent zero. The base case. It returns one.",
     "line": 2,
     "ptr": {
      "call": 3
     },
     "hot": [
      3
     ],
     "ok": [
      "d3"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d3": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "power(2, 5)",
      "power(2, 2)",
      "power(2, 1)",
      "power(2, 0)"
     ],
     "card": "exp = 0 → return 1",
     "arrows": null
    },
    {
     "say": "Back in the call with exponent one. Half is one. One is odd, so line five multiplies in a base. One times one times two. Two.",
     "line": 5,
     "ptr": {
      "call": 2
     },
     "hot": [],
     "ok": [
      "d2"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d2": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "power(2, 5)",
      "power(2, 2)",
      "power(2, 1)"
     ],
     "card": "1 × 1 × 2 = 2",
     "arrows": null
    },
    {
     "say": "Back in the call with exponent two. Half is two, and two is even. What does line four return?",
     "line": 4,
     "ptr": {
      "call": 1
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
     "box": [
      "power(2, 5)",
      "power(2, 2)"
     ],
     "card": "half = 2 · even → ?",
     "arrows": null
    },
    {
     "say": "Four. Half times half.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [
      "d1"
     ],
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
     "box": [
      "power(2, 5)"
     ],
     "card": "2 × 2 = 4",
     "arrows": null
    },
    {
     "say": "And the first call. Half is four. Five is odd. Four times four times two. Thirty two.",
     "line": 5,
     "ptr": {
      "call": 0
     },
     "hot": [],
     "ok": [
      "d0"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d0": 32
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [],
     "card": "4 × 4 × 2 = 32",
     "arrows": null
    },
    {
     "say": "The exponent halves at every call. So even two billion needs only about thirty calls. O of log n.",
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
     "card": "halving → O(log n) time",
     "arrows": null
    },
    {
     "say": "Those calls wait on the stack. O of log n space.",
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
     "card": "log n waiting calls → O(log n) space",
     "arrows": null
    },
    {
     "say": "Fast powers like this are used every time your browser sets up a secure connection.",
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
     "card": "secure connections: fast powers",
     "arrows": null
    }
   ]
  },
  {
   "id": "rc3",
   "num": 3,
   "title": "The Mirror, Again",
   "fn": "isMirror",
   "ask": "Return <b>true</b> if the word reads the same forwards and backwards. You solved this with a loop in chapter 2. This time use <b>recursion</b>, with no loop.",
   "spec": "isMirror(\"level\") → true      isMirror(\"lever\") → false",
   "start": "// word is a string of lowercase letters. No loops.\n// left and right are filled in automatically on the first call.\nfunction isMirror(word, left = 0, right = word.length - 1) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the two ends match, and so does everything between them.",
    "\"Everything between them\" is a smaller word. What question do you ask about it?",
    "When is the word so small that the answer is simply true?",
    "When can you answer false without asking anything smaller?"
   ],
   "hints": [
    "Base case: if left >= right, there is nothing left to compare. Return true.",
    "If the letters at left and right differ, return false.",
    "Otherwise the answer is whatever the inner part says: return isMirror(word, left + 1, right - 1)."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "level"
     ],
     "want": true
    },
    {
     "args": [
      "lever"
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
      "a"
     ],
     "want": true
    },
    {
     "args": [
      "noon"
     ],
     "want": true
    },
    {
     "args": [
      "abca"
     ],
     "want": false
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\b(for|while)\\b",
     "msg": "No loops in this one: let the function call itself."
    },
    {
     "re": "\\.\\s*reverse\\s*\\(",
     "msg": "No reversing: compare the two ends and ask about the inside."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function isMirror(word, left = 0, right = word.length - 1) {",
    "  if (left >= right) return true;",
    "  if (word[left] !== word[right]) return false;",
    "  return isMirror(word, left + 1, right - 1);",
    "}"
   ],
   "why": "There are two places where the function answers without calling itself. What are they, and why are both needed?",
   "topic": null,
   "world": "Checking the outside, then asking about the inside, is how a program checks nested data.",
   "view": {
    "row": [
     "l",
     "e",
     "v",
     "e",
     "l"
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
    "vars": [],
    "box": {
     "title": "isMirror calls",
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
     "say": "A word is a mirror if its two ends match, and the part between them is a mirror too.",
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
     "card": "ends match + the inside is a mirror",
     "arrows": null
    },
    {
     "say": "The part between them is a smaller copy of the same question. That is the recursive step.",
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
     "card": "the inside = a smaller question",
     "arrows": null
    },
    {
     "say": "The first call. Line one fills in left and right by itself. Zero, and four.",
     "line": 1,
     "ptr": {
      "left": 0,
      "right": 4
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
      "(0 .. 4)"
     ],
     "card": "left = 0 · right = 4",
     "arrows": null
    },
    {
     "say": "Line three compares the ends. L and L. They match. So line four asks about the inside.",
     "line": 4,
     "ptr": null,
     "hot": [
      0,
      4
     ],
     "ok": [
      0,
      4
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
     "card": "\"l\" = \"l\" → ask the inside",
     "arrows": null
    },
    {
     "say": "A new call, with left one and right three. E and E match. Ask about the inside again.",
     "line": 4,
     "ptr": {
      "left": 1,
      "right": 3
     },
     "hot": [
      1,
      3
     ],
     "ok": [
      1,
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
      "(0 .. 4)",
      "(1 .. 3)"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Now left is two, and right is two. Which line answers?",
     "line": 2,
     "ptr": {
      "left": 2,
      "right": 2
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
     "box": [
      "(0 .. 4)",
      "(1 .. 3)",
      "(2 .. 2)"
     ],
     "card": "left = 2 · right = 2 → ?",
     "arrows": null
    },
    {
     "say": "Line two. Left has reached right. Nothing is left to compare. True.",
     "line": 2,
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
     "box": [
      "(0 .. 4)",
      "(1 .. 3)",
      "(2 .. 2)"
     ],
     "card": "the base case → true",
     "arrows": null
    },
    {
     "say": "That true travels straight back up. Each waiting call returns what it was given.",
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
     "box": [],
     "card": "",
     "arrows": null
    },
    {
     "say": "One call for every pair of letters. O of n time.",
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
     "card": "n/2 calls → O(n) time",
     "arrows": null
    },
    {
     "say": "Those calls wait on the stack. O of n space. The loop version needed only O of one.",
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
     "card": "waiting calls → O(n) space",
     "arrows": null
    },
    {
     "say": "Checking the outside, then asking about the inside, is how a program checks nested data.",
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
     "card": "checking nested data, outside in",
     "arrows": null
    }
   ]
  },
  {
   "id": "rc4",
   "num": 4,
   "title": "Up the Stairs",
   "fn": "stairs",
   "ask": "You start on <b>step 0</b> (the ground) and climb taking <b>1 or 2</b> steps at a time. Return the number of <b>different ways</b> to reach step n. There is exactly one way to be on step 0 (do nothing), and one way to reach step 1.",
   "spec": "stairs(4) → 5      (1111, 112, 121, 211, 22)",
   "start": "// n is a whole number, 0 or more.\nfunction stairs(n) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: count the different orders of 1-steps and 2-steps that add up to n.",
    "Think about the last move onto step n. Where could you have been just before it?",
    "So the answer for n is built from the answers for which two smaller staircases?",
    "Draw the calls for stairs(5). Which smaller staircases get asked about more than once? What could stop the repeated work?"
   ],
   "hints": [
    "Base case: for n of 0 or 1 there is one way.",
    "The last move was 1 step (from n − 1) or 2 steps (from n − 2), so stairs(n) = stairs(n − 1) + stairs(n − 2).",
    "Add a memo: a Map from n to its answer. Check it before working anything out, and store each answer before returning it."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      4
     ],
     "want": 5
    },
    {
     "args": [
      0
     ],
     "want": 1
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
     "want": 2
    },
    {
     "args": [
      3
     ],
     "want": 3
    },
    {
     "args": [
      5
     ],
     "want": 8
    },
    {
     "args": [
      10
     ],
     "want": 89
    },
    {
     "args": [
      30
     ],
     "want": 1346269
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "return [45];",
    "limit": 1500,
    "label": "stairs(45)",
    "msg": "Correct on the small cases, but far too slow for 45 steps: the same staircases are being counted millions of times. Write each answer down in a memo."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function stairs(n, memo = new Map()) {",
    "  if (n <= 1) return 1;",
    "  if (memo.has(n)) return memo.get(n);",
    "  const ways = stairs(n - 1, memo) + stairs(n - 2, memo);",
    "  memo.set(n, ways);",
    "  return ways;",
    "}"
   ],
   "why": "Why must the same memo be passed along to both inner calls?",
   "topic": null,
   "world": "Counting ways with a memo is how an app counts the possible routes across a city grid.",
   "view": {
    "row": [
     4,
     3,
     2,
     1,
     0
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     "",
     "",
     "",
     "",
     ""
    ],
    "rowLabel": "n",
    "row2Label": "ways",
    "ptrs": [
     {
      "id": "call",
      "row": 1
     }
    ],
    "vars": [],
    "box": {
     "title": "memo",
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
     "say": "The last hop onto step n was one step, or two. So the ways to reach n are the ways to reach n minus one, plus the ways to reach n minus two.",
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
     "card": "ways(n) = ways(n−1) + ways(n−2)",
     "arrows": null
    },
    {
     "say": "But the same small staircase gets asked about again and again. So write each answer down the first time. That note is a memo.",
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
     "card": "memo: write each answer down once",
     "arrows": null
    },
    {
     "say": "Stairs of four. Not a base case, and not in the memo. So line four asks for stairs of three, and stairs of two.",
     "line": 4,
     "ptr": {
      "call": 0
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
     "box": [],
     "card": "stairs(3) + stairs(2)",
     "arrows": null
    },
    {
     "say": "Stairs of three asks the same kind of question. Stairs of two, plus stairs of one.",
     "line": 4,
     "ptr": {
      "call": 1
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
     "card": "",
     "arrows": null
    },
    {
     "say": "Stairs of two. Stairs of one, plus stairs of zero. Both are base cases, one each. So two ways.",
     "line": 4,
     "ptr": {
      "call": 2
     },
     "hot": [
      2
     ],
     "ok": [
      "d3",
      "d4",
      "d2"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d3": 1,
      "d4": 1,
      "d2": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 + 1 = 2",
     "arrows": null
    },
    {
     "say": "Line five writes that answer into the memo, before returning it.",
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
     "box": [
      "2 → 2 ways"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Back in stairs of three. Two, plus stairs of one, which is one. Three. Into the memo.",
     "line": 5,
     "ptr": {
      "call": 1
     },
     "hot": [],
     "ok": [
      "d1"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d1": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "2 → 2 ways",
      "3 → 3 ways"
     ],
     "card": "2 + 1 = 3",
     "arrows": null
    },
    {
     "say": "Back in stairs of four. It still needs stairs of two. Does it work that out again?",
     "line": 3,
     "ptr": {
      "call": 0
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
     "card": "stairs(2) again → ?",
     "arrows": null
    },
    {
     "say": "No. Line three finds it in the memo. Two. No further calls at all.",
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
     "box": [
      "2 → 2 ways",
      "3 → 3 ways"
     ],
     "card": "memo → 2, no new calls",
     "arrows": null
    },
    {
     "say": "Three plus two. Five ways.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [
      "d0"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d0": 5
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "3 + 2 = 5",
     "arrows": null
    },
    {
     "say": "With the memo, each n is worked out once. O of n time. Without it, the calls roughly double at every level.",
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
     "card": "with a memo → O(n) time",
     "arrows": null
    },
    {
     "say": "The memo and the call stack each hold up to n entries. O of n space.",
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
     "card": "memo + stack → O(n) space",
     "arrows": null
    },
    {
     "say": "Counting ways with a memo is how an app counts the possible routes across a city grid.",
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
     "card": "counting routes, with a memo",
     "arrows": null
    }
   ]
  }
 ]
};
