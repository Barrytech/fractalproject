TinyTurtle.apply(window);

// Call the function squareFractal below. What happens? 
function squareFractal(){
     for(var i = 0; i<20; i = i +1){
         forward(40);
         right(90);
         forward(40);
         right(90);
         forward(40);
         right(90);
         forward(40);
         right(90);
         //turn starting direction 30 degrees
         right(30);
     }
}

// Call the function squareFractal below
    //squareFractal();


//Let's refactor this code an break it up into smaller parts. Write the function square code the that makes a square on the canvas.  
function square(){
     for(var i = 0; i<4; i = i +1){
         forward(40);
         right(90);
         
         
     }
};


// In the loop write the code that rotates the arrow and draws a new square 20 times. 

for(var i = 0; i<20; i = i +1){
    forward(40);
         right(90);
}
    


//Make you're own fractal art using a different shape. 





//do not remove the stamp function. This should remain at the end of the program.
stamp();