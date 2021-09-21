import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {
  transform(text: string | null, option: string) {
    let finalValue = '';
    if (option === 'pupic') {
      finalValue += '😘';
    } else {
      finalValue += '😡🤬';
    }

    //const myString = finalValue + ' ' +'text';
    const myString = `${finalValue} text`;

    return finalValue;
  }
}
