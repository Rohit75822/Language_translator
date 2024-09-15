function translateText() {
    const inputText = document.getElementById('inputText').value;
    const language = document.getElementById('languageSelect').value;

    fetch('/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText, language: language }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('outputText').innerHTML = data.translatedText;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
