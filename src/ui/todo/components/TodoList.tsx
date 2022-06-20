import { CircularProgress } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

interface TodoItem {
    id: string;
    date?: any;
    description?: string | null | undefined;
    author?: string | null | undefined;
    shortMessage?: string | null | undefined;
    selected: boolean
}

interface Props {
    items: TodoItem[];
    loading: boolean
    onTodoAdd: (id: string) => void
    onTodoRemove: (id: string) => void
    onEdit: (id: string) => void
}

export const TodoList: React.FunctionComponent<Props> = ({items, loading, onTodoAdd, onTodoRemove, onEdit}) => {

  if(loading) {
    return <CircularProgress />
  }

  return (
    <List sx={{ bgcolor: 'background.paper' }}>
      {items.map((value) => {
        const labelId = `checkbox-list-label-${value.id}`;

        return (
          <ListItem
            key={value.id}
            disablePadding
            onClick={() => onEdit(value.id)}
          >
            <ListItemButton role={undefined}>

              <Checkbox checked={value.selected}  onClick={() => value.selected ? onTodoRemove(value.id) : onTodoAdd(value.id)} />
              <ListItemText sx={{ color: 'text.primary' }} id={labelId} primary={value.shortMessage} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
