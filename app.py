from flask import Flask, render_template, request
from googletrans import Translator

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translate', methods=['POST'])
def translate():
    text = request.form['text']
    lang = request.form['lang']
    translator = Translator()
    translated = translator.translate(text, dest=lang)
    return render_template('index.html', translated_text=translated.text)

if __name__ == '__main__':
    app.run(debug=True)
