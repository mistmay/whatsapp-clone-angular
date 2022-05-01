import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private loginService: LogInService, private router: Router) { }

  ngOnInit(): void {
  }

  login(f: NgForm): void {
    localStorage.setItem('name', f.value.name);
    localStorage.setItem('token', 'fake-token');
    this.router.navigate(['/chat']);
  }

}
