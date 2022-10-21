import { defineStore } from "pinia";

const imageStore = defineStore({
    id: 'image',
    state: () => ({
        list: [
            {
                slug: 'kalkulator',
                title: 'Kalkulator',
                img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FsY3VsYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                link:'https://almirawk.github.io/Kalkulator/'
            },
            {
                slug: 'flutter',
                title: 'Flutter',
                img: 'https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmx1dHRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                link:' https://almirawk.github.io/flutter1/'
            },
            {
                slug: 'kalkulator',
                title: 'Kalkulator',
                img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FsY3VsYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                link:'https://almirawk.github.io/Kalkulator/'
            },
            {
                slug: 'flutter',
                title: 'Flutter',
                img: 'https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmx1dHRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                link:' https://almirawk.github.io/flutter1/'
            },
        ]
    }),
    actions: {},
    getters: {
        g$list: ({ list }) => list,
        g$detail: ({ list }) => {
            return (slug) => list.find((image) => image.slug == slug);
        }
    },
});

export default imageStore;