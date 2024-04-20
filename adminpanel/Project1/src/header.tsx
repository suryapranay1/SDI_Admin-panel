import React, { useMemo, useState } from 'react';
import {
  Button,
  Divider,
  Dropdown,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  Stack,
  styled,
} from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useLocation } from 'react-router-dom';

const HeaderContainer = styled(Stack)({
  backgroundColor: 'rgba(2, 103, 1, 0.5)',
  color: 'white',
  width: '100%',
  zIndex: 1,
});

const HeaderItems = styled(Button)({
  backgroundColor: 'transparent',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  margin: 12,
  position: 'relative',
  '&:hover': {
    background: 'none',
  },
});

const CustomModal = styled(Stack)({
  position: 'absolute',
  top: 'calc(100% + 5px)',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: '5px',
  color: 'black',
  zIndex: 999,
  display: 'block',
});
const LanguagesButton = styled(MenuButton)({
  color: '#fff',
  border: 'none',
  fontSize: '1rem',
  '&:hover': {
    background: 'none',
  },
});

const Header = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const { pathname } = useLocation();
  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleMouseEnter = (
    item: string,
    event: React.MouseEvent<HTMLButtonElement> | null
  ) => {
    setHoveredItem(item);
    const buttonElement = event?.target as HTMLElement;
    const ButtonRect = buttonElement.getBoundingClientRect();
    const modalTop = ButtonRect.bottom + window.scrollY + 2;
    const modalLeft = ButtonRect.left + ButtonRect.width / 2 + window.scrollX;
    setModalPosition({ top: modalTop, left: modalLeft });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleModalMouseEnter = () => {
    setHoveredItem(hoveredItem);
  };
  const handleSubItemClick = (endpoint: string, name: string) => {
    // if (name === 'News') {
    //   scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
    // }
    // if (name === 'Publication') {
    //   scrollRefEvents?.current?.scrollIntoView({ behavior: 'smooth' });
    // } else {
    navigate(endpoint);
    // }
  };
  const getSubItems = (item: string) => {
    switch (item) {
      case 'DATA':
        return [
          { name: 'Data List', endpoint: '/datalist' },
          { name: 'Detail Page', endpoint: '/datalist' },
          { name: 'Upload Data Page', endpoint: '/datalist' },
        ];
      case 'MAPS':
        return [
          { name: 'General Maps', endpoint: 'generalmaps' },
          { name: 'Historical Incident', endpoint: 'generalmaps' },
          { name: 'Weather Map', endpoint: 'generalmaps' },
        ];
      case 'DASHBOARD':
        return [
          { name: 'General Dashboard', endpoint: 'dashboard' },
          { name: 'Historical Incident', endpoint: 'dashboard' },
          { name: 'Weather', endpoint: 'dashboard' },
          { name: 'Hydrological', endpoint: 'dashboard' },
        ];
      case 'APPS / TOOLS':
        return [
          {
            name: 'Emergency Management Response tools',
            endpoint: 'applications',
          },
          {
            name: 'Simulation/Modeling of emergency Situation',
            endpoint: 'applications',
          },
          { name: 'Disaster Monitoring', endpoint: 'applications' },
          { name: 'Reporting and analysis tools', endpoint: 'applications' },
        ];
      case 'AGENCIES':
        return [
          { name: 'CoES', endpoint: 'agencies' },
          { name: 'Geology', endpoint: 'agencies' },
          { name: 'Hydromet', endpoint: 'agencies' },
          { name: 'Academy of Science', endpoint: 'agencies' },
          { name: 'CoEP', endpoint: 'agencies' },
        ];

      case 'NEWS / ARTICLES':
        return [
          { name: 'News', endpoint: 'news' },
          { name: 'Publication', endpoint: 'publications' },
        ];
      case 'ADMIN PANEL':
        return [];
      default:
        return [];
    }
  };
  const handleSearchClick = () => {
    setShowSearchInput(!showSearchInput);
  };
  const positionAbsolute = useMemo(() => {
    return pathname === '/';
  }, [pathname]);

  return (
    <HeaderContainer
      sx={{ position: positionAbsolute ? 'absolute' : 'relative' }}
    >
      <Stack
        direction={'row'}
        justifyContent="space-between"
        alignItems={'center'}
      >
        <Stack direction={'row'} gap={2} ml={2} alignItems={'center'}>
          <img
            src="../../../assets/Images/Tajikistan.png"
            alt="tajkistan-logo"
            style={{ cursor: 'pointer', height: 50 }}
            onClick={() => navigate('/')}
          />
          <img
            src="../../../assets/Images/Flag_of_Tajikistan.svg"
            alt="tajkistan-logo"
            style={{ cursor: 'pointer', width: 80 }}
            onClick={() => navigate('/')}
          />
        </Stack>

        <Stack direction={'row'}>
          <HeaderItems>Subscribe</HeaderItems>
          <Dropdown
            onMouseEnter={handleMenuOpen}
            onMouseLeave={handleMenuClose}
          >
            <LanguagesButton
              onMouseEnter={handleMenuOpen}
              onMouseLeave={handleMenuClose}
              endDecorator={<LanguageIcon />}
            >
              Languages
            </LanguagesButton>
            <Menu open={menuOpen} onClose={handleMenuClose}>
              <MenuItem>Tajik</MenuItem>
              <MenuItem>Russian</MenuItem>
              <MenuItem>English</MenuItem>
            </Menu>
          </Dropdown>
          {showSearchInput ? (
            <Stack direction={'row'}>
              <input
                type="text"
                placeholder="Search..."
                onBlur={() => setShowSearchInput(false)}
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '1px solid white',
                  margin: '20px 0 20px 0',
                  padding: '5px',
                  outline: 'none',
                  fontSize: 'inherit',
                }}
              />
              <IconButton
                sx={{
                  bgcolor: '#fff',
                  borderRadius: 0,
                  alignItems: 'center',
                  my: '20px',
                }}
              >
                <SearchIcon />
              </IconButton>
            </Stack>
          ) : (
            <HeaderItems
              endDecorator={<SearchIcon />}
              onClick={handleSearchClick}
            >
              Search
            </HeaderItems>
          )}
          <HeaderItems
            sx={{
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid white',
              padding: '5px 10px',
              borderRadius: '15px',
            }}
          >
            Contact Us
          </HeaderItems>
        </Stack>
      </Stack>
      <Divider sx={{ backgroundColor: '#fff' }} />
      <Stack
        direction={'row'}
        sx={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '50px',
        }}
      >
        {[
          'DATA',
          'MAPS',
          'DASHBOARD',
          'APPS / TOOLS',
          'AGENCIES',
          'NEWS / ARTICLES',
          'ADMIN PANEL',
        ].map((item) => (
          <HeaderItems
            key={item}
            onMouseEnter={(e) => handleMouseEnter(item, e)}
            onMouseLeave={handleMouseLeave}
          >
            {item}
          </HeaderItems>
        ))}

        {hoveredItem && hoveredItem !== 'ADMIN PANEL' && (
          <CustomModal
            sx={{ top: modalPosition.top, left: modalPosition.left }}
            onMouseEnter={handleModalMouseEnter}
          >
            <List
              sx={{
                listStyleType: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              {getSubItems(hoveredItem).map((subItem, index) => (
                <ListItem
                  key={index}
                  onClick={() =>
                    handleSubItemClick(subItem.endpoint, subItem.name)
                  }
                  sx={{
                    cursor: 'pointer',
                    backgroundColor: '#fff',
                    '&:hover': {
                      backgroundColor: 'lightgray',
                    },
                  }}
                >
                  {subItem.name}
                </ListItem>
              ))}
            </List>
          </CustomModal>
        )}
      </Stack>
    </HeaderContainer>
  );
};

export default Header;