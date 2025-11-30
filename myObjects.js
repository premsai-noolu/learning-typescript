"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name: "prem", email: "prem@gmail.com", isActive: false };
}
createUser({ name: "prem", email: "prem@gmail.com", isActive: false });
var newUser = {
    _id: 12,
    name: "prem",
    email: "prem@gmail.com",
    isActive: false,
};
newUser.email = "anil@gmail.com";
function cardInfo(Details) { }
cardInfo({ cardNumber: 123, cardDate: "240811", cvv: 2345 });
