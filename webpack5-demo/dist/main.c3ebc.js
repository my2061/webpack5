(() => {
    "use strict";
    const n = { handler1: () => n.handler2(), handler2: () => "handler2" },
        e = n;
    (() => { const n = e.handler1(); console.log("init" + n) })()
})();