const a = [
  {
    name: "Umbraco Fun Entrypoint",
    alias: "Umbraco.Fun.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-aMN5CR8h.js")
  }
], o = [
  {
    name: "Umbraco Example Dashboard",
    alias: "Umbraco.Example.Dashboard",
    type: "dashboard",
    js: () => import("./dashboard.element-DtIQVJs8.js"),
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
  },
  {
    name: "Umbraco Fun Dashboard",
    alias: "Umbraco.Fun.Dashboard",
    type: "dashboard",
    js: () => import("./dashboard.element.jokes-BgD9GKHU.js"),
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
