// Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?

bar(foo());			// => "no"

// Invoking the function foo() returns "yes" regardless of the default parameter, and "yes"
// is then passed as an argument to bar(). bar("yes") returns "no" as the expression
// "yes" === "no" evaluates to false.