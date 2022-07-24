(function (modules) {
    //模块的缓存
    var moduleCache = {};  
    /**
     * 给我一个模块id，运行该模块对象的函数，并得到模块的导出结果
     * @param {string} moduleId 模块的路径
     */
    function __webpack_require__(moduleId){
        // 如果有缓存直接返回缓存结果
        if(moduleCache[moduleId]) return moduleCache[moduleId];
        //模块id对应的函数
        var handler = modules[moduleId];  
        var module = {
            exports: {}
        };
        //运行模块
        handler(module, module.exports, __webpack_require__);   
        // 运行完模块后缓存结果
        moduleCache[moduleId] = module.exports;
        //运行完模块之后，module.exports可能有值了，所以直接导出
        return module.exports;  
    }
    //首次进来要运行入口模块
    __webpack_require__("./src/index.js");  
})(
    {
        "./src/index.js": function (module, exports, __webpack_require__) {
            var handler = __webpack_require__("./src/handler.js");
            handler.test();
            console.log(handler);
        },
        "./src/handler.js": function (module, exports, __webpack_require__) {
            console.log("handler module");
            module.export = "handler";
        }
    }
)