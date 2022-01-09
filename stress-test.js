var async = require("async");
var request = require("request");
const Request = require("request/request");
const prompt = require("prompt-sync")({ sigint: true });
var url = prompt("What is the url of the website you want to stress test? ");
var usersAmmount = [2000, 3500, 5000, 7500, 10000]
console.log("STRESS TEST STARTED ...");
startStressTest(url)

function startStressTest(url) {

    var positiveRequests = 0;
    var arr = [];
    var count = 0;

    for (let i = 0; i < usersAmmount[0]; i++) {
        arr.push(url);
    }

    async.map(arr, function (url, callback) {
        count++;

        request(url, function (error, response) {
            if (!error && response.statusCode == 200) {
                positiveRequests++;
                callback(null);
            } else {
                if (count === arr.length) {
                    callback(error);
                } else {
                    callback(null);
                }
            }
        });
    },
                   function (err) {
            if (!err) {
                console.log('All the requests arrived. The number of requests was: ' + positiveRequests);
                if (usersAmmount.length > 0) {
                    startStressTest(url);
                    usersAmmount.splice(0, 1)
                }
            }
            else {
                console.log("A total of " + positiveRequests + " successful reqeuests were sent out of " + usersAmmount[0])
                console.log("Number of Failed Requests were " + (usersAmmount[0] - positiveRequests));
                console.log("Completion rate : " + ((positiveRequests / arr.length) * 100));
                if (positiveRequests !== 0) {
                    if (usersAmmount.length > 1) {
                        startStressTest(url);
                        usersAmmount.splice(0, 1);
                    }
                }
                else {
                    return;
                }
            }
        });
}
