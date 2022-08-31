class TeamMember {
    name;
    location;
    constructor(myName, myLocation) {
        this.name = myName;
        this.location = myLocation;
    };
    startSupperSession(time) {
        console.log(`Start Support Session today at ${time}`)
    };
    creatQuiz(module) {
        console.log(`Creat some Quiz for module${module}`)
    };

}



class Intractor extends TeamMember {

    designation = 'Web Corse Intractor';
    team = 'Web team';

    constructor(myName, myLocation) {
        super(myName, myLocation);
    }
    startSupperSession(time) {
        console.log(`Start Support Session today at ${time}`)
    };
    creatQuiz(module) {
        console.log(`Creat some Quiz for module${module}`)
    };
}


class Developer extends TeamMember {

    designation = 'Web Corse Intractor';
    team = 'Web team';

    constructor(myName, myLocation) {
        super(myName, myLocation);
    }
    startSupperSession(time) {
        console.log(`Start Support Session today at ${time}`)
    };
    creatQuiz(module) {
        console.log(`Creat some Quiz for module${module}`)
    };
}


class JobPlacement extends TeamMember {

    designation = 'Web Corse Intractor';
    team = 'Web team';

    constructor(myName, myLocation) {
        super(myName, myLocation);
    }
    startSupperSession(time) {
        console.log(`Start Support Session today at ${time}`)
    };
    creatQuiz(module) {
        console.log(`Creat some Quiz for module${module}`)
    };
};

const sami = new JobPlacement('Sami', 'Sylhet');
console.log(sami);
sami.startSupperSession('9:30')