import { Pipe, PipeTransform } from '@angular/core';
import { MessageToUse } from '../models/message';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: MessageToUse[], filterString: string): MessageToUse[] {
    const result: MessageToUse[] = [];
    if (!value || filterString === '') {
      return value;
    } else {
      value.forEach((element: MessageToUse) => {
        if (element.user.username.trim().toLowerCase().includes(filterString.trim().toLowerCase())) {
          result.push(element);
        }
      });
      return result;
    }
  }

}
