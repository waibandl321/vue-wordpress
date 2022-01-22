const api = {
    basepath: "https://freelance321.com/wp-json/wp/v2/",
}

import axios from 'axios'

export default {
    methods: {
        // 投稿・カテゴリーの一覧を取得
        apiGetRelatedPost(type, per_page, id) {
            if(type) {
                let url = api.basepath + type
                if(per_page) {
                    url = api.basepath + type + '?per_page=' + per_page
                }
                if(type && id) {
                    url = api.basepath + type + '/' + id
                }
                return axios.get(url)
            }
        },

        // カテゴリーの投稿一覧
        apiGetCategoryPosts(type, per_page, category_id) {
            if(type) {
                let url = api.basepath + type
                if(per_page) {
                    url = api.basepath + type + '?per_page=' + per_page
                }
                if(type && category_id) {
                    url = api.basepath + type + '?categories=' + category_id
                }
                return axios.get(url)
            }
        }
    }
}