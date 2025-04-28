import { UMB_AUTH_CONTEXT as a } from "@umbraco-cms/backoffice/auth";
import { c as t } from "./services-CbZ9oLtH.js";
const m = (e, s) => {
  e.consumeContext(a, async (i) => {
    const o = i.getOpenApiConfiguration();
    t.setConfig({
      baseUrl: o.base,
      credentials: o.credentials
    }), t.interceptors.request.use(async (n, c) => {
      const r = await o.token();
      return n.headers.set("Authorization", `Bearer ${r}`), n;
    });
  });
}, p = (e, s) => {
  console.log("Goodbye from my extension 👋");
};
export {
  m as onInit,
  p as onUnload
};
//# sourceMappingURL=entrypoint-DpsD4CHO.js.map
