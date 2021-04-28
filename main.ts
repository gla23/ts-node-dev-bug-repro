import { app } from "electron";

console.log("hmm", app, typeof app);

app.on("ready", () => console.log("ready"));
