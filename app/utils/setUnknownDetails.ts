import { logTool } from '.';
import { TechDetails } from '../../types';

interface SetUnknownDetails {
  unknownDetails: TechDetails['unknown_details'];
  key: string;
  val: string;
}

const setUnknownDetails = ({ unknownDetails, key, val }: SetUnknownDetails): TechDetails['unknown_details'] => {
  const newKeyVal = { [key]: val };
  logTool({ color: 'yellow', msg: ['setUnknownDetails - Found unknown key/val:', newKeyVal] });
  if (unknownDetails === null) {
    unknownDetails = JSON.stringify(newKeyVal);
  } else {
    unknownDetails = JSON.stringify({
      ...JSON.parse(unknownDetails),
      newKeyVal,
    });
  }
  return unknownDetails;
};

export default setUnknownDetails;
