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
  creditCardDetails?: number;
};

let newUser: User1 = {
  _id: 12,
  name: "prem",
  email: "prem@gmail.com",
  isActive: false,
};

newUser.email = "anil@gmail.com";
//newUser._id=13 // This will throw an error cannot assign again to _is because it is readonly.
export {};
