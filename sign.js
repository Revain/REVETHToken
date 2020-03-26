// this script meant to be used in https://remix.ethereum.org via
// remix.exeCurent() console command.

const msgHash = "" // put your messageHash here
const parseSignature = (signature) => {
    var rec = {messageHash: msgHash,v: '',r: '',s: ''};
    var sign = signature.slice(2)
    rec.r = "0x" + sign.slice(0,64)
    rec.s = "0x" + sign.slice(64, 128)
    rec.v = "0x" + sign.slice(128, 130)
    rec.v = web3.utils.hexToNumber(rec.v)
    console.log(rec)
}
const sign = (address) => {
    web3.eth.personal.sign(msgHash, address).then(parseSignature)
}
web3.eth.getCoinbase().then(sign)
