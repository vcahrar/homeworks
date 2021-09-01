/*Although, 
    this code is incoplete, I spent a whole week writing it
        and if I had a job that got me out of the house and be 
            independent I would follow through...
                right now I'm under attack of medicine which is only 
                    being prescribed at this dosage because of a lousy 
                        defensive domestic administration...
 */

var app = {
    byOne(){
    'use strict';
    
    
        
       
        var  num = prompt('Please enter a number to be incremented 10 times ');
    
    for(var i = 0; i< 10; i++){
      
    /*return*/ console.log('increment ', num++, ' of ten integers');
       //return increment++;
    
        //return console.log(increment++);
     //console.log(people.length);
    }
    
    },
    
    
   
    
    byTwo(){
            'use strict';
    

         //ask for input & parse it into variable 
             //named 'increment' since i
                
                // for this example i will start at one as an increment   
                for (var i = 1; i < 6; i++){
                    var num = parseInt(prompt('Please enter a number to be incremented 5 times: '));
                    
                   console.log('increment # ', num++, 'Five Times');
              }
              for (i =1; i < 16; i++){
              var num = parseInt(prompt('Please enter a number to be incremented 15 times'));
               num++;
             console.log('increment # ', num, ' 15 times' );
                }
                 
            }
       
};
              
  
app.byOne();
app.byTwo();   
 