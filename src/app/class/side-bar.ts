export class SideBar {
    name:String;
    icon:String;
    isExpanded:Boolean;
    isShow:Boolean;
}
export class mainSideBar {
    name:String;
    subMenu:SideBar[];
    routing:string;
    icon:String;
    isExpanded:Boolean;
    isShow:Boolean;

}
