let hamster = {
   eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    stomach: [],
    __proto__: hamster
  };
  
  let lazy = {
    stomach: [],
    __proto__: hamster
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
  console.log( lazy.stomach ); // apple