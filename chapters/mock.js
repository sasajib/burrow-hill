window.CHAPTER = {
 "id": "mock",
 "title": "Mock Interviews",
 "sub": "MOCK INTERVIEWS · 10 PUZZLES",
 "key": "burrow-ch-mock",
 "next": {
  "href": "index.html#course",
  "label": "All chapters"
 },
 "prev": {
  "href": "chapter.html?c=combine",
  "label": "Chapter 27: Combining Tools"
 },
 "mock": true,
 "target": 20,
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "mk0",
   "label": "Read this first",
   "short": "Intro",
   "name": "How the mock interviews work",
   "intro": "Ten puzzles, no labels, a clock on each, and a report at the end."
  }
 ],
 "notes": {
  "w": "<h3>How to use an interview's 20 minutes</h3><ul><li><b>Minutes 0 to 5:</b> say the task back, and ask about the edges: empty input, one item, repeats, negatives.</li>\n      <li><b>Minutes 5 to 10:</b> work one small example by hand. Say your plan, and what it costs in time and space.</li>\n      <li><b>Minutes 10 to 20:</b> write the code. Then run a tiny input through it line by line, out loud.</li>\n      <li><b>Stuck?</b> Say what you have tried and take a hint. In a real interview, asking well is part of the score.</li></ul>\n      <p>The report at the end shows, by topic, where you are strong and what to practise next.</p>"
 },
 "quiz": {
  "mk1s-q": {
   "ask": "The map holds a → nut. The pattern says a, and the word is pea. What does line 6 do?",
   "opts": [
    "Returns false: a already means nut",
    "Stores a → pea over the old entry",
    "Skips this word"
   ],
   "right": 0,
   "why": "toWord.get(\"a\") is \"nut\", which is not \"pea\". The same letter would stand for two words, so the answer is false."
  },
  "mk2s-q": {
   "ask": "After swapping a 2 to the back, mid stays on the same door. Why?",
   "opts": [
    "The number that came from the back has not been read yet",
    "Because mid can only move after low",
    "It is a mistake: mid should move"
   ],
   "right": 0,
   "why": "The swap brought an unread number to door mid. It could be a 0, a 1 or a 2, so mid must look at it before moving on."
  },
  "mk3s-q": {
   "ask": "The stack holds a, b. The next part is \"..\". What does line 5 do?",
   "opts": [
    "Pops b: the stack is now just a",
    "Pushes \"..\" onto the stack",
    "Empties the whole stack"
   ],
   "right": 0,
   "why": "\"..\" means go up one folder, so it removes the most recent folder that was kept. That is b, on top of the stack."
  },
  "mk4s-q": {
   "ask": "mid is door 2 (even). nums[2] is 2 and nums[3] is 3, so they are not a pair. Where is the lone value?",
   "opts": [
    "At door 2 or to its left: high = mid",
    "To the right of door 3: low = mid + 2",
    "It cannot be decided"
   ],
   "right": 0,
   "why": "The pairs are already broken at this even door. So the lone value is here or earlier, and line 7 sets high to mid."
  },
  "mk5s-q": {
   "ask": "riding is 2. Stop 3 adds 3. The cart has 4 seats. What does line 12 do?",
   "opts": [
    "Returns false: 5 riders is more than 4 seats",
    "Carries on: the riders of trip 1 leave soon",
    "Returns true"
   ],
   "right": 0,
   "why": "riding becomes 5, which is above 4. The riders of trip 1 only leave at stop 5, so at stop 3 the cart is over-full."
  },
  "mk6s-q": {
   "ask": "left is door 1 and right is door 5. Both hold \"a\". What does the loop on line 4 do?",
   "opts": [
    "They match: it grows once more",
    "It stops: the mirror is \"nan\"",
    "It starts again from door 0"
   ],
   "right": 0,
   "why": "s[1] and s[5] are both \"a\", so the mirror grows to \"anana\". The next step compares \"b\" with a position past the end, which stops the loop."
  },
  "mk7s-q": {
   "ask": "The walk is on the 3, heading right. The next square is outside the grid. What does line 10 do?",
   "opts": [
    "Turns clockwise: the heading becomes down",
    "Stops the walk",
    "Jumps back to the first column"
   ],
   "right": 0,
   "why": "grid[nr]?.[nc] is undefined outside the grid, and undefined == null is true. So d moves on to the next direction: down."
  },
  "mk8s-q": {
   "ask": "There are 3 animals. The elder is trusted by every OTHER animal and trusts nobody. Which score is that?",
   "opts": [
    "2: two arrows in, none out",
    "3: one from each animal",
    "0"
   ],
   "right": 0,
   "why": "Every other animal is n − 1 = 2 arrows in. No arrows out means nothing is taken away. So the score is exactly 2."
  },
  "mk9s-q": {
   "ask": "i is 2 and end is 2. What does line 8 know at this moment?",
   "opts": [
    "No letter of this part appears later: cut here",
    "The text is finished",
    "The letter a appears once more"
   ],
   "right": 0,
   "why": "end is the furthest last position of every letter seen in this part. Reaching it means none of them comes back, so the part can be closed."
  },
  "mk10s-q": {
   "ask": "The totals so far are red 17, green 2, blue 17. Door 2 costs 5 in blue. What is the new blue total?",
   "opts": [
    "7: 5 plus the cheaper of red and green, which is 2",
    "22: 5 plus the old blue",
    "5"
   ],
   "right": 0,
   "why": "A blue door may follow red or green, never blue. The cheaper of those is green with 2, so the new total is 5 + 2 = 7."
  }
 },
 "problems": [
  {
   "id": "mk1",
   "num": 1,
   "title": "The Same Pattern",
   "fn": "samePattern",
   "ask": "The first letter of <code>pattern</code> goes with the first word, the second letter with the second word, and so on. Return <b>true</b> if the same letter always goes with the <b>same word</b>, and two different letters never go with the same word. If the number of letters and the number of words differ, return <b>false</b>.",
   "spec": "samePattern(\"abba\", [\"nut\", \"fig\", \"fig\", \"nut\"]) → true      samePattern(\"abba\", [\"nut\", \"fig\", \"fig\", \"pea\"]) → false      (a would be both \"nut\" and \"pea\")",
   "start": "function samePattern(pattern, words) {\n  // your code here\n}\n",
   "plan": [
    "Say the task back in your own words.",
    "Work one small example by hand.",
    "Say your approach and its cost before you type."
   ],
   "hints": [
    "Walk the pattern and the words together. What must you remember about each letter you have met?",
    "Keep a Map from letter to word. If a letter comes back with a different word, return false.",
    "That is not enough for \"ab\" with [\"nut\", \"nut\"]. Keep a second Map from word to letter, and check both."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "abba",
      [
       "nut",
       "fig",
       "fig",
       "nut"
      ]
     ],
     "want": true
    },
    {
     "args": [
      "abba",
      [
       "nut",
       "fig",
       "fig",
       "pea"
      ]
     ],
     "want": false
    },
    {
     "args": [
      "aa",
      [
       "nut",
       "fig"
      ]
     ],
     "want": false
    },
    {
     "args": [
      "ab",
      [
       "nut",
       "nut"
      ]
     ],
     "want": false
    },
    {
     "args": [
      "",
      []
     ],
     "want": true
    },
    {
     "args": [
      "abc",
      [
       "a",
       "b"
      ]
     ],
     "want": false
    },
    {
     "args": [
      "abc",
      [
       "x",
       "y",
       "z"
      ]
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
    "function samePattern(pattern, words) {",
    "  if (pattern.length !== words.length) return false;",
    "  const toWord = new Map(), toLetter = new Map();",
    "  for (let i = 0; i < words.length; i++) {",
    "    const ch = pattern[i], w = words[i];",
    "    if ((toWord.get(ch) ?? w) !== w) return false;",
    "    if ((toLetter.get(w) ?? ch) !== ch) return false;",
    "    toWord.set(ch, w);",
    "    toLetter.set(w, ch);",
    "  }",
    "  return true;",
    "}"
   ],
   "why": "Which test fails if you delete the second map, and why?",
   "topic": {
    "name": "Hash Maps",
    "href": "chapter.html?c=hashmap"
   },
   "world": "A sign-up form checks this. One username, one email. And one email, one username. Both directions.",
   "view": {
    "row": [
     "nut",
     "fig",
     "fig",
     "pea"
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": [
     "a",
     "b",
     "b",
     "a"
    ],
    "rowLabel": "word",
    "row2Label": "ptn",
    "ptrs": [
     {
      "id": "i",
      "row": 1
     }
    ],
    "vars": [],
    "box": {
     "title": "letter → word",
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
     "say": "Remember what each letter stood for. If it comes back with another word, the pattern is broken.",
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
     "card": "map: letter → its word",
     "arrows": null
    },
    {
     "say": "And remember the other direction too. One word must not serve two letters.",
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
     "card": "second map: word → its letter",
     "arrows": null
    },
    {
     "say": "Line three makes both maps. Now try a list that ends in pea.",
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
     "box": [],
     "card": "words: nut fig fig pea",
     "arrows": null
    },
    {
     "say": "A, with nut. Nothing is stored yet. So lines eight and nine store the pair.",
     "line": 8,
     "ptr": {
      "i": 0
     },
     "hot": [
      0,
      "d0"
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
      "a → nut"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "B, with fig. New again. Store it.",
     "line": 8,
     "ptr": {
      "i": 1
     },
     "hot": [
      1,
      "d1"
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
      "a → nut",
      "b → fig"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "B, with fig. B already means fig. It agrees.",
     "line": 6,
     "ptr": {
      "i": 2
     },
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
     "box": [
      "a → nut",
      "b → fig"
     ],
     "card": "b → fig ✓",
     "arrows": null
    },
    {
     "say": "A, with pea. What does the map say about a?",
     "line": 6,
     "ptr": {
      "i": 3
     },
     "hot": [
      3,
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
     "box": [
      "a → nut",
      "b → fig"
     ],
     "card": "a with pea → ?",
     "arrows": null
    },
    {
     "say": "A already means nut. Pea does not agree. Line six returns false.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      3,
      "d3"
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "a → nut",
      "b → fig"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "The second map catches the opposite mistake. Two letters, sharing one word.",
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
     "card": "\"ab\" with nut, nut → false",
     "arrows": null
    },
    {
     "say": "One pass, with two lookups per word. O of n.",
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
     "say": "The maps hold at most every word.",
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
     "card": "two maps → O(n) space",
     "arrows": null
    },
    {
     "say": "A sign-up form checks this. One username, one email. And one email, one username. Both directions.",
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
     "card": "one username ↔ one email",
     "arrows": null
    }
   ]
  },
  {
   "id": "mk2",
   "num": 2,
   "title": "Three Kinds, One Pass",
   "fn": "sortThree",
   "ask": "The array holds only <b>0</b>, <b>1</b> and <b>2</b>. Put it in order <b>in place</b>, in <b>one pass</b>, without calling sort().",
   "spec": "sortThree([2, 0, 1, 0])  →  the array becomes [0, 0, 1, 2]",
   "start": "// Change nums itself. Nothing needs to be returned.\nfunction sortThree(nums) {\n  // your code here\n}\n",
   "plan": [
    "Say the task back in your own words.",
    "Work one small example by hand.",
    "Say your approach and its cost before you type."
   ],
   "hints": [
    "There are three kinds, so think about three zones: zeros at the front, twos at the back, ones in between.",
    "Keep three markers: low (where the next 0 goes), mid (the door you are reading), high (where the next 2 goes).",
    "A 0: swap with low, move low and mid. A 2: swap with high, move high only. A 1: move mid. Stop when mid passes high."
   ],
   "mode": "inplace",
   "tests": [
    {
     "args": [
      [
       2,
       0,
       1,
       0
      ]
     ],
     "want": [
      0,
      0,
      1,
      2
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
       1
      ]
     ],
     "want": [
      1
     ]
    },
    {
     "args": [
      [
       2,
       1,
       0
      ]
     ],
     "want": [
      0,
      1,
      2
     ]
    },
    {
     "args": [
      [
       0,
       0
      ]
     ],
     "want": [
      0,
      0
     ]
    },
    {
     "args": [
      [
       1,
       2,
       0,
       1,
       2,
       0
      ]
     ],
     "want": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "args": [
      [
       2,
       2,
       1
      ]
     ],
     "want": [
      1,
      2,
      2
     ]
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*sort\\s*\\(",
     "msg": "No sort() here: one pass, with markers."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function sortThree(nums) {",
    "  let low = 0, mid = 0, high = nums.length - 1;",
    "  while (mid <= high) {",
    "    if (nums[mid] === 0) {",
    "      [nums[low], nums[mid]] = [nums[mid], nums[low]];",
    "      low++;",
    "      mid++;",
    "    } else if (nums[mid] === 2) {",
    "      [nums[mid], nums[high]] = [nums[high], nums[mid]];",
    "      high--;",
    "    } else {",
    "      mid++;",
    "    }",
    "  }",
    "}"
   ],
   "why": "After swapping a 2 to the back, mid does not move. After swapping a 0 to the front, it does. Why the difference?",
   "topic": {
    "name": "Two Pointers",
    "href": "chapter.html?c=twoptr"
   },
   "world": "Quick sort uses this exact split. Smaller than the pivot, equal, and larger. Three zones, one pass.",
   "view": {
    "row": [
     2,
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
      "id": "low",
      "row": 1
     },
     {
      "id": "mid",
      "row": 1
     },
     {
      "id": "high",
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
     "say": "Zeros belong at the front. Twos at the back. Ones are whatever is left in the middle.",
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
     "card": "0 → front · 2 → back · 1 → stays",
     "arrows": null
    },
    {
     "say": "So keep three markers. Low, for the next zero. High, for the next two. And mid reads.",
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
     "card": "low · mid reads · high",
     "arrows": null
    },
    {
     "say": "Line two. Low and mid start at the front. High at the back.",
     "line": 2,
     "ptr": {
      "low": 0,
      "mid": 0,
      "high": 3
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
     "card": "",
     "arrows": null
    },
    {
     "say": "Mid reads a two. It belongs at the back. Line nine swaps it with high. And high moves in.",
     "line": 9,
     "ptr": {
      "high": 2
     },
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": [
      0,
      3
     ],
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "2 → swap with high",
     "arrows": null
    },
    {
     "say": "Mid did not move. Why not?",
     "line": 4,
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
     "card": "mid stays: why?",
     "arrows": null
    },
    {
     "say": "Because the number that arrived has not been read yet. It is a zero. Swap with low, and both move.",
     "line": 5,
     "ptr": {
      "low": 1,
      "mid": 1
     },
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
     "card": "0 → swap with low · both move",
     "arrows": null
    },
    {
     "say": "Another zero. Swap with low, and both move again.",
     "line": 5,
     "ptr": {
      "low": 2,
      "mid": 2
     },
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
     "show": [],
     "vars": null,
     "box": null,
     "card": "0 → both move",
     "arrows": null
    },
    {
     "say": "A one. It is already in the middle zone. Only mid moves.",
     "line": 12,
     "ptr": {
      "mid": 3
     },
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
     "card": "1 → mid moves on",
     "arrows": null
    },
    {
     "say": "Mid has passed high. Everything is read. The loop ends.",
     "line": 3,
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
     "say": "Every door is read once. O of n.",
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
     "say": "Three markers. No second array.",
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
     "card": "three markers → O(1) space",
     "arrows": null
    },
    {
     "say": "Quick sort uses this exact split. Smaller than the pivot, equal, and larger. Three zones, one pass.",
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
     "card": "the 3-way split in quick sort",
     "arrows": null
    }
   ]
  },
  {
   "id": "mk3",
   "num": 3,
   "title": "The Short Way Home",
   "fn": "shortPath",
   "ask": "Clean up a folder path. <code>.</code> means \"stay here\", <code>..</code> means \"go up one folder\" (at the top it does nothing), and repeated slashes count as one. Return the shortest path that means the same, starting with <code>/</code> and with no slash at the end.",
   "spec": "shortPath(\"/a/./b/../c/\") → \"/a/c\"      shortPath(\"/../\") → \"/\"",
   "start": "function shortPath(path) {\n  // your code here\n}\n",
   "plan": [
    "Say the task back in your own words.",
    "Work one small example by hand.",
    "Say your approach and its cost before you type."
   ],
   "hints": [
    "Split the path at \"/\" and look at the parts one by one. Which parts can you simply skip?",
    "\"..\" cancels the most recent folder you kept. Which tool gives you \"the most recent one\"?",
    "Push folder names on a stack, pop for \"..\", skip \"\" and \".\". At the end, join the stack with \"/\" and put \"/\" in front."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "/a/./b/../c/"
     ],
     "want": "/a/c"
    },
    {
     "args": [
      "/"
     ],
     "want": "/"
    },
    {
     "args": [
      "/../"
     ],
     "want": "/"
    },
    {
     "args": [
      "/home//pip/"
     ],
     "want": "/home/pip"
    },
    {
     "args": [
      "/a/b/c"
     ],
     "want": "/a/b/c"
    },
    {
     "args": [
      "/a/../../b"
     ],
     "want": "/b"
    },
    {
     "args": [
      "/..."
     ],
     "want": "/..."
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function shortPath(path) {",
    "  const stack = [];",
    "  for (const part of path.split('/')) {",
    "    if (part === '' || part === '.') continue;",
    "    if (part === '..') stack.pop();",
    "    else stack.push(part);",
    "  }",
    "  return '/' + stack.join('/');",
    "}"
   ],
   "why": "What does stack.pop() do when the stack is empty, and why is that exactly right for \"/../\"?",
   "topic": {
    "name": "Stacks",
    "href": "chapter.html?c=stack"
   },
   "world": "Your browser does this with every link that contains two dots. Before it asks the server for anything.",
   "view": {
    "row": [
     "a",
     ".",
     "b",
     "..",
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
     "say": "Two dots cancel the most recent folder you kept. The most recent one. That is a stack.",
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
     "card": "..  cancels the most recent folder",
     "arrows": null
    },
    {
     "say": "So push every folder name. Pop for two dots. And skip a single dot.",
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
     "card": "name: push · ..: pop · .: skip",
     "arrows": null
    },
    {
     "say": "Line three splits the path at the slashes. The first part is a. A name. Push it.",
     "line": 6,
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
     "box": [
      "a"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "A single dot. Stay here. Line four skips it.",
     "line": 4,
     "ptr": {
      "i": 1
     },
     "hot": [],
     "ok": [],
     "bad": [
      1
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "a"
     ],
     "card": ".  → skip",
     "arrows": null
    },
    {
     "say": "B. A name. Push.",
     "line": 6,
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
     "box": [
      "a  b"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Two dots. What happens to the stack?",
     "line": 5,
     "ptr": {
      "i": 3
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
     "box": [
      "a  b"
     ],
     "card": "..  → ?",
     "arrows": null
    },
    {
     "say": "It pops the b. We are back in a.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      1,
      2,
      3
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": [
      "a"
     ],
     "card": "pop b → back in a",
     "arrows": null
    },
    {
     "say": "C. Push. Then line eight joins the stack with slashes.",
     "line": 8,
     "ptr": {
      "i": 4
     },
     "hot": [],
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
     "box": [
      "a  c"
     ],
     "card": "",
     "arrows": null
    },
    {
     "say": "Each part is pushed and popped at most once. O of n.",
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
     "say": "The stack holds at most every folder.",
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
     "card": "stack → O(n) space",
     "arrows": null
    },
    {
     "say": "Your browser does this with every link that contains two dots. Before it asks the server for anything.",
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
     "card": "a browser tidying a link",
     "arrows": null
    }
   ]
  },
  {
   "id": "mk4",
   "num": 4,
   "title": "The One Without a Twin",
   "fn": "loneValue",
   "ask": "The array is <b>sorted</b>. Every value appears <b>exactly twice</b>, except one that appears once. Return that value. The array may hold millions of numbers, so do not look at every one: aim for <b>O(log n)</b>, where n is the length of the array.",
   "spec": "loneValue([1, 1, 2, 3, 3]) → 2",
   "start": "function loneValue(nums) {\n  // your code here\n}\n",
   "plan": [
    "Say the task back in your own words.",
    "Work one small example by hand.",
    "Say your approach and its cost before you type."
   ],
   "hints": [
    "Sorted, and \"log n\": which search is that? You need a question about the middle that rules out half the row.",
    "Before the lone value, every pair starts on an even index. After it, every pair starts on an odd index.",
    "Make mid even. If nums[mid] equals nums[mid + 1], the pairs are still intact: go right with low = mid + 2. Otherwise high = mid."
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
     "want": 2
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
       2,
       2
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       1,
       1,
       2
      ]
     ],
     "want": 2
    },
    {
     "args": [
      [
       1,
       1,
       2,
       2,
       3,
       3,
       4
      ]
     ],
     "want": 4
    },
    {
     "args": [
      [
       0,
       1,
       1,
       2,
       2
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       3,
       3,
       7,
       7,
       10,
       11,
       11
      ]
     ],
     "want": 10
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function loneValue(nums) {",
    "  let low = 0, high = nums.length - 1;",
    "  while (low < high) {",
    "    let mid = Math.floor((low + high) / 2);",
    "    if (mid % 2 === 1) mid--;",
    "    if (nums[mid] === nums[mid + 1]) low = mid + 2;",
    "    else high = mid;",
    "  }",
    "  return nums[low];",
    "}"
   ],
   "why": "Why is mid forced onto an even index before the comparison?",
   "topic": {
    "name": "Binary Search",
    "href": "chapter.html?c=bsearch"
   },
   "world": "Finding the first place where a pattern breaks, by halving, is how tools find the change that broke a build.",
   "view": {
    "row": [
     1,
     1,
     2,
     3,
     3,
     4,
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
      "id": "low",
      "row": 1
     },
     {
      "id": "high",
      "row": 1
     },
     {
      "id": "mid",
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
     "say": "Before the lone value, every pair starts on an even door. After it, every pair starts on an odd door.",
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
     "card": "before: pairs start on even doors",
     "arrows": null
    },
    {
     "say": "So look at an even door in the middle. Is its twin right next to it? That rules out one half.",
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
     "card": "an even door and its neighbour",
     "arrows": null
    },
    {
     "say": "Line two. Low is door zero. High is door six.",
     "line": 2,
     "ptr": {
      "low": 0,
      "high": 6
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
     "card": "",
     "arrows": null
    },
    {
     "say": "The middle is door three. Odd. So line five steps back to door two.",
     "line": 5,
     "ptr": {
      "mid": 2
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
     "card": "mid 3 is odd → use door 2",
     "arrows": null
    },
    {
     "say": "Door two holds a two. Door three holds a three. Not a pair. So where is the lone value?",
     "line": 6,
     "ptr": null,
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
     "box": null,
     "card": "2 and 3: not a pair → ?",
     "arrows": null
    },
    {
     "say": "The pairs are already broken here. So it is at door two, or to the left. High moves to door two.",
     "line": 7,
     "ptr": {
      "high": 2
     },
     "hot": [],
     "ok": [],
     "bad": [
      3,
      4,
      5,
      6
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "broken here → high = mid",
     "arrows": null
    },
    {
     "say": "The middle is door one. Odd. Step back to door zero. Doors zero and one are a pair. Still intact. So go right. Low jumps to door two.",
     "line": 6,
     "ptr": {
      "mid": 0,
      "low": 2
     },
     "hot": [],
     "ok": [],
     "bad": [
      0,
      1,
      3,
      4,
      5,
      6
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "1 and 1: a pair → low = mid + 2",
     "arrows": null
    },
    {
     "say": "Low and high meet on door two. Line nine returns its value.",
     "line": 9,
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
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The part that is left halves on every turn. O of log n.",
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
     "card": "halve each turn → O(log n)",
     "arrows": null
    },
    {
     "say": "Three markers.",
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
     "say": "Finding the first place where a pattern breaks, by halving, is how tools find the change that broke a build.",
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
     "card": "which change broke the build?",
     "arrows": null
    }
   ]
  },
  {
   "id": "mk5",
   "num": 5,
   "title": "Seats on the Cart",
   "fn": "cartFits",
   "ask": "A cart with <code>seats</code> seats drives along stops 0, 1, 2, … in one direction. Each trip is <code>[riders, from, to]</code>: that many riders get on at stop <code>from</code> and off at stop <code>to</code>. Riders getting off leave <b>before</b> others get on. Return <b>true</b> if the cart is never over-full.",
   "spec": "cartFits([[2, 1, 5], [3, 3, 7]], 4) → false      cartFits([[2, 1, 5], [3, 5, 7]], 3) → true",
   "start": "// trips is a list of [riders, from, to].\nfunction cartFits(trips, seats) {\n  // your code here\n}\n",
   "plan": [
    "Say the task back in your own words.",
    "Work one small example by hand.",
    "Say your approach and its cost before you type."
   ],
   "hints": [
    "You do not need to know who is on the cart. Only how many, at each stop.",
    "At a stop, the number of riders only changes: + riders where a trip starts, - riders where it ends. Record those changes per stop.",
    "Then walk the stops in order with a running total. If it ever goes above seats, return false."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        2,
        1,
        5
       ],
       [
        3,
        3,
        7
       ]
      ],
      4
     ],
     "want": false
    },
    {
     "args": [
      [
       [
        2,
        1,
        5
       ],
       [
        3,
        3,
        7
       ]
      ],
      5
     ],
     "want": true
    },
    {
     "args": [
      [
       [
        2,
        1,
        5
       ],
       [
        3,
        5,
        7
       ]
      ],
      3
     ],
     "want": true
    },
    {
     "args": [
      [],
      0
     ],
     "want": true
    },
    {
     "args": [
      [
       [
        3,
        2,
        7
       ],
       [
        3,
        7,
        9
       ],
       [
        8,
        3,
        9
       ]
      ],
      11
     ],
     "want": true
    },
    {
     "args": [
      [
       [
        5,
        0,
        1
       ]
      ],
      4
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
    "function cartFits(trips, seats) {",
    "  let last = 0;",
    "  for (const [, , to] of trips) last = Math.max(last, to);",
    "  const change = new Array(last + 1).fill(0);",
    "  for (const [riders, from, to] of trips) {",
    "    change[from] += riders;",
    "    change[to] -= riders;",
    "  }",
    "  let riding = 0;",
    "  for (const c of change) {",
    "    riding += c;",
    "    if (riding > seats) return false;",
    "  }",
    "  return true;",
    "}"
   ],
   "why": "Riders get off before others get on. Which part of the code makes that true without any extra work?",
   "topic": {
    "name": "Prefix Sums",
    "href": "chapter.html?c=prefix"
   },
   "world": "A hotel counts rooms this way. Plus one on the arrival day. Minus one on the leaving day. Then one pass over the calendar.",
   "view": {
    "row": [
     0,
     0,
     0,
     0,
     0,
     0,
     0,
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
     "riding"
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
     "say": "At each stop, the number of riders only changes. Plus where a trip starts. Minus where it ends.",
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
     "card": "+ at the start · − at the end",
     "arrows": null
    },
    {
     "say": "Write the changes down, per stop. Then one walk with a running total tells you how full the cart is.",
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
     "card": "changes per stop → running total",
     "arrows": null
    },
    {
     "say": "Line four makes one slot per stop. All zero.",
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
     "card": "one slot per stop",
     "arrows": null
    },
    {
     "say": "The first trip. Two riders, from one to five. Plus two at stop one. Minus two at stop five.",
     "line": 7,
     "ptr": null,
     "hot": [
      1,
      5
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "1": "+2",
      "5": "-2"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "trip 1: +2 at 1 · −2 at 5",
     "arrows": null
    },
    {
     "say": "The second trip. Three riders, from three to seven. Plus three, and minus three.",
     "line": 7,
     "ptr": null,
     "hot": [
      3,
      7
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "3": "+3",
      "7": "-3"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "trip 2: +3 at 3 · −3 at 7",
     "arrows": null
    },
    {
     "say": "Now walk the stops. At stop one, two riders get on. Riding is two.",
     "line": 11,
     "ptr": {
      "i": 1
     },
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
     "show": [],
     "vars": {
      "riding": 2
     },
     "box": null,
     "card": "stop 1: riding = 2",
     "arrows": null
    },
    {
     "say": "Stop two changes nothing. At stop three, three more get on. The cart has four seats. What happens?",
     "line": 11,
     "ptr": {
      "i": 3
     },
     "hot": [
      3
     ],
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
     "card": "stop 3: 2 + 3 → ?",
     "arrows": null
    },
    {
     "say": "Riding is five. More than four seats. Line twelve returns false.",
     "line": 12,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      3
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "riding": 5
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One pass over the trips, and one over the stops.",
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
     "card": "O(trips + stops)",
     "arrows": null
    },
    {
     "say": "One slot per stop.",
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
     "card": "O(stops) space",
     "arrows": null
    },
    {
     "say": "A hotel counts rooms this way. Plus one on the arrival day. Minus one on the leaving day. Then one pass over the calendar.",
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
     "card": "hotel rooms across a calendar",
     "arrows": null
    }
   ]
  },
  {
   "id": "mk6",
   "num": 6,
   "title": "The Longest Mirror",
   "fn": "longestMirror",
   "ask": "Return the <b>longest stretch</b> of the text that reads the same forwards and backwards. If two are equally long, return the one that starts first.",
   "spec": "longestMirror(\"banana\") → \"anana\"      longestMirror(\"abc\") → \"a\"",
   "start": "function longestMirror(s) {\n  // your code here\n}\n",
   "plan": [
    "Say the task back in your own words.",
    "Work one small example by hand.",
    "Say your approach and its cost before you type."
   ],
   "hints": [
    "Checking every stretch is slow. Where does every mirror have something special?",
    "Every mirror has a middle. From a middle, grow outwards while the letters on both sides are equal.",
    "A middle can be one letter (\"aba\") or the gap between two letters (\"abba\"). Try both for every position and keep the longest."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "banana"
     ],
     "want": "anana"
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
      "abba"
     ],
     "want": "abba"
    },
    {
     "args": [
      "abc"
     ],
     "want": "a"
    },
    {
     "args": [
      "xracecary"
     ],
     "want": "racecar"
    },
    {
     "args": [
      "aab"
     ],
     "want": "aa"
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function longestMirror(s) {",
    "  let best = '';",
    "  const grow = (left, right) => {",
    "    while (left >= 0 && s[left] === s[right]) {",
    "      left--;",
    "      right++;",
    "    }",
    "    return s.slice(left + 1, right);",
    "  };",
    "  for (let i = 0; i < s.length; i++) {",
    "    const odd = grow(i, i);",
    "    const even = grow(i, i + 1);",
    "    if (odd.length > best.length) best = odd;",
    "    if (even.length > best.length) best = even;",
    "  }",
    "  return best;",
    "}"
   ],
   "why": "Line 4 never checks that right is still inside the text. Why does the loop stop anyway?",
   "topic": {
    "name": "Strings",
    "href": "chapter.html?c=strings"
   },
   "world": "Growing outwards from one spot is how a text editor selects the whole word, when you double click inside it.",
   "view": {
    "row": [
     "b",
     "a",
     "n",
     "a",
     "n",
     "a"
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
     "say": "Every mirror has a middle. And around it, the letters match in pairs.",
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
     "card": "a mirror: a middle, and matching pairs",
     "arrows": null
    },
    {
     "say": "So try every middle. Grow outwards, while the two letters are equal.",
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
     "card": "grow outwards while both sides match",
     "arrows": null
    },
    {
     "say": "Take the n at door two as the middle. Left and right both start on it.",
     "line": 11,
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
     "vars": {
      "best": "\"a\""
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One step outwards. A, and a. They match. One more step. B, and n. They do not. So this mirror is, a n a.",
     "line": 8,
     "ptr": {
      "left": 1,
      "right": 3
     },
     "hot": [],
     "ok": [
      1,
      2,
      3
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "best": "\"ana\""
     },
     "box": null,
     "card": "middle n → \"ana\"",
     "arrows": null
    },
    {
     "say": "Now the a at door three. One step outwards. N, and n. They match.",
     "line": 5,
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
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "n = n → keep growing",
     "arrows": null
    },
    {
     "say": "One more step. Door one, and door five. What happens?",
     "line": 4,
     "ptr": {
      "left": 1,
      "right": 5
     },
     "hot": [
      1,
      5
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
     "card": "door 1 and door 5 → ?",
     "arrows": null
    },
    {
     "say": "A, and a. They match. The next step would compare b with nothing. So it stops. A n a n a.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      2,
      3,
      4,
      5
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "best": "\"anana\""
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Line twelve does the same for a middle between two letters. That finds mirrors like, a b b a.",
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
     "card": "even middle: \"abba\"",
     "arrows": null
    },
    {
     "say": "There are about two n middles. Each can grow up to n steps. O of n squared.",
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
     "card": "2n middles × n → O(n²)",
     "arrows": null
    },
    {
     "say": "Only the best stretch is kept.",
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
     "card": "O(1) extra space",
     "arrows": null
    },
    {
     "say": "Growing outwards from one spot is how a text editor selects the whole word, when you double click inside it.",
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
     "card": "double click selects the word",
     "arrows": null
    }
   ]
  },
  {
   "id": "mk7",
   "num": 7,
   "title": "Round and Round",
   "fn": "spiral",
   "ask": "Return the values of the grid in <b>spiral order</b>: start at the top left, go right, and keep turning clockwise towards the middle. You may change the grid.",
   "spec": "spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) → [1, 2, 3, 6, 9, 8, 7, 4, 5]",
   "start": "// grid is an array of rows of numbers.\nfunction spiral(grid) {\n  // your code here\n}\n",
   "plan": [
    "Say the task back in your own words.",
    "Work one small example by hand.",
    "Say your approach and its cost before you type."
   ],
   "hints": [
    "You always walk straight until you cannot. What are the two reasons you cannot go on?",
    "Keep a direction (right, down, left, up). Mark every square you take, for example by setting it to null.",
    "Before each step, look at the next square. If it is outside the grid or already taken, turn clockwise first. Take exactly rows × columns squares."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        1,
        2,
        3
       ],
       [
        4,
        5,
        6
       ],
       [
        7,
        8,
        9
       ]
      ]
     ],
     "want": [
      1,
      2,
      3,
      6,
      9,
      8,
      7,
      4,
      5
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
      1,
      2,
      4,
      3
     ]
    },
    {
     "args": [
      [
       [
        7
       ]
      ]
     ],
     "want": [
      7
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
        1,
        2,
        3
       ]
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
       [
        1
       ],
       [
        2
       ],
       [
        3
       ]
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
       [
        1,
        2,
        3,
        4
       ],
       [
        5,
        6,
        7,
        8
       ]
      ]
     ],
     "want": [
      1,
      2,
      3,
      4,
      8,
      7,
      6,
      5
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function spiral(grid) {",
    "  const R = grid.length, C = R ? grid[0].length : 0;",
    "  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];",
    "  const out = [];",
    "  let r = 0, c = 0, d = 0;",
    "  for (let k = 0; k < R * C; k++) {",
    "    out.push(grid[r][c]);",
    "    grid[r][c] = null;",
    "    const nr = r + dirs[d][0], nc = c + dirs[d][1];",
    "    if (grid[nr]?.[nc] == null) d = (d + 1) % 4;",
    "    r += dirs[d][0];",
    "    c += dirs[d][1];",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "Line 10 uses == null, which is true for both null and undefined. Which of the two cases does each one cover?",
   "topic": {
    "name": "Arrays",
    "href": "chapter.html?c=arrays"
   },
   "world": "A robot vacuum covers a room like this. Straight on, until a wall, or a spot it has already cleaned. Then it turns.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      1,
      2,
      3
     ],
     [
      4,
      5,
      6
     ],
     [
      7,
      8,
      9
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
     "heading"
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
     "say": "You walk straight on. Until the next square is outside the grid. Or already taken.",
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
     "card": "blocked: outside, or already taken",
     "arrows": null
    },
    {
     "say": "Then you turn clockwise. Right, down, left, up. And again.",
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
     "card": "blocked → turn clockwise",
     "arrows": null
    },
    {
     "say": "Line five. Start at the top left, heading right.",
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
     "gone": [],
     "show": [],
     "vars": {
      "heading": "right"
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Take the one. The two. The three. Line eight marks each square as taken.",
     "line": 8,
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
     "card": "take 1 · 2 · 3",
     "arrows": null
    },
    {
     "say": "From the three, the next square to the right is outside the grid. What does line ten do?",
     "line": 10,
     "ptr": null,
     "hot": [
      2
     ],
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
     "show": [],
     "vars": null,
     "box": null,
     "card": "next square: outside → ?",
     "arrows": null
    },
    {
     "say": "It turns. Down. Six, and nine.",
     "line": 12,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      2,
      5,
      8
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "heading": "down"
     },
     "box": null,
     "card": "turn → down: 6 · 9",
     "arrows": null
    },
    {
     "say": "Outside again. Turn. Left. Eight, and seven.",
     "line": 12,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      2,
      5,
      8,
      7,
      6
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "heading": "left"
     },
     "box": null,
     "card": "turn → left: 8 · 7",
     "arrows": null
    },
    {
     "say": "Turn. Up. The four. Now the next square is the one. Not outside. But already taken. So turn again.",
     "line": 10,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      2,
      5,
      8,
      7,
      6,
      3
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "heading": "up"
     },
     "box": null,
     "card": "already taken → turn",
     "arrows": null
    },
    {
     "say": "Right. The five. Nine squares are taken. The loop ends.",
     "line": 14,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "heading": "right"
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Every square is taken exactly once. O of R times C.",
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
     "card": "each square once → O(R × C)",
     "arrows": null
    },
    {
     "say": "Apart from the answer, only a position and a heading.",
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
     "card": "O(1) extra space",
     "arrows": null
    },
    {
     "say": "A robot vacuum covers a room like this. Straight on, until a wall, or a spot it has already cleaned. Then it turns.",
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
     "card": "a robot vacuum covering a room",
     "arrows": null
    }
   ]
  },
  {
   "id": "mk8",
   "num": 8,
   "title": "The Elder of the Hill",
   "fn": "theElder",
   "ask": "The hill has <code>n</code> animals, numbered 1 to n. <code>[a, b]</code> means \"a trusts b\". The <b>elder</b> is trusted by <b>every other animal</b> and trusts <b>nobody</b>. Return the number of the elder, or <b>-1</b> if there is none.",
   "spec": "theElder(3, [[1, 3], [2, 3]]) → 3      theElder(3, [[1, 3], [2, 3], [3, 1]]) → -1",
   "start": "function theElder(n, trusts) {\n  // your code here\n}\n",
   "plan": [
    "Say the task back in your own words.",
    "Work one small example by hand.",
    "Say your approach and its cost before you type."
   ],
   "hints": [
    "Draw it: animals are dots, \"a trusts b\" is an arrow from a to b. What does the elder look like in the drawing?",
    "The elder has n - 1 arrows pointing in, and no arrow pointing out.",
    "One number per animal is enough: add 1 for every arrow in, take 1 away for every arrow out. Only the elder can reach n - 1."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      3,
      [
       [
        1,
        3
       ],
       [
        2,
        3
       ]
      ]
     ],
     "want": 3
    },
    {
     "args": [
      3,
      [
       [
        1,
        3
       ],
       [
        2,
        3
       ],
       [
        3,
        1
       ]
      ]
     ],
     "want": -1
    },
    {
     "args": [
      1,
      []
     ],
     "want": 1
    },
    {
     "args": [
      2,
      [
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
      3,
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
     "want": -1
    },
    {
     "args": [
      4,
      [
       [
        1,
        3
       ],
       [
        1,
        4
       ],
       [
        2,
        3
       ],
       [
        2,
        4
       ],
       [
        4,
        3
       ]
      ]
     ],
     "want": 3
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function theElder(n, trusts) {",
    "  const score = new Array(n + 1).fill(0);",
    "  for (const [a, b] of trusts) {",
    "    score[a]--;",
    "    score[b]++;",
    "  }",
    "  for (let i = 1; i <= n; i++) {",
    "    if (score[i] === n - 1) return i;",
    "  }",
    "  return -1;",
    "}"
   ],
   "why": "Why can an animal that trusts somebody never reach a score of n - 1?",
   "topic": {
    "name": "Graphs and Grids",
    "href": "chapter.html?c=graphs"
   },
   "world": "A search engine began like this. Count the links pointing at a page. Many links in, means many people trust it.",
   "view": {
    "row": [],
    "tree": null,
    "grid": null,
    "graph": {
     "directed": true,
     "nodes": [
      [
       1,
       0.3,
       0.3
      ],
      [
       2,
       0.3,
       0.95
      ],
      [
       3,
       0.98,
       0.62
      ]
     ],
     "edges": [
      [
       0,
       2
      ],
      [
       1,
       2
      ]
     ]
    },
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [],
    "vars": [
     "s1",
     "s2",
     "s3"
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
     "say": "The elder has an arrow in, from every other animal. And no arrow out.",
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
     "card": "elder: n − 1 arrows in, none out",
     "arrows": null
    },
    {
     "say": "So keep one score per animal. Plus one for an arrow in. Minus one for an arrow out.",
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
     "card": "score: +1 in · −1 out",
     "arrows": null
    },
    {
     "say": "Line two. Every score starts at zero.",
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
      "s1": 0,
      "s2": 0,
      "s3": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "One trusts three. An arrow out of one. An arrow into three.",
     "line": 5,
     "ptr": null,
     "hot": [
      0,
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
      "s1": -1,
      "s2": 0,
      "s3": 1
     },
     "box": null,
     "card": "1 → 3: s1 − 1 · s3 + 1",
     "arrows": null
    },
    {
     "say": "Two trusts three. Minus one for two. Plus one for three.",
     "line": 5,
     "ptr": null,
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
     "vars": {
      "s1": -1,
      "s2": -1,
      "s3": 2
     },
     "box": null,
     "card": "2 → 3: s2 − 1 · s3 + 1",
     "arrows": null
    },
    {
     "say": "There are three animals. Which score does the elder need?",
     "line": 8,
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
     "card": "n = 3 → the elder needs ?",
     "arrows": null
    },
    {
     "say": "Two. Animal three has it. Line eight returns three.",
     "line": 8,
     "ptr": null,
     "hot": [],
     "ok": [
      2
     ],
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
     "card": "",
     "arrows": null
    },
    {
     "say": "And if the elder trusted anyone, one point would be lost. Then nobody reaches two. Minus one.",
     "line": 10,
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
     "card": "an arrow out → never n − 1",
     "arrows": null
    },
    {
     "say": "One pass over the arrows, and one over the animals.",
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
     "card": "O(arrows + n)",
     "arrows": null
    },
    {
     "say": "One score per animal.",
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
     "card": "O(n) space",
     "arrows": null
    },
    {
     "say": "A search engine began like this. Count the links pointing at a page. Many links in, means many people trust it.",
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
     "card": "pages ranked by links in",
     "arrows": null
    }
   ]
  },
  {
   "id": "mk9",
   "num": 9,
   "title": "Cut It Into Parts",
   "fn": "cutParts",
   "ask": "Cut the text into <b>as many parts as possible</b>, so that <b>no letter appears in two different parts</b>: all copies of a letter must end up in the same part. Return the sizes of the parts, in order.",
   "spec": "cutParts(\"abacdd\") → [3, 1, 2]      (\"aba\" · \"c\" · \"dd\": both a's stay together)",
   "start": "function cutParts(s) {\n  // your code here\n}\n",
   "plan": [
    "Say the task back in your own words.",
    "Work one small example by hand.",
    "Say your approach and its cost before you type."
   ],
   "hints": [
    "If a part contains the letter a, how far must that part reach at least?",
    "First record the last position of every letter. Then walk the text, keeping \"end\": the furthest last position of any letter seen in this part.",
    "When your position equals end, no letter of this part appears later: cut here, and start a new part."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "abacdd"
     ],
     "want": [
      3,
      1,
      2
     ]
    },
    {
     "args": [
      ""
     ],
     "want": []
    },
    {
     "args": [
      "a"
     ],
     "want": [
      1
     ]
    },
    {
     "args": [
      "abc"
     ],
     "want": [
      1,
      1,
      1
     ]
    },
    {
     "args": [
      "abca"
     ],
     "want": [
      4
     ]
    },
    {
     "args": [
      "ababcbacadefegdehijhklij"
     ],
     "want": [
      9,
      7,
      8
     ]
    },
    {
     "args": [
      "aabb"
     ],
     "want": [
      2,
      2
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function cutParts(s) {",
    "  const last = new Map();",
    "  for (let i = 0; i < s.length; i++) last.set(s[i], i);",
    "  const sizes = [];",
    "  let start = 0, end = 0;",
    "  for (let i = 0; i < s.length; i++) {",
    "    end = Math.max(end, last.get(s[i]));",
    "    if (i === end) {",
    "      sizes.push(end - start + 1);",
    "      start = i + 1;",
    "    }",
    "  }",
    "  return sizes;",
    "}"
   ],
   "why": "Why is it safe to cut the moment i equals end, without looking at the rest of the text?",
   "topic": {
    "name": "Greedy",
    "href": "chapter.html?c=greedy"
   },
   "world": "Work that shares nothing can run side by side. Splitting a job into such parts is what lets a computer use all its cores.",
   "view": {
    "row": [
     "a",
     "b",
     "a",
     "c",
     "d",
     "d"
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
     "end"
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
     "say": "A part that contains a letter must reach at least to the last place of that letter.",
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
     "card": "a part must reach the last a",
     "arrows": null
    },
    {
     "say": "So record every last place first. Then walk, and cut as soon as nothing reaches further.",
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
     "card": "cut when nothing reaches further",
     "arrows": null
    },
    {
     "say": "Line three records the last place of every letter. A at two. B at one. C at three. D at five.",
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
     "card": "last: a 2 · b 1 · c 3 · d 5",
     "arrows": null
    },
    {
     "say": "Door zero. An a. Its last place is two. So this part must reach door two.",
     "line": 7,
     "ptr": {
      "i": 0
     },
     "hot": [
      0,
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
      "end": 2
     },
     "box": null,
     "card": "a → end = 2",
     "arrows": null
    },
    {
     "say": "Door one. A b. Its last place is one. That is not further. End stays two.",
     "line": 7,
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
     "vars": {
      "end": 2
     },
     "box": null,
     "card": "b → end stays 2",
     "arrows": null
    },
    {
     "say": "Door two. I is two. And end is two. What does that mean?",
     "line": 8,
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
     "card": "i = end → ?",
     "arrows": null
    },
    {
     "say": "No letter of this part comes back. Cut. Size three.",
     "line": 9,
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
     "card": "cut → size 3",
     "arrows": null
    },
    {
     "say": "The c ends where it stands. Cut. Size one. The d reaches door five. Cut there. Size two.",
     "line": 9,
     "ptr": {
      "i": 5
     },
     "hot": [],
     "ok": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": {
      "end": 5
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Two passes over the text. O of n.",
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
     "card": "two passes → O(n)",
     "arrows": null
    },
    {
     "say": "One last place per different letter.",
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
     "card": "one entry per letter",
     "arrows": null
    },
    {
     "say": "Work that shares nothing can run side by side. Splitting a job into such parts is what lets a computer use all its cores.",
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
     "card": "no shared data → run in parallel",
     "arrows": null
    }
   ]
  },
  {
   "id": "mk10",
   "num": 10,
   "title": "Paint the Doors",
   "fn": "cheapestPaint",
   "ask": "A row of doors is painted red, green or blue. <code>costs[i]</code> is <code>[red, green, blue]</code>: the price of each colour for door i. <b>Two doors next to each other must not get the same colour.</b> Return the lowest total price.",
   "spec": "cheapestPaint([[17, 2, 17], [16, 16, 5], [14, 3, 19]]) → 10      (green 2 + blue 5 + green 3)",
   "start": "// costs[i] is [red, green, blue] for door i.\nfunction cheapestPaint(costs) {\n  // your code here\n}\n",
   "plan": [
    "Say the task back in your own words.",
    "Work one small example by hand.",
    "Say your approach and its cost before you type."
   ],
   "hints": [
    "Taking the cheapest colour for each door can break the rule. What do you need to know about the doors so far to price the next one?",
    "For the doors up to here, keep three numbers: the cheapest total that ends in red, in green, and in blue.",
    "New red = this door's red price + the smaller of the old green and old blue. The same for the other two. Work all three out before you overwrite any."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       [
        17,
        2,
        17
       ],
       [
        16,
        16,
        5
       ],
       [
        14,
        3,
        19
       ]
      ]
     ],
     "want": 10
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
        5,
        8,
        6
       ]
      ]
     ],
     "want": 5
    },
    {
     "args": [
      [
       [
        1,
        10,
        10
       ],
       [
        1,
        10,
        10
       ]
      ]
     ],
     "want": 11
    },
    {
     "args": [
      [
       [
        1,
        2,
        3
       ],
       [
        1,
        2,
        3
       ],
       [
        1,
        2,
        3
       ]
      ]
     ],
     "want": 4
    },
    {
     "args": [
      [
       [
        10,
        1,
        10
       ],
       [
        10,
        1,
        10
       ]
      ]
     ],
     "want": 11
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function cheapestPaint(costs) {",
    "  let red = 0, green = 0, blue = 0;",
    "  for (const [r, g, b] of costs) {",
    "    const newRed = r + Math.min(green, blue);",
    "    const newGreen = g + Math.min(red, blue);",
    "    const newBlue = b + Math.min(red, green);",
    "    red = newRed;",
    "    green = newGreen;",
    "    blue = newBlue;",
    "  }",
    "  return Math.min(red, green, blue);",
    "}"
   ],
   "why": "Why are the three new values worked out first, and only then written into red, green and blue?",
   "topic": {
    "name": "DP: One Row",
    "href": "chapter.html?c=dp1"
   },
   "world": "A phone keyboard guesses your sentence like this. One best total for each possible word. Carried forward, word by word.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      17,
      2,
      17
     ],
     [
      16,
      16,
      5
     ],
     [
      14,
      3,
      19
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
     "red",
     "green",
     "blue"
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
     "say": "For the doors so far, keep three totals. The cheapest way that ends in red. In green. And in blue.",
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
     "card": "cheapest so far, ending in each colour",
     "arrows": null
    },
    {
     "say": "A new red door goes after the cheaper of green and blue. Never after red.",
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
     "card": "new red = price + min(green, blue)",
     "arrows": null
    },
    {
     "say": "Line two. All three totals start at zero.",
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
      "red": 0,
      "green": 0,
      "blue": 0
     },
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "The first door. Nothing comes before it. So the totals are just its prices.",
     "line": 9,
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
      "red": 17,
      "green": 2,
      "blue": 17
     },
     "box": null,
     "card": "door 1: 17 · 2 · 17",
     "arrows": null
    },
    {
     "say": "The second door, in red. Sixteen. Plus the cheaper of green and blue so far. That is two. Eighteen.",
     "line": 4,
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
     "card": "red: 16 + min(2, 17) = 18",
     "arrows": null
    },
    {
     "say": "The second door, in blue. Five. Plus the cheaper of red and green so far. What is the total?",
     "line": 6,
     "ptr": null,
     "hot": [
      5
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
     "card": "blue: 5 + min(17, 2) → ?",
     "arrows": null
    },
    {
     "say": "Seven. And green is sixteen, plus seventeen. Thirty three.",
     "line": 9,
     "ptr": null,
     "hot": [
      3,
      4,
      5
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
      "red": 18,
      "green": 33,
      "blue": 7
     },
     "box": null,
     "card": "door 2: 18 · 33 · 7",
     "arrows": null
    },
    {
     "say": "The third door. Red is twenty one. Green is three, plus seven. Ten. Blue is thirty seven.",
     "line": 9,
     "ptr": null,
     "hot": [
      6,
      7,
      8
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
      "red": 21,
      "green": 10,
      "blue": 37
     },
     "box": null,
     "card": "door 3: 21 · 10 · 37",
     "arrows": null
    },
    {
     "say": "Line eleven returns the smallest. Ten. Green, blue, green.",
     "line": 11,
     "ptr": null,
     "hot": [],
     "ok": [
      1,
      5,
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
     "card": "",
     "arrows": null
    },
    {
     "say": "One pass. Three small sums per door. O of n.",
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
     "say": "Three numbers, however long the row is.",
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
     "card": "three numbers → O(1) space",
     "arrows": null
    },
    {
     "say": "A phone keyboard guesses your sentence like this. One best total for each possible word. Carried forward, word by word.",
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
     "card": "a keyboard guessing your words",
     "arrows": null
    }
   ]
  }
 ]
};
