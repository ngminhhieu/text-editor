import React, { useState } from "react";
import { Create, SimpleForm, TextInput } from 'react-admin';
import CKEditor from 'ckeditor4-react';
CKEditor.editorUrl = 'https://cdn.ckeditor.com/4.15.1/full-all/ckeditor.js';

const PostCreate = (props) => {
    const [state, setState] = useState({ image: '', title: '', desc: '', content: '' });
    const changeHandler = e => setState({ [e.target.name]: e.target.value });
    const onEditorChange = ( evt ) => {
        setState( {
            data: evt.editor.getData()
        } );
    }

    return (
        <Create title="Create a Post" {...props}>
            <SimpleForm>
                <TextInput source="title" />
                <TextInput source="teaser" options={{ multiline: true }} />
                <TextInput multiline source="body" />
                <TextInput label="Publication date" source="published_at" />
                <TextInput source="average_note" />
                <CKEditor
                    data={state.data}
                    onChange={onEditorChange} />
            </SimpleForm>
        </Create>
    );
};

export default PostCreate;