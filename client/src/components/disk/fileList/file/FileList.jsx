import React from "react";
import './../fileList.css'
import { useSelector } from "react-redux";
import File from "./File";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const FileList = () => {

    const files = useSelector( state => state.files.files)
    // const files = [{_id:1, name: 'direc', type: 'dir', size: '5Gb', date: "15.07.2019"},
    //                {_id:2, name: 'direc2', type: 'file', size: '5Gb', date: "15.07.2019"}].map(file => <File file={file} key={file.id} />)

    return (
        <div className="filelist">
            <div className="filelist__header">
                <div className="filelist__name"> Название </div>
                <div className="filelist__date"> Дата </div>
                <div className="filelist__size"> Размер </div>
            </div>
            <TransitionGroup>
            {files.map(file => 
            <CSSTransition  key={file._id} timeout={500} classNames={'file'} exit={false}>
            <File file={file}/>
            </CSSTransition>
            )}
            </TransitionGroup>
        </div>
        
    );
};

export default FileList;