import {ChallengeItem} from "./ChallengeItem";

const IntroductionSection = () => (
  <div
    className="mt-11 mb-4 rounded-[19px] overflow-hidden py-2 px-9"
    style={{
      background: "linear-gradient(to bottom, transparent 60%, #007481 100%)", 
    }}
  >
    <h2 className="text-[2.1rem] font-overpass text-[#4a4d4a] font-semibold my-4 pt-3">
      Introduction
    </h2>
    <h4 className="text-[1.6rem]">
      Farming is a profession that demands resilience and adaptability.
      However, farmers often encounter significant stressors that can impact their mental well-being. Key challenges include financial pressures, unpredictable weather conditions, and social isolation.
    </h4>
    <dl className="mt-4">
      <ChallengeItem title="Financial Pressures:">
        Economic challenges, such as fluctuating commodity prices and high operational costs, can lead to financial strain, a primary concern affecting farmers' mental health.
      </ChallengeItem>
      <ChallengeItem title="Weather Uncertainties:">
        Dependence on weather for crop and livestock health means that droughts, floods, or unseasonable conditions can devastate livelihoods, contributing to increased stress and anxiety.
      </ChallengeItem>
      <ChallengeItem title="Social Isolation:">
        Rural settings often result in physical and social isolation, limiting access to support networks and mental health resources, thereby exacerbating feelings of loneliness and distress.
      </ChallengeItem>
    </dl>
    <h4 className="text-[1.6rem] mt-4">
      It's important to note that these issues are interconnected; for instance, financial stress can intensify feelings of anxiety and depression, while social isolation may hinder access to supportive resources.
    </h4>
  </div>
);

export default IntroductionSection;