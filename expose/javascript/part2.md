1. 3
variable i can still be access after the for loop although i is declared in the scope of the for loop, that's because it use "var" to declare, so it would be access anywhere within the function scope.

2. 150
With var, we can redeclare a variable any number of times. If we use var with an already-declared variable, it’s just ignored. In the last loop iteration, the variable discountedPrice is updated to 150 and it can still be access after the block because of the scope feature of var.

3. 150
In the last loop iteration, the variable finalPrice with var declared is updated to 150.

4. [ 50, 100, 150 ]
The function return discounted, which is a list declared with var. Within the function, the iteration continue push every finalPrice to the list.

5. ReferenceError: i is not defined.
This because variable i declared with let, which makes it can only be access within the for loop scope.

6. ReferenceError: discountedPrice is not defined
The variable discountedPrice is declared in the for loop with let, so there is no access to it out of the for loop block.

7. 150
finalPrice is defined in the function scope, so we can access it at line 14.

8. [ 50, 100, 150 ]
The function return discounted, which is a list declared with let. Within the function, the iteration continue push every finalPrice to the list.

9. ReferenceError: i is not defined
This because variable i declared with let, which makes it can only be access within the for loop scope.

10. 3
We declare and define const length = prices.length, and the prices input is [100,200,300], whose length is 3

11. [ 50, 100, 150 ]
The function return discounted, which is a list declared with const. Within the function, the iteration continue push every finalPrice to the list. Although discounted is declared with const, it always points to the same array, but the contents of this array can change.

12. 
* A. student.name
* B. student["Grad Year"]
* C. student.greeting()
* D. student["Favorite Teacher"].name
* E. student.courseLoad[0]

13. Arithmetic
* A. string '32', because 2 is converted to '2'
* B. number 1, because '3' is converted into number as the minus operation applies. Numeric conversion in mathematical functions and expressions happens automatically.
* C. 3, because null is converted to number 0 in this case
* D. string 3null, because the + operation convert the primitive type null to string "null"
* E. number 4, because true = 1
* F. number 0, because false = 0 and null = 0 when convert to number type
* G. string 3undefined, the undefined primitive type is converted to string "undefined"
H. number NaN, because - operator will force '3' to be number 3 and undefined to be NaN, and 3-NaN will be NaN

14. Comparison
* A. true, because the comparison operator convert '2' to number 2 and 2 > 1 is true
* B. false, because the string comparision is using lexicographical order, which means strings are compared letter-by-letter. '2' > '1', so '2' > '12'
* C. true, because the comparison operator == convert '2' to number 2 and 2 == 2 is true
* D. false, because strict equality operator === checks the equality without type conversion.
* E. false, because true is 1 in number, and 1 is not equals to 2
* F. true, since 2 is not 0, so Boolean(2) is converted to true, and strict equality operator === checks the equality without type conversion. So true === true is correct.

15.  Explain the difference between the == and === operators.
== operator auto a type convertion for the value that using to compare. A strict equality operator === checks the equality without type conversion.

16. See javascript file

17. [ 2, 4, 6 ] will be the result.
We first call the function modifyArray and pass in the parameters array = [1,2,3] and callback function is doSomething. Then within the modifyArray, we initialized an array newArr.
Then, in the for loop, each time we call the function callback which is doSomething with the parameter array[i], and push the result returned from the callback function to the newArr.
So the newArr was pushed into 2, 4, 6 sequentially, and got returned in the end of the function.

18. See javascript file

19. 1 4 3 2