import {Module} from "./Module";
/**
 * Created by vincent on 1/10/17.
 */
export class User {
  constructor(
    public id:number,
    public nickname:string,
    public avatar:string,
    public phone:string,
    public token:string,
    public organization:string,
    public organization_id:number,
    // public module:Module,
  ){}
}
