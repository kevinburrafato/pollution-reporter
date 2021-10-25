const models = require('../models');

function save(req, res) {
    const post = {
        city: req.body.city,
        address: req.body.address,
        image: req.file.filename,
    }

    models.Post.create(post).then(result => {
        res.status(201).json({
            message: "Post created succesfully",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

function show(req, res){
    const id = req.params.id;

    models.Post.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Post not found"
            })
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong"
        })
    })

}

function index(req, res){
    models.Post.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong"
        })
    });
}

function destroy(req, res){
    const id = req.params.id;

    models.Post.destroy({where:{id:id}}).then(result => {
        res.status(200).json({
            message: "Post deleted succesfully"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong"
        });
    })

}

module.exports = {
    save: save,
    show: show,
    index: index,
    destroy: destroy
}