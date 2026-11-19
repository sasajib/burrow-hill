window.CHAPTER = {
 "id": "strings",
 "title": "Strings",
 "sub": "CHAPTER 2 · STRINGS",
 "key": "burrow-ch-strings",
 "next": {
  "href": "hashmap.html",
  "label": "Chapter 3: Hash maps"
 },
 "prev": {
  "href": "chapter.html?c=arrays",
  "label": "Chapter 1: Arrays"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "sr0",
   "label": "Welcome",
   "short": "Intro",
   "name": "A word is a row too",
   "intro": "What this chapter covers and why strings get their own rules."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "srt1",
   "label": "Theory 1",
   "short": "T1",
   "name": "A word is a row of letters",
   "intro": "Strings are arrays of characters, with one big difference. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "srt2",
   "label": "Theory 2",
   "short": "T2",
   "name": "Letters are numbers",
   "intro": "Character codes, and counting letters. One guess."
  }
 ],
 "notes": {
  "t1": "<h3>Key ideas</h3><ul><li><b>A string is a row of characters.</b> <code>word[i]</code> reads one in a single step; <code>word.length</code> gives the count.</li>\n      <li><b>Strings cannot be changed in place.</b> <code>word[0] = \"b\"</code> does nothing. Every \"change\" builds a new string, which costs one step per character.</li>\n      <li><b>Building a long string piece by piece can cost O(n²)</b>, because each addition may copy everything so far. Collect the pieces in an array and <code>join</code> once.</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>Every character has a number</b>, its code: <code>\"a\".charCodeAt(0)</code> is 97, \"b\" is 98, and so on.</li>\n      <li><b>Code minus 97 gives a slot from 0 to 25</b> for lowercase letters, so 26 counters are enough to count a whole word.</li>\n      <li><b>A count table answers most string questions</b>: is a letter alone, do two words use the same letters, what appears most.</li></ul>"
 },
 "quiz": {
  "srt1-q1": {
   "ask": "let word = \"cat\"; then word[0] = \"b\"; What is word now?",
   "opts": [
    "\"bat\"",
    "\"cat\"",
    "An error stops the program"
   ],
   "right": 1,
   "why": "Strings cannot be changed in place. The assignment is ignored and word is still \"cat\"."
  },
  "srt2-q1": {
   "ask": "\"a\" has code 97 and \"e\" has code 101. Using code − 97, which counter does \"e\" use?",
   "opts": [
    "Counter 5",
    "Counter 4",
    "Counter 101"
   ],
   "right": 1,
   "why": "101 − 97 = 4. Counters start at 0, so \"a\" is 0 and \"e\" is 4."
  },
  "sr1s-q": {
   "ask": "left = 2 and right = 2. The test is left < right. Does the loop run again?",
   "opts": [
    "Yes, it compares the middle letter with itself",
    "No, 2 is not less than 2"
   ],
   "right": 1,
   "why": "The middle letter has no partner, so there is nothing left to compare."
  },
  "sr2s-q": {
   "ask": "The map holds s → 2, e → 2, d → 1. The walk is on \"d\". What happens?",
   "opts": [
    "The count is 1, so return its index",
    "The count is 2, so keep walking",
    "Return -1"
   ],
   "right": 0,
   "why": "\"d\" appears once, and it is the first such letter in the word."
  },
  "sr3s-q": {
   "ask": "The map holds t → 1, e → 0, a → 0. The second word is on \"t\". Is there one left?",
   "opts": [
    "Yes, t → 1",
    "No, every count is 0"
   ],
   "right": 0,
   "why": "T was counted once in the first word and has not been used yet."
  },
  "sr4s-q": {
   "ask": "s points at \"n\" in the small word. Moss is on \"n\" in the big word. What happens?",
   "opts": [
    "They match, so s moves forward",
    "No match, keep walking",
    "Return false"
   ],
   "right": 0,
   "why": "small[s] equals big[b], so line 5 moves s forward."
  }
 },
 "problems": [
  {
   "id": "sr1",
   "num": 1,
   "title": "The Mirror Word",
   "fn": "isMirror",
   "ask": "Return <b>true</b> if the word reads the same forwards and backwards, and <b>false</b> otherwise. Do not build a reversed copy.",
   "spec": "isMirror(\"level\") → true      isMirror(\"lever\") → false",
   "start": "// word is a string of lowercase letters.\nfunction isMirror(word) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the first letter equals the last, the second equals the second to last, and so on.",
    "Do it by hand on \"level\". Which two letters do you compare first? Which two next?",
    "What is the least you must keep track of while you work?",
    "When can you stop early with false? When can you stop with true?"
   ],
   "hints": [
    "Put one marker on the first letter and one on the last. Compare the two letters under them.",
    "If they differ, return false straight away. If they match, move both markers one step inward.",
    "Keep going while left < right. If the loop ends without a mismatch, return true."
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
      "a"
     ],
     "want": true
    },
    {
     "args": [
      ""
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
    },
    {
     "args": [
      "racecar"
     ],
     "want": true
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*reverse\\s*\\(",
     "msg": "Reversing a copy works, but it uses extra memory and skips the idea. Compare the two ends instead."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function isMirror(word) {",
    "  let left = 0;",
    "  let right = word.length - 1;",
    "  while (left < right) {",
    "    if (word[left] !== word[right]) {",
    "      return false;",
    "    }",
    "    left++;",
    "    right--;",
    "  }",
    "  return true;",
    "}"
   ],
   "why": "Why is it safe to stop when left and right meet, without checking the middle letter?",
   "view": {
    "row": [
     "l",
     "e",
     "v",
     "e",
     "l"
    ],
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
    "box": null,
    "list": false,
    "nameOnly": false,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "A mirror word reads the same from both ends. So compare the two ends, then walk inward.",
     "line": 0,
     "ptr": null,
     "hot": [
      0,
      4
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "compare the ends, walk inward",
     "arrows": null
    },
    {
     "say": "If any pair differs, it is not a mirror. If the two walkers meet, it is.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "one mismatch = not a mirror",
     "arrows": null
    },
    {
     "say": "Lines two and three place the markers. Pip is left, at index zero. Moss is right, at index four.",
     "line": 3,
     "ptr": {
      "left": 0,
      "right": 4
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
     "say": "Line four asks: is left still before right? Zero is less than four. Yes.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "0 < 4 → keep going",
     "arrows": null
    },
    {
     "say": "Line five compares the two letters. L and L. They match, so nothing is returned.",
     "line": 5,
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
     "set": null,
     "vars": null,
     "box": null,
     "card": "\"l\" and \"l\" match",
     "arrows": null
    },
    {
     "say": "Lines eight and nine step both markers inward.",
     "line": 9,
     "ptr": {
      "left": 1,
      "right": 3
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
     "say": "Check again. One is less than three. E and E match.",
     "line": 5,
     "ptr": null,
     "hot": [
      1,
      3
     ],
     "ok": [
      1,
      3
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "\"e\" and \"e\" match",
     "arrows": null
    },
    {
     "say": "Step inward again. Now both stand on index two. Is two less than two?",
     "line": 4,
     "ptr": {
      "left": 2,
      "right": 2
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "2 < 2 → ?",
     "arrows": null
    },
    {
     "say": "No. The middle letter has no partner to disagree with. The loop ends.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [
      2
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "2 < 2 → no, stop",
     "arrows": null
    },
    {
     "say": "Line eleven returns true. Level is a mirror word.",
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
     "say": "Each turn checks one pair, so at most half the letters. That is O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "n/2 checks → O(n) time",
     "arrows": null
    },
    {
     "say": "Two markers, and no copy of the word. O of one space. This is the two pointer pattern again.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "2 markers → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "sr2",
   "num": 2,
   "title": "The Odd One Out",
   "fn": "firstUnique",
   "ask": "Return the <b>index</b> of the first letter that appears only once in the word. If every letter repeats, return <b>-1</b>.",
   "spec": "firstUnique(\"seeds\") → 3      firstUnique(\"aabb\") → -1",
   "start": "// word is a string of lowercase letters.\nfunction firstUnique(word) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the first position whose letter never appears anywhere else.",
    "Do it by hand on \"seeds\". How do you know \"s\" is not the answer? What did you have to look at?",
    "The slow way re-scans the whole word for every letter. Where is the wasted work?",
    "What could remember how often each letter appears, so you only count once?"
   ],
   "hints": [
    "You cannot tell a letter is alone until you have seen the whole word. Plan for two walks.",
    "On the first walk, count every letter in a Map: letter → how many times.",
    "On the second walk, return the first index whose letter has a count of 1. If the walk ends, return -1."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "seeds"
     ],
     "want": 3
    },
    {
     "args": [
      "aabb"
     ],
     "want": -1
    },
    {
     "args": [
      "z"
     ],
     "want": 0
    },
    {
     "args": [
      ""
     ],
     "want": -1
    },
    {
     "args": [
      "loveleetcode"
     ],
     "want": 2
    },
    {
     "args": [
      "aabbc"
     ],
     "want": 4
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function firstUnique(word) {",
    "  const count = new Map();",
    "  for (const ch of word) {",
    "    count.set(ch, (count.get(ch) || 0) + 1);",
    "  }",
    "  for (let i = 0; i < word.length; i++) {",
    "    if (count.get(word[i]) === 1) {",
    "      return i;",
    "    }",
    "  }",
    "  return -1;",
    "}"
   ],
   "why": "Why does this need two walks? What goes wrong if you try to answer during the first walk?",
   "view": {
    "row": [
     "s",
     "e",
     "e",
     "d",
     "s"
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
     "say": "To know a letter is alone, you must have seen the whole word. So this takes two walks.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "walk 1: count · walk 2: find",
     "arrows": null
    },
    {
     "say": "On the first walk, a map counts every letter. On the second, we ask it for the first letter with a count of one.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "a map remembers the counts",
     "arrows": null
    },
    {
     "say": "Line two makes an empty map, called count.",
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
     "say": "The first walk. S. Never seen, so its count becomes one.",
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
     "vars": null,
     "box": [
      "s → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "E. Count one.",
     "line": 4,
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
      "s → 1",
      "e → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "E again. Its count goes up to two.",
     "line": 4,
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
      "s → 1",
      "e → 2"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "D. Count one.",
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
     "vars": null,
     "box": [
      "s → 1",
      "e → 2",
      "d → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "S again. Two.",
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
     "box": [
      "s → 2",
      "e → 2",
      "d → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Now the second walk, from the start. Line seven asks: is this letter's count one? S has two. No.",
     "line": 7,
     "ptr": {
      "i": 0
     },
     "hot": [],
     "ok": [],
     "bad": [
      0
     ],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "E has two. No. The next E, no.",
     "line": 7,
     "ptr": {
      "i": 2
     },
     "hot": [],
     "ok": [],
     "bad": [
      1,
      2
     ],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "D. What does the map say?",
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
     "box": null,
     "card": "count of \"d\" = ?",
     "arrows": null
    },
    {
     "say": "One. Line eight returns its index. Three.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [
      3
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Two walks over n letters is two n steps. Drop the constant. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "2 walks → O(n) time",
     "arrows": null
    },
    {
     "say": "The map holds one entry for each different letter. O of n space at most.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "the map → O(n) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "sr3",
   "num": 3,
   "title": "Same Letters",
   "fn": "sameLetters",
   "ask": "Return <b>true</b> if the two words use exactly the same letters, each the same number of times. Otherwise return <b>false</b>.",
   "spec": "sameLetters(\"tea\", \"eat\") → true      sameLetters(\"tea\", \"tee\") → false",
   "start": "// a and b are strings of lowercase letters.\nfunction sameLetters(a, b) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: every letter appears equally often in both words.",
    "Do it by hand on \"tea\" and \"eat\". How did you convince yourself?",
    "Sorting both words works, but sorting costs more than one pass. Can you avoid it?",
    "What could keep count of the first word, so the second word can be checked against it?"
   ],
   "hints": [
    "If the lengths differ, the answer is false straight away.",
    "Count the letters of the first word in a Map.",
    "Walk the second word: if its letter has no count left, return false; otherwise lower the count by one. If you finish, return true."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "tea",
      "eat"
     ],
     "want": true
    },
    {
     "args": [
      "tea",
      "tee"
     ],
     "want": false
    },
    {
     "args": [
      "a",
      "a"
     ],
     "want": true
    },
    {
     "args": [
      "ab",
      "a"
     ],
     "want": false
    },
    {
     "args": [
      "listen",
      "silent"
     ],
     "want": true
    },
    {
     "args": [
      "aab",
      "abb"
     ],
     "want": false
    },
    {
     "args": [
      "",
      ""
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
    "function sameLetters(a, b) {",
    "  if (a.length !== b.length) return false;",
    "  const count = new Map();",
    "  for (const ch of a) {",
    "    count.set(ch, (count.get(ch) || 0) + 1);",
    "  }",
    "  for (const ch of b) {",
    "    if (!count.get(ch)) return false;",
    "    count.set(ch, count.get(ch) - 1);",
    "  }",
    "  return true;",
    "}"
   ],
   "why": "Why is the length check on line 2 needed? Find two words where the rest of the code would give the wrong answer without it.",
   "view": {
    "row": [
     "t",
     "e",
     "a"
    ],
    "row2": [
     "e",
     "a",
     "t"
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
     "say": "Two words are anagrams when they use the same letters, the same number of times.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "same letters, same counts",
     "arrows": null
    },
    {
     "say": "So count the first word up, then count the second word down. Everything must land on zero.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "count up, then count down",
     "arrows": null
    },
    {
     "say": "Line two is a quick exit. Different lengths can never match. Three and three, so we go on.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "3 = 3 → go on",
     "arrows": null
    },
    {
     "say": "Count the first word. T, one.",
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
      "t → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "E, one.",
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
      "t → 1",
      "e → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "A, one.",
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
     "box": [
      "t → 1",
      "e → 1",
      "a → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Now the second word. E. Line eight asks: is there an E left? Yes.",
     "line": 8,
     "ptr": {
      "j": 0
     },
     "hot": [
      "d0"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line nine uses it up. E drops to zero.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [
      "d0"
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "t → 1",
      "e → 0",
      "a → 1"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "A. One left. Use it.",
     "line": 9,
     "ptr": {
      "j": 1
     },
     "hot": [],
     "ok": [
      "d1"
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "t → 1",
      "e → 0",
      "a → 0"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "T. Is there a T left in the map?",
     "line": 8,
     "ptr": {
      "j": 2
     },
     "hot": [
      "d2"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "\"t\" left = ?",
     "arrows": null
    },
    {
     "say": "Yes, one. Use it. Now every count is zero.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [
      "d2"
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": [
      "t → 0",
      "e → 0",
      "a → 0"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Line eleven returns true. Tea and eat use the same letters.",
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
     "say": "One walk over each word. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "2 walks → O(n) time",
     "arrows": null
    },
    {
     "say": "The map holds one entry per different letter. With lowercase letters only, at most twenty six. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "≤ 26 entries → O(1) space",
     "arrows": null
    }
   ]
  },
  {
   "id": "sr4",
   "num": 4,
   "title": "The Hidden Word",
   "fn": "isHidden",
   "ask": "Return <b>true</b> if the letters of <b>small</b> appear inside <b>big</b> in the same order. Other letters may sit in between.",
   "spec": "isHidden(\"ban\", \"beacon\") → true      isHidden(\"nab\", \"beacon\") → false",
   "start": "// small and big are strings of lowercase letters.\nfunction isHidden(small, big) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: you can find the small word by reading the big word left to right and skipping letters.",
    "Do it by hand: find \"ban\" in \"beacon\". Did you ever need to look back?",
    "At each letter of the big word, there is only one letter you care about. Which one?",
    "How do you know at the end whether you found the whole small word?"
   ],
   "hints": [
    "Keep a counter s for the letter of the small word you are waiting for. It starts at 0.",
    "Walk the big word once. When its letter equals small[s], move s forward.",
    "At the end, the small word is hidden if s reached small.length."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "ban",
      "beacon"
     ],
     "want": true
    },
    {
     "args": [
      "nab",
      "beacon"
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
      "abc",
      ""
     ],
     "want": false
    },
    {
     "args": [
      "abc",
      "abc"
     ],
     "want": true
    },
    {
     "args": [
      "ace",
      "abcde"
     ],
     "want": true
    },
    {
     "args": [
      "aec",
      "abcde"
     ],
     "want": false
    },
    {
     "args": [
      "aa",
      "a"
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
    "function isHidden(small, big) {",
    "  let s = 0;",
    "  for (let b = 0; b < big.length; b++) {",
    "    if (s < small.length && small[s] === big[b]) {",
    "      s++;",
    "    }",
    "  }",
    "  return s === small.length;",
    "}"
   ],
   "why": "Why is it enough to match each letter at the first place it appears? Could matching it later ever help?",
   "view": {
    "row": [
     "b",
     "e",
     "a",
     "c",
     "o",
     "n"
    ],
    "row2": [
     "b",
     "a",
     "n"
    ],
    "rowLabel": "big",
    "row2Label": "small",
    "ptrs": [
     {
      "id": "b",
      "row": 1
     },
     {
      "id": "s",
      "row": 2
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
     "say": "The small word is hidden if its letters appear in the big word in the same order, with anything in between.",
     "line": 0,
     "ptr": null,
     "hot": [
      0,
      2,
      5
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "same order, gaps allowed",
     "arrows": null
    },
    {
     "say": "So walk the big word once. Each time you meet the letter you are waiting for, tick it off.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "wait for the next letter",
     "arrows": null
    },
    {
     "say": "S marks the letter we are waiting for. It starts on B.",
     "line": 2,
     "ptr": {
      "s": 0
     },
     "hot": [
      "d0"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Moss reads B. That is the letter we want. Line five moves S to the next one.",
     "line": 5,
     "ptr": {
      "b": 0,
      "s": 1
     },
     "hot": [],
     "ok": [
      0,
      "d0"
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "E. We are waiting for A. Not it. Keep walking.",
     "line": 4,
     "ptr": {
      "b": 1
     },
     "hot": [],
     "ok": [],
     "bad": [
      1
     ],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "A. A match. S moves on to N.",
     "line": 5,
     "ptr": {
      "b": 2,
      "s": 2
     },
     "hot": [],
     "ok": [
      2,
      "d1"
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "C. Not N.",
     "line": 4,
     "ptr": {
      "b": 3
     },
     "hot": [],
     "ok": [],
     "bad": [
      3
     ],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "O. Not N.",
     "line": 4,
     "ptr": {
      "b": 4
     },
     "hot": [],
     "ok": [],
     "bad": [
      4
     ],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "N. Is this the letter we are waiting for?",
     "line": 4,
     "ptr": {
      "b": 5
     },
     "hot": [
      5,
      "d2"
     ],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "waiting for \"n\"",
     "arrows": null
    },
    {
     "say": "Yes. S moves past the end of the small word.",
     "line": 5,
     "ptr": {
      "s": 3
     },
     "hot": [],
     "ok": [
      5,
      "d2"
     ],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line eight asks: did S reach the end? Three equals three. True.",
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
     "say": "One walk through the big word. O of n time.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "1 walk → O(n) time",
     "arrows": null
    },
    {
     "say": "Two counters, and nothing else. O of one space.",
     "line": 0,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "set": null,
     "vars": null,
     "box": null,
     "card": "2 counters → O(1) space",
     "arrows": null
    }
   ]
  }
 ]
};
