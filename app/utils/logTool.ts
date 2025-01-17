
import logger from 'node-color-log';
import { NodeColorLogColors } from '../../types';


interface LogTool {
    color?: NodeColorLogColors;
    msg: (string | object | number)[];
}

const logTool = ({ color = 'white', msg }: LogTool) => {
    logger.color(color).log(...msg); 
};

export default logTool;