import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });



    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={() => setState({left: false})}
        >
            <List>
                {['Главная', 'Список треков', 'Списк альбомов'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <>
                    <Button onClick={() => setState({left: !state.left})}>menu</Button>
                    <Drawer
                        open={state[anchor]}
                        onClose={() => setState({left: false})}
                    >
                        {list(anchor)}
                    </Drawer>
                </>
            ))}
        </div>
    );
}