import Person from './model/Person';

global.app = () => {
  const me = new Person('John', 'Doe');

  console.info(me.fullname);
  document.getElementById('fullname').innerHTML = me.fullname;
};
