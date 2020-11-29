import * as React from "react";
import { List, Datagrid, DateField, TextField, EditButton } from 'react-admin';

const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="cover_image_url" />
                <TextField source="title" />
                <TextField source="desc" />
                <TextField source="content" />
                <DateField source="created_on" />
                <DateField source="modified_on" />
                <DateField source="deleted_on" />
                <TextField source="created_by" />
                <TextField source="modified_by" />
                <TextField source="tag.name" />
                <TextField source="state" />
                <EditButton basePath="/articles" />
            </Datagrid>
        </List>
    );
};

export default PostList;
