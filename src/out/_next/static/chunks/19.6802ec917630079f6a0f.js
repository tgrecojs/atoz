(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{jGm7:function(t,n,e){"use strict";e.r(n),n.default="---\nauthor: Thomas Greco\ndate: '2020-03-20T07:00:00.000Z'\nhero_image: ../static/Letter-F.jpg\ntitle: Fun with Functors - Part 1\n---\n\nFunctional programming is littered with terminology that sounds really confusing. If you're new to FP or even programming in general, then it's important to keep in mind that these are just words used to describe concepts that you're likely already familiar with. As you continue on learning, you'll begin to understand that these terms simply allow for us to base our programming practices in various mathematical theorems, thus ultimately create pure, deterministic programs.\n\nThe goal for this article, and every article in this series, is essentially the same: **to help mitigate any confusion that can arise when learning about common FP terminology, while simoultaneously helping you become more comfortable with these concepts**. Today, our goal is to bring you closer to **functors**.\n\n## Meet functor.\n\nAt the core of functional programming as a data type called functor. The essence of this data type is that it is `mappable`. This simply means that it provides an interface that we can `map` over in order to read or transform values.\n\nHmmm.... A container that we can map through. \ud83e\udd14 Sounds kinda familiar, right? \ud83d\ude0f\n\n#### Why functors\n\n```js\nconst myFunctor = [25]\n```\n\nAbove we see the `myFunctor` variable being set to an array. This array acts as a container inside of which we can store values. In this instance, we're storing numbers, however this could be names, objects, etc. The shape of the data is irrelevant. Rather, it's the shape of the data type that is important, and as we can see by checking out our `myFunctor` variable, basic arrays can be classified as a valid interface for functors.\n\nDo you know what this means? It means that you've been interacting with functors all along, and you likely didn not even realize! I sincerely hope that this fact is as mind-blowing to you as it was to me. Before we get too ahead of ourselves,let's be good functional programmers and prove this to be true.\n\n### Prove it\n\nIn order for an interface to be considered a functor, it must passed the functor laws of **Identity** and **Composition**.\n\n1. **Identity**:\n   - id function must always `map` a functor back to the **same value**,\n   - `const id = x => x;`\n   - `[1,2,3].map(id); // returns [1,2,3]`\n2. **Composition**:\n   - Functors of the same type can be computed in any order and it will not effect their value.\n   - _Given `g: x => y, f: y => z` where `x,y,z` are collection objects..._ **there must be a composition that directly `X \u2192 Z`**.\n\n> This composition law was the same that I was forced to learn in algebra class. It' **associative** meaning that the order in which it is computed does not matter. Realizing this was a big \"a-ha\" moment when studying functional programming.\n\n> **Ex.:** (f \u25e6 g) \u25e6 h = f \u25e6 g \u25e6 h = f \u25e6 (g \u25e6 h)\n\nNow that we know the functor laws lets apply test them out against our array example.\n\n#### What we know\n\n1. `f` takes an `x` and divides by `.5`\n2. `g` takes an `x` and multiplies by `10`\n3. `functor` is a functor containing 1 value.\n\n```js\nconst f = x => x / 0.5\nconst g = x => x * 10\nconst functor = [25]\n\n// identity law\nconsole.log(functor.toString() === functor.map(x => x).toString()) // 25 === 25\n\n// composition law\nconsole.log(\n  functor\n    .map(g)\n    .map(f)\n    .toString() === functor.map(x => f(g(x))).toString()\n)\n```\n\n##### Who f\\*ckin cares dude\n\n> Why the FUCK do I care about these stupid fucking functor laws man.... Shit is sooo FUCKING stupid.\n>\n> - Majority of people reading this posts\n\nMaybe you're not impressed with our `data` array and the one value that it includes. functor's satisfy the `Identity` and `composition` law. Well, that's too bad but don't give up just yet.\n\nWe've seen functors in action and we've learned the rules that they must abide by. Now let's create one for ourselves.\n\nThe `Box` functor (often referred to as the `Identity` functor) will take a value as it's input. From there, it will return an object `{}` with a `map` method inside of it. When this `map` executes, it will apply it's input `fn` to the value inside and return it's result wrapped inside of. What's that you said? This `map` implementation sure sounds awfully familiar to JavaScript's``Array.prototype.map`. Well, friend, _that's because it is_ !\n\nTaking a look at the code snippet below we see how our `Box` function's `map` method is implemented. Cool, right?\n\n```javascript\nconst Box = value => ({\n  map: fn => Identity(fn(value)),\n})\n\nconst OurFirstFunctor = Box(20)\n```\n\n![boring]('../../../imgs/boring.gif)\n\nAlright, I get it. Let's extend this a little bit by adding some more methods, `fold` and `inspectValue`.\n\n```javascript\nconst Box = value => ({\n  map: f => Box(f(value)),\n  fold: (f, g) => f(value),\n  inspectValue: () => `Box${value}`,\n})\n```\n\n```js\n// identity law\nconst id = x => x\n\nconst result = Box(20)\n\nconst x1 = result\nconst x2 = result.map(id)\n\nx2.map(trace) // value:: 1\nx1.map(trace) // value:: 1\n\n// composition law f(x) * g(x) = f(g(x))\n```\n\nThat being said, I hope that this theme of \"more simple than it looks\" is a re-ocurring throughout your journey learning FP.\n\n### Wrap up\n\nAnd thus conclude this intro post on functors. Hopefully you've learned something that you didn't prior to reading this.\n\nNeed Improvemen? Give me a call!\nThe goal for this article, and every article in this series, is essentially the same: to remove the confusion that stems from FPs terminology.\n"}}]);