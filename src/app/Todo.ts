
export class Todo{
    sno: number
    title: string
    desc:string
    active :boolean
    file_pic :File
}
export class People{
    id: number
    username: string
    profilepic :File
}

export class GlobalConstants {
    public static imgURL: string = "http://127.0.0.1:8001/";
      
    public static apiURL: string = "http://127.0.0.1:8001/listtodo/";
}







                    