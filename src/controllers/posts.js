const {getPosts, getPostById} = require('../contentfull_api');

const getPostsEndpoint = async (req, res) => {
    try {
        const data = await getPosts(req.query);
        res.status(200);
        res.send(data);

    } catch (e) {
        console.log(e);
        res.status(500)
        res.send({ error: "Server side error!" })
    }
}

const getPostByIdEndpoint = async (req, res) => {
    try {
        const data = await getPostById(req.params.id);
        res.status(!data ? 404 : 200);
        res.send(!data ? { error: 'Not found!' } : data);

    } catch (e) {
        console.log(e);
        res.status(500)
        res.send({ error: "Server side error!" })
    }
}
module.exports = { getPostsEndpoint, getPostByIdEndpoint };
