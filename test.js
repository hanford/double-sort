'use strict'

var test = require('tape')
var doubleSort = require('./')

var testArray = [{pending: 1, type: 'DEL'}, {pending: 2, type: 'HOLD'}, {pending: 3, type: 'DEL'}]
var testArraySorted = [{pending: 3, type: 'DEL'}, {pending: 1, type: 'DEL'}, {pending: 2, type: 'HOLD'}]

var res = doubleSort(testArray, 'type', 'pending')
console.log(res)

test(function (t) {
  t.deepEqual(doubleSort(testArray, 'type', 'pending'), testArraySorted)
  t.end()
})
