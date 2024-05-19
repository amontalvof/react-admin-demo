import {
    Datagrid,
    ImageField,
    List,
    NumberField,
    ReferenceField,
    TextField,
    useRecordContext,
    EditButton,
    TopToolbar,
    SelectColumnsButton,
    ExportButton,
    DatagridConfigurable,
} from 'react-admin';
import { PosterFilterSidebar } from './FilterList';

const UrlField = ({ source }: { source: string }) => {
    const record = useRecordContext();
    if (!record) return null;
    return (
        <a href={record[source]} target="_blank" rel="noopener noreferrer">
            View
        </a>
    );
};

const PosterListActions = () => (
    <TopToolbar>
        <SelectColumnsButton />
        <ExportButton />
    </TopToolbar>
);

export const PosterList = () => (
    <List aside={<PosterFilterSidebar />} actions={<PosterListActions />}>
        <DatagridConfigurable>
            <TextField source="id" />
            <ReferenceField source="category_id" reference="categories">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <NumberField source="width" label="Width(cm)" />
            <NumberField source="height" label="Height(cm)" />
            <NumberField source="price" />
            <ImageField
                source="thumbnail"
                title="title"
                sx={{
                    '& img': {
                        maxWidth: 80,
                        maxHeight: 80,
                        objectFit: 'contain',
                    },
                }}
            />
            <UrlField source="image" />
            <TextField source="description" />
            <NumberField source="stock" />
            <NumberField
                source="sales"
                sx={{ fontWeight: 'bold' }}
                emptyText="N/A"
            />
            <EditButton />
        </DatagridConfigurable>
    </List>
);
