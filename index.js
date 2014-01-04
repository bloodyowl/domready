var stack = []
  , domReadyRE = /interactive|complete|loaded/
  , isReady = false

function async(fn){
  setTimeout(function(){
    fn()
  }, 0)
}

function checkStatus(){
  var item
  if(isReady) return
  if(domReadyRE.test(document.readyState)) {
    isReady = true
    while(item = stack.shift()) async(item)
    return
  }
  setTimeout(checkStatus, 10)
}
checkStatus()

module.exports = function(fn){
  if(typeof fn != "function") return
  if(isReady) return async(fn)
  stack.push(fn)
}
