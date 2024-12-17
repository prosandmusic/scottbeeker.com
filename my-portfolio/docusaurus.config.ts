import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';


const sidebars: SidebarsConfig = {
  EngineeringTutorialsSidebar: [
    'Tutorials/Development-Tutorials',

    {
      type: 'category',
      label: 'Tutorials',
      items: ['Tutorials/Development-Tutorials',
              'Tutorials/Softskills-Tutorials',
      ],
    },
  ],

  ResearchSidebar: [
    'Research/Fediverse',
    'Research/OperatingSystems',
    'Research/CustomWearables',
    'Research/Machinelearning',
    'Research/ConsumerTrends',
    {
      type: 'category',
      label: 'Fediverse',
      items: [
        'Research/Fediverse/ActivityPub',
        'Research/Fediverse/ATProtocol',
        'Research/Fediverse/ActivityPub2',
      ],
    },
    {
      type: 'category',
      label: 'ConsumerTrends',
      items: [
        'Research/ConsumerTrends/Music',
        'Research/ConsumerTrends/Retail',
        'Research/ConsumerTrends/Fashion',
        'Research/ConsumerTrends/Work',
      ],
    },
  ],
};

