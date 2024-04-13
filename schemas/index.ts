import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(1, { message: "Password must be at least 1 characters" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, { message: "minimum 6 characters required" }),

  name: z.string().min(1, { message: "Name is required" }),
});
