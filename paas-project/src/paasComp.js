
import("jquery").then(module=>{
    const $ = module.default;
    const div = document.createElement("div");
    div.innerText = "我是paas业务的模块～";
    $("#app").append(div);
})

