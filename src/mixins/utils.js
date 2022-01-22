export default {
    methods: {
        convertPostList(items) {
            console.log(items)
            let arr = []
            items.forEach(r => {
                let data = {
                    id: r.id,
                    name: r.title.rendered,
                    date: r.date
                }
                arr.push(data)
            });
            return arr
        },
    }
}