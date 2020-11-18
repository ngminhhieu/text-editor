// in posts.js
import * as React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';
import CKEditor from 'ckeditor4-react';
CKEditor.editorUrl = 'https://cdn.ckeditor.com/4.15.1/full-all/ckeditor.js';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostEdit = (props) => {

    return(
        <Edit title={<PostTitle />} {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <TextInput source="teaser" options={{ multiline: true }} />
                <TextInput multiline source="body" />
                <DateInput label="Publication date" source="published_at" />
                <TextInput source="average_note" />
                <TextInput disabled label="Nb views" source="views" />
            </SimpleForm>
        </Edit>
    );
};

export default PostEdit;