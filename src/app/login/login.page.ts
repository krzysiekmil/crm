import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            login: [null, [Validators.required]],
            password: [null, [Validators.required]]
        });
    }

    onSubmit() {
        alert('SUCCESS!! :-)');
    }
}
