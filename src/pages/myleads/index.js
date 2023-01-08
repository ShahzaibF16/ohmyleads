// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'
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
import Stack from '@mui/material/Stack';


// ** Third Party Components
import toast from 'react-hot-toast'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'


// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Data Import
import { rows } from 'src/@fake-db/table/static-data'



// ** renders client column
const renderClient = params => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]
  if (row.avatar.length) {
    return <CustomAvatar src={`/images/avatars/${row.avatar}`} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
  } else {
    return (
      <CustomAvatar skin='light' color={color} sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}>
        {getInitials(row.full_name ? row.full_name : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const statusObj = {
  1: { title: 'current', color: 'primary' },
  2: { title: 'professional', color: 'success' },
  3: { title: 'rejected', color: 'error' },
  4: { title: 'resigned', color: 'warning' },
  5: { title: 'applied', color: 'info' }
}

// ** Full Name Getter
const getFullName = params =>
  toast(
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {renderClient(params)}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
          {params.row.full_name}
        </Typography>
      </Box>
    </Box>
  )

const TableColumns = () => {
  // ** States
  const [pageSize, setPageSize] = useState(7)
  const [hideNameColumn, setHideNameColumn] = useState(false)

  const columns = [
    {
      flex: 0.25,
      minWidth: 290,
      field: 'full_name',
      headerName: 'Name',
      hide: hideNameColumn,
      renderCell: params => {
        const { row } = params

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {renderClient(params)}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
                {row.full_name}
              </Typography>
              <Typography noWrap variant='caption'>
                {/* {row.email} */}
                1Day ago
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 140,
      field: 'status',
      headerName: 'Status',
      renderCell: params => {
        const status = statusObj[params.row.status]

        return (
          <CustomChip
            size='small'
            skin='light'
            color={status.color}
            label={status.title}
            sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
          />
        )
      }
    },
    {
      flex: 0.175,
      minWidth: 120,
      headerName: 'Email',
      field: 'start_date',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.email}
        </Typography>
      )
    },
    {
      flex: 0.15,
      minWidth: 110,
      field: 'salary',
      headerName: 'Phone',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.salary}
        </Typography>
      )
    },
    {
      flex: 0.1,
      field: 'age',
      minWidth: 80,
      headerName: 'Generated On ',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.start_date}
        </Typography>
      )
    },

    {
      flex: 0.125,
      minWidth: 140,
      field: 'actions',
      headerName: 'Actions',
      renderCell: params => {
        return (
          <Button size='small' variant='outlined' color='secondary' onClick={() => getFullName(params)}>
            <Icon icon={'ic:outline-remove-red-eye'} fontSize="12pt" />&nbsp;
           <Typography variant="button"  fontSize="8pt" sx={{marginTop:'2px'}}>
            View
           </Typography>
          </Button>
        )
      }
    }
  ]

  return (
    <Card>
      <CardHeader
        title={<>
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Typography variant='h6'>
              Leads
              <IconButton>
                <Icon icon={'material-symbols:add-circle'} style={{ color: '#377CFF',fontSize:'16pt' }}></Icon>
              </IconButton>
            </Typography>
          </Typography>

        </>}
        action={
          <div>
            <Stack direction="row" spacing={2}>

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
          </Stack>
          </div>
        }
      />
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        disableSelectionOnClick
        rowsPerPageOptions={[7, 10, 25, 50]}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
      />
    </Card>
  )
}



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
      <AppBar position='static' color='transparent' >
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='open drawer' sx={{ mr: 2 }}>
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Typography variant='h6'>
              Leads
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
        <Typography variant='body2' sx={{marginLeft:'30px',marginTop:'-15px '}}>
          Showing ( 15 / 57 ) leads
          </Typography>
      </AppBar>
    </Box>
  )
}

export default function Myleads() {
  return (
    <div>
      <Box>
        {/* <SearchAppBar /> */}
      </Box>
      <Box sx={{pt:0}}>
        <TableColumns/>
      </Box>
    </div>
  )
}
