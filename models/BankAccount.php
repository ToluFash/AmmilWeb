<?php


class BankAccount
{

    private  $accNo;
    private $owner;
    private $accountOfficer;
    private $balance;
    private $interestRate;
    private $accrualPeriod;
    private $accrualMethod;

    /**
     * @return mixed
     */
    public function getAccNo()
    {
        return $this->accNo;
    }

    /**
     * @param mixed $accNo
     * @return BankAccount
     */
    public function setAccNo($accNo)
    {
        $this->accNo = $accNo;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getOwner()
    {
        return $this->owner;
    }

    /**
     * @param mixed $owner
     * @return BankAccount
     */
    public function setOwner($owner)
    {
        $this->owner = $owner;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getAccountOfficer()
    {
        return $this->accountOfficer;
    }

    /**
     * @param mixed $accountOfficer
     * @return BankAccount
     */
    public function setAccountOfficer($accountOfficer)
    {
        $this->accountOfficer = $accountOfficer;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getBalance()
    {
        return $this->balance;
    }

    /**
     * @param mixed $balance
     * @return BankAccount
     */
    public function setBalance($balance)
    {
        $this->balance = $balance;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getInterestRate()
    {
        return $this->interestRate;
    }

    /**
     * @param mixed $interestRate
     * @return BankAccount
     */
    public function setInterestRate($interestRate)
    {
        $this->interestRate = $interestRate;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getAccrualPeriod()
    {
        return $this->accrualPeriod;
    }

    /**
     * @param mixed $accrualPeriod
     * @return BankAccount
     */
    public function setAccrualPeriod($accrualPeriod)
    {
        $this->accrualPeriod = $accrualPeriod;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getAccrualMethod()
    {
        return $this->accrualMethod;
    }

    /**
     * @param mixed $accrualMethod
     * @return BankAccount
     */
    public function setAccrualMethod($accrualMethod)
    {
        $this->accrualMethod = $accrualMethod;
        return $this;
    }

}