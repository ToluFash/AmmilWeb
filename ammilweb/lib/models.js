
(() => {
    class User{
        constructor(firstName, lastName, middleName, userName, email, phoneNo, password) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.middleName = middleName;
            this.userName = userName;
            this.email = email;
            this.phoneNo = phoneNo;
            this.password = password;
        }
    }
    class Admin extends User{

        constructor(firstName, lastName, middleName, userName, email, phoneNo, password, role) {
            super(firstName, lastName, middleName, userName, email, phoneNo, password);
            this.role = role;
        }
    }
    class Customer extends User{
        constructor(firstName, lastName, middleName, userName, email, phoneNo, password, bvn) {
            super(firstName, lastName, middleName, userName, email, phoneNo, password);
            this.bvn = bvn;
        }
    }
    class BankAccount{

        constructor(accNo, owner, accountOfficer, balance, interestRate, accrualPeriod, accrualMethod) {
            this.accNo = accNo;
            this.owner = owner;
            this.accountOfficer = accountOfficer;
            this.balance = balance;
            this.interestRate = interestRate;
            this.accrualPeriod = accrualPeriod;
            this.accrualMethod = accrualMethod;
        }
    }
    class SavingsAccount extends BankAccount{

        constructor(accNo, owner, accountOfficer, balance, interestRate, accrualPeriod, accrualMethod) {
            super(accNo, owner, accountOfficer, balance, interestRate, accrualPeriod, accrualMethod);
        }
    }
    class CurrentAccount extends BankAccount{
        constructor(accNo, owner, accountOfficer, balance, interestRate, accrualPeriod, accrualMethod, overdraftEnabled, overdraft) {
            super(accNo, owner, accountOfficer, balance, interestRate, accrualPeriod, accrualMethod);
            this.overdraftEnabled = overdraftEnabled;
            this.overdraft = overdraft;
        }
    }
    class FixedDepositAccount extends BankAccount{

        constructor(accNo, owner, accountOfficer, balance, interestRate, accrualPeriod, accrualMethod) {
            super(accNo, owner, accountOfficer, balance, interestRate, accrualPeriod, accrualMethod);
        }
    }
    class Loan{
        constructor(interestRate, duration, chargeInterval, creditOfficer, recipient, chargeType) {
            this.interestRate = interestRate;
            this.duration = duration;
            this.chargeInterval = chargeInterval;
            this.creditOfficer = creditOfficer;
            this.recipient = recipient;
            this.chargeType = chargeType;
        }
    }


})();