const fs = require ('fs');
const File = require ("./../models/File.js");
const config = require('./../config/default');

const fPath = config.fPath;

class FileService {
    // функция кот. созд папки, в аргументы принимает модель объекта файла добавляемого в БД
    // для удобства возвр. в виде promise
    createDir(req, File) {
        const filePath = this.getPath(req, file)
        return new Promise(((resolve, reject) => {
            try {
                if (!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath)
                    return resolve({message: 'File was created'})
                } else {
                    return reject({message: "File already exist"})
                }
            } catch (e) {
                return reject({message: 'File error', e})
            }
        }))
    }

    deleteFile(req, file) {
        const path = this.getPath(req, file)
        if (file.type === 'dir') {
            fs.rmdirSync(path)
        } else {
            fs.unlinkSync(path)
        }
    }

    getPath( req, file ) {
        return req.filePath + '\\' + file.user + '\\' + file.path
    }
}


module.exports = new FileService() 