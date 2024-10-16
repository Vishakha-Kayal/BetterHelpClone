import React from "react";
import { ChallengeItem, ChallengeHeading } from "./ChallengeItem";

const ChallengesSection = () => (
  <div className="my-12">
    <ChallengeHeading title="What Challenges Farmers Need To Face?" />
    <p className="text-[1.6rem]">
      Farmers face several unique mental health challenges due to the nature of
      their work and lifestyle. These challenges can lead to long-term
      psychological issues if not addressed.
    </p>
    <dl className="my-4">
      <ChallengeItem title="Chronic Stress:">
        Farmers deal with continuous stress from factors like unpredictable
        weather, market fluctuations, and financial pressures. This can lead to
        long-term stress, impacting both mental and physical health, including
        problems such as headaches, sleep disorders, and memory loss.
      </ChallengeItem>
      <ChallengeItem title="Anxiety and Depression:">
        High levels of anxiety are common due to the uncertainty of farming
        outcomes. Financial difficulties and climate issues significantly
        contribute to depression among farmers, with many reporting feelings of
        hopelessness and emotional exhaustion.
      </ChallengeItem>
      <ChallengeItem title="Isolation:">
        Many farmers live in remote areas with limited access to mental health
        services and social support, leading to loneliness. This isolation can
        exacerbate mental health struggles, further contributing to anxiety and
        depression.
      </ChallengeItem>
      <ChallengeItem title="Burnout:">
        The physical and emotional demands of farming, especially during busy
        seasons, lead to burnout. Prolonged overwork without proper recovery can
        result in severe emotional exhaustion and lack of motivation.
      </ChallengeItem>
      <ChallengeItem title="Suicidal Thoughts:">
        Unfortunately, farmers experience higher rates of suicide due to the
        cumulative impact of these stressors and the stigma surrounding mental
        health in rural communities.
      </ChallengeItem>
    </dl>
    <ChallengeHeading title="How Freudia Can Help ?" />
    <p className="text-[1.6rem]">
      BetterHelp offers tailored mental health solutions for farmers, addressing
      these challenges through professional support and personalized
      interventions. Our services provide a comprehensive approach to improving
      mental well-being in rural communities.
    </p>
    <dl className="mt-4">
      <ChallengeItem title="Stress Management Programs:">
        BetterHelp helps farmers manage stress by providing access to stress
        reduction techniques, including mindfulness, meditation, and time
        management strategies.
      </ChallengeItem>
      <ChallengeItem title="Counseling and Therapy:">
        We offer professional counseling services that focus on alleviating
        anxiety and depression through virtual and in-person sessions tailored
        to the unique pressures farmers face.
      </ChallengeItem>
      <ChallengeItem title="Community Support:">
        BetterHelp connects farmers with peer support groups and social
        networks, helping combat isolation by building connections within rural
        communities.
      </ChallengeItem>
      <ChallengeItem title="Burnout Prevention:">
        Our programs teach effective ways to avoid burnout by encouraging
        balanced work schedules, regular breaks, and self-care practices.
      </ChallengeItem>
      <ChallengeItem title="Crisis Intervention:">
        For farmers struggling with suicidal thoughts, BetterHelp provides
        immediate crisis intervention services and access to hotlines that offer
        help when it is most needed.
      </ChallengeItem>
    </dl>
  </div>
);

export default ChallengesSection;
