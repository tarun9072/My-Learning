import { Component } from '@angular/core';


@Component({
  selector: 'app-textform',
  templateUrl: './textform.component.html',
  styleUrls: ['./textform.component.css']
})
export class TextformComponent {
  text:string='';
  wordCount: number = 0;
  characterCount: number = 0;

  handleUpperCase(){
    this.text = this.text.toUpperCase();
  }
  handleLowerCase(){
    this.text = this.text.toLowerCase();
  }

  clearText(){
    this.text='';
  }
  copyText(){
    navigator.clipboard.writeText(this.text);
  }
  handleExtraSpaces(){
    this.text=this.text.replace(/\s+/g, ' ').trim();
  }
  updateWordAndCharacterCount() {
    const words = this.text.trim().split(/\s+/);
    this.wordCount = words.length;
    this.characterCount = this.text.length;
  }
 

  
}
