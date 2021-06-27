import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/core/authentication.service';
import { AuthorService } from 'src/app/shared/author/author.service';
@Component({
  selector: 'tweempus-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  userForm!: FormGroup;
  userNoExist: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private authorService: AuthorService
    ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      idAuthor: ['', Validators.required],
    });
  }

  logIn(form: any) {
    if (this.userNoExist) {
      this.userNoExist = false;
    }

    this.authorService.getAuthor(form.value.idAuthor).subscribe(
      author => this.authService.login(form.value.idAuthor),
      error => this.userNoExist = true
    );
  }


}
