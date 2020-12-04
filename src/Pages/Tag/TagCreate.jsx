import React from "react";
import { Create, SimpleForm, TextInput, required } from 'react-admin';

const TagCreate = (props) => {
    return (
        <Create title="Create a Tag" {...props}>
            <SimpleForm>
                <TextInput label="Id" source="id" />
                <TextInput source="name" validate={required()} />
            </SimpleForm>
        </Create>
    );
};

export default TagCreate;