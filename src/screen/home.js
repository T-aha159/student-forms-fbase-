import { Alert, ButtonBase, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "../component/Input";
import { checkUser, getData, sendData } from "../firebase/firebasemethod";


const Home = () => {
  const [text, setText] = useState("");
  const [id, setUserId] = useState("");
  const [list, setList] = useState([]);
  const navigate = useNavigate()
  const params = useParams()




  let add = () => {
    if (!text) {
      return;
    }
    sendData({
      text: text,
      userId: id
    }, `todos/${id}`).then((id) => {
      console.log(id)
    }).catch((err) => {
      console.log(err)
    })

    setList([...list, text]);
    setText([""]);

    // console.log(list)
  };


  let goTodosData = ()=>{
    getData(`todos/${id}`, "-").then((res)=>{
      console.log(res)
      setList(res);
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(() => {
    checkUser().then((res) => {
      console.log(res)
      if (params.id == res) {
        setUserId(res);
  goTodosData()

      } else {
      }
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  let del = (i) => {
    const newList = list.filter((element, index) => index !== i);
    //   console.log(newList)
    setList(newList);
  };

  let edit = (i) => {
    let a = prompt("Enter Text", list[i]);
    list[i] = a;
    setList([...list]);
  };
  return (
    <>
      <Box>
        <Box className='sec1'>
          <h1>
            Registration Form
          </h1>
        </Box>
        <Box sx={{ml:5,mt:5}}>
        <Grid container spacing={4}  >
          <Grid item md={4}>
          <TextField
                label="First Name"
                type="text"
                variant="standard"
                sx={{ width: "70%" }}
              />
          </Grid>
          <Grid item md={4}>
          <TextField
                label="Last Name"
                type="text"
                variant="standard"
                sx={{ width: "70%" }}
              />
          </Grid>
          <Grid item md={4}>
          <TextField
                label="Course"
                type="text"
                variant="standard"
                sx={{ width: "70%" }}
              />
          </Grid>
          <Grid item md={4}>
          <TextField
                label="Sec"
                type="number"
                variant="standard"
                sx={{ width: "70%" }}
              />
          </Grid>
          <Grid item md={4}>
          <TextField
                label="Contact"
                type="number"
                variant="standard"
                sx={{ width: "70%" }}
              />
          </Grid>
          <Grid item md={4}>
          <TextField
                label="Cnic"
                type="number"
                variant="standard"
                sx={{ width: "70%" }}
              />
          </Grid>
          <Grid item md={4}>
          <TextField
                label="Father Name"
                type="text"
                variant="standard"
                sx={{ width: "70%" }}
              />
          </Grid>
          <Grid item md={4}>
          <TextField
                label="Father CNIC"
                type="text"
                variant="standard"
                sx={{ width: "70%" }}
              />
              </Grid>
              <Grid item md={4}>
          <TextField
                label="Father Contact"
                type="number"
                variant="standard"
                sx={{ width: "70%" }}
              />
              </Grid>
               <Grid item md={4}>
          <TextField
                label="Emergency Contact"
                type="number"
                variant="standard"
                sx={{ width: "70%" }}
              />
              </Grid>
               <Grid item md={4}>
          <TextField
                label="Date of Birth"
                type="number"
                variant="standard"
                sx={{ width: "70%" }}
              />
              </Grid>
              
      

          
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
