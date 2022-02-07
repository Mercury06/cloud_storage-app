import React from 'react';
import Uploadfile from "./Uploadfile";
import './uploader.css'
import {useDispatch, useSelector} from "react-redux";
import {hideUploader} from "../../../reducers/uploadReducer";

const Uploader = () => {
    //const files = [{id:1, name: 'file', progress:0}, {id:2, name: 'file', progress:0}]
    const files = useSelector(state => state.upload.files)
    const isVisible = useSelector(state => state.upload.isVisible)
    const dispatch = useDispatch()

    return ( isVisible &&
        <div className="uploader">
            <div className="uploader__header">
                <div className="uploader__title">Загрузки</div>
                <button className="uploader__close" onClick={() => dispatch(hideUploader())}>X</button>
            </div>
            {files.map(file =>
                <Uploadfile key={file.id} file={file} />
            )}
        </div>
    );

};

export default Uploader;