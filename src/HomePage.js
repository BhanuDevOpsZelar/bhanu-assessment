import React from "react";
import { AppBar, CardContent, CardHeader, Title } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
 import Card from "@mui/material/Card";

function HomePage() {
  return (
    <>
      <AppBar position="static" padding={4}>
        <div>
          <Typography variant="h3" textAlign={"center"} padding ={2}>
            Login Page 
          </Typography>
        </div>
      </AppBar>
      <div >
        <Typography textAlign={'center'} marginTop={10}>
            <Card >
               <Typography variant="h6">User Name:</Typography>
               <input type="text" placeholder="User Name"/>
            </Card>
        </Typography>
      </div>
      <Card>
      <CardHeader title="Get started" subheader="Register as a new member" />
      <CardContent className="flexBox flexColumn">
        <TextField
          label="Full Name"
          type={"text"}
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          onChange={(e) => textChangeHandler(setUsername, e)}
        />
        <TextField
          label="Email"
          type={"email"}
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          onChange={(e) => textChangeHandler(setEmail, e)}
        />
        <TextField
          label="Password"
          type={"password"}
          sx={{ m: 1, width: "25ch" }}
          
          variant="outlined"
          onChange={(e) => textChangeHandler(setPassword, e)}
        />
        <TextField
          label="Confirm Password"
          type={"password"}
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          helperText={passwordError && "Invalid Inputs !!"}
          onChange={(e) => textChangeHandler(setConfirmPassword, e)}
        />
      </CardContent>
      <CardActions className="flexBox flexColumn">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={
            <Typography>
              I agree to{" "}
              <Link href="#" onClick={openTerms}>
                Terms and Conditions
              </Link>
            </Typography>
          }
        />
        <Button variant="contained" onClick={registerToFirebase}>
          Sign Up
        </Button>
        <Typography>
          Already have an account ?
          <Link href="#" onClick={signinHandler} style={{ marginLeft: "5px" }}>
            Sign In
          </Link>
        </Typography>
      </CardActions>
    </Card>
      
    </>
  );
}

export default HomePage;
