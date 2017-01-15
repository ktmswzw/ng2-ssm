import {Module} from "./Module";
import {JsonProperty} from "json-typescript-mapper";
/**
 * Created by vincent on 1/10/17.
 */
export class User {

  constructor(
    private id:number,
    public nickname:string,
    public avatar:string,
    public phone:string,
    public token:string,
    public organization:string,
    public organization_id:number,
    public error_en:string,
    public error_code:string,
    public error:string,
    public module_tree:Module
  ){}

}

