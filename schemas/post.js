export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'createdAt',
            title: 'Created at',
            type: 'datetime',
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'vimeo',
            title: 'Vimeo',
            type: 'url',
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        },
        {
            name: 'technology',
            title: 'Technology',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'technology' } }],
        },
        {
            name: 'awards',
            title: 'Awards',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'awards' } }],
        },
        {
            name: 'info',
            title: 'Info',
            type: 'info',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'richText',
        },
        {
            name: 'gallery',
            type: 'object',
            title: 'Gallery',
            fields: [
                {
                    title: 'Images',
                    name: 'images',
                    type: 'array',
                    of: [{ type: 'imageGallery' }],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        },
    },
};
