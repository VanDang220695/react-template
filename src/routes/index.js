import React from 'react';
import { HomeOutlined, QuestionOutlined } from '@ant-design/icons';

import Home from '@containers/Home';
import About from '@containers/About';

export default [
  {
    name: 'home',
    icon: <HomeOutlined />,
    component: <Home />,
    path: '/home',
    exact: true,
    routes: [
      {
        name: 'home',
        icon: <HomeOutlined />,
        component: <Home />,
        path: '/home-1',
        exact: true,
        routes: [
          {
            name: 'home',
            icon: <HomeOutlined />,
            component: <Home />,
            path: '/home-3',
            exact: true,
            routes: [
              {
                name: 'home',
                icon: <HomeOutlined />,
                component: <Home />,
                path: '/home-4',
                exact: true,
              },
            ],
          },
        ],
      },
      {
        name: 'home',
        icon: <HomeOutlined />,
        component: <Home />,
        path: '/home-2',
        exact: true,
      },
    ],
  },
  {
    name: 'about',
    icon: <QuestionOutlined />,
    component: <About />,
    path: '/about',
    exact: true,
  },
];
