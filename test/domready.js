var tape = require("tape")
  , domReady = require("../")

domReady(function(){
  throw "foo"
})

tape("domready", function(test){

  test.plan(2)
  
  domReady(function(){
    test.pass("ignores past errors")
  })
  domReady(function(){test.assert(/interactive|complete|loaded/.test(document.readyState), "state is ready")})

})
