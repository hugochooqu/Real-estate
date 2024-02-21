export default{
    name: "banner",
    title: "banner",
    type: "document",
    fields: [
        {
            name:'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'name',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options : {
                source: 'name',
                maxLength: '90',
            }
        },
        {
            name: "buttonText1",
            title: "ButtonText1",
            type: "string"
        },
        {
            name: "buttonText2",
            title: "ButtonText2",
            type: "string"
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string'
        }
    ]
}