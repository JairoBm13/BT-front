import { Injectable } from '@angular/core';

export interface Profile {
    data: any;
    advisers: any;
}

@Injectable()
export class ProfileService {
    data: any = {};
    advisers: any = {};

    constructor() {

    }
}
