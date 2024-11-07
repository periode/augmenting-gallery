# React data example

In this example, we display some data inside a component.

In `data/dialogue.js`, you can see our data consists of two sets of dialogue lines, belonging to two different characters, "character 1" and "character 2"

In the `App.jsx`, we have two buttons to decide which dialogue to display ("character 1", or "character 2"). Whatever is the current name of the dialogue is, we pass it to the componenent `DialogueBox`.

In `components/DialogueBox.jsx`, we import the data (`data/dialogue.js`), we check if the current name is not empty (i.e if the visitor has actually clicked on a button), and if that's the case, we display each line of that dialogue, one by one. If we run out of lines, we set the name to nothing (`""`), so we effectively hide the dialogue box, until the visitor clicks on another button.
