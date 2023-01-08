import React from 'react'
import Typography from '@mui/material/Typography'
import Icon from 'src/@core/components/icon'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import TableSort from 'src/views/table/data-grid/TableBasicSort'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import InputBase from '@mui/material/InputBase'
import PickersRange from 'src/views/forms/form-elements/pickers/PickersRange'

// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 4, 1, 0),

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    border:'1px solid #ccc',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}))

function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='transparent' elevation={0}>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='open drawer' sx={{ mr: 2 }}>
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Typography variant='h6'>
              Lead Sources
              <IconButton>
                <Icon icon={'material-symbols:add-circle'} style={{ color: '#377CFF',fontSize:'16pt' }}></Icon>
              </IconButton>
            </Typography>
          </Typography>
          <Search>
            <SearchIconWrapper>
              {/* <SearchIcon /> */}
              <Icon icon={'material-symbols:search-rounded'} />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
          </Search>
          <Search>
            <SearchIconWrapper>
              {/* <SearchIcon /> */}
              <Icon icon={'material-symbols:search-rounded'} />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default function MySources() {
  return (
    <div>
      <Box>
        <SearchAppBar />
      </Box>
      <Box>{/* <TableSort/> */}</Box>
    </div>
  )
}
