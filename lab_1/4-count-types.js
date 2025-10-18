"use strict"
const analyzeArrayTypes = (data) => {const typeCounts = new Map();
for (const element of data) {
const elementType = typeof element;
const currentCount = typeCounts.get(elementType) || 0;
typeCounts.set(elementType, currentCount + 1);
  }
return Object.fromEntries(typeCounts);
};
const sampleArray = [
  true,
  "hello",
  5,
  12,
  -200,
  false,
  false,
  "word",
  null,
  () => {},
  undefined,
];
const analysisResult = analyzeArrayTypes(sampleArray);
console.log({ analysisResult });

module.exports = { analyzeArrayTypes };
