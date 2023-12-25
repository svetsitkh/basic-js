const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if(!message || !key) {
      throw new Error ('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let resultMessage = '';
    let index = 0;

    for (let i = 0; i < message.length; i += 1) {
      if (message[i].match(/[A-Z]/)) {
        const charCode = ((message.charCodeAt(i) - 65) + (key.charCodeAt(index % key.length) - 65)) % 26 + 65;
        resultMessage += String.fromCharCode(charCode);
        index += 1;
      }
      else resultMessage += message[i];
    }

    if (!this.direct) {
      resultMessage = resultMessage.split('').reverse().join('');
    }

    return resultMessage;
  }
  decrypt(message, key) {
    if(!message || !key) {
      throw new Error ('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let resultMessage = '';
    let index = 0;

    for (let i = 0; i < message.length; i += 1) {
      if (message[i].match(/[A-Z]/)) {
        const charCode = ((message.charCodeAt(i) - 65) - (key.charCodeAt(index % key.length) - 65) + 26) % 26 + 65;
        resultMessage += String.fromCharCode(charCode);
        index += 1;
      }
      else resultMessage += message[i];
    }

    if (!this.direct) {
      resultMessage = resultMessage.split('').reverse().join('');
    }

    return resultMessage;
  }
}

module.exports = {
  VigenereCipheringMachine
};
