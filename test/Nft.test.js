const { assert } = require("chai");

require("chai")
    .use(require("chai-as-promised"))
    .should()

const NftContract = artifacts.require("./NFT.sol")


contract('NFT', ([account1])=>{

    let contract;

    beforeEach(async()=>{

        // deploy the contract before starting each instacnce of the test   
        contract = await NftContract.deployed()
        
    })


    describe("deployent", ()=>{
    
        it("deploys successfully", async()=>{
            
            
            const contractAddress = contract.address 
            contractAddress.should.not.equal(account1)
            contractAddress.should.not.equal('')  
           
        })

        it("has a name", async()=>{
                const nftName = await contract.name()
                nftName.should.not.equal('')
                nftName.should.be.equal('AfroKits')
                
        })

        it("has a symbol", async()=>{
            const nftSymbol = await contract.symbol()
            nftSymbol.should.not.equal('')
            nftSymbol.should.be.equal('AFTK')

        })
    })

    
})