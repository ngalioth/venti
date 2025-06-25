import { spawn } from "child_process";

spawn("yarn", ["run", "start"], {
  stdio: "inherit",
  windowsHide: true,
  shell: true
});
