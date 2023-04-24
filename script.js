let incrementer = document.getElementById("incrementer");
let decrementer = document.getElementById("decrementer");
let reset = document.getElementById("reset");
///creating classes 
class Button {
    constructor(type, elementId, target) {
        this.element = document.getElementById(elementId);
        this.target = document.getElementById(target);
        if (type === "increment") {
            this.element.addEventListener("click", this.increment.bind(this))
        }
        if (type === "decrement") {
            this.element.addEventListener("click", this.decrement.bind(this))
        } if (type === "reset") {
            this.element.addEventListener("click", this.reset.bind(this))
        }
        
        
         
    }
    increment() {
        let count = parseInt(this.target.innerText);
        count++;
        this.target.innerText = count;
        
        
    }
    decrement () {
         let count = parseInt(this.target.innerText);
     if (count > 0) {
       count --;
       this.target.innerText = count;
     }
    }
    reset () {
        let count = parseInt(this.target.innerText);
        this.target.innerText = 0;
    }
}
      let countButton = new Button("increment", "incrementer", "count");
    let decrementButton = new Button("decrement", "decrementer", "count");
    let resetButton = new Button("reset", "reset", "count");
