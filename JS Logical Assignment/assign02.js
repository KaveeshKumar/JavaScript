



function Q2(){

    for (i = 0; i < 3; i++){
        const number = prompt("Enter a number: ");
        
        
        if((number <30)&& (number>1)){
            document.write("*".repeat(number));
            document.write ("<br>");
        }

        else{
            alert("Invalid Input");
        }


}

}