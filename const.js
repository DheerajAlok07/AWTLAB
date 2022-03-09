class student 
{
    constructor(name)
    {
        this.name=name;
    }
    display()
    {
        console.log("student name is:"+this.name);
    }
}

let s=new student("hello");
s.display();