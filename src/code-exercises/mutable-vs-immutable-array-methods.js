import { describe } from "riteway";
import { equals } from "ramda"
const array = ["Tom", "Tootie", "Timfo", "Ty", "Ba"];
const test = ["one", "two", "three", "four"];

describe("changeArray function", (assert) => {
  {
    const evens = [2, 4, 6, 8, 10];
    const odds = [1, 3, 5, 7, 9, 11];

    const doubleIt = (x) => x * 2;


    const changeArray = (array) => array.forEach(
      (name, index) => (odds[index] = doubleIt(name))
    ); //?

    assert({
      given: "an array of numbers",
      should: "double those numbers",
      actual: equals(changeArray(odds), [2, 6, 10, 14, 18, 22]),
      expected: true,
    }); //?

    assert({
      given: "an array of numbers",
      should: "double those numbers",
      actual: odds,
      expected: [],
    }); //?


  }
});
