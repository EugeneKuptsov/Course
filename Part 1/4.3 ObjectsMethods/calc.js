let calculator = {
    
    read() {
        //this.x = +prompt('Введите число 1', 0);
        //this.y = +prompt('Введите число 2', 0);
        this.x = 2;
        this.y = 3;
    },

    sum() {
        return this.x + this.y;
    },

    mul() {
        return this.x * this.y;
    }

  };
  
  calculator.read();
  console.log( calculator.sum() );
  console.log( calculator.mul() );