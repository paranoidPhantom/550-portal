export default defineAppConfig({
    website_name: "Школа №550",
    ui: {
        primary: 'sky',
        gray: 'neutral'
    },
    express_server_port: 3001,
    socialLinks: [
        {
            icon: "i-mdi-vk",
            link: "https://vk.com/school_550_spb"
        },
        {
            icon: "i-mdi-telegram",
            link: "https://t.me/school550_spb"
        }
    ],
    tableNames: {
        content: "content",
        news: "news"
    },
    home_bubble_text: [
        "Современное оборудование",
        "Современное оборудование",
        "Современное оборудование",
        "Современное оборудование",
        "Современное оборудование",
        "Современное оборудование"
    ]
});