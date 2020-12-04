import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostList from "../Post/PostList.jsx";
import {PostEdit} from '../Post/PostEdit.jsx';
import PostCreate from '../Post/PostCreate.jsx';
import TagList from "../Tag/TagList.jsx";
import TagEdit from '../Tag/TagEdit.jsx';
import TagCreate from '../Tag/TagCreate.jsx';
import PostIcon from '@material-ui/icons/MenuBook';
import TagIcon from '@material-ui/icons/Category';

const dataProvider = jsonServerProvider('https://localhost:8000/api/v1');

function App() {
   return (
       <Admin dataProvider={dataProvider}>
           <Resource name="articles" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
           <Resource name="tags" list={TagList} edit={TagEdit} create={TagCreate} icon={TagIcon}/>
       </Admin>
   );
}

export default App;
