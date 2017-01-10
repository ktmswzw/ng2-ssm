import {Injectable} from '@angular/core';
import {Http, Request, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {RESTClient, DefaultHeaders, Produces, Query, Body, GET, POST} from '../../share/rest.service';
import {User} from "../../entity/User";

@Injectable()
@DefaultHeaders({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
})
export class LoginService extends RESTClient {

  constructor(protected http: Http) {super(http)}

  protected requestInterceptor(req: Request): Request {
    return req;
  }

  protected responseInterceptor(res: Observable<Response>): Observable<Response> {
    return res;
  }

  @GET('/api/login')
  @Produces<LoginResult>((res: Response) => {
    res.headers.forEach((values: string[], name: string) => {
      // console.log(name, '=', values)
    });
  })
  public login(@Query('username') username?: string,@Query('password') password?: string,@Query('device') device?: string,@Query('deviceToken') deviceToken?: string): Observable<LoginResult> {
    return null;
  }

}

export class LoginResult {
  constructor(
    public apistatus?: String,
    public result?: User,
  ) {}
}
