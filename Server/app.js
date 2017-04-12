var hbjs = require("handbrake-js");

hbjs.spawn({input: "lecture.mp4", output: "lecture.flac"})
    .on("error", function (err) {
        // invalid user input, no video found etc
        console.log(err);
    })
    .on("progress", function (progress) {
        console.log(
            "Percent complete: %s, ETA: %s",
            progress.percentComplete,
            progress.eta
        );
    });