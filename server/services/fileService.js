const fs = require ('fs');
const File = require ("./../models/File.js");
const config = require('./../config/default');

const fPath = config.fPath;

class FileService {
    // функция кот. созд папки, в аргументы принимает модель объекта файла добавляемого в БД
    // для удобства возвр. в виде promise
    createDir(File) {
        const filePath = `${fPath}\\${File.user}\\${File.path}`
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

    deleteFile(file) {
        const path = this.getPath(file)
        if (file.type === 'dir') {
            fs.rmdirSync(path)
        } else {
            fs.unlinkSync(path)
        }
    }

    getPath(file) {
        return fPath + '\\' + file.user + '\\' + file.path
    }
}


module.exports = new FileService() //экспорт объекта созданного класса