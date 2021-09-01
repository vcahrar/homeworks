
    'use strict';
    
    function mapQuiz(inLine){
        inLine =[2,3,9];
    
        //array from parent fuction to be acted 
         //upon by child function AKA Closure
        
        for(let i = 0; i < inLine.length; i++){
            
            console.log('The square of ', inLine[i], 
                ' is ',(inLine[i] * inLine[i]));

            //The function has now been raised to the 2nd power
    }
    
    
    }
    //[function call]
    
    mapQuiz();
