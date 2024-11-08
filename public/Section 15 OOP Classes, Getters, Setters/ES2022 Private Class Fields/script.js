class Wallet {
    #balance = 0;
    #transaction = [];
  
    deposit(amount) {
      this.#processDeposit(amount);
      this.#balance += amount;
      console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
    }
  
    #processDeposit(amount) {
      console.log(`Depositing ${amount}`);
      this.#transaction.push({ type: "deposit", amount: amount });
    }
  
    withdraw(amount) {
      this.#processWithdrawal(amount);
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}, New Balance: ${this.#balance}`);
  
      if (amount > this.#balance) {
        console.log("Insufficient balance");
      }
    }
  
    #processWithdrawal(amount) {
      console.log(`Depositing ${amount}`);
      this.#transaction.push({ type: "withdrawal", amount: amount });
    }
  
    get balance() {
      return this.#balance;
    }
  
    get transaction() {
      return this.#transaction;
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
  console.table(wallet.transaction);
  console.log(wallet.balance)