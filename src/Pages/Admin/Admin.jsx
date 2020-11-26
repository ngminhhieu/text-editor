// import * as React from "react";
// import { Admin, Resource } from 'react-admin';
// import simpleRestProvider from 'ra-data-simple-rest';
// import PostList from '../Post/PostList.jsx';
// import PostEdit from '../Post/PostEdit.jsx';
// import PostCreate from '../Post/PostCreate.jsx';
// import { PostIcon } from '../Post/PostIcon.jsx'; // Tai sao lai khac PostCreate

// const AdminPage = () => {
//   return(
//     <Admin title="My Custom Admin" dataProvider={simpleRestProvider('https://jsonplaceholder.typicode.com/')}>
//         <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
//     </Admin>
//   );
// }

// export default AdminPage;

import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from "../User/User.jsx";
import PostList from "../Post/PostList.jsx";
import PostEdit from '../Post/PostEdit.jsx';

//connect the data provider to the REST endpoint
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
   return (
       <Admin dataProvider={dataProvider}>
           <Resource name="posts" list={PostList} edit={PostEdit}/>
           <Resource name="users" list={UserList}/>
       </Admin>
   );
}

export default App;
