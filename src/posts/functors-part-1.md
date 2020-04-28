---
author: Thomas Greco
date: '2020-03-20T07:00:00.000Z'
hero_image: ../static/Letter-F.jpg
title: 'Fun with Functors - Part 1'
---

#### A gentle introduction..

Functional programming is littered with terminology that sounds really confusing. If you're new to FP or even programming in general, then it's important to keep in mind that these are just words used to describe concepts that you're likely already familiar with. As you continue on learning, you'll begin to understand that these terms simply allow for us to base our programming practices in various mathematical theorems, thus ultimately create pure, deterministic programs.

The goal for this article, and every article in this series, is essentially the same: **to help mitigate any confusion that can arise when learning about common FP terminology, while simoultaneously helping you become more comfortable with these concepts**. Today, our goal is to bring you closer to **functors**.

## Meet functor.

At the core of functional programming as a data type called functor. The essence of this data type is that it is `mappable`. This simply means that it provides an interface that we can `map` over in order to read or transform values.

Hmmm.... A container that we can map through. 🤔 Sounds kinda familiar, right? 😏

#### Why functors

```js
const myFunctor = [25]
```

Above we see the `myFunctor` variable being set to an array. This array acts as a container inside of which we can store values. In this instance, we're storing numbers, however this could be names, objects, etc. The shape of the data is irrelevant. Rather, it's the shape of the data type that is important, and as we can see by checking out our `myFunctor` variable, basic arrays can be classified as a valid interface for functors.

Do you know what this means? It means that you've been interacting with functors all along, and you likely didn not even realize! I sincerely hope that this fact is as mind-blowing to you as it was to me. Before we get too ahead of ourselves,let's be good functional programmers and prove this to be true.

### Prove it

In order for an interface to be considered a functor, it must passed the functor laws of **Identity** and **Composition**.

1. **Identity**:
   - id function must always `map` a functor back to the **same value**,
   - `const id = x => x;`
   - `[1,2,3].map(id); // returns [1,2,3]`
2. **Composition**:
   - Functors of the same type can be computed in any order and it will not effect their value.
   - _Given `g: x => y, f: y => z` where `x,y,z` are collection objects..._ **there must be a composition that directly `X → Z`**.

> This composition law was the same that I was forced to learn in algebra class. It' **associative** meaning that the order in which it is computed does not matter. Realizing this was a big "a-ha" moment when studying functional programming.

> **Ex.:** (f ◦ g) ◦ h = f ◦ g ◦ h = f ◦ (g ◦ h)

Now that we know the functor laws lets apply test them out against our array example.

#### What we know

1. `f` takes an `x` and divides by `.5`
2. `g` takes an `x` and multiplies by `10`
3. `functor` is a functor containing 1 value.

```js
const f = x => x / 0.5
const g = x => x * 10
const functor = [25]

// identity law
console.log(functor.toString() === functor.map(x => x).toString()) // 25 === 25

// composition law
console.log(
  functor
    .map(g)
    .map(f)
    .toString() === functor.map(x => f(g(x))).toString()
)
```

##### Who f\*ckin cares dude

> Why the FUCK do I care about these stupid fucking functor laws man.... Shit is sooo FUCKING stupid.
>
> - Majority of people reading this posts

Maybe you're not impressed with our `data` array and the one value that it includes. functor's satisfy the `Identity` and `composition` law. Well, that's too bad but don't give up just yet.

<LinkAnchor element="h2" id="identity-functor" text="Creating the Identity Functor" />

We've seen functors in action and we've learned the rules that they must abide by. Now let's create one for ourselves.

The `Box` functor (often referred to as the `Identity` functor) will take a value as it's input. From there, it will return an object `{}` with a `map` method inside of it. When this `map` executes, it will apply it's input `fn` to the value inside and return it's result wrapped inside of. What's that you said? This `map` implementation sure sounds awfully familiar to JavaScript's``Array.prototype.map`. Well, friend, _that's because it is_ !

Taking a look at the code snippet below we see how our `Box` function's `map` method is implemented. Cool, right?

```javascript
const Box = value => ({
  map: fn => Identity(fn(value)),
})

const OurFirstFunctor = Box(20)
```

![boring]('../../../imgs/boring.gif)

Alright, I get it. Let's extend this a little bit by adding some more methods, `fold` and `inspectValue`.

```javascript
const Box = value => ({
  map: f => Box(f(value)),
  fold: (f, g) => f(value),
  inspectValue: () => `Box${value}`,
})
```

```js
// identity law
const id = x => x

const result = Box(20)

const x1 = result
const x2 = result.map(id)

x2.map(trace) // value:: 1
x1.map(trace) // value:: 1

// composition law f(x) * g(x) = f(g(x))
```

That being said, I hope that this theme of "more simple than it looks" is a re-ocurring throughout your journey learning FP.

### Wrap up

And thus conclude this intro post on functors. Hopefully you've learned something that you didn't prior to reading this.

Need Improvemen? Give me a call!
The goal for this article, and every article in this series, is essentially the same: to remove the confusion that stems from FPs terminology.
