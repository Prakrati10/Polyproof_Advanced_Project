# Polygon Bridging

This project provides a comprehensive overview of the process to launch an NFT collection on the Ethereum blockchain, seamlessly connect it with the Polygon network, and efficiently migrate assets to Polygon through the utilization of the Polygon Bridge. The development and deployment of smart contracts will be facilitated through the application of Hardhat.

## Description

Launch an ERC721A NFT collection on the Ethereum blockchain, comprising 5 distinct items crafted using advanced image tools such as DALLE 2 or Midjourney. Safeguard these visual assets on IPFS through Pinata, ensuring decentralized accessibility. Employ Hardhat to deploy the contract on the Goerli Ethereum Testnet, incorporating a promptDescription function to enhance image descriptions. Optionally, extend the collection's reach to Polygon for improved scalability. Conclude the process by developing Hardhat scripts to efficiently batch mint the NFTs, seamlessly transfer them to Polygon Mumbai using the FxPortal Bridge, and rigorously test their balance within the Polygon network.

## Provided Steps

- Generate a 5-item collection using DALLE 2 or Midjourney
- Store items on IPFS using pinata.cloud
- Deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet
- You should have a promptDescription function on the contract that returns the prompt you used to generate the images
- Map Your NFT Collection using Polygon network token mapper. Note: this isn’t necessary but helpful for visualization.
- Write a hardhat script to batch mint all NFTs. Hint: ERC721A is optimal here.
- Write a hardhat script to batch transfer all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge

## To install dependencies

Ensure you have all the necessary dependencies by running the following command:


```npm install```
Next, install Hardhat as a development dependency with the following command:


```npm install hardhat --save-dev```
To incorporate ERC721A into your project, execute the following command:


```npm install erc721a --save-dev```
These steps will set up your project with the required packages for development and integration of ERC721A.


## Execute this Project ( Run Deploy Script Guide )
```
Configure wallet for Ethereum testnet or Polygon Mumbai, and update .env file.
Adjust Hardhat network settings in hardhat.config.js.
Execute deployment script: npx hardhat run scripts/Deployed.js --network goerli.
Customize Minted.js script by adding Deployed Contract Address.
Run Minted.js script: npx hardhat run scripts/NFTminted.js --network goerli.
Establish FxPortal Bridge for Ethereum to Polygon transfer.
Update Deposited.js script with necessary details.
Execute Deposited.js script: npx hardhat run scripts/TransferAndDeposit.js --network goerli.
```

## Authors

This project was created by Prakrati Khatri
