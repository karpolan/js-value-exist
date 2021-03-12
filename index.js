const VALUES_AS_ARRAY = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];
const VALUES_AS_OBJECT = {
  first: 1,
  second: 1,
  third: 1,
  fourth: 1,
  fifth: 1,
  sixth: 1,
  seventh: 1,
  eighth: 1,
  ninth: 1,
  tenth: 1,
};

function valueExistByObjectProperty(value) {
  return Boolean(VALUES_AS_OBJECT[value]);
}

function valueExistByObjectHasOwnProperty(value) {
  return VALUES_AS_OBJECT.hasOwnProperty(value);
}

function valueExistByArrayIndexOf(value) {
  return VALUES_AS_ARRAY.indexOf(value) > -1;
}

function valueExistByArrayIncludes(value) {
  return VALUES_AS_ARRAY.includes(value);
}

// Run tests
console.log('Starting Tests...');
const NUMBER_OF_RUNS = 100 * 1000 * 1000;
const VALUE_EXIST = 'seventh';
const VALUE_NOT_EXIST = 'fortytwo';

// valueExistByObjectProperty
console.group('valueExistByObjectProperty()', NUMBER_OF_RUNS, 'times');
console.time('VALUE_EXIST');
for (let i = 0; i < NUMBER_OF_RUNS; i++) {
  valueExistByObjectProperty(VALUE_EXIST);
}
console.timeEnd('VALUE_EXIST');
console.time('VALUE_NOT_EXIST');
for (let i = 0; i < NUMBER_OF_RUNS; i++) {
  valueExistByObjectProperty(VALUE_NOT_EXIST);
}
console.timeEnd('VALUE_NOT_EXIST');
console.groupEnd();

// valueExistByObjectHasOwnProperty
console.group('valueExistByObjectHasOwnProperty()', NUMBER_OF_RUNS, 'times');
console.time('VALUE_EXIST');
for (let i = 0; i < NUMBER_OF_RUNS; i++) {
  valueExistByObjectHasOwnProperty(VALUE_EXIST);
}
console.timeEnd('VALUE_EXIST');
console.time('VALUE_NOT_EXIST');
for (let i = 0; i < NUMBER_OF_RUNS; i++) {
  valueExistByObjectHasOwnProperty(VALUE_NOT_EXIST);
}
console.timeEnd('VALUE_NOT_EXIST');
console.groupEnd();

// valueExistByArrayIndexOf
console.group('valueExistByArrayIndexOf()', NUMBER_OF_RUNS, 'times');
console.time('VALUE_EXIST');
for (let i = 0; i < NUMBER_OF_RUNS; i++) {
  valueExistByArrayIndexOf(VALUE_EXIST);
}
console.timeEnd('VALUE_EXIST');
console.time('VALUE_NOT_EXIST');
for (let i = 0; i < NUMBER_OF_RUNS; i++) {
  valueExistByArrayIndexOf(VALUE_NOT_EXIST);
}
console.timeEnd('VALUE_NOT_EXIST');
console.groupEnd();

// valueExistByArrayIncludes
console.group('valueExistByArrayIncludes()', NUMBER_OF_RUNS, 'times');
console.time('VALUE_EXIST');
for (let i = 0; i < NUMBER_OF_RUNS; i++) {
  valueExistByArrayIncludes(VALUE_EXIST);
}
console.timeEnd('VALUE_EXIST');
console.time('VALUE_NOT_EXIST');
for (let i = 0; i < NUMBER_OF_RUNS; i++) {
  valueExistByArrayIncludes(VALUE_NOT_EXIST);
}
console.timeEnd('VALUE_NOT_EXIST');
console.groupEnd();

// Summary
console.log('Tests Done');
