// in posts.js
import React from "react";
import { Edit, SimpleForm, TextInput, required, TopToolbar, ShowButton, Button} from 'react-admin';
import CKEditor from 'ckeditor4-react';
CKEditor.editorUrl = 'https://cdn.ckeditor.com/4.15.1/full-all/ckeditor.js';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostEdit = (props) => {
    // const [state, setState] = React.useState({ image: '', title: '', desc: '', body: '' });
    // const changeHandler = e => {
    //     setState({
    //         ...state,
    //         [e.target.name]: e.target.value 
    //     });
    //     console.log(state)
    // }
    // const onEditorChange = ( e ) => {
    //     setState( {
    //         body: e.editor.getData()
    //     } );
    // }
    return(
        <Edit title={<PostTitle />} {...props} >
            <SimpleForm>
                <TextInput disabled label="Id" source="id" />
                <TextInput source="cover_image_url" validate={required()} />
                <TextInput source="title" validate={required()} />
                <TextInput source="desc" validate={required()} />
                <TextInput source="content" validate={required()} />
                {/* <CKEditor
                    data={state.content}
                    onChange={onEditorChange} /> */}
            </SimpleForm>
        </Edit>
    );
};

export default PostEdit;