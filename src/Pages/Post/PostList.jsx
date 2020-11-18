import * as React from "react";
import { List, Datagrid, DateField, TextField, EditButton } from 'react-admin';

// export const PostList = (props) => (
//     <List {...props}>
//         <Datagrid>
//             <TextField source="id" />
//             <TextField source="title" />
//             <DateField source="published_at" />
//             <TextField source="average_note" />
//             <TextField source="views" />
//             <EditButton basePath="/posts" />
//         </Datagrid>
//     </List>
// );

const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <DateField source="published_at" />
                <TextField source="average_note" />
                <TextField source="views" />
                <EditButton basePath="/posts" />
            </Datagrid>
        </List>
    );
};

export default PostList;
