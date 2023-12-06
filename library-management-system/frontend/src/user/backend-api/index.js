import BookApi from "./bookapi";
import { UserApi } from "./userapi";

const BackendApi = {
    book: BookApi,
    user: UserApi,
}

export default BackendApi;