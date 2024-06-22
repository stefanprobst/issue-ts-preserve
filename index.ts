async function check() {
	return import("./data.json", { with: { type: "json" } });
}
