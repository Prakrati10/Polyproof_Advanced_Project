// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/nft.sol/nft.json");

const tokenAddress = "0xdD848E423575999aF958793e059a497059fd7F29"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xa4Ab5fCbd4d394fc369dA065F1a7a66dFF5B838d"; // place your public address for your wallet here


async function main() {
  const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

  console.log(
    "Your Polygon Account NFT Balance: " + (await token.balanceOf(walletAddress)) + " tokens"
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
