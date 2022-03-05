const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(
        {
            "Respuesta": "“Software Avanzado - Tarea Práctica 5 - 201701020 - Angel Marcelo Rama Marroquín Garcia”"
        }
    )
})

module.exports = router