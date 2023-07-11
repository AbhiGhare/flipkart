import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterstring:string) {
    if(value.length===0){
      return value
    }

    const users = [];

    for(const user of value){
      if(user['category']==filterstring){
        users.push(user)
      }
        // users.push(user)

    }

    return users;
  }

}
