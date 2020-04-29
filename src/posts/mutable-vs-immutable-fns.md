---
author: Thomas Greco
date: '2020-04-27T07:00:00.000Z'
hero_image: ../static/array-methods.svg
title: Deep dive into JavaScript's built-in array methods
---

In my post on pure functions, we discussed the importance of avoiding mutable state when writing programs. In this post, we're going to take a look at internal JavaScript methods

### [Does it mutate](https://doesitmutate.xyz/)

# Immutable

### `forEach`

- interates over each item in an array.
- Using `.forEach` does not always mutate the array that it's iterating over. This is a common misconception in the JavaScript world.
- Mutation depends on it's usage but it's not uncommon, as many beneficial usecases result in mutation.

```js
const originalArr = ["Iron", "Super", "Ant", "Aqua"];
originalArr.forEach((name, index) => originalArr[index] = `${name}man`);
* Although you can get away with using `.forEach`, I advise against using for it in favor of `.map`.
* a common misconception is that using `.forEach` method always results in mutation.

```

### `flat`

- It was a highly anticipated addition to the language that was officially released in ES2019. (check)
- This method iterates over an array and flattens nested arrays (numbers + sub arrays)

### `p

### `includes`

### `indexOf`

### `find`

### `join`

### `keys`

### `slice`

### `some`

### `toSource`

### `values`

### `lastIndexOf`

### `fromEntires`

### `findIndex`

### `entries`

### `reduceRight`

### `reduce`

### `map`

### `filter`

## Arrays

### `push`

- Adds an item to the end of an array.
- Mutates the original array.

### `sort`

- The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.

```
var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

var array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

Array.prototype.sort (comparefn)

### `copyWithin`

- The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

```js
const array1 = ['a', 'b', 'c', 'd', 'e']
console.log(array1.copyWithin(0, 3, 4))
// expected output: Array ["d", "b", "c", "d", "e"]
// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3))
// expected output: Array ["d", "d", "e", "d", "e"]
```

### `shift`

- The shift() method removes the first elements of an array and returns the new length of the element.
- mutates the length of the array

Array.prototype.shift ( [ item1 [ , item2 [ , … ] ] ] )

### `unshift`

\*The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

```js
Array.prototype.unshift ( [ item1 [ , item2 [ , … ] ] ] )
```

### `splice`

- The splice() method changes the content of an array by removing existing elements and/or adding new elements.
-

```js
Array.prototype.splice (start, deleteCount [ , item1 [ , item2 [ , … ] ] ] )
```

### `fill`ç

### `.pop`

- removes the last item of an array and returns that item.
- mutates input array.

```js
const trace = label => val => {
  console.log(`${label}`, val)
  return val
}
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

plants.pop()
// expected output: "tomato"

const head = ([firsst, ...rest] = (array = [])) => first
// pure
plants.slice(1)
```

### `.reverse`

- executes an in-place reversal on its inputs array.
- mutates the original array via in-place reversal.

```js
const reverseArray = (array, source = []) =>
  source.length === array.length
    ? source
    : source.concat(reverseArray(array.slice(1)), array[0])

//aka pass through an array with a sliced off first index

// 4) func() return
// 3) func(4),func(34), func(234),1
// 2) func(34),func(234),1
// 1) func(234),1

var reversedArr = reverseArray(arr)

console.log(reversedArr) // [4,3,2,1]
// console.log(arr)    // [1,2,3,4]

// describe("reversedArray", assert => {

//   const data = [1,2,3,4];
//   const output = reverseArray(dat)
//   assert({
//     given: 'an array of items',
//     should: 'reverse the array',
//     actual: output,
//     expected: [4,3,2,1]
//   })
// })
```
