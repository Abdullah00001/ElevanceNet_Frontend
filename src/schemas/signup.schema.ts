import { z } from "zod";
import { emailRegex } from "../constants/regex";

const signupInputValidationSchema = z.object({
  firstName: z
    .string()
    .nonempty("First name is required")
    .min(3, "Must be at least 3 chars")
    .max(20, "Must not exceed 20 chars")
    .trim(),
  lastName: z
    .string()
    .nonempty("Last name is required")
    .min(3, "Must be at least 3 chars")
    .max(20, "Must not exceed 20 chars")
    .trim(),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email format")
    .regex(emailRegex, "Email format is incorrect"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export default signupInputValidationSchema;
