import React from "react";
import './../fileList.css'
import { useSelector } from "react-redux";
import File from "./File";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const FileList = () => {

    const files = useSelector( state => state.files.files)
    // const files = [{_id:1, name: 'direc', type: 'dir', size: '5Gb', date: "15.07.2019"},
    //                {_id:2, name: 'direc2', type: 'file', size: '5Gb', date: "15.07.2019"}].map(file => <File file={file} key={file.id} />)

    if (files.length === 0) {
        return (
            <div className="loader"> <h3>folder is empty</h3></div>
        )
    }

    return (
        <div className='filelist'>
            <div className="filelist__header">
                <div className="filelist__name"><b>Name</b></div>
                <div className="filelist__date"><b>Date</b></div>
                <div className="filelist__size"><b>Size</b></div>
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