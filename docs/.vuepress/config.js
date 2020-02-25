module.exports = {
    title: "W-Vue-UI",
    description: "Vue组件库",
    base: '/w-vue-ui/',
    themeConfig: {
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: 'Github',
                link: 'https://github.com/wkd2015/w-vue-ui'
            }
        ],
        sidebar: [
            {
                title: '开发指南',
                collapsable: false,
                children: [
                    '/'
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    {
                        title: '通用',
                        collapsable: false,
                        children: ['views/components/modal/']
                    }
                ]
            }
        ]
    }
}