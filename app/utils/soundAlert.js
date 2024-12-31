import { logTool } from "./index.js";

const soundAlert = () => {
    logTool({ msg: '\u0007' });
};

export default soundAlert;