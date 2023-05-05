// alert is used to show msg by popup and it waits untill user presses on ok
alert("hello world!")


// prompt(msg, default value)
// it has ok/cancle button
var age = prompt("what is ur age?")
 console.log(typeof age)
// document.write(age)
if(age >= 18){
    console.log("user is eligible")
}
else{
    console.log("user is not eligible")
}
var radius = parseInt(prompt("radius:"))
//var area = 3.14 * radius * radius
var area = 3.14 + radius + radius //  without parseInt string interpolation is being done
 //console.log("area of the circle is: " + area)
 console.log(`area of the circle is: ${area}`) // another way of string interpolation or concatenation
var fName= "anjali"
var sName= "sharma"
console.log(` my name is: ${fName} ${sName} `)

 // confirm
 // if u click on ok of this popup ,,u will get true as output
 // if u click on cancle ..u will get false as answer
 var isClassTommarow = confirm("is there class tommarow?")
 console.log(isClassTommarow) 

 var title = null
 if(true){
    title="hello"
    document.write(title)
 }
 else{
    title = "page not found"
    document.write(title)
 }











