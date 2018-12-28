console.log('wired');

const budgetController = (function() {

    //1. get input values
    const type = document.querySelector('.add__type').value;
    const desc = document.querySelector('.add__description').value;
    const value = document.querySelector('.add__value').value;
    
    //2. calculate new values 

    return {
        type,
        desc,
        value,
    }

})();


const UIController = (function() {

    //3. update UI display
    
    //4. update UI table

})();

const appController = (function(bdgtCtrlr, UICtrlr) {

    let DOMStrings = {

    }

    const setupListeners = function() {
        //attach listeners to click and enter key

    }

    
    
    

    return {
        init() {
            console.log('started app');
            setupListeners();
        }
    }

})();

