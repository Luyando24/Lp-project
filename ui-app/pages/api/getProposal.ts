import getApiProvider from "./getApiProvider";
import { CampaignInfo } from "@setheum.js/types/interfaces"

const getProposal = async () => {
  const api = await getApiProvider();

  const currencyId = { TOKEN: "SERP" };

  const campaignInfo = (await api.query.launchPad.proposals(currencyId));
  console.log(`campaignInfo ${campaignInfo}`);
  return campaignInfo;
};
export default getProposal();
