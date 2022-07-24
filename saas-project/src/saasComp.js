import "paas/paasComp"

import("jquery").then(module=>{
    const $ = module.default;
    const div = document.createElement("div");
    div.innerText = "我是saas业务的模块～";
    $("#app").append(div);
})
