Language Translator for LaTeX
Overview
This tool is designed to automatically translate LaTeX documents using a Large Language Model (LLM) provided by Textsynth. It supports translation between multiple languages and includes features to ensure the translated LaTeX code remains accurate and functional.
Requirements
API Key: Obtain a valid API key from Textsynth and save it in a file named api_key.txt in the working directory or set it as an environment variable using export TEXTSYNTH_API_KEY=<the_api_key>.
Rust: Ensure you have a working installation of Rust.
Usage
Navigate to the Project Directory:
bash
cd Language_translator

Run the Tool:
bash
cargo run

By default, this will translate a French LaTeX file test/simple.tex into English and save it as test/simple_en.tex.
Customize Translation:
To translate from one language to another, use the following command:
bash
cargo run -- -i fr -o de -f test/simple.tex

This example translates a French LaTeX file to German.
Installation:
For a more stable and up-to-date version, install using:
bash
cargo install --path .

Supported Languages
The tool currently supports translation between the following languages:
en (English)
fr (French)
es (Spanish)
de (German)
it (Italian)
pt (Portuguese)
ru (Russian)
Features
Chunking: The original LaTeX file is split into manageable chunks using markers %trsltx-split. This can be adjusted manually or using the -l option.
Grammar Constraints: The tool uses a formal BNF grammar to constrain the generated output, ensuring it adheres to the original LaTeX syntax.
Ignore Regions: You can mark regions that should not be translated using %trsltx-begin-ignore and %trsltx-end-ignore markers.
Tips for Improved Results
Error-Free Initial File: Ensure the initial .tex file compiles without errors. LaTeX compilers may ignore unpaired braces, but trsltx will not.
Parser Limitations: If a part of the file is not recognized by the parser, comment it out, remove temporary files, and restart the tool.
Macro Definitions: Define fancy LaTeX macros only in the preamble before \begin{document}. Use meaningful names for macros to help the translator.
Avoid Alternatives to Standard Commands: Do not use alternatives to \cite, \label, and \ref to avoid losing labels, references, and citations in translation.
Avoid Splitting in Math Formulas: Avoid using %trsltx-split in the middle of math formulas, {...} groups, or \begin ... \end environments.
Known Limitations
The parser has several limitations, including issues with \verbatim environments. See the ltxprs documentation for details and possible workarounds.
Contributing
Contributions are welcome. If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request. This README template provides essential information for users to understand how to use the tool, its features, and how to achieve the best results. It also highlights the limitations and encourages contributions to improve the tool further.
