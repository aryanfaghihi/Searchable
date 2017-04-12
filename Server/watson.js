var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var express = require('express');
var crypto = require('crypto');
var fs = require('fs');


var app = express();

app.get('/watson_callback', function (req, res) {
    res.set({
        'Content-Type': 'text/plain'
    });
    res.send(req.query.challenge_string);

    res.send('200');
});

app.post('/watson_callback', function (req, res) {
    console.log(req.body);

    res.send(200);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});


var speech_to_text = new SpeechToTextV1({
    username: '82301658-995c-4b1f-a500-1283ca970d6b',
    password: 'bMJm1IwGr1Ud'
});

// var params = {
//     'callback_url': 'http://00f53a56.ngrok.io/watson_callback'
// };
//
// speech_to_text.registerCallback(params, function (error, response) {
//     if (error)
//         console.log('Error:', error);
//     else
//         console.log(JSON.stringify(response, null, 2));
// });


var params = {
    'content_type': 'audio/flac',
    audio: fs.createReadStream('./Server/audio-file.flac'),
    'callback_url': 'http://00f53a56.ngrok.io/watson_callback',
    'user_token': 'job25',
    continuous: true,
    timestamps: true
};

speech_to_text.createRecognitionJob(params, function (error, job) {
    if (error)
        console.log('Error:', error);
    else
        console.log(JSON.stringify(job, null, 2));
});