'use strict'

class programmer {
    constructor(name, position, age, language){
        this.name = name;
        this.position = position;
        this.age = age;
        this.language = language;
    }
}

programmer.prototype.print = function(){
    console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " +
    this.Age + "\nLanguage: " + this.language);
};

module.exports = programmer;