'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var imgs = document.querySelectorAll('.single-post-content>img');

document.querySelector('.single-post-content').innerHTML = '';

[].concat(_toConsumableArray(imgs)).forEach(function (el) {
  return document.querySelector('.single-post-content').append(el);
});
