import { sitePath } from '@/lib/site-path';

const iconNames: Record<string, string> = {
  WordPress: 'wordpress', PHPweb: 'php', Laravel: 'laravel',
  OpenClaw: 'openclaw', LavaLink: 'lavalink',
  Python: 'python', 'Node.js': 'nodejs', Bun: 'bun', C: 'c', Golang: 'go', Java: 'java',
  Ubuntu: 'ubuntu', Debian: 'debian', 'Arch Linux': 'archlinux', 'Kali Linux': 'kalilinux',
  'Linux Mint': 'linuxmint', 'Rocky Linux': 'rockylinux', AlmaLinux: 'almalinux',
  CentOS: 'centos', 'Oracle Linux': 'oracle', Windows: 'windows11', Linux: 'linux',
};

export function EggIcon({ name, group, small = false }: { name: string; group: string; small?: boolean }) {
  const match = Object.keys(iconNames).find((key) => name === key || name.startsWith(`${key} `));
  const icon = group === 'Minecraft' || group === 'Proxy' ? 'minecraft'
    : match ? iconNames[match] : group === 'Windows' ? 'windows11'
    : group === 'Linux' ? 'linux' : 'server';

  return (
    <span
      className={small ? 'egg-icon egg-icon-small inline-flex h-5 w-5 shrink-0 items-center justify-center' : 'egg-icon inline-flex h-10 w-10 shrink-0 items-center justify-center'}
      aria-hidden="true"
    >
      <img
        src={sitePath(`/egg-icons/${icon}.${icon === 'lavalink' ? 'webp' : 'svg'}`)}
        alt=""
        aria-hidden="true"
        width={small ? 20 : 32}
        height={small ? 20 : 32}
        loading="lazy"
        decoding="async"
        style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
      />
    </span>
  );
}
