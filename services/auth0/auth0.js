import auth0 from 'auth0-js';

class Auth{
  constructor(){
    this.auth0 = new auth0.WebAuth({
      domain: "ctrlx-altf4.auth0.com",
      clientID: "sioeAC3rwVCdYo0MGzTB4q2jJrSHT4eS",
      redirectUri: "https://localhost:3000/callback",
      responseType: "token id_token",
      scope: "openid profile"
    });
    this.login = this.login.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }
  handleAuthentication(){
    this.auth0.parseHash((err,authResult)=>{
      if(authResult && authResult.accessToken && authResult.idToken){
        this.setSession(authResult);
      }
      else if(err){
        console.log(err);
      }
    })
  }
  login(){
    console.log('entered');
    this.auth0.authorize();
  }
}
const auth0Client = new Auth();
export default auth0Client;