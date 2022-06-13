import {Provider} from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private provider:Provider) {}

    async getPosts() {
        //mala practica elemento escondido
        //const jsonDB = new LocalDataBaseService();
        //this.posts = await jsonDB.getFakePosts();
        this.posts =  await this.provider.getPosts();
         //= await jsonDB.get        

        return this.posts;
    }
}