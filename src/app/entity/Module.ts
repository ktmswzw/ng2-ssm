/**
 * Created by vincent on 1/10/17.
 */
export class Module {

  // @JsonProperty('name')
  // fullName:string;

  constructor(
    public id:number,
    public description:string,
    public name:string,
    public priority:number,
    public sn:string,
    public url:string,
    public className:string,
    public module:Module,
    public parentId:number,
    public children: Array<Module>,
  ){}
}
