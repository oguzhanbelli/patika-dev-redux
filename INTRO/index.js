// //
//Primitive Types
// let name = "Oğuzhan";

// // let name2 = name;
// // name2 = 'murat';
// // console.log(name,name2);

//Non Primitive Types

const user = {
  name: "Oğuzhan",
  isActive: true,
};

// const user2 = { ...user, name: "Mahmut" }; //Doğru atama

//veya
const user2 = { ...user };

//veya

// const user2 =Object.assign({},user);

user2.name = "Mahmut";

// user2.name = "Mahmut"; Yanlış Atama

console.log(user, user2);

const numbers = [1, 2, 3, 4];

const numbers2 = [...numbers];//Doğru kopyalama (atama)

numbers2.push(5);

console.log(numbers, numbers2);
