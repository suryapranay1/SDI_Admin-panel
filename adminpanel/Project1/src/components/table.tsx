import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import LongMenu from './menu';
const columns: GridColDef[] = [
  { field: 'id', headerName: 'User Name', width: 120,renderHeader:()=>(<><PersonIcon sx={{marginRight:'.2em',color:'#2e7d32'}}/><p>User Name</p></>),align:'center',headerAlign:'center'},
  { field: 'UserMailId', headerName: '',sortable: false, width: 200,renderHeader:()=>(<><EmailIcon sx={{marginRight:'.2em',color:'#2e7d32'}}/><p>User Mail Id</p></>),align:'center',headerAlign:'center'},
  { field: 'CreatedDate', headerName: '', sortable: false,width: 150, type:"string",renderHeader:()=>(<><CalendarMonthIcon sx={{marginRight:'.2em'}}/><p>Created date</p></>),align:'center',headerAlign:'center'},
  {field: 'UserType',headerName: 'User Type',type: 'string',width: 110,sortable: false,align:'center',headerAlign:'center'},
  {field: 'LastLogin',headerName: '',sortable: false,width: 160,type:'string',renderHeader:()=>(<><AccessAlarmsIcon sx={{marginRight:'.2em',color:'red'}}/><p>Last Login</p></>),align:'center',headerAlign:'center'},
  {field:' ',headerName:' ',sortable: false,filterable:false,renderCell:()=>(<><LongMenu/></>)}
];

const rows = [
  { id: 'User', CreatedDate: '12-12-2023', UserMailId: 'Jon@gmail.com', UserType: 'Super Admin',LastLogin:'10:30 AM'},
  { id: 'User2', CreatedDate: '1990-01-01', UserMailId: 'Cersei@gmail.com', UserType: 'Admin',LastLogin:'10:30 AM' },
  { id: 'User3', CreatedDate: '1990-01-01', UserMailId: 'Jaime@gmail.com', UserType: 'Admin',LastLogin:'10:30 AM'},
  { id: 'User4', CreatedDate: '1990-01-01', UserMailId: 'Arya@gmail.com', UserType: 'Admin',LastLogin:'10:30 AM'},
  { id: 'User5', CreatedDate: '1990-01-01', UserMailId: 'Daenerys@gmail.com', UserType: 'Admin' ,LastLogin:'10:30 AM'},
  { id: 'User6', CreatedDate: '1990-01-01', UserMailId: null, UserType: 'Admin',LastLogin:'10:30 AM'},
  { id: 'User7', CreatedDate: '1990-01-01', UserMailId: 'Ferrara@gmail.com', UserType: 'User',LastLogin:'10:30 AM' },
  { id: 'User8', CreatedDate: '1990-01-01', UserMailId: 'Rossini@gmail.com', UserType: 'User' ,LastLogin:'10:30 AM'},
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%'}}>
      <DataGrid
        sx={{border:'none'}}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        
      />
    </div>
  );
}

