type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: "prem", email: "prem@gmail.com", isActive: false };
}

createUser({ name: "prem", email: "prem@gmail.com", isActive: false });

// readonly and optional

type User1 = {
  readonly _id: number;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; // This feild is optional means user can have this field while creating or not.
};

let newUser: User1 = {
  _id: 12,
  name: "prem",
  email: "prem@gmail.com",
  isActive: false,
};

newUser.email = "anil@gmail.com";
//newUser._id=13 // This will throw an error cannot assign again to _is because it is readonly.

type cardNumber = {
  cardNumber: number;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

function cardInfo(Details: cardDetails) {}
cardInfo({ cardNumber: 123, cardDate: "240811", cvv: 2345 });
export {};
