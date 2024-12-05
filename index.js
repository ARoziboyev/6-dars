// 1.Funksiya yozing, u berilgan sonning juft yoki toq ekanligini aniqlasin.

// function sum(son) {
//     if (son % 2 === 0) {
//         return 'Juft';
//     } else {
//         return 'Toq';
//     }
// }

// console.log(sum(4));
// console.log(sum(7));

// 2.Funksiya yozing, u berilgan sonning musbat, manfiy yoki nol ekanligini aniqlasin.


// function sum(son) {
//     if (son >= 0) {
//         return 'musbat';
//     } else {
//         return 'manfi';
//     }
// }

// console.log(sum(4));
// console.log(sum(-4));



// 3.Funksiya yozing, u berilgan ikki sondan kattasini qaytarsin.

// function sum(son1, son2) {
//     if (son1 > son2) {
//         return son1;
//     } else {
//         return son2;
//     }
// }

// console.log(sum(4,8));
// console.log(sum(1,7));

// 4.Funksiya yozing, u uchta sondan eng kattasini aniqlasin.

// function sum(son1, son2, son3) {
//    return  Math.max(son1, son2, son3);
// }

// console.log(sum(4, 8, 10));


// 5.Funksiya yozing, u berilgan sonning 3 ga bo‘linishini aniqlasin.


// function sum(son1) {
//     if (son1 % 3 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(sum(6));


// 6.Funksiya yozing, u berilgan sonning kvadratini qaytarsin.

// function sum(son1) {
//         return son1 * son1;
// }

// console.log(sum(2));

// 7.Funksiya yozing, u ikki sonning ko‘paytmasini hisoblasin.

// function sum(son1, son2) {
//         return son1 * son2;
// }

// console.log(sum(2, 4));



// 8.Funksiya yozing, u berilgan sonni 1 dan boshlab o‘sha songacha bo‘lgan barcha sonlarning yig‘indisini hisoblasin.


// function sum(son) {
//     let res = 0;
//     for (let i = 1; i <= son; i++) {
//         res += i;
//     }
//     return res;
// }

// console.log(sum(5));



// 9.Funksiya yozing, u 1 dan 10 gacha bo‘lgan sonlarning ko‘paytmasini qaytarsin

// function sum() {
//     let caunt = 1;
//     for (let i = 1; i <= 10; i++) {
//         caunt *= i;
//     }
//     return caunt;
// }


// console.log(sum());


// 10.Funksiya yozing, u berilgan sondan boshlab 1 ga kamaytirib chiqaradi.


// function sum(son) {
//   while (son >= 1) {
//     console.log(son);
//     son--;
// }
// }


// console.log(sum(10));


// 11.Funksiya yozing, u berilgan sonni faqat juft bo‘lsa ekranga chiqaradi.

// function sum(son) {
//     if (son % 2 === 0) {
//       console.log(son);
//     }
//   }
//   sum(8)
//   sum(11)


// 12.Funksiya yozing, u berilgan ikki sondan kattasini ternary operator yordamida aniqlasin.

// function sum(num1, num2) {
//     return (num1 > num2) ? num1 : num2;
//   }

// console.log(sum(10,5));
// console.log(sum(1,7));\


// 13.Funksiya yozing, u berilgan son 5 ga va 3 ga bo‘linishini tekshiradi


// function sum(son) {
//     if (son % 5 == 0 || son % 3 == 0) {
//       console.log(son);
//     }
//   }
//   sum(15)
//   sum(25)


// 14.Funksiya yozing, u berilgan sonning kvadrati va kubini qaytaradi.


// function sum(son1) {
//             return son1 * son1 && son1 * son1 * son1;
//     }
//     console.log("kubi");
//     console.log(sum(5));

// 15.Funksiya yozing, u 1 dan 100 gacha bo‘lgan faqat juft sonlarni ekranga chiqaradi.

// function sum() {
//     for (let i = 1; i <= 100; i++) {
//       if (i % 2 === 0) {
//         console.log(i);
//       }
//     }
//   }
//   sum()

// 16.Funksiya yozing, u 1 dan n gacha bo‘lgan toq sonlarni ekranga chiqaradi.

// function sum(n) {
//     for (let i = 1; i <= n; i++) {
//       if (i % 2 !== 0) {
//         console.log(i);
//       }
//     }
//   }
//   sum(20)

// 17.Funksiya yozing, u kiritilgan sonning faktorialini hisoblaydi.

// function sum(son) {
//     if (son < 0) {
//       return "Faktorial faqat musbat sonlar uchun hisoblanadi";
//     }
//     let res = 1;
//     for (let i = 1; i <= son; i++) {
//       res *= i;
//     }
//     return res;
//   }
//   console.log(sum(5));

// 18.Funksiya yozing, u kiritilgan sonni 10 ga bo‘lgandagi qoldiqni qaytaradi.


// function sum(son) {
//     return son % 10;
//   }

//   console.log(sum(25));


// 19.Funksiya yozing, u ikki sonni o‘zaro solishtirib, qaysi biri katta ekanligini ekranga chiqaradi.

// function sum(son1, son2) {
//     if (son1 > son2) {
//       console.log(son1 + " katta.");
//     } else if (son1 < son2) {
//       console.log(son2 + " katta.");
//     } else {
//       console.log("Ikki son teng.");
//     }
//   }
//   sum(4 , 5); 

// 20.Funksiya yozing, u 1 dan 50 gacha bo‘lgan barcha sonlarning yig‘indisini qaytaradi.

// function sum() {
//     let sum = 0;
//     for (let i = 1; i <= 50; i++) {
//       sum += i;
//     }
//     return sum;
//   }
  
//   console.log(sum());


// 21.Funksiya yozing, u berilgan sonning kvadrat ildizini hisoblaydi (math metodlari ishlatilmasin)

// bajarolmadim

// 22.Funksiya yozing, u ikkita sonning o‘rta arifmetik qiymatini hisoblaydi.

// function sum(a, b) {
//     return (a + b) / 2;
// }
// console.log(sum(4, 10));

// 23.Funksiya yozing, u berilgan son musbatmi yoki manfiy ekanligini if orqali aniqlasin.

// function sum(son){
//     if (son > 0) {
//         console.log("musbat")
//     }else{
//         console.log("manfi");
//     }
// }
// sum(20);




// 25.Funksiya yozing, u ikki sonni qo‘shadi, lekin agar sonlardan biri manfiy bo‘lsa, natijaga 10 qo‘shadi.

// function sum(a, b) {
//     let res = a + b;
//     if (a < 0 || b < 0) {
//         res += 10;
//     }
//     return res;
// }
// console.log(sum(5, 3));

// 26.Funksiya yozing, u berilgan ikkita sonni qo‘shadi va ko‘paytiradi, natijalarni alohida qaytaradi.

// bajarolmadim

// 27.Funksiya yozing, u foydalanuvchi kiritgan son 7 ga bo‘linishini aniqlaydi.

// function sum(son){
//     if (son % 7 == 0) {
//         console.log(true);
//     }else{
//         console.log(false);
        
//     }
// }
// sum(21)

// 28.Funksiya yozing, u berilgan sonni xuddi shu tartibda 10 marta ko‘paytirib chiqaradi.

// function sum(son) {
//     let res = son;
//     for (let i = 1; i <= 10; i++) {
//         res *= son
//     }
//     return res;
// }
// console.log(sum(4));


// 29.Funksiya yozing, u ikki sonni ko‘paytiradi, lekin agar sonlardan biri 0 bo‘lsa, natija 1 bo‘ladi.

// bajarolmadim

// 30.Funksiya yozing, u foydalanuvchi kiritgan ikkita sonning modulini hisoblaydi.

// function sum(son1, son2) {
//     let modulA = Math.abs(son1);
//     let modulB = Math.abs(son2); 
//     return { modulA, modulB }; 
// }
// let natija = sum(-5, 3);
// console.log(natija.modulA);
// console.log(natija.modulB); 

// 31.Funksiya yozing, u foydalanuvchi kiritgan sonni faqat manfiy bo‘lsa ekranga chiqaradi.

// function sum(son) {
//     if (son > 0) {
//         console.log(son);
//     } else {
//         console.log("Son manfiy emas");
//     }
// }
// sum(-5);
// sum(5);



// 32.Funksiya yozing, u 1 dan 100 gacha bo‘lgan sonlardan faqat 5 ga karrali bo‘lganlarni ekranga chiqaradi.

// function sum(son) {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 5 == 0) {
//             console.log(i);
            
//         }
    
//     }
  
// }

// console.log(sum());


// 33.Funksiya yozing, u berilgan ikki sonning yig‘indisini hisoblaydi, agar natija juft bo‘lsa, "Juft" deb qaytaradi.

// function sum(a, b) {
//     let res = a + b;
//     if (res % 2 === 0) { 
//         return "Juft";
//     } else {
//         return res;
//     }
// }
// console.log(sum(4, 6));
// console.log(sum(5, 7));


// 34.Funksiya yozing, u foydalanuvchi kiritgan sonning bo‘luvchilarini ekranga chiqaradi

// function sum(a) {
//     console.log("Sonning bo'luvchilari");
//     for (let i = 1; i <= a; i++) {
//         if (a % i === 0) {
//             console.log(i);
//         }
//     }
// }
// sum(12);


// 35.Funksiya yozing, u berilgan sondan kattalik bo‘yicha kichik bo‘lgan barcha toq sonlarni chiqaradi.
// bajaraolmadim

  

// 37.Funksiya yozing, u foydalanuvchi kiritgan sonning barcha bo‘luvchilarini hisoblaydi va yig‘indisini qaytaradi.

// function sum(a) {
//     let res = 0;
//     for (let i = 1; i <= a; i++) {
//         if (a % i === 0) {
//             res += i;
//         }
//     }
//     return res;
// }
// console.log(sum(12));


// 38.Funksiya yozing, u foydalanuvchi kiritgan sonni faqat juft bo‘lsa kvadratini hisoblaydi.

// function sum(a) {
//     if (a % 2 === 0) {
//         return a * a;
//     } else {
//         return "Son juft emas";
//     }
// }

// console.log(sum(4));
// console.log(sum(5));

// 39.Funksiya yozing, u berilgan son 100 dan katta bo‘lsa, uni ikki barobar oshiradi, aks holda 10 qo‘shadi.

// function sum(a) {
//     let res = a;
//     if (a >= 100) {
//         res *= 2;
//     }else{
//         res += 10
//     }
//     return res;
// }
// console.log(sum(100));

// 40.Funksiya yozing, u foydalanuvchi kiritgan sonning barcha raqamlarini birma-bir chiqaradi.


// function sum(a) {
//     let and = a.toString();
//     for (let i = 0; i < and.length; i++) {
//         console.log(and[i]);
//     }
// }
// sum(123);

// 41.Funksiya yozing, u foydalanuvchi kiritgan ikki sonning o‘zaro karrali ekanligini aniqlaydi.

// function sum(a, b) {
//     if (a % b === 0 || b % a === 0) {
//         return "Karrali";
//     } else {
//         return "Karrali emas";
//     }
// }

// console.log(sum(10, 5));
// console.log(sum(7, 3));

// 42.Funksiya yozing, u foydalanuvchi kiritgan sonning raqamlari yig‘indisini hisoblaydi.

// function sum(a) {
//     let and = a.toString();
//     for (let i = 0; i < and.length; i++) {
//         console.log(and[i]);
//     }
// }
// sum(123);

// 43.Funksiya yozing, u 1 dan foydalanuvchi kiritgan sondan katta bo‘lgan barcha sonlarni ekranga chiqaradi.
// tushunmadim

// 45.Funksiya yozing, u 1 dan n gacha bo‘lgan barcha sonlarning kvadratlarini ekranga chiqaradi.

// function sum(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i * i);
//     }
// }
// sum(5);