// Author: Samer Ali
class DynamicArray {

  constructor(defaultSize = 4) {
    // Your code here
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {

    // Your code here
    return this.data[index];

  }

  push(val) {

    // Your code here
    if(this.length === this.capacity) this.resize();
    if(this.data[this.length] === undefined) {
      this.data[this.length] = val;
      this.length += 1;

    } else {
      this.resize();
      this.push(val);
    }

  }


  pop() {

    // Your code here
    if (this.length > 0 ) {
      const lastEl = this.data[this.length - 1];
      this.data[this.length -1] = undefined;
      this.length -= 1;
      return lastEl;
    }
    return undefined;
  }

  shift() {

    // Your code here
    if(this.length > 0) {
      const firstEl = this.data[0];
      for(let i = 0; i < this.length + 1; i++) {
        this.data[i] = this.data[i+1];
      }
      this.length -= 1;
      return firstEl;
    }
    return undefined;
  }

  unshift(val) {

    // Your code here
    if(this.length === this.capacity) this.resize();
    if(this.data[this.data.length -1] === undefined) {
      for(let i = this.data.length - 2; i >= 0; i--){
        this.data[i + 1] = this.data[i];
      }
      this.data[0] = val;
      this.length += 1;
    }
    else {
      this.resize();
      this.unshift(val);
    }

  }

  indexOf(val) {

    // Your code here
    for(let i = 0; i < this.length; i++) {
      if(this.data[i] === val) return i;
    }
    return -1;
  }

  resize() {

    // Your code here
    const newArray = new Array(this.capacity * 2)
    this.capacity *= 2;
    for(let i = 0; i < this.data.length; i++) {
      newArray[i] = this.data[i];
    }
    this.data = newArray;
  }

}

module.exports = DynamicArray;
