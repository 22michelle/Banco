import { Router } from "express";
import {
  renderSignUpForm,
  signup,
  renderSigninForm,
  signin,
  logout,
} from "../controllers/auth.controllers.js";

const router = Router();

// Ruta para registro
router.get("/auth/signup", renderSignUpForm);

// Ruta crear cuenta verificar email || no modificar
router.post("/auth/signup", signup);

// Ruta obtener screen Login || no modificar
router.get("/auth/signin", renderSigninForm);


// Ruta cuenta iniciada || no modificar
router.post("/auth/signin", signin);
// Ruta para cerrar sesión
router.get("/auth/Logout", logout); 


export default router;
