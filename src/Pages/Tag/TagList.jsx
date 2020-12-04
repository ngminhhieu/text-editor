import * as React from "react";
import { List, Datagrid, DateField, TextField, EditButton } from 'react-admin';

const TagList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <DateField source="created_on" />
                <DateField source="modified_on" />
                <DateField source="deleted_on" />
                <TextField source="created_by" />
                <TextField source="modified_by" />
                <TextField source="state" />
                <EditButton basePath="/tags" />
            </Datagrid>
        </List>
    );
};

export default TagList;
