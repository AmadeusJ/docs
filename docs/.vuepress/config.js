const routes = [
    "Django",
    "Vue",
    "Casl",

];

const createSidebar = () => {
    const sidebar = {};
    for (const route of routes) {
        Object.assign(sidebar, require("../" + route));
    }
    return sidebar;
}

module.exports = {
    title: "공식문서 번역&스터디",
    description: "공식 문서 번역 및 공부내용 기록",
    themeConfig: {
        nav: [
            { text: "django", link: "/django/" },
            { text: "Vue", link: "/Vue/" },
            { text: "Casl", link: "/Casl/" },

            { text: "Blog", link: "/#/"},

        ],
        sidebar: createSidebar()
    },
    base: "/docs/",
    plugins: [
        ["@vuepress/back-to-top"],
        ["sitemap", { hostname: "https://AmadeusJ.github.io/docs/" }],
        ["@vuepress/last-updated"]
    ]
};
