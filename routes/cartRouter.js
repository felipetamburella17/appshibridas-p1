import express from "express";
// enrutamos
const router = express.Router();
router.use( express.json());

// traemos el carrito
router.get('/', (req, res) => {
    console.log('Get Carrito')
    res.status(200).json( { msg: 'GET CAR'})
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log('Get card ', id)
    res.status(200).json( { msg: 'GET card ' + id})
})

router.post('/', (req, res) => {
    console.log('Add carrito')
    res.status(200).json( { msg: 'POST car'})
})

router.delete('/:id', (req, res) => {
    console.log('Delete carrito')
    res.status(200).json( { msg: 'DELETE Car'})
})
//exportamos la ruta
export default router;