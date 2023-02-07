import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Image/logo.png';
import './Navbar.css';
import profile from '../../Image/profileicon.png';

const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [token, setToken] = useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate()

    useEffect(() => {
        const tok = sessionStorage.getItem("token")
        if (tok != null) {
            setToken(tok)
        }
    }, [])

    const loginClick = () => {
        navigate('/login')
    }

    const myProfile = () => {
        navigate('/profile')
    }
    const studentDashboard = () => {
        navigate('/student-dashboard')
    }
    const educationalInformation = () => {
        navigate('/educational-information')
    }

    const logOutProfile = () => {
        sessionStorage.removeItem("token")
        navigate('/')
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <Link to='/'>
                    <img src={logo} alt="logo" width={180} />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <form class="d-flex">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 snip1135">
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to='/'>About</Link>
                            </li>
                            {token == null ? (<li class="nav-item">
                                <Link class="nav-link " to='/exams'>Exams</Link>
                            </li>) : (
                                <li class="nav-item">
                                    <Link class="nav-link" to='/exam-room'>Exams Room</Link>
                                </li>)}
                            {/* <li class="nav-item">
                                <Link class="nav-link " to='/'>My Performance</Link>
                            </li> */}
                            {token && (<li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    My Performance <ArrowDropDownIcon />
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to='/exam-result'>Exam Result</Link></li>
                                    <li><Link class="dropdown-item" to="/subject-result">Subject Wise Result</Link></li>
                                    <li><Link class="dropdown-item" to='/award-winning'>Award Winning</Link></li>
                                </ul>
                            </li>)}
                            <li class="nav-item">
                                <Link class="nav-link" to='/contact'>Contact Us</Link>
                            </li>
                            <li class="nav-item">
                                <select class="form-select" aria-label="Default select example">
                                    {/* <option selected>Language </option> */}
                                    <option value="1">English</option>
                                </select>
                            </li>
                            {token == null ? (<li class="nav-item">
                                <button onClick={loginClick} class="nav-link  loginBtn" href="login">Login / Register</button>
                            </li>) : (
                                <li class="nav-item">
                                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                        <Tooltip title="Account settings">
                                            <IconButton
                                                onClick={handleClick}
                                                size="small"
                                                sx={{ ml: 2 }}
                                                aria-controls={open ? 'account-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                            >
                                                <Avatar sx={{ width: 37, height: 37 }} src={profile}></Avatar> <Link class="nav-link">My Account</Link>
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={open}
                                        onClose={handleClose}
                                        onClick={handleClose}
                                        PaperProps={{
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&:before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <MenuItem onClick={myProfile}>
                                            <Avatar />My Profile
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem onClick={educationalInformation}>
                                            <Avatar />Educational Information
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem onClick={studentDashboard}>
                                            <Avatar />Student Dashbaord
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem onClick={logOutProfile}>
                                            <ListItemIcon>
                                                <Logout fontSize="small" />
                                            </ListItemIcon>
                                            Logout
                                        </MenuItem>
                                    </Menu>
                                </li>)}
                        </ul>
                    </form>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;