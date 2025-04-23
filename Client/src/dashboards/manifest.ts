export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Umbraco Example Dashboard",
    alias: "Umbraco.Example.Dashboard",
    type: 'dashboard',
    js: () => import("./dashboard.element"),
    meta: {
      label: "Example Dashboard",
      pathname: "example-dashboard"
    },
    conditions: [
      {
        alias: 'Umb.Condition.SectionAlias',
        match: 'Umb.Section.Content',
      }
    ],
  },
  {
    name: 'Umbraco Fun Dashboard',
    alias: 'Umbraco.Fun.Dashboard',
    type: 'dashboard',
    js: () => import("./dashboard.element.jokes"),
    meta: {
      label: 'Jokes Dashboard',
      pathname: 'jokes-dashboard'
    },
    conditions: [
      {
        alias: 'Umb.Condition.SectionAlias',
        match: 'Umb.Section.Content',
      }
    ]
  }
];
