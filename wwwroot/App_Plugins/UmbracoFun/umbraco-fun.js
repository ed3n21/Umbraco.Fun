const a = [
  {
    name: "Umbraco Fun Entrypoint",
    alias: "Umbraco.Fun.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-bfH9azzS.js")
  }
], n = [
  {
    name: "Umbraco Fun Dashboard",
    alias: "Umbraco.Fun.Dashboard",
    type: "dashboard",
    js: () => import("./dashboard.element-DPi-51zd.js"),
    meta: {
      label: "Example Dashboard",
      pathname: "example-dashboard"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Content"
      }
    ]
  }
], o = [
  ...a,
  ...n
];
export {
  o as manifests
};
//# sourceMappingURL=umbraco-fun.js.map
