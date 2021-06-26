<?php
/**
 * Created by PhpStorm.
 * User: ToluFash-Ammil
 * Date: 5/13/2021
 * Time: 2:25 AM
 */

namespace controller;


class Sanitize
{
    public static function sanitizeString($str){
        return filter_var($str, FILTER_SANITIZE_STRING);
    }
    public static function sanitizeInt($int){
        return filter_var($int, FILTER_SANITIZE_NUMBER_INT);
    }
}