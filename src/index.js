import app from "./app.js";
import { createAdminUser } from "./libs/createUser.js";
import "./database.js";

async function main() {
  await createAdminUser();
  //app.listen(app.get("port"));
  console.log("Admin user created");
  //console.log("Server on port", app.get("port"));
  //console.log("Environment:", process.env.NODE_ENV);
  // Verifica que las notas se están obteniendo correctamente

}

main();
export default app;
