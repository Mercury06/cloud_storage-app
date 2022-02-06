import React from 'react';
import './disk.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles, uploadFile } from '../../actions/file';
import { setCurrentDir, setPopupDisplay } from '../../reducers/fileReducer';
import FileList from './fileList/file/FileList';
import Popup from './Popup';


const Disk = () => {

    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const dirStack = useSelector(state => state.files.dirStack)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])

    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }

    function backClickHandler() {
        const backDirId = dirStack.pop()
        dispatch(setCurrentDir(backDirId))
    }

    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    return (
        <div className="disk">
        
            <div>DISC</div>
            <div className="disk__btns">
                    <button className="disk__back" onClick={() => backClickHandler()}> Назад</button>
                    <button className="disk__create" onClick={() => showPopupHandler()}> Создать папку</button>
                    <div className="disk__upload">
                        <label htmlFor="disk__upload-input" className="disk__upload-label">Загрузить файл</label>
                        <input multiple={true} onChange={(event)=> fileUploadHandler(event)} type="file" id="disk__upload-input" className="disk__upload-input"/>
                    </div>
            </div>
            <FileList/>
            <Popup />
        </div>
    );
};

export default Disk;