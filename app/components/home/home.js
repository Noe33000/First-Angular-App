"use strict";

angular.module("todo")

    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: Main
    })

    ;

function alertMe(name) {
    alert(name);
}

function deletePerson(persons, index) {
    alert(index);
    persons.splice(index, 1);
}

function Main() {
    this.name = "";
    this.title = "C'est la home page!";
    this.alertMyName = alertMe;
    this.deletePerson = deletePerson;

    this.persons = [
        {
            id: 0,
            name: "Jonathan",
            lastName: "Collinet",
            age: 25,
        },
        {
            id: 1,
            name: "Julien",
            lastName: "Swag",
            age: 25,
        },
        {
            id: 2,
            name: "Johan",
            lastName: "tello",
            age: 25,
        },
        {
            id: 3,
            name: "Johnny",
            lastName: "Holliday",
            age: 25
        },
        {
            id: 4,
            name: "michel",
            lastName: "Trello",
            age: 1000
        },
        {
            id: 5,
            name: "michael",
            lastName: "jackson",
            age: 8
        },
        {
            id: 6,
            name: "André",
            lastName: "Goubil",
            age: 87
        }
    ]
}
var params = {
    type: 'artist',
    id: '3000'
}

function request(type, params) {
    url = "http://discogs.com/" + params.type + "/" + params.id; 
}

