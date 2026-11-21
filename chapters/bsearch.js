window.CHAPTER = {
 "id": "bsearch",
 "title": "Binary Search",
 "sub": "CHAPTER 11 · BINARY SEARCH",
 "key": "burrow-ch-bsearch",
 "next": {
  "href": "chapter.html?c=sorting",
  "label": "Chapter 12: Sorting"
 },
 "prev": {
  "href": "chapter.html?c=recur",
  "label": "Chapter 10: Recursion"
 },
 "mock": false,
 "target": null,
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "bs0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Twenty looks for a million doors",
   "intro": "What binary search is, in half a minute."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "bst1",
   "label": "Theory 1",
   "short": "T1",
   "name": "Halve what is left",
   "intro": "Low, high and the middle door: the classic search in a sorted row. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "bst2",
   "label": "Theory 2",
   "short": "T2",
   "name": "Search the answer",
   "intro": "Binary search with no row at all: when the answer flips once from no to yes. One guess."
  }
 ],
 "notes": {
  "t1": "<h3>Key ideas</h3><ul><li><b>The row must be sorted.</b> Keep two markers, low and high: the target, if present, is between them.</li>\n      <li><b>Look at the middle door.</b> Too small: everything left of it is too small too, so low = mid + 1. Too big: high moves below mid.</li>\n      <li><b>Every look halves what is left:</b> O(log n). A million doors need about 20 looks.</li>\n      <li><b>When to reach for it:</b> sorted input, and you are looking for one position or one boundary.</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>Binary search needs a question whose answer flips once</b>: no, no, no, yes, yes, yes. That row of answers is \"sorted\".</li>\n      <li><b>Search the possible answers, not a list.</b> Low and high are the smallest and largest possible answer.</li>\n      <li><b>Write a test:</b> \"is this value good enough?\" If yes, the answer is this or smaller: high = mid. If no: low = mid + 1.</li>\n      <li><b>When to reach for it:</b> \"the smallest value that works\", \"the largest that still fits\".</li></ul>"
 },
 "quiz": {
  "bst1-q1": {
   "ask": "The row is sorted. The target is 16. The middle door holds 23. Which marker moves?",
   "opts": [
    "high moves to just left of the middle",
    "low moves to just right of the middle",
    "Both move"
   ],
   "right": 0,
   "why": "23 is too big, and so is everything to its right. So the right part is thrown away: high = mid − 1."
  },
  "bst2-q1": {
   "ask": "Speeds 1 to 11 are possible. Speed 3 does not work (it needs 10 hours, and there are 8). Which speeds can be thrown away?",
   "opts": [
    "3 and everything slower",
    "3 and everything faster",
    "Only 3"
   ],
   "right": 0,
   "why": "If 3 is too slow, then 1 and 2 are too slow as well. The answer is faster than 3: low = mid + 1."
  },
  "bs1s-q": {
   "ask": "The target is 16 and the middle door holds 23. What does the code do?",
   "opts": [
    "high = mid − 1",
    "low = mid + 1",
    "return mid"
   ],
   "right": 0,
   "why": "23 is too big, and so is everything to its right."
  },
  "bs2s-q": {
   "ask": "low = 2, high = 3, mid = 2 and the door holds 5, the target. What does the code do?",
   "opts": [
    "high = mid, so high becomes 2",
    "low = mid + 1, so low becomes 3",
    "return mid"
   ],
   "right": 0,
   "why": "5 is not smaller than 5, so the else branch runs: high = mid."
  },
  "bs3s-q": {
   "ask": "The row is 1, 3, 5, 5, 5, 8, 9. What is the first index whose number is 6 or more?",
   "opts": [
    "5",
    "4",
    "7"
   ],
   "right": 0,
   "why": "Index 5 holds 8, the first number that is 6 or more. That is exactly the door after the last 5."
  },
  "bs4s-q": {
   "ask": "The candidate is 2, and 2 × 2 = 4, which is at most 8. What does the code do?",
   "opts": [
    "low = mid: 2 fits, so the answer is 2 or more",
    "high = mid − 1",
    "return 2"
   ],
   "right": 0,
   "why": "A candidate that fits might be the answer, so it is kept: low = mid."
  },
  "bs5s-q": {
   "ask": "heights[mid] is 5 and the next door holds 2. What does the code do?",
   "opts": [
    "high = mid: we are at the top or past it",
    "low = mid + 1",
    "return mid"
   ],
   "right": 0,
   "why": "The next door is lower, so the top is here or to the left. mid is kept: high = mid."
  },
  "bs6s-q": {
   "ask": "nums[mid] is 2 and nums[high] is 3. What does the code do?",
   "opts": [
    "high = mid: 2 is in the right piece, and might be the smallest",
    "low = mid + 1",
    "return 2"
   ],
   "right": 0,
   "why": "2 is not bigger than the last door, so it is in the right piece. It is kept as a candidate."
  },
  "bs7s-q": {
   "ask": "Speed 2 needs 13 hours, and there are 8. What does the code do?",
   "opts": [
    "low = mid + 1: 2 and everything slower is out",
    "high = mid",
    "return 2"
   ],
   "right": 0,
   "why": "fits(2) is false, so the answer must be faster than 2."
  }
 },
 "problems": [
  {
   "id": "bs1",
   "num": 1,
   "title": "Find the Door",
   "fn": "findIndex",
   "ask": "The array is <b>sorted</b>. Return the <b>index</b> of target, or <b>-1</b> if it is not there. Open as few doors as possible: on a million doors you may open at most 100.",
   "spec": "findIndex([2, 5, 8, 12, 16, 23, 38], 16) → 4",
   "start": "// nums is sorted, smallest first.\nfunction findIndex(nums, target) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: where is the target, if it is here at all?",
    "Do [2, 5, 8, 12, 16, 23, 38] with target 16 by hand, but look at the middle door first. What does it tell you about half of the row?",
    "What two markers do you need to remember which part is still possible?",
    "When do you stop with -1?"
   ],
   "hints": [
    "Keep low = 0 and high = nums.length - 1: the part still possible.",
    "While low <= high: look at mid = Math.floor((low + high) / 2). If it is the target, return mid.",
    "If nums[mid] is too small, low = mid + 1. Otherwise high = mid - 1. If the loop ends, return -1."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       2,
       5,
       8,
       12,
       16,
       23,
       38
      ],
      16
     ],
     "want": 4
    },
    {
     "args": [
      [
       2,
       5,
       8,
       12,
       16,
       23,
       38
      ],
      7
     ],
     "want": -1
    },
    {
     "args": [
      [],
      3
     ],
     "want": -1
    },
    {
     "args": [
      [
       5
      ],
      5
     ],
     "want": 0
    },
    {
     "args": [
      [
       1,
       2
      ],
      2
     ],
     "want": 1
    },
    {
     "args": [
      [
       1,
       3,
       5,
       7
      ],
      1
     ],
     "want": 0
    },
    {
     "args": [
      [
       1,
       3,
       5,
       7
      ],
      9
     ],
     "want": -1
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*(indexOf|includes|findIndex|find|lastIndexOf)\\s*\\(",
     "msg": "Those built-ins walk the whole row. Write the halving yourself."
    }
   ],
   "big": {
    "gen": "const n = 1000000; return [Array.from({ length: n }, (_, i) => i * 2), 2 * (n - 3)];",
    "limit": 1500,
    "label": "a million sorted doors",
    "msg": "Correct on the small cases, but on a million doors it opened more than 100 of them. That is a walk. Halve what is left at every look."
   },
   "prep": "let opened = 0; const nums = new Proxy(args[0], { get(t, k) { if (typeof k === 'string' && /^[0-9]+$/.test(k) && ++opened > 100) throw new Error('more than 100 doors were opened'); return t[k]; } }); return [nums, ...args.slice(1)];",
   "post": null,
   "solution": [
    "function findIndex(nums, target) {",
    "  let low = 0;",
    "  let high = nums.length - 1;",
    "  while (low <= high) {",
    "    const mid = Math.floor((low + high) / 2);",
    "    if (nums[mid] === target) return mid;",
    "    if (nums[mid] < target) low = mid + 1;",
    "    else high = mid - 1;",
    "  }",
    "  return -1;",
    "}"
   ],
   "why": "Why is it mid + 1 and mid − 1, and not just mid?",
   "topic": null,
   "world": "Your phone finds one name among thousands of sorted contacts like this. A handful of looks.",
   "view": {
    "row": [
     2,
     5,
     8,
     12,
     16,
     23,
     38
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
     "say": "The row is sorted. So one look at the middle door tells you which half the target cannot be in.",
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
     "card": "the middle rules out one half",
     "arrows": null
    },
    {
     "say": "Keep two markers around the part that is still possible, and halve it until the target is found.",
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
     "card": "low and high: what is still possible",
     "arrows": null
    },
    {
     "say": "Lines two and three. Low is the first door. High is the last. The target is somewhere between them.",
     "line": 3,
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
     "say": "Line five finds the middle. Zero plus six, divided by two. Door three.",
     "line": 5,
     "ptr": {
      "mid": 3
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
     "card": "(0 + 6) / 2 = 3",
     "arrows": null
    },
    {
     "say": "Door three holds twelve. Too small. And so is everything to its left. Line seven moves low past the middle.",
     "line": 7,
     "ptr": {
      "low": 4
     },
     "hot": [],
     "ok": [],
     "bad": [
      0,
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
     "box": null,
     "card": "12 < 16 → low = mid + 1",
     "arrows": null
    },
    {
     "say": "The middle of four and six is five. Door five holds twenty three. Which marker moves?",
     "line": 5,
     "ptr": {
      "mid": 5
     },
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
     "card": "23 against 16 → ?",
     "arrows": null
    },
    {
     "say": "High. Twenty three is too big, and so is everything to its right. Line eight moves high to door four.",
     "line": 8,
     "ptr": {
      "high": 4
     },
     "hot": [],
     "ok": [],
     "bad": [
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
     "card": "23 > 16 → high = mid − 1",
     "arrows": null
    },
    {
     "say": "Low and high are both on door four. The middle is door four. Sixteen. Line six returns its index.",
     "line": 6,
     "ptr": {
      "mid": 4
     },
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
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Every look halves what is left. O of log n time.",
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
     "say": "Three markers, and nothing else. O of one space.",
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
     "card": "3 markers → O(1) space",
     "arrows": null
    },
    {
     "say": "Your phone finds one name among thousands of sorted contacts like this. A handful of looks.",
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
     "card": "one name in sorted contacts",
     "arrows": null
    }
   ]
  },
  {
   "id": "bs2",
   "num": 2,
   "title": "Where Would It Go?",
   "fn": "firstAtLeast",
   "ask": "The array is <b>sorted</b>. Return the <b>first index</b> whose number is <b>target or more</b>. If every number is smaller, return the length of the array. (This is also where target would be inserted.)",
   "spec": "firstAtLeast([1, 3, 5, 5, 5, 8, 9], 5) → 2      firstAtLeast([1, 3], 9) → 2",
   "start": "// nums is sorted, smallest first.\nfunction firstAtLeast(nums, target) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the boundary between \"smaller than target\" and \"target or more\".",
    "Do [1, 3, 5, 5, 5, 8, 9] with target 5 by hand. The middle door holds a 5. Is it the answer?",
    "This time finding the target is not enough. When the middle is big enough, could the answer still be to its left?",
    "So which marker keeps the middle door, and which moves past it?"
   ],
   "hints": [
    "Let high start at nums.length (one past the end), because the answer can be \"after everything\".",
    "If nums[mid] is smaller than target, the answer is to the right: low = mid + 1.",
    "Otherwise mid might be the answer, so keep it: high = mid. When low meets high, that is the answer."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       3,
       5,
       5,
       5,
       8,
       9
      ],
      5
     ],
     "want": 2
    },
    {
     "args": [
      [
       1,
       3
      ],
      9
     ],
     "want": 2
    },
    {
     "args": [
      [],
      4
     ],
     "want": 0
    },
    {
     "args": [
      [
       1,
       3,
       5
      ],
      0
     ],
     "want": 0
    },
    {
     "args": [
      [
       1,
       3,
       5
      ],
      4
     ],
     "want": 2
    },
    {
     "args": [
      [
       2,
       2,
       2
      ],
      2
     ],
     "want": 0
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
     "want": 2
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*(indexOf|includes|findIndex|find|lastIndexOf)\\s*\\(",
     "msg": "Those built-ins walk the whole row. Write the halving yourself."
    }
   ],
   "big": {
    "gen": "const n = 1000000; return [Array.from({ length: n }, (_, i) => i * 2), 2 * (n - 3) - 1];",
    "limit": 1500,
    "label": "a million sorted doors",
    "msg": "Correct on the small cases, but on a million doors it opened more than 100 of them. That is a walk. Halve what is left at every look."
   },
   "prep": "let opened = 0; const nums = new Proxy(args[0], { get(t, k) { if (typeof k === 'string' && /^[0-9]+$/.test(k) && ++opened > 100) throw new Error('more than 100 doors were opened'); return t[k]; } }); return [nums, ...args.slice(1)];",
   "post": null,
   "solution": [
    "function firstAtLeast(nums, target) {",
    "  let low = 0;",
    "  let high = nums.length;",
    "  while (low < high) {",
    "    const mid = Math.floor((low + high) / 2);",
    "    if (nums[mid] < target) low = mid + 1;",
    "    else high = mid;",
    "  }",
    "  return low;",
    "}"
   ],
   "why": "Why is it high = mid here, when the last problem used high = mid − 1?",
   "topic": null,
   "world": "A database finds where a new record belongs in a sorted index, exactly like this.",
   "view": {
    "row": [
     1,
     3,
     5,
     5,
     5,
     8,
     9
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
     "say": "The row splits into two parts. Numbers that are too small, and numbers that are big enough. We want the first of the second part.",
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
     "card": "too small | big enough → the edge",
     "arrows": null
    },
    {
     "say": "So when the middle door is big enough, it might be the answer. Keep it. Only throw away what is certainly wrong.",
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
     "card": "big enough? keep it: high = mid",
     "arrows": null
    },
    {
     "say": "Low starts at zero. High starts at seven, one past the last door, because the answer could be after everything.",
     "line": 3,
     "ptr": {
      "low": 0,
      "high": 7
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
     "card": "high = length = 7",
     "arrows": null
    },
    {
     "say": "The middle of zero and seven is three. Door three holds five. Not smaller than the target. So it might be the answer. High moves onto it.",
     "line": 7,
     "ptr": {
      "mid": 3,
      "high": 3
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
     "card": "5 is big enough → high = 3",
     "arrows": null
    },
    {
     "say": "The middle of zero and three is one. Door one holds three. Too small. Low moves past it.",
     "line": 6,
     "ptr": {
      "mid": 1,
      "low": 2
     },
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
     "card": "3 < 5 → low = 2",
     "arrows": null
    },
    {
     "say": "The middle of two and three is two. Door two holds five. Which marker moves?",
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
     "card": "5 is big enough → ?",
     "arrows": null
    },
    {
     "say": "High. It moves onto door two. Now low and high are equal, and the loop ends.",
     "line": 7,
     "ptr": {
      "high": 2
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
     "card": "low = high = 2 → stop",
     "arrows": null
    },
    {
     "say": "Line nine returns low. Two. The first door that is big enough.",
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
     "say": "Every look halves what is left. O of log n time.",
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
     "say": "Three markers, and nothing else. O of one space.",
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
     "card": "3 markers → O(1) space",
     "arrows": null
    },
    {
     "say": "A database finds where a new record belongs in a sorted index, exactly like this.",
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
     "card": "where a new record belongs",
     "arrows": null
    }
   ]
  },
  {
   "id": "bs3",
   "num": 3,
   "title": "How Many of Them?",
   "fn": "countOf",
   "ask": "The array is <b>sorted</b>. Return <b>how many times</b> target appears. On a million doors you may open at most 100.",
   "spec": "countOf([1, 3, 5, 5, 5, 8, 9], 5) → 3",
   "start": "// nums is sorted whole numbers, smallest first.\nfunction countOf(nums, target) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the number of doors holding the target.",
    "In a sorted row, all the copies of a value sit together. What two positions would tell you how many there are?",
    "You already know how to find \"the first index with target or more\". How could the same search find where the copies end?",
    "What does the answer look like when the target is not there?"
   ],
   "hints": [
    "Write the boundary search from the last problem as a helper: first(x) = the first index whose number is x or more.",
    "The copies of target start at first(target).",
    "They end just before first(target + 1). So the count is first(target + 1) - first(target)."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       3,
       5,
       5,
       5,
       8,
       9
      ],
      5
     ],
     "want": 3
    },
    {
     "args": [
      [
       1,
       3,
       5,
       5,
       5,
       8,
       9
      ],
      4
     ],
     "want": 0
    },
    {
     "args": [
      [],
      1
     ],
     "want": 0
    },
    {
     "args": [
      [
       2,
       2,
       2
      ],
      2
     ],
     "want": 3
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
     "want": 1
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
     "want": 0
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "\\.\\s*(indexOf|includes|findIndex|find|lastIndexOf)\\s*\\(",
     "msg": "Those built-ins walk the whole row. Write the halving yourself."
    },
    {
     "re": "\\.\\s*filter\\s*\\(",
     "msg": "filter walks the whole row. Find the two edges of the block instead."
    }
   ],
   "big": {
    "gen": "const n = 1000000; return [Array.from({ length: n }, (_, i) => Math.floor(i / 400000)), 1];",
    "limit": 1500,
    "label": "a million sorted doors",
    "msg": "Correct on the small cases, but on a million doors it opened more than 100 of them. That is a walk. Halve what is left at every look."
   },
   "prep": "let opened = 0; const nums = new Proxy(args[0], { get(t, k) { if (typeof k === 'string' && /^[0-9]+$/.test(k) && ++opened > 100) throw new Error('more than 100 doors were opened'); return t[k]; } }); return [nums, ...args.slice(1)];",
   "post": null,
   "solution": [
    "function countOf(nums, target) {",
    "  const first = (x) => {",
    "    let low = 0;",
    "    let high = nums.length;",
    "    while (low < high) {",
    "      const mid = Math.floor((low + high) / 2);",
    "      if (nums[mid] < x) low = mid + 1;",
    "      else high = mid;",
    "    }",
    "    return low;",
    "  };",
    "  return first(target + 1) - first(target);",
    "}"
   ],
   "why": "Why does first(target + 1) give the door just after the last copy of target?",
   "topic": null,
   "world": "How many orders on one date? A sorted table answers with two binary searches and a subtraction.",
   "view": {
    "row": [
     1,
     3,
     5,
     5,
     5,
     8,
     9
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
     }
    ],
    "vars": [
     "start",
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
     "say": "In a sorted row, the copies of a value form one block. So the count is where the block ends, minus where it starts.",
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
     "card": "count = end of block − start",
     "arrows": null
    },
    {
     "say": "Both edges are boundaries. And you already know how to find a boundary in a few looks.",
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
     "card": "two boundary searches",
     "arrows": null
    },
    {
     "say": "Lines two to eleven are the boundary search from the last puzzle, as a helper. First of x: the first door holding x or more.",
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
     "card": "first(x) = first door ≥ x",
     "arrows": null
    },
    {
     "say": "Line twelve calls it twice. First of five finds where the fives start. Door two.",
     "line": 12,
     "ptr": {
      "low": 2
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
      "start": 2
     },
     "box": null,
     "card": "first(5) = 2",
     "arrows": null
    },
    {
     "say": "Now first of six. No door holds six. So what does it return?",
     "line": 12,
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
     "card": "first(6) = ?",
     "arrows": null
    },
    {
     "say": "Five. The first door holding six or more is the eight. And that is exactly the door after the last five.",
     "line": 12,
     "ptr": {
      "low": 5
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
     "vars": {
      "end": 5
     },
     "box": null,
     "card": "first(6) = 5",
     "arrows": null
    },
    {
     "say": "Five minus two. Three fives.",
     "line": 12,
     "ptr": null,
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
     "card": "5 − 2 = 3",
     "arrows": null
    },
    {
     "say": "Two searches, each halving. O of log n, however big the block is.",
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
     "card": "2 searches → O(log n) time",
     "arrows": null
    },
    {
     "say": "Three markers, and nothing else. O of one space.",
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
     "card": "3 markers → O(1) space",
     "arrows": null
    },
    {
     "say": "How many orders on one date? A sorted table answers with two binary searches and a subtraction.",
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
     "card": "counting rows with one date",
     "arrows": null
    }
   ]
  },
  {
   "id": "bs4",
   "num": 4,
   "title": "The Square Root",
   "fn": "sqrtFloor",
   "ask": "Return the <b>largest whole number x</b> whose square is <b>n or less</b> (the square root of n, rounded down). Do not use Math.sqrt or **.",
   "spec": "sqrtFloor(8) → 2      sqrtFloor(9) → 3",
   "start": "// n is a whole number, 0 or more.\nfunction sqrtFloor(n) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the biggest x with x × x ≤ n.",
    "There is no row here. But what are the possible answers, from smallest to largest?",
    "For each possible x you can ask \"is x × x ≤ n?\". As x grows, how do the answers go: yes yes yes no no, or mixed?",
    "So which half can you throw away after testing the middle candidate?"
   ],
   "hints": [
    "The possible answers are 0 to n. Keep low and high around them.",
    "Test the middle candidate: if mid * mid <= n it works, so the answer is mid or bigger: low = mid.",
    "Otherwise high = mid - 1. Because low = mid keeps the middle, round the middle UP (Math.ceil) or the loop can get stuck."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      8
     ],
     "want": 2
    },
    {
     "args": [
      9
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
      15
     ],
     "want": 3
    },
    {
     "args": [
      16
     ],
     "want": 4
    },
    {
     "args": [
      1000000
     ],
     "want": 1000
    },
    {
     "args": [
      2147395599
     ],
     "want": 46339
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "Math\\s*\\.\\s*(sqrt|pow)|\\*\\*",
     "msg": "No Math.sqrt, Math.pow or **. Search the possible answers."
    }
   ],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function sqrtFloor(n) {",
    "  let low = 0;",
    "  let high = n;",
    "  while (low < high) {",
    "    const mid = Math.ceil((low + high) / 2);",
    "    if (mid * mid <= n) low = mid;",
    "    else high = mid - 1;",
    "  }",
    "  return low;",
    "}"
   ],
   "why": "Try low = 2, high = 3 with Math.floor instead of Math.ceil. What goes wrong?",
   "topic": null,
   "world": "Calculators find square roots by halving a range of possible answers, just like this.",
   "view": {
    "row": [
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
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "x",
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
    "nameOnly": true,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "The answer is somewhere from zero to n. Small candidates fit, because their square is at most n. Big ones do not.",
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
     "card": "fits, fits, fits, too big, too big",
     "arrows": null
    },
    {
     "say": "Yes, then no. That flips once. So binary search the candidates, for the last one that fits.",
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
     "card": "find the last candidate that fits",
     "arrows": null
    },
    {
     "say": "The candidates are zero to eight. Low is on zero. High is on eight.",
     "line": 3,
     "ptr": {
      "low": 0,
      "high": 8
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
     "say": "The middle candidate is four. Four squared is sixteen. More than eight. Too big.",
     "line": 6,
     "ptr": {
      "mid": 4
     },
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
     "card": "4 × 4 = 16 > 8",
     "arrows": null
    },
    {
     "say": "So four is out, and everything above it. Line seven moves high to three.",
     "line": 7,
     "ptr": {
      "high": 3
     },
     "hot": [],
     "ok": [],
     "bad": [
      4,
      5,
      6,
      7,
      8
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "high = mid − 1 = 3",
     "arrows": null
    },
    {
     "say": "The middle of zero and three, rounded up, is two. Two squared is four. Does it fit?",
     "line": 6,
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
     "card": "2 × 2 = 4 ≤ 8 ?",
     "arrows": null
    },
    {
     "say": "It fits. So the answer is two, or more. Low moves onto two.",
     "line": 6,
     "ptr": {
      "low": 2
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
     "vars": null,
     "box": null,
     "card": "low = mid = 2",
     "arrows": null
    },
    {
     "say": "The middle of two and three, rounded up, is three. Nine. Too big. High moves to two.",
     "line": 7,
     "ptr": {
      "mid": 3,
      "high": 2
     },
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
     "vars": null,
     "box": null,
     "card": "3 × 3 = 9 > 8 → high = 2",
     "arrows": null
    },
    {
     "say": "Low and high have met. Line nine returns two.",
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
     "card": "",
     "arrows": null
    },
    {
     "say": "The candidates halve at every test. O of log n time.",
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
     "say": "Three markers, and nothing else. O of one space.",
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
     "card": "3 markers → O(1) space",
     "arrows": null
    },
    {
     "say": "Calculators find square roots by halving a range of possible answers, just like this.",
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
     "card": "finding a root by halving",
     "arrows": null
    }
   ]
  },
  {
   "id": "bs5",
   "num": 5,
   "title": "The Top of the Hill",
   "fn": "peakIndex",
   "ask": "The heights go <b>up</b> and then <b>down</b> (a hill), with no two neighbours equal. Either part can be missing: the row may only rise, only fall, or hold a single number. Return the <b>index of the top</b>. On a million doors you may open at most 100.",
   "spec": "peakIndex([1, 3, 6, 8, 5, 2]) → 3      peakIndex([1, 2, 3]) → 2      (it only rises: the top is the last one)",
   "start": "// heights rises, reaches one top, then falls. At least 1 number.\nfunction peakIndex(heights) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the one door that is higher than both of its neighbours.",
    "The row is not sorted. But stand on any door and look at the next one. What does \"the next is higher\" tell you about where the top is?",
    "And if the next one is lower?",
    "So after one look at the middle, which half can be thrown away?"
   ],
   "hints": [
    "Compare heights[mid] with heights[mid + 1].",
    "If the next one is higher, you are on the way up: the top is to the right, low = mid + 1.",
    "Otherwise you are at the top or past it: high = mid. Stop when low meets high."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       1,
       3,
       6,
       8,
       5,
       2
      ]
     ],
     "want": 3
    },
    {
     "args": [
      [
       5
      ]
     ],
     "want": 0
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
       2,
       1
      ]
     ],
     "want": 0
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
     "want": 3
    },
    {
     "args": [
      [
       9,
       7,
       3
      ]
     ],
     "want": 0
    },
    {
     "args": [
      [
       0,
       10,
       5,
       2
      ]
     ],
     "want": 1
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "Math\\s*\\.\\s*max|\\.\\s*indexOf\\s*\\(",
     "msg": "Those look at every door. One look at the middle should rule out half the hill."
    }
   ],
   "big": {
    "gen": "const n = 1000000, top = 700001; return [Array.from({ length: n }, (_, i) => (i <= top ? i : 2 * top - i))];",
    "limit": 1500,
    "label": "a hill a million doors long",
    "msg": "Correct on the small cases, but on a million doors it opened more than 100 of them. That is a walk. Halve what is left at every look."
   },
   "prep": "let opened = 0; const nums = new Proxy(args[0], { get(t, k) { if (typeof k === 'string' && /^[0-9]+$/.test(k) && ++opened > 100) throw new Error('more than 100 doors were opened'); return t[k]; } }); return [nums, ...args.slice(1)];",
   "post": null,
   "solution": [
    "function peakIndex(heights) {",
    "  let low = 0;",
    "  let high = heights.length - 1;",
    "  while (low < high) {",
    "    const mid = Math.floor((low + high) / 2);",
    "    if (heights[mid] < heights[mid + 1]) low = mid + 1;",
    "    else high = mid;",
    "  }",
    "  return low;",
    "}"
   ],
   "why": "The row is not sorted. So why is it still safe to throw away half of it?",
   "topic": null,
   "world": "Tuning a setting whose result rises and then falls uses this same uphill test.",
   "view": {
    "row": [
     1,
     3,
     6,
     8,
     5,
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
     "say": "Stand on a door and look at the next one. If it is higher, you are going uphill, and the top is to the right.",
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
     "card": "next is higher → top is to the right",
     "arrows": null
    },
    {
     "say": "If it is lower, you are at the top, or past it. Uphill, then downhill. That flips once, so you can halve it.",
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
     "card": "uphill | downhill → find the edge",
     "arrows": null
    },
    {
     "say": "Low on the first door. High on the last.",
     "line": 3,
     "ptr": {
      "low": 0,
      "high": 5
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
     "say": "The middle is door two. It holds six, and the next door holds eight. Higher. So we are going uphill.",
     "line": 6,
     "ptr": {
      "mid": 2
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
     "box": null,
     "card": "6 < 8 → uphill",
     "arrows": null
    },
    {
     "say": "The top is to the right. Low moves past the middle, to door three.",
     "line": 6,
     "ptr": {
      "low": 3
     },
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
     "card": "low = mid + 1 = 3",
     "arrows": null
    },
    {
     "say": "The middle of three and five is four. It holds five, and the next door holds two. Which marker moves?",
     "line": 6,
     "ptr": {
      "mid": 4
     },
     "hot": [
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
     "vars": null,
     "box": null,
     "card": "5 < 2 ? no → ?",
     "arrows": null
    },
    {
     "say": "High. We are going downhill, so the top is here, or to the left. High moves onto door four.",
     "line": 7,
     "ptr": {
      "high": 4
     },
     "hot": [],
     "ok": [],
     "bad": [
      5
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "downhill → high = mid",
     "arrows": null
    },
    {
     "say": "The middle of three and four is three. Eight, then five. Downhill. High moves onto three, and meets low.",
     "line": 7,
     "ptr": {
      "mid": 3,
      "high": 3
     },
     "hot": [
      3,
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
     "card": "8 > 5 → high = 3",
     "arrows": null
    },
    {
     "say": "Line nine returns low. Door three. The top.",
     "line": 9,
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
     "card": "",
     "arrows": null
    },
    {
     "say": "Every look halves what is left. O of log n time.",
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
     "say": "Three markers, and nothing else. O of one space.",
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
     "card": "3 markers → O(1) space",
     "arrows": null
    },
    {
     "say": "Tuning a setting whose result rises and then falls uses this same uphill test.",
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
     "card": "the best point on a hill curve",
     "arrows": null
    }
   ]
  },
  {
   "id": "bs6",
   "num": 6,
   "title": "The Turned Row",
   "fn": "findMin",
   "ask": "A sorted array of different numbers was <b>rotated</b>: some numbers were moved from the front to the back, in order. Return the <b>smallest number</b>. On a million doors you may open at most 100.",
   "spec": "findMin([4, 5, 6, 7, 1, 2, 3]) → 1      findMin([1, 2, 3]) → 1",
   "start": "// nums was sorted, then rotated. All numbers are different. At least 1 number.\nfunction findMin(nums) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: where does the row \"start over\" from its smallest number?",
    "Look at [4, 5, 6, 7, 1, 2, 3]. It is two sorted pieces. How does every number in the left piece compare with the last number of the row?",
    "And every number in the right piece?",
    "So what does comparing the middle door with the last door tell you?"
   ],
   "hints": [
    "Compare nums[mid] with nums[high], the last door still possible.",
    "If nums[mid] is bigger, mid is in the left piece and the smallest number is to its right: low = mid + 1.",
    "Otherwise mid is in the right piece, and might be the smallest: high = mid. Return nums[low]."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       4,
       5,
       6,
       7,
       1,
       2,
       3
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       1,
       2,
       3
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       2,
       1
      ]
     ],
     "want": 1
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
       3,
       4,
       5,
       1,
       2
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       2,
       3,
       4,
       5,
       1
      ]
     ],
     "want": 1
    },
    {
     "args": [
      [
       5,
       1,
       2,
       3,
       4
      ]
     ],
     "want": 1
    }
   ],
   "check": null,
   "forbid": [
    {
     "re": "Math\\s*\\.\\s*min|\\.\\s*sort\\s*\\(",
     "msg": "Those look at every door. The two sorted pieces let you rule out half the row."
    }
   ],
   "big": {
    "gen": "const n = 1000000, cut = 300000; return [Array.from({ length: n }, (_, i) => (i + cut) % n)];",
    "limit": 1500,
    "label": "a million doors, rotated",
    "msg": "Correct on the small cases, but on a million doors it opened more than 100 of them. That is a walk. Halve what is left at every look."
   },
   "prep": "let opened = 0; const nums = new Proxy(args[0], { get(t, k) { if (typeof k === 'string' && /^[0-9]+$/.test(k) && ++opened > 100) throw new Error('more than 100 doors were opened'); return t[k]; } }); return [nums, ...args.slice(1)];",
   "post": null,
   "solution": [
    "function findMin(nums) {",
    "  let low = 0;",
    "  let high = nums.length - 1;",
    "  while (low < high) {",
    "    const mid = Math.floor((low + high) / 2);",
    "    if (nums[mid] > nums[high]) low = mid + 1;",
    "    else high = mid;",
    "  }",
    "  return nums[low];",
    "}"
   ],
   "why": "Why compare the middle with the last door, and not with the first door?",
   "topic": null,
   "world": "A log that wraps around when it is full is a turned row. This finds where it begins.",
   "view": {
    "row": [
     4,
     5,
     6,
     7,
     1,
     2,
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
     "say": "The row is two sorted pieces. Every number in the left piece is bigger than the last door. Every number in the right piece is not.",
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
     "card": "left piece > last door ≥ right piece",
     "arrows": null
    },
    {
     "say": "So comparing the middle with the last door tells you which piece you are in. The smallest number is the first door of the right piece.",
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
     "card": "bigger than the last? left piece",
     "arrows": null
    },
    {
     "say": "Low on the first door. High on the last.",
     "line": 3,
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
     "say": "The middle is door three. It holds seven. The last door holds three. Seven is bigger, so we are in the left piece.",
     "line": 6,
     "ptr": {
      "mid": 3
     },
     "hot": [
      3,
      6
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
     "card": "7 > 3 → the left piece",
     "arrows": null
    },
    {
     "say": "The smallest number is to the right. Low moves past the middle, to door four.",
     "line": 6,
     "ptr": {
      "low": 4
     },
     "hot": [],
     "ok": [],
     "bad": [
      0,
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
     "box": null,
     "card": "low = mid + 1 = 4",
     "arrows": null
    },
    {
     "say": "The middle of four and six is five. It holds two. The last door holds three. Which piece is this, and who moves?",
     "line": 6,
     "ptr": {
      "mid": 5
     },
     "hot": [
      5,
      6
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
     "card": "2 > 3 ? no → ?",
     "arrows": null
    },
    {
     "say": "The right piece. Two might be the smallest, so high moves onto it.",
     "line": 7,
     "ptr": {
      "high": 5
     },
     "hot": [],
     "ok": [],
     "bad": [
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
     "card": "right piece → high = mid",
     "arrows": null
    },
    {
     "say": "The middle of four and five is four. One. Not bigger than two. High moves onto four, and meets low.",
     "line": 7,
     "ptr": {
      "mid": 4,
      "high": 4
     },
     "hot": [
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
     "vars": null,
     "box": null,
     "card": "1 > 2 ? no → high = 4",
     "arrows": null
    },
    {
     "say": "Line nine returns the number under low. One.",
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
     "show": [],
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Every look halves what is left. O of log n time.",
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
     "say": "Three markers, and nothing else. O of one space.",
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
     "card": "3 markers → O(1) space",
     "arrows": null
    },
    {
     "say": "A log that wraps around when it is full is a turned row. This finds where it begins.",
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
     "card": "where a wrapped log begins",
     "arrows": null
    }
   ]
  },
  {
   "id": "bs7",
   "num": 7,
   "title": "Just Fast Enough",
   "fn": "minSpeed",
   "ask": "Pip must finish every pile of seeds within <b>hours</b> hours. In one hour Pip eats up to <b>speed</b> seeds from <b>one</b> pile (a pile smaller than that just takes the whole hour). Return the <b>slowest whole speed</b> that finishes in time. There are never more piles than hours.",
   "spec": "minSpeed([3, 6, 7, 8], 8) → 4",
   "start": "// piles: seeds in each pile. hours >= piles.length.\nfunction minSpeed(piles, hours) {\n  // your code here\n}\n",
   "plan": [
    "Say the goal in your own words: the smallest speed that still gets everything eaten in time.",
    "How many hours does a pile of 7 take at speed 3? Write a small helper that works out the total hours for a given speed.",
    "What are the slowest and the fastest speeds worth considering?",
    "As the speed goes up, does \"finishes in time\" ever flip back to no? So how can you find the first yes?"
   ],
   "hints": [
    "A pile of p seeds at a given speed takes Math.ceil(p / speed) hours. Add those up and compare with hours.",
    "The speeds worth trying go from 1 to the biggest pile. Too slow, too slow, ..., fast enough, fast enough: that flips once.",
    "Binary search the speeds: if the middle speed is fast enough, high = mid; otherwise low = mid + 1."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       3,
       6,
       7,
       8
      ],
      8
     ],
     "want": 4
    },
    {
     "args": [
      [
       3,
       6,
       7,
       11
      ],
      8
     ],
     "want": 4
    },
    {
     "args": [
      [
       30,
       11,
       23,
       4,
       20
      ],
      5
     ],
     "want": 30
    },
    {
     "args": [
      [
       30,
       11,
       23,
       4,
       20
      ],
      6
     ],
     "want": 23
    },
    {
     "args": [
      [
       5
      ],
      5
     ],
     "want": 1
    },
    {
     "args": [
      [
       5
      ],
      1
     ],
     "want": 5
    },
    {
     "args": [
      [
       1,
       1,
       1
      ],
      3
     ],
     "want": 1
    }
   ],
   "check": null,
   "forbid": [],
   "big": {
    "gen": "const n = 20000; return [Array.from({ length: n }, (_, i) => 500000000 + (i * 7919) % 400000000), n + 5];",
    "limit": 1500,
    "label": "20,000 piles of up to 900 million seeds",
    "msg": "Correct on the small cases, but trying every speed one by one is far too slow here. Binary search the speeds."
   },
   "prep": null,
   "post": null,
   "solution": [
    "function minSpeed(piles, hours) {",
    "  const fits = (speed) => {",
    "    let used = 0;",
    "    for (const p of piles) used += Math.ceil(p / speed);",
    "    return used <= hours;",
    "  };",
    "  let low = 1;",
    "  let high = Math.max(...piles);",
    "  while (low < high) {",
    "    const mid = Math.floor((low + high) / 2);",
    "    if (fits(mid)) high = mid;",
    "    else low = mid + 1;",
    "  }",
    "  return low;",
    "}"
   ],
   "why": "Why is the biggest pile a safe upper limit for the speed?",
   "topic": null,
   "world": "Programmers hunt a bug this way. Which version first broke? Test the middle one, and halve.",
   "view": {
    "row": [
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "speed",
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
    "nameOnly": true,
    "leftNull": false,
    "cycle": null,
    "skips": []
   },
   "steps": [
    {
     "say": "The answer is a speed, somewhere from one up to the biggest pile. Slow speeds fail. Fast speeds work. And it flips only once.",
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
     "card": "too slow … too slow, fits … fits",
     "arrows": null
    },
    {
     "say": "So write a test, fits, and binary search the speeds for the first one that passes.",
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
     "card": "find the first speed that fits",
     "arrows": null
    },
    {
     "say": "Lines two to six are the test. For a speed, add up the hours each pile takes, rounded up, and compare with the hours we have.",
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
     "card": "hours for a pile = ceil(p / speed)",
     "arrows": null
    },
    {
     "say": "The speeds worth trying are one to eight, the biggest pile. Low is on one. High is on eight.",
     "line": 8,
     "ptr": {
      "low": 0,
      "high": 7
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
     "say": "The middle speed is four. The piles of three, six, seven and eight take one, two, two and two hours. Seven hours. That fits in eight.",
     "line": 11,
     "ptr": {
      "mid": 3
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
     "card": "speed 4 → 1+2+2+2 = 7 hours",
     "arrows": null
    },
    {
     "say": "So the answer is four, or slower. High moves onto four.",
     "line": 11,
     "ptr": {
      "high": 3
     },
     "hot": [],
     "ok": [],
     "bad": [
      4,
      5,
      6,
      7
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "it fits → high = mid",
     "arrows": null
    },
    {
     "say": "The middle of one and four is two. At speed two, the piles take two, three, four and four hours. Thirteen. What happens?",
     "line": 11,
     "ptr": {
      "mid": 1
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
     "card": "speed 2 → 2+3+4+4 = 13 hours",
     "arrows": null
    },
    {
     "say": "Too slow. Two is out, and so is one. Low moves to three.",
     "line": 12,
     "ptr": {
      "low": 2
     },
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
     "card": "too slow → low = mid + 1",
     "arrows": null
    },
    {
     "say": "The middle of three and four is three. One, two, three and three hours. Nine. Still too slow. Low moves to four, and meets high.",
     "line": 12,
     "ptr": {
      "mid": 2,
      "low": 3
     },
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
     "card": "speed 3 → 9 hours → too slow",
     "arrows": null
    },
    {
     "say": "Line fourteen returns low. Speed four.",
     "line": 14,
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
     "card": "",
     "arrows": null
    },
    {
     "say": "About log of the biggest pile tests, and each test walks the piles once. O of n log m.",
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
     "card": "log m tests × n piles",
     "arrows": null
    },
    {
     "say": "A few numbers. O of one space.",
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
     "card": "a few numbers → O(1) space",
     "arrows": null
    },
    {
     "say": "Programmers hunt a bug this way. Which version first broke? Test the middle one, and halve.",
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
     "card": "which version first broke?",
     "arrows": null
    }
   ]
  }
 ]
};
