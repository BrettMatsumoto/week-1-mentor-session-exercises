/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */

function firstReverse(str){
    if (typeof str !== 'string'){
        return null
    } else {
        var makeArr = str.split('');
        var revArr = makeArr.reverse();
        var makeStr = revArr.join('');
    }
    return makeStr;
}
 

 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */

 function alphaOrder(str){
     if (typeof str !== 'string'){
         return null;
     } else {
         var makeArr = str.split('');
         var sortArr = makeArr.sort();
         var makeStr = sortArr.join('')
     }
     return makeStr
 }



 /** Function: vowelCount
 * The function will take the num parameter being passed in and
 * return the number of vowels in the string
 * @param {string} num
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

 function vowelCount(num){
     var vowels = 0;
     var nonVowels = 0;
     if (typeof num !== 'string'){
         return null;
     } else {
        var lowerCase = num.toLowerCase()
        var makeArr = lowerCase.split('');
        for (var i = 0;i<makeArr.length - 1;i++){
            if (makeArr[i] === 'a' || 'e' || 'i' || 'o' || 'u'){
                vowels++
            } else {
                nonVowels++
            }
        }
     }
     return vowels;
 }

 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */
function timeConvert(str){
    if (typeof str !== 'number'){
        return null;
    } else {
    var minutes = str%60;
    var hours = (str - minutes)/60;
    var time = hours + ':' + minutes;
    }
    return time;
}

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */

 function repeatString(str,times){
     if (typeof str !== 'string' || typeof times !== 'number'){
         return null;
     } else {
         return str.repeat(times);
     }
 }


/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse,
    alphaOrder: alphaOrder,
    vowelCount: vowelCount,
    timeConvert: timeConvert,
    repeatString: repeatString
}
