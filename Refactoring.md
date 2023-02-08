# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
 1. I added a JSDoc style comment header above the function explaining the expected functionality, expected input parameter and expected return value

 2. I added an early check for an empty/undefined input and returned the trivial key as it is unnecessary to do other logic if so

 3. I initialized the candidate value to the potential partition key key value from input to reduce repetition of initializing it later
 
 4. I added a ternary operator to the return value to ensure the type is string

 5. I also added some one line comments in the validation logic to explain and used my Linter (prettier) to indent the crypto methods nicely so it can be read on narrow windows. 