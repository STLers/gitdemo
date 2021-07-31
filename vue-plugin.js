(function(window){
    const MyPlugin =  {}
    MyPlugin.install = function(Vue, option){
        Vue.fn1 = function(){}
        Vue.prototype.fn2 = function(){}
    }
    window.MyPlugin = MyPlugin
})(window)