import React from "react";
import Edit from './Edit.jsx';
import { SimpleForm, TextInput, required} from 'react-admin';

const TagTitle = ({ record }) => {
    return <span>Tag {record ? `"${record.title}"` : ''}</span>;
};

const TagEdit = (props) => {
    return(
        <Edit title={<TagTitle />} {...props} >
            <SimpleForm>
                <TextInput disabled label="Id" source="id" />
                <TextInput source="name" validate={required()} />
            </SimpleForm>
        </Edit>
    );
};

export default TagEdit;