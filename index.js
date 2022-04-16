//out questions are stored in three arrays:
// let weeklyExpenses = 0
// let monthlyExpenses = 0
// let annualExpenses = 0

// // Your Code Here;mLet's start by asking the user the first question from the weeklyExpenseQuestions array:

// window.prompt(weeklyExpenseQuestions[0])

// //As a user, you should be presented with a question in your browser.

// // Next, let's assign the user's answer to a variable. We'll use console.log so we can confirm that we have the answer using the developer tools:
// let answer = window.prompt(weeklyExpenseQuestions[0])
// console.log(answer)

// //As a user, you should be presented with a question in your browser. If you answer it, you should see your answer appear in the developer tools.So far so good, but at this point, the user's answer is a string; to calculate totals, we will want to turn it into a number:

// // let stringAnswer = window.prompt(weeklyExpenseQuestions[0])
// // let numberAnswer = parseFloat(stringAnswer)
// // console.log(numberAnswer)

// //or for converting input into a number:

// let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
// console.log(answer)


//now that we unpacked how to code above, use this simplified text to update the expense tracker (FB) As a user, you should now be able to enter your answer in the browser, then see both the Weekly Expenses and Total Annual Expenses update in the browser.
//Step 3 sample
// let weeklyExpenses = 0
// let monthlyExpenses = 0
// let annualExpenses = 0

// let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
// weeklyExpenses = weeklyExpenses + answer

//Step4: Add iteration: We've successfully asked the user our first question. We could repeat this code for each question in our array, but that would be a lot of duplicated code. And, someday in the future, we may want to get our questions from somewhere else (maybe a database we can maintain separately from our codebase, for example). So instead, we will use iteration to ask each question in the weeklyExpenseQuestions array. First, let's identify the part of our code that we want to repeat:

// let weeklyExpenses = 0
// let monthlyExpenses = 0
// let annualExpenses = 0

// let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
// weeklyExpenses = weeklyExpenses + answer

//Lines 1-3, which set up our variables for totals, only need to run once. Lines 5 and 6, which ask the user a question, then add the user's answer to the appropriate variable. We want to do this for each of the questions we're going to ask about the user's weekly expenses, so we'll put them inside of our loop:


// Next, we need to fill out the three clauses of our for loop:
// initializer
// condition
// afterthought
// We want our loop to start at the first index in the array, so we'll use the initializer to set i equal to 0:
//We want our loop to go to the end of the array, so we'll use the condition to check if i is still less than the array length:
//And at the end of each cycle of our loop, we want to move to the next index in the array, so we'll increment i:
//At this point, as a user, you'll probably be asked the same question three times.Take a minute to look over your code and try to find the problem on your own before reading further. Did you find the issue? We're hard-coding 0 when using window.prompt to ask the user a question. Instead, we should use the variable i, which is incrementing and therefore selecting a different element in the array each cycle of the loop:


// for(let i = 0; i < weeklyExpenseQuestions.length; i++){
//     let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
//     weeklyExpenses = weeklyExpenses + answer
// }
//remember not to hardcode the questions, setting it to look at array 0 will repeat the first question for as many times are there are items in the array. *note*
// //final code: 
// let weeklyExpenses = 0
// let monthlyExpenses = 0
// let annualExpenses = 0

// for(let i = 0; i < weeklyExpenseQuestions.length; i++) {
//     let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
//     weeklyExpenses = weeklyExpenses + answer
// }
// for(let i = 0; i < monthlyExpenseQuestions.length; i++) {
//     let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
//     monthlyExpenses = monthlyExpenses + answer
// }
// for(let i = 0; i < annualExpenseQuestions.length; i++) {
//     let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
//     annualExpenses = annualExpenses + answer
// }

//Bonus: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while - reverse the order questions are asked, count each number of elements first, remember to index starting at 1, then place the "0" with the max index for each array (ex. weekly has 3 items, index 2 (0, 1, 2), enter increment i = '2')
//completed:
// let weeklyExpenses = 0
// let monthlyExpenses = 0
// let annualExpenses = 0

// for(let i = 2; i < weeklyExpenseQuestions.length; i++) {
//     let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
//     weeklyExpenses = weeklyExpenses + answer
// }
// for(let i = 3; i < monthlyExpenseQuestions.length; i++) {
//     let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
//     monthlyExpenses = monthlyExpenses + answer
// }
// for(let i = 2; i < annualExpenseQuestions.length; i++) {
//     let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
//     annualExpenses = annualExpenses + answer
// }

//Bonus: Read the documentation here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while - Then, try to rewrite each of your for loops as while loops.