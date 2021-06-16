import React, { useEffect, useState } from 'react';

import { Card } from 'primereact/card';
import { TabMenu } from 'primereact/tabmenu';

import { useHistory, useLocation } from 'react-router';

import MainTheme from 'resources/css/Theme.module.css';
import Clock from 'views/Components/Clock';

type menuType = {
  label: string;
  icon?: string;
  target: string;
  isChildrenAvailable?: boolean;
};

const menu: menuType[] = [
  { label: '홈', target: '/' },
  { label: '전투', target: '/battle' },
];

interface topMenuProps {
  visible?: boolean;
}

const TopMenu: React.FC<topMenuProps> = (props) => {
  const history = useHistory();
  const location = useLocation();

  const [activeItem, setActiveItem] = useState<menuType | null>(null);

  useEffect(() => {
    const menuItem = menu.find((el) => {
      if (el.isChildrenAvailable === true) {
        return location.pathname.startsWith(el.target);
      } else {
        return location.pathname === el.target;
      }
    });

    setActiveItem(menuItem !== undefined ? menuItem : null);
  }, [location]);

  return (
    <React.Fragment>
      <Card
        className={`${MainTheme.pCardSlim} ${MainTheme.pCardContentFlexRow}`}
        style={{ display: props.visible !== false ? 'flex' : 'none' }}
      >
        <TabMenu
          model={menu}
          activeItem={activeItem}
          onTabChange={(e) => {
            history.push(e.value.target);
          }}
          className={`${MainTheme.pFlexGrow}`}
        />
        <Clock className="p-ml-2 p-mr-2 p-mt-auto p-mb-auto" />
      </Card>
    </React.Fragment>
  );
};

export default TopMenu;
