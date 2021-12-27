import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavTypes {
  id: number;
  name: string;
  path: string;
}

const navData: NavTypes[] = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Categories',
    path: '/categories',
  },
  {
    id: 3,
    name: 'Infomation',
    path: '/infomation',
  },
];

const Nav = () => {
  const { pathname } = useRouter();
  return (
    <NavContainer>
      {navData.map((item) => (
        <li key={item.id}>
          <Link href={item.path}>
            <NavHref location={item.path === pathname ? true : false}>
              {item.name}
            </NavHref>
          </Link>
        </li>
      ))}
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  li {
    padding-left: 2rem;
  }
`;

const NavHref = styled.a<{ location: boolean }>`
  cursor: pointer;
  font-size: ${(props) => (props.location ? '3rem' : '2.5rem')};
  color: ${(props) => (props.location ? '#4b6a49' : '#000')};
`;
