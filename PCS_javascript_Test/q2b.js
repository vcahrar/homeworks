
var app = {
   
    byTwo(){
            
   'use strict';

      //ask for input, parses the user choice and
         // assigns it into variable variable
      
         var num = parseInt(prompt('Please Pass in the number of times ' + 
                           'you want to increment a loop '));
        
         //Although good programming style usually starts array indexes as 0
       // for this example i will start at one 
       //for the purpose of incrementing   
        
       for (var i =1; i < num; i++){
           console.log('This is increment ',i);

        }
  
      }    
   
   
};

app.byTwo(); 