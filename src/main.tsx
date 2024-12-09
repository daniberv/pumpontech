import { createRoot } from 'react-dom/client'
import './index.scss'
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';
import { EnvUnsupported } from '@/components/EnvUnsupported';

import { init } from './init.ts';
import { Root } from './components/Root.tsx';

const root = createRoot(document.getElementById('root')!);

try {
	init(retrieveLaunchParams().startParam === 'debug' || import.meta.env.DEV);

  root.render(
    <Root />,
  )
} catch(e) {
  root.render(<EnvUnsupported />);
}
