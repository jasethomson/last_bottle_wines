import { logTool } from '../utils';
import { query } from '.';

export const createBottleTrackerUpdateTimestampTrigger = async (): Promise<void> => {
  try {
    await query({
      queryText: `
        CREATE TRIGGER update_bottle_tracker_updated BEFORE UPDATE
        ON bottle_tracker FOR EACH ROW EXECUTE PROCEDURE
        update_timestamp_col();
      `,
    });
  } catch (err) {
    logTool({
      msg: ['createBottleTrackerUpdateTimestampTrigger - Error creating bottle tracker trigger.', err.message],
    });
    throw err;
  }
};

export const createBottlePricingUpdateTimestampTrigger = async (): Promise<void> => {
  try {
    await query({
      queryText: `
        CREATE TRIGGER update_bottle_pricing_updated BEFORE UPDATE
        ON bottle_pricing FOR EACH ROW EXECUTE PROCEDURE
        update_timestamp_col();
      `,
    });
  } catch (err) {
    logTool({
      msg: ['createBottlePricingUpdateTimestampTrigger - Error creating bottle pricing trigger.', err.message],
    });
    throw err;
  }
};

export const createBottleDetailsUpdateTimestampTrigger = async (): Promise<void> => {
  try {
    await query({
      queryText: `
        CREATE TRIGGER update_bottle_details_updated BEFORE UPDATE
        ON bottle_details FOR EACH ROW EXECUTE PROCEDURE
        update_timestamp_col();
      `,
    });
  } catch (err) {
    logTool({
      msg: ['createBottleDetailsUpdateTimestampTrigger - Error creating bottle details trigger.', err.message],
    });
    throw err;
  }
};

export const createDbTriggers = async (): Promise<void> => {
  try {
    await createBottleTrackerUpdateTimestampTrigger();
    await createBottlePricingUpdateTimestampTrigger();
    await createBottleDetailsUpdateTimestampTrigger();
  } catch (err) {
    logTool({ msg: ['Error creating db triggers.', err.message] });
    throw err;
  }
};
