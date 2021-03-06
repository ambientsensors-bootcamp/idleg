import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import * as _ from 'lodash';
//npm install --save lodash

import { ImportantConfig } from '../../assets/config';

@Injectable()
export class WebService {
    private errorsSubject = new Subject<any>();
    //public baseURL: string = "https://openstates.org/api/v1/bills/?apikey=" 
    public baseURL: string = "https://openstates.org/api/v1/"

    constructor(private http: Http, private config: ImportantConfig) { }



    public getResource(resource: string, urlOption): Observable<any> {
        console.log("Important API KEY is: " + this.config.API_KEY);
        var fullPath = "";
        if (urlOption == 1) {
            fullPath = this.baseURL + resource + "&apikey=" + this.config.API_KEY;
        } else {
            fullPath = resource;
        }

        console.log("GET request to full path: " + fullPath);
        const response = this.http.get(fullPath);
        return this.getResponseBody(response);
    }

    private getResponseBody(obs: Observable<Response>): Observable<any> {
        let self = this;
        let response = obs
            .catch(error => {
                self.errorsSubject.next(error);
                return Observable.throw(error);
            })
            .map(resp => {
                if (resp['_body'])
                    return resp.json();
            }
            )
            .catch(this.parseError);

        return this.actLikeSafePromise(response);
    }

    actLikeSafePromise<T>(obs: Observable<T>): Observable<T> {
        return obs.map(e => _.cloneDeep(e));
    }

    private parseError(err: Response): Observable<{ message: string; detailMessage: string; status: number }> {
        let message = `Received ${err.status} from the server`;
        return Observable.throw({ message: message, status });
    }

    public addComment(newComment) {
        var headers = new Headers();
        console.log(newComment);
        headers.append('content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8080/api/saveComment', JSON.stringify(newComment), options)
            .map(res => res.json());

    }

}