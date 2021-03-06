export class NullSigner {

  constructor(address) {
    this.address = address
  }

  getAddress() {
    return Promise.resolve(this.address)
  }

  signTransaction(txB, signInputIndex) {
    this.txB = txB
  }

}
