# _Pig Dice Game_

### By _Michael Odongo_

## Description

_This web application allows two players to play a game of Pig Dice._

## BDD
| Behavior        | Input           | Outcome  |
| ------------- |:-------------:| -----:|
| Player 1 inputs name and Player 2 inputs name, and clicks start button | Player 1:  / Player 2:  / Click START | Goes to game console |
| Player 1 clicks ROLL button | Click ROLL button | Dice rolls and number is generated
| If Player 1 rolls any number other than 1, that roll is added to round total | Roll = 2 | Round total = 2 |
| If Player 1 rolls a 1, no score is added and round for Player 1 ends | Roll = 1 | Round total = 2 / Total score = 2 / Player 2 begins |
| Repeat for Player 2 | Roll = 1 | Round total = 0 / Total score = 0 / Player 1 begins |
| When a player's total score reaches 100 or more, game ends and winner page shows | Player 1 total score = 100 | Winner page |

### live site link

<https://modongo.github.io/pig-dice/> 

## Known Bugs

there are currently no known bugs experienced on the website but feedback on bugs encountered during viewing of the page will be highly appreciated and will go a long way into making the website better for the users. The only reason that the website may fail to load is if the Internet connection is slow or disconnected which will require you to troubleshoot your Internet connection


## Setup/Installation Requirements

* _Clone this repository_
* _Open a HTML file_
* _Open web browser of choice_

## Notes


## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2019 **_Michael Odongo_**
