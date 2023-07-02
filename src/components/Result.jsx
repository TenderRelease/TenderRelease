import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


export default function Result() {
  const [tenderId, setTenderId] = useState(0);
  const [tokenId, setTokenId] = useState(0);
  const [name, setName] = useState(" [Getting Data.....] ");
  const [visible, setVisible] = useState("none");
  // const [, set] = useState("...");
  // const [, set] = useState("...");
  // const [, set] = useState("...");
  // const [, set] = useState("...");

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Field',
      headerName: 'Field',
      width: 150,
    },
    {
      field: 'Value',
      headerName: 'Value',
      width: 700,
    }
  ];

  const  [rows,setRows] = useState([]);

  useEffect(() => {
    async function chk1(){
      setVisible("block");
      await axios
      .get("https://tenderrelease.cyclic.app/tenderDetails/" + tokenId)
      .then((response) => {
        if (response.data === "Error!!") {
          alert("Error");
          setVisible("none");
        } else {
          console.log(response.data);
          if(tenderId!==0&&tokenId!==0){
            setName(response.data.companyName);
            setRows( [
            { id: 1, Field: "Company Name", Value: response.data.companyName},
            { id: 2, Field: "Token Id", Value: response.data.tokenId},
            { id: 3, Field: "Owner Name", Value: response.data.ownerName},
            { id: 4, Field: "Email", Value: response.data.email},
            { id: 5, Field: "DIN Number", Value: response.data.din},
            { id: 6, Field: "Phone Number", Value: response.data.phoneNumber},
            { id: 7, Field: "Tender Id", Value: response.data.tenderId},
            { id: 8, Field: "Transaction Hash", Value: response.data.transactionHash},
            { id: 9, Field: "Bid Amount", Value: response.data.bid}
            ])
            setVisible("none");
          }
        }
      });
    }
    async function chk2(){
    await axios.get("https://tenderrelease.cyclic.app/getWinner").then((response) => {
      if (response.data === "Error") {
        alert(response.data);
      } else {
        setTenderId(response.data.tenderId);
        setTokenId(response.data.winnerId);
        console.log(tokenId);
        console.log(response.data.winnerId);
        chk1();
      }
    });
  }

  chk2();
  }, [tenderId,tokenId]);
  // useEffect(() => {

  // }, [tokenId]);
  console.log(rows);
  return(
    <div>
      <div className="containers mx-auto text-5xl font-semibold  my-20 text-center">And the winner is company: {name}, for the Tender Id: {tenderId}</div>
      <LinearProgress className="mx-60 my-20" style={{ display: visible}} color="success"  />
    <Box className="px-10" sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  )
}
