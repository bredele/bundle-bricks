# lego-bricks

  [Brick](http://github.com/bredele/brick) middleware to add the most used bricks.

## Installation

  Install with [component](http://component.io):

    $ component install bredele/bundle-bricks

  Install with [nodejs](http://nodejs.org):

    $ npm install bundle-bricks

## Introduction

First, make sure you created a [brick](http://github.com/bredele/brick).

Then:

```js
var bricks = require('bundle-brick')(controller);

view.use(bricks);
```

  `controller` is an object with functions and/or properties used by some bricks as `events`. The default controller
  is the Brick view itself.

## Events

This middleware includes the [events](http://github.com/bredele/events-brick) brick with the name 
`ev`. 

You can delegate or filter events as following:

```html
<ul ev="on:click .menu, handler">
  <li class="menu">menu 1</li>
  <li>not menut</li>
  <li class="menu">menu 2</li>
</ul>
```
and/or listen predefined events:

```html
<button ev-click="handler">do something</button>
```

Here's a list of the events you can listen:
  - `click`
  - `dblclick`
  - `mousedown`
  - `mouseup`
  - `keydown`
  - `keypress`
  - `keyup`
  - `change`
  - `blur`
  - `focus`
  - `input`
  - `submit`

By default, this brick map mouse events with touch events if you are on a mobile device to get a reactive user experience.

see [example](https://github.com/bredele/bundle-bricks/tree/master/examples/event.html)

## Repeat

This middleware includes the [repeat](http://github.com/bredele/repeat-brick) brick with the name 
`repeat`. 

```html
<ul repeat>
  <li>{{ label }}</li>
</ul>
```
`repeat` use the brick view as [store](http://github.com/bredele/store) and repeat the first child node n times per item into the store.

see [example](https://github.com/bredele/undle-bricks/tree/master/examples/repeat.html)

## License

  The MIT License (MIT)

  Copyright (c) 2014 Olivier Wietrich <olivier.wietrich@gmail.com>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
