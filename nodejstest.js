const crypto = require("crypto");

function hash(data, callback) {
  let counter = 0;
  let result = [];
  
  let func = () => {
    if(counter === data.length) {
      callback(result);
      return;
    }
    
    let md5 = crypto.createHash("md5");
    md5.update(data[0]);
    
    result.push(md5.digest('hex'));
    
    counter++;
    process.nextTick(func);
  };
  
  func();
}

hash(["test", "another test", ""], console.log);
setTimeout(() => {
  setTimeout(() => console.log("This should be printed before the hashes"));
});
/* should print
['098f6bcd4621d373cade4e832627b4f6', 
 '5e8862cd73694287ff341e75c95e3c6a',
 'd41d8cd98f00b204e9800998ecf8427e'] */

module.exports.hash = hash;


// function wrapGameAction(emitter, actionName, callback) {
//     // Write your code here
//     let jsonString = JSON.stringify(actionName)
//     emitter.on(actionName, (jsonString) => {
//         console.log(jsonString);
//     });

//   }
  
//   const events = require('events');
  
//   let emitter = new events.EventEmitter();
//   wrapGameAction(emitter, "player_1_select", console.log);
//   emitter.emit("player_1_select", "{ \"row\": 1, \"column\": 1 }");
  
//   module.exports.wrapGameAction = wrapGameAction;













// async function retryRequest(promiseFunc, nrOfRetries) {
//     // Write your code here
//     tries = 0
//     return new Promise(function(resolve, reject) {
//         promiseFunc().then(resolve)
//         .catch(()=>{
//             setTimeout(()=>{
//                 console.log("Still trying")
//                 ++tries
//                 if(tries === nrOfRetries){
//                     return reject('Tries exceeded')
//                 }
//                 retryRequest(promiseFunc, nrOfRetries).then(resolve)
//             })
//         })
//     })
//   }
          
//   let hasFailed = false;
//   function getUserInfo() {
//     return new Promise((resolve, reject) => {
//       if(!hasFailed) {
//         hasFailed = true;
//         reject("Exception!");
//       } else {
//         resolve("Fetched user!");
//       }
//     });
//   }
//   let promise = retryRequest(getUserInfo, 3);
//   if(promise) {
//     promise.then((result) => console.log(result))
//     .catch((error) => console.log("Error!"));
//   }
//   module.exports.retryRequest = retryRequest;