document.addEventListener('DOMContentLoaded', function() {
    const quizItems = document.querySelectorAll('.quiz-item');
    const resultContainer = document.querySelector('.result-container');
    const resultImage = document.querySelector('.result-image');
    const restartButton = document.querySelector('.restart-button');
    const audioPlayer = document.createElement('audio');
    document.body.appendChild(audioPlayer);

    quizItems.forEach(item => {
        item.addEventListener('click', function() {
            // Fade out quiz items
            quizItems.forEach(item => {
                item.style.opacity = 0;
            });

            // Play the associated audio
            const audioSrc = item.getAttribute('data-audio');
            audioPlayer.src = audioSrc;
            audioPlayer.play();

            // Show the result image after the fade out
            setTimeout(() => {
                resultImage.src = item.getAttribute('data-result');
                resultContainer.style.display = 'block';
                resultImage.style.opacity = 1;
                restartButton.style.display = 'block';
            }, 500);
        });
    });

    restartButton.addEventListener('click', function() {
        // Stop the audio
        audioPlayer.pause();
        audioPlayer.currentTime = 0;

        // Reset the quiz
        resultContainer.style.display = 'none';
        resultImage.style.opacity = 0;
        restartButton.style.display = 'none';
        quizItems.forEach(item => {
            item.style.opacity = 1;
        });
    });
});
