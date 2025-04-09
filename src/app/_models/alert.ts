export class Alert {
<<<<<<< HEAD
  id?: string;
  type: AlertType;
  message: string;
  autoClose?: boolean;
  fade?: boolean;
  keepAfterRouteChange?: boolean;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init || {});
  }
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}
=======
    id : string;
    type: AlertType;
    message: string;
    autoClose: boolean;
    keepAfterRouteChange?: boolean;
    fade: boolean;

    constructor(init?: Partial<Alert>){
        Object.assign(this,init);

    }
}

export enum AlertType{
    Success,
    Error,
    Info,
    Warning 
}
>>>>>>> Dinauanao-tester-functional-testing
