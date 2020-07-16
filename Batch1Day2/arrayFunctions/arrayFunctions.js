/*The concat() method is used to join two or more arrays.This method does 
not change the existing arrays, but returns a new array, containing the 
values of the joined arrays.*/

document.write(`<p>arr1=["a","b","c","x","y","z"]</p>
<p>arr2=["d","e","f"]</p>
<p>arr3=[1,2,3]</p>
<p>arr4=["alpha","beta","gamma"]</p>`);

document.write("<br>");
var arr1=["a","b","c","x","y","z"];
var arr2=["d","e","f"];
var arr3=[1,2,3];
var arr4=["alpha","beta","gamma"]
var arr=arr1.concat(arr2,arr3);

document.write(`<p>arr1.concat(arr2,arr3)</p>`);
document.write(arr);
document.write("<br>");
document.write("<br>");



/*The copyWithin() method copies array elements to another position in the
 array, overwriting the existing values.This method will never add more 
 items to the array.*/

//Syntax : array.copyWithin(target, start, end)
document.write(`<p>arr1.copyWithin(3,0,3)</p>`);
arr=arr1.copyWithin(3,0,3);
document.write(arr);
document.write("<br>");
document.write("<br>");

/*The entries() method returns an Array Iterator object with key/value pairs.
 For each item in the original array, the new iteration object will contain
 an array with the index as the key, and the item value as the value:
 Eg: 
 0:a
 1:b
 2:c
 3:x
 4:y
 5:z
 */

var arrElements=arr1.entries();
document.write(`<p>arr1.entries()</p>`);
for (iterate of arrElements)
{
    document.write(iterate);
    document.write("<br>");
}
document.write("<br>");

/*The fill() method fills the specified elements in an array with a static
value.You can specify the position of where to start and end the filling. 
If not specified, all elements will be filled.
Syntax : array.fill(value, start, end)
*/

document.write(`<p>arr1.fill("a",3,6)</p>`)
arr=arr1.fill("a",3,6);
document.write(arr);
document.write("<br>");
document.write("<br>");

/*The filter() method creates an array filled with all array elements that
pass a test (provided as a function).
Note: filter() does not execute the function for array elements without 
values.
Note: filter() does not change the original array.

Syntax : array.filter(function(currentValue, index, arr), thisValue)*/

/*The every() method checks if all elements in an array pass a test 
(provided as a function).The every() method executes the function once 
for each element present in the array: 
If it finds an array element where the function returns a false value, 
every() returns false (and does not check the remaining values)
If no false occur, every() returns true
Note: every() does not execute the function for array elements without values.
Note: every() does not change the original array

Syntax : array.every(function(currentValue, index, arr), thisValue)
*/

document.write("<br>");
document.write(`<p>arr1.every(vowel).. Before filtering the array</p>`)
document.write(arr1.every(vowel));
function vowel(letter)
{
    return letter=="a"|letter=="i"|letter=="o"|letter=="u"|letter=="e";
}
document.write(`<p>arr1.filter(vowel)..where vowel is a function(user defined)"</p>`)
arr1=arr1.filter(vowel)
document.write(arr1);
document.write(`<p>arr1.every(vowel).. After filtering the array</p>`)
document.write(arr1.every(vowel));
document.write("<br>");
document.write("<br>");

/*The shift() method removes the first item of an array.
Note: This method changes the length of the array.
Note: The return value of the shift method is the removed item.
Tip: To remove the last item of an array, use the pop() method.
Note: this method will change the original array.

Syntax : array.shift()*/

document.write('<p>arr4.shift()</p>');
var temp=arr4.shift();
document.write(temp);
document.write("<br>");
document.write("<br>");

/*The unshift() method adds new items to the beginning of an array,and 
returns the new length.
Note: This method changes the length of an array.
Tip: To add new items at the end of an array, use the push() method.

Syntax : array.unshift(item1, item2, ..., itemX)*/

document.write('<p>arr4.unshift("alpha","epsilon")..After unshifting aplha epsilon</p>');
arr4.unshift("alpha","epsilon");
document.write(arr4);
document.write("<br>");
document.write("<br>");


/*The pop() method removes the last element of an array, and returns that 
element.
Note: This method changes the length of an array.
Tip: To remove the first element of an array, use the shift() method.

Syntax : array.pop()*/

document.write('<p>arr4.pop()</p>');
temp=arr4.pop();
document.write(temp);
document.write("<br>");
document.write("<br>");

/*The push() method adds new items to the end of an array, and returns the 
new length.
Note: The new item(s) will be added at the end of the array.
Note: This method changes the length of the array.
Tip: To add items at the beginning of an array, use the unshift() method.

Syntax : array.push(item1, item2, ..., itemX)*/

document.write('<p>arr4.push("gamma","delta")</p>');
arr4.push("gamma","delta");
document.write(arr4);
document.write("<br>");
document.write("<br>");

/*The reverse() method reverses the order of the elements in an array.
Note: this method will change the original array.

Syntax : array.reverse()*/ 

document.write('<p>arr4.reverse()</p>');
arr4.reverse();
document.write(arr4);
document.write("<br>");
document.write("<br>");

/*The slice() method returns the selected elements in an array, as a new 
array object.
The slice() method selects the elements starting at the given start 
argument, and ends at, but does not include, the given end argument.
Note: The original array will not be changed.

Syntax : array.slice(start, end)*/

document.write('<p>arr4.slice(1,5)</p>');
arr4=arr4.slice(1,5);
document.write(arr4);
document.write("<br>");
document.write("<br>");

/*The splice() method adds/removes items to/from an array, and returns the 
removed item(s).
Note: This method changes the original array.

Syntax : array.splice(index, howmany, item1, ....., itemX)
**howmany	Optional. The number of items to be removed. If set to 0, no 
items will be removed 
*/

document.write('<p>arr4.splice(2,0,"delta")</p>');
arr4.splice(2,0,"delta");
document.write(arr4);
document.write("<br>");
document.write("<br>");

/*The map() method creates a new array with the results of calling a 
function for every array element.
The map() method calls the provided function once for each element in an 
array, in order.
Note: map() does not execute the function for array elements without values.
Note: this method does not change the original array.

Syntax : array.map(function(currentValue, index, arr), thisValue)*/

document.write('<p>arr3.map(mul)..mul is a function(user defined)</p>');
function mul(num)
{
    return num*2;
}
arr3=arr3.map(mul);
document.write(arr3);
document.write("<br>");
document.write("<br>");


/*The join() method returns the array as a string.
The elements will be separated by a specified separator. The default 
separator is comma (,).
Note: this method will not change the original array.

Syntax : array.join(separator) 
**separator	Optional. The separator to be used. If omitted, the elements 
are separated with a comma
*/

document.write('<p>arr2.join();</p>');
temp=arr2.join();
document.write(temp);