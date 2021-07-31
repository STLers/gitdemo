(function(window){
    const MyPlugin =  {}
    MyPlugin.install = function(Vue, option){
        Vue.fn1 = function(){
            console.log("fn1")
        }
        Vue.prototype.fn2 = function(){
            console.log("fn2")
        }
    }
    window.MyPlugin = MyPlugin
})(window)