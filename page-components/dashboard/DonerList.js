import Delete from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Divider, Autocomplete, Badge, Box, Chip, FormControl, IconButton, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { blue, red } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import { districts } from '../../data/bd-info';
import { bloodGroups } from "../../data/data";
import mockDoners from '../../data/mock-user.json';
import BaseCard from "./BaseCard";

const DonerList = () => {
  const [blood, setBlood] = useState("all")
  const [district, setDistrict] = useState("")
  // Actions
  const handleEdit = (id) => {
    console.log('edit', id)
  }
  const handleDelete = (id) => {
    console.log('delete', id)
  }

  const headings = ["Sr.", "Image", "Name", "Blood", "Phone", "District", "Status", "Action"]

  // Filtering blood doners
  const filterBloodGroups = (e) => {
    setBlood(e.target.value);
  }
  const filterDistrict = (e, value) => {
    setDistrict(value?.name);
  }

  let filteredDoners = mockDoners;

  if (blood !== 'all') {
    filteredDoners = filteredDoners.filter(doner => {
      console.log(doner.blood.replace(' ', '').toLowerCase(),  blood.toLowerCase() )
      return doner.blood.replace(' ', '').toLowerCase() == blood.toLowerCase()
    });
  }
  if (district != "" && district !== undefined) {
    filteredDoners = filteredDoners.filter(doner => doner.district == district);
  }

  console.log({ blood, district, filteredDoners })

  return (
    <>
      <BaseCard title="Doner List">
        {/* Search Bar  */}
        <div className='flex flex-col md:flex-row items-center'>
          {/* Filter by District  */}
          <Autocomplete
            id="combo-box-demo"
            sx={{ width: 300 }}
            options={districts}
            autoHighlight
            getOptionLabel={(option) => option.name}
            onChange={filterDistrict}
            renderOption={(props, option) => (
              <Box component="li" {...props}>{option.name} </Box>
            )}

            style={{ width: 500, width: '100%' }}
            renderInput={(params) => {
              return <TextField {...params} label="District" placeholder="Search District" />
            }}
          />
          {/* Filter by blood  */}
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} className="w-full">
            <InputLabel id="blood">Blood</InputLabel>
            <Select labelId="blood" value={blood} onChange={filterBloodGroups} >
              <MenuItem value="all">All</MenuItem>
              {bloodGroups.map((b, i) => <MenuItem key={i} value={b.value}>{b.name}</MenuItem>)}
            </Select>
          </FormControl>
        </div>
        {/* Doners table  */}
        <TableContainer sx={{ maxHeight: 500 }} component={Paper}>

          <Table stickyHeader aria-label="doner table" sx={{ mt: 3, whiteSpace: "nowrap", }} className="doner-table">
            <TableHead className='relative'>
              {/* Table Row Headings  */}
              <TableRow >
                {headings.map((h, i) => <TableCell key={i}><Typography color="textSecondary" variant="h6">
                  {h}
                </Typography></TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>

              {filteredDoners?.length < 1 ?
                <TableRow>
                  <TableCell colSpan={8} className="text-center bg-gray-100 font-bold text-lg">No Doners Found!</TableCell>
                </TableRow>
                :
                filteredDoners?.map((doner, i) => {
                  const { id, is_available, blood, first_name, last_name, phone, avatar, district, is_admin, joined } = doner;
                  return (
                    <TableRow key={i}>
                      <TableCell>{i + 1}</TableCell><TableCell>
                        <Avatar alt={first_name} src={avatar} />
                      </TableCell>
                      <TableCell>{first_name} {last_name}</TableCell>
                      {/* Blood Group  */}
                      <TableCell>
                        <Tooltip title={blood} placement="right" >
                          <Badge badgeContent={blood.split(' ')[1]} size="small" color="success">
                            <Avatar sx={{ bgcolor: "#EA062B", width: 24, height: 24, fontSize: 15 }} size="small">
                              {blood.split(' ')[0]}
                            </Avatar>
                          </Badge>
                        </Tooltip>
                      </TableCell>
                      <TableCell><a href={`tel:${phone}`}>{phone}</a></TableCell>
                      <TableCell>{district}</TableCell>
                      <TableCell className="min-w-max text-center ">
                        {is_available ?
                          <Chip label="Available" size='small' color="success" /> :
                          <Chip label="Unavailable" size='small' color="secondary" />
                        }
                      </TableCell>
                      {/* Actions */}
                      <TableCell className="flex gap-2">
                        <Stack direction="row" spacing={1}>
                          <IconButton onClick={() => handleEdit(id)} aria-label="edit">
                            <EditIcon sx={{ color: blue[500] }} />
                          </IconButton>
                          <IconButton onClick={() => handleDelete(id)} aria-label="delete">
                            <Delete sx={{ color: red[500] }} />
                          </IconButton>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </BaseCard>
    </>
  );
};

export default DonerList;