// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Demo Components Imports
import Table from 'src/views/apps/roles/Table'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

function ActionAreaCard({ src, title }) {
  return (
    <>
      <Card sx={{ width: '100%', height: '250px', maxWidth: 445, maxHeight: '545px' }}>
        <CardActionArea sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <CardMedia
            sx={{
              width: '60px',
              height: '60px',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '25px',
              textAlign: 'center'
            }}
            component='img'
            height='140'
            image={src}
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='subtitle1' component='div' textAlign='center' fontWeight={'bolder'}>
              {title}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              marginTop: '40px',
              marginLeft: 'center',
              marginRight: 'center',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Button size='medium' variant='contained' sx={{ backgroundColor: '#00BBF6' }}>
              Connect
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  )
}

const RolesCardsESP = () => {
  return (
    <>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <ActionAreaCard src={'https://leads.thedigitalsmith.co/img/Integration/sources/landingi.jpg'} title='Landigi' />
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/google-lead-form.png'}
          title='Google Lead Form'
        />
        <ActionAreaCard src={'https://leads.thedigitalsmith.co/img/Integration/sources/excel.png'} title='Excel' />
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/linkedin-leads-gen.png'}
          title='LinkedIn Lead Gen Forms'
        />
      </Stack>
      <br />
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <ActionAreaCard src={'https://leads.thedigitalsmith.co/img/icon/list-ul.png'} title='Start with demo data' />
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/webhook.png'}
          title='Webhook API'
        />
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/facebook-lead-ads.png'}
          title='Facebook Lead Ads'
        />
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/clickFunnels.png'}
          title='ClickFunnels'
        />
      </Stack>
      <br />

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/google-sheets.png'}
          title='Google Sheets'
        />
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/gravity-forms.png'}
          title='Gravity Forms'
        />
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/typeForm.png'}
          title='TypeForm'
        />
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/cognitoforms.png'}
          title='Cognito Forms'
        />
      </Stack>
      <br />
    </>
  )
}

const RolesCardsCRM = () => {
  return (
    <>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/google-sheets.png'}
          title='Google Sheets'
        />
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/gravity-forms.png'}
          title='Gravity Forms'
        />
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/typeForm.png'}
          title='TypeForm'
        />
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/cognitoforms.png'}
          title='Cognito Forms'
        />
      </Stack>
      <br/>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <ActionAreaCard src={'https://leads.thedigitalsmith.co/img/icon/list-ul.png'} title='Start with demo data' />
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/webhook.png'}
          title='Webhook API'
        />
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/facebook-lead-ads.png'}
          title='Facebook Lead Ads'
        />
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/clickFunnels.png'}
          title='ClickFunnels'
        />
      </Stack>
      <br />
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <ActionAreaCard src={'https://leads.thedigitalsmith.co/img/Integration/sources/landingi.jpg'} title='Landigi' />
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/google-lead-form.png'}
          title='Google Lead Form'
        />
        <ActionAreaCard src={'https://leads.thedigitalsmith.co/img/Integration/sources/excel.png'} title='Excel' />
        <ActionAreaCard
          src={'https://leads.thedigitalsmith.co/img/Integration/sources/linkedin-leads-gen.png'}
          title='LinkedIn Lead Gen Forms'
        />
      </Stack>
      <br />
      <br />
    </>
  )
}

const TabsCentered = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList centered onChange={handleChange} aria-label='centered tabs example'>
        <Tab value='1' label='ESP' />
        <Tab value='2' label='CRM' />
      </TabList>
      <TabPanel value='1'>
        <OutlinedInput
          id='icons-adornment-weight'
          endAdornment={
            <InputAdornment position='end'>
              <Icon icon='ic:baseline-search' />
            </InputAdornment>
          }
          inputProps={{
            'aria-label': 'weight'
          }}
          placeholder='Find your ESP..'
          sx={{width:'380px',height:'40px'}}
        />
        <Box sx={{pt:3}}>

        <RolesCardsESP />
        </Box>
      </TabPanel>
      <TabPanel value='2'>
      <OutlinedInput
          id='icons-adornment-weight'
          endAdornment={
            <InputAdornment position='end'>
              <Icon icon='ic:baseline-search' />
            </InputAdornment>
          }
          inputProps={{
            'aria-label': 'weight'
          }}
          placeholder='Find your CRM..'
          sx={{width:'380px',height:'40px'}}
        />
        <Box sx={{pt:3}}>

        <RolesCardsCRM />
        </Box>
      </TabPanel>
    </TabContext>
  )
}

const Integrations = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h6' fontWeight={'bold'}>
            Destinations
          </Typography>
        }

        // subtitle={
        //   <Typography variant='body2'>
        //     Choose between multiple integrations to sync your leads.
        //   </Typography>
        // }
      />
      <Grid item xs={12} sx={{ mb: 5 }}>
        {/* <RoleCards /> */}
        <TabsCentered />
      </Grid>
      {/* <PageHeader
        title={<Typography variant='h5'>Total users with their roles</Typography>}
        subtitle={
          <Typography variant='body2'>
            Find all of your company’s administrator accounts and their associate roles.
          </Typography>
        }
      />
      <Grid item xs={12}>
        <Table />
      </Grid> */}
    </Grid>
  )
}

export default Integrations
