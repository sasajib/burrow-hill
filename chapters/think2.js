window.CHAPTER = {
 "id": "think2",
 "title": "Values, Copies and Changes",
 "sub": "WARM-UP B · THINKING IN CODE",
 "key": "burrow-ch-think2",
 "next": {
  "href": "chapter.html?c=think3",
  "label": "Warm-up C: From Words to Code"
 },
 "prev": {
  "href": "chapter.html?c=think1",
  "label": "Warm-up A: Be the Computer"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "kb0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Who else is holding this?",
   "intro": "You change one list and another one changes too. Why that happens, and how to stay in control of it."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "kbt1",
   "label": "Lesson 1",
   "short": "L1",
   "name": "A name is a label",
   "intro": "Two names, one array. What a real copy is, and how deep it goes. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "kbt2",
   "label": "Lesson 2",
   "short": "L2",
   "name": "Functions that change things",
   "intro": "Changing what you were given, or returning something new. And the difference between moving a label and changing the thing. One guess."
  }
 ],
 "notes": {
  "w": "<h3>The idea</h3><ul><li><b>A name is not the thing.</b> It is a label tied to the thing.</li>\n      <li><b>Two labels can be tied to one array or object.</b> A change made through one is seen through the other.</li>\n      <li><b>Before you change anything, ask:</b> who else holds a label to this?</li></ul>",
  "t1": "<h3>Key ideas</h3><ul><li><b><code>const b = a</code> makes no copy</b> of an array or object. It ties a second label to the same one.</li>\n      <li><b>A real copy:</b> <code>[...a]</code> for arrays, <code>{ ...obj }</code> for objects.</li>\n      <li><b>That copy is one level deep.</b> Inner arrays and objects are still shared.</li>\n      <li><b>Numbers, strings and booleans</b> are always copied as separate values.</li>\n      <li><b><code>const</code></b> stops the label from being re-tied. It does not stop the array from being changed.</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>Passing an array to a function</b> ties one more label to it. No copy is made.</li>\n      <li><b>A side effect</b> is a change that can be seen outside the function, such as pushing into the caller's array.</li>\n      <li><b>Read the task:</b> \"change it in place\" or \"return a new one\". Then do exactly that.</li>\n      <li><b>Changing the thing</b> (<code>list.push(1)</code>, <code>list[0] = 5</code>) is seen by the caller. <b>Moving the label</b> (<code>list = [...]</code>) is not.</li>\n      <li><b><code>for (let x of nums) x = 0</code></b> changes only the loop's own copy of each number. To write into the array, use the index.</li></ul>"
 },
 "quiz": {
  "kbt1-q1": {
   "ask": "a holds two inner arrays and c = [...a]. You run c[0].push(9). Does a[0] change?",
   "opts": [
    "Yes: a and c hold the same inner array",
    "No: c is a complete copy",
    "Only if a was declared with let"
   ],
   "right": 0,
   "why": "The spread copies one level: a new outer array, holding the very same inner arrays."
  },
  "kbt2-q1": {
   "ask": "Inside a function you write: list = [0, 0, 0]. What happens to the array the caller passed in?",
   "opts": [
    "Nothing: only the function's own label moved",
    "It becomes [0, 0, 0]",
    "It is emptied"
   ],
   "right": 0,
   "why": "Assigning to the parameter re-ties the function's label to a new array. The caller's label still points at the old one."
  },
  "kb1s-q": {
   "ask": "The old code runs nums.sort(...). Which array is re-ordered?",
   "opts": [
    "The caller's own array: no copy was ever made",
    "A new array",
    "Nothing until it is returned"
   ],
   "right": 0,
   "why": "Passing an array to a function only ties another label to it. Sorting through that label re-orders the one and only array."
  },
  "kb2s-q": {
   "ask": "The old grid was built with new Array(2).fill(row). You run grid[0][0] = 7. What is the grid now?",
   "opts": [
    "[[7, 0], [7, 0]]: both rows are the same array",
    "[[7, 0], [0, 0]]",
    "[[7, 7], [0, 0]]"
   ],
   "right": 0,
   "why": "fill(row) puts the SAME array into every slot. Writing through one label is seen through the other."
  },
  "kb3s-q": {
   "ask": "The old code runs player.score = player.score + 1 on the object it was given. What does the caller's own object show afterwards?",
   "opts": [
    "score 3: it is the same object",
    "score 2: the function had its own copy",
    "It has no score any more"
   ],
   "right": 0,
   "why": "No copy is made when an object is passed to a function. The function and the caller hold the same object."
  },
  "kb4s-q": {
   "ask": "x holds a copy of nums[0], which is 4. The old code runs x = 0. What is nums[0] now?",
   "opts": [
    "Still 4: only the copy changed",
    "0",
    "undefined"
   ],
   "right": 0,
   "why": "Numbers are copied by value. Changing x does not reach back into the array."
  }
 },
 "problems": [
  {
   "id": "kb1",
   "num": 1,
   "title": "Sorted, Hands Off",
   "fn": "sortedCopy",
   "ask": "Return the numbers <b>sorted, smallest first, as a new array</b>. The array you were given <b>must not change</b>. The code below returns the right answer, and still fails. Why?",
   "spec": "sortedCopy([3, 1, 2]) → [1, 2, 3]      and the array that was passed in is still [3, 1, 2]",
   "start": "// This code is nearly right. Work out what it changes before you edit anything.\nfunction sortedCopy(nums) {\n  nums.sort((a, b) => a - b);\n  return nums;\n}\n",
   "plan": [
    "What does .sort() do to the array it is called on?",
    "How many arrays exist while the old code runs?",
    "What do you need, so that sorting cannot reach the caller's array?"
   ],
   "hints": [
    ".sort() sorts the array in place: the caller's array is re-ordered.",
    "Make a real copy first: const copy = [...nums].",
    "Sort the copy and return it."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       3,
       1,
       2
      ]
     ],
     "want": {
      "out": [
       1,
       2,
       3
      ],
      "input": [
       3,
       1,
       2
      ]
     }
    },
    {
     "args": [
      []
     ],
     "want": {
      "out": [],
      "input": []
     }
    },
    {
     "args": [
      [
       5
      ]
     ],
     "want": {
      "out": [
       5
      ],
      "input": [
       5
      ]
     }
    },
    {
     "args": [
      [
       2,
       2,
       1
      ]
     ],
     "want": {
      "out": [
       1,
       2,
       2
      ],
      "input": [
       2,
       2,
       1
      ]
     }
    },
    {
     "args": [
      [
       9,
       -1,
       4,
       0
      ]
     ],
     "want": {
      "out": [
       -1,
       0,
       4,
       9
      ],
      "input": [
       9,
       -1,
       4,
       0
      ]
     }
    }
   ],
   "check": "const before = args[0], want2 = [...before].sort((a, b) => a - b); if (!got || !Array.isArray(got.out)) return 'Return an array.'; if (!(JSON.stringify(got.input) === JSON.stringify(before))) return 'The array you were given was changed. Sort a copy, not the original.'; return JSON.stringify(got.out) === JSON.stringify(want2) ? '' : 'The returned array is not sorted correctly.';",
   "forbid": [],
   "big": null,
   "prep": null,
   "post": "return { out: got, input: args[0] };",
   "solution": [
    "function sortedCopy(nums) {",
    "  const copy = [...nums];",
    "  copy.sort((a, b) => a - b);",
    "  return copy;",
    "}"
   ],
   "why": "The old code returned the right values. Describe a program in which its hidden change would cause a real bug.",
   "world": "A table on a web page that you sort by price. If the code sorts the original list, every other view of that list changes too.",
   "view": {
    "row": [
     3,
     1,
     2
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
    "row2Label": "copy",
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
     "say": "Sort does not make a new array. It re-orders the array it is called on.",
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
     "card": "sort changes the array itself",
     "arrows": null
    },
    {
     "say": "And nums is the caller's array. So make a real copy first, and sort that.",
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
     "card": "copy first · then sort the copy",
     "arrows": null
    },
    {
     "say": "The old code called sort on nums. Whose array is that?",
     "line": 1,
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
     "vars": null,
     "box": null,
     "card": "old code: nums.sort() → whose array?",
     "arrows": null
    },
    {
     "say": "The caller's. No copy was made. So their row became one, two, three, behind their back.",
     "line": 1,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      0,
      1,
      2
     ],
     "free": [],
     "set": {
      "0": 1,
      "1": 2,
      "2": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "the caller's row was re-ordered",
     "arrows": null
    },
    {
     "say": "The fix starts on line two. The three dots spread the numbers into a new array.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [
      0,
      1,
      2
     ],
     "set": {
      "0": 3,
      "1": 1,
      "2": 2,
      "d0": 3,
      "d1": 1,
      "d2": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "copy = [...nums] · a second array",
     "arrows": null
    },
    {
     "say": "Line three sorts the copy. Only the copy.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [
      "d0",
      "d1",
      "d2"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d0": 1,
      "d1": 2,
      "d2": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "sort the copy",
     "arrows": null
    },
    {
     "say": "Line four returns it. And the original row is untouched.",
     "line": 4,
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
     "card": "",
     "arrows": null
    },
    {
     "say": "Sort, reverse, push, pop and splice all change the array they are called on.",
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
     "card": "sort, reverse, push change the array",
     "arrows": null
    },
    {
     "say": "If you must not change the input, copy before you touch it.",
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
     "card": "must not change it → copy first",
     "arrows": null
    },
    {
     "say": "A table on a web page that you sort by price. If the code sorts the original list, every other view of that list changes too.",
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
     "card": "sorting a table on a web page",
     "arrows": null
    }
   ]
  },
  {
   "id": "kb2",
   "num": 2,
   "title": "A Grid of Zeros",
   "fn": "makeGrid",
   "ask": "Return a grid with <b>rows × cols</b> zeros, as an array of rows. The rows must be <b>separate arrays</b>: the tests write a 7 into the top-left square of your grid, and only that square may change.",
   "spec": "makeGrid(2, 2) → [[0, 0], [0, 0]]      after grid[0][0] = 7 it must be [[7, 0], [0, 0]]",
   "start": "// This code is nearly right. Work out what it changes before you edit anything.\nfunction makeGrid(rows, cols) {\n  const row = new Array(cols).fill(0);\n  return new Array(rows).fill(row);\n}\n",
   "plan": [
    "How many row arrays does the old code create?",
    "What does .fill(row) put into each slot of the outer array?",
    "What must happen once per row instead?"
   ],
   "hints": [
    "The old code makes ONE row array, and fills the grid with labels to it.",
    "So writing into one row shows up in every row.",
    "Use a loop, and create a new row array inside it, once per row."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      2,
      2
     ],
     "want": [
      [
       7,
       0
      ],
      [
       0,
       0
      ]
     ]
    },
    {
     "args": [
      3,
      1
     ],
     "want": [
      [
       7
      ],
      [
       0
      ],
      [
       0
      ]
     ]
    },
    {
     "args": [
      1,
      3
     ],
     "want": [
      [
       7,
       0,
       0
      ]
     ]
    },
    {
     "args": [
      0,
      2
     ],
     "want": []
    },
    {
     "args": [
      2,
      3
     ],
     "want": [
      [
       7,
       0,
       0
      ],
      [
       0,
       0,
       0
      ]
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": "if (got && got.length && got[0] && got[0].length) got[0][0] = 7; return got;",
   "solution": [
    "function makeGrid(rows, cols) {",
    "  const grid = [];",
    "  for (let r = 0; r < rows; r++) {",
    "    grid.push(new Array(cols).fill(0));",
    "  }",
    "  return grid;",
    "}"
   ],
   "why": "fill(0) with a number is fine, but fill(row) with an array is not. What is the difference?",
   "world": "A calendar that copies one empty week into every row. Add a meeting on Monday, and it shows up in every week.",
   "view": {
    "row": [],
    "tree": null,
    "grid": [
     [
      0,
      0
     ],
     [
      0,
      0
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
     "say": "The old code made one row. Then it filled the grid with that same row, again and again.",
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
     "card": "one row · two labels to it",
     "arrows": null
    },
    {
     "say": "So the grid does not hold two rows. It holds two labels, tied to one row.",
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
     "card": "the grid holds labels, not copies",
     "arrows": null
    },
    {
     "say": "It looks like a grid of four zeros. Now write a seven into the top left square. What does the grid show?",
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
     "card": "old code: grid[0][0] = 7 → ?",
     "arrows": null
    },
    {
     "say": "Both rows show the seven. Because there is only one row.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      0,
      2
     ],
     "free": [],
     "set": {
      "0": 7,
      "2": 7
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "both rows changed: they are one",
     "arrows": null
    },
    {
     "say": "The fix. A loop that runs once per row. And inside it, line four creates a brand new array, every turn.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [
      0,
      1
     ],
     "bad": [],
     "free": [
      0,
      2
     ],
     "set": {
      "0": 0,
      "2": 0
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "a NEW array on every turn",
     "arrows": null
    },
    {
     "say": "The second turn makes a second, separate row.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [
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
     "card": "row 2: its own array",
     "arrows": null
    },
    {
     "say": "Now the seven lands in one square only.",
     "line": 6,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "0": 7
     },
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
     "say": "Fill with a number is fine. Numbers are copied. Fill with an array is a trap. The same array goes everywhere.",
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
     "card": "fill(0) fine · fill(array) shared",
     "arrows": null
    },
    {
     "say": "Anything that must be separate, has to be created separately. Once per turn.",
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
     "card": "separate things: create each one",
     "arrows": null
    },
    {
     "say": "A calendar that copies one empty week into every row. Add a meeting on Monday, and it shows up in every week.",
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
     "card": "a meeting in every week",
     "arrows": null
    }
   ]
  },
  {
   "id": "kb3",
   "num": 3,
   "title": "One More Point",
   "fn": "addPoint",
   "ask": "A player is an object such as { name: \"Pip\", score: 2 }. Return a <b>new</b> player object with the score one higher. The object you were given <b>must not change</b>, and any other fields must be kept.",
   "spec": "addPoint({ name: \"Pip\", score: 2 }) → { name: \"Pip\", score: 3 }      and the original still has score 2",
   "start": "// This code is nearly right. Work out what it changes before you edit anything.\nfunction addPoint(player) {\n  player.score = player.score + 1;\n  return player;\n}\n",
   "plan": [
    "How many player objects exist while the old code runs?",
    "How do you make a second object with the same fields?",
    "Where does the new score go?"
   ],
   "hints": [
    "The old code changes the caller's object and hands the same object back.",
    "{ ...player } makes a new object with the same fields.",
    "Add the changed field after the spread: { ...player, score: player.score + 1 }."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      {
       "name": "Pip",
       "score": 2
      }
     ],
     "want": {
      "out": {
       "name": "Pip",
       "score": 3
      },
      "input": {
       "name": "Pip",
       "score": 2
      },
      "same": false
     }
    },
    {
     "args": [
      {
       "name": "Moss",
       "score": 0
      }
     ],
     "want": {
      "out": {
       "name": "Moss",
       "score": 1
      },
      "input": {
       "name": "Moss",
       "score": 0
      },
      "same": false
     }
    },
    {
     "args": [
      {
       "name": "Hazel",
       "score": 9,
       "team": "red"
      }
     ],
     "want": {
      "out": {
       "name": "Hazel",
       "score": 10,
       "team": "red"
      },
      "input": {
       "name": "Hazel",
       "score": 9,
       "team": "red"
      },
      "same": false
     }
    }
   ],
   "check": "const before = args[0]; if (!got || !got.out || typeof got.out !== 'object') return 'Return a player object.'; if (got.same) return 'You returned the very same object you were given. Return a new one.'; if (!(JSON.stringify(got.input) === JSON.stringify(before))) return 'The player you were given was changed.'; const exp = { ...before, score: before.score + 1 }; return JSON.stringify(got.out) === JSON.stringify(exp) ? '' : 'The new player should have every field of the old one, with the score one higher.';",
   "forbid": [],
   "big": null,
   "prep": null,
   "post": "return { out: got, input: args[0], same: got === args[0] };",
   "solution": [
    "function addPoint(player) {",
    "  return { ...player, score: player.score + 1 };",
    "}"
   ],
   "why": "In { ...player, score: player.score + 1 } the order matters. What happens if the spread comes last?",
   "world": "An undo button depends on this. If every change makes a new object, the old one is still there to go back to.",
   "view": {
    "row": [
     "Pip",
     2
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
    "rowLabel": "old",
    "row2Label": "new",
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
     "say": "The old code wrote into the card it was given. And handed the same card back.",
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
     "card": "old code: one card, changed",
     "arrows": null
    },
    {
     "say": "Make a second card instead. Copy every field. Then set the one that changes.",
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
     "card": "copy the fields · change one",
     "arrows": null
    },
    {
     "say": "The old code wrote the new score into player. So what does the caller's card say now?",
     "line": 2,
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
     "card": "old code: player.score = 3 → ?",
     "arrows": null
    },
    {
     "say": "Three. It is the same card. The old score is gone.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      1
     ],
     "free": [],
     "set": {
      "1": 3
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "the caller's card was changed",
     "arrows": null
    },
    {
     "say": "The fix. The curly brackets on line two make a new object. The three dots copy every field of the old one into it.",
     "line": 2,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [
      1
     ],
     "set": {
      "1": 2,
      "d0": "Pip",
      "d1": 2
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "{ ...player } → a second card",
     "arrows": null
    },
    {
     "say": "Then score is written again, after the copy. Two plus one. It replaces the copied two.",
     "line": 2,
     "ptr": null,
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
     "box": null,
     "card": "score: 2 + 1 → 3, in the new card",
     "arrows": null
    },
    {
     "say": "The new card is returned. And the old one still says two.",
     "line": 2,
     "ptr": null,
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
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "Curly brackets with three dots copy an object, one level deep. Just like the square brackets do for an array.",
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
     "card": "{ ...obj } copies one level",
     "arrows": null
    },
    {
     "say": "Later fields win. So the changed field goes after the spread.",
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
     "card": "the changed field goes last",
     "arrows": null
    },
    {
     "say": "An undo button depends on this. If every change makes a new object, the old one is still there to go back to.",
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
     "card": "undo: the old version survives",
     "arrows": null
    }
   ]
  },
  {
   "id": "kb4",
   "num": 4,
   "title": "Clear the Row",
   "fn": "clearAll",
   "ask": "This time you <b>must change the array you were given</b>: set every item to 0, and return nothing. The code below runs without an error and changes nothing. Why?",
   "spec": "const a = [4, 7, 1]; clearAll(a);      afterwards a is [0, 0, 0]",
   "start": "// This code is nearly right. Work out what it changes before you edit anything.\nfunction clearAll(nums) {\n  for (let x of nums) {\n    x = 0;\n  }\n}\n",
   "plan": [
    "In the old loop, what is x: a door of the row, or something else?",
    "What does x = 0 change?",
    "How do you write into door number i of an array?"
   ],
   "hints": [
    "x is a new variable that receives a COPY of each number.",
    "x = 0 changes that copy. The array is never written to.",
    "Loop with an index and write through it: nums[i] = 0."
   ],
   "mode": "inplace",
   "tests": [
    {
     "args": [
      [
       4,
       7,
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
       0,
       2
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
       -3,
       3,
       9,
       1
      ]
     ],
     "want": [
      0,
      0,
      0,
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
    "function clearAll(nums) {",
    "  for (let i = 0; i < nums.length; i++) {",
    "    nums[i] = 0;",
    "  }",
    "}"
   ],
   "why": "With an array of objects, for (const p of players) p.score = 0 DOES change the objects. Why does it work there and not with numbers?",
   "world": "Marking every notification as read. If the code only changes its own copies, the little red badge never goes away.",
   "view": {
    "row": [
     4,
     7,
     1
    ],
    "tree": null,
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "nums",
    "row2Label": "",
    "ptrs": [
     {
      "id": "i",
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
     "say": "In the old loop, x was not a door of the row. It was a new variable, holding a copy of the number.",
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
     "card": "x is a copy of the number",
     "arrows": null
    },
    {
     "say": "To change the row, you have to write into the row. Through its index.",
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
     "card": "write into the row: nums[i] = …",
     "arrows": null
    },
    {
     "say": "The old loop. X receives a copy of the first number. Four.",
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
     "vars": {
      "x": 4
     },
     "box": null,
     "card": "old code: x = a copy of 4",
     "arrows": null
    },
    {
     "say": "Then x is set to zero. What is in the row now?",
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
      "x": 0
     },
     "box": null,
     "card": "old code: x = 0 → the row?",
     "arrows": null
    },
    {
     "say": "Still four. Only the copy changed. The row was never written to.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      0
     ],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "the row still holds 4",
     "arrows": null
    },
    {
     "say": "The fix. Loop with an index. Line three writes zero into door i, of the row itself.",
     "line": 3,
     "ptr": {
      "i": 0
     },
     "hot": [],
     "ok": [
      0
     ],
     "bad": [],
     "free": [
      0
     ],
     "set": {
      "0": 0
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "nums[0] = 0",
     "arrows": null
    },
    {
     "say": "Then door one. And door two.",
     "line": 3,
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
     "set": {
      "1": 0,
      "2": 0
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "nums[1] = 0 · nums[2] = 0",
     "arrows": null
    },
    {
     "say": "The function returns nothing. The caller's own row is now all zeros.",
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
     "card": "",
     "arrows": null
    },
    {
     "say": "A loop variable holding a number is a copy. Assigning to it changes nothing outside.",
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
     "card": "x = 0 changes a copy",
     "arrows": null
    },
    {
     "say": "In place means: write through the index, or call a method that changes the array.",
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
     "card": "in place → nums[i] = …",
     "arrows": null
    },
    {
     "say": "Marking every notification as read. If the code only changes its own copies, the little red badge never goes away.",
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
     "card": "mark all as read, for real",
     "arrows": null
    }
   ]
  }
 ]
};
