function ensureLight(lightType, properties,scene) {
  let existingLight = scene.children.find(child =>
    child instanceof lightType && child.position.equals(properties.position)
  );

  if (existingLight) {
    existingLight.color.setHex(properties.color);
    existingLight.intensity = properties.intensity;
    existingLight.distance = properties.distance;
    existingLight.castShadow = properties.castShadow;
  } else {
    const newLight = new lightType(properties.color, properties.intensity, properties.distance);
    newLight.position.set(properties.position.x, properties.position.y, properties.position.z);
    newLight.castShadow = properties.castShadow;
    scene.add(newLight);
  }
}
export default ensureLight;