const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/nft.sol/nft.json");

const tokenAddress = "deploy contract address "; 
const tokenABI = tokenContractJSON.abi;
const fxERC20RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de"; // Polygon Documentation
const walletAddress = "0x9A4cc862c0De091237Da1Cfa1459C27892824a94";

async function main() {
  const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const fxContract = await hre.ethers.getContractAt(
    fxRootContractABI,
    fxERC20RootAddress
  );

  const approveTx = await tokenContract.approve(fxERC20RootAddress, 3);
  await approveTx.wait();

  console.log("Everything Was succefully completed,Approved!");

  const depositTx = await fxContract.deposit(
    tokenAddress,
    walletAddress,
    3,
    "0x9A4c"
  );
  await depositTx.wait();

  console.log("Your NFT Was Deposited");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
