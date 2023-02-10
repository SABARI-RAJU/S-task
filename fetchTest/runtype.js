// import * as st from 'simple-runtypes';

const st=require("simple-runtypes");

const userRuntype = st.record({
    id: st.integer(),
    name: st.string(),
    email: st.optional(st.string())
});

console.log(st.use(userRuntype, {id: 1, name: 'matt'}));
// st.use(userRuntype, {id: 1, name: 'matt'})

