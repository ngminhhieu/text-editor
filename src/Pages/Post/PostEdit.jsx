import React from "react";
import { SimpleForm, TextInput, required} from 'react-admin';
import Edit from './Edit.jsx';
import CKEditor from 'ckeditor4-react';
CKEditor.editorUrl = 'https://cdn.ckeditor.com/4.15.1/full-all/ckeditor.js';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="title" />
            <TextInput source="cover_image_url" validate={required()} />
            <TextInput source="title" validate={required()} />
            <TextInput source="desc" validate={required()} />
            <TextInput source="content" validate={required()} />
        </SimpleForm>
    </Edit>
);