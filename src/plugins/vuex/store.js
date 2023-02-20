import user from "@/plugins/vuex/user";
import {createStore} from "vuex";
import movie from "@/plugins/vuex/movie";
import category from "@/plugins/vuex/category";
import media_object from "@/plugins/vuex/media_object";

export default createStore({
    modules: {
        user,
        movie,
        category,
        media_object
    }
})
