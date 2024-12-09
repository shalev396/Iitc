//1
const removeFirstElement = [...[1, 2, 3].slice(1)]; // 7. Remove first element
console.log(removeFirstElement);

const copyLastThree = [...[1, 2, 3, 4, 5].slice(-3)]; // 8. Copy last three elements
console.log(copyLastThree);

const reverseArray = [...[1, 2, 3]].reverse(); // 9. Reverse without mutation
console.log(reverseArray);

const replaceSecondElement = [1, 99, ...[1, 2, 3].slice(2)]; // 10. Replace second element
console.log(replaceSecondElement);
//2
const rotateArray = [...[1, 2, 3].slice(1), [1, 2, 3][0]]; // 7. Rotate array
console.log(rotateArray);

const combineWithString = ["Hello", ...[2, 3]]; // 8. Combine with string
console.log(combineWithString);

function mergeArrays(...arrays) {
  return [].concat(...arrays);
} // 9. Merge multiple arrays
console.log(mergeArrays([1], [2], [3]));

const shuffleArray = [...[1, 2, 3, 4]].sort(() => Math.random() - 0.5); // 10. Shuffle array
console.log(shuffleArray);

//3
const removeProperty = (({ b, ...rest }) => rest)({ a: 1, b: 2, c: 3 }); // 7. Remove property
console.log(removeProperty);

const swapValues = { a: 2, b: 1 }; // 8. Swap property values
console.log(swapValues);

const extractProperty = (({ b, ...rest }) => rest)({ a: 1, b: 2, c: 3 }); // 9. Extract one property
console.log(extractProperty);

const updateNestedProperty = {
  ...{ nested: { a: 1, b: 2 } },
  nested: { ...{ a: 1, b: 2 }, b: 99 },
}; // 10. Update nested property
console.log(updateNestedProperty);

// Practical Scenarios (Intermediate)
function mergeMultipleObjects(...objs) {
  return Object.assign({}, ...objs);
} // 1. Merge multiple objects
console.log(mergeMultipleObjects({ a: 1 }, { b: 2 }));
//4
const skipSpecificProps = (({ skip, ...rest }) => rest)({
  a: 1,
  skip: 2,
  b: 3,
}); // 7. Skip specific props
console.log(skipSpecificProps);

const updateSpecificNestedProp = {
  ...{ nested: { a: 1, b: 2 } },
  nested: { ...{ a: 1, b: 2 }, b: 99 },
}; // 8. Update nested property
console.log(updateSpecificNestedProp);

const arrayToObject = Object.fromEntries([
  ["a", 1],
  ["b", 2],
]); // 9. Array of key-value to object
console.log(arrayToObject);

const combineUserPreferences = {
  ...{ user: "John" },
  ...{ theme: "dark" },
  lang: "en",
}; // 10. Combine details/preferences
console.log(combineUserPreferences);
