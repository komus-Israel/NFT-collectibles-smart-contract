pragma solidity 0.8.10;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    constructor (string memory _name, string memory _symbol) ERC721(_name, _symbol) public {
        
    }
}

