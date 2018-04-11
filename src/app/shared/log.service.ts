import { Injectable } from '@angular/core';
@Injectable()
export class LogService {
  log(msg: any) {
    let logs = {
    'date': new Date(),
    'message': msg
    }
    console.log(logs)
  }
}