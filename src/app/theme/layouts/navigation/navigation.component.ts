import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

declare let mLayout: any;

@Component({
    selector: 'app-navigation',
    templateUrl: './aside-nav.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent implements OnInit, AfterViewInit {

    permissionMenu: any = {};
    role: string;

    constructor(public profileService: ProfileService) {
    }

    ngOnInit() {
        this.permissionMenu = this.profileService.permissions.menu;
        this.role = this.profileService.role;
    }

    ngAfterViewInit() {
        mLayout.initAside();
    }

}
