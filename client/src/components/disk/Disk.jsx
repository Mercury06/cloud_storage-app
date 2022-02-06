import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../../actions/file';
import { setPopupDisplay } from '../../reducers/fileReducer';
import FileList from './fileList/file/FileList';
import Popup from './Popup';

const Disk = () => {

    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])

    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }

    return (
        <div className="disk">
        
            <div>DISC</div>
            <div className="disk__btns">
                    <button className="disk__back"> Назад</button>
                    <button className="disk__create" onClick={() => showPopupHandler()}> Создать папку</button>
            </div>
            <FileList/>
            <Popup />
        </div>
    );
};

export default Disk;