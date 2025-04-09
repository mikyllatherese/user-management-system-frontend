<<<<<<< HEAD
import { AccountService } from '../../app/_services';
import { finalize } from 'rxjs/operators';

export function appInitializer(accountService: AccountService) {
    return () => new Promise<void>(resolve => {
        // attempt to refresh token on app start up to auto authenticate
        accountService.refreshToken()
            .pipe(finalize(() => resolve()))
            .subscribe();
    });
}
=======
import { AccountService } from '@app/_services';

export function appInitializer(accountService: AccountService) {
    return () => new Promise(resolve => {
        // attempt to refresh token on app start up to auto authenticate
        accountService.refreshToken()
            .subscribe()
            .add(resolve); // resolve when complete
    });
}
>>>>>>> Dinauanao-tester-functional-testing
