$(document).ready(function(){

    document.body.innerHTML = '';
    document.body.style.background="white";

    var nums = [1,2,3];

    // Let's loop over the numbers in our array
    for (var i = 0; i < nums.length; i++) {

        // This is the number we're on...
        var num = nums[i];

        // We're creating a DOM element for the number
        var elem = document.createElement('div');
        elem.textContent = num;

        // that inner function has access to numCopy.
        //In the near future, num will increment, but that doesn't matter.
        //The inner function has access to numCopy, which will never change.
        elem.addEventListener('click', (function(numCopy) {
          return function() {
            alert(numCopy)
          };
        })(num));

        // finally, let's add this element to the document
        document.body.appendChild(elem);
    };
    
});