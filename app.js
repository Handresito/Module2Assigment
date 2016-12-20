(function(){
    var initialItems = 

    'use strict';
    angular.module("ShoppingCheckOffApp", [])
    .controller("ShoppingCheckOffController1", ShoppingCheckOffController1)
    .controller("ShoppingCheckOffController2", ShoppingCheckOffController2)
    .service("ShoppingCheckOffService", ShoppingCheckOffService)

    ShoppingCheckOffController1.$inject = ['ShoppingCheckOffService']
    function ShoppingCheckOffController1(ShoppingCheckOffService){
        var vm = this;
        vm.items = ShoppingCheckOffService.getToBuyItems();
        vm.removeItem = function(indexItem){
            ShoppingCheckOffService.removeItem(indexItem);
        }
    };

    ShoppingCheckOffController2.$inject = ['ShoppingCheckOffService']
    function ShoppingCheckOffController2(ShoppingCheckOffService){
        var vm = this;
        vm.items = ShoppingCheckOffService.getBoughtItems();
    };

    function ShoppingCheckOffService(){
        var service = this;
        service.toBuyItems = [
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

        service.boughtItems = [];

        service.getToBuyItems = function(){
            return service.toBuyItems;
        };

        service.getBoughtItems = function(){
            return service.boughtItems;
        };

        service.removeItem = function(indexItem){
            var item = {
                name: service.toBuyItems[indexItem].name,
                quantity: service.toBuyItems[indexItem].quantity
            }
            service.boughtItems.push(item);
            service.toBuyItems.splice(indexItem, 1);
        };
    };
})();