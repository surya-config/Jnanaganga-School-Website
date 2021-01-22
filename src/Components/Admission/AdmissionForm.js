import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import emailjs from "emailjs-com";

import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import "./AdmissionForm.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function AdmissionForm() {
  const [applicant_name, setApplicantName] = useState("");
  const [applicant_gender, setApplicantGender] = useState("female");
  const [applicant_dob, setApplicantDob] = useState(new Date());
  const [applicant_year, setApplicantYear] = useState("");
  const [applicant_class, setApplicantClass] = useState("");
  const [applicant_nationality, setApplicantNationality] = useState("");
  const [applicant_religion, setApplicantReligion] = useState("");
  const [applicant_category, setApplicantCategory] = useState("");
  const [applicant_place, setApplicantPlace] = useState("");
  const [applicant_language, setApplicantLanguage] = useState("");
  const [applicant_school, setApplicantSchool] = useState("");
  const [applicant_address, setApplicantAddress] = useState("");
  const [applicant_fathername, setApplicantFathername] = useState("");
  const [applicant_fatheroccupation, setApplicantFatheroccupation] = useState(
    ""
  );
  const [applicant_mothername, setApplicantMothername] = useState("");
  const [applicant_motheroccupation, setApplicantMotheroccupation] = useState(
    ""
  );
  const [applicant_phone, setApplicantPhone] = useState(null);
  const [applicant_altphone, setApplicantAltphone] = useState(null);
  const [applicant_email, setApplicantEmail] = useState("");
  const [applicant_interest, setApplicantInterest] = useState("");

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [errmessage, setErrmessage] = useState("");
  const [successmessage, setSuccessmessage] = useState("");

  const templateParams = {
    to_name: "JRS",
    applicant_name,
    applicant_gender,
    applicant_dob,
    applicant_year,
    applicant_class,
    applicant_nationality,
    applicant_religion,
    applicant_category,
    applicant_place,
    applicant_language,
    applicant_school,
    applicant_address,
    applicant_fathername,
    applicant_fatheroccupation,
    applicant_mothername,
    applicant_motheroccupation,
    applicant_phone,
    applicant_altphone,
    applicant_email,
    applicant_interest,
  };

  const handleGenderChange = (e) => {
    setApplicantGender(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        "service_i0qz6hl",
        "template_iq1qj1l",
        templateParams,
        "user_Z9Tf9goxg6gWdJZTRLjYp"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessmessage("Successfully submitted the form! ");
          setApplicantName("");
          setApplicantGender("female");
          setApplicantDob(new Date().toString());
          setApplicantYear("");
          setApplicantClass("");
          setApplicantNationality("");
          setApplicantReligion("");
          setApplicantCategory("");
          setApplicantPlace("");
          setApplicantLanguage("");
          setApplicantSchool("");
          setApplicantAddress("");
          setApplicantFathername("");
          setApplicantFatheroccupation("");
          setApplicantMothername("");
          setApplicantMotheroccupation("");
          setApplicantPhone("");
          setApplicantAltphone("");
          setApplicantEmail("");
          setApplicantInterest("");
          setOpen(true);
        },
        (err) => {
          console.log("FAILED...", err);
          setErrmessage(err);
        }
      );
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="admissionForm">
      <center>
        <h1>Application Form</h1>
      </center>
      <form onSubmit={handleSubmit}>
        <div className="admission__form">
          <div className="admission__formLeft">
            <label htmlFor="admission_year" className="required">
              Admission for academic year
            </label>
            <input
              id="admission_year"
              type="text"
              placeholder="Ex: 2019-2020"
              required
              value={applicant_year}
              onChange={(e) => setApplicantYear(e.target.value)}
            />
            <label htmlFor="admission_class" className="required">
              Admission sought for class
            </label>
            <input
              id="admission_class"
              type="text"
              placeholder="Ex: Class 7"
              required
              value={applicant_class}
              onChange={(e) => setApplicantClass(e.target.value)}
            />

            <label htmlFor="admission_nationality" className="required">
              Nationality
            </label>
            <input
              id="admission_nationality"
              type="text"
              placeholder="Ex: Indian"
              required
              value={applicant_nationality}
              onChange={(e) => setApplicantNationality(e.target.value)}
            />

            <label htmlFor="admission_religion" className="required">
              Religion
            </label>
            <input
              id="admission_religion"
              type="text"
              placeholder="Ex: Hindu"
              required
              value={applicant_religion}
              onChange={(e) => setApplicantReligion(e.target.value)}
            />

            <label htmlFor="admission_place" className="required">
              Place of Birth{" "}
            </label>
            <input
              id="admission_place"
              type="text"
              placeholder="Ex: Bangalore"
              required
              value={applicant_place}
              onChange={(e) => setApplicantPlace(e.target.value)}
            />

            <label htmlFor="admission_address" className="required">
              Permanent Address{" "}
            </label>
            <textarea
              className="admission__address "
              rows="5"
              cols="10"
              autofocus
              required
              value={applicant_address}
              onChange={(e) => setApplicantAddress(e.target.value)}
            />

            <label htmlFor="admission_fatherName" className="required">
              Father Name{" "}
            </label>
            <input
              id="admission_fatherName"
              type="text"
              placeholder="Enter your Father name"
              required
              value={applicant_fathername}
              onChange={(e) => setApplicantFathername(e.target.value)}
            />

            <label htmlFor="admission_fatherOccupation" className="required">
              Father Occupation{" "}
            </label>
            <input
              id="admission_fatherOccupation"
              type="text"
              placeholder="Enter your Father Occupation"
              required
              value={applicant_fatheroccupation}
              onChange={(e) => setApplicantFatheroccupation(e.target.value)}
            />

            <label htmlFor="admission_phone" className="required">
              Phone Number{" "}
            </label>
            <input
              id="admission_phone"
              type="tel"
              placeholder="Ex: 9485152462"
              required
              value={applicant_phone}
              onChange={(e) => setApplicantPhone(e.target.value)}
            />

            <label htmlFor="admission_email" className="required">
              Email{" "}
            </label>
            <input
              id="admission_email"
              type="email"
              placeholder="Ex: john@gmail.com"
              required
              value={applicant_email}
              onChange={(e) => setApplicantEmail(e.target.value)}
            />
          </div>

          <div className="admission__formRight">
            <label htmlFor="admission_name" className="required">
              Name of the applicant{" "}
            </label>
            <input
              id="admission_name"
              type="text"
              placeholder="Ex: John"
              required
              value={applicant_name}
              onChange={(e) => setApplicantName(e.target.value)}
            />

            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                style={{
                  color: "#333",
                  fontSize: "18px",
                  fontWeight: "700",
                  fontFamily: "Karla",
                  paddingTop: "20px",
                  marginBottom: "35px",
                }}
                className="required"
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="gender1"
                style={{ marginBottom: "30px" }}
                required
                value={applicant_gender}
                onChange={handleGenderChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio color="primary" />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio color="primary" />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio color="primary" />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>

            <label htmlFor="admission_dob" className="required">
              Date of Birth{" "}
            </label>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={applicant_dob}
                  onChange={setApplicantDob}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>

            <label htmlFor="admission_caste" className="required">
              Category{" "}
            </label>
            <input
              id="admission_caste"
              type="text"
              placeholder="Ex: General"
              required
              value={applicant_category}
              onChange={(e) => setApplicantCategory(e.target.value)}
            />

            <label htmlFor="admission_language" className="required">
              Applicant First Language{" "}
            </label>
            <input
              id="admission_language"
              type="text"
              placeholder="Ex: Kannada"
              required
              value={applicant_language}
              onChange={(e) => setApplicantLanguage(e.target.value)}
            />

            <label htmlFor="admission_prevschool">
              Previous School (if any){" "}
            </label>
            <input
              id="admission_prevschool"
              type="text"
              placeholder="Ex: JKV"
              value={applicant_school}
              onChange={(e) => setApplicantSchool(e.target.value)}
            />

            <label
              htmlFor="admission_motherName"
              className="required"
              style={{ marginTop: "40px" }}
            >
              Mother Name{" "}
            </label>
            <input
              id="admission_motherName"
              type="text"
              placeholder="Enter your Mother name"
              required
              value={applicant_mothername}
              onChange={(e) => setApplicantMothername(e.target.value)}
            />

            <label htmlFor="admission_motherOccupation" className="required">
              Mother Occupation{" "}
            </label>
            <input
              id="admission_motherOccupation"
              type="text"
              placeholder="Enter your Mother Occupation"
              required
              value={applicant_motheroccupation}
              onChange={(e) => setApplicantMotheroccupation(e.target.value)}
            />

            <label htmlFor="admission_altphone">Alternate Phone Number </label>
            <input
              id="admission_altphone"
              type="tel"
              placeholder="Ex: 9485152462"
              value={applicant_altphone}
              onChange={(e) => setApplicantAltphone(e.target.value)}
            />

            <label htmlFor="admission_interests">
              Applicant's Interest (Sports, Music, etc){" "}
            </label>
            <input
              id="admission_interests"
              type="text"
              placeholder="Ex: Cricket, Guitar"
              value={applicant_interest}
              onChange={(e) => setApplicantInterest(e.target.value)}
            />
          </div>
        </div>
        <div className="admission__term ">
          <div className="admission__termCheckbox requiredTerm">
            <input type="checkbox" required />
          </div>
          <div className="admission__termMessage ">
            <p>
              I solemnly confirm that the information given above is correct to
              the best of my knowledge and belief. Further, I understand that
              any form of recommendation will disqualify my ward.I have read the
              school rules and agree to abide by them.
            </p>
            <p>
              All the information given above is true and complete to the best
              of my knowledge
            </p>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            {successmessage}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default AdmissionForm;
