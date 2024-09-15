# Language Translator for LaTeX

## Overview
This tool automatically translates LaTeX documents using a Large Language Model (LLM) provided by Textsynth. It supports multiple languages and includes features to ensure that the translated LaTeX code remains accurate and functional.

## Requirements
- *API Key*: Obtain a valid API key from Textsynth and either save it in a file named api_key.txt in the working directory or set it as an environment variable by running: 
  ```bash
  export TEXTSYNTH_API_KEY=<your_api_key>
Rust: Ensure you have a working installation of Rust.
Usage
1. Navigate to the Project Directory
bash
Copy code
cd Language_translator
2. Run the Tool
To run the tool with the default settings, execute the following:

bash
Copy code
cargo run
By default, this will translate a French LaTeX file located at test/simple.tex into English and save it as test/simple_en.tex.

3. Customize Translation
To translate a LaTeX file from one language to another, use the following command:

bash
Copy code
cargo run -- -i fr -o de -f test/simple.tex
In this example, the tool translates a French LaTeX file into German.

Installation
For a stable and up-to-date installation, you can install the tool using:

bash
Copy code
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
Chunking: The original LaTeX file is split into manageable chunks using %trsltx-split markers. This behavior can be adjusted manually or with the -l option.
Grammar Constraints: The tool uses a formal BNF grammar to ensure the translated output follows LaTeX syntax.
Ignore Regions: Use %trsltx-begin-ignore and %trsltx-end-ignore markers to exclude certain regions from translation.
Tips for Improved Results
Error-Free Initial File: Ensure the .tex file compiles without errors. Unlike LaTeX compilers, trsltx won't ignore unpaired braces.
Parser Limitations: If certain parts of the file are unrecognized by the parser, comment them out, remove temporary files, and restart the tool.
Macro Definitions: Define complex LaTeX macros only in the preamble before \begin{document}. Use descriptive names for macros to aid translation.
Standard Commands: Stick to standard commands like \cite, \label, and \ref to avoid translation issues with labels, references, and citations.
Math Formulas: Avoid using %trsltx-split within math formulas, {...} groups, or \begin...\end environments.
Known Limitations
The parser has limitations, especially with \verbatim environments. Refer to the ltxprs documentation for more details and workarounds.
Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.
