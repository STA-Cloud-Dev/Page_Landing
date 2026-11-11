import type { DatacenterLocation } from './network-regions';

export function clusterMapLocations(locations: DatacenterLocation[], zoom: number) {
  const clusters: Array<{ x: number; y: number; locations: DatacenterLocation[] }> = [];
  const radius = zoom >= 3 ? 0 : 38 / zoom;
  for (const location of locations) {
    const cluster = radius > 0 && clusters.find((item) =>
      item.locations.every((member) => member.countryCode !== 'VNM') &&
      location.countryCode !== 'VNM' &&
      Math.hypot(item.x - location.svgX, item.y - location.svgY) < radius);
    if (cluster) {
      cluster.locations.push(location);
      cluster.x = cluster.locations.reduce((sum, item) => sum + item.svgX, 0) / cluster.locations.length;
      cluster.y = cluster.locations.reduce((sum, item) => sum + item.svgY, 0) / cluster.locations.length;
    } else {
      clusters.push({ x: location.svgX, y: location.svgY, locations: [location] });
    }
  }
  return clusters;
}

export function filterMapLocations(locations: DatacenterLocation[], query: string, country: string) {
  const normalize = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/đ/g, 'd');
  const search = normalize(query.trim());
  return locations.filter((location) => (country === 'all' || location.countryCode === country) &&
    normalize(`${location.name} ${location.city} ${location.country}`).includes(search));
}
