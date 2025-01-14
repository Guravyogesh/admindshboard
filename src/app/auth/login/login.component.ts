import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string='admin@transact.com';
  password:string='Admin@123';
  constructor(private router: Router){}
  onSubmit() {
    if (this.username == 'admin@transact.com' && this.password == 'Admin@123') {
      alert('Autherised User')
      this.router.navigate(['layout']);
    }
    else {
      alert('Please check the credentials')
    }
  }
}
