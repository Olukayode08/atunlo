import GoalOne from './assets/Group-31.png'
import GoalTwo from './assets/Group-30.png'
import GoalThree from './assets/Group-28.png'
import GoalFive from './assets/Group-26.png'
import bgTwo from './assets/images-img-7.png'
import bgThree from './assets/images-img-6.png'
import bgFour from './assets/images-img-8.png'
import bgSix from './assets/images-img-2.png'
import bgFive from './assets/images-img-3.png'
import bgSeven from './assets/images-img-5.png'
import Anita from './assets/Anita.png'
import Aunmi from './assets/Aunmi.png'
import Mayaki from './assets/Mayaki.png'

// OUR TEAM
export const teams = [
  {
    id: 1,
    image: Anita,
    name: 'Anita Odiete, Director',
    about: `Anita is a solutions-driven individual with 9+ years’ experience serving as a Product Manager and Business Analyst while specialising in Strategy & Business Development, Performance Management, Process Improvement, Product Growth and Development, Digital Transformation, Customer Experience Management as well as Enterprise Systems Integration.
She has a healthy track record of developing successful solutions to complex problems for startups and corporates in Banking, Financial Technology, Automobile, Education and eCommerce sectors, which have helped expand customer base, revenue and process efficiency as well as increase cost savings of over $1m. As the Director of Atunlo, Anita is focused on shaping the mindset of households around Nigeria to view waste as value and not trash. She is also responsible for developing the company’s strategy towards achieving our yearly collection goals and making an impact towards our identified SDG goals.`,
  },
  {
    id: 2,
    image: Aunmi,
    name: 'Oluwafunmilola Esther Idris, Operations Manager',
    about: `Oluwafunmilola has over 12 years experience in Operations Management, Human Resources, Banking, Business Development and Strategy.
She is currently the Operations Manager at Atunlo and oversees all daily activities at our primary factory location while establishing partnerships with corporates for waste management. Funmi is also certified in Global Environmental Management, which enables her ensure our vision is accomplished in line with the SDG goals.`,
  },
  {
    id: 3,
    image: Mayaki,
    name: 'Mayaki Emmanuel, Advisor',
    about: `Mayaki has over 15 years experience managing global recycling companies. He currently serves as the General Manager for Sonnex Packaging, a subsidiary of Mohinani Group where he oversees the entire recycling value chain for PET bottles from collection to export of crushed and recycled PET to packaging companies.`,
  },
]
// DROPDOWN SERVICES

export const dropdownItems = [
  // {
  //   id: 1,
  //   text: 'Pickup',
  //   path: '/pickup',
  // },
  {
    id: 2,
    text: 'Dropoff',
    path: '/dropoff',
  },
]
// DROPDOWN ABOUT
export const aboutDropdown = [
  {
    idx: 1,
    text: 'Our Story',
    path: '/ourstory',
  },
  {
    idx: 2,
    text: 'Our Team',
    path: '/ourteam',
  },
]
// BACKGROUND SLIDER
export const bgslider = [
  {
    id: 1,
    image: bgSeven,
  },
  {
    id: 2,
    image: bgTwo,
  },
  {
    id: 3,
    image: bgThree,
  },
  {
    id: 4,
    image: bgFour,
  },
  {
    id: 5,
    image: bgFive,
  },
  {
    id: 6,
    image: bgSix,
  },
]
// OUR VALUE PROPOSITIONS
export const valueProposition = [
  {
    id: 1,
    image: GoalThree,
    text: ' End poverty in all its forms everywhere.',
  },
  {
    id: 2,
    image: GoalOne,
    text: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.',
  },
  {
    id: 4,
    image: GoalTwo,
    text: 'Ensure sustainable consumption and production patterns.',
  },
  {
    id: 5,
    image: GoalFive,
    text: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development.',
  },
]
export const propositionFaq = [
  {
    id: 1,
    image: GoalThree,
    text: ' End poverty in all its forms everywhere.',
    one: 'Job creation for local communities',
    two: '$5 per day wages for workers',
    three: 'Ability to trade waste for cash (waste to wealth)',
    four: 'Apprenticeship programs for 10,000 university students',
    hasTwo: true,
    hasThree: true,
    hasFour: true,
  },
  {
    id: 2,
    image: GoalOne,
    text: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.',
    one: 'Ability to trade waste for school materials',
    two: '“Catch Them Young” initiative for kids (Vocational activities)',
    three: 'Waste recycling clubs',
    four: 'Vocational trainings at our factory',
    hasTwo: true,
    hasThree: true,
    hasFour: true,
  },
  {
    id: 3,
    image: GoalTwo,
    text: 'Ensure sustainable consumption and production patterns.',
    one: 'Effective waste management',
    two: 'Educational outreach programs to local communities',
    three: 'Sustainability training for over 10,000 kids within 2 years',
      hasTwo: true,
    hasThree: true,
  },
  {
    id: 4,
    image: GoalFive,
    text: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development.',
    one: 'Reduce marine pollution by increasing collection capacity from 12,000 tonnes in Year 1 to 60,000 tonnes by Year 5',
  },
]
// FREQUENTLY ASKED QUESTIONS
export const FAQ = [
  {
    id: 1,
    question: 'What kind of waste does Atunlo collect?',
    answer: 'We collect clear and blue PET bottles (Water, Coke and Fanta)',
  },
  {
    id: 2,
    question: 'Would I get paid for recycling?',
    answer:
      'Definitely. We pay everyone per kg of PET bottles collected. Please click here to request a pickup.',
  },
  {
    id: 3,
    question: 'Can I volunteer?',
    answer:
      'Sure, please fill our contact us form here to find out more about our volunteering opportunities.',
  },
  {
    id: 4,
    question: 'How often would Atunlo pickup my waste?',
    answer: 'We pick up waste weekly.',
  },
  {
    id: 5,
    question: 'How can I partner with Atunlo?',
    answer:
      'Please fill our contact us form here for partnership opportunities.',
  },
]
// SLIDER
export const slider = [
  {
    id: 1,
    name: 'Minister of Education',
  },
  {
    id: 2,
    name: 'Mahogany Group',
  },
]
// PICKUP LOCATIONS
export const pickups = [
  {
    id: 1,
    header: 'IBADAN Metropolitan, Los Angeles.',
    text1: 'London',
    text2: 'North London',
    text3: 'Agege',
    text4: 'Mushin',
    text5: 'Ikoyi',
    text6: 'Osapa London',
    footer: 'For inquiries: +234 810 234 5678',
  },
  {
    id: 2,
    header: 'IBADAN Metropolitan, Los Angeles.',
    text1: 'London',
    text2: 'North London',
    text3: 'Agege',
    text4: 'Mushin',
    text5: 'Ikoyi',
    text6: 'Osapa London',
    footer: 'For inquiries: +234 810 234 5678',
  },
  {
    id: 3,
    header: 'IBADAN Metropolitan, Los Angeles.',
    text1: 'London',
    text2: 'North London',
    text3: 'Agege',
    text4: 'Mushin',
    text5: 'Ikoyi',
    text6: 'Osapa London',
    footer: 'For inquiries: +234 810 234 5678',
  },
  {
    id: 4,
    header: 'IBADAN Metropolitan, Los Angeles.',
    text1: 'London',
    text2: 'North London',
    text3: 'Agege',
    text4: 'Mushin',
    text5: 'Ikoyi',
    text6: 'Osapa London',
    footer: 'For inquiries: +234 810 234 5678',
  },
  {
    id: 5,
    header: 'IBADAN Metropolitan, Los Angeles.',
    text1: 'London',
    text2: 'North London',
    text3: 'Agege',
    text4: 'Mushin',
    text5: 'Ikoyi',
    text6: 'Osapa London',
    footer: 'For inquiries: +234 810 234 5678',
  },
  {
    id: 6,
    header: 'IBADAN Metropolitan, Los Angeles.',
    text1: 'London',
    text2: 'North London',
    text3: 'Agege',
    text4: 'Mushin',
    text5: 'Ikoyi',
    text6: 'Osapa London',
    footer: 'For inquiries: +234 810 234 5678',
  },
]
// DROPOFF LOCATIONS
export const dropoffs = [
  {
    id: 1,
    header: 'IBADAN Metropolitan, Los Angeles.',
    footer: 'Address: No 419, bulu bala street, Tinubu, Ibadan state.',
    contact: 'Contact: +234 812 345 6789',
  },
  {
    id: 2,
    header: 'IBADAN Metropolitan, Los Angeles.',

    footer: 'Address: No 419, bulu bala street, Tinubu, Ibadan state.',
    contact: 'Contact: +234 812 345 6789',
  },
  {
    id: 3,
    header: 'IBADAN Metropolitan, Los Angeles.',
    footer: 'Address: No 419, bulu bala street, Tinubu, Ibadan state.',
    contact: 'Contact: +234 812 345 6789',
  },
  {
    id: 4,
    header: 'IBADAN Metropolitan, Los Angeles.',
    footer: 'Address: No 419, bulu bala street, Tinubu, Ibadan state.',
    contact: 'Contact: +234 812 345 6789',
  },
  {
    id: 5,
    header: 'IBADAN Metropolitan, Los Angeles.',
    footer: 'Address: No 419, bulu bala street, Tinubu, Ibadan state.',
    contact: 'Contact: +234 812 345 6789',
  },
  {
    id: 6,
    header: 'IBADAN Metropolitan, Los Angeles.',
    footer: 'Address: No 419, bulu bala street, Tinubu, Ibadan state.',
    contact: 'Contact: +234 812 345 6789',
  },
]
