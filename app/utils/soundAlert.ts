import { logTool } from '.';

const soundAlert = (): void => {
  logTool({ msg: ['\u0007'] });
};

export default soundAlert;
