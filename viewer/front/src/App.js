import React, { useState, useCallback } from 'react'
import { AppProvider, Frame, TopBar} from '@shopify/polaris';
import JapanEnergyChart from './apps/JapanEnergyChart'
import LanguageSetting from './apps/LanguageSetting'

const App = (props) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    [],
  );

  const handleNavigationToggle = useCallback(() => {
    console.log('toggle navigation visibility');
  }, []);

  const theme = {
    colors: {
      topBar: {
        background: '#ffff',
      },
    },
    logo: {
      width: 124,
      topBarSource: process.env.PUBLIC_URL + '/panair-logo.png',
      url: 'https://corp.panair.jp/',
      accessibilityLabel: 'Panair',
    },
  };

  const pathname = props.location.pathname;
  const lang = props.qs.lang;
  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: 'Home', url: pathname + '?lang=' + lang + '&menu=home' }],
        },
        {
          items: [{ content: 'News', url: pathname + '?lang=' + lang + '&menu=news' }],
        },
        {
          items: [{ content: 'About', url: pathname + '?lang=' + lang + '&menu=about' }],
        },
        {
          items: [{ content: 'How to use', url: pathname + '?lang=' + lang + '&menu=howtouse' }],
        },
        {
          items: [{ content: 'Language setting', url: pathname + '?lang=' + lang + '&menu=language_setting' }],
        },
        {
          items: [{ content: 'Go to Panair HomePage', url: "https://corp.panair.jp/" }],
        }
      ]}
      name="Menu"
      detail="touch me"
      initials="M"
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={handleNavigationToggle}
    />
  );

  const qs = props.qs;

  let content = null;
  const menu = qs.menu;

  switch (menu){
    case "language_setting":
      content = (<LanguageSetting  query_param={props.qs} />);
      break;
    default:
      content = (<JapanEnergyChart query_param={props.qs} />);
      break;
  };
  
  return (
    <div>
      <div style={{ height: '50px' }}>
        <AppProvider
          theme={theme}
          i18n={{
            Polaris: {
              Avatar: {
                label: 'Avatar',
                labelWithInitials: 'Avatar with initials {initials}',
              },
              Frame: { skipToContent: 'Skip to content' },
              TopBar: {
                toggleMenuLabel: 'Toggle menu',
              },
            },
          }}
        >
          <Frame topBar={topBarMarkup} />
        </AppProvider>
      </div>
      {
        content
      }
    </div >
  )
}

export default App 
