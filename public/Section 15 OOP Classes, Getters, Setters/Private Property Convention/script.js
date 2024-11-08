class Wallet {
  constructor() {
    this._balance = 0;
    this._transaction = [];
  }

  deposit(amount) {
    this._processDeposit(amount);
    this._balance += amount;
    console.log(`Deposited: ${amount}, New Balance: ${this._balance}`);
  }

  _processDeposit(amount) {
    console.log(`Depositing ${amount}`);
    this._transaction.push({ type: "deposit", amount: amount });
  }

  withdraw(amount) {
    this._processWithdrawal(amount);
    this._balance -= amount;
    console.log(`Withdrew: ${amount}, New Balance: ${this._balance}`);

    if (amount > this._balance) {
      console.log("Insufficient balance");
    }
  }

  _processWithdrawal(amount) {
    console.log(`Depositing ${amount}`);
    this._transaction.push({ type: "withdrawal", amount: amount });
  }

  get balance() {
    return this._balance;
  }

  get transaction() {
    return this._transaction;
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(300);
wallet.deposit(30900);
wallet.withdraw(3003);
wallet.withdraw(3003);
wallet.deposit(30000);

console.log(wallet);

console.log(wallet.balance); // we now have access to the balance as a property
console.log(wallet.transaction);
console.log(wallet.balance)