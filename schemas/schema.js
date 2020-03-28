// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import category from './category';
import post from './post';
import author from './author';
import info from './info';
import technology from './technology';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        post,
        author,
        category,
        technology,
        blockContent,
        info,
    ]),
});
