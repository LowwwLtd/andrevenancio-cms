// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import richText from './rich-text';
import category from './category';
import post from './post';
import info from './info';
import technology from './technology';
import awards from './awards';
import imageGallery from './image-gallery/';
import vimeo from './vimeo';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        post,
        category,
        technology,
        awards,
        info,
        richText,
        imageGallery,
        vimeo,
    ]),
});
