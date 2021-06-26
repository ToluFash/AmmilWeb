<?php
/**
 * Created by PhpStorm.
 * User: ToluFash-Ammil
 * Date: 4/23/2021
 * Time: 4:51 PM
 */

namespace models;


class Field
{
    public $fieldName;
    public $value;

    /**
     * Field constructor.
     * @param $fieldName
     * @param $value
     */
    public function __construct($fieldName, $value)
    {
        $this->fieldName = $fieldName;
        $this->value = $value;
    }


}