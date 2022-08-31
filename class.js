class Intractor {
    name;
    designation = 'Web Corse Intractor';
    team = 'Web team';
    location;
    constructor(myName, myLocation) {
        this.name = myName;
        this.location = myLocation;
    }
    startSupperSession(time) {
        console.log(`Start Support Session today at ${time}`)
    };
    creatQuiz(module) {
        console.log(`Creat some Quiz for module${module}`)
    };
}
const display = new Intractor('sami', 'Sylhet');
const display2 = new Intractor('Shuna', "Don't know");
console.log(display);
display.startSupperSession('9:00');
display.creatQuiz(30);
console.log(display2)