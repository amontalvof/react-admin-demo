import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PosterList } from './components/PosterList';
import { PosterEdit } from './components/PosterEdit';
import { PosterCreate } from './components/PosterCreate';
import { CategoryList } from './components/CategoryList';
import { CategoryEdit } from './components/CategoryEdit';
import { CategoryCreate } from './components/CategoryCreate';

const dataProvider = jsonServerProvider('http://localhost:3000');

const App = () => {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource
                name="categories"
                list={CategoryList}
                edit={CategoryEdit}
                create={CategoryCreate}
                recordRepresentation="name"
            />
            <Resource
                name="posters"
                list={PosterList}
                edit={PosterEdit}
                create={PosterCreate}
            />
        </Admin>
    );
};

export default App;
