//-----Declarations

var
memory = "",
decimal = false,
oper = document.getElementsByClassName("operator")
;

//End Declarations

//-----Button Assignment

//Assigns output to numeric buttons > 0
for (i=1; i <= 9; i++) {
    (function(i){
        document.getElementById(i).addEventListener("click", function(){
                document.getElementById("view").value += i;
        });
    })(i);
}

//Assigns 0 seperately to help against coercion
document.getElementById("zero").addEventListener("click", function(){
    document.getElementById("view").value += "0";
});

//Assigns operators
for (i=0; i<oper.length; i++) {
    (function(i){
        oper[i].addEventListener("click", function(){
            document.getElementById("view").value += oper[i].innerHTML;
            decimal = false;
        })
    })(i);
}

//Assigns Decimal
document.getElementById("dec").addEventListener("click", function(){
    if (!decimal) {
        document.getElementById("view").value += ".";
        decimal = true;
    }
})

//Assigns Clear Entry
document.getElementById("CE").addEventListener("click", function(){
        document.getElementById("view").value = memory;
        decimal = false;
    });

//Assigns All Clear
document.getElementById("AC").addEventListener("click", function(){
    memory = "";
    document.getElementById("view").value = "";
    decimal = false;
})

//Evaluates string, stores in memory
document.getElementById("equals").addEventListener("click", function(){
    memory = eval(document.getElementById("view").value);
    document.getElementById("view").value = eval(document.getElementById("view").value);
    decimal = false;
});

//End Button Assignment