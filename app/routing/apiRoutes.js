// Dependencies
var friends = require("../data/friends.js");

// Exports the function
module.exports = function(app) {
    // Used to display all possible pals
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // Used to handle incoming surveys and compatibility logic
    app.post("/api/friends", function(req, res) {
        
        // Posting and parsing the user's survey results
        var userInput = req.body;
            var userName = userInput.name;
            var userPhoto = userInput.photo;
            var userScores = userInput.scores;

            console.log("user input: " + req.body);
        
        // For holding the best match's data
        var bestMatchName= "";
        var bestMatchPhoto= "";
        var bestMatchDifference = 1000;

        // Will be used to calculate the difference between users' scores
        var totalDifference = 0;

        // Looping through all the friend possibilities
        for (var i = 0; i < friends.length; i++) {
            
            console.log("Friend's name: " + friends[i].name);

            totalDifference = 0;

            // Looping through all of the scores
            for (var j = 0; j < friends[i].scores[j]; j++) {

                // Calculating the difference between the scores
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // If the differences is < the differences of the current "best match"
                if (totalDifference <= bestMatchDifference) {

                    // Resetting the bestMatch variable
                    bestMatchName = friends[i].name;
                    bestMatcPhoto = friends[i].photo;
                    bestMatchDifference = totalDifference;
                }
            }
        }

       // Saving off the user's input to the database
       friends.push(userInput);
       
       // Returning the user's best match
       res.json(bestMatchName);
       res.json(bestMatchPhoto);
       res.json(bestMatchDifference);
    });
}