1. values added:  20

2. final result:  20

3. "var" has no block scope which means that variables, declared with var, are either function-scoped or global-scoped. This is dangerous, because this can cause that variables "leak" out of blocks although we may not intend them to be used. Then once we potentially overwriting them, it will make the code harder to debug. 

4. values added:  20

5. /Users/duanyuting/Desktop/CSE110Lab/sp26-cse110-lab4/expose/javascript/part1-question4to5.js:13
    console.log('final result: ', result);
                                  ^

ReferenceError: result is not defined

This is because the variable declared with let has block scope, which means it can only access within it block. Here the scope variable result is only the if statement.

6. /Users/duanyuting/Desktop/CSE110Lab/sp26-cse110-lab4/expose/javascript/part1-question6TO7.js:7
        result = num1 + num2;
               ^

TypeError: Assignment to constant variable.
at sumValues (/Users/duanyuting/Desktop/CSE110Lab/sp26-cse110-lab4/expose/javascript/part1-question6to7.js:7:16)
    at Object.<anonymous> (/Users/duanyuting/Desktop/CSE110Lab/sp26-cse110-lab4/expose/javascript/part1-question6TO7.js:16:1)
    at Module._compile (node:internal/modules/cjs/loader:1830:14)
    at Object..js (node:internal/modules/cjs/loader:1961:10)
    at Module.load (node:internal/modules/cjs/loader:1553:32)
    at Module._load (node:internal/modules/cjs/loader:1355:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

This is because we try to assign a value to a const variable, which is not allowed.

7. The code return an error, because it return an error evernt before reach to the line. Specifically, the execution stops at line 7 due to a TypeError, so line 13 is never executed.