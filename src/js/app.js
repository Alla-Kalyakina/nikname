export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUserName() {
    const test = /^[a-z]+/i.test(this.name);
    const test2 = /[a-z]+$/i.test(this.name);
    const test3 = /[a-z0-9-_]*/i.test(this.name);
    const test4 = /\d{4,}/.test(this.name);

    return test && test2 && test3 && !test4;
  }
}
