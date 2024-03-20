import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../loader';

const pages = [' + New', 'All Entries', 'Help & Support'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    const Navigate = useNavigate();

    const [loader, setloader] = useState(false);

    const [user_id, setUserId] = useState();
    
    React.useEffect(()=>{
        if(!user_id){
            setUserId(localStorage.user_id);
        }
        if(!localStorage.getItem("user_id")){
            setloader(true);
            setUserId();
            Navigate("/login");
            setTimeout(() => {
                toast.success("Signed out Success !");
            }, 500); 
            setloader(false);
        }
        
    
    }, [Navigate, user_id]);

    const handlePageMenuClick = (e) => {
        e.preventDefault();
        setloader(true);
        let curr = e.target.id;
        if(curr === '10' || curr==='20'){
            Navigate(`/user-session/${user_id}/new-entry`);
        }
        if(curr === '11' || curr === '21'){
            Navigate(`/user-session/${user_id}`);
        }
        
    }

    const handleUserMenuClick = (e, index) => {
        e.preventDefault();
        switch(index){
            case '0':
                
                break;
            case '1':
                break;
            case '2':
                break;
            case 3:
                localStorage.clear("user_id");
                setUserId();
                break;
            default :
        }
    }

    function handleBrandClick(e){
        e.preventDefault();
        Navigate(`/user-session/${user_id}`);
    }
    if(loader)
    setloader(false);
    return (
        
        <AppBar position="static">
            <ToastContainer autoClose={2000} hideProgressBar />
            {loader && <Loader/>}
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Ubuntu',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            
                        }}

                        onClick={handleBrandClick}
                    >
                    <i className="bi bi-journal-bookmark-fill"></i> &nbsp; Mind Mirror
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={page} id={index+10} onClick={(e)=>{
                                    e.preventDefault();
                                    handleCloseNavMenu();
                                    handlePageMenuClick(e);
                                }
                                }>
                                    <Typography textAlign="center" id={index+20}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Ubuntu',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        onClick={handleBrandClick}
                    >
                    <i className="bi bi-journal-bookmark-fill"></i> &nbsp; Mind Mirror
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <Button id={index+10}
                                key={page}
                                onClick={(e)=>{
                                    e.preventDefault();
                                handleCloseNavMenu(); handlePageMenuClick(e);}}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting, index) => (
                                <div id={index} onClick={(e)=>{
                                    e.preventDefault();
                                    handleCloseUserMenu();
                                    handleUserMenuClick(e, index);
                                }
                                }>
                                <MenuItem key={setting} >
                                    <Typography textAlign="center" >{setting}</Typography>
                                </MenuItem>
                                </div>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
