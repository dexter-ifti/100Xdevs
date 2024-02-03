## Here I will write the flow of the lectures of Hitesh Sir , deliverd on DOM Manipulation
``` Javascript
console.log(window);
console.log(window.document);
console.log(document); // It will give some attribute of document than window.document
console.dir(document); // it will give all attribute same as window.document 
```
```js
console.log(document.links) 
// probably it will give HTML collection which is similar to array but now array , and forEach loop, map, filter cannot be applied here
// but some of the array propperties can be applied here like 
console.log(document.links[2])
// ouptput will 2nd item of HTML collection 
document.getElementById('id');
// we can access the item by id of the Element as above written
``` 
```js
Various Methods
document.getElementById('id').id;
document.getElementById('id').className;
document.getElementById('id').getAttribute('class');
document.getElementById('id').getAttribute('id');
document.getElementById('id').setAttribute('class', 'test');

const title = document.getElementById('title');
title.style.backgroundColor = 'yellow';
title.style.padding = '15px';
title.style.bordarRadius = '5px';
```
### for getting the content of any element
```js
there are thre methods - textContent, innerHTML, innerText
const title = document.getElementById('title');
title.textContent
'DOM learning on Chai or Code test text'
title.innerText
'DOM learning on Chai or Code'
title.innerHTML
'DOM learning on Chai or Code <span style="display: none;">test text</span>'
```
```js
document.querySelector('h2');
// it will give first h2 tag
document.querySelector('#title');
// selecting by id
document.querySelector('.heading');
// selecting by className
document.querySelector('input[type="password"]');
```
```js
const myul = document.querySelector('ul');
const turnGreen = myul.querySelector('li');
turnGreen.style.backgroundColor = "green";
turnGreen.style.padding = "10px"
turnGreen.innerText;
turnGreen.innerText = "kuch bhi";
```
```js
const tempLiList = document.querySelectorAll('li');
tempLiList.style.color = "green";
// this will throw error we have to specify
tempLiList[0].style.color = "green";
tempLiList.forEach((l) => {
    l.style.background.color = "darkorange";
});
```

```js
const tempClassList = document.getElementByClassName('list-item');

tempClassList.forEach(); // not available for this
```

## Converting HTMLCollection / NodeList to Array
```js

const tempClassList = document.getElementByClassName('list-item');

const convertedArray = Array.from(tempClassList);

convertedArray.forEach( (li) => {
    li.style.color = 'orange';
});
```
```js
