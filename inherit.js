class student 
{
    constructor(name)
    {
        this.name=name;
    }
    display()
    {
        console.log("Student name in parent class:"+this.name);
    }
}

class student1 extends student
{
    constructor(name,roll)
    {
        super(name);
        this.roll=roll;
    }
    display1()
    {
        console.log("student roll:"+this.roll);
    }
}

let s=new student1("hello",1251);
s.display();
s.display1();