import { Autocomplete, Box, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
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
  return (
    <BaseCard title="Doner List">
      {/* Search Bar  */}

      <div className='flex items-center'>
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

      <Table aria-label="doner table" sx={{ mt: 3, whiteSpace: "nowrap", }}>
        <TableHead>
          <TableRow>
            <TableCell><Typography color="textSecondary" variant="h6">
              Sr.
            </Typography></TableCell>
            <TableCell><Typography color="textSecondary" variant="h6">
              Image
            </Typography></TableCell>
            <TableCell><Typography color="textSecondary" variant="h6">
              Name
            </Typography></TableCell>
            <TableCell><Typography color="textSecondary" variant="h6">
              Phone
            </Typography></TableCell>
            <TableCell><Typography color="textSecondary" variant="h6">
              City
            </Typography></TableCell>
            <TableCell><Typography color="textSecondary" variant="h6">
              Status
            </Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doners.map((doner, i) => {
            const { is_available, name, phone, avatar, city } = doner;
            return (
              <TableRow key={i}>
                <TableCell><Typography sx={{ fontSize: "15px", fontWeight: "500", }}>
                  {i + 1}
                </Typography></TableCell>
                <TableCell>
                  <Avatar alt={name} src={avatar} />
                  {/* {avatar ?
                    <Image src={avatar} alt="doner-image" height="40" width="40" className='rounded-3xl' />
                    :
                    <Avatar alt={name} src={avatar} />
                  } */}
                </TableCell>
                <TableCell><Typography color="textSecondary" variant="h6">
                  {name}
                </Typography></TableCell>
                <TableCell><Typography color="textSecondary" variant="h6">
                  <a href={`tel:${phone}`}>{phone}</a>
                </Typography></TableCell>
                <TableCell><Typography color="textSecondary" variant="h6">
                  {city}
                </Typography></TableCell>
                <TableCell>
                  <span className={`${is_available ? 'text-green-600 bg-green-400 ' : 'text-orange-600 bg-orange-400'} bg-opacity-20 font-sans  rounded px-2 pb-1 font-bold shadow`}>{doner.is_available ? 'Available' : 'Unavailable'}</span>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </BaseCard>
  );
};

export default DonerList;
