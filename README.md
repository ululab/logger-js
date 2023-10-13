# logger-js
Scrittura di log basato su winston

Using npm:
```bash
$ npm install @ululab/logger-js
```

Inclusione pacchetto
```js
const Logger = require('@ululab/logger-js');
```

Info
```js
Logger.channel('contatti').info({message: 'Email inviata con successo'})
```
> **File:** /logs/contatti.log
```log
{"label":"contatti","level":"info","message":"Email inviata con successo","timestamp":"2023-08-29T08:45:28.475Z"}
```

Error
```js
Logger.channel('contatti').error({message: 'Email non inviata'})
```
> **File:** /logs/contatti.log
```log
{"label":"contatti","level":"error","message":"Email  non inviata","timestamp":"2023-08-29T08:45:28.475Z"}
```

Per scrivere su un file differente passare il nome del file nel secondo paramentro; se passato in `true` scrive su /logs/app.log
```js
Logger.channel('contatti', 'conattti-my-syte').error({message: 'Email non inviata'})
Logger.channel('contatti', true).error({message: 'Email non inviata'})
```
> **File:** /logs/conattti-my-syte.log
```log
{"label":"contatti","level":"error","message":"Email  non inviata","timestamp":"2023-08-29T08:45:28.475Z"}
```
> **File:** /logs/app.log
```log
{"label":"contatti","level":"error","message":"Email  non inviata","timestamp":"2023-08-29T08:45:28.475Z"}
```
