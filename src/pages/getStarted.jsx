import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required.")
      .trim()
      .lowercase(),
    password: yup.string().required("Password is required.").trim(),
  });

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const res = await axiosInstance.post("/user/login", values);
      localStorage.setItem("accessToken", res.data?.accessToken);
      toast.success("You are logged in successfully.");
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
      toast.error(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
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
      {loading && <LinearProgress color="warning" />}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, getFieldProps, touched, errors }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              width: 350,
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              padding: "1rem",
            }}
          >
            <Typography variant="h5">Login</Typography>

            <FormControl fullWidth>
              <TextField label="Email" {...getFieldProps("email")} required />
              {touched.email && errors.email && (
                <FormHelperText error>{errors.email}</FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth>
              <TextField
                label="Password"
                type="password"
                {...getFieldProps("password")}
                required
              />
              {touched.password && errors.password && (
                <FormHelperText error>{errors.password}</FormHelperText>
              )}
            </FormControl>

            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Button
                fullWidth
                variant="contained"
                color="warning"
                type="submit"
              >
                Submit
              </Button>
              <Link
                to="/register"
                style={{
                  color: "orangered",
                  textDecoration: "none",
                  marginTop: "10px",
                  display: "block",
                }}
              >
                New here? Register
              </Link>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
