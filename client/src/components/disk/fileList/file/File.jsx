import React from 'react';
import './file.css'
import dirLogo from '../../../../assets/img/dir.svg';
import fileLogo from '../../../../assets/img/file.svg';

const File = ({file}) => {
    return (
        <div className='file'>
            <img src={file.type === 'dir' ? dirLogo : fileLogo} alt='' className='file_img' />
            <div className='file_name'>{file.name}</div>
            <div className='file_date'>{file.date.slice(0,10)}</div>
            <div className='file_size'>{file.size}</div>
            <h1>files</h1>
        </div>
    );
};

export default File;