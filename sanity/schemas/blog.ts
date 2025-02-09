

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog article',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of my blog article',
        },
        {
            name: 'title image',
            type: 'image',
            title: 'Title image of blog article',
        },
        {
            name: 'small description',
            type: 'text',
            title: 'Small description',  
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                },
            ],
        },
    ],    
};