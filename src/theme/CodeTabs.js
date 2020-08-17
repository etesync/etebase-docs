import React from 'react';

import Tabs from '@theme/Tabs';

export default function CodeTabs({ children }) {
    return (
        <Tabs
          defaultValue="js"
          groupId="programming-language"
          values={[
            { label: 'JavaScript', value: 'js', },
            { label: 'Python', value: 'py', },
          ]
        }>

          {children}

        </Tabs>
    );
}
