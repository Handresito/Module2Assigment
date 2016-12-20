(function(){
    'use strict';
    angular.module("ShoppingCheckOffApp", [])
    .controller("ShoppingCheckOffController1", ShoppingCheckOffController1)
    .controller("ShoppingCheckOffController2", ShoppingCheckOffController2)
    .service("ShoppingCheckOffService", ShoppingCheckOffService)

    ShoppingCheckOffController1.$inject = ['ShoppingCheckOffService']
    function ShoppingCheckOffController1(ShoppingCheckOffService){
        var vm = this;
        vm.itemName = "";
        vm.itemQuantity = "";
        vm.items = ShoppingCheckOffService.getToBuyItems();
        vm.removeItem = function(indexItem){
            ShoppingCheckOffService.removeItem(indexItem);
        };
        vm.addItem = function(){
            ShoppingCheckOffService.addItem(vm.itemName, vm.itemQuantity);
            vm.itemName = "";
            vm.itemQuantity = "";
        };
        vm.deleteItem = function(index){
            ShoppingCheckOffService.deleteItem(index)
        }
    };

    ShoppingCheckOffController2.$inject = ['ShoppingCheckOffService']
    function ShoppingCheckOffController2(ShoppingCheckOffService){
        var vm = this;

        vm.items = ShoppingCheckOffService.getBoughtItems();
        vm.giveBack = function(indexItem){
            ShoppingCheckOffService.giveBack(indexItem);
        };
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
                name: "Rice",
                quantity: 8
            },
            {
                name: "Peaches",
                quantity: 3
            },
        ]

        service.boughtItems = [];

        service.addItem = function (itemName, itemQuantity){
            var name = itemName.trim();
            var quantity = itemQuantity.trim();
            if(name !== "" && quantity !== ""){
                var item = {
                name: itemName,
                quantity: itemQuantity
                }
            service.toBuyItems.push(item);
            }else{
                alert('Insert data properly.')
                return;
            }
            
        }

        service.deleteItem = function(indexItem){
            console.log("delete item");
            service.toBuyItems.splice(indexItem,1);
        }

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

        service.giveBack = function(indexItem){
            var item = {
                name: service.boughtItems[indexItem].name,
                quantity: service.boughtItems[indexItem].quantity
            }
            service.toBuyItems.push(item);
            service.boughtItems.splice(indexItem, 1);
        };
    };
})();