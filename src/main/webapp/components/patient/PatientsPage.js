import Page from "../Page";
import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { Card, CardContent } from "@material-ui/core";
import { FaUserPlus } from "react-icons/fa";

import { makeStyles } from "@material-ui/core/styles";
import Title from "../Title/CardTitle";
import PatientList from "./PatientSearch";

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const PatientPage = props => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.cardBottom}>
        <CardContent>
          <Title>
            <Link to="/patient-registration">
              <Button
                variant="contained"
                color="primary"
                className=" float-right mr-1"
                startIcon={<FaUserPlus />}
              >
                <span style={{textTransform: 'capitalize'}}>Add </span>
                &nbsp;&nbsp;
                <span style={{textTransform: 'lowercase'}}>Patient </span>
                
              </Button>
            </Link>
            <br />
          </Title>
          <br />
          <PatientList />
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientPage;
