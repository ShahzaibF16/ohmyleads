// ** React Imports
import { useState, Fragment } from 'react'

import Link from "next/Link"

// ** MUI Imports
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import Collapse from '@mui/material/Collapse'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TableContainer from '@mui/material/TableContainer'
import Icon from 'src/@core/components/icon'
import TableSort from 'src/views/table/data-grid/TableBasicSort'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import InputBase from '@mui/material/InputBase'
import PickersRange from 'src/views/forms/form-elements/pickers/PickersRange'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'


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
    border: '1px solid #ccc',
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
              Destination
              <IconButton component={Link} href="/integrations">
                <Icon icon={'material-symbols:add-circle'} style={{ color: '#377CFF', fontSize: '16pt' }}></Icon>
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

const createData = (name, calories, fat, carbs, protein, price) => {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1
      }
    ]
  }
}

const Row = props => {
  // ** Props
  const { row } = props

  // ** State
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            <Icon icon={open ? 'mdi:chevron-up' : 'mdi:chevron-down'} />
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.name}
        </TableCell>
        <TableCell align='right'>{row.calories}</TableCell>
        <TableCell align='right'>{row.fat}</TableCell>
        <TableCell align='right'>{row.carbs}</TableCell>
        <TableCell align='right'>{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={6} sx={{ py: '0 !important' }}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ m: 2 }}>
              <Typography variant='h6' gutterBottom component='div'>
                History
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align='right'>Amount</TableCell>
                    <TableCell align='right'>Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map(historyRow => (
                    <TableRow key={historyRow.date}>
                      <TableCell component='th' scope='row'>
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align='right'>{historyRow.amount}</TableCell>
                      <TableCell align='right'>{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5)
]

const TableCollapsible = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell> Conditions</TableCell>
            <TableCell align='right'>Leads</TableCell>
            <TableCell align='right'>Last updated on</TableCell>
            <TableCell align='right'>Status</TableCell>
            <TableCell align='right'>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map(row => (
            <Row key={row.name} row={row} />
          ))} */}
          <Box
            sx={{
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '350px',
              maxHeight: '32 0px',
              display: 'flex',
              position: 'absolute',
              left: '60%',
              top: '65%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
              <CardMedia
                sx={{ height: 120, width: 140, marginLeft: 'auto', marginRight: 'auto' }}
                image='https://leads.thedigitalsmith.co/img/empty.png'
              />
              <CardContent sx={{ pt: 4 }}>
                <Typography variant='h6' sx={{ mb: 2 }} textAlign='center' fontWeight={'bolder'}>
                  Nothing here yet !
                </Typography>
                <Typography variant='body2' textAlign='center' component={Link} href="/integrations">
                  <Button variant='contained' sx={{ backgroundColor: '#00BBF6' }}>
                    {' '}
                    <Icon icon={'material-symbols:add'} />
                    New Destination
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default function Destination() {
  return (
    <div>
      <Box>
        <SearchAppBar />
      </Box>
      <Box>
        <TableCollapsible />
      </Box>
    </div>
  )
}
