/*length,search,substring,substr,replace,concat,upper and lower case,chatAt,
trim,string to Array.*/

/*The length property returns the length of a string (number of characters).
The length of an empty string is 0.

Syntax : string.length*/

var str1="Welcome to JavaScript";
var length=str1.length;
document.write(`<p>str1="Welcome to JavaScript"<br>
str2=" tutorial"<br>
str3=" classes"
</p>`)
document.write(`<p>str1.length</p>`)
document.write(length);
document.write("<br>");
document.write("<br>");
//document.write("<br>");

/*The search() method searches a string for a specified value, and returns 
the position of the match.
The search value can be string or a regular expression.
This method returns -1 if no match is found.

Syntax : string.search(searchvalue)*/ 

var result = str1.search("to");
document.write(`<p>str1.search("to")</p>`);
document.write(result);
document.write("<br>");
document.write("<br>");

/*The substring() method extracts the characters from a string, between two
specified indices, and returns the new sub string.
This method extracts the characters in a string between "start" and "end", 
not including "end" itself.
If "start" is greater than "end", this method will swap the two arguments, 
meaning str.substring(1, 4) == str.substring(4, 1).
If either "start" or "end" is less than 0, it is treated as if it were 0.

Syntax : string.substring(start, end)*/

result = str1.substring(3,17);
document.write(`<p>str1.substring(3,17)</p>`);
document.write(result);
document.write("<br>");
document.write("<br>");

/*The substr() method extracts parts of a string, beginning at the character 
at the specified position, and returns the specified number of characters.
To extract characters from the end of the string, use a negative start 
number.
Note: The substr() method does not change the original string.

Syntax : string.substr(start, length)
*/

result=str1.substr(3,14);
document.write(`<p>str1.substr(3,14)</p>`);
document.write(result);
document.write("<br>");
document.write("<br>");

/*The replace() method searches a string for a specified value, or a regular 
expression, and returns a new string where the specified values are replaced.
Note: If you are replacing a value (and not a regular expression), only the 
first instance of the value will be replaced. To replace all occurrences of 
a specified value, use the global (g) modifier (see "More Examples" below).
This method does not change the original string.

Syntax : string.replace(searchvalue, newvalue) */

document.write(`<p>str1.replace("Welcome","Hi")</p>`)
document.write(str1.replace("Welcome","Hi"));
document.write("<br>");
document.write("<br>");

/*The concat() method is used to join two or more strings.
This method does not change the existing strings, but returns a new string 
containing the text of the joined strings.

Syntax : string.concat(string1, string2, ..., stringX)*/

var str2=" tutorial";
var str3=" classes";
str1=str1.concat(str2,str3);
document.write(`<p>str1.concat(str2,str3)</p>`)
document.write(str1);
document.write("<br>");
document.write("<br>");

/*The toUpperCase() method converts a string to uppercase letters.
Note: The toUpperCase() method does not change the original string.

Syntax : string.toUpperCase()
*/

str1=str1.toUpperCase();
document.write(`<p>str1.toUpperCase()</p>`)
document.write(str1);
document.write("<br>");
document.write("<br>");

/*The toLowerCase() method converts a string to lowercase letters.
Note: The toLowerCase() method does not change the original string.

Syntax : string.toLowerCase()*/

str1=str1.toLowerCase();
document.write(`<p>str1.toLowerCase()</p>`)
document.write(str1);
document.write("<br>");
document.write("<br>");

/*The charAt() method returns the character at the specified index in a 
string.
The index of the first character is 0, the second character is 1, and so on. 

Syntax : string.charAt(index)
*/

result=str1.charAt(25);
document.write(`<p>str1.charAt(25)</p>`)
document.write(result);
document.write("<br>");
document.write("<br>");

/*The trim() method removes whitespace from both sides of a string.
Note: The trim() method does not change the original string.

Syntax : string.trim()*/

str2="    This line will have no spaces to the side of this string    ";
str2=str2.trim();
document.write(`<p>str2.trim()</p>`)
document.write(str2);
document.write("<br>");
document.write("<br>");

/*
The split() method is used to split a string into an array of substrings, 
and returns the new array.
Tip: If an empty string ("") is used as the separator, the string is split 
between each character.
Note: The split() method does not change the original string.

Syntax : string.split(separator, limit)
separator	Optional. Specifies the character, or the regular expression, 
to use for splitting the string. If omitted, the entire string will be 
returned (an array with only one item)
limit	Optional. An integer that specifies the number of splits, items 
after the split limit will not be included in the array
*/

str1=str1.split(" ");
document.write(`<p>str1.split(" ")</p>`)
document.write(str1);
document.write("<br>");
document.write("<br>");

//array function
str1=str1.join('');
document.write(`<p>str1.join('')</p>`)
document.write(str1);
document.write("<br>");
document.write("<br>");
