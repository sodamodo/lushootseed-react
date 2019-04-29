import { decorate, observable, action, runInAction } from 'mobx';
import { login, checkToken } from 'apiCalls';
import { saveToken, deleteToken } from '../../services/tokenHandlers';

class AuthStore {
  public authenticated: boolean;
  public loggingIn: boolean;
  public isStaff: boolean;
  public isAdmin: boolean;
  public checkingToken: boolean;
  public user: any;

  constructor() {
    this.authenticated = false;
    this.loggingIn = false;
    this.isStaff = false;
    this.isAdmin = false;
    this.checkingToken = false;
  }

  public checkToken = (cb?: Function) => {
    this.checkingToken = true;
    checkToken()
      .then((res: any) => {
        if (!this.authenticated) {
          runInAction(() => {
            this.authenticated = true;
          });
        }
        runInAction(() => {
          this.checkingToken = false;
        });
      }).catch(err => {
      runInAction(() => {
        this.authenticated = false;
        this.checkingToken = false;
      });
      deleteToken();
      if (cb) { cb(); }
    });
  }

  public login = (params) => {
    return new Promise((resolve, reject) => {
      deleteToken();
      this.loggingIn = true;
      login(params)
        .then((res: any) => {
          runInAction(() => {
            this.authenticated = true;
            this.loggingIn = false;
          });
          saveToken(res.data.auth_token);
          this.checkToken();
          resolve(res.data);
        })
        .catch((err: any) => {
          runInAction(() => {
            this.authenticated = false;
            this.loggingIn = false;
          });
          console.warn(err);
          reject(err);
        });
    });
  }

  public logout = () => {
    deleteToken();
    this.authenticated = false;
    this.isAdmin = false;
  }
}

decorate(AuthStore, {
  authenticated: observable,
  loggingIn: observable,
  isStaff: observable,
  isAdmin: observable,
  checkingToken: observable,
  checkToken: action,
  login: action,
  logout: action,
});

export default AuthStore;
