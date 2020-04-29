### Pure Functions

#### Intro

Hello! My name is Thomas Greco, and this is the first of many posts regarding my time spent with Eric Elliott. Over the last 6 months, I have completely transformed my knowledge of JavaScript. I may have some times felt in over my head, however I never let myself give up. Instead, I continued to grind through the material so that my brain had no choice to absorb it! Now, 6 months after coming into contact with JS Cheerleader and Eric, I feel primed to take on any interview that comes my way. These posts also aim to further show my readiness as they will provide examples of my work while also showing that I truly understand the material.

My journey began focusing on pure functions, which is what I am going to discuss today. A pure function maps the same input to the same output every time. In order for a function to be pure, it must have the following characteristics:

- Always maps the same input to the same output.
- Does NOT rely shared state.
- It will produce no side effects.

The benefits of using pure functions are tremendous. As stated above, they always map the same input to the same output which means that they're completely predictable. In addition to being completely predictable, pure functions also possess the characteristic of being easily testable. Simply put, if you can think of a scenario, then you can test your code against it, ultimately making your code prepared for any inputs that comes its way. This is extremely helpful for UI development, especially when approached using a practice lke TDD.

Now that we know a little bit about the benefits of using pure functions, let's take a look at some example. Below we have our first pure function: `multiply`.

```javascript
const mutiply = x => y => x * y
add(4)(5) // 9
add(2)(4)
```

`mutiply` is a curried function and therefore it takes it's arguments seperately. Nonetheless, it still possesses all of the characterstics necessary in order to be considered a pure function. As a result of this, we can easily reason about the output that `mutiply` will produce by simply substituing it's `x` and `y` values for real numbers without even having to write any code!

> given `x` of 5 and a `y` of 3, we know that `mutiply` is going produce 8.

#### Staying focused

Our `mutiply` function fulfills all of the pure-function requirements, however it doesn't mean that we're free from running into issues when using it. In addition to modelling our functions to be pure, we can't forget to keep the rules of pure functions in mind when it becomes time to use it. In the code block below, we see an example of code that is no longer determistic. Can you tell which of the 3 purity rule this goes against?

```js
import { globalValue } from '../applicationState'
const mutiply = x => y => x * y
// glo
add(5)(globalValue) // 500
```

The issue lies within our `globalValue` import. For all we know, `globalValue` could be an array of numbers! Let's say that `globalValue` is a number. Better yet, let's imagine that it's bound to the correct value we're supposed to use. Do you think it's still OK to use? (Here's a hint: NO! :)) Let's imagine that we've just inpected the `applicationState` module and found `let globalValue = 5;`. We were relieved to find it, but are now concerned because the mutiplication doesn't line up. Instead of evaluating to `25`, `add(5)(globalValue)` is evaluating to 500. We're `425` away from our deired value. Even worse, we're stressed. After further investigation, we've come to see that it is being reassigned to equal `100`.

That example was even more contrived than I would rather have provided but I hope it benefited you. The main point is to always keep the 3 rules of function purity in mind until they become law.

### Seeing baby pure functions are made

Going back to examples of how to properly write code declarative code.

Let's make this a little bit more interesting. As I mentiond before, `mutiply` is a curried function. As a result, we can use `multiply` to create other functions that are also pure.

See if you can finish the example below:

> Hint - `multiply(5)(2)` evaluates to `10`

```js
// multiply :: Number -> (Number => Number)
const multiply = x => y => x * y;
// use multiply to finish creating the functions below
const doubleIt = multiply;
const multiplyByFive = ;
const multiplyByTen = ;
```

You can find the solution for above [here]. If you're still in the process of understanding the details that make up a functional codebase, and declarative code is different from code modeled around imperative expression, then you'll benefit from seeing examples of pure functions being used to create other pure functions. In addition to seeing function purity, we also get a glimpse of why JavaScript functions are considered "first-class citizens" within the language. This is due to their ability to take functions as input as well as return functions as output, which is exactly what we see in `mutiply`. Even though we eventually end up at a number, `mutiply` doesn't only return a number. Rather, it returns **a function that returns a number**, hence why we're able to use it to create new functions.

### First Class Functions + Pure functions = Composable Determisim

First-class functions is essential to FP so let's stay on this topic.

We just saw this in `mutiply`. The end result is a number

We can see the signature for `mutilply` we signature of `mutiply`

### Separation of Concerns

This theme of code re-use is central to functional programming paradigm. By employing nothing but pure functions As you immerse yourself deeper and deeper in FP it will be come second nature like our `mutiply` function, wure functions allows us to break our applications up into reusable bits of code. This fits in well with the ideas behind functional programming, where the goal is to have one function perform one piece of functionality. We can then use function composition to have these functions run in-sequence in a points-free manner to perform some transformation on an input, however that is a conversation for a different time! For now, I want to continue focusing on the things that makes functions pure. As I mentioned before, pure functions can not rely on shared, mutable state. This will remove a slew of bugs from name-clashing to race-conditions, thus allowing an application to perform better. In addition to these benefits, code with pure functions is generally cleaner, and much more modular than non-pure functions.

Continuing on, let’s discuss how to approach making functions pure.

### Making Impure Functions Pure

When I initially tackled pure functions, I had a hard time making the tests pass in [this codepen]() from Eric Elliott’s post on the topic. In order to complete the example, users are instructed to refactor the block of code below, so that each function was pure.

```
const setPrice = (item, price) => Object.assign(item, { price });

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => {
  cart.push(item);
  return cart;
};
```

I immediately gravitated towards the `push` method, which returns a modified version of whatever it is pushing on to (in this case the cart). This will result in a mutation, so I knew that I had to remove this. When `concat` did not solve my problems, I turned to `Object.assign` to return a new object that merged the contents in the existing cart with the item being added. I eventually ended up with the `addToCart` function below.

```javascript
const addToCart = (cart, item) => {
  return Object.assign({}, cart, [item])
}
```

After that code rewrite, my tests for the `addToCart` function were passing, however I still needed to make some changes to `setPrice`. Taking a look at the code, I was able to quickly reason that an empty object was needed to as the first argument `Object.assign`. Once that modification was made, all tests were showing green and I was feeling pretty good myself.

The completed code for these functions can be shown below.

```javascript
// don’t these one-liners look neat?!
const setPrice = (item, price) => Object.assign({}, item, { price });
const addToCart = (cart, item) =>  return Object.assign({},cart, [item]);
```

And you can check out the completed codepen below.

<p data-height="300" data-theme-id="18714" data-slug-hash="xdjEBr" data-default-tab="result" data-user="thomasgreco" data-embed-version="2" data-pen-title="Pure Functions" class="codepen">See the Pen <a href="https://codepen.io/thomasgreco/pen/xdjEBr/">Pure Functions</a> by Thomas J Greco (<a href="https://codepen.io/thomasgreco">@thomasgreco</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

#### Final Words

It’s safe to say that all roads in declarative programming lead to pure functions. They are the building block of everything I learned over the last 6 months, so I thought it was important that I kicked off these posts with this topic. As I continue forward to tackle like Higher-Order React components and Redux, I will almost always be using pure functions so I hope you like them as much as I do :)
