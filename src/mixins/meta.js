export default {
    methods: {
        setPostmeta(data) {
            document.title = data.title.rendered
        },
        setCategoryMeta(slug) {
            document.title = slug + ' | カテゴリー'
        },
        setPageMeta(data) {
            document.title = data
        }
    }
}