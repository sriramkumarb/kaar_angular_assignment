import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  logIn() {
    if (this.email == 'apple@gmail.com' && this.password == '123456') {
      this.router.navigate(['home']);
    }
    else {
      console.log("Unauthorized User");

    }
  }

}
