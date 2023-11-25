/*******************************************************/
/*      js functions for halloween exercise            */
/*      author: Ruyi                                   */
/*      date: November 2023                            */
/*      version: 1.0                                   */
/*      comment: 2nd exercise for Portfolio            */
/*******************************************************/

function show(element){
    document.getElementById(element).style.visibility="visible";
}

function hide(element){
    document.getElementById(element).style.visibility="hidden";
}

function sound(element){
    document.getElementById(element).play() 
}
function silence(element){
    document.getElementById(element).pause() 
}