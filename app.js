var initialItems = [
            {
                name: "Orange Juice",
                quantity: 1
            },
            {
                name: "Apples",
                quantity: 2
            },
            {
                name: "Bananas",
                quantity: 10
            },
            {
                name: "Watermelon",
                quantity: 8
            },
            {
                name: "Peaches",
                quantity: 3
            },
        ]

(function(){
    'use strict';
    angular.module("ShoppingCheckOffApp")
    .controller("ShoppingCheckOffController1", ShoppingCheckOffController1)
    .controller("ShoppingCheckOffController2", ShoppingCheckOffController2);

    function ShoppingCheckOffController1(){
        var items = initialItems;
    };

    function ShoppingCheckOffController2(){

    };
})();