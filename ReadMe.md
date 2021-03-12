# JS Value Exists

There are different ways in **JavaScript** how to **verify existence** of given **value** in specific **list** (array, object, etc.)

## Variants of Code

```
// valueExistByObjectProperty
{ first: 1, second: 1, third: 1}[value]

// valueExistByObjectHasOwnProperty
{ first: 1, second: 1, third: 1}.hasOwnProperty(value)


// valueExistByArrayIndexOf
['first', 'second', 'third'].indexOf(value) > -1

// valueExistByArrayIncludes
['first', 'second', 'third'].includes(value)

```

## Current Results

```
node v12.20.0

valueExistByObjectProperty() 100000000 times
  VALUE_EXIST: 159.177ms
  VALUE_NOT_EXIST: 2198.666ms

valueExistByObjectHasOwnProperty() 100000000 times
  VALUE_EXIST: 1434.049ms
  VALUE_NOT_EXIST: 2095.054ms

valueExistByArrayIndexOf() 100000000 times
  VALUE_EXIST: 1531.303ms
  VALUE_NOT_EXIST: 1953.647ms

valueExistByArrayIncludes() 100000000 times
  VALUE_EXIST: 121.821ms
  VALUE_NOT_EXIST: 115.642ms
```

So `valueExistByArrayIncludes()` using `ARRAY_OF_VALUES.includes(value)` is most **stable** and **fastest**, at least for for **Node v12**

## How to run

`npm start` or `node index.js`
