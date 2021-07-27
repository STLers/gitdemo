(function(window){
    function Promise(executor){
        const slef = this
        this.data = undefined
        this.callbacks = []
        this.status = "PENDING"
        function resolve(value){
            if(self.status != "PENDING")return
            self.status = "RESOLVED"
            self.data = value
            setTimeout(() => {
                slef.callbacks.forEach(cbsobj => {
                    cbsobj.onResolved(value)
                })
            })
        }
        function reject(reason){
            if(self.status != "PENDING")return
            self.status = "REJECTED"
            self.data = reason
            setTimeout(() => {
                slef.callbacks.forEach(cbsobj => {
                    cbsobj.onRejected(reason)
                })
            })
        }
        try{
            executor(resolve, reject)
        }catch(error){
            reject(error)
        }
    }
    Promise.prototype.then = function(onResolved, onRejected){
        const self = this
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}
        return new Promise((resolve, reject) => {
            function handle(callback){
                try{
                    const result = callback(self.data)
                    if(result instanceof Promise){
                        result.then(resolve, reject)
                    }else{
                        resolve(result)
                    }
                }catch(error){
                    reject(error)
                }
            }
            if(self.status == "PENDING"){

            }else if(self.status == "RESOLVED"){
                setTimeout(() => {
                    handle(onResolved)
                })
            }else{
                setTimeout(() => {
                    handle(onRejected)
                })
            }
        })
    }
    Promise.prototype.catch = function(onRejected){
        return 
    }
    Promise.race = function(promises){
        return new Promise((resolve, reject) => {
            promises.forEach(promise => {
                resolve, reject
            })
        })
    }
    Promise.all = function(promises){
        const values = new Arraay(promises.length)
        let count = 0;
        return new Promise((resolve, reject) => {
            promises.forEach((promise, index) => {
                promise.then(value => {
                    count++
                    values[index] = value
                    if(count == promises.length)
                        resolve(values)
                }, reject)
            })
        })
    }
})(window)