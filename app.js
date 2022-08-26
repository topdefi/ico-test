const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const inputbnb = document.querySelector("#bnb");
var form = document.getElementById("buyTokens");
var form1 = document.getElementById("claimtoken");

function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
form1.addEventListener('submit', handleForm);


const contractAddress = "0x8FC4f6837D9A01c84D7C8dfeF185fB7CCA5a59f9";
const AbiOfContract = [{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BnbDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"fromAddress","type":"address"},{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"amountTransfered","type":"event"},{"inputs":[],"name":"ExchangeBNBforTokenManual","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_recipients","type":"address[]"}],"name":"blacklistAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bnbBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bnbDecimal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimIn","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositCrypto","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_recipients","type":"address[]"},{"internalType":"uint256[]","name":"_amount","type":"uint256[]"}],"name":"dropTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"hardCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxContribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minContribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenDecimal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenExchanged","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPriceBnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalHardCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTransaction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"address payable[]","name":"receivers","type":"address[]"}],"name":"transferCrypto","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"turnWhitelist","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newHardcapValue","type":"uint256"}],"name":"updateHardCap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newTokenAddr","type":"address"}],"name":"updateTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"min","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"}],"name":"updateTokenContribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newDecimal","type":"uint256"}],"name":"updateTokenDecimal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newTokenValue","type":"uint256"}],"name":"updateTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_recipients","type":"address[]"}],"name":"whitelistAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"beneficiary","type":"address"}],"name":"withdrawCrypto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"beneficiary","type":"address"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

inputbnb.addEventListener("input", calculateToken);




function calculateToken() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  var contractInstance = new ethers.Contract(contractAddress,AbiOfContract,provider);
  (async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
          try {
              var contractPrice = parseInt(await contractInstance.tokenPriceBnb());
              var priceBnb = contractPrice/1000000000000000000;
              console.log(priceBnb);
              var x = document.getElementById("bnb").value;
              var amount = parseFloat(x / priceBnb);
              console.log(amount);
              document.getElementById("priceToken").value = amount;

              var bnbcollected = parseInt(await contractInstance.bnbBalance());
              console.log(bnbcollected);
              var remainingPercent = parseFloat((parseFloat(bnbcollected/1e18)/2000)*100).toFixed(1);
              console.log(remainingPercent);
              document.getElementById("filled").innerHTML = remainingPercent+"%";
              document.getElementById("filled").style.width = remainingPercent+"%";

          } catch (error) {
              console.log(error);
          }

      }

      // Non-dapp browsers...
      else {
          document.getElementById("priceToken").value = "Connect to Wallet";
      }
  })();
}



async function buyToken()
{
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  var contractInstance = new ethers.Contract(contractAddress,AbiOfContract,provider.getSigner());
  const chainID = parseInt(await window.ethereum.chainId);

  if(chainID == 56){
    if( window.ethereum || 
        window.ethereum.isMetaMask || 
        ethereum && ethereum.isTrust
    ){
        
    }else{
        alert("Please connect to Metamask/Trustwallet and switch to Binance Network");
        return false;
    }
}else{
    alert('Connect To Binance Chain Mainnet');
}

  const finalAmount = parseInt(parseFloat(document.getElementById("bnb").value)*1e18);
  const amountContributed = finalAmount + parseInt(await contractInstance.balances((await (window.ethereum.request({ method: 'eth_requestAccounts' }))).toString()));
  const whitelistActivation = await contractInstance.whitelist();
  if(amountContributed >= 1e16 && amountContributed <= 1e18){
  }else{
    alert("Min contribution is 0.01 BNB and Max Contribution is 1 BNB");
    return false;
  }
  if(whitelistActivation){
    const checkUser = await contractInstance.whitelisted((await (window.ethereum.request({ method: 'eth_requestAccounts' }))).toString());
    if(!checkUser){
      alert("You Are Not Whitelisted to Buy");
      return false;
    }
  }
  
  if(chainID == 56){
      if( window.ethereum || 
          window.ethereum.isMetaMask || 
          ethereum && ethereum.isTrust
      ){
          const hash = await contractInstance.ExchangeBNBforTokenManual({value:finalAmount.toString()});
          await provider.waitForTransaction(hash.hash,1);
          alert("Token Purchased Sucessfully !");
      }else{
          alert("Please connect to Metamask/Trustwallet and switch to Binance Network");
          return false;
      }
  }else{
      alert('Connect To Binance Chain Mainnet');
      return false;
  }
}

async function claim()
{
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  var contractInstance = new ethers.Contract(contractAddress,AbiOfContract,provider.getSigner());
  const chainID = parseInt(await window.ethereum.chainId);
  const amountContributed = parseInt(await contractInstance.tokenExchanged((await (window.ethereum.request({ method: 'eth_requestAccounts' }))).toString()));
  const claimActivation = await contractInstance.claim();
  console.log(document.getElementById("tokenstoclaim").value);
  if(document.getElementById("tokenstoclaim").value == ""){
    document.getElementById("tokenstoclaim").value = amountContributed/1e18;
    document.getElementById("claimtoken").value = "Claim Token";
    return false;
  }
  
  if(amountContributed > 0){
  }else{
    alert("You Dont Have Anything to Claim");
    return false;
  }

  if(!claimActivation){
    alert("You Cannot Claim Now, Come Again Later");
    return false;
  }

  if(chainID == 56){
      if( window.ethereum || 
          window.ethereum.isMetaMask || 
          ethereum && ethereum.isTrust
      ){
          const hash = await contractInstance.claimToken();
          await provider.waitForTransaction(hash.hash,1);
          alert("Token Claimed Sucessfully !");
      }else{
          alert("Please connect to Metamask/Trustwallet and switch to Binance Network")
      }
  }else{
      alert('Connect To Binance Chain Mainnet');
  }
}
