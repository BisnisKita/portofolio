const personDetails = {
  personal: {
    firstName: "Dicky",
    lastName: "Aliansyah",
    email: "dildiyana25@gmail.com",
    age: 20,
    languages: "Indonesia & Inggris",
    phone: "+6285758492957",
    contactMail: "dildiyana25@gmail.com",
    address: "Lampung, Indonesia",
    nationality: "Indonesia",
    freelance: "Web Developer & Designer",
    description:
      "Saya adalah seorang web developer yang bersemangat dengan visi untuk menciptakan pengalaman online yang menakjubkan. Dengan fokus pada desain responsif dan fungsionalitas yang intuitif, saya berusaha untuk memberikan solusi yang tepat bagi pengguna. ",
  },
  professional: {
    yoe: 4,
    completedProjects: 16,
    happyCustomers: 34,
    awardsWon: 5,
  },
  academic: {
    college: {
      name: "Full Freelancer",
      duration: "Masih Bejalan",
      course: "Saya Freelancer yang bekerja sebagai Web Developer dan Designer",
    },
    college1: {
      name: "Bisnis Online",
      duration: "1.5 Tahun",
      course: " Saya bekerja Dropshipper & Reseller sebagai member Balemol.com ",
    },
    college2: {
      name: "Waiters & Pramusaji",
      duration: "1 tahun",
      course: "Saya bekerja sebagai Waiters & Pramusaji di salah satu Restoran daerah Metro, Lampung",
    },
   
    school: {
      name: "SDN 1 Way Mili",
      duration: "2011 - 2017",
      course: "Sekolah Dasar",
      
    },
    school1: {
      name: "SMP Islam Assya'Roniyah",
      duration: "2017 - 2020",
      course: "Sekolah Menengah Pertama",
      
    },
    school2: {
      name: "SMK Praja Utama",
      duration: "2020 - 2022",
      course: "Sekolah Menengah Kejuruan",
      
    },
   
    
   
  },
  skills: {
    // key: skill name
    // value: skill percentage
    html: 95,
    javascript: 75,
    css: 80,
    nodejs: 50,
    wordpress: 85,
    python: 40,
    gitAndGithub: 40,
    vscode: 80,
  },
  social: {
    github: "https://github.com/pulkithanda",
    linkedin: "https://www.linkedin.com/in/pulkit-handa-2286721aa/",
    codepen: "https://codepen.io/pulkitchamp",
    telegram: "https://t.me/Pulkit_Champ",
  },
};

  function setElemAttribute(elemId, elemValue, attr = 'innerText') {
    const elem = document.getElementById(elemId);

    // set value only if element is present
    if (elem) {
      console.log("setting attribute for" + elem, attr, elemValue);
      elem[attr] =  elemValue;
    }
  }

  function setSkillValue(skillName) {
    setElemAttribute('skill-' + skillName, personDetails.skills[skillName] + '%');
    const div = document.getElementsByClassName('skill-' + skillName)[0];
    if (div) {
      const className = 'p' + personDetails.skills[skillName];
      div.classList.remove('p0');
      div.classList.add(className);
    }
  }

  // index.html
  setElemAttribute('person-name', personDetails.personal.firstName + ' ' + personDetails.personal.lastName);
  setElemAttribute('person-desc', personDetails.personal.description);

  // about.html
  setElemAttribute('person-fname', personDetails.personal.firstName);
  setElemAttribute('person-lname', personDetails.personal.lastName);
  setElemAttribute('person-age', personDetails.personal.age);
  setElemAttribute('person-address', personDetails.personal.address);
  setElemAttribute('person-nationality', personDetails.personal.nationality);
  setElemAttribute('person-freelance', personDetails.personal.freelance);
  setElemAttribute('person-email', personDetails.personal.email);
  setElemAttribute('person-contactMail', personDetails.personal.contactMail);
  setElemAttribute('person-phone', personDetails.personal.phone);
  setElemAttribute('person-languages', personDetails.personal.languages);
  // professional
  setElemAttribute('person-yoe', personDetails.professional.yoe);
  setElemAttribute('person-completedProjects', personDetails.professional.completedProjects);
  setElemAttribute('person-happyCustomers', personDetails.professional.happyCustomers);
  setElemAttribute('person-awardsWon', personDetails.professional.awardsWon);
  // academic
  setElemAttribute('school-duration', personDetails.academic.school.duration);
  setElemAttribute('school-name', personDetails.academic.school.name);
  setElemAttribute('school-course', personDetails.academic.school.course);
  setElemAttribute('college-duration', personDetails.academic.college.duration);
  setElemAttribute('college-name', personDetails.academic.college.name);
  setElemAttribute('college-course', personDetails.academic.college.course);
  
  setElemAttribute('school1-duration', personDetails.academic.school1.duration);
  setElemAttribute('school1-name', personDetails.academic.school1.name);
  setElemAttribute('school1-course', personDetails.academic.school1.course);
  setElemAttribute('college1-duration', personDetails.academic.college1.duration);
  setElemAttribute('college1-course', personDetails.academic.college1.course);
  setElemAttribute('college1-name', personDetails.academic.college1.name);

  setElemAttribute('school2-duration', personDetails.academic.school2.duration);
  setElemAttribute('school2-name', personDetails.academic.school2.name);
  setElemAttribute('school2-course', personDetails.academic.school2.course);
  setElemAttribute('college2-duration', personDetails.academic.college2.duration);
  setElemAttribute('college2-course', personDetails.academic.college2.course);
  setElemAttribute('college2-name', personDetails.academic.college2.name);

  

  // TODO: can be replaced with a loop
  setSkillValue('html');
  setSkillValue('css');
  setSkillValue('javascript');
  setSkillValue('python');
  setSkillValue('nodejs');
  setSkillValue('wordpress');
  setSkillValue('gitAndGithub');
  setSkillValue('vscode');

  // contact.html
  setElemAttribute('github', personDetails.social.github, 'href');
  setElemAttribute('codepen', personDetails.social.codepen, 'href');
  setElemAttribute('telegram', personDetails.social.telegram, 'href');
  setElemAttribute('linkedin', personDetails.social.linkedin, 'href');
  setElemAttribute('mail-hyperlink', "mailto:"+personDetails.personal.contactMail, 'href');