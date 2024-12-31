
import logger from 'node-color-log'

const logTool = ({ color = 'white', msg }) => {
    logger.color(color).log(...msg); 
};

export default logTool;