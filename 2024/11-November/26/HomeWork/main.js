// Spread Operator with Arrays

// Basic Array Operations (Beginner)
const copyArray = [...[1, 2, 3]]; // 1. Copy an array
console.log(copyArray);

const combineArrays = [...[1, 2], ...[3, 4]]; // 2. Combine two arrays
console.log(combineArrays);

const addElementStart = [0, ...[1, 2, 3]]; // 3. Add element to beginning
console.log(addElementStart);

const addElementEnd = [...[1, 2, 3], 4]; // 4. Add element to end
console.log(addElementEnd);

const mergeThreeArrays = [...[1, 2], ...[3, 4], ...[5]]; // 5. Merge three arrays
console.log(mergeThreeArrays);

const copyAddElement = [...[1, 2, 3], 4]; // 6. Copy and add element
console.log(copyAddElement);

const removedFirstElement = [...[1, 2, 3].slice(1)];
console.log(removedFirstElement);

const copyLast3 = [...[1, 2, 3, 4, 5, 6].slice(-3)];
console.log(copyLast3);

const reveredArray = [...[1, 2, 3, 4, 5, 6].reverse()];
console.log(copyLast3);

const newElement = 9;
const removedSecond = [...[1, 2, 3], newElement, ...[1, 2, 3].slice(2)];
console.log(removedSecond);

// Practical Scenarios (Intermediate)
const spreadString = [..."hello"]; // 1. Spread string into array
console.log(spreadString);

const flattenArray = [...[1, 2], ...[3, 4]]; // 2. Flatten nested array
console.log(flattenArray);

const excludeLastElement = [...[1, 2, 3].slice(0, -1)]; // 3. Exclude last element
console.log(excludeLastElement);

const insertThirdPosition = [...[1, 2].slice(0, 2), 99, ...[1, 2, 3].slice(2)]; // 4. Insert at third position
console.log(insertThirdPosition);

const deduplicateArray = [...new Set([1, 2, 2, 3])]; // 5. De-duplicate array
console.log(deduplicateArray);

const extractMiddleElements = [...[1, 2, 3, 4].slice(1, -1)]; // 6. Extract middle elements
console.log(extractMiddleElements);

const rotatingArray = [...[1, 2, 3, 4].slice(1), [1, 2, 3, 3][0]];
console.log(rotatingArray);

const combineWithString = ["Hello", ...[2, 3]];
console.log(combineWithString);

function mergeArrays(...arrays) {
  return [].concat(...arrays);
}
console.log(mergeArrays([1], [2], [3]));

const shuffleArray = [...[1, 2, 3, 4]].sort(() => Math.random() - 0.5);
console.log(shuffleArray);

// Basic Object Operations (Beginner)
const copyObject = { ...{ a: 1, b: 2 } }; // 1. Copy object
console.log(copyObject);

const mergeObjects = { ...{ a: 1 }, ...{ b: 2 } }; // 2. Merge two objects
console.log(mergeObjects);

const updateProperty = { ...{ a: 1, b: 2 }, b: 99 }; // 3. Update property
console.log(updateProperty);

const addProperty = { ...{ a: 1 }, c: 3 }; // 4. Add property
console.log(addProperty);

const mergeThreeObjects = { ...{ a: 1 }, ...{ b: 2 }, ...{ c: 3 } }; // 5. Merge three objects
console.log(mergeThreeObjects);

const shallowCopy = { ...{ a: 1, b: 2 } }; // 6. Shallow copy
console.log(shallowCopy);

const removeProperty = (({ b, ...rest }) => rest)({ a: 1, b: 2, c: 3 });
console.log(removeProperty);

const swapValues = { a: 2, b: 1 };
console.log(swapValues);

const extractProperty = (({ b, ...rest }) => rest)({ a: 1, b: 2, c: 3 });
console.log(extractProperty);

const updateNestedProperty = {
  ...{ nested: { a: 1, b: 2 } },
  nested: { ...{ a: 1, b: 2 }, b: 99 },
}; // 10. Update nested property
console.log(updateNestedProperty);

// Practical Scenarios (Intermediate)
const precedenceObjects = { ...{ a: 1 }, ...{ a: 2 } }; // 2. Precedence to second object
console.log(precedenceObjects);

const addNestedObject = { ...{ a: 1 }, nested: { key: "value" } }; // 3. Add nested object
console.log(addNestedObject);

const excludeSpecificProperty = (({ excluded, ...rest }) => rest)({
  a: 1,
  excluded: 2,
}); // 4. Exclude specific property
console.log(excludeSpecificProperty);

const removeNullUndefined = Object.fromEntries(
  Object.entries({ a: 1, b: null, c: undefined }).filter(([_, v]) => v != null)
); // 5. Remove null/undefined properties
console.log(removeNullUndefined);

const mergeDefaults = { ...{ default: true }, ...{ custom: false } }; // 6. Merge configuration
console.log(mergeDefaults);

const skipSpecificProps = (({ skip, ...rest }) => rest)({
  a: 1,
  skip: 2,
  b: 3,
});
console.log(skipSpecificProps);

const updateSpecificNestedProp = {
  ...{ nested: { a: 1, b: 2 } },
  nested: { ...{ a: 1, b: 2 }, b: 99 },
};
console.log(updateSpecificNestedProp);

const arrayToObject = Object.fromEntries([
  ["a", 1],
  ["b", 2],
]);
console.log(arrayToObject);

const combineUserPreferences = {
  ...{ user: "John" },
  ...{ theme: "dark" },
  lang: "en",
};
console.log(combineUserPreferences);
