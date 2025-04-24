const a = [
  {
    name: "Umbraco Fun Entrypoint",
    alias: "Umbraco.Fun.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-DN0XslvA.js")
  }
], o = [
  {
    name: "Umbraco Example Dashboard",
    alias: "Umbraco.Example.Dashboard",
    type: "dashboard",
    js: () => import("./dashboard.element-DzTDT4Vo.js"),
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
    js: () => import("./dashboard.element.jokes-BtkdMn_N.js"),
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
