import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';


const CLOUDINARY_UPLOAD_PRESET = 'ml_default';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/nataliehoang/upload';



class ImageUpload extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            uploadedFileCloudinaryUrl: ''
        };
    }
    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);

    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    }

    render(){
        return(
            <div>
            <Dropzone
                onDrop={this.onImageDrop.bind(this)}
                accept="image/*"
                multiple={false}>
                {({ getRootProps, getInputProps }) => {
                    return (
                        <div
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            {<div>
                                <div className="ava-url-section ">
                                {this.state.uploadedFileCloudinaryUrl === "" ? "Try dropping some files here, or click to select files to upload." :
                                        <div className="ava-url-border">
                                        
                                            <img src={this.state.uploadedFileCloudinaryUrl} alt='upload' width="90%"/>
                                        </div>}
                                </div>
                                
                                    
                                </div>
                            }
                        </div>
                    )
                }}
            </Dropzone>
            
</div>

        );
    }
}
export default ImageUpload;
