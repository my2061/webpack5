import { handler1 } from "./handler"

const init = () => {
    const result = handler1();
    console.log("init" + result);
}

init();