# logger-js
Scrittura di log basato su winston

Inclusione pacchhetto
```js
const Logger = require('@ululab/logger-js');
```

Info
```js
Logger.channel('contatti').info({message: 'Email inviata con successo'})
```
```log
File: /logs/contatti.log
{"label":"contatti","level":"info","message":"Email inviata con successo","timestamp":"2023-08-29T08:45:28.475Z"}
```

Error
```js
Logger.channel('contatti').error({message: 'Email non inviata'})
```
```log
{"label":"contatti","level":"error","message":"Email  non inviata","timestamp":"2023-08-29T08:45:28.475Z"}
```

Per scrivere su un file differente passare il secondo paramentro, se omesso scrive su /logs/app.log
```js
Logger.channel('contatti', 'conattti-my-syte').error({message: 'Email non inviata'})
```
```log
File: /logs/conattti-my-syte.log
{"label":"contatti","level":"error","message":"Email  non inviata","timestamp":"2023-08-29T08:45:28.475Z"}
```
