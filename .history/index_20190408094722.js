const splitOnSpaces = str => str.trim().split(' ');
const getLastOfArr = arr => arr.pop();
const capitalize = str => str[0].toUpperCase() + str.substring(1);

let budget = 1_000_000_000_000;
console.log('budget', budget);

const lastName = 'albert einstein'
  |> splitString('')
  |> getLastOfArr
  |> capitalize;

console.log(lastName); // Einstein

function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Job {
  @readonly
  title() { return 'CEO' }
}

const myJob = new Job();
console.log(myJob.title());
console.log(myJob.title = 'fail reset', "title func:", myJob.title);

function immutable (target) {
  Object.freeze(target);
}

const user = {
  firstName: 'Nikolay',
  age: 0
};

class Person {
  #age = 19;

  #increaseAge() {
    this.#age++;
  }

  birthday() {
    this.#increaseAge();
    alert("Happy Birthday!");
  }
}

immutable(user);

console.log(`
  first name: ${user?.firstName}
  last name: ${user?.lastName ?? 'unknown'}
  age: ${user.age ?? 'unknown'}
`);

user.lastName = 'Aleksandrenko';
console.log(user);


