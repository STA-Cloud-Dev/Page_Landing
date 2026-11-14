// Price snapshot from the public ICS pricing API, checked 2026-11-14.
// Monthly Linux/base prices exclude 10% VAT, Windows licenses and optional extras.
export const oraclePricingSource = 'https://oci.ics.vn/cloud/pricing';
export const oraclePricingDate = '14/11/2026';
export const oraclePricingNote = 'Giá tham khảo theo tháng, chưa gồm VAT 10%, bản quyền Windows và dịch vụ bổ sung. VPS tiêu chuẩn dùng CPU Burstable 50%; gói GPU có cấu hình riêng. Sản phẩm do ICS cung cấp; STA Cloud giới thiệu thông tin. Mua trực tiếp tại oci.ics.vn hoặc liên hệ STA Cloud để được tư vấn.';
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
export const oracleGpuPackages = [
  {
    "name": "VM.GPU2.1",
    "cpu": "24 vCPU",
    "ram": "72GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 26102677.2,
    "gpu": "1 GPU NVIDIA Tesla P100 16GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "VM.GPU.A10.1",
    "cpu": "30 vCPU",
    "ram": "240GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 40294291.2,
    "gpu": "1 GPU NVIDIA A10 24GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "BM.GPU2.2",
    "cpu": "56 vCPU",
    "ram": "192GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 51060343.2,
    "gpu": "2 GPU NVIDIA Tesla P100 16GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "VM.GPU.A10.2",
    "cpu": "60 vCPU",
    "ram": "480GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 79443571.2,
    "gpu": "2 GPU NVIDIA A10 24GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "BM.GPU.A10.4",
    "cpu": "128 vCPU",
    "ram": "1024GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 157742131.2,
    "gpu": "4 GPU NVIDIA A10 24GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "BM.GPU.L40S.4",
    "cpu": "224 vCPU",
    "ram": "1024GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 275189971.2,
    "gpu": "4 GPU NVIDIA L40S 48GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "BM.GPU4.8",
    "cpu": "128 vCPU",
    "ram": "2048GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 478766227.2,
    "gpu": "8 GPU NVIDIA A100 40GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "BM.GPU3.8",
    "cpu": "104 vCPU",
    "ram": "768GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 478766227.2,
    "gpu": "8 GPU NVIDIA Tesla V100 16GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "BM.GPU.A100-v2.8",
    "cpu": "256 vCPU",
    "ram": "2048GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 627533491.2,
    "gpu": "8 GPU NVIDIA A100 80GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "BM.GPU.RTXPRO.8",
    "cpu": "288 vCPU",
    "ram": "3072GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 705832051.2,
    "gpu": "8 GPU NVIDIA RTX PRO 6000 96GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "BM.GPU.MI300X.8",
    "cpu": "224 vCPU",
    "ram": "2048GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 940727731.2,
    "gpu": "8 GPU AMD MI300X 192GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "BM.GPU.GB200.4",
    "cpu": "288 vCPU",
    "ram": "960GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 1253921971.2,
    "gpu": "4 GPU NVIDIA GB200 192GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "BM.GPU.MI355X.8",
    "cpu": "256 vCPU",
    "ram": "3072GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 1347880243.2,
    "gpu": "8 GPU AMD MI355X 288GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "BM.GPU.GB300.4",
    "cpu": "288 vCPU",
    "ram": "960GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 1410519091.2,
    "gpu": "4 GPU NVIDIA GB300 278GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "BM.GPU.H200.8",
    "cpu": "224 vCPU",
    "ram": "3072GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 1567116211.2,
    "gpu": "8 GPU NVIDIA H200 141GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "BM.GPU.H100.8",
    "cpu": "224 vCPU",
    "ram": "2048GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 1567116211.2,
    "gpu": "8 GPU NVIDIA H100 80GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "BM.GPU.B200.8",
    "cpu": "256 vCPU",
    "ram": "4096GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 2193504691.2,
    "gpu": "8 GPU NVIDIA B200 180GB",
    "bandwidth": "Dedicated AI infrastructure"
  },
  {
    "name": "BM.GPU.B300.8",
    "cpu": "256 vCPU",
    "ram": "4096GB RAM",
    "storage": "1024GB SSD Storage",
    "monthlyVnd": 2350101811.2,
    "gpu": "8 GPU NVIDIA B300 263GB",
    "bandwidth": "Dedicated AI infrastructure"
  }
];
export const oracleServicePlans = [...oracleVpsPackages.map(plan => ({ ...plan, gpu: '' })), ...oracleGpuPackages].map((plan) => ({
  id: `oracle-${plan.name.toLowerCase().replaceAll(' ', '-')}`,
  category: 'vps',
  name: `ICS Oracle ${plan.name}`,
  badge: plan.gpu ? 'ICS • Oracle GPU' : 'ICS • Oracle VPS',
  status: 'consult',
  price: formatOraclePrice(plan.monthlyVnd),
  period: 'Tháng • chưa VAT 10%',
  description: 'Sản phẩm Oracle Cloud do ICS cung cấp, được STA Cloud giới thiệu. Liên hệ ICS để mua trực tiếp hoặc STA Cloud để được tư vấn.',
  specs: [plan.cpu, plan.ram, plan.storage, ...(plan.gpu ? [plan.gpu, 'Hạ tầng AI chuyên dụng'] : ['CPU Burstable 50%', 'Băng thông 300 Mbps'])],
  upsizeAvailable: true,
  upsizeNotes: oraclePricingNote,
  warning: 'Giá tham khảo từ ICS; xác nhận cấu hình, khu vực và tổng thanh toán với ICS.',
  ctaText: 'Xem & mua tại ICS',
}));
