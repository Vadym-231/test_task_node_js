const contentful = require('contentful');
const dotenv = require('dotenv').config();
const client =  contentful.createClient({
    space: process.env.C_SPACE,
    accessToken: process.env.C_TOKEN
});


const getPosts = async (pagination) => {

    const { items } = await client.getEntries()

    return items.map(({ sys, fields}) =>
        ({ createdAt: sys.createdAt, id: sys.id, title: fields?.pageTitle, description: fields?.pageDescription, image: !fields?.shareImages ? {} : fields?.shareImages[0]?.fields.file }))
        .filter(e => e.title)
};

const getPostById = async (id) => {
     const { fields, sys } =  await client.getEntry(id);
     return { createdAt: sys.createdAt, id: sys.id, title: fields?.pageTitle, description: fields?.pageDescription, image: !fields?.shareImages ? {} : fields?.shareImages[0]?.fields.file }
}

module.exports = { getPosts, getPostById }