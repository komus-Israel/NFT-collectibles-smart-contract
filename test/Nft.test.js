require("chai")
    .use(require("chai-as-promised"))
    .should()

const NftContract = artifacts.require("./NFT.sol")


Contract('NFT', (accounts)=>{
    describe("deployent", ()=>{

        it("deploys successfully", async()=>{
            console.log("successful")
        })
    })
})