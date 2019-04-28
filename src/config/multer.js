const path = require('path')
const crypto = require('crypto')
const multer = require('multer')

module.exports = {
  // LOCAL de armazenamento dos arquivos (disco, nuvem)
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),

    // nome do arquivo final no diretorio
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) return cb(err)

        file.key = `${hash.toString('hex')}-${file.originalname}`
        cb(null, file.key)
      })
    }
  })
}
