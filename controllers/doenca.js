const Doenca = require('../models/doenca')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/image/doencas/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage }).single('imagem');

module.exports = app =>{

    app.get('/', (req, res) => {
        res.send("ola")
     })

     app.get('/doenca', (req, res) => {
        Doenca.list(res)
     })


    //  Post 
        // POST
        app.post('/doenca', (req, res) => {

            upload(req, res, function (err) {
    
                if (err) {
                    console.log("erro")
                }
                const doenca = req.body
                console.log(doenca)
                Doenca.create(doenca, res)
            });
    
        })
}