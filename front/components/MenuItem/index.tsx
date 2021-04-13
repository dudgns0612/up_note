import { MenuItemWrapper, MenuParentLi } from './style';

const MenuItem = () => {
  return (
    <MenuItemWrapper>
      <ul>
        <MenuParentLi>
          <span>Develop (33)</span>
          <ul>
            <li> - menu (12) </li>
            <li> - menu (11) </li>
            <li> - menu (10) </li>
          </ul>
        </MenuParentLi>
        <MenuParentLi>
          <span>Enviroment</span>
          <ul>
            <li> - menu</li>
            <li> - menu</li>
            <li> - menu</li>
          </ul>
        </MenuParentLi>
      </ul>
    </MenuItemWrapper>
  );
};

export default MenuItem;
