export const IntroLink = {
  activeClass: 'active',
  className: 'sidenav-close',
  spy: true,
  smooth: true,
  duration: 500,
  offset: -54,
};

export const IntroLinkFixed = {
  ...IntroLink,
  className: 'side-bg-color',
  offset: 0,
};

export const ContactsLink = {
  ...IntroLink,
  activeClass: 'active',
  className: 'hoverline',
  to: 'WriteMe',
  offset: 0,
};

export const ContactsLinkMini = {
  ...ContactsLink,
  offset: -54,
};

export const ContactsPictogramLinks = {
  ...ContactsLink,
  className: 'btn-floating btn-large waves-effect waves-light brown tooltipped',
  'data-position': 'top',
  'data-tooltip': 'Напишите мне',
};

export const ContactsPictogramLinksMini = {
  ...ContactsPictogramLinks,
  offset: -54,
};
