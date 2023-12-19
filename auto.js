<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MEOW-JI-KAL</title>
</head>

<link rel="stylesheet" type="text/css" href="style.css">

<body>

    <header>
        <img src="https://imgs.search.brave.com/XrUnduf50nhCBlNjnLzI7pfYXMLBu3H0OLLIN7vjjbo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDYw/MTQ5NzYxL3ZlY3Rv/ci9tdXNpYy1iYWNr/Z3JvdW5kLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1TUEV6/WnZqV2trZmEtUUZL/NWk2YnpDX3lTMHQx/WW1VN1M2QWdOdlA5/M3RzPQ" alt="Meow-Ji-Kal Image" style="width: 100%; max-height: 300px; object-fit: cover;">
        <h1>MEOW-JI-KAL</h1>
    </header>

    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="explore.html">Explore</a></li>
            <li id="account"><a href="#">Account</a></li>
        </ul>
    </nav>

    <section>
        <audio id="audioPlayer" controls style="width: 100%;">
            <source src="your_first_song.mp3" type="audio/mp3">
            Your browser does not support the audio element.
        </audio>

        <div id="loginForm" style="display:none;">
            <!-- Login form content -->
        </div>

        <div id="signupForm" style="display:none;">
            <!-- Signup form content -->
        </div>
    </section>

    <script>
        // Example: play the next song automatically after 5 seconds
        setTimeout(function () {
            playNextSong();
        }, 5000);

        function playNextSong() {
            var audio = document.getElementById('audioPlayer');
            audio.src = 'your_next_song.mp3';
            audio.play();
        }

        document.getElementById('account').addEventListener('click', function () {
            document.getElementById('loginForm').style.display = 'block';
            document.getElementById('signupForm').style.display = 'none';
        });
    </script>

    <a href="https://drive.google.com/file/d/1Yg_DElJqaluR2J-PoqPR-4KxJ4lOz3i7/view" target="_blank">Your Favourite Meow-Jik</a>
</body>

</html>
