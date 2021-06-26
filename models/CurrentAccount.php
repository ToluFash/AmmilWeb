<?php


class CurrentAccount extends BankAccount
{

    private $overdraftEnabled;
    private $overdraft;

    /**
     * @return mixed
     */
    public function getOverdraftEnabled()
    {
        return $this->overdraftEnabled;
    }

    /**
     * @param mixed $overdraftEnabled
     * @return CurrentAccount
     */
    public function setOverdraftEnabled($overdraftEnabled)
    {
        $this->overdraftEnabled = $overdraftEnabled;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getOverdraft()
    {
        return $this->overdraft;
    }

    /**
     * @param mixed $overdraft
     * @return CurrentAccount
     */
    public function setOverdraft($overdraft)
    {
        $this->overdraft = $overdraft;
        return $this;
    }



}