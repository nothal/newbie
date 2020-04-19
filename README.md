# newbie
JavaScript for newbies. Write code without jargon. Make interactive web page with Javascript in minutes. 

# To start coding
You'll need to know `HTML` and maybe `CSS` for styling the page

Somewhere between `<head>` and `</head>` on your HTML file (preferrably right after `<head>`), type as following:
```html
<script src="/locate/newbie.js"></script>
```
you must locate `newbie.js` by replacing `/locate/newbie.js` with path to `newbie.js` relative to where you put your html file

# Functions to call
| Function Name | `(…)` | Description | Sample Code |
| :- | :-: | :------------ | :------------ |
| .html() | `{}?` | Make HTML element from a string of valid HTML tag | `"div".html({id: "elem-1"})` |
| .text() | `""` | Insert text into an element | `"div".html().text("Hello!")` |
| .has() | `<>+` | Insert elements into an element | `"div".html().has("div".html())` |
| .on() | `{}` | Make HTML element from a string of valid HTML tag | `"div".html().on({click: blink})` |

#### Symbol meaning:
`(…)` meaning parameter that is being accepted by the function

`{}` meaning accept parameter in JSON form

`""` meaning accept string parameter

`<>` meaning accept element as parameter

 `?` meaning accept one parameter but not providing one is acceptable

 `+` meaning accept more than one parameter
 
 `-` meaning not accepting any parameter
