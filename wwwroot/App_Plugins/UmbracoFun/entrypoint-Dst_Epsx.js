import { UMB_AUTH_CONTEXT as r } from "@umbraco-cms/backoffice/auth";
import { c as n } from "./services-CbZ9oLtH.js";
const g = (o, a) => {
  o.consumeContext(r, async (s) => {
    const e = s.getOpenApiConfiguration();
    n.setConfig({
      baseUrl: e.base,
      credentials: e.credentials
    }), n.interceptors.request.use(async (t, c) => {
      const i = await e.token();
      return t.headers.set("Authorization", `Bearer ${i}`), t;
    });
  });
};
export {
  g as onInit
};
//# sourceMappingURL=entrypoint-Dst_Epsx.js.map
