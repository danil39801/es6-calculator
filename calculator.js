//ES6
// Calculator
      
  calculator = (x, y, type) => {
    error = () => { alert('Error!'); }
        
    if(type == undefined) { error(); return false; }
        
    if(type == '+') { alert(x + y); return false; }
    else if(type == '-') { alert(x - y); return false; }
    else if(type == '*') { alert(x * y); return false; }
    else if(type == '/') { alert(x / y); return false; }
    else { error(); return false; }
  }
      
  calculator(2, 2, '+');
