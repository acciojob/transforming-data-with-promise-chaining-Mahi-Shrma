// const btn = document.getElementById('btn');
// const output = document.getElementById('output');

// btn.addEventListener('click', () => {
//     const number = parseInt(document.getElementById('ip').value);

//     function f1(number) {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(number);
//             }, 2000);
//         });
//     }

//     f1(number)
//         .then((number) => {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     const result = number;
//                     output.innerText = `Result: ${result}`;
//                     resolve(result);
//                 }, 2000);
//             });
//         })
//         .then((number) => {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     const result = number;
//                     output.innerText = `Result: ${result}`;
//                     resolve(result);
//                 }, 2000);
//             });
//         })
//         .then((number) => {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     const result = number * 2;
//                     output.innerText = `Result: ${result}`;
//                     resolve(result);
//                 }, 1000);
//             });
//         })
//         .then((number) => {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     const result = number - 3;
//                     output.innerText = `Result: ${result}`;
//                     resolve(result);
//                 }, 1000);
//             });
//         })
//         .then((number) => {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     const result = number / 2;
//                     output.innerText = `Result: ${result}`;
//                     resolve(result);
//                 }, 1000);
//             });
//         })
//         .then((number) => {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     const result = number + 10;
//                     output.innerText = `Result: ${result}`;
//                     resolve(result);
//                 }, 1000);
//             });
//         })
//         .then((number) => {
//             output.innerText = `Final Result: ${number}`;
//         })
//         .catch((error) => console.error(error));
// });

const btn= document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click',()=>{
	const number = parseInt(document.getElementById('ip').value);
	function f1(number){
		return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(number);
		},2000)
	});
}
f1(number)
.then((number)=>{
	return new Promise((resolve) => {
            setTimeout(() => {
                const result = number;
                output.innerText =`Result: ${result}`;
                resolve(result);
            }, 2000);
        });
})
.then((number)=>{
	return new Promise((resolve) => {
            setTimeout(() => {
                const result = number;
                output.innerText =`Result: ${result}`;
                resolve(result);
            }, 2000);
        });
})
.then((number)=>{
	return new Promise((resolve) => {
            setTimeout(() => {
                const result = number*2;
                output.innerText = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
})
.then((number)=>{
	return new Promise((resolve) => {
            setTimeout(() => {
                const result = number-3;
                output.innerText =`Result: ${result}`;
                resolve(result);
            }, 1000);
        });
})
.then((number)=>{
	return new Promise((resolve) => {
            setTimeout(() => {
                const result = number/2;
                output.innerText =`Result: ${result}`;
                resolve(result);
            }, 1000);
        });
})
.then((number)=>{
	return new Promise((resolve) => {
            setTimeout(() => {
                const result = number+10;
                output.innerText =`Result: ${result}`;
                resolve(result);
            }, 1000);
        });
})
.then((number)=>{
                output.innerText =`Final Result: ${number}`;
        }).catch((error) => console.error(error));
});







// btn.addEventListener('click',f1().
// then((number)=>{
// 	return new Promise((resolve) => {
//             setTimeout(() => {
//                 const result = number;
//                 output.innerText = Result: <result>;
//                 resolve(result);
//             }, 2000);
//         });
// })
// .then((number)=>{
// 	return new Promise((resolve) => {
//             setTimeout(() => {
//                 const result = number;
//                 output.innerText = Result: <result>;
//                 resolve(result);
//             }, 2000);
//         });
// })
// .then((number)=>{
// 	return new Promise((resolve) => {
//             setTimeout(() => {
//                 const result = number*2;
//                 output.innerText = Result: <result>;
//                 resolve(result);
//             }, 1000);
//         });
// })
// .then((number)=>{
// 	return new Promise((resolve) => {
//             setTimeout(() => {
//                 const result = number-3;
//                 output.innerText = Result: <result>;
//                 resolve(result);
//             }, 1000);
//         });
// })
// .then((number)=>{
// 	return new Promise((resolve) => {
//             setTimeout(() => {
//                 const result = number/2;
//                 output.innerText = Result: <result>;
//                 resolve(result);
//             }, 1000);
//         });
// })
// .then((number)=>{
// 	return new Promise((resolve) => {
//             setTimeout(() => {
//                 const result = number+10;
//                 output.innerText = Result: <result>;
//                 resolve(result);
//             }, 1000);
//         });
// })
// .then((number)=>{
// 	return new Promise((resolve) => {
//             setTimeout(() => {
//                 const result = number;
//                 output.innerText =Final Result: <result>;
//                 resolve(result);
//             }, 0);
//         });
// }).catch((error) => console.error(error));
// );

// function f1(number){
// 	return new Promise((resolve)=>{
// 		setTimeout(()=>{
// 			resolve(number);
// 		},2000)
// 	});
// };
// f1().
// then((number)=>{
// 	return new Promise((resolve) => {
//             setTimeout(() => {
//                 const result = number;
//                 output.innerText = Result: <result>;
//                 resolve(result);
//             }, 2000);
//         });
// })
// .then((number)=>{
// 	return new Promise((resolve) => {
//             setTimeout(() => {
//                 const result = number;
//                 output.innerText = Result: <result>;
//                 resolve(result);
//             }, 2000);
//         });
// })
// .then((number)=>{
// 	return new Promise((resolve) => {
//             setTimeout(() => {
//                 const result = number*2;
//                 output.innerText = Result: <result>;
//                 resolve(result);
//             }, 1000);
//         });
// })
// .then((number)=>{
// 	return new Promise((resolve) => {
//             setTimeout(() => {
//                 const result = number-3;
//                 output.innerText = Result: <result>;
//                 resolve(result);
//             }, 1000);
//         });
// })
// .then((number)=>{
// 	return new Promise((resolve) => {
//             setTimeout(() => {
//                 const result = number/2;
//                 output.innerText = Result: <result>;
//                 resolve(result);
//             }, 1000);
//         });
// })
// .then((number)=>{
// 	return new Promise((resolve) => {
//             setTimeout(() => {
//                 const result = number+10;
//                 output.innerText = Result: <result>;
//                 resolve(result);
//             }, 1000);
//         });
// })
// .then((number)=>{
// 	return new Promise((resolve) => {
//             setTimeout(() => {
//                 const result = number;
//                 output.innerText =Final Result: <result>;
//                 resolve(result);
//             }, 0);
//         });
// }).catch((error) => console.error(error));











