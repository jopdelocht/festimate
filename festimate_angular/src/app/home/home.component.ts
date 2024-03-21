import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private UserService: UserService, private toastr: ToastrService) { }

  users: any[] = [];

  ngOnInit() {
    this.toastr.success('Welcome to the Angular App', 'Success!');
    this.UserService.getUsers().then(data => {
      this.users = data
    }).catch(error => console.log(error)
    )
  }



}
