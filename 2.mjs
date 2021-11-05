import * as c from "1.mjs"
class C{
}
for(let i=0;i<0x20;i++)
{
var a=new C();
 C.prototype.__proto__=c;
 a.ff();
}
