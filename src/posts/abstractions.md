---
author: Thomas Greco
date: '2020-04-27T07:00:00.000Z'
hero_image: ../static/Letter-A.jpg
title: Abstractions in JS
---

### Introduction

Greetings earthlings! And welcome to another install of A to Z in FP. In today's article, we'll be targeting a concept that, like the Alphabet, also begins with the letter _A -_ **Abstraction!**

![Letter A Image](/static/Letter-A.jpg)

### Understanding Abstraction

- When writing code in declarative manner [¹](#1), it's important to place a great deal of emphasis on creating abstractions within our code base. To successfully build resilient, pure applications, we should aim to abstract functionality (code) away from the values that it's meant to operate on, as opposed to hard-coding computations within the body of a function.
- This process is referred to as "generalization" and we should be doing it wherever possible. Once we have our generalized functions, we can use them to create specialized versions that are tailored to our needs.

### Show me the contrived examples!

- It can be easy to get caught up in programming lingo so let's take a more practical approach and look at some examples. Below, we have two extremely (im)practical functions: `contrivedCalcNumeroUno` & `contrivedCalcNumeroDos`.

```jsx
const contrivedCalcNumeroUno = x => {
  const fiftyPercent = x / 2
  const addTenToFiftyPercent = fiftyPercent + 10
  return addTenToFiftyPercent
}

const contrivedCalcNumeroDos = x => {
  const twentyFivePercent = x / 4
  const addTwentyToFiftyPercent = twentyFivePercent + 20
  return addTwentyToFiftyPercent
}

contrivedCalcNumeroUno(100) //? 60
contrivedCalcNumeroDos(100) //? 45
```

- Our goal is to create abstractions for these functions. The first step we should take is to recognize any code that can be pulled out of the function body and transformed into it's own function. Additionally, we're going to want to pay attention to any behavior we see that our functions are sharing.
- In this case we should note that both functions perform the following computations:
  1. Dividing the function's input by some number.
  2. Adding some number to the result of the freshly divided input.

### Real eyes realize how to generalize then specialize [functions].

- Now that our detective work is done, we can begin abstracting away these implementation details by creating some generalized functions. First, let's create a function for handling division.

```jsx
const divide = x => y => y / x
```

- Rather than taking the arguments at once, we will define `divide` to be a curried function.
- I'll go into detail about function currying in a separate post. For now, however, we just want to acknowledge the fact that by doing this, we'll be able to leverage `divide` to create new, specialized functions.
- Any guesses as to what these functions are going to look like?
  - Here's a hint: there names are `calculateOneHalf` and `calculateOneQuarter`.
- Before we take a look at those though, we need to create one more generalized function for performing addition.

```jsx
const divide = x => y => y / x
const add = x => y => y + x
```

- With exception of its addition operational symbol, the `add` function is doppelganger of `divide`doppelganger.
- Even though we have't flipped the arguments like we did inside `divide`, we could have if we really wanted to due to addition's communitive property.
- In other words, order doesn't matter in addition therefore the code block above will work in the exact same way as the code block below.

```jsx
const divide = x => y => y / x
const add = x => y => y + x
```

- Alright! We are looking good! Like, super good. Derek Zoolander good.... seriously 😎.

### Generalized ⇒ Specialized

- We're finally ready to recreate our contrived examples using our new `add` and `divide` functions.
- Throughout this ar
- If you took a shot at defining these functions on your own, let's see how you did.

`calculateOneHalf`

[article.md](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9b87aedd-d92c-4f5d-acee-27f13f200da6/article.md)

- **Creating abstractions is a crucial part of the functional programming paradigm._> AB~C~A -> Always Be Abstractin'!_`js`**

### Footnotes

**¹.** Declarative code describes code that adheres to the functional programming paradigm. It's inverse would be imperative code.
