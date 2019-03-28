//vars
const todoBtn = document.querySelector("#todo");
const expensesBtn = document.querySelector("#expenses");
const caloriesBtn = document.querySelector("#calories");

//events
todoBtn.addEventListener("click", showToDoApp);
expensesBtn.addEventListener("click", showExpensesApp);
caloriesBtn.addEventListener("click", showCaloriesApp);


//functions
function showToDoApp(){
    console.log('Showing To Do App...');
}


function showExpensesApp(){
    console.log('Showing Expenses App...');
}

function showCaloriesApp(){
    console.log('Showing Calories App...');
}