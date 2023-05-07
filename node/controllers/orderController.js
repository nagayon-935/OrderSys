"use strict";

const db = require('../models/index');

module.exports = {
    read: async(req, res, next) => {
        try{
            const result = await db.Orders.findAll();
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },
    create: async(req, res, next) => {
        try{
            const result = await db.Orders.create({
                type:        req.body.type,
                name:        req.body.name,
                size:        req.body.size,
                noddle:      req.body.noddle,
                soup:        req.body.soup,
                rich:        req.body.rich,
                beanSprouts: req.body.beanSprouts,
                onion:       req.body.onion,
                egg:         req.body.egg,
                kimchi:      req.body.kimchi,
            });
            res.send(result);
        }catch(err){
            console.log(err);
            res.status(500).send(err);
        }
    },

    
    
    // update: async(req, res, next) => {
    //     try{
    //         const result = await db.Orders.update(
    //             {
    //                 name: req.body.name,
    //                 done: req.body.done
    //             },
    //             {
    //                 where: {
    //                     id: req.params.id
    //                 }
    //             }
    //         );
    //         res.send(result);
    //     }catch(err){
    //         res.status(500).send(err);
    //     }
    // },
    // delete: async(req, res, next) => {
    //     try{
    //         const result = await db.Orders.destroy({
    //             where: {
    //                 id: req.params.id
    //             }
    //         });
    //         res.send({
    //             result: result
    //         });
    //     }catch(err){
    //         res.status(500).send(err);
    //     }
    // }
}