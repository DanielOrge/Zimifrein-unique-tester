class BaseClass {
  constructor() {
    console.log('BaseClass constructor');
  }
}

class MyClass extends BaseClass {
  constructor() {
    // Missing super() call
    console.log('MyClass constructor');
  }
}

const obj = new MyClass(); 