/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  CMC,
  CMCInterface,
} from "../../../../contracts/ Prediction/cmc.sol/CMC";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_user",
        type: "string",
      },
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_user",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200200338038062002003833981810160405281019062000037919062000593565b816040518060400160405280600381526020017f434d4300000000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f434d4300000000000000000000000000000000000000000000000000000000008152508160039081620000b591906200084a565b508060049081620000c791906200084a565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200013f5760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040162000136919062000942565b60405180910390fd5b62000150816200016b60201b60201c565b506200016382826200023160201b60201c565b505062000a34565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620002a65760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016200029d919062000942565b60405180910390fd5b620002ba60008383620002be60201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620003145780600260008282546200030791906200098e565b92505081905550620003ea565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015620003a3578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016200039a93929190620009da565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000435578060026000828254039250508190555062000482565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620004e1919062000a17565b60405180910390a3505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200052082620004f3565b9050919050565b620005328162000513565b81146200053e57600080fd5b50565b600081519050620005528162000527565b92915050565b6000819050919050565b6200056d8162000558565b81146200057957600080fd5b50565b6000815190506200058d8162000562565b92915050565b60008060408385031215620005ad57620005ac620004ee565b5b6000620005bd8582860162000541565b9250506020620005d0858286016200057c565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200065c57607f821691505b60208210810362000672576200067162000614565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006dc7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200069d565b620006e886836200069d565b95508019841693508086168417925050509392505050565b6000819050919050565b60006200072b620007256200071f8462000558565b62000700565b62000558565b9050919050565b6000819050919050565b62000747836200070a565b6200075f620007568262000732565b848454620006aa565b825550505050565b600090565b6200077662000767565b620007838184846200073c565b505050565b5b81811015620007ab576200079f6000826200076c565b60018101905062000789565b5050565b601f821115620007fa57620007c48162000678565b620007cf846200068d565b81016020851015620007df578190505b620007f7620007ee856200068d565b83018262000788565b50505b505050565b600082821c905092915050565b60006200081f60001984600802620007ff565b1980831691505092915050565b60006200083a83836200080c565b9150826002028217905092915050565b6200085582620005da565b67ffffffffffffffff811115620008715762000870620005e5565b5b6200087d825462000643565b6200088a828285620007af565b600060209050601f831160018114620008c25760008415620008ad578287015190505b620008b985826200082c565b86555062000929565b601f198416620008d28662000678565b60005b82811015620008fc57848901518255600182019150602085019450602081019050620008d5565b868310156200091c578489015162000918601f8916826200080c565b8355505b6001600288020188555050505b505050505050565b6200093c8162000513565b82525050565b600060208201905062000959600083018462000931565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200099b8262000558565b9150620009a88362000558565b9250828201905080821115620009c357620009c26200095f565b5b92915050565b620009d48162000558565b82525050565b6000606082019050620009f1600083018662000931565b62000a006020830185620009c9565b62000a0f6040830184620009c9565b949350505050565b600060208201905062000a2e6000830184620009c9565b92915050565b6115bf8062000a446000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806340c10f19116100a257806395d89b411161007157806395d89b41146102ba5780639dc29fac146102d8578063a9059cbb146102f4578063dd62ed3e14610324578063f2fde38b146103545761010b565b806340c10f191461024657806370a0823114610262578063715018a6146102925780638da5cb5b1461029c5761010b565b80632afd97a4116100de5780632afd97a4146101ac578063313ce567146101dc57806338639f7b146101fa5780633a51d246146102165761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b610118610370565b6040516101259190610fd7565b60405180910390f35b610148600480360381019061014391906110a1565b610402565b60405161015591906110fc565b60405180910390f35b610166610425565b6040516101739190611126565b60405180910390f35b61019660048036038101906101919190611141565b61042f565b6040516101a391906110fc565b60405180910390f35b6101c660048036038101906101c191906112c9565b61045e565b6040516101d39190611126565b60405180910390f35b6101e461048c565b6040516101f1919061132e565b60405180910390f35b610214600480360381019061020f9190611349565b610495565b005b610230600480360381019061022b91906112c9565b6104bc565b60405161023d9190611126565b60405180910390f35b610260600480360381019061025b91906110a1565b6104e4565b005b61027c600480360381019061027791906113a5565b6104fa565b6040516102899190611126565b60405180910390f35b61029a610542565b005b6102a4610556565b6040516102b191906113e1565b60405180910390f35b6102c2610580565b6040516102cf9190610fd7565b60405180910390f35b6102f260048036038101906102ed91906110a1565b610612565b005b61030e600480360381019061030991906110a1565b610628565b60405161031b91906110fc565b60405180910390f35b61033e600480360381019061033991906113fc565b61064b565b60405161034b9190611126565b60405180910390f35b61036e600480360381019061036991906113a5565b6106d2565b005b60606003805461037f9061146b565b80601f01602080910402602001604051908101604052809291908181526020018280546103ab9061146b565b80156103f85780601f106103cd576101008083540402835291602001916103f8565b820191906000526020600020905b8154815290600101906020018083116103db57829003601f168201915b5050505050905090565b60008061040d610758565b905061041a818585610760565b600191505092915050565b6000600254905090565b60008061043a610758565b9050610447858285610772565b610452858585610806565b60019150509392505050565b6006818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b60006002905090565b806006836040516104a691906114d8565b9081526020016040518091039020819055505050565b60006006826040516104ce91906114d8565b9081526020016040518091039020549050919050565b6104ec6108fa565b6104f68282610981565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61054a6108fa565b6105546000610a03565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461058f9061146b565b80601f01602080910402602001604051908101604052809291908181526020018280546105bb9061146b565b80156106085780601f106105dd57610100808354040283529160200191610608565b820191906000526020600020905b8154815290600101906020018083116105eb57829003601f168201915b5050505050905090565b61061a6108fa565b6106248282610ac9565b5050565b600080610633610758565b9050610640818585610806565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6106da6108fa565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361074c5760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161074391906113e1565b60405180910390fd5b61075581610a03565b50565b600033905090565b61076d8383836001610b4b565b505050565b600061077e848461064b565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461080057818110156107f0578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016107e7939291906114ef565b60405180910390fd5b6107ff84848484036000610b4b565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108785760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161086f91906113e1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108ea5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016108e191906113e1565b60405180910390fd5b6108f5838383610d22565b505050565b610902610758565b73ffffffffffffffffffffffffffffffffffffffff16610920610556565b73ffffffffffffffffffffffffffffffffffffffff161461097f57610943610758565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161097691906113e1565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109f35760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016109ea91906113e1565b60405180910390fd5b6109ff60008383610d22565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b3b5760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610b3291906113e1565b60405180910390fd5b610b4782600083610d22565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610bbd5760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610bb491906113e1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610c2f5760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610c2691906113e1565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610d1c578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610d139190611126565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610d74578060026000828254610d689190611555565b92505081905550610e47565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e00578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610df7939291906114ef565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e905780600260008282540392505081905550610edd565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f3a9190611126565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f81578082015181840152602081019050610f66565b60008484015250505050565b6000601f19601f8301169050919050565b6000610fa982610f47565b610fb38185610f52565b9350610fc3818560208601610f63565b610fcc81610f8d565b840191505092915050565b60006020820190508181036000830152610ff18184610f9e565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110388261100d565b9050919050565b6110488161102d565b811461105357600080fd5b50565b6000813590506110658161103f565b92915050565b6000819050919050565b61107e8161106b565b811461108957600080fd5b50565b60008135905061109b81611075565b92915050565b600080604083850312156110b8576110b7611003565b5b60006110c685828601611056565b92505060206110d78582860161108c565b9150509250929050565b60008115159050919050565b6110f6816110e1565b82525050565b600060208201905061111160008301846110ed565b92915050565b6111208161106b565b82525050565b600060208201905061113b6000830184611117565b92915050565b60008060006060848603121561115a57611159611003565b5b600061116886828701611056565b935050602061117986828701611056565b925050604061118a8682870161108c565b9150509250925092565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6111d682610f8d565b810181811067ffffffffffffffff821117156111f5576111f461119e565b5b80604052505050565b6000611208610ff9565b905061121482826111cd565b919050565b600067ffffffffffffffff8211156112345761123361119e565b5b61123d82610f8d565b9050602081019050919050565b82818337600083830152505050565b600061126c61126784611219565b6111fe565b90508281526020810184848401111561128857611287611199565b5b61129384828561124a565b509392505050565b600082601f8301126112b0576112af611194565b5b81356112c0848260208601611259565b91505092915050565b6000602082840312156112df576112de611003565b5b600082013567ffffffffffffffff8111156112fd576112fc611008565b5b6113098482850161129b565b91505092915050565b600060ff82169050919050565b61132881611312565b82525050565b6000602082019050611343600083018461131f565b92915050565b600080604083850312156113605761135f611003565b5b600083013567ffffffffffffffff81111561137e5761137d611008565b5b61138a8582860161129b565b925050602061139b8582860161108c565b9150509250929050565b6000602082840312156113bb576113ba611003565b5b60006113c984828501611056565b91505092915050565b6113db8161102d565b82525050565b60006020820190506113f660008301846113d2565b92915050565b6000806040838503121561141357611412611003565b5b600061142185828601611056565b925050602061143285828601611056565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061148357607f821691505b6020821081036114965761149561143c565b5b50919050565b600081905092915050565b60006114b282610f47565b6114bc818561149c565b93506114cc818560208601610f63565b80840191505092915050565b60006114e482846114a7565b915081905092915050565b600060608201905061150460008301866113d2565b6115116020830185611117565b61151e6040830184611117565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115608261106b565b915061156b8361106b565b925082820190508082111561158357611582611526565b5b9291505056fea2646970667358221220a0694fa155dada9a06b6d5496f9d2780d06d5a7a99a152d4d849332205fb062264736f6c63430008180033";

type CMCConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CMCConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CMC__factory extends ContractFactory {
  constructor(...args: CMCConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    initialSupply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      initialOwner,
      initialSupply,
      overrides || {}
    );
  }
  override deploy(
    initialOwner: AddressLike,
    initialSupply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      initialOwner,
      initialSupply,
      overrides || {}
    ) as Promise<
      CMC & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CMC__factory {
    return super.connect(runner) as CMC__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CMCInterface {
    return new Interface(_abi) as CMCInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): CMC {
    return new Contract(address, _abi, runner) as unknown as CMC;
  }
}