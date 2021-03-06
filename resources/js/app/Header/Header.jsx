import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import LoginIcon from '@material-ui/icons/Lock';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Header({searchValue, setSearchValue}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    //profile menu on desktop
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >

      {/* popup menu profile menu item */}
     <Link to="/user/profile">
        <MenuItem>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="primary"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Link>  

      {/* popup menu account settings menu item */}
      <Link to="/user/settings">   
        <MenuItem>
          <IconButton
            aria-label="account settings"
            aria-haspopup="true"
            color="primary"
          >
            <SettingsIcon />
          </IconButton>
          <p>Account Settings</p>
        </MenuItem> 
      </Link> 
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    // whole hamburger mobile menu
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      {/* messages icon inside hamburger mobile menu */}
      <Link to="/messages">
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="primary">
            <Badge badgeContent={4} color="primary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
      </Link>


      {/* profile mobile menu */}
      <Link to="/user/profile">
        <MenuItem>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="primary"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Link>  

       {/* account settings mobile menu */}
      <Link to="/user/settings">   
        <MenuItem>
          <IconButton
            aria-label="account settings"
            aria-haspopup="true"
            color="primary"
          >
            <SettingsIcon />
          </IconButton>
          <p>Account Settings</p>
        </MenuItem> 
      </Link> 

      {/* LOGIN/LOGOUT */}
      <MenuItem>
        <IconButton>
            <LogoutIcon color="primary"/>
        </IconButton>
        <p>Logout</p>
      </MenuItem>

      <MenuItem>
      
        <Button color="primary" variant="contained" size="large">
          <Link to="/posts/create">Get Started</Link> 
        </Button> 
      
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>

      {/* the whole nav bar, can be set to fixed so it will stay on top */}
      <AppBar position="static">

        {/* content of whole navbar */}
        <Toolbar>

        {/* Logo */}
        <Link to="/">
        <img src="/logo_plantera.png" alt="logo" width="100px"/>
        </Link>

        

        <div className={classes.grow} />
    
        {/* desktop menu - right side */}
        <div className={classes.sectionDesktop}>
     
          {/* icon for messages on desktop */}
        <Link to="/messages">
            <IconButton aria-label="show 4 new mails" color="secondary">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
        </Link>
          
          {/* profile icon on desktop */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="secondary"
            >
              <AccountCircle />
            </IconButton>

        {/* LOGIN/LOGOUT */}
        <IconButton aria-label="login" color="secondary">
          <LogoutIcon/>
        </IconButton>  

        
          <Button color="secondary" variant="contained">
          <Link to="/posts/create">Get Started</Link> 
          </Button>  
        
   

        </div>

        
        {/* shows mobile menu on right side of nav */}
        <div className={classes.sectionMobile}>



          {/* hamburger button */}
          <IconButton
            aria-label="open mobile menu"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
            edge="start"
          >
            <MenuIcon />
          </IconButton>

        
        </div>

       

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
