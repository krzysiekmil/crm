import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

    constructor(private router: Router) {
    }

  ngOnInit() {
      // setTimeout(() => {
      //     return this.router.navigateByUrl('/login');
      // }, 4500);

  }
}




