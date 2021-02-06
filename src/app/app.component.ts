import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passLength = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  password = '';

  generatePassword() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnñopqrstuvwxyz';
    const symbols = '!"·$%&/()=@';

    let validChars = '';

    if (this.useLetters) {
      validChars += letters;
    }

    if (this.useNumbers) {
      validChars += numbers;
    }

    if (this.useSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.passLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    return generatedPassword;
  }

  onChangeLength(value: string) {
    let parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.passLength = parsedValue;
    }

    console.log(this.passLength);
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onButtonClick() {
    this.password = this.generatePassword();
  }
}
