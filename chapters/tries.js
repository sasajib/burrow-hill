window.CHAPTER = {
 "id": "tries",
 "title": "Tries",
 "sub": "CHAPTER 17 · TRIES",
 "key": "burrow-ch-tries",
 "next": {
  "href": "chapter.html?c=mixed3",
  "label": "Mixed set 3"
 },
 "prev": {
  "href": "chapter.html?c=heaps",
  "label": "Chapter 16: Heaps"
 },
 "mock": false,
 "target": null,
 "stages": [
  {
   "id": "w",
   "kind": "lesson",
   "video": "tt0",
   "label": "Welcome",
   "short": "Intro",
   "name": "A tree for words",
   "intro": "What a trie is for: questions about how words begin."
  },
  {
   "id": "t1",
   "kind": "lesson",
   "video": "ttt1",
   "label": "Theory",
   "short": "T1",
   "name": "Words that share a path",
   "intro": "How a trie stores words letter by letter, why it needs an end mark, and what a lookup costs. One guess."
  }
 ],
 "notes": {
  "w": "<h3>Why a trie</h3><ul><li><b>A trie (say \"try\") stores words as paths of letters from a root.</b> Words with the same beginning share the same path.</li>\n      <li><b>Signals:</b> \"starts with\", prefixes, autocomplete, a dictionary of words searched letter by letter.</li></ul>",
  "t1": "<h3>Key ideas</h3><ul><li><b>A node:</b> <code>{ kids: {}, end: false }</code>. kids maps a letter to the next node.</li>\n      <li><b>The end mark matters:</b> \"ca\" is a path in a trie holding \"car\", but it is only a word if a node says a word ends there.</li>\n      <li><b>Add a word:</b> walk down letter by letter, creating a node whenever a letter is missing; mark the last node.</li>\n      <li><b>Look up a word or a prefix:</b> walk down letter by letter; a missing letter means it is not there.</li>\n      <li><b>Cost: O(length of the word)</b>, no matter how many words are stored. A hash set can also find a whole word that fast, but it cannot answer \"which words start with…\".</li></ul>"
 },
 "quiz": {
  "ttt1-q1": {
   "ask": "The trie holds car, cat and do. You look up \"dog\". What happens?",
   "opts": [
    "d and o are found, but o has no child g: not there",
    "It is found, because \"do\" is in the trie",
    "The search fails at once on the letter d"
   ],
   "right": 0,
   "why": "The walk follows d, then o. For g there is no node under o, so the word is not in the trie."
  },
  "tt1s-q": {
   "ask": "The marker is on the node o (from \"do\"). The next letter is t. What does the code do?",
   "opts": [
    "Creates a new node t under o",
    "Follows the t that is under a",
    "Returns: the word cannot be added"
   ],
   "right": 0,
   "why": "node.kids[\"t\"] does not exist for this node. The t under a belongs to a different path (cat)."
  },
  "tt2s-q": {
   "ask": "Every letter of \"ca\" was found, and the marker is on the node a. That node is not marked as the end of a word. What is returned?",
   "opts": [
    "false",
    "true",
    "undefined"
   ],
   "right": 0,
   "why": "node.end is false here: car and cat pass through this node, but no word stops on it."
  },
  "tt3s-q": {
   "ask": "The walk is on the node r with text \"car\", and a word ends on this node. What does line 9 do?",
   "opts": [
    "Adds \"car\" to out",
    "Adds \"r\" to out",
    "Nothing"
   ],
   "right": 0,
   "why": "at.end is true, so the text spelled on the way down, \"car\", is pushed."
  }
 },
 "problems": [
  {
   "id": "tt1",
   "num": 1,
   "title": "A New Word",
   "fn": "addWord",
   "ask": "Add <b>word</b> to the trie and return the root. Reuse the nodes that are already there, create the missing ones, and mark where the word ends. (The tests list the words in the trie afterwards.)",
   "spec": "addWord(trie of car, cat, do, \"dot\") → a trie of car, cat, do, dot",
   "start": "// A trie node is { kids: {}, end: false }. kids maps a letter to the next node,\n// and end is true when a word stops on this node. root is the empty starting node.\nfunction addWord(root, word) {\n  // your code here\n}\n",
   "plan": [
    "Add \"dot\" by hand to a trie holding car, cat and do. Which letters already had a node?",
    "What do you do when a letter has no node yet?",
    "After the last letter, what still has to be recorded?"
   ],
   "hints": [
    "Keep a marker, node, starting on the root. Go through the word letter by letter.",
    "If node.kids[ch] does not exist, create it: { kids: {}, end: false }. Then move the marker into it.",
    "After the loop the marker is on the last letter: set node.end = true. Return root."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       "car",
       "cat",
       "do"
      ],
      "dot"
     ],
     "want": [
      "car",
      "cat",
      "do",
      "dot"
     ]
    },
    {
     "args": [
      [],
      "a"
     ],
     "want": [
      "a"
     ]
    },
    {
     "args": [
      [
       "ab"
      ],
      "a"
     ],
     "want": [
      "a",
      "ab"
     ]
    },
    {
     "args": [
      [
       "a"
      ],
      "ab"
     ],
     "want": [
      "a",
      "ab"
     ]
    },
    {
     "args": [
      [
       "cat"
      ],
      "cat"
     ],
     "want": [
      "cat"
     ]
    },
    {
     "args": [
      [
       "car"
      ],
      "do"
     ],
     "want": [
      "car",
      "do"
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "const mkT = (ws) => { const r = { kids: {}, end: false }; for (const w of ws) { let n = r; for (const c of w) { n = n.kids[c] = n.kids[c] || { kids: {}, end: false }; } n.end = true; } return r; }; return [mkT(args[0]), ...args.slice(1)];",
   "post": "if (got === undefined) return 'nothing was returned'; const out = []; const go = (n, t) => { if (n.end) out.push(t); for (const c of Object.keys(n.kids).sort()) go(n.kids[c], t + c); }; go(got, ''); return out;",
   "solution": [
    "function addWord(root, word) {",
    "  let node = root;",
    "  for (const ch of word) {",
    "    if (!node.kids[ch]) {",
    "      node.kids[ch] = { kids: {}, end: false };",
    "    }",
    "    node = node.kids[ch];",
    "  }",
    "  node.end = true;",
    "  return root;",
    "}"
   ],
   "why": "Adding \"a\" to a trie that holds \"ab\" creates no new node. What does change?",
   "topic": null,
   "world": "Every contact you save is added to a structure like this, so your phone can search by first letters.",
   "view": {
    "row": [],
    "tree": [
     "·",
     "c",
     "d",
     "a",
     null,
     "o",
     null,
     "r",
     "t",
     null,
     null,
     "t"
    ],
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [
     11
    ],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "node",
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
     "say": "Walk down the trie, letter by letter. If the letter already has a node, follow it.",
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
     "card": "the letter has a node → follow it",
     "arrows": null
    },
    {
     "say": "If it does not, make the node. And after the last letter, mark that a word ends here.",
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
     "card": "no node → make one · mark the end",
     "arrows": null
    },
    {
     "say": "Adding dot. The green nodes are where a word ends. Car, cat, and do. The marker starts on the root.",
     "line": 2,
     "ptr": {
      "node": 0
     },
     "hot": [],
     "ok": [
      7,
      8,
      5
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
     "card": "green = a word ends here",
     "arrows": null
    },
    {
     "say": "The letter d. The root already has a child d. So line seven just follows it.",
     "line": 7,
     "ptr": {
      "node": 2
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
     "card": "\"d\" is there → follow it",
     "arrows": null
    },
    {
     "say": "The letter o. Already there, too. Follow it.",
     "line": 7,
     "ptr": {
      "node": 5
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
     "card": "\"o\" is there → follow it",
     "arrows": null
    },
    {
     "say": "The letter t. There is a t in the trie, under the a. But does this node, the o, have a child t?",
     "line": 4,
     "ptr": null,
     "hot": [
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
     "vars": null,
     "box": null,
     "card": "does \"o\" have a child \"t\"?",
     "arrows": null
    },
    {
     "say": "No. That other t belongs to cat. So line five makes a new node, under the o, and the marker moves into it.",
     "line": 7,
     "ptr": {
      "node": 11
     },
     "hot": [],
     "ok": [],
     "bad": [],
     "free": [],
     "set": null,
     "swap": null,
     "move": null,
     "gone": [],
     "show": [
      11
     ],
     "vars": null,
     "box": null,
     "card": "no → make a new node",
     "arrows": null
    },
    {
     "say": "The word is finished. Line nine marks the end of a word here.",
     "line": 9,
     "ptr": null,
     "hot": [],
     "ok": [
      11
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
     "card": "end = true",
     "arrows": null
    },
    {
     "say": "Line ten returns the root. Dot is in the trie.",
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
     "card": "",
     "arrows": null
    },
    {
     "say": "One step per letter. O of the length of the word.",
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
     "card": "one step per letter → O(length)",
     "arrows": null
    },
    {
     "say": "At most one new node per letter.",
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
     "card": "new nodes ≤ length of the word",
     "arrows": null
    },
    {
     "say": "Every contact you save is added to a structure like this, so your phone can search by first letters.",
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
     "card": "saving a contact for search",
     "arrows": null
    }
   ]
  },
  {
   "id": "tt2",
   "num": 2,
   "title": "Is It a Word?",
   "fn": "hasWord",
   "ask": "Return <b>true</b> if <b>word</b> was added to the trie as a whole word. A path that exists is not enough: \"ca\" is not a word in a trie that holds only \"car\" and \"cat\".",
   "spec": "hasWord(trie of car, cat, do, \"car\") → true      hasWord(trie, \"ca\") → false",
   "start": "// A trie node is { kids: {}, end: false }. kids maps a letter to the next node,\n// and end is true when a word stops on this node. root is the empty starting node.\nfunction hasWord(root, word) {\n  // your code here\n}\n",
   "plan": [
    "Look up \"car\" by hand. What did you do for each letter?",
    "Look up \"dog\". Where did it go wrong?",
    "Look up \"ca\". Every letter was found. Why is the answer still false?"
   ],
   "hints": [
    "Walk down from the root, one letter at a time.",
    "If node.kids[ch] is missing, return false.",
    "After the last letter, the answer is node.end."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       "car",
       "cat",
       "do"
      ],
      "car"
     ],
     "want": true
    },
    {
     "args": [
      [
       "car",
       "cat",
       "do"
      ],
      "ca"
     ],
     "want": false
    },
    {
     "args": [
      [
       "car",
       "cat",
       "do"
      ],
      "do"
     ],
     "want": true
    },
    {
     "args": [
      [
       "car",
       "cat",
       "do"
      ],
      "dog"
     ],
     "want": false
    },
    {
     "args": [
      [
       "car",
       "cat",
       "do"
      ],
      ""
     ],
     "want": false
    },
    {
     "args": [
      [
       "car",
       "cat",
       "do"
      ],
      "x"
     ],
     "want": false
    },
    {
     "args": [
      [],
      "a"
     ],
     "want": false
    },
    {
     "args": [
      [
       "a",
       "ab"
      ],
      "a"
     ],
     "want": true
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "const mkT = (ws) => { const r = { kids: {}, end: false }; for (const w of ws) { let n = r; for (const c of w) { n = n.kids[c] = n.kids[c] || { kids: {}, end: false }; } n.end = true; } return r; }; return [mkT(args[0]), ...args.slice(1)];",
   "post": null,
   "solution": [
    "function hasWord(root, word) {",
    "  let node = root;",
    "  for (const ch of word) {",
    "    if (!node.kids[ch]) return false;",
    "    node = node.kids[ch];",
    "  }",
    "  return node.end;",
    "}"
   ],
   "why": "Change line 7 to \"return true\". What question does the function answer now?",
   "topic": null,
   "world": "A spell checker asks exactly this. The path may exist. But is it a whole word?",
   "view": {
    "row": [],
    "tree": [
     "·",
     "c",
     "d",
     "a",
     null,
     "o",
     null,
     "r",
     "t"
    ],
    "grid": null,
    "graph": null,
    "treeIndex": false,
    "ghost": [],
    "row2": null,
    "rowLabel": "",
    "row2Label": "",
    "ptrs": [
     {
      "id": "node",
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
     "say": "Walk down, one letter at a time. A missing letter means the word is not there.",
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
     "card": "a missing letter → false",
     "arrows": null
    },
    {
     "say": "And when every letter is found, one more check. Does a word end on this node?",
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
     "card": "all found → is it marked?",
     "arrows": null
    },
    {
     "say": "Looking up c, a. The green nodes are where a word ends. The marker starts on the root.",
     "line": 2,
     "ptr": {
      "node": 0
     },
     "hot": [],
     "ok": [
      7,
      8,
      5
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
     "card": "green = a word ends here",
     "arrows": null
    },
    {
     "say": "The letter c. The root has a child c. Line five follows it.",
     "line": 5,
     "ptr": {
      "node": 1
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
     "card": "\"c\" is there → follow it",
     "arrows": null
    },
    {
     "say": "The letter a. There too. Follow it.",
     "line": 5,
     "ptr": {
      "node": 3
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
     "card": "\"a\" is there → follow it",
     "arrows": null
    },
    {
     "say": "The letters are used up. The marker is on the a. Car and cat both pass through here. What does line seven return?",
     "line": 7,
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
     "card": "on \"a\" · return node.end → ?",
     "arrows": null
    },
    {
     "say": "False. The path exists, but no word ends on this node.",
     "line": 7,
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
     "vars": null,
     "box": null,
     "card": "",
     "arrows": null
    },
    {
     "say": "And for a word like dog, line four stops earlier. The o has no child g, so it returns false at once.",
     "line": 4,
     "ptr": {
      "node": 5
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
     "card": "\"dog\": no \"g\" under \"o\" → false",
     "arrows": null
    },
    {
     "say": "One step per letter. O of the length of the word, however many words are stored.",
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
     "card": "one step per letter → O(length)",
     "arrows": null
    },
    {
     "say": "One marker. O of one space.",
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
     "card": "1 marker → O(1) space",
     "arrows": null
    },
    {
     "say": "A spell checker asks exactly this. The path may exist. But is it a whole word?",
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
     "card": "a spell checker",
     "arrows": null
    }
   ]
  },
  {
   "id": "tt3",
   "num": 3,
   "title": "Finish My Word",
   "fn": "suggest",
   "ask": "Return <b>every word in the trie that starts with prefix</b>, in alphabetical order. If the prefix is itself a word, it counts too. If nothing starts with it, return [].",
   "spec": "suggest(trie of car, cat, do, \"c\") → [\"car\", \"cat\"]      suggest(trie of car, cat, do, \"do\") → [\"do\"]",
   "start": "// A trie node is { kids: {}, end: false }. kids maps a letter to the next node,\n// and end is true when a word stops on this node. root is the empty starting node.\nfunction suggest(root, prefix) {\n  // your code here\n}\n",
   "plan": [
    "Where in the trie are all the words that start with \"c\"?",
    "How do you get to that place?",
    "From there, how do you collect every word below, and how do you know what each word spells?"
   ],
   "hints": [
    "First walk down the prefix, as in a lookup. If a letter is missing, return [].",
    "Then walk the whole subtree below that node (depth-first), carrying the text spelled so far.",
    "Whenever a node is marked as an end, add the text to the output. Visit the letters in sorted order."
   ],
   "mode": "return",
   "tests": [
    {
     "args": [
      [
       "car",
       "cat",
       "do"
      ],
      "c"
     ],
     "want": [
      "car",
      "cat"
     ]
    },
    {
     "args": [
      [
       "car",
       "cat",
       "do"
      ],
      "ca"
     ],
     "want": [
      "car",
      "cat"
     ]
    },
    {
     "args": [
      [
       "car",
       "cat",
       "do"
      ],
      "d"
     ],
     "want": [
      "do"
     ]
    },
    {
     "args": [
      [
       "car",
       "cat",
       "do"
      ],
      "do"
     ],
     "want": [
      "do"
     ]
    },
    {
     "args": [
      [
       "car",
       "cat",
       "do"
      ],
      "x"
     ],
     "want": []
    },
    {
     "args": [
      [
       "car",
       "cat",
       "do"
      ],
      ""
     ],
     "want": [
      "car",
      "cat",
      "do"
     ]
    },
    {
     "args": [
      [
       "a",
       "ab",
       "abc"
      ],
      "a"
     ],
     "want": [
      "a",
      "ab",
      "abc"
     ]
    }
   ],
   "check": null,
   "forbid": [],
   "big": null,
   "prep": "const mkT = (ws) => { const r = { kids: {}, end: false }; for (const w of ws) { let n = r; for (const c of w) { n = n.kids[c] = n.kids[c] || { kids: {}, end: false }; } n.end = true; } return r; }; return [mkT(args[0]), ...args.slice(1)];",
   "post": null,
   "solution": [
    "function suggest(root, prefix) {",
    "  let node = root;",
    "  for (const ch of prefix) {",
    "    if (!node.kids[ch]) return [];",
    "    node = node.kids[ch];",
    "  }",
    "  const out = [];",
    "  const walk = (at, text) => {",
    "    if (at.end) out.push(text);",
    "    for (const ch of Object.keys(at.kids).sort()) {",
    "      walk(at.kids[ch], text + ch);",
    "    }",
    "  };",
    "  walk(node, prefix);",
    "  return out;",
    "}"
   ],
   "why": "The words under \"d\" are never looked at when the prefix is \"c\". Which lines make sure of that?",
   "topic": null,
   "world": "This is autocomplete. Type c, a, and your phone offers every word below that node.",
   "view": {
    "row": [],
    "tree": [
     "·",
     "c",
     "d",
     "a",
     null,
     "o",
     null,
     "r",
     "t"
    ],
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
     "say": "Every word that starts with the prefix lives below one node. The node you reach by following the prefix.",
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
     "card": "they all live under one node",
     "arrows": null
    },
    {
     "say": "So walk down the prefix. Then visit everything below it, depth first, carrying the letters so far.",
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
     "card": "down the prefix, then DFS below",
     "arrows": null
    },
    {
     "say": "The prefix is c. Lines two to six walk down it, exactly like a lookup. The marker lands on the c.",
     "line": 5,
     "ptr": {
      "at": 1
     },
     "hot": [],
     "ok": [
      7,
      8,
      5
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
     "card": "first: walk down the prefix",
     "arrows": null
    },
    {
     "say": "Line fourteen starts the walk here, with the text c. No word ends on c. So line eleven goes to its child, a, with the text c, a.",
     "line": 11,
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
     "card": "text so far: \"ca\"",
     "arrows": null
    },
    {
     "say": "No word ends on a, either. Its children, in sorted order, are r, and t. First r. The text is now car. What does line nine do?",
     "line": 9,
     "ptr": {
      "at": 7
     },
     "hot": [
      7
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
     "card": "on \"r\" · text \"car\" → ?",
     "arrows": null
    },
    {
     "say": "A word ends here. So car goes into the output.",
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
     "card": "out: car",
     "arrows": null
    },
    {
     "say": "Back up, and into the t. The text is cat. A word ends here too.",
     "line": 9,
     "ptr": {
      "at": 8
     },
     "hot": [
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
     "vars": null,
     "box": null,
     "card": "out: car, cat",
     "arrows": null
    },
    {
     "say": "Nothing is left below the c. The d side was never visited. Line fifteen returns the output.",
     "line": 15,
     "ptr": null,
     "hot": [],
     "ok": [],
     "bad": [
      2,
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
     "card": "",
     "arrows": null
    },
    {
     "say": "The length of the prefix, plus every node below it.",
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
     "card": "prefix + the nodes below it",
     "arrows": null
    },
    {
     "say": "The output, and the waiting calls, as deep as the longest word.",
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
     "card": "output + depth of the trie",
     "arrows": null
    },
    {
     "say": "This is autocomplete. Type c, a, and your phone offers every word below that node.",
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
     "card": "autocomplete on your phone",
     "arrows": null
    }
   ]
  }
 ]
};
