import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavLink } from 'src/app/models/nav-link';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'rev-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @Input() navLinks: NavLink[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  logout(){
    this.authService.logout();
  }

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) {}

}
