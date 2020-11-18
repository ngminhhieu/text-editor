import * as React from "react";
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import PostList from '../Post/PostList.jsx';
import PostEdit from '../Post/PostEdit.jsx';
import PostCreate from '../Post/PostCreate.jsx';
import { PostIcon } from '../Post/PostIcon.jsx'; // Tai sao lai khac PostCreate
import Dashboard from '../Dashboard/Dashboard.jsx';

const dataProvider = {
  getList:    (resource, params) => Promise,
  getOne:     (resource, params) => Promise,
  getMany:    (resource, params) => Promise,
  getManyReference: (resource, params) => Promise,
  create:     (resource, params) => Promise,
  update:     (resource, params) => Promise,
  updateMany: (resource, params) => Promise,
  delete:     (resource, params) => Promise,
  deleteMany: (resource, params) => Promise,
}

const authProvider = {
  login: params => Promise.resolve(),
  logout: params => Promise.resolve(),
  checkAuth: params => Promise.resolve(),
  checkError: error => Promise.resolve(),
  getPermissions: params => Promise.resolve(),
};

const AdminPage = () => {
  return(
    <Admin title="My Custom Admin" dashboard={Dashboard} authProvider={authProvider} dataProvider={simpleRestProvider('http://localhost:3000')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    </Admin>
  );
}

export default AdminPage;

