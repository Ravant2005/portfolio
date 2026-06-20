export interface Recommender {
  name: string;
  title: string;
  image: string;
  location: string;
  description: string;
  achievements: string[];
  relationship: string;
  date: string;
  shortRecommendation: string;
  fullRecommendation: string;
  accent: "cinnabar" | "moss" | "gold" | "clay" | "ink";
}

export const recommenders: Recommender[] = [
  {
    name: "Siji Varghese",
    title:
      "CEO @ Leaders in Lipstick® | Executive Coach | 4×TEDx Speaker | Leadership & EI Facilitator",
    image: "/images/recommenders/siji.jpg",
    location: "Mumbai, Maharashtra, India",
    description:
      "Siji Varghese is the CEO of Leaders in Lipstick®, a global leadership development consultancy. She is an executive coach, 4× TEDx speaker, and a recognised advocate for women's leadership and emotional intelligence facilitation.",
    achievements: [
      "4× TEDx Speaker",
      "500+ coaching hours delivered",
      "85,000+ participants reached",
      "1,200+ workshops conducted",
      "125+ keynote speeches",
    ],
    relationship: "CEO — Leaders in Lipstick® (Internship Supervisor)",
    date: "June 18, 2026",
    shortRecommendation:
      "Ravant showed commendable effort and perseverance in taking on the challenging project of building our official website. He worked diligently to bring it to life, adapting through the process and remaining committed despite its complexities. His contribution gave us a functional platform and demonstrated his willingness to take responsibility and follow through on deliverables.",
    fullRecommendation:
      "I am writing to recommend Ravant Vignesh, who interned with Leaders in Lipstick® and contributed to the development of our official website. During his internship, he showed commendable effort and perseverance in taking on a challenging project. He worked diligently to bring the website to life, ensuring that the core structure and functionality were in place. His ability to learn and adapt through the process was evident, and he remained committed to completing the assignment despite the complexities involved. Ravant's contribution provided our organization with a functional platform to showcase our work and engage with our community. While the project required ongoing refinement, his role in laying the foundation was valuable and demonstrated his willingness to take responsibility and follow through on deliverables. I believe Ravant has the potential to grow further in his professional journey. With continued exposure and experience, he will be able to sharpen his skills and deliver even stronger outcomes. I wish him success in his future endeavors and trust that he will bring the same level of dedication to any role he undertakes.",
    accent: "cinnabar",
  },
  {
    name: "Vandana Sachdeva",
    title:
      "Brand Strategy Head @ Leaders in Lipstick® | PR & Media | Talk Show Host | AI Adoptions Trainer | Member G100-Delhi",
    image: "/images/recommenders/vandana.jpg",
    location: "Noida, Uttar Pradesh, India",
    description:
      "Vandana Sachdeva leads brand strategy and corporate relations at Leaders in Lipstick®. She is a multifaceted professional spanning PR & media, event management, talk show hosting, AI adoption training, and editorial leadership as Chief Editor of The Lighthouse in the Classroom.",
    achievements: [
      "Brand Strategy Head at a global consultancy serving 2,000+ leaders",
      "Member of G100 — global network of influential leaders (Delhi chapter)",
      "Chief Editor: The Lighthouse in the Classroom",
      "AI Adoptions Trainer",
      "SMU Cox affiliated",
    ],
    relationship: "Brand Strategy Head — Leaders in Lipstick® (Internship Supervisor)",
    date: "June 18, 2026",
    shortRecommendation:
      "Ravant played a key role in developing our company website and did a commendable job bringing the project to completion. He approached his work with diligence and care, paid close attention to every requirement, and not only developed but successfully deployed the site — seeing it through from concept to a fully functional, live website. His combination of technical ability, attention to detail, and team spirit made him a valuable member of our project.",
    fullRecommendation:
      "It is my pleasure to recommend Mr. S. Ravant Vignesh, who served as a Web Developer Intern with Leaders in Lipstick®. During his internship, Ravant played a key role in developing our company website and did a commendable job in bringing the project to completion. Ravant approached his work with diligence and care. He paid close attention to every instruction and requirement, ensuring that the website was built exactly to our specifications. His thoroughness was matched by strong execution. He not only developed the site but also deployed it successfully, seeing the project through from concept to a fully functional, live website. What stood out most about Ravant was his ability to work as part of a team. He communicated openly, collaborated readily with others, and contributed positively to the overall effort. He was dependable, receptive to feedback, and consistently willing to put in the work needed to deliver quality results. His combination of technical ability, attention to detail, and team spirit made him a valuable member of our project. I am happy to recommend Ravant without reservation. He has the skills, reliability, and collaborative attitude that any organization would value, and I am confident he will continue to grow and succeed in his future endeavors.",
    accent: "gold",
  },
  {
    name: "Jagadeesh Kanna",
    title:
      "Founder & CEO @ Vaayusastra Aerospace (IIT Madras incubated) | Author | Playwright | Film Director",
    image: "/images/recommenders/jagadeesh.jpg",
    location: "Chennai, Tamil Nadu, India",
    description:
      "Jagadeesh Kanna is an Indian stage actor, playwright, author, film director, and entrepreneur. He is the founder and CEO of Vaayusastra Aerospace, an IIT Madras RTBI-incubated educational firm that uniquely combines theatre arts with aeronautical science.",
    achievements: [
      "Founder & CEO of Vaayusastra Aerospace (IIT Madras Research Park)",
      "Author of the book 'Science with Young Hanuman'",
      "Writer & director of 'The Stealer' — experimental Rashomon-effect film",
      "Acting debut in 'Naalu Peruku Nalladhuna Edhuvum Thappilla' (2017)",
      "Pioneered interdisciplinary education merging theatre with aeronautics",
    ],
    relationship: "CEO/Director — Vaayusastra Aerospace (Internship Supervisor)",
    date: "June 19, 2026",
    shortRecommendation:
      "Ravant completed his internship at Vaayusastra Aerospace demonstrating dedication, responsibility, and a strong willingness to learn. He successfully guided 50+ students, contributed to the company's official website, and worked on drone calculation and simulation projects — exhibiting strong communication skills, teamwork, technical aptitude, and professionalism throughout.",
    fullRecommendation:
      "It is my pleasure to recommend Mr. S. Ravant Vignesh, a B.Tech Artificial Intelligence & Data Science student of Rajalakshmi Institute of Technology, for admission to his desired course at your esteemed university. Mr. S. Ravant Vignesh completed his internship at Vaayusastra Aerospace Private Limited from 21 April 2026 to 21 May 2026. During this period, he demonstrated dedication, responsibility, and a strong willingness to learn. He successfully guided 50+ students, contributed to the company's official website, and worked on drone calculation and simulation projects, gaining valuable practical experience. Throughout his internship, he exhibited strong communication skills, teamwork, technical aptitude, and professionalism. Based on his performance and commitment, I strongly recommend Mr. S. Ravant Vignesh for the applied program and wish him success in his future academic and professional endeavors.",
    accent: "moss",
  },
  {
    name: "Veera Karthik Subburaj",
    title:
      "Automotive Product Development Innovator | Mechanical Design | Patents | People Management | 9+ years",
    image: "/images/recommenders/veera.jpg",
    location: "Greater Chennai Area, India",
    description:
      "Veera Karthik Subburaj drives innovation in automotive product development with 9+ years of experience in mechanical design and development. Based at Renault Nissan Technology & Business Centre India, he holds patents and brings deep expertise in people management and bringing ideas to life.",
    achievements: [
      "9+ years in automotive product development",
      "Patent holder in mechanical design",
      "Based at Renault Nissan Technology & Business Centre India",
      "Judge at AGAM 9.0 International Entrepreneur Summit 2026",
      "Expertise in people management and innovation",
    ],
    relationship: "Judge — AGAM 9.0 International Entrepreneur Summit",
    date: "March 21, 2026",
    shortRecommendation:
      "I interacted with Ravant during the AGAM International Entrepreneur Summit 2026 at SRM IST, where I served as a judge. He demonstrated strong enthusiasm for innovation and entrepreneurship, presented his ideas with confidence during the evaluation process, and showed genuine interest in applying technology to real-world problems.",
    fullRecommendation:
      "I had the opportunity to interact with Ravant during the AGAM International Entrepreneur Summit 2026 at SRM IST, where I served as a judge. Ravant demonstrated strong enthusiasm for innovation and entrepreneurship and presented his ideas with confidence during the evaluation process. It was encouraging to see his interest in applying technology to real-world problems. I wish him the very best as he continues developing his ideas and pursuing his entrepreneurial journey.",
    accent: "clay",
  },
];
