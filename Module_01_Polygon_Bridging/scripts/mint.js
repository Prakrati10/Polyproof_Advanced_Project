// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/nft.sol/nft.json");
require("dotenv").config();

const tokenAddress = "deploy contract address";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x9A4cc862c0De091237Da1Cfa1459C27892824a94"; 

async function main() {
  const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

  const tx = await token.mint(5);
  await tx.wait();

  console.log("Congrats! NFT Minted")
  console.log(
    "Your NFT Account Balance: " + (await token.balanceOf(walletAddress)) + " Balance"
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
