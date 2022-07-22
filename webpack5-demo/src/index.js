import handler from "./handler"

const init = () => {
    const result = handler.handler1();
    console.log("init" + result);
}

init();

