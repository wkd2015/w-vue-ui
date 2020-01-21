module.exports = {
    title: "W-Vue-UI",
    description: "Vue组件库",
    themeConfig: {
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Github',
                link: 'https://github.com/wkd2015/w-vue-ui'
            }
        ],
        sidebar: [
            {
                title: '组件',
                collapsable: true,
                children: [
                    'views/components/modal/'
                ]
            }
        ]
    }
}