import styled from "styled-components";
import { SaerchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `jojo${val}`,
    image: "https://source.unsplash.com/b8EzemxJf7U",
    email: "aaaa@example.com",
    phone: "000-000-000",
    company: {
      name: "test株式会社"
    },
    website: "https://aaa.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>UsersList</h2>
      <SaerchInput />
      <SUseArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUseArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUseArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
