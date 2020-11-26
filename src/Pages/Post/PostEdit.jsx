// in posts.js
import React, { useState } from "react";
import { Edit, SimpleForm, TextInput, required, TopToolbar, ShowButton} from 'react-admin';
import Button from '@material-ui/core/Button';
import CKEditor from 'ckeditor4-react';
CKEditor.editorUrl = 'https://cdn.ckeditor.com/4.15.1/full-all/ckeditor.js';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostEditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ShowButton basePath={basePath} record={data} />
        {/* Add your custom actions */}
        <Button color="primary" onClick={PostTitle}>Custom Action</Button>
    </TopToolbar>
);

const PostEdit = (props) => {
    const [state, setState] = useState({ image: '', title: '', desc: '', content: '' });
    const changeHandler = e => setState({ [e.target.name]: e.target.value });
    const onEditorChange = ( evt ) => {
        setState( {
            content: evt.editor.getData()
        } );
    }

    const onLoadBody = (evt) => {
        setState( {
            content: evt.target.value
        } );
        
    }

    return(
        <Edit title={<PostTitle />} actions={<PostEditActions />} {...props}>
            <SimpleForm>
                {/* <ReferenceInput source="userId" reference="users"><SelectInput optionText="id"/></ReferenceInput> */}
                <TextInput disabled label="Id" source="id" />
                <TextInput source="image" validate={required()}/>
                <TextInput source="title" validate={required()}/>
                <TextInput source="desc" validate={required()}/>
                <TextInput source="body" validate={required()} onClick={onLoadBody}/>
                <CKEditor
                    data={state.content}
                    onChange={onEditorChange} />
            </SimpleForm>
        </Edit>
    );
};

export default PostEdit;