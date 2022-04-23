"use strict"

let result = document.querySelector('div');
new URLSearchParams(window.location.search).forEach((value, name) => {
    result.append(`${name} : ${value}`);
    result.append(document.createElement('br'));

    console.log(`${name} : ${value}`);
})
