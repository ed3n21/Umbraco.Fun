export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Umbraco Fun Entrypoint",
    alias: "Umbraco.Fun.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint"),
  }
];
