// Author: Samer Ali
class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {

    return this.data[index];
  }

  push(val) {
    //preallocate more space when capacity is reached
    if(this.length === this.capacity) this.resize();


    if(this.data[this.length] === undefined) {
      //check if first index is free
      this.data[0] === undefined ? this.data[0] = val : this.data[this.length] = val;
      this.length += 1;

    } else {
      this.resize();
      this.push(val);
    }

  }


  pop() {

    if (this.length > 0 ) {
      const lastEl = this.data[this.length - 1];
      this.data[this.length -1] = undefined;
      this.length -= 1;
      return lastEl;
    }
    return undefined;
  }

  shift() {

    if(this.length > 0) {
      const firstEl = this.data[0];

      //shift all data over
      for(let i = 0; i < this.length + 1; i++) {
        this.data[i] = this.data[i+1];
      }
      this.length -= 1;
      return firstEl;
    }
    return undefined;
  }

  unshift(val) {

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

    for(let i = 0; i < this.length; i++) {
      if(this.data[i] === val) return i;
    }
    return -1;
  }

  resize() {

    const newArray = new Array(this.capacity * 2)
    this.capacity *= 2;
    for(let i = 0; i < this.data.length; i++) {
      newArray[i] = this.data[i];
    }
    this.data = newArray;
  }

}

module.exports = DynamicArray;
