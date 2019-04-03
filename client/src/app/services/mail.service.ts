import { Injectable } from '@angular/core';
import {action, computed, observable} from "mobx";

enum Priority {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3
}

enum State {
  NEEDS_ACTION = 'needs action',
  DOING = 'doing',
  DONE = 'done'
}

interface Mail {
  from: string,
  to: string,
  subject: string,
  message: string,
  dueDate: Date,
  priority: Priority,
  state: State
}

const MIN_LIST = 1;
const MAX_LIST = 10;

@Injectable({
  providedIn: 'root'
})
export class MailService {

  @observable private _mailingList: Mail[] = [];

  constructor() {
    this.updateWithRandomItems();
  }


  /**
   * Getter for the mailing list
   */
  @computed
  public get mails() {
    return this._mailingList;
  }


  /**
   * Update mailing list with random items
   */
  @action
  public updateWithRandomItems() {
    console.log('new mailing list');
    let newMailingList = [];
    for(let i = 0; i < MailService._randomIntFromInterval(MIN_LIST, MAX_LIST); i++){
      newMailingList.push({from: 'jdoe@riverstar.com', to: 'bob@foo.com', subject: 'A random subject', message: `Hello! I'm sending you a random message!`, dueDate: new Date('2018-05-05'), priority: Priority.MEDIUM, state: State.NEEDS_ACTION});
    }
    console.log(newMailingList);
    this._mailingList = newMailingList;
  }

  /**
   * Random integer between two numbers (inclusive)
   *
   * @param min
   * @param max
   */
  private static _randomIntFromInterval(min: number,max: number): number {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
}
