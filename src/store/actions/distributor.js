import { governanceContracts } from "../../constants"
import { infuraUrlFactory } from "../../utils"
import { FETCH_MERKLE_ROOT, FETCH_CURRENT_AWARD, FETCH_NEXT_HALVE_PERIOD } from "./types"
import Web3 from 'web3'
import abis from "../../contracts"

export const setMerkleRoot = (merkleRoot) => ({
    type: FETCH_MERKLE_ROOT,
    payload: merkleRoot
})

export const fetchMerkleRoot = (network) => {
    const web3 = new Web3(infuraUrlFactory('kovan'))
    console.log("fetching merkle root from", web3);
    const contract = new web3.eth.Contract(abis.TokenDistributor.abi, governanceContracts.kovan.tokenDistributor)

    return async dispatch => {
        try {
            const merkleRoot = await contract.methods.merkleRoot().call()
            dispatch(setMerkleRoot(merkleRoot))
        } catch (error) {
            console.log(error)
        }
    }
}

export const setCurrentAward = (award) => ({
    type: FETCH_CURRENT_AWARD,
    payload: award
})

export const fetchCurrentAward = (network) => {
    const web3 = new Web3(infuraUrlFactory('kovan'))
    const contract = new web3.eth.Contract(abis.TokenDistributor.abi, governanceContracts.kovan.tokenDistributor)

    return async dispatch => {
        try {
            const award = await contract.methods.currentAward().call()
            const formattedAward = web3.utils.fromWei(award)
            dispatch(setCurrentAward(formattedAward))
        } catch (error) {
            console.log(error)
        }
    }
}

export const setNextHalvePeriod = (period) => ({
    type: FETCH_NEXT_HALVE_PERIOD,
    payload: period
})

export const fetchNextHalvePeriod = (network) => {
    const web3 = new Web3(infuraUrlFactory('kovan'))
    const contract = new web3.eth.Contract(abis.TokenDistributor.abi, governanceContracts.kovan.tokenDistributor)

    return async dispatch => {
        try {
            const period = await contract.methods.nextHalvePeriod().call()
            dispatch(setNextHalvePeriod(period * 1000))
        } catch (error) {
            console.log(error)
        }
    }
}