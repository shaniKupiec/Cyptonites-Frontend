import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) {}
  loggedInUser!: User;
  loggedInUser$!: Observable<User>;
  rate: any;

  ngOnInit(): void {
    this.userService.getLoggedInUser();
    this.userService.loggedInUser$.subscribe(data =>{
      this.loggedInUser = data
    });

    this.bitcoinService.getRate().subscribe((res) => {
      this.rate = res;
    });
  }
}