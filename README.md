# _Pig Latin Generator_

#### _Pig Latin, 1.18.17_

#### By _**Michaela Davis and Stella Huayhuaca**_

## Description

_This is a webpage application built using HTML, CSS, Bootstrap, JavaScript, and jQuery, which was built using the behavior-driven development process._
s
## Setup/Installation Requirements

1. Clone this repository using "git clone"
2. Open index.html in any browser

_Does not require a server or setting up a database._

## Program Specifications
* The program returns an error for blank entries, since they do not contain consonants or vowels.
  * Input Example:
  * Output Example: alert("This is not a word. Please enter one.")
* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  * Input Example: 3
  * Output Example: 3
* The program recognizes any word, regardless of inconsistent capitalization.
  * Input Example: cAt
  * Output Example: Atcay
* The program adds "ay" to single-letter words that are a vowel.
  * Input Example: i
  * Output Example: iay
* The program should add "ay" to the end for words that begin with vowel.
  * Input Example: apple
  * Output Example: appleay
* The program should move first consonant to the end and add "ay" after for words that begin with a consonant.
  * Input Example: dog
  * Output Example: ogday
* The program should treat "y" as a consonant for words that begin with "y".
  * Input Example: yellow
  * Output Example: ellowyay
* The program should move first consecutive consonants to the end and add "ay" after for words that begin with more than one consonant.
  * Input Example: chat
  * Output Example: atchay
* The program should consider "u" a consonant when it follows a "q" that is considered a first consecutive consonant.
  * Input Example: squeal
  * Output Example: ealsquay
* The program recognizes all words in a multiple-word sentence.
  * Input Example: cat dog
  * Output Example: atcay ogday


## Known Bugs

_No known bugs or issues_

## Support and contact details

_No support available_

## Technologies Used

_Javascript, jQuery, HTML, CSS, and Bootstrap_

### License

*MIT License*

Copyright (c) 2017 **_Michaela Davis and Stella Huayhuaca_**
