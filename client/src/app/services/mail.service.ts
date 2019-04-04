import {Injectable} from '@angular/core';
import {action, computed, observable} from 'mobx';

enum Priority {
  // LOW = 1,
  MEDIUM = 2,
  // HIGH = 3,
}

enum State {
  NEEDS_ACTION = 'needs action',
  // DOING = 'doing',
  // DONE = 'done',
}

interface Mail {
  from: string;
  to: string;
  subject: string;
  message: string;
  dueDate: Date;
  priority: Priority;
  state: State;
}

const DEFAULT_MIN = 1;
const DEFAULT_MAX = 10;

@Injectable({
  providedIn: 'root',
})
export class MailService {
  @observable
  private _mailingList: Mail[] = [];

  constructor() {
    this.updateWithRandomItems();
  }

  /**
   * Getter for the mailing list
   */
  @computed
  public get mails() {
    console.count('updating mailing list');
    return this._mailingList;
  }

  /**
   * Update mailing list with random items
   */
  @action
  public updateWithRandomItems(
    min: number = DEFAULT_MIN,
    max: number = DEFAULT_MAX,
  ) {
    console.log(`new mailing list with min: ${min} and max: ${max}`);
    let newMailingList = [];
    for (let i = 0; i < MailService._randomIntFromInterval(min, max); i++) {
      newMailingList.push({
        from: 'jdoe@riverstar.com',
        to: 'bob@foo.com',
        subject: 'A random subject',
        message: `Hello! I'm sending you a random message!`,
        dueDate: new Date('2018-05-05'),
        priority: Priority.MEDIUM,
        state: State.NEEDS_ACTION,
      });
    }
    this._mailingList = newMailingList;
  }

  /**
   * Random integer between two numbers (inclusive)
   *
   * @param min
   * @param max
   */
  private static _randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
