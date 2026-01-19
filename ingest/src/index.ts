import mqtt from "mqtt";

const brokerUrl = process.env.MQTT_URL || "mqtt://mosquitto:1883";

const client = mqtt.connect(brokerUrl);

client.on("connect", () => {
  console.log(`Ingest worker connected to ${brokerUrl}`);
});

client.on("error", (error) => {
  console.error("MQTT connection error", error);
});

process.on("SIGINT", () => {
  console.log("Ingest worker shutting down...");
  client.end(true, () => process.exit(0));
});
