import freudiaLogo from "./images/freudiaLogo.png"
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
import therapistSeven from "./images/therapistOne-removebg.png";
import lineburst from "./images/line-burst.svg";
import howitworks1 from "./images/how-it-works-1.png";
import howitworks2 from "./images/how-it-works-2.png";
import howitworks3 from "./images/how-it-works-3.png";
import arrowgreen2 from "./images/arrow-down-green-2.png";
import info from "./images/info-light-green.svg";
import profileIcon from "./images/profileIcon.png";
import student from "./images/student.png";
import farmer from "./images/farmer.webp";
import farmerherobg from "./images/farmerherobg.svg";
import scrollDown from "./images/scrollDown.svg";
import sadfarmer from "./images/sadfarmer.jpg";
import farmer2Img from "./images/farmer2Img.svg";
import farmerSignin from "./images/farmerSignin.png";
import fbgtry from "./images/fbgtry.svg";
import bgfarm1 from "./images/bgfarm1.svg";
import grassbgtry from "./images/grassbgtry.svg";
import studentBg from "./images/studentBg.jpg";
import studentBg2 from "./images/studentBg2.jpg";
import student1 from "./images/student1.png";
import student2 from "./images/student2.jpg";
import studentSIgnup from "./images/signup.webp";
import user from "./images/user.svg";
import studentLogin from "./images/login.webp";
import userIcon from "./images/userIcon.webp";
import studentIcon from "./images/studentIcon.webp";
import farmerIcon from "./images/farmerIcon.webp";
import studentNavIcon from "./images/studentNavIcon.png";
import userNavIcon from "./images/userNavIcon.png";
import eatingDisorder from "./images/eating-disorder.webp";
import formImage from "./images/form-image.webp";
import doctorImg01 from "./images/doctor-img01.png";
import doctorImg02 from "./images/doctor-img02.png";
import doctorImg03 from "./images/doctor-img03.png";

export const doctors = [
  {
    id: 1,
    name: "Dr. Alfaz Ahmed",
    email: "alfaz.ahmed@example.com",
    password: "hashed_password_alfaz", 
    phone: 1234567890,
    photo: "./images/doctor-img01.png", 
    ticketPrice: 100,
    role: "doctor",
    specialization: "Surgeon",
    qualifications: ["MBBS", "MS"],
    experiences: ["5 years as a general surgeon", "2 years as a consultant"],
    bio: "Dedicated surgeon.",
    about:
      "Dr. Alfaz Ahmed is a skilled surgeon with expertise in general and laparoscopic surgeries.",
    timeSlots: [
      {
        day: "Wednesday",
        date: "9:00 AM - 11:00 AM"
      },
      {
        day: "Saturday",
        date: "4:00 PM - 6:00 PM"
      }],
    reviews: [], 
    averageRating: 4.8,
    totalRating: 272,
    isApproved: "approved",
    appointments: [],
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
  },
  {
    id: 2,
    name: "Dr. Saleh Mahmud",
    email: "saleh.mahmud@example.com",
    password: "hashed_password_saleh", 
    phone: 9876543210,
    photo: "./images/doctor-img02.png", 
    ticketPrice: 120,
    role: "doctor",
    specialization: "Neurologist",
    qualifications: ["MBBS", "DM Neurology"],
    experiences: ["8 years in neurology", "Senior consultant at hospital"],
    bio: "Caring neurologist.",
    about:
      "Dr. Saleh Mahmud is an experienced neurologist specializing in diagnosing and treating brain and nervous system disorders.",
    timeSlots: [
      {
        day: "Sunday",
        date: "9:00 AM - 11:00 AM"
      },
      {
        day: "Monday",
        date: "4:00 PM - 6:00 PM"
      }],
    reviews: [],
    averageRating: 4.8,
    totalRating: 272,
    isApproved: "approved",
    appointments: [],
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
  },
  {
    id: 3,
    name: "Dr. Farid Uddin",
    email: "farid.uddin@example.com",
    password: "hashed_password_farid",
    phone: 1122334455,
    photo: "./images/doctor-img03.png",
    ticketPrice: 90,
    role: "doctor",
    specialization: "Dermatologist",
    qualifications: ["MBBS", "MD Dermatology"],
    experiences: ["6 years in dermatology", "3 years as a skin specialist"],
    bio: "Expert dermatologist.",
    about:
      "Dr. Farid Uddin is a dermatologist providing treatments for a wide range of skin conditions.",
      timeSlots: [
        {
          day: "Saturday",
          date: "9:00 AM - 11:00 AM"
        },
        {
          day: "Sunday",
          date: "4:00 PM - 6:00 PM"
        }],
    reviews: [],
    averageRating: 4.8,
    totalRating: 272,
    isApproved: "approved",
    appointments: [],
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
  },
]



export const assets = {
  formImage,
  freudiaLogo,
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
  therapistSeven,
  lineSquiggle,
  eatingDisorder,
  lineburst,
  arrowgreen2,
  logoicon,
  info,
  profileIcon,
  student,
  farmer,
  farmerherobg,
  scrollDown,
  sadfarmer,
  farmer2Img,
  farmerSignin,
  fbgtry,
  bgfarm1,
  grassbgtry,
  studentBg,
  studentBg2,
  student1,
  student2,
  studentSIgnup,
  user,
  studentLogin,
  userIcon,
  studentIcon,
  farmerIcon,
  userNavIcon,
  studentNavIcon,
};

export const mentalHealthGroups = [
  {
    id: 0,
    title: "Anxiety Relief Group",
    members: 75,
    description:
      "A safe space for people experiencing anxiety to share their feelings and coping mechanisms.",
    goals:
      "Provide emotional support, share stress-relief techniques, and build resilience.",
    for: "People struggling with chronic anxiety.",
    topics: "Coping strategies, mindfulness practices, and stress management.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their experiences managing anxiety and learning coping strategies.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "Emotional support from peers to alleviate anxiety-related distress.",
        },
        {
          heading: "Education and Resources",
          description:
            "Access to mindfulness techniques, therapy options, and stress management resources.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Discussions on balancing stress, managing panic attacks, and long-term mental stability.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with Anxiety",
        description: "Anyone dealing with chronic anxiety.",
      },
      {
        category: "Caregivers and Loved Ones",
        description:
          "Those supporting someone with anxiety can join to learn how to provide help.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Weekly group discussions on managing anxiety triggers and building resilience.",
      expertSessions:
        "Expert-led sessions on anxiety treatment and management options.",
    },
    isPublic: true,
    image_url:
      "https://images.unsplash.com/photo-1683284355176-0424e1f62468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFueGlldHklMjByZWxpZWZ8ZW58MHwwfDB8fHww",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 1,
    title: "Depression Support Circle",
    members: 120,
    description:
      "An uplifting community for individuals dealing with depression.",
    goals: "Provide peer support and encourage emotional healing.",
    for: "People suffering from depression.",
    topics:
      "Emotional challenges, treatment experiences, and hope for recovery.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their journeys with depression to find common ground and understanding.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "A supportive space to uplift one another through recovery.",
        },
        {
          heading: "Education and Resources",
          description:
            "Providing educational resources on managing depressive symptoms and effective treatments.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Focusing on self-care routines and maintaining emotional balance.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with Depression",
        description:
          "Anyone battling depression, whether newly diagnosed or long-term sufferers.",
      },
      {
        category: "Caregivers and Loved Ones",
        description:
          "Caregivers can join to gain insights into supporting someone with depression.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Weekly discussions focusing on managing depressive episodes and promoting emotional healing.",
      expertSessions:
        "Occasional guest sessions with mental health professionals on depression treatment and recovery.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1539541417736-3d44c90da315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVwcmVzc2lvbiUyMHN1cHBvcnR8ZW58MHwwfDB8fHww",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 2,
    title: "Bipolar Balance Network",
    members: 65,
    description:
      "The Bipolar Balance Network is a support group created to help individuals navigating the complexities of bipolar disorder. This group is designed to provide a safe space where members can connect, share experiences, and gain insight into managing the highs and lows associated with this condition.",
    goals: "Foster understanding and stability.",
    for: "The primary goal of the Bipolar Balance Network is to foster a supportive environment for people living with bipolar disorder, as well as their loved ones and caregivers. By sharing personal stories, coping strategies, and wellness tips, members can find comfort and understanding from those facing similar challenges.",
    topics: "Medication management, mood swings, and self-care routines.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their personal journeys with bipolar disorder, allowing others to learn from different perspectives.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "The group offers emotional support, helping members feel less isolated in their struggles and more empowered in their recovery.",
        },
        {
          heading: "Education and Resources",
          description:
            "Access to reliable information on managing bipolar symptoms, treatment options, and wellness practices, such as mood tracking, medication adherence, and therapy options.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Discussions on the balance between manic and depressive episodes, managing medication, and maintaining mental stability.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with Bipolar Disorder",
        description:
          "Whether newly diagnosed or experienced in managing the disorder, anyone living with bipolar disorder is welcome.",
      },
      {
        category: "Caregivers and Loved Ones",
        description:
          "Those supporting someone with bipolar disorder can also join to learn and share how best to provide care and understanding.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Regular group chats on specific topics, such as coping with manic episodes, dealing with stigma, or building supportive relationships.",
      expertSessions:
        "Occasionally, mental health professionals may be invited to share their expertise on managing bipolar disorder.",
    },
    isPublic: true,
    image_url:
      "https://images.unsplash.com/photo-1652125158952-475247c6f116?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymlwb2xhciUyMGRpc29yZGVyfGVufDB8MHwwfHx8MA%3D%3D",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 3,
    title: "OCD Recovery Group",
    members: 85,
    description:
      "A space for those with OCD to connect and learn new coping techniques.",
    goals:
      "Share therapeutic approaches and reduce OCD’s impact on daily life.",
    for: "People with obsessive-compulsive disorder.",
    topics: "Managing compulsions, thoughts, and rituals.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their struggles with OCD to help others understand its impact.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "Group support for navigating daily life and managing intrusive thoughts.",
        },
        {
          heading: "Education and Resources",
          description:
            "Resources on therapeutic methods, like CBT, for reducing compulsions.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Strategies to manage rituals and reduce the impact of compulsive behavior.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with OCD",
        description:
          "Those with OCD, regardless of the severity of their symptoms.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals with OCD are welcome to join.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Group discussions on breaking compulsive behavior patterns.",
      expertSessions: "Sessions with specialists in OCD therapy techniques.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NkJTIwcmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 4,
    title: "PTSD Healing Group",
    members: 60,
    description:
      "A supportive group for individuals recovering from trauma and PTSD.",
    goals: "Offer a secure space for trauma processing and healing.",
    for: "People suffering from post-traumatic stress disorder.",
    topics: "Trauma triggers, recovery stories, and coping tools.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description: "Members share their stories of trauma and recovery.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "A supportive space for trauma survivors to discuss coping strategies.",
        },
        {
          heading: "Education and Resources",
          description:
            "Resources on therapy and recovery tools, including trauma-informed care.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Managing trauma triggers and learning how to regain control over emotions.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with PTSD",
        description: "Anyone experiencing trauma or PTSD.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Family and friends of those with PTSD are welcome.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Group talks on processing trauma and building healthy routines.",
      expertSessions:
        "Sessions with trauma-informed therapists on healing from PTSD.",
    },
    isPublic: true,
    image_url:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHRzZCUyMGhlYWxpbmd8ZW58MHx8MHx8fDA%3D",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 5,
    title: "Eating Disorder Recovery Group",
    members: 100,
    description:
      "A group focused on providing support for individuals recovering from eating disorders.",
    goals: "Encourage healthy eating habits and body positivity.",
    for: "Individuals struggling with anorexia, bulimia, or binge eating.",
    topics: "Body image, relationship with food, and self-worth.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members discuss their struggles with eating disorders and share recovery journeys.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "A non-judgmental space for individuals working toward recovery.",
        },
        {
          heading: "Education and Resources",
          description:
            "Nutrition education and mental health resources for managing disordered eating.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Strategies for maintaining healthy eating habits and addressing emotional triggers.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with Eating Disorders",
        description: "People recovering from or dealing with eating disorders.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Family and friends of individuals with eating disorders.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Open discussions on body image, food, and emotional health.",
      expertSessions:
        "Sessions with dieticians and mental health professionals on recovery strategies.",
    },
    isPublic: true,
    image_url:
      "https://plus.unsplash.com/premium_photo-1664302425309-ba34d06d97c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWF0aW5nJTIwZGlzb3JkZXJ8ZW58MHx8MHx8fDA%3D",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 6,
    title: "Addiction Support Network",
    members: 150,
    description:
      "A recovery group for those struggling with addiction to substances or behaviors.",
    goals: "Provide support and resources to help individuals stay sober.",
    for: "People in recovery from substance abuse or addiction.",
    topics: "Addiction recovery, staying sober, and relapse prevention.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their experiences with addiction and recovery.",
        },
        {
          heading: "Support and Encouragement",
          description: "Support in staying sober and managing cravings.",
        },
        {
          heading: "Education and Resources",
          description:
            "Access to recovery programs, resources, and strategies for preventing relapse.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Discussion on maintaining mental and emotional health during recovery.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with Addictions",
        description: "Those struggling with or in recovery from addiction.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals in addiction recovery.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Open discussions on managing cravings and avoiding triggers.",
      expertSessions:
        "Sessions with addiction specialists on relapse prevention.",
    },
    isPublic: false,
    image_url:
      "https://plus.unsplash.com/premium_photo-1689604956095-744e38047f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWRkaWN0aW9ufGVufDB8fDB8fHww",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 7,
    title: "Grief Support Circle",
    members: 40,
    description:
      "A safe community for those dealing with the pain of loss and grief.",
    goals: "Provide comfort, emotional support, and healing after loss.",
    for: "Individuals grieving the loss of a loved one.",
    topics: "Processing grief, emotional healing, and finding closure.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their stories of loss and how they are coping with grief.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "A supportive environment for emotional healing and comfort.",
        },
        {
          heading: "Education and Resources",
          description:
            "Access to grief counseling and support resources for emotional healing.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Discussions on managing emotions and finding closure after loss.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals Grieving",
        description: "Anyone grieving the loss of a loved one.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals dealing with grief.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions: "Open talks on coping with grief and emotional pain.",
      expertSessions:
        "Sessions with grief counselors on emotional healing and finding closure.",
    },
    isPublic: true,
    image_url:
      "https://images.unsplash.com/photo-1484973768669-7fb6b5451095?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEdyaWVmJTIwU3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 8,
    title: "Depression Support Circle",
    members: 120,
    description:
      "An uplifting community for individuals dealing with depression.",
    goals: "Provide peer support and encourage emotional healing.",
    for: "People suffering from depression.",
    topics:
      "Emotional challenges, treatment experiences, and hope for recovery.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their journeys with depression to find common ground and understanding.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "A supportive space to uplift one another through recovery.",
        },
        {
          heading: "Education and Resources",
          description:
            "Providing educational resources on managing depressive symptoms and effective treatments.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Focusing on self-care routines and maintaining emotional balance.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with Depression",
        description:
          "Anyone battling depression, whether newly diagnosed or long-term sufferers.",
      },
      {
        category: "Caregivers and Loved Ones",
        description:
          "Caregivers can join to gain insights into supporting someone with depression.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Weekly discussions focusing on managing depressive episodes and promoting emotional healing.",
      expertSessions:
        "Occasional guest sessions with mental health professionals on depression treatment and recovery.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1539541417736-3d44c90da315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVwcmVzc2lvbiUyMHN1cHBvcnR8ZW58MHwwfDB8fHww",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 9,
    title: "OCD Recovery Group",
    members: 85,
    description:
      "A space for those with OCD to connect and learn new coping techniques.",
    goals:
      "Share therapeutic approaches and reduce OCD’s impact on daily life.",
    for: "People with obsessive-compulsive disorder.",
    topics: "Managing compulsions, thoughts, and rituals.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their struggles with OCD to help others understand its impact.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "Group support for navigating daily life and managing intrusive thoughts.",
        },
        {
          heading: "Education and Resources",
          description:
            "Resources on therapeutic methods, like CBT, for reducing compulsions.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Strategies to manage rituals and reduce the impact of compulsive behavior.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with OCD",
        description:
          "Those with OCD, regardless of the severity of their symptoms.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals with OCD are welcome to join.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Group discussions on breaking compulsive behavior patterns.",
      expertSessions: "Sessions with specialists in OCD therapy techniques.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NkJTIwcmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 10,
    title: "OCD Recovery Group",
    members: 85,
    description:
      "A space for those with OCD to connect and learn new coping techniques.",
    goals:
      "Share therapeutic approaches and reduce OCD’s impact on daily life.",
    for: "People with obsessive-compulsive disorder.",
    topics: "Managing compulsions, thoughts, and rituals.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their struggles with OCD to help others understand its impact.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "Group support for navigating daily life and managing intrusive thoughts.",
        },
        {
          heading: "Education and Resources",
          description:
            "Resources on therapeutic methods, like CBT, for reducing compulsions.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Strategies to manage rituals and reduce the impact of compulsive behavior.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with OCD",
        description:
          "Those with OCD, regardless of the severity of their symptoms.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals with OCD are welcome to join.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Group discussions on breaking compulsive behavior patterns.",
      expertSessions: "Sessions with specialists in OCD therapy techniques.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NkJTIwcmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 11,
    title: "OCD Recovery Group",
    members: 85,
    description:
      "A space for those with OCD to connect and learn new coping techniques.",
    goals:
      "Share therapeutic approaches and reduce OCD’s impact on daily life.",
    for: "People with obsessive-compulsive disorder.",
    topics: "Managing compulsions, thoughts, and rituals.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their struggles with OCD to help others understand its impact.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "Group support for navigating daily life and managing intrusive thoughts.",
        },
        {
          heading: "Education and Resources",
          description:
            "Resources on therapeutic methods, like CBT, for reducing compulsions.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Strategies to manage rituals and reduce the impact of compulsive behavior.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with OCD",
        description:
          "Those with OCD, regardless of the severity of their symptoms.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals with OCD are welcome to join.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Group discussions on breaking compulsive behavior patterns.",
      expertSessions: "Sessions with specialists in OCD therapy techniques.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NkJTIwcmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 12,
    title: "OCD Recovery Group",
    members: 85,
    description:
      "A space for those with OCD to connect and learn new coping techniques.",
    goals:
      "Share therapeutic approaches and reduce OCD’s impact on daily life.",
    for: "People with obsessive-compulsive disorder.",
    topics: "Managing compulsions, thoughts, and rituals.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their struggles with OCD to help others understand its impact.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "Group support for navigating daily life and managing intrusive thoughts.",
        },
        {
          heading: "Education and Resources",
          description:
            "Resources on therapeutic methods, like CBT, for reducing compulsions.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Strategies to manage rituals and reduce the impact of compulsive behavior.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with OCD",
        description:
          "Those with OCD, regardless of the severity of their symptoms.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals with OCD are welcome to join.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Group discussions on breaking compulsive behavior patterns.",
      expertSessions: "Sessions with specialists in OCD therapy techniques.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NkJTIwcmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 13,
    title: "OCD Recovery Group",
    members: 85,
    description:
      "A space for those with OCD to connect and learn new coping techniques.",
    goals:
      "Share therapeutic approaches and reduce OCD’s impact on daily life.",
    for: "People with obsessive-compulsive disorder.",
    topics: "Managing compulsions, thoughts, and rituals.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their struggles with OCD to help others understand its impact.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "Group support for navigating daily life and managing intrusive thoughts.",
        },
        {
          heading: "Education and Resources",
          description:
            "Resources on therapeutic methods, like CBT, for reducing compulsions.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Strategies to manage rituals and reduce the impact of compulsive behavior.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with OCD",
        description:
          "Those with OCD, regardless of the severity of their symptoms.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals with OCD are welcome to join.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Group discussions on breaking compulsive behavior patterns.",
      expertSessions: "Sessions with specialists in OCD therapy techniques.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NkJTIwcmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 14,
    title: "OCD Recovery Group",
    members: 85,
    description:
      "A space for those with OCD to connect and learn new coping techniques.",
    goals:
      "Share therapeutic approaches and reduce OCD’s impact on daily life.",
    for: "People with obsessive-compulsive disorder.",
    topics: "Managing compulsions, thoughts, and rituals.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their struggles with OCD to help others understand its impact.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "Group support for navigating daily life and managing intrusive thoughts.",
        },
        {
          heading: "Education and Resources",
          description:
            "Resources on therapeutic methods, like CBT, for reducing compulsions.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Strategies to manage rituals and reduce the impact of compulsive behavior.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with OCD",
        description:
          "Those with OCD, regardless of the severity of their symptoms.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals with OCD are welcome to join.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Group discussions on breaking compulsive behavior patterns.",
      expertSessions: "Sessions with specialists in OCD therapy techniques.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NkJTIwcmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
  },
];

export const therapyOptions = [
  {
    id: 1,
    name: "Individual",
    desc: "For myself",
    defaultImg: individualDefault,
    movementImg: individualMovement,
    bgColor: "#007481",
  },
  {
    id: 2,
    name: "Couples",
    desc: "For me and my partner",
    defaultImg: coupleDefault,
    movementImg: coupleMovement,
    bgColor: "#00a6c7",
  },
  {
    id: 3,
    name: "Teen",
    desc: "For my child",
    defaultImg: teenDefault,
    movementImg: teenMovement,
    bgColor: "#ffb304",
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
    answer:
      "Our team ensures that every provider we bring to the platform is credentialed and in good standing. Providers who apply are required to provide proper professional documentation and proof of identity. We then cross-check their credential information with their respective organization.",
  },
  {
    question: "Can I stay anonymous?",
    answer: `When you sign up we do not ask you for your full name or contact information but rather a "nickname" created by you that will be used to identify you in the system. When you decide to start the therapy process, we will ask you for your contact information for emergency situations, such as if your therapist believes that you or someone else might be in danger. Your therapist may also request additional information about you when it is required by their licensing board guidelines. All of this data is protected by the confidentiality requirements of the therapist’s board and licensure, similar to in-office therapy.`,
  },
  {
    question: "How can I be sure that this is an effective form of therapy??",
    answer:
      "There are many studies that confirm the effectiveness of the online medium for making life changes. For example, a study published by JMIR Publications and conducted by researchers from University of Berkeley, UCSF, and the SF General Hospital, concluded that “users of BetterHelp experienced significantly reduced depression symptom severity after engaging with the platform.”",
  },
  {
    question: "How can I get started with better help?",
    answer: "Click here to get started.",
  },
  {
    question: "How can I be sure that this is an effective form of therapy?",
    answer:
      "There are many studies that confirm the effectiveness of the online medium for making life changes. For example, a study published by JMIR Publications and conducted by researchers from University of California - Berkeley, University of California - San Francisco, and the San Francisco General Hospital concluded that users of BetterHelp experienced significantly reduced depression symptom severity after engaging with the platform.",
  },
];

export const onHandleScroll = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};
