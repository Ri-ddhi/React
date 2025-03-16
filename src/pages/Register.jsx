import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom"; // Corrected import
import toast, { Toaster } from "react-hot-toast"; // Ensure the correct import

const Register = () => {
  const navigate = useNavigate();

  // Function to register the user
  const registerUser = async (values) => {
    try {
      const res = await axiosInstance.post("/user/register", values);

      toast.success(res?.data?.message || "Registration Successful!");

      setTimeout(() => {
        navigate("/GetStarted");
      }, 2000); // Adding delay to let the toast message appear
    } catch (error) {
      console.error("Register user error:", error);
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Full height of viewport
        backgroundColor: "#f5f5f5",
      }}
    >
      <Toaster /> {/* Toast notifications */}
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          address: "",
          password: "",
          gender: "",
          phoneNumber: "",
        }}
        validationSchema={yup.object({
          fullName: yup
            .string()
            .required("Full name is required.")
            .trim()
            .max(255, "Full name must be at max 255 characters."),
          email: yup
            .string()
            .email("Must be a valid email.")
            .required("Email is required.")
            .trim()
            .max(100, "Email must be at max 100 characters.")
            .lowercase(),
          address: yup
            .string()
            .notRequired()
            .max(255, "Address must be at max 255 characters.")
            .trim(),
          password: yup
            .string()
            .required("Password is required.")
            .trim()
            .min(8, "Password must be at least 8 characters.")
            .max(30, "Password must be at max 30 characters."),
          gender: yup
            .string()
            .required("Gender is required.")
            .trim()
            .oneOf(["male", "female", "other", "preferNotToSay"]),
          phoneNumber: yup
            .string()
            .notRequired()
            .trim()
            .min(10, "Phone number must be at least 10 characters.")
            .max(20, "Phone number must be at max 20 characters."),
        })}
        onSubmit={async (values) => {
          await registerUser(values);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.5rem",
              width: 400,
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              padding: "1rem",
            }}
          >
            <Typography variant="h5">Register</Typography>

            {/* Full Name Field */}
            <FormControl fullWidth>
              <TextField
                required
                label="Full Name"
                {...formik.getFieldProps("fullName")}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <FormHelperText error>{formik.errors.fullName}</FormHelperText>
              )}
            </FormControl>

            {/* Email Field */}
            <FormControl fullWidth>
              <TextField
                required
                label="Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              )}
            </FormControl>

            {/* Password Field */}
            <FormControl fullWidth>
              <TextField
                required
                label="Password"
                type="password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <FormHelperText error>{formik.errors.password}</FormHelperText>
              )}
            </FormControl>

            {/* Address Field */}
            <FormControl fullWidth>
              <TextField label="Address" {...formik.getFieldProps("address")} />
              {formik.touched.address && formik.errors.address && (
                <FormHelperText error>{formik.errors.address}</FormHelperText>
              )}
            </FormControl>

            {/* Phone Number Field */}
            <FormControl fullWidth>
              <TextField
                label="Phone Number"
                {...formik.getFieldProps("phoneNumber")}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <FormHelperText error>
                  {formik.errors.phoneNumber}
                </FormHelperText>
              )}
            </FormControl>

            {/* Gender Dropdown */}
            <FormControl fullWidth>
              <InputLabel required>Gender</InputLabel>
              <Select
                required
                label="Gender"
                {...formik.getFieldProps("gender")}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
                <MenuItem value={"preferNotToSay"}>Prefer Not To Say</MenuItem>
              </Select>
              {formik.touched.gender && formik.errors.gender && (
                <FormHelperText error>{formik.errors.gender}</FormHelperText>
              )}
            </FormControl>

            {/* Submit Button */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                width: "100%",
              }}
            >
              <Button
                fullWidth
                variant="contained"
                color="warning"
                type="submit"
              >
                Submit
              </Button>

              {/* Link to Login Page */}
              <Link
                to="/getstarted"
                style={{
                  color: "orangered",
                  textDecoration: "none",
                }}
              >
                Already registered? Login
              </Link>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Register;
