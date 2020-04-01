export default {
    name: 'imageGallery',
    type: 'image',
    title: 'Image',
    options: {
        hotspot: true,
    },
    fields: [
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'Important for SEO and accessiblity.',
            options: {
                isHighlighted: true,
            },
        },
    ],
    preview: {
        select: {
            imageUrl: 'asset.url',
            title: 'alt',
        },
    },
};
