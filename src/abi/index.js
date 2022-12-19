import coin from "./data/coin.json"

const CONTRACTS = {
    coin:{address:"",abi:coin},
    USDT:{address:"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",abi:coin},
};

async function getContractByName(name, web3) {
    return await web3.contract(CONTRACTS[name].abi,CONTRACTS[name].address );
}

async function  getContractByToken(name, address, web3) {
    return await web3.contract(CONTRACTS[name].abi, address);
}

function getContractAddress(name) {
    return CONTRACTS[name].address;
}

export default {
    CONTRACTS,
    getContractByName,
    getContractByToken,
    getContractAddress
};
