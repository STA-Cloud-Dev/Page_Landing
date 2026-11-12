import { resourceSpecs } from './free-plans';

export const paidPlans = [
  { name: 'Egg Linux 1', cpu: 100, ram: 512, disk: 5120, credit: 5000, days: 12, backup: true, ports: 2, backups: 0, databases: 0, renewalDays: 36 },
  { name: 'Egg Linux 2', cpu: 100, ram: 1024, disk: 10240, credit: 9000, days: 12, backup: true, ports: 2, backups: 0, databases: 0, renewalDays: 36 },
  { name: 'Egg Linux 3', cpu: 100, ram: 2048, disk: 15360, credit: 15000, days: 12, backup: true, ports: 3, backups: 0, databases: 0, renewalDays: 36 },
  { name: 'Egg Linux 4', cpu: 100, ram: 3072, disk: 20480, credit: 26000, days: 12, backup: false, ports: 4, backups: 0, databases: 0, renewalDays: 36 },
  { name: 'Egg Linux 5', cpu: 200, ram: 4096, disk: 25600, credit: 36000, days: 12, backup: true, ports: 5, backups: 0, databases: 0, renewalDays: 36 },
  { name: 'Dev 1', cpu: 50, ram: 512, disk: 1024, credit: 7000, days: 28, backup: false, ports: 1, backups: 1, databases: 1, renewalDays: 60 },
  { name: 'Dev 2', cpu: 60, ram: 1024, disk: 2048, credit: 12000, days: 28, backup: false, ports: 2, backups: 1, databases: 1, renewalDays: 60 },
  { name: 'Dev 3', cpu: 75, ram: 1536, disk: 3072, credit: 20000, days: 28, backup: false, ports: 2, backups: 1, databases: 1, renewalDays: 60 },
  { name: 'Dev 4', cpu: 100, ram: 2048, disk: 5120, credit: 35000, days: 28, backup: false, ports: 3, backups: 1, databases: 1, renewalDays: 60 },
  { name: 'Dev 5', cpu: 100, ram: 3072, disk: 8192, credit: 50000, days: 28, backup: false, ports: 3, backups: 2, databases: 1, renewalDays: 60 },
] as const;

export const gamePlans = [
  { name: 'Game Servers 1', cpu: 200, ram: 4096, disk: 10240, credit: 50000, days: 28, ports: 2, backups: 1, databases: 0, renewalDays: 90 },
  { name: 'Game Servers 2', cpu: 200, ram: 6144, disk: 15360, credit: 65000, days: 28, ports: 3, backups: 1, databases: 0, renewalDays: 90 },
] as const;

export const formatCredit = (credit: number) => credit.toLocaleString('vi-VN');
export const backupSchedule = 'Backup dự phòng vào Thứ 3, Thứ 6 và Chủ nhật.';

export function paidPlanSpecs(plan: (typeof paidPlans)[number] | (typeof gamePlans)[number]) {
  const specs = [...resourceSpecs(plan), `${plan.ports} cổng`, `${plan.backups} vị trí sao lưu thủ công`, `${plan.databases} cơ sở dữ liệu`, `Gia hạn tối đa ${plan.renewalDays} ngày`];
  if (plan.name.startsWith('Dev ')) specs.push('Web, Bot', 'Không giới hạn số lần mua');
  if (plan.name.startsWith('Egg Linux')) specs.push('Dành cho người trả phí');
  return specs;
}
