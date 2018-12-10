import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { routerTransition } from '../../../router.animations';
import { ValidateService, AuthService } from '../../../shared';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class User {
    name: string;
    email: string;
    password: string;
    passwordRep: string;
}

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    form: FormGroup;

    constructor(
        private validateService: ValidateService,
        private flashMessage: FlashMessagesService,
        private authService: AuthService,
        private router: Router,
        private fb: FormBuilder)
    {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, this.validateService.validateEmail]],
            password: ['', Validators.required],
            passwordRep: ['', Validators.required]
        }, { validator: this.validateService.validatePasswordRep('password', 'passwordRep') });
    }

    ngOnInit() {}

    onRegisterSubmit() {
        console.log("Form status: " + this.form.status);
        // Required Fields
        if (this.form.status == "INVALID") {
            this.form.controls['name'].markAsDirty();
            this.form.controls['email'].markAsDirty();
            this.form.controls['password'].markAsDirty();
            this.form.controls['passwordRep'].markAsDirty();
            return false;
        }
        const user = {
            name: this.form.controls['name'].value,
            email: this.form.controls['email'].value,
            password: this.form.controls['password'].value
        }
        // Register user
        this.authService.registerUser(user).subscribe(data => {
            console.log("in registerUser");
            if (data.success) {
                this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                this.router.navigate(['/login']);
            }
            else {
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                this.router.navigate(['/signup']);
            }
        });

    }
}
