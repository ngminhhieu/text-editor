import * as React from "react";
import { List, Datagrid, DateField, TextField, EditButton } from 'react-admin';

const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="body" />
                <DateField source="published_at" />
                <TextField source="average_note" />
                <TextField source="views" />
                <EditButton basePath="/posts" />
            </Datagrid>
        </List>
    );
};

export default PostList;
