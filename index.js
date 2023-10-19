class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === 'string') {
      this.data = str.split(',').map(number => Number(number));
    } else {
      this.data = data;
    }
  }

  count() {
    //return the count of numbers in data
    return this.data.length;
  }

  printNumbers() {
    //print the numbers in data
    for (let i = 0; i < this.data.length; i++) {
      console.log(`${i}: ${this.data[i]}`);
    }
  }

  odds() {
    //return the odd numbers in data
    const odds = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] % 2 !== 0) {
        odds.push(this.data[i]);
      }
    }
    return odds;
  }

  evens() {
    //return the even numbers in data
    const evens = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] % 2 === 0) {
        evens.push(this.data[i]);
      }
    }
    return evens;
  }

  sum() {
    //return the sum of the numbers
    let sum = 0;
    for (let i = 0; i < this.data.length; i++) {
      sum += this.data[i];
    }
    return sum;
  }

  product() {
    //return the product of the numbers
    let product = 1;
    for (let i = 0; i < this.data.length; i++) {
      product *= this.data[i];
    }
    return product;
  }

  greaterThan(target) {
    //return the numbers greater than the target
    const greaterThan = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] > target) {
        greaterThan.push(this.data[i]);
      }
    }
    return greaterThan;
  }

  howMany(target) {
    //return the count of a given number
    let count = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === target) {
        count++;
      }
    }
    return count;
  }
}

//Prompt the user for a list of integers separated by commas
const str = window.prompt('enter some numbers, like this', '1,2,3,3,5,9');

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count());//returns count of numbers
n1.printNumbers();//prints the number along with their indexes
console.log(n1.odds());//returns odd numbers
console.log(n1.evens());//returns even numbers
console.log(n1.sum());//returns sum of numbers
console.log(n1.product());//returns product of numbers
console.log(n1.greaterThan(3));//returns numbers greater than another number
console.log(n1.howMany(3));//return the count of a specific number