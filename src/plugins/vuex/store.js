import user from "@/plugins/vuex/user";
import {createStore} from "vuex";
import movie from "@/plugins/vuex/movie";
import category from "@/plugins/vuex/category";

export default createStore({
    modules: {
        user,
        movie,
        category
    }
})
