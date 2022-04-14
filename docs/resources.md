# Resources

Here are a list of resources that might help in building the UI for launchpad-crowdsales:

## The Goal

The goal is to create a Client API and a UI NextJS application that lets you interact with the [pallet](../pallet/src/lib.rs) to call the below listed operations and get the results returned. The UI doesn't have to be all that complicated, make it simple and easy to use with clean code and naming should be easy to understand and please make some inline comments too for readability when I am looking at the code.

### The methods/functions/transactions to call

The 8 functions are all [here](../pallet/src/lib.rs) so you can see their return types and their arguments.

```rust
make_proposal() // uses the api.tx.launchPad.makeProposal() api call
get_proposal() // uses the api.query.launchPad.getProposal() api call
approve_proposal() // uses the api.tx.launchPad.approveProposal() api call
reject_proposal() // uses the api.tx.launchPad.rejectProposal() api call
contribute() // uses the api.tx.launchPad.contribute() api call
claim_allocation_contribution() // uses the api.tx.launchPad.claimAllocationContribution() api call
claim_campaign_fundraise() // uses the api.tx.launchPad.claimCampaignFundraise() api call
activate_waiting_campaign() // uses the api.tx.launchPad.activateWaitingCampaign() api call
```

In `@setheum.js/types/interfaces` you can see all the type interfaces in Typescript that I generated for the pallet and I imported some as an example and tried to use the `CampaignInfo` interface props that shows it works, but I am not so familiar with typescript or making UIs so I am not sure if it is the best way to do it, but all the resources needed are available and the sample [proposals page](../ui-app/pages/proposals.tsx) is a good approach I wanted to have to put the campaign infos of all campaigns in grids of cards? IDK.

## 1. Libraries to use

- [Polkadot.JS](https://polkadot.js.org/docs): Polladot JS is used in building the API as you see, and the [polkadot-js extension-dapp](https://polkadot.js.org/docs/extension/) should be used to access the extension on the browser and select account from list of available accounts. [Here](../ui-app/pages/api/getApiProvider.ts) is how I made an access to the chain API provider using polkadot.JS as seen in the [API README](../api/README.md).

- [setheum.JS Fork](../api/README.md): The API folder is a fork of the Setheum.JS library used to interact with the chain. I need to build a `Client API` to interact with the [pallet](../pallet/README.md) and the [chain](../s-node/README.md). The API should be built with the Setheum.JS fork.

## 2. Sample Client

- [sample-client](../sample-client/src/index.js): Here is a sample client that fetches query from the chain as well as makes transactions to the chain. The client shows you how to call each of the transactions needed in the UI App as shown and explained in this [README File](../sample-client/README.md).
A problem I have with this client and the proposals page is that it refuses to render the query from the chain, like if you run the [sample-client](../sample-client/README.md) you will see that it returns undefined instead of the CampaignInfo interface in the case of the query calls I made it shows undefined with `console.log` or `console.info` so please let it show the info in an organised form in the app pages.

```rust
make_proposal() // uses the api.tx.launchPad.makeProposal(id) api call
get_proposal() // uses the api.query.launchPad.getProposal() api call
approve_proposal() // uses the api.tx.launchPad.approveProposal() api call
reject_proposal() // uses the api.tx.launchPad.rejectProposal() api call
contribute() // uses the api.tx.launchPad.contribute() api call
claim_allocation_contribution() // uses the api.tx.launchPad.claimAllocationContribution() api call
claim_campaign_fundraise() // uses the api.tx.launchPad.claimCampaignFundraise() api call
activate_waiting_campaign() // uses the api.tx.launchPad.activateWaitingCampaign() api call
```

These are the currencies the chain offers, they are of type CurrencyId which is also in the [`@setheum.js/types/interfaces`](../api/packages/types/src/interfaces/index.ts) in the api directory that was forked from setheumjs and modified.

## 1. Examples with Source Code

These are examples of building UI and API access to substrate chains and pallets like this launchpad-crowdsales:

`Note`: The most important part of these examples is how to connect the App to the polkadot-js wallet. Once you do that, then move on to accessing the accounts and the UI generally to access the chain is going to be easy.

- [Polkadot JS Cookbook](https://polkadot.js.org/docs/extension/cookbook): This is the cookbook that shows the steps on how to connect the app to the polkadot js extension, make transactions and so on, since the forked setheumjs api and the below mentioned acala js examples are essentially the same with polkadotjs then the same process in all applies.

- [Acala JS Examples](https://github.com/AcalaNetwork/acala-js-example): A good start with transactions and also the polkadotjs extension is used in the examples. The UI is a simple one page js UI.

- [Reef Seaweed](https://github.com/BrianCraig/reef-seaweed): A simple nft marketplace that used polkadotjs extension and transactions.

- [Coral NFT Marketplace](https://github.com/boo-0x/coral-nft-marketplace): A simple (5 commits) nft marketplace that used polkadotjs extension and transactions.

- [stable-asset client](https://github.com/nutsfinance/stable-asset/tree/master/demo/client): I used it as inspiration to make the sample-client.
