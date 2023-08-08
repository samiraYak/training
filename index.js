Menu = [
 {"name" : "Chicken sandwich", "img" : "https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png" , "price" : "3.5$"},
    {"name" : "Chicken grill", "img" : "https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png" , "price" : "3.5$"},
    {"name" : "Hot pizza", "img" : "https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png" , "price" : "3.5$"},
    {"name" : "wara2 3enab", "img" : "https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png" , "price" : "3.5$"},
    {"name" : "sawda", "img" : "https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png" , "price" : "3.5$"},
]

main = document.getElementById("main");
myP = document.getElementById("hi");

Menu.forEach(element => {
    names = document.createElement("h1");
    names.innerHTML = element.name;
    price= document.createElement("h2");
    price.innerHTML = element.price;
    img= document.createElement("img");
     img.src = element.img;
     img.alt = element.name;
     myImg = document.createElement("div");
     myImg.appendChild(img);
     myImg.classList.add("roundedDiv")
     myDiv = document.createElement("div"); 
     myDiv.classList.add("sandwichDiv")
    myDiv.append(names,price,myImg);
    main.appendChild(myDiv)
    
});





console.log(myDiv);


























// arr1 = [
//     {"name": "Chicken sandwich", "text": "b2alba djej w tum " , "price" : "10","img" : ""},
//     {"name": "chicken grill", "text": "faruj meshwe" , "price" : "20","img" : ""},
//     {"name": "Hot pizza", "text": "peperoni" , "price" : "20","img" : ""}
// ]
// arr2 = [
//     {"name": "Grill Chicken Buffalitos", "text": "jweni7 " , "price" : "20","img" : ""},
//     {"name": "Dessert bakes Cookies", "text": "shokola" , "price" : "5","img" : ""},
//     {"name": "Dhokla", "text": "jebnet tom" , "price" : "7","img" : ""}

// ]
// const table = document.createElement("table");
// const tr1 = document.createElement("tr");
// const tr2 = document.createElement("tr");
// const td1 = document.createElement("td");
// const td2 = document.createElement("td");
// const td3 = document.createElement("td");
// const td4 = document.createElement("td");
// const td5 = document.createElement("td");
// const td6 = document.createElement("td");
// arr1.forEach(element => {
//     const td = document.createElement("td");
//     td.innerHTML = element.name;
//     td.appendChild(tr1);
// });
// arr2.forEach(element => {
//     const td = document.createElement("td");
//     td.innerHTML = element.name;
//     td.appendChild(tr2);
// });
// table.append(tr1,tr2);

 






// const familyMembers = [
//     {"id":"01" , "name":"Loulou" , "age":"0.6"},
//     {"id":"02" , "name":"Hassouna" , "age":"2"},
//     {"id":"03" , "name":"Rama" , "age":"20"},
//     {"id":"04" , "name":"Samra" , "age":"25"},
//     {"id":"05" , "name":"Hasan" , "age":"5"},
//     {"id":"06" , "name":"nouna" , "age":"6"},
// ]
// const  myList = document.getElementById("myList");
// const col1 = document.getElementById("col1");
// const col2 = document.getElementById("col2");
// familyMembers.forEach(element => {
// const id = document.createElement("h2")
// const names = document.createElement("h3")
//    id.innerHTML = element.id;
//    names.innerHTML = element.name;
//    col1.appendChild(id)
//    col2.appendChild(names)
    
// });






// const firstId = document.getElementById("id1");
// const firstName = document.getElementById("name1");
// const firstAge = document.getElementById("age1");
// const secondId = document.getElementById("id2");
// const secondName = document.getElementById("name2");
// const secondAge = document.getElementById("age2");

// const familyMembers = [
//     {"id":"01" , "name":"Loulou" , "age":"0.6"},
//     {"id":"02" , "name":"Hassouna" , "age":"2"},
//     {"id":"02" , "name":"Hassouna" , "age":"2"},
//     {"id":"02" , "name":"Hassouna" , "age":"2"},
//     {"id":"02" , "name":"Hassouna" , "age":"2"},
//     {"id":"02" , "name":"Hassouna" , "age":"2"},
// ]

// firstId.innerHTML = familyMembers[0].id;
// firstName.innerHTML = familyMembers[0].name;
// firstAge.innerHTML = familyMembers[0].age;

// secondId.innerHTML = familyMembers[1].id;
// secondName.innerHTML = familyMembers[1].name;
// secondAge.innerHTML = familyMembers[1].age;