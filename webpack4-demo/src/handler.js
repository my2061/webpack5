export const handler1 = () => {
    return handler2();
}

export const handler2 = () => {
    return "handler2";
}