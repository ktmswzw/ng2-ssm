import {Module} from "./Module";
import {JsonProperty} from "json-typescript-mapper";
/**
 * Created by vincent on 1/10/17.
 */
export class User {

  constructor(
    private id:number,
    public nickname:string,
    private avatar:string,
    private phone:string,
    public token:string,
    private organization:string,
    private organization_id:number,
    private module:Module
  ){}

}

