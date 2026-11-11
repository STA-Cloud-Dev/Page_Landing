import { sitePath } from '@/lib/site-path';

export interface DatacenterLocation {
  id: string;
  name: string;
  city: string;
  country: string;
  flagSrc: string;
  basePing: number;
  speed: string;
  shield: string;
  availability: string;
  status: 'optimal' | 'stable' | 'paused' | 'planned';
  description: string;
  lat: number;
  lng: number;
  svgX: number;
  svgY: number;
  zoomLevel: number;
  color: string;
  countryCode: string;
  labelOffsetX: number;
  labelOffsetY: number;
}

// Oracle commercial public regions, checked 2026-11-11.
// Government, sovereign and partner database-only realms are not VPS retail regions.
export const oracleRegionsSource = 'https://www.oracle.com/cloud/public-cloud-regions/';
export const oracleRegionRows = [
  {
    "name": "US East (Ashburn)",
    "country": "United States",
    "flag": "us",
    "countryCode": "USA",
    "lat": 39.04,
    "lng": -77.49,
    "basePing": 210,
    "planned": false
  },
  {
    "name": "US Midwest (Chicago)",
    "country": "United States",
    "flag": "us",
    "countryCode": "USA",
    "lat": 41.88,
    "lng": -87.63,
    "basePing": 210,
    "planned": false
  },
  {
    "name": "US West (Phoenix)",
    "country": "United States",
    "flag": "us",
    "countryCode": "USA",
    "lat": 33.45,
    "lng": -112.07,
    "basePing": 210,
    "planned": false
  },
  {
    "name": "US West (San Jose)",
    "country": "United States",
    "flag": "us",
    "countryCode": "USA",
    "lat": 37.34,
    "lng": -121.89,
    "basePing": 210,
    "planned": false
  },
  {
    "name": "Canada Southeast (Montreal)",
    "country": "Canada",
    "flag": "ca",
    "countryCode": "CAN",
    "lat": 45.5,
    "lng": -73.57,
    "basePing": 250,
    "planned": false
  },
  {
    "name": "Canada Southeast (Toronto)",
    "country": "Canada",
    "flag": "ca",
    "countryCode": "CAN",
    "lat": 43.65,
    "lng": -79.38,
    "basePing": 250,
    "planned": false
  },
  {
    "name": "Mexico Central (Querétaro)",
    "country": "Mexico",
    "flag": "mx",
    "countryCode": "MEX",
    "lat": 20.59,
    "lng": -100.39,
    "basePing": 250,
    "planned": false
  },
  {
    "name": "Mexico Northeast (Monterrey)",
    "country": "Mexico",
    "flag": "mx",
    "countryCode": "MEX",
    "lat": 25.69,
    "lng": -100.32,
    "basePing": 250,
    "planned": false
  },
  {
    "name": "Brazil East (São Paulo)",
    "country": "Brazil",
    "flag": "br",
    "countryCode": "BRA",
    "lat": -23.55,
    "lng": -46.63,
    "basePing": 320,
    "planned": false
  },
  {
    "name": "Brazil Southeast (Vinhedo)",
    "country": "Brazil",
    "flag": "br",
    "countryCode": "BRA",
    "lat": -23.03,
    "lng": -46.98,
    "basePing": 320,
    "planned": false
  },
  {
    "name": "Chile Central (Santiago)",
    "country": "Chile",
    "flag": "cl",
    "countryCode": "CHL",
    "lat": -33.45,
    "lng": -70.67,
    "basePing": 330,
    "planned": false
  },
  {
    "name": "Chile West (Valparaiso)",
    "country": "Chile",
    "flag": "cl",
    "countryCode": "CHL",
    "lat": -33.05,
    "lng": -71.62,
    "basePing": 330,
    "planned": false
  },
  {
    "name": "Colombia Central (Bogota)",
    "country": "Colombia",
    "flag": "co",
    "countryCode": "COL",
    "lat": 4.71,
    "lng": -74.07,
    "basePing": 300,
    "planned": false
  },
  {
    "name": "France Central (Paris)",
    "country": "France",
    "flag": "fr",
    "countryCode": "FRA",
    "lat": 48.86,
    "lng": 2.35,
    "basePing": 200,
    "planned": false
  },
  {
    "name": "France South (Marseille)",
    "country": "France",
    "flag": "fr",
    "countryCode": "FRA",
    "lat": 43.3,
    "lng": 5.37,
    "basePing": 200,
    "planned": false
  },
  {
    "name": "Germany Central (Frankfurt)",
    "country": "Germany",
    "flag": "de",
    "countryCode": "DEU",
    "lat": 50.11,
    "lng": 8.68,
    "basePing": 190,
    "planned": false
  },
  {
    "name": "Italy Northwest (Milan)",
    "country": "Italy",
    "flag": "it",
    "countryCode": "ITA",
    "lat": 45.46,
    "lng": 9.19,
    "basePing": 200,
    "planned": false
  },
  {
    "name": "Italy North (Turin)",
    "country": "Italy",
    "flag": "it",
    "countryCode": "ITA",
    "lat": 45.07,
    "lng": 7.69,
    "basePing": 200,
    "planned": false
  },
  {
    "name": "Netherlands Northwest (Amsterdam)",
    "country": "Netherlands",
    "flag": "nl",
    "countryCode": "NLD",
    "lat": 52.37,
    "lng": 4.9,
    "basePing": 200,
    "planned": false
  },
  {
    "name": "Serbia Central (Jovanovac)",
    "country": "Serbia",
    "flag": "rs",
    "countryCode": "SRB",
    "lat": 44.0,
    "lng": 20.9,
    "basePing": 195,
    "planned": false
  },
  {
    "name": "Spain Central (Madrid)",
    "country": "Spain",
    "flag": "es",
    "countryCode": "ESP",
    "lat": 40.42,
    "lng": -3.7,
    "basePing": 220,
    "planned": false
  },
  {
    "name": "Spain Central 2 (Madrid)",
    "country": "Spain",
    "flag": "es",
    "countryCode": "ESP",
    "lat": 40.42,
    "lng": -3.7,
    "basePing": 220,
    "planned": false
  },
  {
    "name": "Sweden Central (Stockholm)",
    "country": "Sweden",
    "flag": "se",
    "countryCode": "SWE",
    "lat": 59.33,
    "lng": 18.07,
    "basePing": 215,
    "planned": false
  },
  {
    "name": "Switzerland North (Zurich)",
    "country": "Switzerland",
    "flag": "ch",
    "countryCode": "CHE",
    "lat": 47.38,
    "lng": 8.54,
    "basePing": 200,
    "planned": false
  },
  {
    "name": "UK South (London)",
    "country": "United Kingdom",
    "flag": "gb",
    "countryCode": "GBR",
    "lat": 51.51,
    "lng": -0.13,
    "basePing": 210,
    "planned": false
  },
  {
    "name": "UK West (Newport)",
    "country": "United Kingdom",
    "flag": "gb",
    "countryCode": "GBR",
    "lat": 51.58,
    "lng": -3.0,
    "basePing": 210,
    "planned": false
  },
  {
    "name": "Israel Central (Jerusalem)",
    "country": "Israel",
    "flag": "il",
    "countryCode": "ISR",
    "lat": 31.77,
    "lng": 35.21,
    "basePing": 180,
    "planned": false
  },
  {
    "name": "Kenya",
    "country": "Kenya",
    "flag": "ke",
    "countryCode": "KEN",
    "lat": -0.02,
    "lng": 37.91,
    "basePing": 230,
    "planned": true
  },
  {
    "name": "Morocco West (Casablanca)",
    "country": "Morocco",
    "flag": "ma",
    "countryCode": "MAR",
    "lat": 33.57,
    "lng": -7.59,
    "basePing": 240,
    "planned": false
  },
  {
    "name": "Morocco 2",
    "country": "Morocco",
    "flag": "ma",
    "countryCode": "MAR",
    "lat": 31.79,
    "lng": -7.09,
    "basePing": 240,
    "planned": true
  },
  {
    "name": "Saudi Arabia West (Jeddah)",
    "country": "Saudi Arabia",
    "flag": "sa",
    "countryCode": "SAU",
    "lat": 21.49,
    "lng": 39.19,
    "basePing": 150,
    "planned": false
  },
  {
    "name": "Saudi Arabia Central (Riyadh)",
    "country": "Saudi Arabia",
    "flag": "sa",
    "countryCode": "SAU",
    "lat": 24.71,
    "lng": 46.68,
    "basePing": 150,
    "planned": false
  },
  {
    "name": "South Africa Central (Johannesburg)",
    "country": "South Africa",
    "flag": "za",
    "countryCode": "ZAF",
    "lat": -26.2,
    "lng": 28.05,
    "basePing": 240,
    "planned": false
  },
  {
    "name": "UAE East (Dubai)",
    "country": "United Arab Emirates",
    "flag": "ae",
    "countryCode": "ARE",
    "lat": 25.2,
    "lng": 55.27,
    "basePing": 130,
    "planned": false
  },
  {
    "name": "UAE Central (Abu Dhabi)",
    "country": "United Arab Emirates",
    "flag": "ae",
    "countryCode": "ARE",
    "lat": 24.45,
    "lng": 54.38,
    "basePing": 130,
    "planned": false
  },
  {
    "name": "Australia East (Sydney)",
    "country": "Australia",
    "flag": "au",
    "countryCode": "AUS",
    "lat": -33.87,
    "lng": 151.21,
    "basePing": 135,
    "planned": false
  },
  {
    "name": "Australia Southeast (Melbourne)",
    "country": "Australia",
    "flag": "au",
    "countryCode": "AUS",
    "lat": -37.81,
    "lng": 144.96,
    "basePing": 135,
    "planned": false
  },
  {
    "name": "India West (Mumbai)",
    "country": "India",
    "flag": "in",
    "countryCode": "IND",
    "lat": 19.08,
    "lng": 72.88,
    "basePing": 85,
    "planned": false
  },
  {
    "name": "India South (Hyderabad)",
    "country": "India",
    "flag": "in",
    "countryCode": "IND",
    "lat": 17.39,
    "lng": 78.49,
    "basePing": 85,
    "planned": false
  },
  {
    "name": "Indonesia North (Batam)",
    "country": "Indonesia",
    "flag": "id",
    "countryCode": "IDN",
    "lat": 1.05,
    "lng": 104.03,
    "basePing": 45,
    "planned": false
  },
  {
    "name": "Japan East (Tokyo)",
    "country": "Japan",
    "flag": "jp",
    "countryCode": "JPN",
    "lat": 35.68,
    "lng": 139.69,
    "basePing": 75,
    "planned": false
  },
  {
    "name": "Japan Central (Osaka)",
    "country": "Japan",
    "flag": "jp",
    "countryCode": "JPN",
    "lat": 34.69,
    "lng": 135.5,
    "basePing": 75,
    "planned": false
  },
  {
    "name": "Malaysia West (Kulai)",
    "country": "Malaysia",
    "flag": "my",
    "countryCode": "MYS",
    "lat": 1.66,
    "lng": 103.6,
    "basePing": 35,
    "planned": false
  },
  {
    "name": "Singapore (Singapore)",
    "country": "Singapore",
    "flag": "sg",
    "countryCode": "SGP",
    "lat": 1.35,
    "lng": 103.82,
    "basePing": 30,
    "planned": false
  },
  {
    "name": "Singapore West (Singapore)",
    "country": "Singapore",
    "flag": "sg",
    "countryCode": "SGP",
    "lat": 1.35,
    "lng": 103.82,
    "basePing": 30,
    "planned": false
  },
  {
    "name": "South Korea Central (Seoul)",
    "country": "South Korea",
    "flag": "kr",
    "countryCode": "KOR",
    "lat": 37.57,
    "lng": 126.98,
    "basePing": 65,
    "planned": false
  },
  {
    "name": "South Korea North (Chuncheon)",
    "country": "South Korea",
    "flag": "kr",
    "countryCode": "KOR",
    "lat": 37.88,
    "lng": 127.73,
    "basePing": 65,
    "planned": false
  }
];
const oracleLocations: DatacenterLocation[] = oracleRegionRows.map((region, index) => ({
  id: `oci-${index + 1}`,
  name: region.name,
  city: region.name.includes('(') ? region.name.split('(')[1].replace(')', '') : 'Thành phố chưa công bố',
  country: region.country,
  flagSrc: sitePath(`/flags/oracle-${region.flag}.svg`),
  basePing: region.basePing,
  speed: 'Theo cấu hình VPS',
  shield: 'Bảo vệ mạng theo dịch vụ',
  availability: region.planned ? 'Oracle công bố: Sắp mở' : 'Oracle đang hoạt động • Xác nhận slot qua ticket',
  status: region.planned ? 'planned' : 'stable',
  description: `${region.name} thuộc danh mục region thương mại Oracle Cloud. ${region.planned ? 'Khu vực sắp mở, chưa nhận đặt VPS tại đây.' : 'STA Cloud xác nhận khả năng cung cấp, cấu hình và giá theo từng yêu cầu.'} Vị trí đánh dấu là vị trí thành phố/khu vực minh họa, không phải địa chỉ datacenter.`,
  lat: region.lat, lng: region.lng,
  svgX: (region.lng + 180) * 1000 / 360,
  svgY: (90 - region.lat) * 500 / 180,
  zoomLevel: 3.2,
  color: region.planned ? '#fbbf24' : '#38bdf8',
  countryCode: region.countryCode,
  labelOffsetX: 8, labelOffsetY: -14,
}));
export const allDatacenterLocations: DatacenterLocation[] = [
  {
    id: 'vn-sgn',
    name: 'Việt Nam (TP. Hồ Chí Minh)',
    city: 'TP. Hồ Chí Minh',
    country: 'Việt Nam',
    flagSrc: sitePath('/flags/vietnam.svg?v=20261024-2'),
    basePing: 4,
    speed: '1 Gbps Dedicated Uplink',
    shield: 'Domestic Firewall & VNIX Filter',
    availability: 'Only Paid (Nội Địa)',
    status: 'optimal',
    description:
      'Khu vực hosting tại TP. Hồ Chí Minh, Việt Nam. Xác nhận cấu hình và slot qua ticket. Ping hiển thị là mô phỏng; độ trễ thực tế phụ thuộc nơi kết nối và nhà mạng.',
    lat: 10.8231,
    lng: 106.6297,
    svgX: (106.6297 + 180) * 1000 / 360,
    svgY: (90 - 10.8231) * 500 / 180,
    zoomLevel: 2.8,
    color: '#00f0ff',
    countryCode: 'VNM',
    labelOffsetX: 8,
    labelOffsetY: -5,
  },
  {
    id: 'vn-han',
    name: 'Việt Nam (Hà Nội)',
    city: 'Hà Nội',
    country: 'Việt Nam',
    flagSrc: sitePath('/flags/vietnam.svg?v=20261024-2'),
    basePing: 12,
    speed: '1 Gbps Dedicated Uplink',
    shield: 'Domestic Firewall & VNIX Filter',
    availability: 'Only Paid (Nội Địa)',
    status: 'optimal',
    description:
      'Khu vực hosting tại Hà Nội, Việt Nam. Xác nhận cấu hình và slot qua ticket. Ping hiển thị là mô phỏng; độ trễ thực tế phụ thuộc nơi kết nối và nhà mạng.',
    lat: 21.0285,
    lng: 105.8542,
    svgX: (105.8542 + 180) * 1000 / 360,
    svgY: (90 - 21.0285) * 500 / 180,
    zoomLevel: 2.8,
    color: '#00f0ff',
    countryCode: 'VNM',
    labelOffsetX: 8,
    labelOffsetY: -5,
  },
  {
    id: 'hk-01',
    name: 'HKG-01 (Hong Kong Route)',
    city: 'Hong Kong',
    country: 'Hong Kong',
    flagSrc: sitePath('/flags/hong-kong.svg?v=20261024-2'),
    basePing: 36,
    speed: '30 Gbps Shield',
    shield: 'Dedicated Shield AntiDDoS',
    availability: 'Proxy Paused (Hết slot)',
    status: 'paused',
    description:
      'Proxy Hong Kong dành cho kết nối quốc tế với lưu lượng Shield AntiDDoS riêng biệt. Hiện đã kín slot đăng ký mới.',
    lat: 22.32,
    lng: 114.17,
    svgX: 817.1,
    svgY: 188.0,
    zoomLevel: 2.8,
    color: '#fbbf24',
    countryCode: 'HKG',
    labelOffsetX: 8,
    labelOffsetY: -28,
  },
  ...oracleLocations,
];
export function randomSimulatedPing(basePing: number, random = Math.random): number {
  const spread = Math.max(2, Math.round(basePing * 0.12));
  return Math.max(1, basePing - spread + Math.floor(random() * (spread * 2 + 1)));
}
