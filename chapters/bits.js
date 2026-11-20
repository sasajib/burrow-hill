window.CHAPTER = {
 "id": "bits",
 "title": "Bit Tricks",
 "sub": "CHAPTER 26 · BIT TRICKS",
 "key": "burrow-ch-bits",
 "next": {
  "href": "index.html#course",
  "label": "All chapters"
 },
 "prev": {
  "href": "chapter.html?c=dp2",
  "label": "Chapter 25: DP, Two Sides"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "bi0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Switches inside a number",
   "intro": "Under every number is a row of on / off switches. A few puzzles become easy once you look at them."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "bit1",
   "label": "The one lesson",
   "short": "T1",
   "name": "Lamps, and three small tools",
   "intro": "Binary as a row of lamps. AND, OR and XOR, and why pairs cancel. One guess."
  }
 ],
 "notes": {
  "w": "<h3>The words</h3><ul><li><b>Bit:</b> one switch, on (1) or off (0). <b>Binary:</b> a number written as bits.</li>\n      <li><b>Each bit is worth double the one on its right:</b> … 8, 4, 2, 1. Five is 0101: the 4 and the 1.</li>\n      <li><b>Signals:</b> \"appears twice except one\", \"power of two\", \"count the 1 bits\", \"flags\", and \"use O(1) extra space\" on a counting puzzle.</li></ul>",
  "t1": "<h3>Key ideas</h3><ul><li><b>AND (&amp;):</b> a bit is on if it is on in both. <b>OR (|):</b> on if it is on in at least one. <b>XOR (^):</b> on if the two bits differ.</li>\n      <li><b>XOR cancels pairs:</b> <code>x ^ x</code> is 0, and <code>x ^ 0</code> is x. XOR all the numbers of a list and every pair disappears.</li>\n      <li><b><code>n &amp; 1</code></b> reads the last bit: 1 means n is odd.</li>\n      <li><b><code>n &gt;&gt; 1</code></b> shifts every bit one place to the right (halving, rounded down).</li>\n      <li><b><code>n &amp; (n - 1)</code></b> switches off the lowest bit that is on. For a power of two that leaves 0.</li></ul>"
 },
 "quiz": {
  "bit1-q1": {
   "ask": "5 is 0101 in lamps. What is 5 ^ 5 (XOR)?",
   "opts": [
    "0: every lamp meets its twin, so none differ",
    "5",
    "10"
   ],
   "right": 0,
   "why": "XOR switches a lamp on only where the two rows differ. A number never differs from itself."
  },
  "bi1s-q": {
   "ask": "x is 3, which is 011. The next number is 4, which is 100. What is 011 ^ 100?",
   "opts": [
    "111, which is 7",
    "000, which is 0",
    "011, which is 3"
   ],
   "right": 0,
   "why": "The two rows differ in every lamp, so every lamp is on: 111 is 7. The two 4s have cancelled, and only the 7 is left."
  },
  "bi2s-q": {
   "ask": "n is 3, which is 11 in lamps. What is n & 1?",
   "opts": [
    "1: the last lamp is on",
    "0",
    "3"
   ],
   "right": 0,
   "why": "AND with 1 keeps only the last lamp. It is on, so the result is 1, and the count goes up."
  },
  "bi3s-q": {
   "ask": "n is 1000 and n - 1 is 0111. What is 1000 & 0111?",
   "opts": [
    "0000: no lamp is on in both",
    "1111",
    "1000"
   ],
   "right": 0,
   "why": "AND keeps a lamp only where both rows have it on. These two rows never agree, so the result is 0."
  }
 },
 "problems": [
  {
   "id": "bi1",
   "num": 1,
   "title": "The Odd One Out",
   "fn": "oddOne",
   "ask": "Every number in the list appears <b>exactly twice</b>, except one that appears <b>once</b>. Return that one. Use <b>O(1) extra space</b>: no set, no map, no sorting.",
   "spec": "oddOne([4, 7, 4]) → 7      oddOne([2, 1, 2, 5, 1]) → 5",
   "start": "// nums holds whole numbers of 0 or more. Every value appears twice, except one.\nfunction oddOne(nums) {\n  // your code here\n}\n",
   "plan": [
    "A set would solve it, but it costs O(n) space. Which operation makes two equal numbers disappear?",
    "Does the order of the numbers matter for that operation?",
    "What do you start with, so that the first number is kept as it is?"
   ],
   "hints": [
    "x ^ x is 0, and x ^ 0 is x.",
    "XOR can be done in any order, so the pairs cancel wherever they stand.",
    "Start with 0 and XOR every number into it."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       4,
       7,
       4
      ]
     ],
     "want": 7
    },
    {
     "args": [
      [
       2,
       1,
       2,
       5,
       1
      ]
     ],
     "want": 5
    },
    {
     "args": [
      [
       9
      ]
     ],
     "want": 9
    },
    {
     "args": [
      [
       0,
       3,
       3
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       6,
       6,
       8,
       1,
       8
      ]
     ],
     "want": 1
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function oddOne(nums) {",
    "  let x = 0;",
    "  for (const n of nums) {",
    "    x = x ^ n;",
    "  }",
    "  return x;",
    "}"
   ],
   "why": "Would this still work if the other numbers appeared three times each? Try [4, 4, 4, 7] by hand.",
   "world": "Storage systems use this to rebuild a lost disk. X or the disks that are left, and the missing one appears.",
   "view": {
    "row": [
     4,
     7,
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
    "ptrs": [
     {
      "id": "n",
      "row": 1
     }
    ],
    "vars": [
     "x"
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
     "say": "X or switches a lamp on only where two numbers differ. So a number, x or itself, is zero.",
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
     "card": "x ^ x = 0 · x ^ 0 = x",
     "arrows": null
    },
    {
     "say": "X or them all together. Every pair cancels. The one without a twin is left.",
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
     "card": "XOR everything → the odd one",
     "arrows": null
    },
    {
     "say": "X starts at zero.",
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
     "vars": {
      "x": 0
     },
     "box": null,
     "card": "x = 0 → 000",
     "arrows": null
    },
    {
     "say": "The four. In lamps, one, zero, zero. Zero x or four is four.",
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
      "x": 4
     },
     "box": null,
     "card": "000 ^ 100 = 100 → 4",
     "arrows": null
    },
    {
     "say": "The seven. One, one, one. Where do one zero zero, and one one one, differ? In the last two lamps. So x is three.",
     "line": 4,
     "ptr": {
      "n": 1
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
     "vars": {
      "x": 3
     },
     "box": null,
     "card": "100 ^ 111 = 011 → 3",
     "arrows": null
    },
    {
     "say": "X is three. That is neither of them. Now the second four arrives. What is zero one one, x or one zero zero?",
     "line": 4,
     "ptr": {
      "n": 2
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
     "card": "011 ^ 100 → ?",
     "arrows": null
    },
    {
     "say": "One, one, one. Seven. The two fours have cancelled each other, even though the seven stood between them.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [
      1
     ],
     "bad": [
      0,
      2
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "x": 7
     },
     "box": null,
     "card": "the 4s cancelled → 7 is left",
     "arrows": null
    },
    {
     "say": "Line six returns seven.",
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
     "say": "One pass. O of n.",
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
     "card": "one pass → O(n)",
     "arrows": null
    },
    {
     "say": "One number. O of one space. No set needed.",
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
     "card": "one number → O(1) space",
     "arrows": null
    },
    {
     "say": "Storage systems use this to rebuild a lost disk. X or the disks that are left, and the missing one appears.",
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
     "card": "rebuilding a lost disk (RAID)",
     "arrows": null
    }
   ]
  },
  {
   "id": "bi2",
   "num": 2,
   "title": "Count the Lamps",
   "fn": "lampsOn",
   "ask": "Return <b>how many bits are 1</b> in the binary form of n (n is 0 or more).",
   "spec": "lampsOn(6) → 2      (6 is 110)      lampsOn(7) → 3      lampsOn(0) → 0",
   "start": "function lampsOn(n) {\n  // your code here\n}\n",
   "plan": [
    "How do you read the last bit of a number?",
    "Once you have read it, how do you bring the next bit into the last place?",
    "When are you finished?"
   ],
   "hints": [
    "n & 1 is 1 when the last bit is on.",
    "n >> 1 shifts every bit one place to the right, dropping the last one.",
    "Repeat while n is above 0, adding n & 1 to a counter each time."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      6
     ],
     "want": 2
    },
    {
     "args": [
      7
     ],
     "want": 3
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
      8
     ],
     "want": 1
    },
    {
     "args": [
      255
     ],
     "want": 8
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function lampsOn(n) {",
    "  let count = 0;",
    "  while (n > 0) {",
    "    count += n & 1;",
    "    n = n >> 1;",
    "  }",
    "  return count;",
    "}"
   ],
   "why": "How many turns does the loop make for 255, and for 256? What decides the number of turns?",
   "world": "A file with permissions read, write and run stores them as three lamps. Counting the lamps says how much is allowed.",
   "view": {
    "row": [
     1,
     1,
     0
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "n",
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
     "say": "And with one, reads the last lamp. It gives one if the lamp is on, and zero if it is off.",
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
     "card": "n & 1 → the last lamp",
     "arrows": null
    },
    {
     "say": "Then shift everything one place to the right. The next lamp is now the last one.",
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
     "card": "n >> 1 → the next lamp moves in",
     "arrows": null
    },
    {
     "say": "N is six. One, one, zero. Count is zero.",
     "line": 2,
     "ptr": null,
     "hot": [
      0,
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
     "vars": {
      "count": 0
     },
     "box": null,
     "card": "n = 110 · count = 0",
     "arrows": null
    },
    {
     "say": "The last lamp is off. So and with one gives zero. Count stays zero.",
     "line": 4,
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
     "card": "110 & 001 = 0",
     "arrows": null
    },
    {
     "say": "Line five shifts to the right. The last lamp drops off. N is one, one. That is three.",
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
      2
     ],
     "show": [],
     "vars": null,
     "box": null,
     "card": "110 >> 1 = 11 → 3",
     "arrows": null
    },
    {
     "say": "Now the last lamp is on. What does and with one give?",
     "line": 4,
     "ptr": null,
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
     "card": "11 & 01 → ?",
     "arrows": null
    },
    {
     "say": "One. So count is one. Shift again. N is just one.",
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
      1
     ],
     "show": [],
     "vars": {
      "count": 1
     },
     "box": null,
     "card": "count = 1 · 11 >> 1 = 1",
     "arrows": null
    },
    {
     "say": "The last lamp is on again. Count is two. One more shift, and n is zero. The loop ends.",
     "line": 5,
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
     "gone": [
      0
     ],
     "show": [],
     "vars": {
      "count": 2
     },
     "box": null,
     "card": "count = 2 · n = 0 → stop",
     "arrows": null
    },
    {
     "say": "Line seven returns two.",
     "line": 7,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1
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
     "say": "One turn per lamp. A number n has about log n lamps.",
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
     "card": "one turn per lamp → O(log n)",
     "arrows": null
    },
    {
     "say": "One counter.",
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
     "card": "one counter → O(1) space",
     "arrows": null
    },
    {
     "say": "A file with permissions read, write and run stores them as three lamps. Counting the lamps says how much is allowed.",
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
     "card": "how many permissions are on",
     "arrows": null
    }
   ]
  },
  {
   "id": "bi3",
   "num": 3,
   "title": "A Single Lamp",
   "fn": "isPowerOfTwo",
   "ask": "Return <b>true</b> if n is a power of two (1, 2, 4, 8, 16, …). n is a whole number and may be 0 or negative.",
   "spec": "isPowerOfTwo(8) → true      isPowerOfTwo(6) → false      isPowerOfTwo(0) → false",
   "start": "function isPowerOfTwo(n) {\n  // your code here\n}\n",
   "plan": [
    "Write 1, 2, 4, 8 as lamps. What do they have in common?",
    "Now write 8 and 7 under each other. What do you notice?",
    "Which inputs need a separate check?"
   ],
   "hints": [
    "A power of two has exactly one lamp on.",
    "Subtracting 1 switches that lamp off and every lamp to its right on, so n & (n - 1) is 0.",
    "0 and negative numbers are not powers of two: check n > 0 first."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      8
     ],
     "want": true
    },
    {
     "args": [
      6
     ],
     "want": false
    },
    {
     "args": [
      0
     ],
     "want": false
    },
    {
     "args": [
      1
     ],
     "want": true
    },
    {
     "args": [
      -8
     ],
     "want": false
    },
    {
     "args": [
      1024
     ],
     "want": true
    },
    {
     "args": [
      12
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
    "function isPowerOfTwo(n) {",
    "  return n > 0 && (n & (n - 1)) === 0;",
    "}"
   ],
   "why": "The check n > 0 comes first. What would the second half give for n = 0 if it ran alone?",
   "world": "Memory sizes are powers of two. Sixteen, thirty two, sixty four. A program checks a size with exactly this line.",
   "view": {
    "row": [
     1,
     0,
     0,
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
    "rowLabel": "n",
    "row2Label": "n − 1",
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
     "say": "A power of two has exactly one lamp on.",
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
     "card": "a power of two: one lamp on",
     "arrows": null
    },
    {
     "say": "Take one away. That lamp goes off. And every lamp to its right comes on. So the two rows share no lamp.",
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
     "card": "n and n − 1 share no lamp",
     "arrows": null
    },
    {
     "say": "Eight. One, zero, zero, zero.",
     "line": 2,
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
     "card": "n = 8 → 1000",
     "arrows": null
    },
    {
     "say": "Eight minus one is seven. Zero, one, one, one.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d0": 0,
      "d1": 1,
      "d2": 1,
      "d3": 1
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "n − 1 = 7 → 0111",
     "arrows": null
    },
    {
     "say": "Now and them. A lamp stays on only if it is on in both rows. Is there any such lamp?",
     "line": 2,
     "ptr": null,
     "hot": [
      0,
      "d1",
      "d2",
      "d3"
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
     "card": "1000 & 0111 → ?",
     "arrows": null
    },
    {
     "say": "None. The result is zero. So eight is a power of two.",
     "line": 2,
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
     "card": "",
     "arrows": null
    },
    {
     "say": "Try six. One, one, zero. Six minus one is five. One, zero, one. The first lamp is on in both. Not zero. So six is not.",
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
     "card": "6: 110 & 101 = 100 → not zero",
     "arrows": null
    },
    {
     "say": "And the first check, n above zero, rules out zero and the negative numbers.",
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
     "card": "n > 0 comes first",
     "arrows": null
    },
    {
     "say": "No loop at all. One subtraction, and one and. O of one.",
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
     "card": "no loop → O(1)",
     "arrows": null
    },
    {
     "say": "No extra memory.",
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
     "card": "O(1) space",
     "arrows": null
    },
    {
     "say": "Memory sizes are powers of two. Sixteen, thirty two, sixty four. A program checks a size with exactly this line.",
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
     "card": "memory sizes: 16 · 32 · 64",
     "arrows": null
    }
   ]
  }
 ]
};
