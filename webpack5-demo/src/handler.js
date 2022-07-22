
const obj = {
    handler1(){
        return obj.handler2();
    },
    handler2(){
        return "handler2";
    }
}
export default obj;