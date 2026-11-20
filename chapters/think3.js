window.CHAPTER = {
 "id": "think3",
 "title": "From Words to Code",
 "sub": "WARM-UP C · THINKING IN CODE",
 "key": "burrow-ch-think3",
 "next": {
  "href": "chapter.html?c=think4",
  "label": "Warm-up D: Test It, Break It, Fix It"
 },
 "prev": {
  "href": "chapter.html?c=think2",
  "label": "Warm-up B: Values, Copies and Changes"
 },
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "kc0",
   "label": "Welcome",
   "short": "Intro",
   "name": "Where do you even start?",
   "intro": "A task arrives as a paragraph of words and the editor is blank. A routine for getting from one to the other."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "kct1",
   "label": "Lesson 1",
   "short": "L1",
   "name": "In, out, and the rules",
   "intro": "Three questions, saying the task back, and one example by hand. One guess."
  },
  {
   "id": "t2",
   "kind": "lesson",
   "video": "kct2",
   "label": "Lesson 2",
   "short": "L2",
   "name": "Steps first, code last",
   "intro": "Plain-word steps, small enough to be obvious, in the order they need each other. One guess."
  }
 ],
 "notes": {
  "w": "<h3>The routine</h3><ol><li>What goes <b>in</b>?</li><li>What comes <b>out</b>?</li><li>What are the <b>rules</b>? (Read the examples closely.)</li>\n      <li><b>Say the task back</b> in your own words.</li><li>Do <b>one small example by hand</b>, then a nasty one.</li>\n      <li>Write the <b>steps in plain words</b>.</li><li><b>Translate</b> the steps into code.</li></ol>",
  "t1": "<h3>Key ideas</h3><ul><li><b>In:</b> how many inputs, of what kind, and what values are allowed (can it be empty? zero? negative?).</li>\n      <li><b>Out:</b> a number, a text, true/false, a list? Exactly in what form?</li>\n      <li><b>Rules:</b> the details hide in the examples (\"05\", not \"5\").</li>\n      <li><b>Saying it back</b> shows whether you understood it. If you cannot, read it again.</li>\n      <li><b>An example by hand</b> gives you the steps for free: you just did them.</li>\n      <li><b>Then try a nasty input</b> (exactly 60, zero, empty). You find the hard cases before writing code.</li></ul>",
  "t2": "<h3>Key ideas</h3><ul><li><b>Write the steps as plain sentences</b> (or comments) before any code.</li>\n      <li><b>A good step is one you already know how to do.</b> If it still feels hard, split it again.</li>\n      <li><b>Order comes from need:</b> a step goes after the steps whose results it uses.</li>\n      <li><b>Then translate:</b> usually one step becomes one line or one small loop.</li>\n      <li><b>When it breaks,</b> the steps tell you where to look.</li></ul>"
 },
 "quiz": {
  "kct1-q1": {
   "ask": "The film lasts exactly 60 minutes. Following the rules of the example, what is the label?",
   "opts": [
    "1 h 00 min",
    "1 h 0 min",
    "0 h 60 min"
   ],
   "right": 0,
   "why": "60 minutes is one whole hour with nothing left, and the minutes are always shown with two digits."
  },
  "kct2-q1": {
   "ask": "Step 4 joins the pieces into the label. What does it need from the earlier steps?",
   "opts": [
    "The hours, and the minutes as two digits",
    "Nothing: it could come first",
    "Only the original number"
   ],
   "right": 0,
   "why": "It uses the results of steps 1 and 3, so it has to come after both. Order comes from what each step needs."
  },
  "kc1s-q": {
   "ask": "String(5).padStart(2, \"0\") pads the text on the left with zeros until it is 2 characters long. What is the result?",
   "opts": [
    "\"05\"",
    "\"50\"",
    "\"5\""
   ],
   "right": 0,
   "why": "The zero goes at the start, so 5 becomes \"05\". A number that already has two digits is left alone."
  },
  "kc2s-q": {
   "ask": "The name is \"\". Splitting it gives [\"\"]: one empty word. What is word[0] for that word?",
   "opts": [
    "undefined: there is no first letter",
    "\"\"",
    "\" \""
   ],
   "right": 0,
   "why": "An empty text has no character at position 0. Calling toUpperCase() on undefined would crash."
  },
  "kc3s-q": {
   "ask": "The total is 55. The discount is Math.floor(55 / 10). How much is taken off?",
   "opts": [
    "5",
    "5.5",
    "6"
   ],
   "right": 0,
   "why": "55 / 10 is 5.5, and floor rounds down to 5."
  },
  "kc4s-q": {
   "ask": "The best so far is Pip with 70. Moss scored 40. What do lines 9 to 12 do?",
   "opts": [
    "Nothing: 40 is not higher than 70",
    "They make Moss the best",
    "They reset the best to nobody"
   ],
   "right": 0,
   "why": "The best is only replaced when a score is strictly higher than the top so far."
  }
 },
 "problems": [
  {
   "id": "kc1",
   "num": 1,
   "title": "The Film Label",
   "fn": "filmLabel",
   "ask": "Given the number of <b>minutes</b> a film lasts (0 or more), return a label such as <b>\"2 h 05 min\"</b>: whole hours, then the minutes that are left, always with <b>two digits</b>.",
   "spec": "filmLabel(125) → \"2 h 05 min\"      filmLabel(45) → \"0 h 45 min\"",
   "start": "// Before you type: what goes in, what comes out, what are the rules?\n// Then write your steps as comments, and only then the code.\nfunction filmLabel(minutes) {\n  // your code here\n}\n",
   "plan": [
    "In: one number. Out: a text. Which rule hides in the example \"05\"?",
    "Do 125 by hand. Which two numbers did you work out?",
    "Write your steps in words. Which step needs the result of another?"
   ],
   "hints": [
    "Whole hours: Math.floor(minutes / 60). What is left: minutes % 60.",
    "Two digits: String(rest).padStart(2, \"0\").",
    "Join them: hours + \" h \" + two + \" min\"."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      125
     ],
     "want": "2 h 05 min"
    },
    {
     "args": [
      45
     ],
     "want": "0 h 45 min"
    },
    {
     "args": [
      60
     ],
     "want": "1 h 00 min"
    },
    {
     "args": [
      0
     ],
     "want": "0 h 00 min"
    },
    {
     "args": [
      600
     ],
     "want": "10 h 00 min"
    },
    {
     "args": [
      119
     ],
     "want": "1 h 59 min"
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function filmLabel(minutes) {",
    "  const hours = Math.floor(minutes / 60);",
    "  const rest = minutes % 60;",
    "  const two = String(rest).padStart(2, '0');",
    "  return hours + ' h ' + two + ' min';",
    "}"
   ],
   "why": "Which of your tests would have caught a solution that forgets the two-digit rule?",
   "world": "Every screen that shows a duration does this. A film. A flight. A song.",
   "view": {
    "row": [
     125
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
    "rowLabel": "minutes",
    "row2Label": "parts",
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
     "say": "In, one number. Out, a text. The rule, two digits for the minutes.",
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
     "card": "in: a number · out: a text",
     "arrows": null
    },
    {
     "say": "Four steps. The hours. What is left. Make it two digits. Join.",
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
     "card": "hours · rest · two digits · join",
     "arrows": null
    },
    {
     "say": "Step one, on line two. How many whole sixties fit into one hundred and twenty five? Two.",
     "line": 2,
     "ptr": null,
     "hot": [
      0
     ],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d0": "2"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "step 1: floor(125 / 60) = 2",
     "arrows": null
    },
    {
     "say": "Step two, on line three. What is left over? The percent sign gives the remainder. Five.",
     "line": 3,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": {
      "d1": "5"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "step 2: 125 % 60 = 5",
     "arrows": null
    },
    {
     "say": "Step three. The rule said two digits. Five has only one. What does pad start do with it?",
     "line": 4,
     "ptr": null,
     "hot": [
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
     "box": null,
     "card": "step 3: \"5\" → two digits → ?",
     "arrows": null
    },
    {
     "say": "It puts a zero in front. Zero five.",
     "line": 4,
     "ptr": null,
     "hot": [],
     "ok": [
      "d2"
     ],
     "bad": [],
     "free": [],
     "set": {
      "d2": "05"
     },
     "swap": null,
     "move": null,
     "gone": [],
     "show": [],
     "vars": null,
     "box": null,
     "card": "two = \"05\"",
     "arrows": null
    },
    {
     "say": "Step four joins the pieces. It needs the hours from step one, and the two digits from step three. So it comes last.",
     "line": 5,
     "ptr": null,
     "hot": [],
     "ok": [
      "d0",
      "d2"
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
     "say": "Each step became one line. That is what good steps look like.",
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
     "card": "one step → one line",
     "arrows": null
    },
    {
     "say": "And the order came from need. Join needs the others. So join is last.",
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
     "card": "order comes from what a step needs",
     "arrows": null
    },
    {
     "say": "Every screen that shows a duration does this. A film. A flight. A song.",
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
     "card": "film, flight and song lengths",
     "arrows": null
    }
   ]
  },
  {
   "id": "kc2",
   "num": 2,
   "title": "Initials",
   "fn": "initials",
   "ask": "Given a name made of words separated by <b>single spaces</b>, return its initials: the <b>first letter of each word, in capitals, each followed by a dot</b>. An empty name gives an empty text.",
   "spec": "initials(\"pip the rabbit\") → \"P.T.R.\"      initials(\"moss\") → \"M.\"      initials(\"\") → \"\"",
   "start": "// Before you type: what goes in, what comes out, what are the rules?\n// Then write your steps as comments, and only then the code.\nfunction initials(name) {\n  // your code here\n}\n",
   "plan": [
    "In: one text. Out: one text. What exactly is done to each word?",
    "Do \"pip the rabbit\" by hand. What was your first move?",
    "Which input is the nasty one?"
   ],
   "hints": [
    "First split the text into words: name.split(\" \").",
    "For each word take word[0], make it a capital with toUpperCase(), and add a dot.",
    "An empty text splits into one empty word, so handle \"\" first."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      "pip the rabbit"
     ],
     "want": "P.T.R."
    },
    {
     "args": [
      "moss"
     ],
     "want": "M."
    },
    {
     "args": [
      ""
     ],
     "want": ""
    },
    {
     "args": [
      "hazel of burrow hill"
     ],
     "want": "H.O.B.H."
    },
    {
     "args": [
      "Pip"
     ],
     "want": "P."
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function initials(name) {",
    "  if (name === '') return '';",
    "  const words = name.split(' ');",
    "  let out = '';",
    "  for (const word of words) {",
    "    out += word[0].toUpperCase() + '.';",
    "  }",
    "  return out;",
    "}"
   ],
   "why": "Remove line 2 and run the empty name. Trace it: what is words, and where does it go wrong?",
   "world": "The circle with your initials in a chat app is made like this.",
   "view": {
    "row": [
     "pip",
     "the",
     "rabbit"
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
     "say": "By hand, you first saw three separate words. That is step one. Split the text into words.",
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
     "card": "step 1: split into words",
     "arrows": null
    },
    {
     "say": "Then the same small job for every word. First letter. Capital. Dot.",
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
     "card": "each word: first letter, capital, dot",
     "arrows": null
    },
    {
     "say": "Line three splits the name at the spaces. Three words.",
     "line": 3,
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
     "card": "split(\" \") → 3 words",
     "arrows": null
    },
    {
     "say": "The first word. Its first letter is p. As a capital, P. Add a dot.",
     "line": 6,
     "ptr": {
      "w": 0
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
     "vars": {
      "out": "\"P.\""
     },
     "box": null,
     "card": "\"pip\" → \"P.\"",
     "arrows": null
    },
    {
     "say": "The second word. T, and a dot.",
     "line": 6,
     "ptr": {
      "w": 1
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
      "out": "\"P.T.\""
     },
     "box": null,
     "card": "\"the\" → \"T.\"",
     "arrows": null
    },
    {
     "say": "The third word. R, and a dot. Line eight returns the result.",
     "line": 8,
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
      "out": "\"P.T.R.\""
     },
     "box": null,
     "card": "\"rabbit\" → \"R.\"",
     "arrows": null
    },
    {
     "say": "Now the nasty input. An empty name. Splitting it gives one word, which is empty. What is the first letter of an empty word?",
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
     "card": "empty name → word[0] → ?",
     "arrows": null
    },
    {
     "say": "There is none. So line two answers the empty name, before anything else runs.",
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
     "card": "",
     "arrows": null
    },
    {
     "say": "A big task became three small ones. Split. Loop. Build.",
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
     "card": "split · loop · build",
     "arrows": null
    },
    {
     "say": "The nasty input was found by asking: what if there is nothing?",
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
     "card": "always ask: what if it is empty?",
     "arrows": null
    },
    {
     "say": "The circle with your initials in a chat app is made like this.",
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
     "card": "the initials in a chat avatar",
     "arrows": null
    }
   ]
  },
  {
   "id": "kc3",
   "num": 3,
   "title": "The Receipt",
   "fn": "receiptTotal",
   "ask": "Each item has a <b>price</b> and a <b>qty</b> (how many). The total is the sum of price × qty. If that total is <b>50 or more</b>, take off a discount of <b>one tenth, rounded down</b>. Return the amount to pay.",
   "spec": "receiptTotal([{ price: 20, qty: 2 }, { price: 5, qty: 3 }]) → 50      (55, minus a discount of 5)",
   "start": "// Before you type: what goes in, what comes out, what are the rules?\n// Then write your steps as comments, and only then the code.\n// items is an array of objects such as { price: 20, qty: 2 }.\nfunction receiptTotal(items) {\n  // your code here\n}\n",
   "plan": [
    "In: a list of items. Out: one number. How many rules are there?",
    "Do the example by hand. Which number did you need before you could think about the discount?",
    "Write the steps. Which one must come first?"
   ],
   "hints": [
    "Step 1: add up price * qty over all the items.",
    "Step 2: only if the total is at least 50, subtract Math.floor(total / 10).",
    "Step 3: return the total."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       {
        "price": 20,
        "qty": 2
       },
       {
        "price": 5,
        "qty": 3
       }
      ]
     ],
     "want": 50
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
       {
        "price": 10,
        "qty": 1
       }
      ]
     ],
     "want": 10
    },
    {
     "args": [
      [
       {
        "price": 25,
        "qty": 2
       }
      ]
     ],
     "want": 45
    },
    {
     "args": [
      [
       {
        "price": 7,
        "qty": 7
       }
      ]
     ],
     "want": 49
    },
    {
     "args": [
      [
       {
        "price": 99,
        "qty": 1
       },
       {
        "price": 1,
        "qty": 4
       }
      ]
     ],
     "want": 93
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function receiptTotal(items) {",
    "  let total = 0;",
    "  for (const item of items) {",
    "    total += item.price * item.qty;",
    "  }",
    "  if (total >= 50) {",
    "    total -= Math.floor(total / 10);",
    "  }",
    "  return total;",
    "}"
   ],
   "why": "What would be wrong with applying the discount to each item inside the loop?",
   "world": "Every online shop does these two steps at the checkout. Add up the basket. Then apply the offer.",
   "view": {
    "row": [
     "20 × 2",
     "5 × 3"
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
      "id": "item",
      "row": 1
     }
    ],
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
     "say": "Two tasks are hiding in one. Add up the lines. And decide about the discount.",
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
     "card": "two tasks: add up · decide",
     "arrows": null
    },
    {
     "say": "The discount depends on the total. So the total comes first.",
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
     "card": "the discount needs the total",
     "arrows": null
    },
    {
     "say": "Total starts at zero.",
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
      "total": 0
     },
     "box": null,
     "card": "total = 0",
     "arrows": null
    },
    {
     "say": "The first line. Twenty times two. Forty.",
     "line": 4,
     "ptr": {
      "item": 0
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
     "vars": {
      "total": 40
     },
     "box": null,
     "card": "20 × 2 = 40",
     "arrows": null
    },
    {
     "say": "The second line. Five times three. Fifteen. Total, fifty five.",
     "line": 4,
     "ptr": {
      "item": 1
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
      "total": 55
     },
     "box": null,
     "card": "40 + 15 = 55",
     "arrows": null
    },
    {
     "say": "The loop is finished. Only now, line six asks about the discount. Fifty five is at least fifty. What is one tenth, rounded down?",
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
     "card": "55 ≥ 50 → floor(55 / 10) = ?",
     "arrows": null
    },
    {
     "say": "Five. So line seven takes five off. Fifty.",
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
     "vars": {
      "total": 50
     },
     "box": null,
     "card": "55 − 5 = 50",
     "arrows": null
    },
    {
     "say": "Line nine returns fifty.",
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
     "say": "When one rule depends on a number, work out that number completely first.",
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
     "card": "finish the total · then decide",
     "arrows": null
    },
    {
     "say": "Test just below and just at the limit. Forty nine, and fifty.",
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
     "card": "test 49 and 50: around the limit",
     "arrows": null
    },
    {
     "say": "Every online shop does these two steps at the checkout. Add up the basket. Then apply the offer.",
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
     "card": "the checkout of an online shop",
     "arrows": null
    }
   ]
  },
  {
   "id": "kc4",
   "num": 4,
   "title": "The Report Card",
   "fn": "report",
   "ask": "Each entry has a <b>name</b> and a <b>score</b> (0 to 100). Return an object with three fields: <b>passed</b> (how many scored 50 or more), <b>failed</b> (how many scored less), and <b>best</b> (the name with the highest score; the first one if there is a tie; null if the list is empty).",
   "spec": "report([{ name: \"Pip\", score: 70 }, { name: \"Moss\", score: 40 }, { name: \"Hazel\", score: 90 }]) → { passed: 2, failed: 1, best: \"Hazel\" }",
   "start": "// Before you type: what goes in, what comes out, what are the rules?\n// Then write your steps as comments, and only then the code.\n// scores is an array of objects such as { name: \"Pip\", score: 70 }.\nfunction report(scores) {\n  // your code here\n}\n",
   "plan": [
    "Out: one object with three fields. So how many small tasks are there?",
    "For \"best\": what must you remember while you walk the list?",
    "What should each of the three fields be for an empty list?"
   ],
   "hints": [
    "Three small tasks, all done in one walk over the list: count passes, count fails, track the best.",
    "For the best, keep two things: the highest score so far (start at -1) and whose it is (start at null).",
    "Only replace the best when a score is strictly higher, so that the first one wins a tie."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       {
        "name": "Pip",
        "score": 70
       },
       {
        "name": "Moss",
        "score": 40
       },
       {
        "name": "Hazel",
        "score": 90
       }
      ]
     ],
     "want": {
      "passed": 2,
      "failed": 1,
      "best": "Hazel"
     }
    },
    {
     "args": [
      []
     ],
     "want": {
      "passed": 0,
      "failed": 0,
      "best": null
     }
    },
    {
     "args": [
      [
       {
        "name": "Pip",
        "score": 50
       }
      ]
     ],
     "want": {
      "passed": 1,
      "failed": 0,
      "best": "Pip"
     }
    },
    {
     "args": [
      [
       {
        "name": "A",
        "score": 80
       },
       {
        "name": "B",
        "score": 80
       }
      ]
     ],
     "want": {
      "passed": 2,
      "failed": 0,
      "best": "A"
     }
    },
    {
     "args": [
      [
       {
        "name": "Moss",
        "score": 0
       },
       {
        "name": "Pip",
        "score": 49
       }
      ]
     ],
     "want": {
      "passed": 0,
      "failed": 2,
      "best": "Pip"
     }
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": null,
   "post": null,
   "solution": [
    "function report(scores) {",
    "  let passed = 0;",
    "  let failed = 0;",
    "  let best = null;",
    "  let top = -1;",
    "  for (const s of scores) {",
    "    if (s.score >= 50) passed++;",
    "    else failed++;",
    "    if (s.score > top) {",
    "      top = s.score;",
    "      best = s.name;",
    "    }",
    "  }",
    "  return { passed, failed, best };",
    "}"
   ],
   "why": "Change > on line 9 to >=. Which test fails, and which sentence of the task does that test come from?",
   "world": "The summary at the top of any dashboard is built this way. A few counters, and a best, in one pass over the data.",
   "view": {
    "row": [
     "Pip 70",
     "Moss 40",
     "Hazel 90"
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
      "id": "s",
      "row": 1
     }
    ],
    "vars": [
     "passed",
     "failed"
    ],
    "box": {
     "title": "best so far",
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
     "say": "Three answers. So three small tasks. Count the passes. Count the fails. And remember the best.",
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
     "card": "count passes · count fails · best",
     "arrows": null
    },
    {
     "say": "Each one needs only one or two variables. And all three can be done in the same walk.",
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
     "card": "one walk · a few variables",
     "arrows": null
    },
    {
     "say": "Lines two to five set up the memory. Two counters. And the best so far, which is nobody yet.",
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
     "vars": {
      "passed": 0,
      "failed": 0
     },
     "box": [
      "nobody yet"
     ],
     "card": "counters at 0 · best: nobody",
     "arrows": null
    },
    {
     "say": "Pip, seventy. At least fifty. A pass. And seventy beats the best so far.",
     "line": 11,
     "ptr": {
      "s": 0
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
     "vars": {
      "passed": 1
     },
     "box": [
      "Pip, 70"
     ],
     "card": "pass · best: Pip, 70",
     "arrows": null
    },
    {
     "say": "Moss, forty. Below fifty. A fail. Does forty beat seventy?",
     "line": 9,
     "ptr": {
      "s": 1
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
     "vars": {
      "failed": 1
     },
     "box": null,
     "card": "fail · 40 > 70 → ?",
     "arrows": null
    },
    {
     "say": "No. So the best stays Pip.",
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
     "box": [
      "Pip, 70"
     ],
     "card": "best stays Pip",
     "arrows": null
    },
    {
     "say": "Hazel, ninety. A pass. And ninety beats seventy.",
     "line": 11,
     "ptr": {
      "s": 2
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
      "passed": 2
     },
     "box": [
      "Hazel, 90"
     ],
     "card": "pass · best: Hazel, 90",
     "arrows": null
    },
    {
     "say": "Line fourteen packs the three answers into one object.",
     "line": 14,
     "ptr": null,
     "hot": [],
     "ok": [],
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
     "say": "A task that sounds big is often several small tasks, side by side.",
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
     "card": "big task = small tasks side by side",
     "arrows": null
    },
    {
     "say": "For each small task, ask: what do I need to remember?",
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
     "card": "what must I remember?",
     "arrows": null
    },
    {
     "say": "The summary at the top of any dashboard is built this way. A few counters, and a best, in one pass over the data.",
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
     "card": "the summary on a dashboard",
     "arrows": null
    }
   ]
  }
 ]
};
