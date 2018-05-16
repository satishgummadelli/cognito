import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { AuthenticationDetails, CognitoUserPool, CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class LoginComponent implements OnInit {
  isLoginError : boolean = false;

  constructor(private Auth: AuthService, 
    private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    this.router.navigate(['dashboard'])

    var poolData = {
      UserPoolId: 'eu-west-1_O0oFNoH6A' ,
      ClientId: '7olod04t6qsa0qfp4bthgts9q8'
    };
    var userPool =
      new CognitoUserPool(poolData);
    var userData = {
      Username: 'test1',
      Pool: userPool
    };
    

    var authenticationData = {
      Username: 'satishgummadelli@gmail.com', 
      Password: 'Cognito8494!' 
    };
    var authenticationDetails =
      new AuthenticationDetails(authenticationData);

    var cognitoUser =
      new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        console.log('access token + ' + result.getAccessToken().getJwtToken());
      },

      onFailure: function (err) {
        alert(err);
      },
      mfaRequired: function (codeDeliveryDetails) {
        var verificationCode = prompt('Please input verification code', '');
        cognitoUser.sendMFACode(verificationCode, this);
      }
    });

    // this.Auth.getUserDetails(username, password).subscribe(data => {
    //   if(data.success) {
    //     this.router.navigate(['dashboard'])
    //     this.Auth.setLoggedIn(true)
    //   } else {
    //     window.alert(data.message)
    //   }
    // })
 }

}
