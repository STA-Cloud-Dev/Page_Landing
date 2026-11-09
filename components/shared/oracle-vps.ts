// Price snapshot from the public ICS pricing API, checked 2026-11-09.
// Monthly Linux/base prices exclude 10% VAT, Windows licenses and optional extras.
export const oraclePricingSource = 'https://oci.ics.vn/cloud/pricing';
export const oraclePricingDate = '09/11/2026';
export const oraclePricingNote = 'Giá tham khảo theo tháng, chưa gồm VAT 10%, bản quyền Windows và dịch vụ bổ sung. CPU Burstable 50%; xác nhận khu vực, slot và báo giá qua ticket trước khi đặt mua.';
export const oracleVpsPackages = [
  {
    "name": "Starter 1",
    "cpu": "2 vCPU",
    "ram": "1GB RAM",
    "storage": "20GB SSD Storage",
    "monthlyVnd": 355132.38
  },
  {
    "name": "Starter 2",
    "cpu": "2 vCPU",
    "ram": "2GB RAM",
    "storage": "20GB SSD Storage",
    "monthlyVnd": 394281.66
  },
  {
    "name": "Starter 3",
    "cpu": "2 vCPU",
    "ram": "4GB RAM",
    "storage": "20GB SSD Storage",
    "monthlyVnd": 472580.22
  },
  {
    "name": "Starter 4",
    "cpu": "2 vCPU",
    "ram": "6GB RAM",
    "storage": "20GB SSD Storage",
    "monthlyVnd": 550878.78
  },
  {
    "name": "Starter 5",
    "cpu": "4 vCPU",
    "ram": "8GB RAM",
    "storage": "40GB SSD Storage",
    "monthlyVnd": 945160.44
  },
  {
    "name": "Professional 1",
    "cpu": "4 vCPU",
    "ram": "6GB RAM",
    "storage": "100GB SSD Storage",
    "monthlyVnd": 933952.38
  },
  {
    "name": "Professional 2",
    "cpu": "6 vCPU",
    "ram": "8GB RAM",
    "storage": "150GB SSD Storage",
    "monthlyVnd": 1361779.29
  },
  {
    "name": "Professional 3",
    "cpu": "8 vCPU",
    "ram": "10GB RAM",
    "storage": "150GB SSD Storage",
    "monthlyVnd": 1733697.45
  },
  {
    "name": "Professional 4",
    "cpu": "8 vCPU",
    "ram": "12GB RAM",
    "storage": "150GB SSD Storage",
    "monthlyVnd": 1811996.01
  },
  {
    "name": "Professional 5",
    "cpu": "8 vCPU",
    "ram": "16GB RAM",
    "storage": "200GB SSD Storage",
    "monthlyVnd": 2024501.88
  },
  {
    "name": "Professional 6",
    "cpu": "8 vCPU",
    "ram": "32GB RAM",
    "storage": "200GB SSD Storage",
    "monthlyVnd": 2650890.36
  },
  {
    "name": "Enterprise 1",
    "cpu": "10 vCPU",
    "ram": "16GB RAM",
    "storage": "250GB SSD Storage",
    "monthlyVnd": 2374030.23
  },
  {
    "name": "Enterprise 2",
    "cpu": "12 vCPU",
    "ram": "16GB RAM",
    "storage": "250GB SSD Storage",
    "monthlyVnd": 2667649.83
  },
  {
    "name": "Enterprise 3",
    "cpu": "12 vCPU",
    "ram": "18GB RAM",
    "storage": "500GB SSD Storage",
    "monthlyVnd": 3025492.14
  },
  {
    "name": "Enterprise 4",
    "cpu": "16 vCPU",
    "ram": "32GB RAM",
    "storage": "500GB SSD Storage",
    "monthlyVnd": 4160821.26
  },
  {
    "name": "Enterprise 5",
    "cpu": "16 vCPU",
    "ram": "32GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 4746744.96
  },
  {
    "name": "Enterprise 6",
    "cpu": "24 vCPU",
    "ram": "32GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 5921223.36
  },
  {
    "name": "Enterprise 7",
    "cpu": "36 vCPU",
    "ram": "64GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 8935717.92
  },
  {
    "name": "Enterprise 8",
    "cpu": "48 vCPU",
    "ram": "128GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 13202989.44
  }
];
export function formatOraclePrice(value: number) {
  return `${Math.round(value).toLocaleString('vi-VN')} VNĐ`;
}
export const oracleServicePlans = oracleVpsPackages.map((plan) => ({
  id: `oracle-${plan.name.toLowerCase().replaceAll(' ', '-')}`,
  category: 'vps',
  name: `STA Oracle ${plan.name}`,
  badge: 'Oracle Cloud • Chưa VAT',
  status: 'consult',
  price: formatOraclePrice(plan.monthlyVnd),
  period: 'Tháng • chưa VAT 10%',
  description: 'VPS Oracle Cloud cho website, ứng dụng và dịch vụ tự quản trị. Khu vực triển khai được xác nhận theo nhu cầu và tài nguyên sẵn có.',
  specs: [plan.cpu, plan.ram, plan.storage, 'CPU Burstable 50%', 'Băng thông 300 Mbps'],
  upsizeAvailable: true,
  upsizeNotes: oraclePricingNote,
  warning: 'Liên hệ STA Cloud để xác nhận cấu hình và tổng chi phí trước khi thanh toán.',
  ctaText: 'Tư vấn VPS Oracle',
}));
