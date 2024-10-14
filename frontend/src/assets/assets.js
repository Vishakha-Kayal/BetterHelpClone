import textureImg from "./images/bg-texture.png";
import logo from "./images/homelogo.png";
import homelogo from "./images/logoIcon.png";
import logoicon from "./images/icon.png";
import coupleDefault from "./images/couples_default.png";
import individualDefault from "./images/individual_default.png";
import teenDefault from "./images/teen_default.png";
import coupleMovement from "./images/couples_movement.png";
import teenMovement from "./images/teen_movement.png";
import individualMovement from "./images/individual_movement.png";
import lightburst from "./images/line-burst-green.svg";
import lineSquiggle from "./images/line-squiggle.svg";
import therapistOne from "./images/therapistOne.jpg";
import therapistTwo from "./images/therapistTwo.jpeg";
import therapistThree from "./images/therapistThree.jpg";
import therapistFour from "./images/therapistFour.jpeg";
import therapistFive from "./images/therapistFive.jpeg";
import therapistSix from "./images/therapistSix.jpeg";
import lineburst from "./images/line-burst.svg";
import howitworks1 from "./images/how-it-works-1.png";
import howitworks2 from "./images/how-it-works-2.png";
import howitworks3 from "./images/how-it-works-3.png";
import arrowgreen2 from "./images/arrow-down-green-2.png";
import info from "./images/info-light-green.svg";
import profileIcon from "./images/profileIcon.png";

export const assets = {
  textureImg,
  logo,
  homelogo,
  lightburst,
  therapistOne,
  therapistTwo,
  therapistThree,
  therapistFour,
  therapistFive,
  therapistSix,
  lineSquiggle,
  lineburst,
  arrowgreen2,
  logoicon,
  info,
  profileIcon,
};

export const therapyOptions = [
  {
    id: 1,
    name: "Individual",
    desc: "For myself",
    defaultImg: individualDefault,
    movementImg: individualMovement,
    bgColor: "#397a4a",
  },
  {
    id: 2,
    name: "Couples",
    desc: "For me and my partner",
    defaultImg: coupleDefault,
    movementImg: coupleMovement,
    bgColor: "#457777",
  },
  {
    id: 3,
    name: "Teen",
    desc: "For my child",
    defaultImg: teenDefault,
    movementImg: teenMovement,
    bgColor: "#a75d00",
  },
];

export const steps = [
  {
    title: "Get matched to the best therapist for you",
    desc: "Answer a few questions to find a credentialled therapist who fits your needs and preferences. Tap into the largest network of credentialled providers.",
    image: howitworks1,
  },
  {
    title: "Communicate your way",
    desc: "Talk to your therapist however you feel comfortable — text, chat, phone, or video.",
    image: howitworks2,
  },
  {
    title: "Therapy when you need it",
    desc: "You can message your therapist at anytime, from anywhere. You also get to schedule live sessions when it's convenient for you, and can connect from any mobile device or computer.",
    image: howitworks3,
  },
];

export const therapyComparison = [
  {
    feature: "Provided by a credentialled therapist",
    betterHelp: true,
    inOffice: { result: true, nan: false },
    info: "Provided by licensed professionals",
    faq: "All therapists are credentialled with relevant experience and qualifications for their respective professional organizations",
  },
  {
    feature: "In-office visits",
    betterHelp: false,
    inOffice: { result: true, nan: false },
    info: "Physical visits to the therapist’s office",
    faq: "Commute to the therapist's location, spend time in the waiting room, sit in their office",
  },
  {
    feature: "Messaging any time",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Ability to send messages to your therapist at any time",
    faq: "Send and receive messages to your therapist, no scheduling required!",
  },
  {
    feature: "Chat sessions",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Virtual chat sessions with your therapist",
    faq: "Real-time conversation over instant messaging",
  },
  {
    feature: "Phone sessions",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Therapy sessions conducted via phone",
    faq: "Talk with your therapist over the phone at a scheduled time",
  },
  {
    feature: "Video sessions",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Therapy sessions via video calls",
    faq: "Face-to-face session with your therapist over video at a scheduled time",
  },
  {
    feature: "Easy scheduling",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Easily schedule appointments",
    faq: "Have a full look at your therapist's schedule and pick a time that works for you",
  },
  {
    feature: "Digital worksheets",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Worksheets available online for therapy",
    faq: "150+ digital worksheets and modules that support the therapy process",
  },
  {
    feature: "Group sessions",
    betterHelp: true,
    inOffice: { result: false, nan: true },
    info: "Participate in group therapy sessions",
    faq: "Free access to 20+ weekly live interactive group seminars delivered by expert therapists",
  },
  {
    feature: "Smart provider matching",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Matching you with the best provider",
    faq: "Get matched to a therapist from a pool of over 33,000 providers based on your needs, preferences, and demographics",
  },
  {
    feature: "Easy to switch providers",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Easily switch between different therapists",
    faq: "If you're unhappy with your therapist, click a button and get matched to another provider",
  },
  {
    feature: "Access therapy from anywhere",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Therapy accessible from any location",
    faq: "Using a phone or computer you can reach out to your therapist anytime, from anywhere",
  },
];

export const faqData = [
  {
    question: "Who are the therapists?",
    answer:
      "We require every therapist providing Therapist Services on the Platform to be a registered and/or licensed (as applicable) and experienced counsellor, psychologist, social worker, or therapist. Therapists must have a relevant academic degree in their field, at least 3 years of experience, and have to be qualified and credentialed by their respective professional organization after successfully completing the necessary education, exams, training, and practice requirements as applicable. For the avoidance of doubt, therapists are referred to on this site and related apps/sites by their title and U.S., U.K., or Australian credentials, whichever is applicable.",
  },
  {
    question: "Who will be helping me?",
    answer: `After you sign up, we will match you to an available therapist who fits your objectives, 
preferences, and the type of issues you are dealing with. Different therapists have different 
approaches and areas of focus, so it's important to find the right person who can achieve 
the best results for you. We have found that we are able to provide a successful match most of 
the time; however, if you start the process and you feel your therapist isn't a good fit for 
you, you may elect to be matched to a different therapist.`,
  },
  {
    question: "Is BetterHelp right for me?",
    answer:
      "BetterHelp may be right for you if you're looking to improve the quality of your life. Whenever there is anything that interferes with your happiness or prevents you from achieving your goals, we may be able to help. We also have therapists who specialize in specific issues such as stress, anxiety, relationships, parenting, depression, addictions, eating, sleeping, trauma, anger, family conflicts, LGBT matters, grief, religion, self esteem, and more. ",
  },
  {
    question: "How much does it cost?",
    answer:
      "The cost of therapy through BetterHelp ranges from $65 to $90 per week (billed every 4 weeks) and it is based on your location, source, preferences, and therapist availability. You can cancel your membership at any time, for any reason.",
  },
  {
    question: "After I sign up, how long until I'm matched with a therapist?",
    answer: "In most cases within 24 hours or less.",
  },
  {
    question: "How will I communicate with my therapist?",
    answer:
      "You can use different ways at different times as you wish, based on your needs, availability, and convenience.",
  },
  {
    question: "Can BetterHelp substitute for traditional face-to-face therapy?",
    answer:
      "The professionals who work through BetterHelp are licensed and credentialed therapists who were certified by their state's board to provide therapy and counseling. However, while the service may have similar benefits, it's not capable of substituting for traditional face-to-face therapy in every case. Please note that your provider won't be able to make any official diagnosis, to fulfill any court order or prescribe medication.",
  },
  {
    question: "How long can I use BetterHelp?",
    answer:
      "This depends on your needs and varies a lot from one person to another. Some people feel they get most of the value after just a few weeks, while others prefer to stick to the program for an extended period of time. This is completely up to you.",
  },
  {
    question: "How can I be sure that this is an effective form of therapy?",
    answer:
      "There are many studies that confirm the effectiveness of the online medium for making life changes. For example, a study published by JMIR Publications and conducted by researchers from University of California - Berkeley, University of California - San Francisco, and the San Francisco General Hospital concluded that users of BetterHelp experienced significantly reduced depression symptom severity after engaging with the platform.",
  },
];

export const morefaqs = [
  {
    question: "What is BetterHelp?",
    answer:
      "BetterHelp is the largest therapy platform in the world and it's 100% online. We change the way people approach their mental health and help them tackle life's challenges by providing accessible and affordable care. With BetterHelp, you can message a professional therapist anytime, anywhere.",
  },
  {
    question: "Who will be helping me?",
    answer:
      "After you sign up, we will match you to an available therapist who fits your objectives, preferences, and the type of issues you are dealing with. Different therapists have different approaches and areas of focus, so it's important to find the right person who can achieve the best results for you. We have found that we are able to provide a successful match most of the time; however, if you start the process and you feel your therapist isn't a good fit for you, you may elect to be matched to a different therapist.",
  },
  {
    question: "Who are the therapists?",
    answer:
      "We require every therapist providing Therapist Services on the Platform to be a registered and/or licensed (as applicable) and experienced counsellor, psychologist, social worker, or therapist. Therapists must have a relevant academic degree in their field, at least 3 years of experience, and have to be qualified and credentialed by their respective professional organization after successfully completing the necessary education, exams, training, and practice requirements as applicable. For the avoidance of doubt, therapists are referred to on this site and related apps/sites by their title and U.S., U.K., or Australian credentials, whichever is applicable.",
  },
  {
    question: "How are the therapists verified?",
    answer: "Our team ensures that every provider we bring to the platform is credentialed and in good standing. Providers who apply are required to provide proper professional documentation and proof of identity. We then cross-check their credential information with their respective organization.",
  },
  {
    question: "Can I stay anonymous?",
    answer:
      `When you sign up we do not ask you for your full name or contact information but rather a "nickname" created by you that will be used to identify you in the system. When you decide to start the therapy process, we will ask you for your contact information for emergency situations, such as if your therapist believes that you or someone else might be in danger. Your therapist may also request additional information about you when it is required by their licensing board guidelines. All of this data is protected by the confidentiality requirements of the therapist’s board and licensure, similar to in-office therapy.`,
  },
  {
    question: "How can I be sure that this is an effective form of therapy??",
    answer:
      "There are many studies that confirm the effectiveness of the online medium for making life changes. For example, a study published by JMIR Publications and conducted by researchers from University of Berkeley, UCSF, and the SF General Hospital, concluded that “users of BetterHelp experienced significantly reduced depression symptom severity after engaging with the platform.”",
  },
  {
    question: "How can I get started with better help?",
    answer:
      "Click here to get started.",
  },
  {
    question: "How can I be sure that this is an effective form of therapy?",
    answer:
      "There are many studies that confirm the effectiveness of the online medium for making life changes. For example, a study published by JMIR Publications and conducted by researchers from University of California - Berkeley, University of California - San Francisco, and the San Francisco General Hospital concluded that users of BetterHelp experienced significantly reduced depression symptom severity after engaging with the platform.",
  },
];
