// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Demo Components Imports
import Table from 'src/views/apps/roles/Table'
import RoleCards from 'src/views/apps/roles/RoleCards'

const RolesComponent = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title={<Typography variant='h5'>Connect your lead source</Typography>}
        subtitle={
          <Typography variant='body2'>
            Choose between multiple integrations to sync your leads.
          </Typography>
        }
      />
      <Grid item xs={12} sx={{ mb: 5 }}>
        <RoleCards />
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

export default RolesComponent
