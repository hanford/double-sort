# double-sort

> Sort an array on two object properties


## Install

```
$ npm install --save double-sort
```


## Usage

```js
const doubleSort = require('double-sort');

// sort by two object properties
doubleSort([{pending: 1, type: 'DEL'}, {pending: 2, type: 'HOLD'}, {pending, 3, type: 'DEL'}, ...], 'type', 'pending');
//=> [{pending: 3, type: 'DEL'}, {pending, 1, type: 'DEL'}, {pending: 2, type: 'HOLD'}, ...]
```


## API

### doubleSort(input, property1, property2)

Returns a new sorted array.

#### input

Type: `Array`

#### property1

Type: `string`

First parameter to be sorted on.

#### property2

Type: `string`

Second parameter to be sorted on. (property1 will always be respected first.)


## License

MIT © [Jack Hanford](https://jackhanford.com)
