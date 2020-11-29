import React from "react";
import { Create, SimpleForm, TextInput, required } from 'react-admin';
import CKEditor from 'ckeditor4-react';
CKEditor.editorUrl = 'https://cdn.ckeditor.com/4.15.1/full-all/ckeditor.js';

const PostCreate = (props) => {
    return (
        <Create title="Create a Post" {...props}>
            <SimpleForm>
                <TextInput disabled label="Id" source="id" />
                <TextInput source="cover_image_url" validate={required()} />
                <TextInput source="title" validate={required()} />
                <TextInput source="desc" validate={required()} />
                <TextInput source="content" validate={required()} />
                <TextInput source="created_by" validate={required()} />
                <TextInput source="state" validate={required()} />
                <TextInput source="tag_id" validate={required()} />
                {/* <CKEditor
                    data={state.content}
                    onChange={onEditorChange} /> */}
            </SimpleForm>
        </Create>
    );
};

export default PostCreate;