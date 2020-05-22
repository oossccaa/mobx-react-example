import { observable, action } from 'mobx';

class AuthStore{

  @observable state = {
    username: '1231',
    password: '1241421',
    token: '2131321'
  }

  @action login() {
    
  }
}

export default new AuthStore();