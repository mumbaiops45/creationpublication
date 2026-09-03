
export const site = {
  name: 'Creation Publicity Pvt. Ltd.',
  shortName: 'Creation Publicity',
  tagline: 'Outdoor & Media Advertising Agency',
  description:
    'Creation Publicity Pvt. Ltd. is a full-service advertising agency delivering hoardings, mall & multiplex branding, transit media, retail signage, corporate gifting and digital marketing across India.',

  url: 'https://www.creationpublicity.com',


  phone: '+91 98200 00000',
  phoneRaw: '+919820000000',


  whatsapp: '919820000000',
  whatsappMessage: 'Hi Creation Publicity, I would like to enquire about your advertising services.',

  email: 'info@creationpublicity.com',

  address: {
    line1: 'Office No. 000, Business Centre',
    line2: 'Andheri East, Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400069',
    country: 'India',
  },

  social: {
    instagram: 'https://www.instagram.com/creationpublicity',
    linkedin: 'https://www.linkedin.com/company/creationpublicity',
  },


  linkedinHandle: '@creationpublicity',
}

export const nav = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Statistics', href: '/statistics' },
  { name: 'Clients', href: '/clients' },
  { name: 'Case Studies', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
]

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`
