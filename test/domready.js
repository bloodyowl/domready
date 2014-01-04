var tape = require("tape")
  , domReady = require("../")

tape("domready", function(test){

  test.plan(2)
  
  domReady(function(){
    test.assert(/interactive|complete|loaded/.test(document.readyState), "state is ready")
  })

  domReady(function(){
    throw "foo"
  })
  
  domReady(function(){
    test.assert(1, "Errors thown do not affect other callbacks")
  })

})
