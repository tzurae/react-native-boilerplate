import { Observable } from 'rxjs';

export function userLogin(action$) {
  return action$.ofType('USER_LOGIN_REQUEST')
    .delay(1000)
    .mergeMap(() => Observable.merge(
      Observable.of({
        type: 'USER_LOGIN_SUCCESS'
      })
    ))
    .catch(error => {
      Observable.of({
        type: 'USER_LOGIN_FAILURE',
        payload: { error },
        error: true
      })
    });
}

