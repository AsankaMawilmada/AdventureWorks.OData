import { Component, OnInit } from '@angular/core';
export interface INavItem {
  title: string;
  link: string | undefined;
  children: INavItem[] | undefined
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  items: INavItem[] = [
    { title: 'Dashboard', link: '/dashboard' } as INavItem,
    {
      title: 'Customers', link: '/customers',
      // children: [
      //   { title: 'Candidates', link: '/candidates' } as INavItem,
      //   { title: 'New Candidate', link: '/candidates/new' } as INavItem
      // ],
    } as INavItem,

    {
      title: 'Sales orders', link: '/sales-orders',
      //   children: [
      //     { title: 'Projects', link: '/projects' } as INavItem,
      //     { title: 'New Project', link: '/projects/new' } as INavItem
      //   ],
    } as INavItem,

    // {
    //   title: 'Demands', link: '/demands',
    //   children: [
    //     { title: 'Demands', link: '/demands' } as INavItem,
    //     { title: 'New demand', link: '/demands/new' } as INavItem
    //   ],
    // } as INavItem,

    // {
    //   title: 'Users', link: '/users',
    //   children: [
    //     { title: 'Users', link: '/users' } as INavItem,
    //     { title: 'New User', link: '/users/new' } as INavItem,
    //     { title: 'Update Password', link: '/users/update-password' } as INavItem,
    //   ],
    // } as INavItem


  ];

  constructor() { }

  ngOnInit() { }
}
