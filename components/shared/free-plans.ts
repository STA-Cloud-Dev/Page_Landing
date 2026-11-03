// Portal /store/create, checked 03/11/2026. Availability remains live on Portal.
export const freePolicy = 'Dành cho tài khoản đã xác minh. Mua được hoàn 100%. Không hỗ trợ backup hoặc khôi phục dữ liệu; nếu máy chủ bị sập hoặc xóa sẽ hoàn 100% khoản đã thanh toán.';

export const freePlans = [
  { id: 'free-gaming-ai', name: 'STA Cloud Free Gamming + AI', cpu: 75, ram: 2048, disk: 3072, credit: 9990, days: 5, renewalDays: 4, ports: 1, backups: 0, slots: 1, requirement: 'Tài khoản đã xác minh' },
  { id: 'free-dev', name: 'STA Cloud Free DEV', cpu: 100, ram: 1024, disk: 3072, credit: 9990, days: 5, renewalDays: 4, ports: 2, backups: 0, slots: 1, requirement: 'Tài khoản đã xác minh' },
  { id: 'booster-discord', name: 'Booster Discord', cpu: 150, ram: 3072, disk: 5120, credit: 50000, days: 15, renewalDays: 10, ports: 2, backups: 1, slots: 2, requirement: 'Boost Discord rồi tạo ticket nhận 50.000 Credit để tạo máy chủ' },
  { id: 'linux-free', name: 'Linux Free', cpu: 100, ram: 512, disk: 3072, credit: 9990, days: 3, renewalDays: 5, ports: 1, backups: 0, slots: 1, requirement: 'Tài khoản đã xác minh' },
] as const;

export const donaterPlan = {
  id: 'donater', name: 'STA Cloud Free cho Donater 200k trở lên',
  cpu: 200, ram: 4096, disk: 5120, credit: 200000, days: 15,
  renewalDays: 10, ports: 2, backups: 1, slots: 2,
  requirement: 'Dành cho user đã donate trên 200.000 VNĐ. Gia hạn 0đ như Node Test.',
} as const;

export function resourceSpecs(plan: { cpu: number; ram: number; disk: number }) {
  return [`${plan.cpu}% CPU`, `${plan.ram} MB RAM`, `${plan.disk} MB ổ đĩa`];
}

export function communitySpecs(plan: (typeof freePlans)[number] | typeof donaterPlan) {
  return [...resourceSpecs(plan), `${plan.ports} cổng`, `${plan.slots} suất server tối đa`, `Gia hạn tối đa ${plan.renewalDays} ngày`];
}
