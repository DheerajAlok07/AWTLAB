function *display()
{
   console.log("hi");
   console.log("how r u");
   yield(10);
   console.log("from display function");
}
console.log("welcome");
var a=display();
 
console.log(a.next());
console.log("how are you");
console.log(a.next());
 