const winston = require('winston');

class Logger {

 /**
   * Opzioni di default per il transport http
   */
  static httpOptions =  {
    host: 'localhost',
    port: 80,
    path: ''
  }

 /**
   * Oggetto winston per i logger
   */
  driver = null

  /**
   * Costruttore istanza oggetto Logger con le funzioni base di winston
   *
   */
  constructor(settings) {
    settings.format = this.getFormat(settings.label);

    this.driver = winston.createLogger(settings);
  }

  /**
    * Formato di default per i log
    */
  getFormat(label) {
    return winston.format.combine(
      winston.format.label({label: label}),
      winston.format.timestamp(),
      winston.format.json(),
    )
  }


  setHttpOptions(data) {
    Logger.httpOptions = data;
  }

  /**
    * Oggetto logger winston per log via file
    * @param {Object} settings {format, filename}
    * @return {Object <Logger>}
    */
  static onFile(settings) {
    return new Logger({
      format: settings.format || null,
      label: settings.label || {},
      transports: [
        new winston.transports.File({ filename: settings.filename}),
      ]
    })
  }

  /**
    * Oggetto logger winston per log via http
    * @param {Object} settings {format, httpOptions}
    * @return {Object <Logger>}
    */
  static onHttp(settings) {
    return new Logger({
      format:  settings.format || null,
      label: settings.label || {},
      transports: [
        new winston.transports.Http(settings.httpOptions || Logger.httpOptions()),
      ]
    })
  }

  /**
    * Logging levels (standard):
    * error
    * warn
    * info
    * http
    * verbose
    * debug
    * silly
  */

  log(data) {this.driver.log(data)}
  error(data) {this.driver.error(data)}
  warn(data) {this.driver.warn(data)}
  info(data) {this.driver.info(data)}
  http(data) {this.driver.http(data)}
  verbose(data) {this.driver.verbose(data)}
  debug(data) {this.driver.debug(data)}
  silly(data) {this.driver.silly(data)}

  /**
    * Percorso assoluto del file a partire dalla directory del progetto
    * @param {string} file
    * @return {string} 
    */
  static filePath(file) {
    return process.env.PWD + file;
  }

  /**
    * Creare un un log in un file "{channel.log}" o defaulf "app.log"
    * @param {string} name {format, httpOptions}
    * @param {string|boolean|null} writeInDefault
    * @return {Object <Logger>} 
    */
  static channel(name, writeInDefault = false) {
    let fileName = !writeInDefault ? 'app' : name;
    return Logger.onFile({
      filename: Logger.filePath(`/logs/${fileName}.log`),
      label: name,
    })
  }

}

module.exports = Logger;
module.exports.default = Logger;
