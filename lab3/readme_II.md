# Lab 3 - Part II - Stars!⭐
Write JavaScript code that uses nested loops to draw a triangle of stars.


## Demo
https://subtle-beignet-6e9d35.netlify.app/q2/

The code should draw a right angled triangle of stars with `n` rows.

The number of rows should be passed as the argument to the function, so you can change the number of rows to make a bigger or smaller triangle. 

```js
drawTriangle(5);
```

```
*
**
***
****
*****
```

# Pseudo-Code  

```js
function drawTriangle(n) {
  // first, loop through the number of rows
    // initialize an empty string to hold the row's contents
    // loop through the number of columns
      // add a star to the row
    // print the row
}
drawTriangle(5);

```

## Hints
-  Use two nested loops.
   -   The outer loop, controlled by the variable `i`, runs `n` times, where `n` is the number of rows passed as an argument to the function `drawTriangle()`.
   - The inner loop, controlled by the variable `j`, runs `i` times, where `i` is the current value of the outer loop variable.
     - On each iteration of the inner loop, a star is added to a `row` variable, and at the end of each iteration of the outer loop, the `row` variable is logged to the console.



## Deliverables
Submit a Netlify link.


## Challenges
Code the following using nested loops:
- Right-angled triangle with the right angle at the top
```
*****
****
***
**
*
```
- Right-angled triangle with the right angle at the bottom
```
*
**
***
****
*****
```
- Isosceles triangle
```
    *
   ***
  *****
 *******
*********
```



- Right-angled triangle with the right angle at the top tilted
```
*****
 ****
  ***
   **
    *
```
- Right-angled triangle with the right angle at the bottom tilted
```
    *
   **
  ***
 ****
*****
```