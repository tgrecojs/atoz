---
author: Thomas Greco
date: '2020-04-27T07:00:00.000Z'
hero_image: ../static/Letter-A.jpg
title: Staying Pure with Tom: Identifying & Differentiating Mutable vs. Immutable Array methods
---

In my post on pure functions, we discussed the importance of avoiding mutable state when writing programs. In this post, we're going to take a look at internal JavaScript methods

## Arrays

### Push

```js
const trace = label => val => {
  console.log(`${label}`, val)
  return val
}
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

plants.pop();
// expected output: "tomato"

plants);
// pure
plants.slice(1)
```

### po
