import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex'
    },
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    active: {
      background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2)
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1
    }
  };
});

export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color='secondary' />,
      path: '/'
    },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar
        className={classes.appBar}
        elevation={0}
      >
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>
            Guest
          </Typography>
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant='h5' className={classes.title}>
            Jun's Notes
          </Typography>
        </div>

        <List>
          <ListItem>
            <ListItemText primary='hello' />
          </ListItem>
          <ListItem>
            <ListItemText primary='hello' />
          </ListItem><ListItem>
            <ListItemText primary='hello' />
          </ListItem>
        </List>

        {/* list /links */}
        <List>
          {menuItems.map(item =>
          (<ListItem
            key={item.text}
            button
            onClick={() => history.push(item.path)}
            className={location.pathname === item.path ? classes.active : null}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </ListItem>)
          )}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
