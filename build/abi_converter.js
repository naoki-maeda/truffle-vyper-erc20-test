const fs = require('fs');
const contract = JSON.parse(fs.readFileSync('contracts/ERC20.json', 'utf8'));
console.log(JSON.stringify(contract.abi));
