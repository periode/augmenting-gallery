# React javascript example

This project builds on the one from [session 7](../session_7/README.md).

The main changes is that we added some variables and functions, to add interactivity on the page.

## Variables

In order to use variables in React, we depart from the traditional way of writing `var myVariable = "hello"`, and instead we write:

```jsx
import {useState} from 'react'

const [myVariable, setMyVariable] = useState("hello")
```

then, to access the variable we can use `myVariable`, as usual. But to change the variable, we have to use `setMyVariable("guten tag")`.
