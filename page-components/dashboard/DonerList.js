import Delete from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Autocomplete, Box, FormControl, IconButton, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { blue, red } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { districts } from '../../data/bd-info';
import { bloodGroups, doners } from "../../data/data";
import BaseCard from "./BaseCard";

const DonerList = () => {
  const [blood, setBlood] = useState('')
  const [district, setDistrict] = useState(districts[0]?.name)
  const filterBloodGroups = (e) => {
    setBlood(e.target.value);
  }
  const filterDistrict = (e, value) => {
    setDistrict(value?.name);
  }

  useEffect(() => {
    console.log({ blood, district })
  }, [blood, district])


  const handleEdit = (id) => {
    console.log('edit', id)
  }
  const handleDelete = (id) => {
    console.log('delete', id)
  }
  const headings = ["Sr.", "Blood", "Image", "Name", "Phone", "City", "Status", "Action"]

  return (
    <>
      <BaseCard title="Doner List">
        {/* Search Bar  */}
        <div className='flex flex-col md:flex-row items-center'>
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

          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} className="w-full">
            <InputLabel id="blood">Blood</InputLabel>
            <Select
              labelId="blood"
              value={blood}
              onChange={filterBloodGroups}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              {bloodGroups.map((b, i) => <MenuItem key={i} value={b.value}>{b.name}</MenuItem>)}
            </Select>
          </FormControl>
        </div>

        {/* Doners table  */}
        <TableContainer component={Paper}>
          <Table aria-label="doner table" sx={{ mt: 3, whiteSpace: "nowrap", }} className="doner-table">
            <TableHead>
              <TableRow>
                {headings.map((h, i) => <TableCell key={i}><Typography color="textSecondary" variant="h6">
                  {h}
                </Typography></TableCell>)}

              </TableRow>
            </TableHead>
            <TableBody>
              {doners.map((doner, i) => {
                const { id, is_available, blood, first_name, last_name, phone, avatar, city, joined } = doner;
                return (
                  <TableRow key={i}>
                    <TableCell><Typography sx={{ fontSize: "15px", fontWeight: "500", }}>
                      {i + 1}
                    </Typography></TableCell>
                    <TableCell>
                      <Avatar alt={first_name} src={avatar} />
                    </TableCell>
                    <TableCell><Typography color="textSecondary" variant="h6">
                      {first_name} {last_name}
                    </Typography></TableCell>
                    <TableCell><Typography color="textSecondary" variant="h6">
                      {blood}
                    </Typography></TableCell>
                    <TableCell><Typography color="textSecondary" variant="h6">
                      <a href={`tel:${phone}`}>{phone}</a>
                    </Typography></TableCell>
                    <TableCell><Typography color="textSecondary" variant="h6">
                      {city}
                    </Typography></TableCell>
                    <TableCell>
                      <span className={`${is_available ? 'text-green-600 bg-green-400 '
                        : 'text-orange-600 bg-orange-400'}
                    bg-opacity-20 font-sans  rounded px-2 pb-1 font-bold shadow`}>
                        {doner.is_available ? 'Available' : 'Unavailable'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <IconButton aria-label="edit">
                          {/* <button onClick={() => handleEdit(id)} className="bg-green-600 py-1 px-2 text-white rounded shadow"> Edit </button> */}
                          {/* <FeatherIcon icon="edit" /> */}
                          <EditIcon sx={{ color: blue[500] }} />
                        </IconButton>
                        <IconButton aria-label="delete">
                          {/* <button onClick={() => handleDelete(id)} className="bg-red-600 py-1 px-2 text-white rounded shadow"> Delete </button> */}
                          <Delete sx={{ color: red[500] }} />
                        </IconButton>
                      </div>
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
