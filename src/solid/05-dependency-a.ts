import { PostService } from './05-dependency-b';
import { LocalDataBaseService, JsonDataBaseService, JsonPlaceholderApi } from './05-dependency-c';


// Main
(async () => {
    //const service = new LocalDataBaseService();
    //const service = new JsonDataBaseService();
    const service = new JsonPlaceholderApi();


    const postService = new PostService(service);

    const posts = await postService.getPosts();

    console.log({ posts })


})();