import handler from "./handler"

await new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1);
    }, 1000)
}).then(data=>{
    console.log(data);
})

// const init = () => {
//     const result = handler.handler1();
//     console.log("init" + result);
// }

// init();

// import gif from "../assets/123.gif";
// import png from "../assets/456.png";
// import txt from "../assets/789.txt";
// import jpg from "../assets/91011.jpg";

// console.log("gif", gif);	//期望输出结果根据文件大小决定是否是路径还是base64
// console.log("png", png);	//期望输出结果是路径
// console.log("txt", txt);	//期望输出结果是原始内容
// console.log("jpg", jpg);	//期望输出结果是base64
