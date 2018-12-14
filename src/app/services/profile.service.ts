import { Injectable } from '@angular/core';

export interface Profile {
    data: any;
    advisers: any;
}

@Injectable()
export class ProfileService {
    permissions: any = {};
    role: any = {};
    advisers: any = {};

    constructor() {

    }
}
