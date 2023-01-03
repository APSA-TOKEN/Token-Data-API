const addresses = require("https://bscscan.com/address/0x8e1564a6c63E5422f42ab1229a46407928e19404#code") // Get all relevant Ethereum and BSC addresses
const projectOneAbi = require("[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint256","name":"initialSupplyToSet","type":"uint256"},{"internalType":"uint8","name":"decimalsToSet","type":"uint8"},{"internalType":"address","name":"tokenOwner","type":"address"},{"components":[{"internalType":"bool","name":"_isMintable","type":"bool"},{"internalType":"bool","name":"_isBurnable","type":"bool"},{"internalType":"bool","name":"_isPausable","type":"bool"},{"internalType":"bool","name":"_isBlacklistEnabled","type":"bool"},{"internalType":"bool","name":"_isDocumentAllowed","type":"bool"},{"internalType":"bool","name":"_isWhitelistEnabled","type":"bool"},{"internalType":"bool","name":"_isMaxAmountOfTokensSet","type":"bool"},{"internalType":"bool","name":"_isForceTransferAllowed","type":"bool"}],"internalType":"struct FullFeatureToken.ERC20ConfigProps","name":"customConfigProps","type":"tuple"},{"internalType":"uint256","name":"maxTokenAmount","type":"uint256"},{"internalType":"string","name":"newDocumentUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"AddrAlreadyBlacklisted","type":"error"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"AddrAlreadyUnblacklisted","type":"error"},{"inputs":[],"name":"BlacklistNotEnabled","type":"error"},{"inputs":[],"name":"BurningNotEnabled","type":"error"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"CannotBlacklistWhitelistedAddr","type":"error"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"CannotWhitelistBlacklistedAddr","type":"error"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"DestBalanceExceedsMaxAllowed","type":"error"},{"inputs":[],"name":"DocumentUriNotAllowed","type":"error"},{"inputs":[{"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"InvalidDecimals","type":"error"},{"inputs":[{"internalType":"uint256","name":"maxTokenAmount","type":"uint256"}],"name":"InvalidMaxTokenAmount","type":"error"},{"inputs":[],"name":"MaxTokenAmountPerAddrLtPrevious","type":"error"},{"inputs":[],"name":"MintingNotEnabled","type":"error"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"NonZeroAddress","type":"error"},{"inputs":[],"name":"PausingNotEnabled","type":"error"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"RecipientBlacklisted","type":"error"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"RecipientNotWhitelisted","type":"error"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"SenderBlacklisted","type":"error"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"SenderNotWhitelisted","type":"error"},{"inputs":[],"name":"WhitelistNotEnabled","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"newDocUri","type":"string"}],"name":"DocumentUriSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMaxTokenAmount","type":"uint256"}],"name":"MaxTokenAmountPerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"}],"name":"UserBlacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"}],"name":"UserUnBlacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"updatedAddresses","type":"address[]"}],"name":"UsersWhitelisted","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"blackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"documentUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWhitelistedAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialDocumentUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialMaxTokenAmountPerAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialTokenOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isBlacklistEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isBurnable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isDocumentUriAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isForceTransferAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isMaxAmountOfTokensSet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isMintable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPausable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isWhitelistEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTokenAmountPerAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"removeFromBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newDocumentUri","type":"string"}],"name":"setDocumentUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMaxTokenAmount","type":"uint256"}],"name":"setMaxTokenAmountPerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"updatedAddresses","type":"address[]"}],"name":"updateWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"whitelistedAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]") // Get the token ABI for the project. ABIs can be found on the Etherscan page for the contract if the contract has been verified. Otherwise you may need to ask your Solidity dev for it.
const numeral = require("^2.0.6") // NPM package for formatting numbers
const db = require("mongodb+srv://Apsat:FireGate001@cluster0.0cgout6.mongodb.net/?retryWrites=true&w=majority") // Util for setting up DB and main DB methods

// Async function which takes in web3 collection, makes web3 calls to get current on chain data, formats data, and caches formatted data to MongoDB
const getProjectOneData = async (web3s) => {
    // Unpack web3 objects for Ethereum and BSC
    const {web3, bsc_web3} = web3s
    // Get Ethereum block number 
    const blockNumber = await web3.eth.getBlockNumber()
    // Get BSC block number - error handling used here due to unreliable BSC endpoints, best to add it for the Ethereum block number as well in production.
    let bsc_blockNumber
    try {
        bsc_blockNumber = await bsc_web3.eth.getBlockNumber() 
    }
    catch(err) {
        bsc_blockNumber = 0
        console.log("CANT GET bsc_blockNumber")
        console.log(err)
    }
    // Collect addresses in one 'addresses' object
    const {eth_addresses, bsc_addresses} = addresses
    // Set number formatting default
    numeral.defaultFormat("0,0");

    // Instantiate all smart contract object(s)

    // web3.eth.Contract() creates a smart contract object using the ABI and address of the contract which allows you to call all the smart contract functions listed in the ABI. Since we are not supplying a private key to our web3 object, we can only use it for reading on chain data, not for anything requiring signing - which is all we need for this project.
    // Here we instantiate the Ethereum smart contract object
    let projectOne = new web3.eth.Contract(projectOneAbi, eth_addresses.contract)
    // Here we instantiate the BSC smart contract object
    let bsc_projectOne
    try {
        bsc_projectOne = new bsc_web3.eth.Contract(projectOneAbi, bsc_addresses.contract)
    }
    catch(err) {
        console.log("couldn't connect to BSC")
        console.log(err)
    }
    
    // For converting to proper number of decimals. We use this to convert from raw numbers returned from web3 calls to human readable formatted numbers based on the decimals for each token.  
    const convert = (num, decimal) => {
        return Math.round((num / (10*10**(decimal-3))))/100
    }

    // Make tokenData object. This object is used for storing formatted and calculated results from web3 calls from both Ethereum and BSC web3 objects. It is divided into 3 sections for data on BSC, Ethereum, and aggregate data from both chains in 'combined'.

    let tokenData = {
        combined: {
            totalSupply: {value: null},
            circulatingSupply: {value: null},
        },
        eth: {
            totalSupply: {value: null},
            circulatingSupply: {value: null},
        },
        bsc: {
            totalSupply: {value: null},
            circulatingSupply: {value: null},
        }
    }
  
    // Get base Ethereum values 
    const burnt_on_eth = await projectOne.methods.balanceOf(eth_addresses.burnt).call() 

    tokenData.eth.totalSupply.value = await projectOne.methods.totalSupply().call()
    const team_1 = await projectOne.methods.balanceOf(eth_addresses.team_1).call() 
    const team_2 = await projectOne.methods.balanceOf(eth_addresses.team_2).call() 
    const team_3 = await projectOne.methods.balanceOf(eth_addresses.team_3).call() 
  
     // Get base BSC values 
    try {
        burnt_on_bsc = await bsc_projectOne.methods.balanceOf(bsc_addresses.burnt).call() 
    }
    catch(err){
        console.log(`burnt_on_bsc: ${err}`)
        burnt_on_bsc = err
    }

    try {
        tokenData.bsc.totalSupply.value = await bsc_projectOne.methods.totalSupply().call()
    }
    catch(err){
        console.log(`tokenData.bsc.totalSupply.value: ${err}`)
        tokenData.bsc.totalSupply.value = err
    }
    let  bsc_team_1 
    try {
         bsc_team_1 = await bsc_projectOne.methods.balanceOf(bsc_addresses.team_1).call() 
    }
    catch(err){
        console.log(`bsc_team_1: ${err}`)
        bsc_team_1 = err
    }
    let bsc_team_2 
    try {
        bsc_team_2 = await bsc_projectOne.methods.balanceOf(bsc_addresses.team_2).call() 
    }
    catch(err){
        console.log(`bsc_team_2: ${err}`)
        bsc_team_2 = err
    }

    // In the following section we perform calculations on base values returned from web3 calls to get the final values we want to return in our API.
    
    // Get derived values ETH
    const team_eth = Number(team_1) + Number(team_2) + Number(team_3)
    tokenData.eth.totalSupply.value -= burnt_on_eth
    tokenData.eth.circulatingSupply.value = Number(tokenData.eth.totalSupply.value) - Number(team_eth)
  
    // Get derived values BSC
    const team_bsc = Number(bsc_team_1) + Number(bsc_team_2) 
    tokenData.bsc.totalSupply.value -= burnt_on_bsc
    tokenData.bsc.circulatingSupply.value = Number(tokenData.bsc.totalSupply.value) - Number(team_bsc)
  
    // Get joint values
    tokenData.combined.totalSupply.value = tokenData.bsc.totalSupply.value + tokenData.eth.totalSupply.value 
    tokenData.combined.circulatingSupply.value = Number(tokenData.bsc.circulatingSupply.value) + Number(tokenData.eth.circulatingSupply.value)
       
    // Below we add additional information which is not strictly necessary if the API is used only for CG and CMC listing, but may be desired for other purposes such as a token dashboard.

    // Set up descriptions 
    tokenData.eth.totalSupply.description = "Total supply of projectOne on ETH"
    tokenData.bsc.totalSupply.description = "Total supply of projectOne on BSC"
  
    tokenData.eth.circulatingSupply.description = "Circulating supply of projectOne on ETH"
    tokenData.bsc.circulatingSupply.description = "Circulating supply of projectOne on BSC"
  
    tokenData.combined.totalSupply.description = "Total supply of projectOne (BSC & ETH)"
    tokenData.combined.circulatingSupply.description = "Circulating supply of projectOne (BSC & ETH)"
  
    // Set names
  
    tokenData.eth.totalSupply.name = "Total Supply of projectOne on ETH"
    tokenData.bsc.totalSupply.name = "Total Supply of projectOne on BSC"
  
    tokenData.eth.circulatingSupply.name = "Circulating Supply of projectOne on ETH"
    tokenData.bsc.circulatingSupply.name = "Circulating Supply of projectOne on BSC"
  
    tokenData.combined.totalSupply.name = "Total Supply of projectOne on (BSC & ETH)"
    tokenData.combined.circulatingSupply.name = "Circulating Supply of projectOne on (BSC & ETH)"
  
     
    // Set converted and formatted value, block, and timestamp
    const tokendata_eth = tokenData.eth
    const tokendata_bsc = tokenData.bsc
    const tokendata_combined = tokenData.combined

    // Below we run through each of our tokendata objects for both chains and the combined chain data and convert or format when needed. We als add block number and date.

    Object.keys(tokendata_combined).forEach(key => {
        tokendata_combined[key].value = convert(tokendata_combined[key].value, 18)
        tokendata_combined[key].formattedValue = numeral(tokendata_combined[key].value).format()
        tokendata_combined[key].block = blockNumber
        tokendata_combined[key].bsc_block = bsc_blockNumber
        tokendata_combined[key].timestamp = Date()
    })
  
    Object.keys(tokendata_eth).forEach(key => {
      tokendata_eth[key].value = convert(tokendata_eth[key].value, 18)
      tokendata_eth[key].formattedValue = numeral(tokendata_eth[key].value).format()
      tokendata_eth[key].block = blockNumber
      tokendata_eth[key].timestamp = Date()
    })
    
    Object.keys(tokendata_bsc).forEach(key => {
      tokendata_bsc[key].value = convert(tokendata_bsc[key].value, 18)
      tokendata_bsc[key].formattedValue = numeral(tokendata_bsc[key].value).format()
      tokendata_bsc[key].block = blockNumber
      tokendata_bsc[key].timestamp = Date()
      tokendata_combined[key].bsc_block = bsc_blockNumber

    })
  
    // Finally after all data has been collected and formatted, we set up our database object and call db.updateprojectOneData() in order to cache our data in our MongoDB database.

    try {
      const client = db.getClient()
      db.updateprojectOneData(tokenData, client) 
    }
    catch(err) {
      console.log(err)
    }
  }

  module.exports = getProjectOneData