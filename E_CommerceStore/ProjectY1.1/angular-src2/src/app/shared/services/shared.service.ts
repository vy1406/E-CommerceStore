import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
    // Observable string sources
    private emitChangeSource = new Subject<any>();
    private wishlistSource = new Subject<any>();

    // Observable string streams
    public changeEmitted$ = this.emitChangeSource.asObservable();
    public wishlistEmitted$ = this.wishlistSource.asObservable();

    // Service message commands
    emitChange(change: any) {
        this.emitChangeSource.next(change);
    }

    wishlistUpdated(change: any) {
        this.wishlistSource.next(change);
    }
    constructor() { }

}
