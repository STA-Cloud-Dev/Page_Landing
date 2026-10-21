export type EggItem = {
  name: string;
  variants?: string[];
};

export type EggGroup = {
  title: string;
  subtitle: string;
  accent: 'cyan' | 'blue' | 'teal' | 'slate';
  items: EggItem[];
  wide?: boolean;
  status?: string;
};

const linuxFamilies: EggItem[] = [
  {
    name: 'Rocky Linux',
    variants: ['Rocky Linux 8', 'Rocky Linux 9', 'Rocky Linux 10'],
  },
  {
    name: 'AlmaLinux',
    variants: ['AlmaLinux 8', 'AlmaLinux 9', 'AlmaLinux 10'],
  },
  {
    name: 'CentOS',
    variants: ['CentOS Stream 9', 'CentOS Stream 10'],
  },
  {
    name: 'Oracle Linux',
    variants: ['Oracle Linux 8', 'Oracle Linux 9'],
  },
  {
    name: 'Ubuntu',
    variants: ['Ubuntu 22.04 LTS', 'Ubuntu 24.04 LTS', 'Ubuntu 26.04 LTS'],
  },
  {
    name: 'Debian',
    variants: ['Debian 11 Bullseye', 'Debian 12 Bookworm', 'Debian 13 Trixie', 'Debian Forky'],
  },
  {
    name: 'Security / Rolling',
    variants: ['Kali Linux current', 'Arch Linux current'],
  },
  {
    name: 'Linux Mint',
    variants: [
      'Linux Mint 21 Vanessa',
      'Linux Mint 21.1 Vera',
      'Linux Mint 21.2 Victoria',
      'Linux Mint 21.3 Virginia',
      'Linux Mint 22 Wilma',
      'Linux Mint 22.1 Xia',
      'Linux Mint 22.2 Zara',
      'Linux Mint 22.3 Zena',
    ],
  },
];

export const eggGroups: EggGroup[] = [
  {
    title: 'Website Egg',
    subtitle: 'Môi trường triển khai website PHP và ứng dụng web',
    accent: 'blue',
    items: [{ name: 'WordPress' }, { name: 'PHPweb' }, { name: 'Laravel' }],
  },
  {
    title: 'AI',
    subtitle: 'Workload AI và ứng dụng beta',
    accent: 'blue',
    items: [{ name: 'OpenClaw' }],
  },
  {
    title: 'Code Languages',
    subtitle: 'Runtime cho dev server',
    accent: 'cyan',
    items: [
      { name: 'Bun' },
      { name: 'C' },
      { name: 'Golang' },
      { name: 'Java' },
      { name: 'Node.js' },
      { name: 'Python' },
    ],
  },
  {
    title: 'Linux',
    subtitle: 'Dành cho người trả phí • Các hệ điều hành Linux',
    accent: 'teal',
    items: linuxFamilies,
    wide: true,
  },
  {
    title: 'Windows',
    subtitle: 'Windows desktop và Windows Server cho panel',
    accent: 'blue',
    status: 'Coming Soon',
    items: [
      { name: 'Windows Desktop', variants: ['Windows 10', 'Windows 11'] },
      {
        name: 'Windows Server',
        variants: [
          'Windows Server 2012',
          'Windows Server 2016',
          'Windows Server 2019',
          'Windows Server 2022',
          'Windows Server 2025',
        ],
      },
    ],
  },
  {
    title: 'Minecraft',
    subtitle: 'Minecraft Java, Bedrock và proxy',
    accent: 'cyan',
    items: [
      { name: 'BungeeCord' },
      { name: 'CanvasMC' },
      { name: 'Fabric' },
      { name: 'Folia' },
      { name: 'Forge Enhanced' },
      { name: 'Paper' },
      { name: 'PocketMine-MP' },
      { name: 'Vanilla Bedrock' },
      { name: 'Vanilla Minecraft' },
    ],
  },
  {
    title: 'Proxy',
    subtitle: 'Proxy và lớp bảo vệ cho hệ thống Minecraft',
    accent: 'blue',
    items: [{ name: 'Velocity' }, { name: 'STAShield' }],
  },
  {
    title: 'Voice Servers',
    subtitle: 'Runtime cho voice và music server',
    accent: 'slate',
    items: [{ name: 'LavaLink' }],
  },
];

function countItem(item: EggItem) {
  return item.variants?.length ?? 1;
}

export const eggTotals = {
  groups: eggGroups.length,
  items: eggGroups.reduce((total, group) => total + group.items.reduce((sum, item) => sum + countItem(item), 0), 0),
};
