import React from 'react';
import './PackagesMatrix.css';

const UI_TECHNOLOGIES = [
  {
    label: 'Languages',
    value: 'Javascript, ES6, Typescript, Flow',
  },
  {
    label: 'Libraries',
    value: 'React, AngularJS, VueJS',
  },
];

const API_TECHNOLOGIES = [
  {
    label: 'Languages',
    value: 'Javascript, ES6, Typescript, Java, C#, Python, Kotlin',
  },
  {
    label: 'Libraries',
    value: 'Spring Boot, .NET, Maven, JUnit',
  },
];

const descriptionFn = (duration: string, complexity: string, scope: string) => {
  return [
    {
      label: 'Duration',
      value: duration,
    },
    {
      label: 'Complexity',
      value: complexity,
    },
    {
      label: 'Scope',
      value: scope,
    },
  ];
};

const VISUAL_DEFECTS = [
  {
    name: 'Minor Visual Defect',
    description: descriptionFn(
      '3 Days',
      'Low',
      'Requires work on UI Logic and/or CSS, although its does not have a sizeable impact'
    ),
    technologies: UI_TECHNOLOGIES,
    roles: [
      {
        label: 'Analysis',
        value: '1 Analyst',
      },
      {
        label: 'Dev',
        value: '1 Frontend Developer',
      },
      {
        label: 'Testing',
        value: '1 QA',
      },
    ],
    rate: 'usd4K',
  },
  {
    name: 'Medium Visual Defect',
    description: descriptionFn(
      '5 Days',
      'Medium',
      'Requires work on UI Logic and/or CSS, and it has a sizeable impact'
    ),
    technologies: UI_TECHNOLOGIES,
    roles: [
      {
        label: 'Analysis',
        value: '',
      },
      {
        label: 'Dev',
        value: '1 Frontend Developer',
      },
      {
        label: 'Testing',
        value: '1 QA',
      },
    ],
    rate: 'usd6K',
  },
  {
    name: 'Major Visual Defect',
    description: descriptionFn(
      '10 Days',
      'High',
      'Requires changes on both UI Logic, CSS as well as additional implementation of components to fulfill it. It has a major impact.'
    ),
    technologies: UI_TECHNOLOGIES,
    roles: [
      {
        label: 'Analysis',
        value: '1 Analyst',
      },
      {
        label: 'Dev',
        value: '1 Fullstack Developer',
      },
      {
        label: 'Testing',
        value: '1 QA',
      },
    ],
    rate: 'usd12K',
  },
];

const API_DEFECTS = [
  {
    name: 'Minor API Defect',
    description: descriptionFn(
      '3 Days',
      'Low',
      'Requires work on API / Service Logic, does not have a critical impact'
    ),
    technologies: API_TECHNOLOGIES,
    roles: [
      {
        label: 'Analysis',
        value: '1 Analyst',
      },
      {
        label: 'Dev',
        value: '1 Backend Developer',
      },
      {
        label: 'Testing',
        value: '1 QA',
      },
    ],
    rate: 'usd4K',
  },
  {
    name: 'Medium API Defect',
    description: descriptionFn(
      '5 Days',
      'Medium',
      'Requires work on API / Service Logic and/or Data Layer, it has a sizeable impact'
    ),
    technologies: API_TECHNOLOGIES,
    roles: [
      {
        label: 'Analysis',
        value: '1 Analyst',
      },
      {
        label: 'Dev',
        value: '1 Backend Developer',
      },
      {
        label: 'Testing',
        value: '1 QA',
      },
    ],
    rate: 'usd6K',
  },
  {
    name: 'Major API Defect',
    description: descriptionFn(
      '10 Days',
      'High',
      'Requires work on API / Service Logic and/or Data Layer, and requires the implementation of additional components to fulfill it. It has a major impact'
    ),
    technologies: API_TECHNOLOGIES,
    roles: [
      {
        label: 'Analysis',
        value: '1 Tech Leader / Architect',
      },
      {
        label: 'Dev',
        value: '1 Fullstack Developer',
      },
      {
        label: 'Testing',
        value: '1 QA',
      },
    ],
    rate: 'usd12K',
  },
];

const VISUAL_FEATURES = [
  {
    name: 'Minor Visual Feature',
    description: descriptionFn(
      '5 Days',
      'Low',
      'Implementation of a simple, non critical feature on presentation layer'
    ),
    technologies: UI_TECHNOLOGIES,
    roles: [
      {
        label: 'Analysis',
        value: '1 Analyst',
      },
      {
        label: 'Dev',
        value: '1 Frontend Developer',
      },
      {
        label: 'Testing',
        value: '1 QA',
      },
    ],
    rate: 'usd6K',
  },
  {
    name: 'Medium Visual Feature',
    description: descriptionFn(
      '10 Days',
      'Medium',
      'Implementation of relatively simple but critical feature on presentation layer'
    ),
    technologies: UI_TECHNOLOGIES,
    roles: [
      {
        label: 'Analysis',
        value: '1 Analyst',
      },
      {
        label: 'Dev',
        value: '2 Frontend Developers',
      },
      {
        label: 'Testing',
        value: '1 QA',
      },
    ],
    rate: 'usd15K',
  },
  {
    name: 'Major Visual Feature',
    description: descriptionFn(
      '20 Days',
      'High',
      'Implementation of complex and critical feature on presentation layer. It includes the creation of design specs with active involvement of a UX specialist.'
    ),
    technologies: UI_TECHNOLOGIES,
    roles: [
      {
        label: 'Analysis',
        value: '1 Analyst',
      },
      {
        label: 'Specialist',
        value: 'UX / Design Expert',
      },
      {
        label: 'Dev',
        value: '2 Fullstack Developers',
      },
      {
        label: 'Testing',
        value: '1 QA',
      },
    ],
    rate: 'usd35K',
  },
];


const API_FEATURES = [
  {
    name: 'Minor API Feature',
    description: descriptionFn(
      '5 Days',
      'Low',
      'Implementation of a simple, non critical feature on API / Backend'
    ),
    technologies: API_TECHNOLOGIES,
    roles: [
      {
        label: 'Analysis',
        value: '1 Analyst',
      },
      {
        label: 'Dev',
        value: '1 Backend Developer',
      },
      {
        label: 'Testing',
        value: '1 QA',
      },
    ],
    rate: 'usd6K',
  },
  {
    name: 'Medium API Feature',
    description: descriptionFn(
      '10 Days',
      'Medium',
      'Implementation of relatively simple but critical feature on API / Backend'
    ),
    technologies: API_TECHNOLOGIES,
    roles: [
      {
        label: 'Analysis',
        value: '1 Analyst',
      },
      {
        label: 'Dev',
        value: '2 FullStack Developers',
      },
      {
        label: 'Testing',
        value: '1 QA',
      },
    ],
    rate: 'usd15K',
  },
  {
    name: 'Major API Feature',
    description: descriptionFn(
      '20 Days',
      'High',
      'Implementation of complex and critical feature on API / Backend. It includes analysis from an specialist (Architect or Tech Leader).'
    ),
    technologies: UI_TECHNOLOGIES,
    roles: [
      {
        label: 'Analysis',
        value: '1 Analyst',
      },
      {
        label: 'Specialist',
        value: 'Architect / Tech Leader',
      },
      {
        label: 'Dev',
        value: '2 Fullstack Developers',
      },
      {
        label: 'Testing',
        value: '1 QA',
      },
    ],
    rate: 'usd35K',
  },
];

const PACKAGES = [...VISUAL_DEFECTS, ...API_DEFECTS, ...VISUAL_FEATURES, ...API_FEATURES];

export default class PackagesMatrix extends React.Component<any, any> {
  renderSimpleColumn(value: any, includeAsset: boolean) {
    return (
      <div className="packages-matrix-item-simple">
        {includeAsset ? (
          <div className="packages-matrix-item-simple-img">
            <img src="./package.png" width="50px" />
          </div>
        ) : (
          <div></div>
        )}
        <div className="packages-matrix-item-simple-value">{value}</div>
      </div>
    );
  }

  renderColumnList(list: Array<any>) {
    return (
      <div className="packages-matrix-item-column-list-container">
        {list.map(item => (
          <div
            key={item.label}
            className="packages-matrix-item-column-list-container-item"
          >
            <div className="packages-matrix-item-column-list-container-item-name">
              {item.label}
            </div>
            {item.label === 'Analysis' ? (
              <div className="packages-matrix-item-column-list-container-item-label-check">
                <img src="./check.png" width="20px" />
              </div>
            ) : (
              <div className="packages-matrix-item-column-list-container-item-label">
                {item.value}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="packages-matrix-container">
        {PACKAGES.map(p => {
          return (
            <div className="packages-matrix-item-container">
              {this.renderSimpleColumn(p.name, true)}
              {this.renderColumnList(p.description)}
              {this.renderColumnList(p.technologies)}
              {this.renderColumnList(p.roles)}
              {this.renderSimpleColumn(p.rate, false)}
            </div>
          );
        })}
      </div>
    );
  }
}
