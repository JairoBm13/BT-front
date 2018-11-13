import { Injectable } from '@angular/core';
import { GlobalVars } from './global-vars.services';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable()
export class ApiService {

    constructor(
        private http: HttpClient,
        private _global: GlobalVars) {
    }

    // -----------------------------------------------------------------------
    // Contacts
    // -----------------------------------------------------------------------

    getService() {
        return this.http.get(this._global._url + '/some/url', this.headers())
            .pipe(map((response => response)));
    }

    verify() {
        return this.http.get(this._global._url + '/user', this.headers());
    }

    // -------------------------------------------------------------
    // create authorization header
    // -------------------------------------------------------------
    private headers() {
        const token = localStorage.getItem('_a_token');
        if (token) {
            const httpOptions = {
                headers: new HttpHeaders({ 'Authorization': token, 'Accept': 'application/json' })
            };
            return httpOptions;
        }
    }
}
