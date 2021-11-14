DO NOT MODIFY THE HTML FILE
Add your code to script.js
use document.querySelector to change the colors of tags in the following manner:

1. The element with id="red" should have red text
2. elements with class="blue" should have green text
3. <p> elements should have blue text

There are multiple p elements and multiple elements with class="blue"

You may need to review css selectors here: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics#different_types_of_selectors

The most important are:
1. <div class="danger">WARNING</div>

    would be selected as:

    const danger = document.querySelectorAll('.danger');

2. <p>This is some text</p>

    would be selected as

    const paragraphs = document.querySelectorAll('p');

3. <div id="myDiv">This is my div</div>

    would be selected as

    const myDiv = document.querySelector('#myDiv');

    *** we use querySelector for id selection because there should only be one unique id ***