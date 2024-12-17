
// get array of tech detail keys
const findTechDetails = async ({ bottles }) => {
    const techDetailKeys = [];
    bottles.forEach((bottle) => {
        if (bottle.tech_details) {
            bottle.tech_details.forEach(detailObj => {
                const keyName = Object.keys(detailObj)[0];
                if (techDetailKeys.indexOf(keyName) < 0) {
                    techDetailKeys.push(keyName)
                }
            })
        }
    });
    return techDetailKeys;
};

export default findTechDetails;
