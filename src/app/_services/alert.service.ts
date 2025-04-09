<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Alert, AlertType } from '../../app/_models';

@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<Alert>();
    private defaultId = 'default-alert';

    // enable subscribing to alerts observable
    onAlert(id = this.defaultId): Observable<Alert> {
        return this.subject.asObservable().pipe(filter(x => x && x.id === id));
    }

=======
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { filter } from "rxjs/operators";

import { Alert, AlertType } from "@app/_models";

@Injectable({ providedIn: "root" })
export class AlertService {
    private subject = new Subject<Alert>();
    private defaultId = "default-alert";
    
    // enable subscribing to alerts observable
    onAlert(alertId: string): Observable<Alert> {
        return this.subject.asObservable().pipe(filter((x) => x.alertId === alertId));
    }
    
>>>>>>> Dinauanao-tester-functional-testing
    // convenience methods
    success(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Success, message }));
    }
<<<<<<< HEAD

    error(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Error, message }));
    }

    info(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Info, message }));
    }

    warn(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
    }

=======
    
    error(message: string, options?: any) {
        this.alert(new Alert({ ...options,  type: AlertType.Error, message }));
    }
    
    info(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Info, message }));
    }
    
    warn(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Warning, message  }));
    }
    
>>>>>>> Dinauanao-tester-functional-testing
    // core alert method
    alert(alert: Alert) {
        alert.id = alert.id || this.defaultId;
        alert.autoClose = (alert.autoClose === undefined ? true : alert.autoClose);
        this.subject.next(alert);
    }

    // clear alerts
<<<<<<< HEAD
    clear(id = this.defaultId) {
        this.subject.next(new Alert({ id }));
    }
}
=======
    clear(alertId: string) {
        this.subject.next(new Alert({ alertId }));
    }
}
>>>>>>> Dinauanao-tester-functional-testing
