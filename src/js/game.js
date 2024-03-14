const typeArr = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
// разделить все классы по файлам
export default class Character {
  constructor(name, type) {
    if (name.length > 1 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Некорректное имя персонажа. Необходимо не менее 2 и не более 10 символов');
    }
    if (typeArr.indexOf(type) !== -1) {
      this.type = type;
    } else {
      throw new Error('Вселенная такой класс еще не создала');
    }
    this.health = 100;
    this.level = 1;
  }
}
