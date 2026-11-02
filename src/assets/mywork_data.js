import project1_img from '../assets/Project1.png';
import currencyConvertor from '../assets/CurrencyConvertor.png';

const mywork_data = [
  {
    id: 'osm',
    w_name: 'On-Screen Marking Platform',
    category: 'Professional work',
    w_description: 'A digital evaluation platform focused on streamlined examination workflows and intuitive user experiences.',
    technologies: ['React.js', 'TypeScript', 'ASP.NET Core', 'PostgreSQL'],
    w_img: null,
    source_url: null,
    confidential: true,
  },
  {
    id: 'callervault',
    w_name: 'CallerVault',
    category: 'Full-stack application',
    w_description: 'A client communication application for organizing call history, conversations, messages and follow-up tasks.',
    technologies: ['React.js', 'JavaScript', 'PostgreSQL', 'REST APIs'],
    w_img: project1_img,
    source_url: null,
  },
  {
    id: 'apna-rasoi',
    w_name: 'Apna Rasoi',
    category: 'Personal project',
    w_description: 'An online food delivery application built to provide a smooth food discovery and ordering experience.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    w_img: project1_img,
    source_url: 'https://github.com/PriyanshuKumar1210/Apna-Rasoi',
  },
  {
    id: 'currency-converter',
    w_name: 'Currency Converter',
    category: 'Personal project',
    w_description: 'A currency conversion tool with a straightforward interface for checking exchange values.',
    technologies: ['JavaScript', 'React.js', 'API Integration'],
    w_img: currencyConvertor,
    source_url: 'https://github.com/PriyanshuKumar1210/currencyConvertor',
  },
];

export default mywork_data;
