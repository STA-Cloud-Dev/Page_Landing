export const paidPlans = [
  { name: 'Egg Linux 1', cpu: 100, ram: 512, disk: 5120, credit: 5000, days: 12, backup: true },
  { name: 'Egg Linux 2', cpu: 100, ram: 1024, disk: 10240, credit: 9000, days: 12, backup: true },
  { name: 'Egg Linux 3', cpu: 100, ram: 2048, disk: 15360, credit: 15000, days: 12, backup: true },
  { name: 'Egg Linux 4', cpu: 100, ram: 3072, disk: 20480, credit: 26000, days: 12, backup: false },
  { name: 'Egg Linux 5', cpu: 200, ram: 4096, disk: 25600, credit: 36000, days: 12, backup: true },
  { name: 'Dev 1', cpu: 75, ram: 512, disk: 1024, credit: 7000, days: 28, backup: false },
  { name: 'Dev 2', cpu: 75, ram: 1024, disk: 2048, credit: 12000, days: 28, backup: false },
  { name: 'Dev 3', cpu: 100, ram: 2048, disk: 3072, credit: 20000, days: 28, backup: false },
] as const;

export const gamePlans = [
  { name: 'Game Servers 1', credit: 50000, days: 28 },
  { name: 'Game Servers 2', credit: 65000, days: 28 },
] as const;

export const formatCredit = (credit: number) => credit.toLocaleString('vi-VN');
export const backupSchedule = 'Backup dự phòng vào Thứ 3, Thứ 6 và Chủ nhật.';

export function paidPlanSpecs(plan: (typeof paidPlans)[number]) {
  const specs = [`${plan.cpu}% CPU`, `${plan.ram} MB RAM`, `${plan.disk} MB ổ đĩa`];
  if (plan.name.startsWith('Egg Linux')) specs.push('Dành cho người trả phí');
  return specs;
}
