var tape = require("tape")
  , domReady = require("../")

tape("domready", function(test){
  
  var str = ""

  test.plan(2)
  
  domReady(function(){
    test.assert(/interactive|complete|loaded/.test(document.readyState), "state is ready")
    str += "1"
  })
  
  domReady(function(){
    str += "2"
    test.equal(str, "12", "callbacks are executed in the right order")
  })

})
