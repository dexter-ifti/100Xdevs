## Event Listener
```js
addEventListener(para1, callBack(), true/false){}

event Capturing - whe we'll pass true as a parameter then this tings happens 
Event Bubbling - when we'll pass 'false' as parameter then this thing happens

document.getElementById('images').addEventListener('click', (e) => {
        console.log('You clicked inside the ul');
    });
    document.getElementById('photoshop').addEventListener('click', (e) => {
        console.log('You clicked on the photoshop image');
    });

bubbling up - means first event call the child then the parent so according to this first 'photoshop' gets called then 'images' 

//  output - You clicked on the photoshop image 
// You clicked inside the ul

document.getElementById('images').addEventListener('click', (e) => {
        console.log('You clicked inside the ul');
    }, true);
    document.getElementById('photoshop').addEventListener('click', (e) => {
        console.log('You clicked on the photoshop image');
    }, true);

capture - means first parent will gets called then child 
    /*
    * output - You clicked inside the ul
    * You clicked on the photoshop image
    */
```
### How to Stop Bubbling up

```js
    here comes a method named e.stopPropagation();
    when we use this method then only child will gets called and propagation will stop immediately
```