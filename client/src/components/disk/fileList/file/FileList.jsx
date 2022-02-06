import React from "react";
import './../fileList.css'
import { useSelector } from "react-redux";
import File from "./File";

const FileList = () => {

    const files = useSelector( state => state.files.files).map(file => <File file={file} key={file._id}/>)
    // const files = [{_id:1, name: 'direc', type: 'dir', size: '5Gb', date: "15.07.2019"},
    //                {_id:2, name: 'direc2', type: 'file', size: '5Gb', date: "15.07.2019"}].map(file => <File file={file} key={file.id} />)

    return (
        <div className="filelist">
            <div className="filelist_header">
                <div className="filelist_name"> Название </div>
                <div className="filelist_date"> Дата </div>
                <div className="filelist_size"> Размер </div>
            </div>
            {files}
        </div>
    );
};

export default FileList;