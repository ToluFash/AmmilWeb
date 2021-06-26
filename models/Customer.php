<?php


class Customer extends User
{
    private $bvn;

    /**
     * @return mixed
     */
    public function getBvn()
    {
        return $this->bvn;
    }

    /**
     * @param mixed $bvn
     */
    public function setBvn($bvn)
    {
        $this->bvn = $bvn;
    }


}