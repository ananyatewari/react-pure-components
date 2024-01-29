pure component is performing a better functionality
because once we set the value of toggle to false, it stops rendering the code again and again even after clicking on the increment button

simple component renders the value of count after each onclick, doesn't matter if the value of toggle is true or not
this decreases efficiency of the code (takes more amount of time) since the dom has to keep re rendering even when it's not required (when the value hasn't changed)