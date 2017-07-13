# Alienator

<h1>Play</h1>
<a target='_blank' href='https://matthijsperik.github.io/game/dist/'>https://matthijsperik.github.io/game/dist/</a>
<h1>Install</h1>
Clone this repo.<br/>
Run npm i <br/>
Run npm start <br/>
Open localhost:3000<br/>

<h1>Programmeerprincipes</h1>
Interface -> Behaviour/PlayableCharacter<br/>
Static Utility Method -> Utils (Utils/Input)<br/>
Singleton -> Game<br/>
Strategy -> Behaviour / Player<br/>

<h1>UML</h1>
<img src="https://www.dropbox.com/s/r6w0xb4rsgdw9wp/Klassen%20Diagram.jpg?dl=1"/>

<h1>Peer Review</h1>
Klassediagram: Het diagram bevat alle werkende onderdelen en geven onderlingen verbanden duidelijk aan.<br />
Interface: Interface is toegepast op de behavior class die het gedrag Idle en Moving implementeren<br />
Static utility method: Toegepast op de Input class onder Utils. <br />
Singleton: Er is wordt een Singleton aangemaakt voor de Game instantie. <br />
Strategy: Strategy pattern wordt toegepast op de behaviors Moving en Idle. <br />
Encapsulation: Correct toegepast. Classes gebruiken hun eigen properties en kunnen niet die van andere aanpassen. <br /> 
Composition: Composition is toegepast op de GameObject en Player classes.<br />
Inheritance: Inheritance is toegepast op de GameObject en Player classes.<br />
<br />
Alle onderdelen en meer zijn verwerkt in het project. Ik heb verder geen verbeter punten omdat je duidelijk al een heel eind bent.<br />
Prima project!