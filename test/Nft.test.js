require("chai")
    .use(require("chai-as-promised"))
    .should()

const NftContract = artifacts.require("./NFT.sol")


contract('NFT', ([account1])=>{

    let contract;
    describe("deployent", ()=>{

        it("deploys successfully", async()=>{
            contract = await NftContract.deployed()
            
            const contractAddress = contract.address 
            contractAddress.should.not.equal(account1)
            contractAddress.should.not.equal('')
           
        })
    })
})