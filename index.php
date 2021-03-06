<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word game</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <div class="header-box">
            <h1 class="title text-center pt-2">Kelly's Fun Music Round!</h1>
            <h3 class="answerText text-center">Answer: </h1>
            <span class="underline"></span>
        </div>
        <div class="game text-center">
        <h1 class="output">Lyrics: </h1>
        <button class="reveal btn btn-light">Click to reveal a letter</button>
        <button class="start btn btn-light">Start a new lyric set</button>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button class="input-word btn btn-outline-secondary" type="button" id="button-addon1">Enter word</button>
            </div>
            <input type="password" class="song form-control" placeholder="Input a word for the game" aria-describedby="button-addon1">
          </div>
        <button class="answer btn btn-light">Reveal the Lyrics.</button>

    </div>
    </div>
    <script src = "app.js"></script>
</body>
</html>