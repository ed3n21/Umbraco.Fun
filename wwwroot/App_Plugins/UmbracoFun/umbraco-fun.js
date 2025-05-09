const a = [
  {
    name: "Umbraco Fun Entrypoint",
    alias: "Umbraco.Fun.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-DpsD4CHO.js")
  }
], o = [
  {
    name: "Umbraco Fun Dashboard",
    alias: "Umbraco.Fun.Dashboard",
    type: "dashboard",
    js: () => import("./dashboard.element.jokes-BHPpm_fb.js"),
    meta: {
      label: "Jokes Dashboard",
      pathname: "jokes-dashboard"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Content"
      }
    ]
  }
], n = [
  ...a,
  ...o
];
export {
  n as manifests
};
//# sourceMappingURL=umbraco-fun.js.map
