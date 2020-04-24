const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Kabana boards were fetched'
    });
});

router.post('/', (req, res, next) => {
    const board= {
        id: req.body.id,
        title: req.body.title,
        order: req.body.order
    }
    res.status(201).json({
        message: 'Kabana boards were created',
        boardCreated: board
    });

});

router.get('/:boardId', (req, res, next) => {
    const id = req.params.boardId;
    if(id === 'special') {
        res.status(200).json({
            message: `The board ID ${id} details`,
            id: id
        });
    }else{
        res.status(200).json({
            message: `You passed a standard Board ID ${id}`
        })
    }
});

router.delete('/:boardId', (req, res, next) => {
    const id = req.params.boardId;
    res.status(200).json({
        message: `Deleted the board w/ ID: ${id}`
    });
});


module.exports = router;