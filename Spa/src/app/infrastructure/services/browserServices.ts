
export class BrowserServices {

    public  static buildApplicationLink(link: string) : string {
        return this.rootPath() + "/" + link;
    }

    private static rootPath() : string {
        var url : string = null;
        let protocol : string =  window.location.protocol + '//' 
        let hostname : string =  window.location.hostname;
        let port : string = window.location.port;

        url = protocol + hostname;
        if(port) 
            url += ":" + port;
        
        return url;
    }
}