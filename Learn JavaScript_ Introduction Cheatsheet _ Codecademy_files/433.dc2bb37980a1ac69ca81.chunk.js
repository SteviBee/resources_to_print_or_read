(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[433],{"4a6q":function(t,e,n){"use strict";n.d(e,"b",(function(){return useSetDatadogContext})),n.d(e,"a",(function(){return addFeaturesToDatadog}));var o=n("4rkN"),u=n("q1tI"),a=n("/MKj"),c=n("raiL");function useSetDatadogContext(){const t=Object(a.useSelector)(c.a);Object(u.useEffect)((()=>{addFeaturesToDatadog(t)}),[t])}const addFeaturesToDatadog=t=>{const e=t.reduce(((t,e)=>(t[e]=!0,t)),{});o.a.addRumGlobalContext("feature_flags",e)}}}]);
//# sourceMappingURL=433.dc2bb37980a1ac69ca81.chunk.js.map