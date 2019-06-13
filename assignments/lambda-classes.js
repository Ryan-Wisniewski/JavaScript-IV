// CODE here for your Lambda Classes

class Person{
    constructor(attrs){
        this.name = attrs.name
        this.age = attrs.age
        this.location = attrs.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Teacher extends Person{
    constructor(attrs){
        super(attrs)
        this.specialty = attrs.specialty
        this.favLanguage = attrs.favLanguage
        this.catchPhrase = attrs.catchPhrase
    }
    demo(string){
        return `Today we are learning about ${string}`
    }
    grade(student, subject){
        return `${student} recieves a score perfect on ${subject}`
    }
}

class Student extends Person{
    constructor(attrs){
        super(attrs)
        this.previousBackground = attrs.previousBackground
        this.className = attrs.className
        this.favSubjects = attrs.favSubjects
        }

    listsSubjects(){
        this.favSubjects.forEach(function(listSubject){
        // console.log(listSubject)
        // return listSubject
        })
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }

}

class ProjectManagers extends Teacher{
    constructor(attrs){
        super(attrs)
        this.gradClassName = attrs.gradClassName
        this.favInstructor = attrs.favInstructor
    }
    standup(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(student, subject){
        return `${student} debugs ${Ryan.name}'s code on ${subject}`

    }
}


const dan = new Teacher({
    name: 'Dan',
    age: Infinity,
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia', 
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!'
});

const Mykol = new ProjectManagers({
    name: 'Mykol',
    age: 28,
    location: 'Washington, DC',
    gradClassName: 'WEB18',
    favInstructor: 'Luis Hernandez',
    specialty: 'nodejs and express',
    favLanguage: 'meh',
    catchPhrase: "Wait, what's happening?",
}); 

const Ryan = new Student({
    name: 'Ryan',
    age: 24,
    location: 'Woodstock GA',
    className: 'WEB21',
    previousBackground: 'Cook',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    favLanguage: 'java?',
    catchPhrase: "Dude, wheres my car?",
}); 

// console.log(Ryan)
console.log(Ryan.speak())
console.log(Ryan.listsSubjects())
console.log(Mykol.debugsCode('Mykol', 'Java'))
console.log(Mykol.standup('Slack'))
// console.log(dan)
console.log(dan.demo(dan.favLanguage))
console.log(dan.grade('Ryan', 'Java'))
console.log(Ryan.sprintChallenge('Java Basic'))
console.log(Ryan.PRAssignment('Java Basic'))