alert(1)
function quicksort(arr){
    if(arr.length < 2)return arr
    var index = Math.floor(arr.length / 2)
    var val = arr.splice(index, 1)[0]
    var left = [], right = []
    for(var i = 0; i < arr.length; ++i){
        if(arr[i] < val)
            left.push(arr[i])
        else
            right.push(arr[i])
    }
    return quicksort(left).concat(val, quicksort(right))
}